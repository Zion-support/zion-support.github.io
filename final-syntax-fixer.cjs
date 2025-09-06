#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting final comprehensive syntax fixer...');

// Fix the v1.ts file structure - final fix
function fixV1ApiDocs() {
  const filePath = '/workspace/data/api-docs/v1.ts';
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the structure by properly closing all brackets
    content = content.replace(
      /versions: \['v1'\]\}\]\}\]\s*\}\s*\]\s*\};/,
      "versions: ['v1']}]}]\n    }\n  ]\n};"
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
      /if \(error\) return res\.status\(500\)\.json\(\{ error: error\.message \}\),/,
      "if (error) return res.status(500).json({ error: error.message });"
    );
    
    content = content.replace(
      /return res\.status\(200\)\.json\(\{ ok: true \}\)/,
      "return res.status(200).json({ ok: true });"
    );
    
    content = content.replace(
      /return res\.status\(500\)\.json\(\{ error: e\?\.message \}\)/,
      "return res.status(500).json({ error: e?.message });"
    );
    
    fs.writeFileSync(filePath, content);
    console.log('✅ Fixed partner update syntax');
  } catch (error) {
    console.log('⚠️ Could not fix partner update:', error.message);
  }
}

// Fix pitch generate file
function fixPitchGenerate() {
  const filePath = '/workspace/pages/api/admin/pitch/generate.ts';
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the messages array syntax
    content = content.replace(
      /\{ role: 'system', content: 'You generate crisp, data-driven investor pitch content\.' \};/,
      "{ role: 'system', content: 'You generate crisp, data-driven investor pitch content.' },"
    );
    
    content = content.replace(
      /temperature: 0\.5\}\),/,
      "temperature: 0.5});"
    );
    
    content = content.replace(
      /content = chat\.choices\?\.\[0\]\?\.message\?\.content \|\| ''/,
      "const content = chat.choices?.[0]?.message?.content || '';"
    );
    
    fs.writeFileSync(filePath, content);
    console.log('✅ Fixed pitch generate syntax');
  } catch (error) {
    console.log('⚠️ Could not fix pitch generate:', error.message);
  }
}

// Fix pitch metrics file
function fixPitchMetrics() {
  const filePath = '/workspace/pages/api/admin/pitch/metrics.ts';
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix syntax errors
    content = content.replace(
      /\{ name: 'Fortune 500 Co', summary: 'Automated LLM evaluation pipeline, 23% cost reduction' \};/,
      "{ name: 'Fortune 500 Co', summary: 'Automated LLM evaluation pipeline, 23% cost reduction' },"
    );
    
    content = content.replace(
      /\{ name: 'Global Retailer', summary: 'AI catalog enrichment, 9% revenue lift in A\/B' \}\]\};/,
      "{ name: 'Global Retailer', summary: 'AI catalog enrichment, 9% revenue lift in A/B' }]};"
    );
    
    content = content.replace(
      /res\.status\(200\)\.json\(data\)/,
      "res.status(200).json(data);"
    );
    
    fs.writeFileSync(filePath, content);
    console.log('✅ Fixed pitch metrics syntax');
  } catch (error) {
    console.log('⚠️ Could not fix pitch metrics:', error.message);
  }
}

// Fix pitch rewrite file
function fixPitchRewrite() {
  const filePath = '/workspace/pages/api/admin/pitch/rewrite.ts';
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix syntax errors
    content = content.replace(
      /const client = new OpenAI\(\{ apiKey: process\.env\.OPENAI_API_KEY \|\| process\.env\.NEXT_PUBLIC_OPENAI_API_KEY \}\),/,
      "const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY });"
    );
    
    content = content.replace(
      /const \{ allowed \} = await ensureAdminFromApi\(req\),/,
      "const { allowed } = await ensureAdminFromApi(req);"
    );
    
    content = content.replace(
      /if \(!allowed\) return res\.status\(403\)\.json\(\{ error: 'Forbidden' \}\),/,
      "if (!allowed) return res.status(403).json({ error: 'Forbidden' });"
    );
    
    content = content.replace(
      /if \(req\.method !== 'POST'\) return res\.status\(405\)\.json\(\{ error: 'Method Not Allowed' \}\),/,
      "if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });"
    );
    
    fs.writeFileSync(filePath, content);
    console.log('✅ Fixed pitch rewrite syntax');
  } catch (error) {
    console.log('⚠️ Could not fix pitch rewrite:', error.message);
  }
}

// Run all fixes
fixV1ApiDocs();
fixPartnerUpdate();
fixPitchGenerate();
fixPitchMetrics();
fixPitchRewrite();

console.log('🎉 Final comprehensive syntax fixing completed!');