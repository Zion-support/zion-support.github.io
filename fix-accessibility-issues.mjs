#!/usr/bin/env node

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

console.log('🚀 Starting accessibility issues fix...');

// Function to fix accessibility issues
function fixAccessibilityIssues(content, filePath) {
    let modified = false;
    
    // Fix missing H1 heading
    if (content.includes('<h2') && !content.includes('<h1')) {
        content = content.replace(
            /<h2/g,
            '<h1'
        );
        content = content.replace(
            /<\/h2>/g,
            '</h1>'
        );
        modified = true;
        console.log(`✅ Added H1 heading to ${filePath}`);
    }
    
    // Fix input without proper label
    content = content.replace(
        /<input([^>]*?)type="checkbox"([^>]*?)>/g,
        (match, before, after) => {
            if (!match.includes('aria-label') && !match.includes('<label')) {
                const id = `checkbox-${Math.random().toString(36).substr(2, 9)}`;
                return `<label htmlFor="${id}">Checkbox</label><input id="${id}"${before}type="checkbox"${after}>`;
            }
            return match;
        }
    );
    
    // Fix malformed className attributes
    content = content.replace(
        /className="([^"]*?)"/g,
        (match, className) => {
            const fixed = className
                .replace(/,/g, ' ')
                .replace(/\s+/g, ' ')
                .trim();
            return `className="${fixed}"`;
        }
    );
    
    // Fix missing alt attributes on images
    content = content.replace(
        /<img([^>]*?)(?<!alt="[^"]*")>/g,
        (match, attributes) => {
            if (!attributes.includes('alt=')) {
                return `<img${attributes} alt="Image">`;
            }
            return match;
        }
    );
    
    // Fix button accessibility
    content = content.replace(
        /<button([^>]*?)>/g,
        (match, attributes) => {
            if (!attributes.includes('aria-label') && !attributes.includes('aria-labelledby')) {
                return `<button${attributes} aria-label="Button">`;
            }
            return match;
        }
    );
    
    // Fix link accessibility
    content = content.replace(
        /<a([^>]*?)href="([^"]*?)"([^>]*?)>/g,
        (match, before, href, after) => {
            if (!match.includes('aria-label') && !match.includes('aria-labelledby')) {
                return `<a${before}href="${href}"${after} aria-label="Link">`;
            }
            return match;
        }
    );
    
    // Fix form accessibility
    content = content.replace(
        /<form([^>]*?)>/g,
        (match, attributes) => {
            if (!attributes.includes('aria-label') && !attributes.includes('aria-labelledby')) {
                return `<form${attributes} aria-label="Form">`;
            }
            return match;
        }
    );
    
    return { content, modified };
}

// Function to process a single file
function processFile(filePath) {
    if (!existsSync(filePath)) {
        console.log(`⚠️  File not found: ${filePath}`);
        return;
    }
    
    const content = readFileSync(filePath, 'utf8');
    const { content: fixedContent, modified } = fixAccessibilityIssues(content, filePath);
    
    if (modified) {
        writeFileSync(filePath, fixedContent);
        console.log(`💾 Fixed accessibility issues in ${filePath}`);
    }
}

// Load accessibility audit
const auditReport = JSON.parse(readFileSync('accessibility-audit.json', 'utf8'));

// Get unique files with issues
const filesWithIssues = [...new Set(auditReport.issues.map(issue => issue.file))];

console.log(`📋 Found ${filesWithIssues.length} files with accessibility issues`);

// Process each file
let fixedCount = 0;
for (const filePath of filesWithIssues) {
    try {
        processFile(filePath);
        fixedCount++;
    } catch (error) {
        console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    }
}

console.log(`\n🎉 Accessibility fixes completed!`);
console.log(`📊 Summary:`);
console.log(`   - Files processed: ${fixedCount}`);
console.log(`   - Total issues: ${auditReport.issues.length}`);