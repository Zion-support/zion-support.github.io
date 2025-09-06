#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting enhanced syntax fixer...');

// Fix the v1.ts file structure - more comprehensive fix
function fixV1ApiDocs() {
  const filePath = '/workspace/data/api-docs/v1.ts';
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the structure by properly closing all brackets
    content = content.replace(
      /versions: \['v1'\]\}\]\}\]\s*\]\s*\};/,
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
      /const supabase = getServerSupabase\(\),/,
      "const supabase = getServerSupabase();"
    );
    
    content = content.replace(
      /const updates: any = \{\},/,
      "const updates: any = {};"
    );
    
    fs.writeFileSync(filePath, content);
    console.log('✅ Fixed partner update syntax');
  } catch (error) {
    console.log('⚠️ Could not fix partner update:', error.message);
  }
}

// Fix pitch export file
function fixPitchExport() {
  const filePath = '/workspace/pages/api/admin/pitch/export.ts';
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix syntax errors
    content = content.replace(
      /if \(!Array\.isArray\(slides\)\) return res\.status\(400\)\.json\(\{ error: 'Invalid slides' \}\),/,
      "if (!Array.isArray(slides)) return res.status(400).json({ error: 'Invalid slides' });"
    );
    
    content = content.replace(
      /const url = `https:\/\/docs\.google\.com\/presentation\/d\/\$\{encodeURIComponent\('stub-' \+ \(version \|\| 'draft'\)\)\}`,/,
      "const url = `https://docs.google.com/presentation/d/${encodeURIComponent('stub-' + (version || 'draft'))}`;"
    );
    
    content = content.replace(
      /return res\.status\(200\)\.json\(\{ url \}\)/,
      "return res.status(200).json({ url });"
    );
    
    fs.writeFileSync(filePath, content);
    console.log('✅ Fixed pitch export syntax');
  } catch (error) {
    console.log('⚠️ Could not fix pitch export:', error.message);
  }
}

// Fix pitch generate file
function fixPitchGenerate() {
  const filePath = '/workspace/pages/api/admin/pitch/generate.ts';
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the seed array syntax
    content = content.replace(
      /const seed = \[\s*'Problem & OpportunitySolution & ProductMarket Size \(TAM\/SAM\/SOM\)Traction & MetricsBusiness ModelGo-To-MarketTeamRoadmap';\s*'Token StrategyAsk & Call to Action'\];/,
      `const seed = [
    'Problem & Opportunity',
    'Solution & Product',
    'Market Size (TAM/SAM/SOM)',
    'Traction & Metrics',
    'Business Model',
    'Go-To-Market',
    'Team',
    'Roadmap',
    'Token Strategy',
    'Ask & Call to Action'
  ];`
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
      /const \{ allowed \} = await ensureAdminFromApi\(req\),/,
      "const { allowed } = await ensureAdminFromApi(req);"
    );
    
    content = content.replace(
      /if \(!allowed\) return res\.status\(403\)\.json\(\{ error: 'Forbidden' \}\),/,
      "if (!allowed) return res.status(403).json({ error: 'Forbidden' });"
    );
    
    fs.writeFileSync(filePath, content);
    console.log('✅ Fixed pitch metrics syntax');
  } catch (error) {
    console.log('⚠️ Could not fix pitch metrics:', error.message);
  }
}

// Run all fixes
fixV1ApiDocs();
fixPartnerUpdate();
fixPitchExport();
fixPitchGenerate();
fixPitchMetrics();

console.log('🎉 Enhanced syntax fixing completed!');