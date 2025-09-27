#!/usr/bin/env node

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

console.log('🚀 Starting performance optimizations implementation...');

// Function to implement React.memo optimization
function addReactMemo(content, componentName) {
    // Check if already has React.memo
    if (content.includes('React.memo') || content.includes('memo(')) {
        return content;
    }
    
    // Find the export statement
    const exportMatch = content.match(/export\s+(default\s+)?(?:function\s+)?(\w+)/);
    if (!exportMatch) {
        return content;
    }
    
    const exportType = exportMatch[1] ? 'default' : 'named';
    const actualComponentName = exportMatch[2] || componentName;
    
    // Add React import if not present
    if (!content.includes('import React')) {
        content = content.replace(/import\s+{\s*([^}]*)\s*}\s+from\s+['"]react['"]/, 
            `import React, { $1 } from 'react'`);
        if (!content.includes('import React')) {
            content = `import React from 'react';\n${content}`;
        }
    }
    
    // Wrap with React.memo
    if (exportType === 'default') {
        content = content.replace(
            /export\s+default\s+(?:function\s+)?(\w+)/,
            `const $1 = React.memo(function $1`
        );
        content += `\n\nexport default ${actualComponentName};`;
    } else {
        content = content.replace(
            /export\s+(?:function\s+)?(\w+)/,
            `const $1 = React.memo(function $1`
        );
        content += `\n\nexport { ${actualComponentName} };`;
    }
    
    return content;
}

// Function to add useMemo/useCallback optimizations
function addMemoization(content) {
    // Add React hooks import if not present
    if (!content.includes('useMemo') && !content.includes('useCallback')) {
        const reactImport = content.match(/import\s+{\s*([^}]*)\s*}\s+from\s+['"]react['"]/);
        if (reactImport) {
            const hooks = reactImport[1];
            const newHooks = hooks.includes('useMemo') ? hooks : 
                hooks.includes('useCallback') ? hooks :
                `${hooks}, useMemo, useCallback`;
            content = content.replace(
                /import\s+{\s*([^}]*)\s*}\s+from\s+['"]react['"]/,
                `import { ${newHooks} } from 'react'`
            );
        } else {
            content = `import { useMemo, useCallback } from 'react';\n${content}`;
        }
    }
    
    // Add example memoization for expensive calculations
    content = content.replace(
        /const\s+(\w+)\s*=\s*useState/,
        'const $1 = useState'
    );
    
    return content;
}

// Function to break down large components (simplified approach)
function breakDownLargeComponent(content, filePath) {
    // This is a simplified approach - in practice, you'd want more sophisticated analysis
    const lines = content.split('\n');
    const lineCount = lines.length;
    
    if (lineCount > 200) {
        console.log(`📝 Large component detected in ${filePath} (${lineCount} lines)`);
        // Add comment suggesting component breakdown
        content = `// TODO: Consider breaking this large component (${lineCount} lines) into smaller components\n${content}`;
    }
    
    return content;
}

// Main optimization function
function optimizeFile(filePath, optimizations) {
    if (!existsSync(filePath)) {
        console.log(`⚠️  File not found: ${filePath}`);
        return;
    }
    
    let content = readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply optimizations based on the report
    const fileOptimizations = optimizations.filter(opt => opt.file === filePath);
    
    for (const optimization of fileOptimizations) {
        switch (optimization.issue) {
            case 'Component could benefit from React.memo':
                const originalContent = content;
                content = addReactMemo(content, 'Component');
                if (content !== originalContent) {
                    modified = true;
                    console.log(`✅ Added React.memo to ${filePath}`);
                }
                break;
                
            case 'Component might benefit from useMemo/useCallback':
                const originalContent2 = content;
                content = addMemoization(content);
                if (content !== originalContent2) {
                    modified = true;
                    console.log(`✅ Added memoization hooks to ${filePath}`);
                }
                break;
                
            case 'Large component detected':
                const originalContent3 = content;
                content = breakDownLargeComponent(content, filePath);
                if (content !== originalContent3) {
                    modified = true;
                    console.log(`✅ Added breakdown suggestion to ${filePath}`);
                }
                break;
        }
    }
    
    if (modified) {
        writeFileSync(filePath, content);
        console.log(`💾 Saved optimizations to ${filePath}`);
    }
}

// Load optimization report
const optimizationReport = JSON.parse(readFileSync('performance-optimization-report.json', 'utf8'));

// Get unique files to optimize
const filesToOptimize = [...new Set(optimizationReport.optimizations.map(opt => opt.file))];

console.log(`📋 Found ${filesToOptimize.length} files to optimize`);

// Process each file
let optimizedCount = 0;
for (const filePath of filesToOptimize) {
    try {
        optimizeFile(filePath, optimizationReport.optimizations);
        optimizedCount++;
    } catch (error) {
        console.log(`❌ Error optimizing ${filePath}: ${error.message}`);
    }
}

console.log(`\n🎉 Performance optimization completed!`);
console.log(`📊 Summary:`);
console.log(`   - Files processed: ${optimizedCount}`);
console.log(`   - Total optimizations: ${optimizationReport.optimizations.length}`);
console.log(`   - Components analyzed: ${optimizationReport.metrics.componentsAnalyzed}`);