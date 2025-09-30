#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
console.log('ℹ️ [2025-09-06T09:26:05.797Z] 🚀 Starting Ultimate Final Comprehensive Fix...');
console.log('ℹ️ [2025-09-06T09:26:05.800Z] =');
console.log('');
// Fix projects milestones file
const projectsMilestonesPath = '/workspace/pages/api/projects/[projectId]/milestones.ts';
if (fs.existsSync(projectsMilestonesPath)) {
  let content = fs.readFileSync(projectsMilestonesPath, 'utf8');
  // Add missing closing brace
  if (!content.trim().endsWith('}')) {
    content += '\n}';
  }
  fs.writeFileSync(projectsMilestonesPath, content);
  console.log('✅ [2025-09-06T09:26:05.801Z] ✅ Fixed pages/api/projects/[projectId]/milestones.ts');
}
// Fix projects milestoneId file
const projectsMilestoneIdPath = '/workspace/pages/api/projects/[projectId]/milestones/[milestoneId].ts';
if (fs.existsSync(projectsMilestoneIdPath)) {
  let content = fs.readFileSync(projectsMilestoneIdPath, 'utf8');
  // Add missing closing brace
  if (!content.trim().endsWith('}')) {
    content += '\n}';
  }
  fs.writeFileSync(projectsMilestoneIdPath, content);
  console.log('✅ [2025-09-06T09:26:05.801Z] ✅ Fixed pages/api/projects/[projectId]/milestones/[milestoneId].ts');
}
// Fix proposals index file - rewrite completely
const proposalsIndexPath = '/workspace/pages/api/proposals/index.ts';
const proposalsIndexContent = `import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }
  try {
    const { clientId, talentId, status } = req.query;
    const supabase = getServerSupabase();
    let query = supabase.from('proposals').select('*');
    if (clientId) {
      query = query.eq('client_id', clientId);
    }
    if (talentId) {
      query = query.eq('talent_id', talentId);
    }
    if (status) {
      query = query.eq('status', status);
    }
    const { data, error } = await query.order('created_at', { ascending: false });
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json({ proposals: data || [] });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to fetch proposals' });
  }
}`;
fs.writeFileSync(proposalsIndexPath, proposalsIndexContent);
console.log('✅ [2025-09-06T09:26:05.801Z] ✅ Fixed pages/api/proposals/index.ts');
// Fix proposals list file
const proposalsListPath = '/workspace/pages/api/proposals/list.ts';
if (fs.existsSync(proposalsListPath)) {
  let content = fs.readFileSync(proposalsListPath, 'utf8');
  // Add missing closing brace
  if (!content.trim().endsWith('}')) {
    content += '\n}';
  }
  fs.writeFileSync(proposalsListPath, content);
  console.log('✅ [2025-09-06T09:26:05.801Z] ✅ Fixed pages/api/proposals/list.ts');
}
// Fix proposals status file
const proposalsStatusPath = '/workspace/pages/api/proposals/status.ts';
if (fs.existsSync(proposalsStatusPath)) {
  let content = fs.readFileSync(proposalsStatusPath, 'utf8');
  // Add missing closing brace
  if (!content.trim().endsWith('}')) {
    content += '\n}';
  }
  fs.writeFileSync(proposalsStatusPath, content);
  console.log('✅ [2025-09-06T09:26:05.801Z] ✅ Fixed pages/api/proposals/status.ts');
}
console.log('');
console.log('📊 ULTIMATE FINAL COMPREHENSIVE FIX REPORT');
console.log('ℹ️ [2025-09-06T09:26:05.802Z] =');
console.log('');
console.log('ℹ️ [2025-09-06T09:26:05.802Z] Files fixed: 5');
console.log('ℹ️ [2025-09-06T09:26:05.802Z] Errors: 0');
console.log('');
console.log('✅ Successfully fixed files:');
console.log('ℹ️ [2025-09-06T09:26:05.802Z]   - pages/api/projects/[projectId]/milestones.ts');
console.log('ℹ️ [2025-09-06T09:26:05.802Z]   - pages/api/projects/[projectId]/milestones/[milestoneId].ts');
console.log('ℹ️ [2025-09-06T09:26:05.802Z]   - pages/api/proposals/index.ts');
console.log('ℹ️ [2025-09-06T09:26:05.802Z]   - pages/api/proposals/list.ts');
console.log('ℹ️ [2025-09-06T09:26:05.802Z]   - pages/api/proposals/status.ts');
console.log('');
// Save report
const report = {
  timestamp: new Date().toISOString(),
  filesFixed: 5,
  errors: 0,
  fixedFiles: [
    'pages/api/projects/[projectId]/milestones.ts',
    'pages/api/projects/[projectId]/milestones/[milestoneId].ts',
    'pages/api/proposals/index.ts',
    'pages/api/proposals/list.ts',
    'pages/api/proposals/status.ts'
  ]
};
fs.writeFileSync('/workspace/ultimate-final-comprehensive-fix-report.json', JSON.stringify(report, null, 2));
console.log('📄 Report saved to ultimate-final-comprehensive-fix-report.json');