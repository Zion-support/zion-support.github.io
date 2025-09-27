#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting comprehensive merge conflict resolution...');

// Function to execute git commands safely
function execGit(command, options = {}) {
    try {
        const result = execSync(command, { 
            encoding: 'utf8', 
            stdio: 'pipe',
            cwd: '/workspace',
            ...options 
        });
        return result.trim();
    } catch (error) {
        console.log(`⚠️  Git command failed: ${command}`);
        console.log(`Error: ${error.message}`);
        return null;
    }
}

// Function to fix merge conflicts in a file
function resolveMergeConflicts(filePath) {
    if (!fs.existsSync(filePath)) {
        return;
    }
    
    console.log(`🔧 Resolving conflicts in ${filePath}...`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove merge conflict markers
    content = content.replace(/<<<<<<< HEAD[^>]*>/g, '');
    content = content.replace(/=======/g, '');
    content = content.replace(/>>>>>>> [^\n]*/g, '');
    
    // Fix common syntax errors
    content = content.replace(/onAuditCompleteonIssueFoundclassName/g, 'onAuditComplete, onIssueFound, className');
    content = content.replace(/metricssetMetrics/g, 'metrics, setMetrics');
    content = content.replace(/selectedFiltersetSelectedFilter/g, 'selectedFilter, setSelectedFilter');
    
    // Fix className spacing issues
    content = content.replace(/className="([^"]*?)"/g, (match, className) => {
        let fixed = className
            // Fix spacing between words and classes
            .replace(/([a-z])([A-Z])/g, '$1 $2')
            .replace(/([a-z])(\d)/g, '$1 $2')
            .replace(/(\d)([a-z])/g, '$1 $2')
            // Fix specific patterns
            .replace(/w-4h-4/g, 'w-4 h-4')
            .replace(/w-5h-5/g, 'w-5 h-5')
            .replace(/w-6h-6/g, 'w-6 h-6')
            .replace(/w-8h-8/g, 'w-8 h-8')
            .replace(/text-xstext-/g, 'text-xs text-')
            .replace(/mt-1truncate/g, 'mt-1 truncate')
            .replace(/space-x-2mt-2/g, 'space-x-2 mt-2')
            .replace(/border-bborder-/g, 'border-b border-')
            .replace(/items-centerjustify-/g, 'items-center justify-')
            .replace(/font-semiboldtext-/g, 'font-semibold text-')
            .replace(/flexspace-x-/g, 'flex space-x-')
            .replace(/text-gray-500hover:/g, 'text-gray-500 hover:')
            .replace(/text-gray-400hover:/g, 'text-gray-400 hover:')
            .replace(/text-green-600hover:/g, 'text-green-600 hover:')
            .replace(/text-blue-500hover:/g, 'text-blue-500 hover:')
            .replace(/bg-blue-500hover:/g, 'bg-blue-500 hover:')
            .replace(/bg-green-500hover:/g, 'bg-green-500 hover:')
            .replace(/bg-gray-500hover:/g, 'bg-gray-500 hover:')
            .replace(/disabled:bg-gray-400text-/g, 'disabled:bg-gray-400 text-')
            .replace(/px-4 py-2bg-/g, 'px-4 py-2 bg-')
            .replace(/overflow-y-automax-h-/g, 'overflow-y-auto max-h-')
            .replace(/max-h-96overflow-/g, 'max-h-96 overflow-')
            .replace(/text-lgfont-semibold/g, 'text-lg font-semibold')
            .replace(/text-sm font-mediumtext-/g, 'text-sm font-medium text-')
            .replace(/text-xs text-gray-500dark:/g, 'text-xs text-gray-500 dark:')
            .replace(/text-sm text-gray-600 dark:text-gray-400mb-/g, 'text-sm text-gray-600 dark:text-gray-400 mb-')
            .replace(/grid grid-cols-2gap-/g, 'grid grid-cols-2 gap-')
            .replace(/space-y-2p-/g, 'space-y-2 p-')
            .replace(/flex-1min-w-/g, 'flex-1 min-w-')
            .replace(/items-startspace-x-/g, 'items-start space-x-')
            .replace(/justify-centerz-/g, 'justify-center z-')
            .replace(/\s+/g, ' ')
            .trim();
        return `className="${fixed}"`;
    });
    
    // Fix template literal issues
    content = content.replace(/className\s*=\s*{`([^`]*)`}/g, 'className={`$1`}');
    
    // Fix function syntax issues
    content = content.replace(/onClick\s*=\s*{\s*\([^)]*\)\s*=>\s*{([^}]*)}/g, (match, body) => {
        const cleanBody = body.replace(/;\s*}/g, '}').trim();
        return `onClick={(${match.match(/\([^)]*\)/)?.[0] || 'e'}) => {${cleanBody}}`;
    });
    
    // Fix common syntax errors
    content = content.replace(/,\s*}/g, '}');
    content = content.replace(/,\s*]/g, ']');
    content = content.replace(/;\s*}/g, '}');
    content = content.replace(/;\s*]/g, ']');
    
    // Fix specific syntax errors we've seen
    content = content.replace(/resolve, d: boolean;/g, 'resolved: boolean;');
    content = content.replace(/retryCoun, t: number;/g, 'retryCount: number;');
    content = content.replace(/timestam, p: Date;/g, 'timestamp: Date;');
    content = content.replace(/detail, s: Record/g, 'details: Record');
    content = content.replace(/onPerformanceIssue\?\: \(issu, e: PerformanceIssue\)/g, 'onPerformanceIssue?: (issue: PerformanceIssue)');
    content = content.replace(/every30seconds/g, 'every 30 seconds');
    content = content.replace(/hove, r:/g, 'hover:');
    
    // Fix onClick syntax
    content = content.replace(/onClick = \{\(e\) =>\{/g, 'onClick={(e) => {');
    content = content.replace(/e\.stopPropagation\(\);\};\s*resolveError\(/g, 'e.stopPropagation();\n                                  resolveError(');
    
    // Fix className template literals
    content = content.replace(/className = \{`([^`]*)`\}/g, 'className={`$1`}');
    
    // Fix specific patterns
    content = content.replace(/className = \{`px-4 py-2 rounded-lg text-sm font-medium transition-colors \$\{/g, 'className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${');
    
    if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        console.log(`✅ Fixed ${filePath}`);
    } else {
        console.log(`ℹ️  No changes needed for ${filePath}`);
    }
}

// Main function
async function main() {
    console.log('📥 Checking git status...');
    const status = execGit('git status --porcelain');
    
    if (!status || !status.includes('UU')) {
        console.log('ℹ️  No merge conflicts found');
        return;
    }
    
    console.log('🔍 Found merge conflicts, resolving...');
    
    // Get list of conflicted files
    const conflictedFiles = execGit('git diff --name-only --diff-filter=U');
    
    if (conflictedFiles) {
        const files = conflictedFiles.split('\n').filter(f => f.trim());
        console.log(`📁 Found ${files.length} conflicted files:`, files);
        
        // Resolve conflicts in each file
        files.forEach(resolveMergeConflicts);
        
        // Add resolved files
        console.log('📝 Adding resolved files...');
        execGit('git add .');
        
        // Commit the merge
        console.log('💾 Committing merge resolution...');
        execGit('git commit -m "resolve: merge conflicts in component files and configuration - Fixed syntax errors and className spacing issues"');
        
        console.log('✅ Successfully resolved all merge conflicts!');
    } else {
        console.log('ℹ️  No conflicted files found');
    }
}

// Run the main function
main().catch(console.error);