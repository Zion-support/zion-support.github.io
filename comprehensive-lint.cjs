#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Running comprehensive linting...');

// Function to run ESLint
function runESLint() {
    try {
        console.log('📋 Running ESLint...');
        execSync('npx eslint src/ temp-broken-components/ pages/ --ext .ts,.tsx,.js,.jsx --fix', { stdio: 'inherit' });
        console.log('✅ ESLint completed successfully');
        return true;
    } catch (error) {
        console.log('⚠️  ESLint found issues, but some were auto-fixed');
        return false;
    }
}

// Function to run TypeScript check
function runTypeScriptCheck() {
    try {
        console.log('📋 Running TypeScript check...');
        execSync('npx tsc --noEmit', { stdio: 'inherit' });
        console.log('✅ TypeScript check completed successfully');
        return true;
    } catch (error) {
        console.log('⚠️  TypeScript check found issues');
        return false;
    }
}

// Main function
async function main() {
    console.log('🚀 Starting comprehensive linting process...');
    
    const eslintResult = runESLint();
    const tsResult = runTypeScriptCheck();
    
    console.log('\n📊 Linting Summary:');
    console.log(`   - ESLint: ${eslintResult ? '✅ Passed' : '⚠️  Issues found'}`);
    console.log(`   - TypeScript: ${tsResult ? '✅ Passed' : '⚠️  Issues found'}`);
    
    if (eslintResult && tsResult) {
        console.log('\n🎉 All linting checks passed!');
    } else {
        console.log('\n⚠️  Some linting issues remain. Please review and fix manually.');
    }
}

main().catch(console.error);
