const fs = require('fs');
const path = require('path');

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing semicolon after import statements
    if (content.includes('import type { NextApiRequest, NextApiResponse } from "next",')) {
      content = content.replace(/import type { NextApiRequest, NextApiResponse } from "next",/g, 'import type { NextApiRequest, NextApiResponse } from "next";');
      modified = true;
    }

    // Fix missing semicolon after other import statements
    if (content.includes('import { revokeTokens } from "../../../../utils/token/service",')) {
      content = content.replace(/import { revokeTokens } from "\.\.\/\.\.\/\.\.\/\.\.\/utils\/token\/service",/g, 'import { revokeTokens } from "../../../../utils/token/service";');
      modified = true;
    }

    // Fix missing semicolon after return statements
    if (content.includes('return res.status(405).json({ error: "Method not allowed" }),')) {
      content = content.replace(/return res\.status\(405\)\.json\(\{ error: "Method not allowed" \}\),/g, 'return res.status(405).json({ error: "Method not allowed" });');
      modified = true;
    }

    // Fix unexpected keyword 'const' by removing extra semicolon
    if (content.includes('const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000, // 5 minutes;')) {
      content = content.replace(/const RATE_LIMIT_WINDOW_MS = 5 \* 60 \* 1000, \/\/ 5 minutes;/g, 'const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000; // 5 minutes');
      modified = true;
    }

    // Fix Record type syntax
    if (content.includes('Record<string { timestamps: number[] }>')) {
      content = content.replace(/Record<string \{ timestamps: number\[\] \}>/g, 'Record<string, { timestamps: number[] }>');
      modified = true;
    }

    // Fix function declaration with extra semicolon
    if (content.includes('function isRateLimited(ip: string): boolean {;')) {
      content = content.replace(/function isRateLimited\(ip: string\): boolean \{;/g, 'function isRateLimited(ip: string): boolean {');
      modified = true;
    }

    // Fix trailing comma in const declaration
    if (content.includes('const LOG_DIR = path.join(process.cwd(), \'dataanalytics\'),;')) {
      content = content.replace(/const LOG_DIR = path\.join\(process\.cwd\(\), 'dataanalytics'\),;/g, 'const LOG_DIR = path.join(process.cwd(), \'dataanalytics\');');
      modified = true;
    }

    // Fix trailing comma in function call
    if (content.includes('if (!rateLimit(req, res)) return,;')) {
      content = content.replace(/if \(!rateLimit\(req, res\)\) return,/g, 'if (!rateLimit(req, res)) return;');
      modified = true;
    }

    // Fix trailing comma in variable declaration
    if (content.includes('let apps = readJsonFile<Application[]>(FILE, []),;')) {
      content = content.replace(/let apps = readJsonFile<Application\[\]>\(FILE, \[\]\),;/g, 'let apps = readJsonFile<Application[]>(FILE, []);');
      modified = true;
    }

    // Fix catch block without try
    if (content.includes('} catch (error) {') && !content.includes('try {')) {
      // This is a structural issue - need to add try block or remove catch
      content = content.replace(/} catch \(error\) \{[\s\S]*?return res\.status\(500\)\.json\(\{ error: "Internal server error" \}\);\s*}/g, '');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

// List of files with syntax errors
const filesToFix = [
  'pages/api/admin/tokens/revoke.ts',
  'pages/api/ai/operator.ts',
  'pages/api/analytics/events/track.ts',
  'pages/api/applications.ts',
  'pages/api/auth-session.ts'
];

let fixedCount = 0;

console.log('Fixing latest syntax errors...');

filesToFix.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    if (fixSyntaxErrors(filePath)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log(`Fixed syntax errors in ${fixedCount} files.`);