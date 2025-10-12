#!/usr/bin/env node

import fs from 'fs';

// Function to fix the app/App.tsx file
function fix App Tsx() {
  const file Path = '/workspace/app/App.tsx';
  
  try {
    let content = fs.read File Sync(file Path, 'utf8');
    
    // Fix malformed J SX syntax
    content = content.replace(/element="\{<([^"]+)" \/ \/>}/g, 'element={<$1 />}');
    content = content.replace(/element="\{<([^"]+)" \/>}/g, 'element={<$1 />}');
    content = content.replace(/element="\{<([^"]+)" \/ \/>}/g, 'element={<$1 />}');
    
    // Fix malformed J SX attributes
    content = content.replace(/fallback="\{<([^"]+)" \/ \/>}/g, 'fallback={<$1 />}');
    content = content.replace(/fallback="\{<([^"]+)" \/>}/g, 'fallback={<$1 />}');
    
    // Fix malformed self-closing tags
    content = content.replace(/<([^>]+) \/ \/>/g, '<$1 />');
    content = content.replace(/<([^>]+) \/>/g, '<$1 />');
    
    // Fix malformed closing tags
    content = content.replace(/<\/ ([^>]+)>/g, '</$1>');
    
    // Fix specific patterns
    content = content.replace(/<R outes \/>/g, '<R outes>');
    content = content.replace(/<B rowser Router \/>/g, '<B rowser Router>');
    content = content.replace(/<H elmet Provider \/>/g, '<H elmet Provider>');
    content = content.replace(/<E rror Boundary \/>/g, '<E rror Boundary>');
    
    // Add missing closing tags at the end
    content = content.replace(/(\s*)<\/S uspense>\s*<\/d iv>\s*<\/B rowser Router>\s*<\/H elmet Provider>\s*<\/E rror Boundary>\s*\);/g, 
      '$1</S uspense>\n          </d iv>\n        </B rowser Router>\n      </H elmet Provider>\n    </E rror Boundary>\n  );');
    
    fs.write File Sync(file Path, content, 'utf8');
    console.log('Fixed app/App.tsx');
    return true;
  } catch (error) {
    console.error('Error fixing app/App.tsx:', error.message);
    return false;
  }
}

// Run the fix
fix App Tsx();