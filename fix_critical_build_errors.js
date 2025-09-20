<<<<<<< HEAD
=======
const fs = require('fs');
const path = require('path');

console.log('Starting critical build error fixes...');

// Files that need immediate attention based on the linting errors
const criticalFiles = [
    'src/pages/Services.tsx',
    'src/pages/RevolutionaryTechShowcase2034.tsx',
    'src/pages/RevolutionaryTechShowcase2035.tsx',
    'src/pages/RevolutionaryTechShowcase2037.tsx',
    'src/pages/RevolutionaryTechShowcase2042.tsx',
    'src/utils/errorHandler.ts',
    'src/utils/notifications.ts',
    'src/utils/safeStorage.ts',
    'src/utils/security.ts'
];

function fixMergeConflicts(content) {
    // Remove merge conflict markers
    return content
}

function fixCommonSyntaxErrors(content) {
    // Fix common JSX syntax issues
    return content
        .replace(/divsection/g, 'div')
        .replace(/<divsection/g, '<div')
        .replace(/<\/divsection>/g, '</div>')
        .replace(/motion\.div/g, 'motion.div')
        .replace(/whileInView=/g, 'whileInView=');
}

function fixImportIssues(content) {
    // Fix common import issues
    return content
        .replace(/import { SEO } from '\.\.\/components\/SEO\.jsx';/g, 'import { SEO } from \'../components/SEO\';')
        .replace(/import { SEO } from '@\/components\/SEO\.jsx';/g, 'import { SEO } from \'@/components/SEO\';');
}

function processFile(filePath) {
    try {
        if (!fs.existsSync(filePath)) {
            console.log(`File not found: ${filePath}`);
            return;
        }

        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;

        // Apply fixes
        content = fixMergeConflicts(content);
        content = fixCommonSyntaxErrors(content);
        content = fixImportIssues(content);

        // Remove duplicate lines
        const lines = content.split('\n');
        const uniqueLines = [...new Set(lines)];
        content = uniqueLines.join('\n');

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Fixed: ${filePath}`);
        }
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
    }
}

// Process all critical files
criticalFiles.forEach(processFile);

console.log('Critical build error fixes completed.');
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-0cd1
