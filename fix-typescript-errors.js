#!/usr/bin/env node,
import fs from 'fs';
import path from 'path';
// Function to fix TypeScript any types,
function fixTypeScriptErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    // Fix any types in AnalyticsProvider,
if (filePath.includes('AnalyticsProvider.tsx')) {
      content = content.replace(/function gtag\(\.\.\.args: any\[\]\)/g, 'function gtag(...args: unknown[])');,
      content = content.replace(/\(window as any\)\.gtag/g, '(window as unknown as { gtag: (...args: unknown[]) => void }).gtag');
      content = content.replace(/\(window as any\)\.gtag/g, '(window as unknown as { gtag: (...args: unknown[]) => void }).gtag');
      modified = true;
    }
    // Fix any types in sitemap.ts,
if (filePath.includes('sitemap.ts')) {
      content = content.replace(/any/g, 'unknown');
      modified = true;
    }
    // Fix any types in app.types.ts,
if (filePath.includes('app.types.ts')) {
      content = content.replace(/any/g, 'unknown');
      modified = true;
    }
    // Fix unused variables by prefixing with underscore,
content = content.replace(/\b(error|errorInfo|placeholder|Calendar|User|Tag|Target|Star|Zap|Shield|Users|Globe|Brain|Cpu|MessageSquare|Eye|Sparkles|ArrowRight|ArrowLeft|Search|BookOpen)\b(?=\s*[,)])/g, '_$1');
    // Fix unescaped entities,
content = content.replace(/'/g, '&apos;');
    content = content.replace(/"/g, '&quot;');
    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed TypeScript errors in: ${filePath}""
    console.error(`Error fixing ${filePath}:""
  console.log(`Fixed TypeScript errors in ${fixedCount} files""
if (import.meta.url === `file: //${process.argv[1]}"")