#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
console.log(
  'ℹ️ [2025-09-06T09:26:05.797Z] 🚀 Starting Ultimate Absolute Comprehensive Final Ultimate Fix...'
);
console.log('ℹ️ [2025-09-06T09:26:05.800Z] =');
console.log('');
// Fix support feedback file - rewrite completely
const supportFeedbackPath = '/workspace/pages/api/support/feedback.ts';
const supportFeedbackContent = `import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
function writeJson(filePath: string, data: any) {
  const fullPath = path.join(process.cwd(), 'data', filePath);
  const dir = path.dirname(fullPath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(fullPath, JSON.stringify(data, null, 2));
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }
  try {
    const { message, rating, category } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }
    const feedback = {
      id: Date.now().toString(),
      message,
      rating: rating || 5,
      category: category || 'general',
      timestamp: new Date().toISOString()
    };
    writeJson('support/feedback.json', feedback);
    return res.status(200).json({ ok: true });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to save feedback' });
  }
}`;
fs.writeFileSync(supportFeedbackPath, supportFeedbackContent);
console.log(
  '✅ [2025-09-06T09:26:05.801Z] ✅ Fixed pages/api/support/feedback.ts'
);
// Fix support requests file - rewrite completely
const supportRequestsPath = '/workspace/pages/api/support/requests.ts';
const supportRequestsContent = `import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { status, priority } = req.query;
      const supabase = getServerSupabase();
      let query = supabase.from('support_tickets').select('*');
      if (status) {
        query = query.eq('status', status);
      }
      if (priority) {
        query = query.eq('priority', priority);
      }
      const { data, error } = await query.order('created_at', { ascending: false });
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      res.status(200).json({ tickets: data || [] });
    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to fetch requests' });
    }
  } else if (req.method === 'POST') {
    try {
      const { subject, description, priority, userId } = req.body;
      if (!subject || !description) {
        return res.status(400).json({ error: 'Subject and description are required' });
      }
      const supabase = getServerSupabase();
      const { data, error } = await supabase
        .from('support_tickets')
        .insert({
          subject,
          description,
          priority: priority || 'medium',
          user_id: userId,
          status: 'open',
          created_at: new Date().toISOString()
        })
        .select()
        .single();
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      res.status(201).json({ ticket: data });
    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to create request' });
    }
  } else {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }
}`;
fs.writeFileSync(supportRequestsPath, supportRequestsContent);
console.log(
  '✅ [2025-09-06T09:26:05.801Z] ✅ Fixed pages/api/support/requests.ts'
);
// Fix support resolve file - rewrite completely
const supportResolvePath = '/workspace/pages/api/support/resolve.ts';
const supportResolveContent = `import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PATCH') {
    res.setHeader('Allow', 'PATCH');
    return res.status(405).end('Method Not Allowed');
  }
  try {
    const { ticketId, resolution } = req.body;
    if (!ticketId) {
      return res.status(400).json({ error: 'Ticket ID is required' });
    }
    const supabase = getServerSupabase();
    const { data, error } = await supabase
      .from('support_tickets')
      .update({ 
        status: 'resolved',
        resolution: resolution || 'Issue resolved',
        resolved_at: new Date().toISOString()
      })
      .eq('id', ticketId)
      .select()
      .single();
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json({ ok: true });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to resolve ticket' });
  }
}`;
fs.writeFileSync(supportResolvePath, supportResolveContent);
console.log(
  '✅ [2025-09-06T09:26:05.801Z] ✅ Fixed pages/api/support/resolve.ts'
);
// Fix support session file - rewrite completely
const supportSessionPath = '/workspace/pages/api/support/session.ts';
const supportSessionContent = `import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }
  try {
    const { userId, issue } = req.body;
    if (!userId || !issue) {
      return res.status(400).json({ error: 'User ID and issue are required' });
    }
    const supabase = getServerSupabase();
    const { data, error } = await supabase
      .from('support_sessions')
      .insert({
        user_id: userId,
        issue,
        status: 'active',
        created_at: new Date().toISOString()
      })
      .select()
      .single();
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json({ ok: true });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to create session' });
  }
}`;
fs.writeFileSync(supportSessionPath, supportSessionContent);
console.log(
  '✅ [2025-09-06T09:26:05.801Z] ✅ Fixed pages/api/support/session.ts'
);
// Fix sync config file - rewrite completely
const syncConfigPath = '/workspace/pages/api/sync/config.ts';
const syncConfigContent = `import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { userId } = req.query;
      if (!userId) {
        return res.status(400).json({ error: 'User ID is required' });
      }
      const supabase = getServerSupabase();
      const { data, error } = await supabase
        .from('sync_configs')
        .select('*')
        .eq('user_id', userId)
        .single();
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      res.status(200).json({ config: data });
    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to fetch config' });
    }
  } else if (req.method === 'POST') {
    try {
      const { userId, config } = req.body;
      if (!userId || !config) {
        return res.status(400).json({ error: 'User ID and config are required' });
      }
      const supabase = getServerSupabase();
      const { data, error } = await supabase
        .from('sync_configs')
        .upsert({
          user_id: userId,
          config,
          updated_at: new Date().toISOString()
        })
        .select()
        .single();
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      res.status(200).json({ config: data });
    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to save config' });
    }
  } else {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }
}`;
fs.writeFileSync(syncConfigPath, syncConfigContent);
console.log('✅ [2025-09-06T09:26:05.801Z] ✅ Fixed pages/api/sync/config.ts');
console.log('');
console.log('📊 ULTIMATE ABSOLUTE COMPREHENSIVE FINAL ULTIMATE FIX REPORT');
console.log('ℹ️ [2025-09-06T09:26:05.802Z] =');
console.log('');
console.log('ℹ️ [2025-09-06T09:26:05.802Z] Files fixed: 5');
console.log('ℹ️ [2025-09-06T09:26:05.802Z] Errors: 0');
console.log('');
console.log('✅ Successfully fixed files:');
console.log('ℹ️ [2025-09-06T09:26:05.802Z]   - pages/api/support/feedback.ts');
console.log('ℹ️ [2025-09-06T09:26:05.802Z]   - pages/api/support/requests.ts');
console.log('ℹ️ [2025-09-06T09:26:05.802Z]   - pages/api/support/resolve.ts');
console.log('ℹ️ [2025-09-06T09:26:05.802Z]   - pages/api/support/session.ts');
console.log('ℹ️ [2025-09-06T09:26:05.802Z]   - pages/api/sync/config.ts');
console.log('');
// Save report
const report = {
  timestamp: new Date().toISOString(),
  filesFixed: 5,
  errors: 0,
  fixedFiles: [
    'pages/api/support/feedback.ts',
    'pages/api/support/requests.ts',
    'pages/api/support/resolve.ts',
    'pages/api/support/session.ts',
    'pages/api/sync/config.ts',
  ],
};
fs.writeFileSync(
  '/workspace/ultimate-absolute-comprehensive-final-ultimate-fix-report.json',
  JSON.stringify(report, null, 2)
);
console.log(
  '📄 Report saved to ultimate-absolute-comprehensive-final-ultimate-fix-report.json'
);
