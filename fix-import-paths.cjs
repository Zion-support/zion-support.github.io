const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🔧 Fixing corrupted import paths...');

// Find all files with corrupted import paths
const files = glob.sync('**/*.{js,jsx,ts,tsx}', { 
  ignore: ['node_modules/**', '.next/**', 'dist/**', 'build/**'] 
});

let fixedCount = 0;

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    
    // Fix corrupted import paths
    content = content.replace(/import\s+.*?\s+from\s+'\[.*?\]'/g, (match) => {
      // Extract the import statement parts
      const importMatch = match.match(/import\s+(.*?)\s+from\s+'\[.*?\]'/);
      if (importMatch) {
        const importPart = importMatch[1];
        
        // Try to determine the correct path based on the import
        if (importPart.includes('NextApiRequest') || importPart.includes('NextApiResponse')) {
          return `import ${importPart} from 'next'`;
        }
        if (importPart.includes('uuidv4')) {
          return `import ${importPart} from 'uuid'`;
        }
        if (importPart.includes('rateLimit')) {
          return `import ${importPart} from '../../utils/rateLimit'`;
        }
        if (importPart.includes('getSessionFromReq') || importPart.includes('isInternalAgentRequest')) {
          return `import ${importPart} from '../../utils/auth'`;
        }
        if (importPart.includes('ensureDemoUsers') || importPart.includes('generateUser') || importPart.includes('setUserCookie') || importPart.includes('upsertUser')) {
          return `import ${importPart} from '../../utils/user'`;
        }
        if (importPart.includes('UserRole')) {
          return `import ${importPart} from '../../types/user'`;
        }
        if (importPart.includes('clearUserCookie')) {
          return `import ${importPart} from '../../utils/auth'`;
        }
        if (importPart.includes('readJsonFile') || importPart.includes('writeJsonFile')) {
          return `import ${importPart} from '../../utils/fileUtils'`;
        }
        
        // Default fallback
        return `import ${importPart} from '../../utils/mock'`;
      }
      return match;
    });
    
    // Fix other common syntax issues
    content = content.replace(/const\s+(\w+)\s*=\s*null;\s*return\s+res\.status\(500\)\.json\(\{ error: 'Internal Server Error' \}\)\s*\}\s*\}/g, 
      'const $1 = null;\n  } catch (error) {\n    return res.status(500).json({ error: \'Internal Server Error\' });\n  }\n}');
    
    content = content.replace(/fs\.appendFileSync\(LOG_FILE, JSON\.stringify\(event\) \+ '\\n'\)\s*\}\s*catch\s*\(e\)\s*\{/g,
      'fs.appendFileSync(LOG_FILE, JSON.stringify(event) + \'\\n\');\n  } catch (e) {');
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`✅ Fixed: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.log(`❌ Error fixing ${file}: ${error.message}`);
  }
});

console.log(`🔧 Import path fixing completed. Fixed ${fixedCount} files`);