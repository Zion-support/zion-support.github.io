<<<<<<< HEAD
#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
console.log('🔧 Fixing remaining lint errors...');
// Fix specific files with known issues;
const filesToFix = [
  'apps.backup/api/src/index.ts',
  'apps.backup/api/src/openai.ts',
  'apps.backup/api/src/pg.ts',
  'apps.backup/extension/public/popup.js',
  'apps.backup/extension/scripts/generate-icons.js]
=======
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
console.log('🔧 Fixing remaining lint errors...);
// Fix specific files with known issues;
const filesToFix = [
  'apps.backup/api/src/index.ts,apps.backup/api/src/openai.ts,apps.backup/api/src/pg.ts,apps.backup/extension/public/popup.js,apps.backup/extension/scripts/generate-icons.js]
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
];

function fixFile(filePath) {
  try {
  // TODO: Implement
}
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath});
      return false;
<<<<<<< HEAD

    let content = fs.readFileSync(filePath, 'utf8');
=======
    }
'
    let content = fs.readFileSync(filePath,utf8);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    let modified = false;

    // Fix parsing errors in index.ts;
    if (filePath.includes('apps.backup/api/src/index.ts')) {
      // Fix syntax errors;
<<<<<<< HEAD
      content = content.replace(/,\s*\)/g, ')');
      content = content.replace(/\(\s*,/g, '(');

    // Fix openai.ts;
    if (filePath.includes('apps.backup/api/src/openai.ts')) {
      // Add proper imports and fix variable references;`;
=======
      content = content.replace(/,\s*\)/g,));
      content = content.replace(/\(\s*,/g,(');
    }

    // Fix openai.ts;
    if (filePath.includes('apps.backup/api/src/openai.ts')) {
      // Add proper imports and fix variable references;
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      content = `import OpenAI from 'openai';
const _apiKey = process.env.OPENAI_API_KEY;
const apiKey = _apiKey;

export async function generateText(_openai, _role, _opts) {
  const _prompt = _opts.prompt;
  const role = _role;
  const opts = _opts;
  
  const openai = new OpenAI({ apiKey });
  const prompt = _prompt;
  
  const _completion = await openai.chat.completions.create({
<<<<<<< HEAD
    model: 'gpt-3.5-turbo',
=======
    model: gpt-3.5-turbo,
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    messages: [{ role, content: prompt }],
    ...opts;)
  });
  
  const completion = _completion;
  return completion.choices[0]?.message?.content || ;
<<<<<<< HEAD
}`;
=======
}
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
`;
      modified = true;

    // Fix pg.ts;
<<<<<<< HEAD
    if (filePath.includes('apps.backup/api/src/pg.ts')) {`;
=======
    if (filePath.includes('apps.backup/api/src/pg.ts')) {
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      content = `import { Pool, PoolClient } from 'pg';
const pool = new Pool({
  connectionString: process.env.DATABASE_URL;)

export const getPool = () => pool;

export async function withTransaction(_userId, _fn) {
  const _client = await pool.connect();
  const client = _client;
  
  // TODO: Implement
<<<<<<< HEAD
=======
}
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    await client.query('BEGIN');
    const result = await _fn(client);
    await client.query('COMMIT');
    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
  // TODO: Implement
    client.release();

    // Fix popup.js;
    if (filePath.includes('apps.backup/extension/public/popup.js')) {
<<<<<<< HEAD
      content = content.replace(/\bchrome\b/g, 'window.chrome');
      content = content.replace(/\bcrypto\b/g, 'window.crypto');

    // Fix generate-icons.js;
    if (filePath.includes('apps.backup/extension/scripts/generate-icons.js')) {
      content = content.replace(/\bURL\b/g, 'window.URL');

    if (modified) {
      fs.writeFileSync(filePath, content);`;
      console.log(`✅ Fixed: ${filePath}`);
=======
      content = content.replace(/\bchrome\b/g,window.chrome');
      content = content.replace(/\bcrypto\b/g,window.crypto');
      modified = true;
    }

    // Fix generate-icons.js;
    if (filePath.includes('apps.backup/extension/scripts/generate-icons.js')) {
      content = content.replace(/\bURL\b/g,window.URL');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath});
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      return true;

  } catch (error) {`;
    console.error(`❌ Error fixing ${filePath}:`, error.message);

// Main execution;
let fixedCount = 0;
let errorCount = 0;

for (const file of filesToFix) {
  // TODO: Implement
    if (fixFile(file)) {
      fixedCount++;
    errorCount++;`;
    console.error(`❌ Error processing ${file}:`, error.message);
<<<<<<< HEAD
console.log(`\n🎉 Remaining lint fixes complete!`);`;
console.log(`✅ Fixed: ${fixedCount} files`);`;
console.log(`❌ Errors: ${errorCount} files`);`;
=======
  }
}

console.log(`\n🎉 Remaining lint fixes complete!`);
console.log(`✅ Fixed: ${fixedCount} files`);
console.log(`❌ Errors: ${errorCount} files`);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
