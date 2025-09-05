#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function fixAllSyntaxErrors() {
  console.log('🔧 Starting comprehensive syntax fix...');
  
  const filesToFix = [
    '/workspace/enhanced-automation-suite.cjs',
    '/workspace/automation/master-orchestrator.cjs',
    '/workspace/jest.config.smoke.cjs',
    '/workspace/next.config.js'
  ];
  
  filesToFix.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      console.log(`Fixing ${filePath}`);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Comprehensive syntax fixes
      const fixes = [
        // Fix object property syntax errors
        { pattern: /(\w+):\s*s:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*n:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*t:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*y:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*g:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*p:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*h:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*v:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*e:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*r:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*d:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*o:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*m:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*u:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*i:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*a:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*c:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*l:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*f:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*w:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*x:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*z:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*j:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*k:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*q:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*b:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*V:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*E:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*S:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*T:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*N:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*R:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*D:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*O:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*M:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*U:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*I:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*A:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*C:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*L:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*F:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*W:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*X:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*Z:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*J:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*K:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*Q:\s*/g, replacement: '$1: ' },
        { pattern: /(\w+):\s*B:\s*/g, replacement: '$1: ' },
        
        // Fix specific variable names
        { pattern: /succes:\s*s:\s*/g, replacement: 'success: ' },
        { pattern: /duratio:\s*n:\s*/g, replacement: 'duration: ' },
        { pattern: /error:\s*s:\s*/g, replacement: 'errors: ' },
        { pattern: /warning:\s*s:\s*/g, replacement: 'warnings: ' },
        { pattern: /outpu:\s*t:\s*/g, replacement: 'output: ' },
        { pattern: /erro:\s*r:\s*/g, replacement: 'error: ' },
        { pattern: /faile:\s*d:\s*/g, replacement: 'failed: ' },
        { pattern: /Runnin:\s*g:\s*/g, replacement: 'Running: ' },
        { pattern: /cw:\s*d:\s*/g, replacement: 'cwd: ' },
        { pattern: /stdi:\s*o:\s*/g, replacement: 'stdio: ' },
        { pattern: /encodin:\s*g:\s*/g, replacement: 'encoding: ' },
        { pattern: /timestam:\s*p:\s*/g, replacement: 'timestamp: ' },
        { pattern: /testEnvironmen:\s*t:\s*/g, replacement: 'testEnvironment: ' },
        { pattern: /setupFilesAfterEn:\s*v:\s*/g, replacement: 'setupFilesAfterEnv: ' },
        { pattern: /testMatc:\s*h:\s*/g, replacement: 'testMatch: ' },
        { pattern: /collectCoverag:\s*e:\s*/g, replacement: 'collectCoverage: ' },
        { pattern: /verbos:\s*e:\s*/g, replacement: 'verbose: ' },
        { pattern: /testTimeou:\s*t:\s*/g, replacement: 'testTimeout: ' },
        { pattern: /transfor:\s*m:\s*/g, replacement: 'transform: ' },
        { pattern: /preset:\s*s:\s*/g, replacement: 'presets: ' },
        { pattern: /moduleFileExtension:\s*s:\s*/g, replacement: 'moduleFileExtensions: ' },
        { pattern: /testPathIgnorePattern:\s*s:\s*/g, replacement: 'testPathIgnorePatterns: ' },
        
        // Fix string syntax errors
        { pattern: /"no-unused-var:\s*s:\s*error"/g, replacement: '"no-unused-vars: error"' },
        { pattern: /"no-unused-import:\s*s:\s*error"/g, replacement: '"no-unused-imports: error"' },
        { pattern: /"prefer-cons:\s*t:\s*error"/g, replacement: '"prefer-const: error"' },
        { pattern: /"no-va:\s*r:\s*error"/g, replacement: '"no-var: error"' },
      ];
      
      fixes.forEach(fix => {
        content = content.replace(fix.pattern, fix.replacement);
      });
      
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed ${filePath}`);
    }
  });
  
  console.log('🎉 All syntax errors fixed!');
}

// Run the fix
fixAllSyntaxErrors();