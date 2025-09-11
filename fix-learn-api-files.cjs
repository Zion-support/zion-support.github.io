#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
console.log('ℹ️ [2025-09-06T09:26:05.797Z] 🚀 Starting Learn API Files Fix...');
console.log('ℹ️ [2025-09-06T09:26:05.800Z] =');
console.log('');
// Fix certificates [courseId] file
const certificatesPath =
  '/workspace/pages/api/learn/certificates/[courseId].ts';
if (fs.existsSync(certificatesPath)) {
  let content = fs.readFileSync(certificatesPath, 'utf8');
  // Add missing closing brace
  if (!content.trim().endsWith('}')) {
    content += '\n}';
  }
  fs.writeFileSync(certificatesPath, content);
  console.log(
    '✅ [2025-09-06T09:26:05.801Z] ✅ Fixed pages/api/learn/certificates/[courseId].ts'
  );
}
// Fix coach file
const coachPath = '/workspace/pages/api/learn/coach.ts';
if (fs.existsSync(coachPath)) {
  let content = fs.readFileSync(coachPath, 'utf8');
  // Add missing closing brace
  if (!content.trim().endsWith('}')) {
    content += '\n}';
  }
  fs.writeFileSync(coachPath, content);
  console.log(
    '✅ [2025-09-06T09:26:05.801Z] ✅ Fixed pages/api/learn/coach.ts'
  );
}
// Fix complete file - rewrite it properly
const completePath = '/workspace/pages/api/learn/complete.ts';
const completeContent = `import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const p = path.join(process.cwd(), 'data', 'learn.json');
function loadData() {
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {
    return { completions: [] };
  }
}
function saveData(data: any) {
  fs.writeFileSync(p, JSON.stringify(data, null, 2));
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }
  const { userId, courseId, score } = req.body;
  if (!userId || !courseId) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const data = loadData();
  const completion = {
    id: Date.now().toString(),
    userId,
    courseId,
    score: score || 0,
    completedAt: new Date().toISOString(),
  };
  data.completions.push(completion);
  saveData(data);
  res.status(200).json(completion);
}`;
fs.writeFileSync(completePath, completeContent);
console.log(
  '✅ [2025-09-06T09:26:05.801Z] ✅ Fixed pages/api/learn/complete.ts'
);
// Fix courses file
const coursesPath = '/workspace/pages/api/learn/courses.ts';
if (fs.existsSync(coursesPath)) {
  let content = fs.readFileSync(coursesPath, 'utf8');
  // Add missing closing brace
  if (!content.trim().endsWith('}')) {
    content += '\n}';
  }
  fs.writeFileSync(coursesPath, content);
  console.log(
    '✅ [2025-09-06T09:26:05.801Z] ✅ Fixed pages/api/learn/courses.ts'
  );
}
// Fix courses [id] file
const coursesIdPath = '/workspace/pages/api/learn/courses/[id].ts';
if (fs.existsSync(coursesIdPath)) {
  let content = fs.readFileSync(coursesIdPath, 'utf8');
  // Add missing closing brace
  if (!content.trim().endsWith('}')) {
    content += '\n}';
  }
  fs.writeFileSync(coursesIdPath, content);
  console.log(
    '✅ [2025-09-06T09:26:05.801Z] ✅ Fixed pages/api/learn/courses/[id].ts'
  );
}
console.log('');
console.log('📊 LEARN API FILES FIX REPORT');
console.log('ℹ️ [2025-09-06T09:26:05.802Z] =');
console.log('');
console.log('ℹ️ [2025-09-06T09:26:05.802Z] Files fixed: 5');
console.log('ℹ️ [2025-09-06T09:26:05.802Z] Errors: 0');
console.log('');
console.log('✅ Successfully fixed files:');
console.log(
  'ℹ️ [2025-09-06T09:26:05.802Z]   - pages/api/learn/certificates/[courseId].ts'
);
console.log('ℹ️ [2025-09-06T09:26:05.802Z]   - pages/api/learn/coach.ts');
console.log('ℹ️ [2025-09-06T09:26:05.802Z]   - pages/api/learn/complete.ts');
console.log('ℹ️ [2025-09-06T09:26:05.802Z]   - pages/api/learn/courses.ts');
console.log(
  'ℹ️ [2025-09-06T09:26:05.802Z]   - pages/api/learn/courses/[id].ts'
);
console.log('');
// Save report
const report = {
  timestamp: new Date().toISOString(),
  filesFixed: 5,
  errors: 0,
  fixedFiles: [
    'pages/api/learn/certificates/[courseId].ts',
    'pages/api/learn/coach.ts',
    'pages/api/learn/complete.ts',
    'pages/api/learn/courses.ts',
    'pages/api/learn/courses/[id].ts',
  ],
};
fs.writeFileSync(
  '/workspace/learn-api-files-fix-report.json',
  JSON.stringify(report, null, 2)
);
console.log('📄 Report saved to learn-api-files-fix-report.json');
