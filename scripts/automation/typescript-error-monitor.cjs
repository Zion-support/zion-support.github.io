#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class TypeScriptErrorMonitor {
    constructor() {
        this.projectRoot = process.cwd();
        this.logsDir = path.join(this.projectRoot, 'logs');
        this.reportsDir = path.join(this.projectRoot, 'reports');
        this.ensureDirectories();
    }

    ensureDirectories() {
        if (!fs.existsSync(this.logsDir)) {
            fs.mkdirSync(this.logsDir, { recursive: true });
        }
        if (!fs.existsSync(this.reportsDir)) {
            fs.mkdirSync(this.reportsDir, { recursive: true });
        }
    }

    async checkTypeScriptErrors() {
        return new Promise((resolve, reject) => {
            console.log('Running TypeScript check...');
            
            const tsc = spawn('npx', ['tsc', '--noEmit'], {
                cwd: this.projectRoot,
                stdio: ['pipe', 'pipe', 'pipe'],
                shell: true
            });

            let output = '';
            let errorOutput = '';

            tsc.stdout.on('data', (data) => {
                output += data.toString();
            });

            tsc.stderr.on('data', (data) => {
                errorOutput += data.toString();
            });

            tsc.on('close', (code) => {
                console.log(`TypeScript process exited with code: ${code}`);
                console.log(`stdout length: ${output.length}, stderr length: ${errorOutput.length}`);
                
                if (code === 0) {
                    console.log('✅ No TypeScript errors found');
                    resolve({ hasErrors: false, errors: [] });
                } else {
                    console.log('❌ TypeScript errors found');
                    // Check both stdout and stderr for errors
                    const allOutput = output + errorOutput;
                    const errors = this.parseTypeScriptErrors(allOutput);
                    console.log(`Parsed ${errors.length} TypeScript errors`);
                    resolve({ hasErrors: true, errors });
                }
            });

            tsc.on('error', (error) => {
                console.error('Error running TypeScript check:', error);
                reject(error);
            });
        });
    }

    parseTypeScriptErrors(output) {
        const errorLines = output.split('\n').filter(line => line.trim());
        const errors = [];
        
        console.log('Raw error output:', output.substring(0, 500)); // Debug output
        
        for (const line of errorLines) {
            // Parse TypeScript error format: file(line,column): error TS1234: message
            // Handle both formats:
            // file(line,column): error TS1234: message
            // file(line,column): error TS1234: message (with possible newlines)
            const match = line.match(/([^(]+)\((\d+),(\d+)\):\s*error\s+TS(\d+):\s*(.+)/);
            if (match) {
                errors.push({
                    file: match[1].trim(),
                    line: parseInt(match[2]),
                    column: parseInt(match[3]),
                    code: `TS${match[4]}`,
                    message: match[5].trim()
                });
            } else {
                // Try alternative format for multi-line errors
                const altMatch = line.match(/([^(]+)\((\d+),(\d+)\):\s*error\s+TS(\d+)/);
                if (altMatch) {
                    // Look for the message on the next line
                    const lineIndex = errorLines.indexOf(line);
                    const nextLine = errorLines[lineIndex + 1];
                    if (nextLine && nextLine.trim()) {
                        errors.push({
                            file: altMatch[1].trim(),
                            line: parseInt(altMatch[2]),
                            column: parseInt(altMatch[3]),
                            code: `TS${altMatch[4]}`,
                            message: nextLine.trim()
                        });
                    }
                }
            }
        }
        
        console.log(`Parsed ${errors.length} errors from output`);
        return errors;
    }

    async fixTypeScriptError(error) {
        try {
            const filePath = path.resolve(this.projectRoot, error.file);
            
            if (!fs.existsSync(filePath)) {
                console.log(`File not found: ${filePath}`);
                return false;
            }

            const content = fs.readFileSync(filePath, 'utf8');
            const lines = content.split('\n');
            
            if (error.line > lines.length) {
                console.log(`Line ${error.line} not found in file`);
                return false;
            }

            const fixed = this.fixSpecificError(error, lines);
            if (fixed) {
                fs.writeFileSync(filePath, lines.join('\n'));
                console.log(`✅ Fixed ${error.code} in ${error.file}:${error.line}`);
                return true;
            }
            
            return false;
        } catch (err) {
            console.error(`Error fixing ${error.code}:`, err);
            return false;
        }
    }

    fixSpecificError(error, lines) {
        const lineIndex = error.line - 1;
        const currentLine = lines[lineIndex];
        
        switch (error.code) {
            case 'TS1005':
                return this.fixMissingSemicolon(lines, lineIndex, currentLine);
            case 'TS1128':
                return this.fixDeclarationOrStatementExpected(lines, lineIndex, currentLine);
            case 'TS1131':
                return this.fixPropertyOrSignatureExpected(lines, lineIndex, currentLine);
            case 'TS1136':
                return this.fixPropertyAssignmentExpected(lines, lineIndex, currentLine);
            case 'TS2307':
                return this.fixModuleImportError(lines, lineIndex, currentLine);
            case 'TS2339':
                return this.fixPropertyError(lines, lineIndex, currentLine);
            case 'TS2345':
                return this.fixTypeMismatchError(lines, lineIndex, currentLine);
            case 'TS7006':
                return this.fixImplicitAnyError(lines, lineIndex, currentLine);
            case 'TS2304':
                return this.fixCannotFindNameError(lines, lineIndex, currentLine);
            case 'TS2322':
                return this.fixTypeAssignmentError(lines, lineIndex, currentLine);
            default:
                return this.fixGenericTypeScriptError(lines, lineIndex, currentLine, error);
        }
    }

    fixMissingSemicolon(lines, lineIndex, currentLine) {
        if (currentLine.trim() && !currentLine.trim().endsWith(';') && !currentLine.trim().endsWith('{') && !currentLine.trim().endsWith('}')) {
            lines[lineIndex] = currentLine + ';';
            return true;
        }
        return false;
    }

    fixDeclarationOrStatementExpected(lines, lineIndex, currentLine) {
        // Check for malformed braces or syntax issues
        const trimmed = currentLine.trim();
        
        // Fix extra closing braces
        if (trimmed.includes('}}}}}}}}}}}}}}}}}}}}')) {
            lines[lineIndex] = currentLine.replace(/}}}}}}}}}}}}}}}}}}}}/g, '');
            return true;
        }
        
        // Fix missing opening brace
        if (trimmed.includes('}') && !trimmed.includes('{')) {
            // Look for the matching opening
            for (let i = lineIndex - 1; i >= 0; i--) {
                if (lines[i].includes('{')) {
                    // Found opening brace, this line should be fine
                    return false;
                }
            }
            // No opening brace found, remove the closing one
            lines[lineIndex] = currentLine.replace(/}/g, '');
            return true;
        }
        
        return false;
    }

    fixPropertyOrSignatureExpected(lines, lineIndex, currentLine) {
        // Usually means missing comma or semicolon in object/interface
        if (currentLine.includes('}') && !currentLine.includes(',')) {
            // Check if previous line ends with comma
            if (lineIndex > 0) {
                const prevLine = lines[lineIndex - 1];
                if (prevLine.trim() && !prevLine.trim().endsWith(',') && !prevLine.trim().endsWith('{')) {
                    lines[lineIndex - 1] = prevLine + ',';
                    return true;
                }
            }
        }
        return false;
    }

    fixPropertyAssignmentExpected(lines, lineIndex, currentLine) {
        // Usually means missing colon in object property
        if (currentLine.includes('=') && !currentLine.includes(':')) {
            const parts = currentLine.split('=');
            if (parts.length === 2) {
                lines[lineIndex] = parts[0].trim() + ': ' + parts[1];
                return true;
            }
        }
        return false;
    }

    fixModuleImportError(lines, lineIndex, currentLine) {
        // Try to resolve import path issues
        const importMatch = currentLine.match(/from\s+['"]([^'"]+)['"]/);
        if (importMatch) {
            const importPath = importMatch[1];
            const resolvedPath = this.resolveImportPath(importPath);
            if (resolvedPath) {
                lines[lineIndex] = currentLine.replace(importPath, resolvedPath);
                return true;
            }
        }
        return false;
    }

    resolveImportPath(importPath) {
        // Simple path resolution logic
        if (importPath.startsWith('./') || importPath.startsWith('../')) {
            return importPath;
        }
        
        // Try common extensions
        const extensions = ['.js', '.ts', '.tsx', '.jsx'];
        for (const ext of extensions) {
            const fullPath = path.join(this.projectRoot, 'src', importPath + ext);
            if (fs.existsSync(fullPath)) {
                return `./${importPath}${ext}`;
            }
        }
        
        return null;
    }

    fixPropertyError(lines, lineIndex, currentLine) {
        // Try to add missing property or fix property access
        if (currentLine.includes('.')) {
            const parts = currentLine.split('.');
            if (parts.length > 1) {
                const lastPart = parts[parts.length - 1];
                if (lastPart.includes('(')) {
                    // Method call, might be missing
                    return false;
                } else {
                    // Property access, might need to be defined
                    return false;
                }
            }
        }
        return false;
    }

    fixTypeMismatchError(lines, lineIndex, currentLine) {
        // Try to fix type mismatches by adding type assertions
        if (currentLine.includes('=') && !currentLine.includes('as') && !currentLine.includes('<')) {
            // Simple type assertion fix
            const parts = currentLine.split('=');
            if (parts.length === 2) {
                const value = parts[1].trim();
                if (value.includes('"') || value.includes("'")) {
                    lines[lineIndex] = parts[0].trim() + ' = ' + value + ' as string';
                    return true;
                } else if (value.match(/^\d+$/)) {
                    lines[lineIndex] = parts[0].trim() + ' = ' + value + ' as number';
                    return true;
                }
            }
        }
        return false;
    }

    fixImplicitAnyError(lines, lineIndex, currentLine) {
        // Add explicit any type to function parameters
        if (currentLine.includes('function') || currentLine.includes('=>')) {
            if (currentLine.includes('(') && currentLine.includes(')')) {
                const paramMatch = currentLine.match(/\(([^)]+)\)/);
                if (paramMatch) {
                    const params = paramMatch[1];
                    if (params && !params.includes(':')) {
                        const newParams = params.split(',').map(p => p.trim() + ': any').join(', ');
                        lines[lineIndex] = currentLine.replace(params, newParams);
                        return true;
                    }
                }
            }
        }
        return false;
    }

    fixCannotFindNameError(lines, lineIndex, currentLine) {
        // Try to add missing variable declarations
        if (currentLine.includes('=') && !currentLine.includes('const') && !currentLine.includes('let') && !currentLine.includes('var')) {
            const parts = currentLine.split('=');
            if (parts.length === 2) {
                const varName = parts[0].trim();
                if (varName && !varName.includes('.')) {
                    lines[lineIndex] = 'const ' + currentLine;
                    return true;
                }
            }
        }
        return false;
    }

    fixTypeAssignmentError(lines, lineIndex, currentLine) {
        // Try to fix type assignment issues
        if (currentLine.includes('=') && currentLine.includes(':')) {
            // Already has type annotation, might need to fix the type
            return false;
        }
        return false;
    }

    fixGenericTypeScriptError(lines, lineIndex, currentLine, error) {
        // Generic fix for other TypeScript errors
        console.log(`Generic fix attempt for ${error.code}: ${error.message}`);
        
        // Try to fix common syntax issues
        if (currentLine.includes('}}}}}}}}}}}}}}}}}}}}')) {
            lines[lineIndex] = currentLine.replace(/}}}}}}}}}}}}}}}}}}}}/g, '');
            return true;
        }
        
        if (currentLine.includes('}}}}}}}}}}}}}}}}}}}}')) {
            lines[lineIndex] = currentLine.replace(/}}}}}}}}}}}}}}}}}}}}/g, '');
            return true;
        }
        
        return false;
    }

    async applyFixes(errors) {
        let fixedCount = 0;
        
        for (const error of errors) {
            try {
                const fixed = await this.fixTypeScriptError(error);
                if (fixed) {
                    fixedCount++;
                }
            } catch (err) {
                console.error(`Error applying fix for ${error.code}:`, err);
            }
        }
        
        return fixedCount;
    }

    generateReport(errors, fixedCount) {
        const report = {
            timestamp: new Date().toISOString(),
            totalErrors: errors.length,
            fixedErrors: fixedCount,
            remainingErrors: errors.length - fixedCount,
            errors: errors,
            summary: {
                totalErrors: errors.length,
                fixedErrors: fixedCount,
                remainingErrors: errors.length - fixedCount
            }
        };

        const reportPath = path.join(this.reportsDir, `typescript-fix-report-${Date.now()}.json`);
        fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
        
        console.log(`📊 Report generated: ${reportPath}`);
        return report;
    }

    async runErrorCheck() {
        try {
            console.log('🔍 Checking TypeScript errors...');
            
            const { hasErrors, errors } = await this.checkTypeScriptErrors();
            
            if (!hasErrors) {
                console.log('✅ No TypeScript errors to fix');
                return;
            }

            console.log(`Found ${errors.length} TypeScript errors`);
            
            console.log('🔧 Applying fixes...');
            const fixedCount = await this.applyFixes(errors);
            
            console.log(`Fixed ${fixedCount} out of ${errors.length} errors`);
            
            // Generate report
            this.generateReport(errors, fixedCount);
            
            // Run another check to see remaining errors
            if (fixedCount > 0) {
                console.log('🔍 Re-checking for remaining errors...');
                const { hasErrors: hasRemainingErrors, errors: remainingErrors } = await this.checkTypeScriptErrors();
                
                if (hasRemainingErrors) {
                    console.log(`⚠️  ${remainingErrors.length} errors remain after fixes`);
                } else {
                    console.log('🎉 All TypeScript errors have been fixed!');
                }
            }
            
        } catch (error) {
            console.error('Error during TypeScript error check:', error);
        }
    }

    startContinuousMonitoring() {
        console.log('🚀 Starting continuous TypeScript error monitoring...');
        
        // Run immediately
        this.runErrorCheck();
        
        // Then run every 15 minutes
        setInterval(() => {
            this.runErrorCheck();
        }, 15 * 60 * 1000);
    }

    start() {
        if (process.argv.includes('--continuous')) {
            this.startContinuousMonitoring();
        } else {
            this.runErrorCheck();
        }
    }
}

// Run the monitor
const monitor = new TypeScriptErrorMonitor();
monitor.start();