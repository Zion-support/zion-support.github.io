#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting comprehensive syntax fixer...');

// Fix the v1.ts file structure
function fixV1ApiDocs() {
  const filePath = '/workspace/data/api-docs/v1.ts';
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the structure by adding missing closing bracket
    content = content.replace(
      /versions: \['v1'\]\}\]\}\]\s*\]\s*\};/,
      "versions: ['v1']}]}]\n  ]\n};"
    );
    
    fs.writeFileSync(filePath, content);
    console.log('✅ Fixed v1.ts structure');
  } catch (error) {
    console.log('⚠️ Could not fix v1.ts:', error.message);
  }
}

// Fix partner update file
function fixPartnerUpdate() {
  const filePath = '/workspace/pages/api/admin/partners/update.ts';
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix syntax errors
    content = content.replace(
      /if \(req\.method !== 'POST'\) return res\.status\(405\)\.json\(\{ error: 'Method not allowed' \}\),/,
      "if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });"
    );
    
    content = content.replace(
      /if \(!code\) return res\.status\(400\)\.json\(\{ error: 'Missing code' \}\),/,
      "if (!code) return res.status(400).json({ error: 'Missing code' });"
    );
    
    fs.writeFileSync(filePath, content);
    console.log('✅ Fixed partner update syntax');
  } catch (error) {
    console.log('⚠️ Could not fix partner update:', error.message);
  }
}

// Fix pitch files
function fixPitchFiles() {
  const files = [
    '/workspace/pages/api/admin/pitch/add-slide.ts',
    '/workspace/pages/api/admin/pitch/export.ts',
    '/workspace/pages/api/admin/pitch/generate.ts'
  ];
  
  files.forEach(filePath => {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix common syntax patterns
      content = content.replace(
        /const \{ allowed \} = await ensureAdminFromApi\(req\),/g,
        "const { allowed } = await ensureAdminFromApi(req);"
      );
      
      content = content.replace(
        /if \(!allowed\) return res\.status\(403\)\.json\(\{ error: 'Forbidden' \}\),/g,
        "if (!allowed) return res.status(403).json({ error: 'Forbidden' });"
      );
      
      content = content.replace(
        /if \(req\.method !== 'POST'\) return res\.status\(405\)\.json\(\{ error: 'Method Not Allowed' \}\),/g,
        "if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });"
      );
      
      // Fix OpenAI client declaration
      content = content.replace(
        /const client = new OpenAI\(\{ apiKey: process\.env\.OPENAI_API_KEY \|\| process\.env\.NEXT_PUBLIC_OPENAI_API_KEY \}\),/,
        "const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY });"
      );
      
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed ${path.basename(filePath)}`);
    } catch (error) {
      console.log(`⚠️ Could not fix ${path.basename(filePath)}:`, error.message);
    }
  });
}

// Run all fixes
fixV1ApiDocs();
fixPartnerUpdate();
fixPitchFiles();

console.log('🎉 Comprehensive syntax fixing completed!');