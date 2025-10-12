import fs from 'fs';
#!/usr/bin/env node;

// Function to fix the app/App.tsx file;
function fixAppTsx() {
  const filePath = '/workspace/app/App.tsx';
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix malformed JSX syntax;
    content = content.replace(/element="\{<([^"]+)" \/ \/&gt;}/g, 'element={<$1 /&gt;}');
    content = content.replace(/element="\{<([^"]+)" \/&gt;}/g, 'element={<$1 /&gt;}');
    content = content.replace(/element="\{<([^"]+)" \/ \/&gt;}/g, 'element={<$1 /&gt;}');
    
    // Fix malformed JSX attributes;
    content = content.replace(/fallback="\{<([^"]+)" \/ \/&gt;}/g, 'fallback={<$1 /&gt;}');
    content = content.replace(/fallback="\{<([^"]+)" \/&gt;}/g, 'fallback={<$1 /&gt;}');
    
    // Fix malformed self-closing tags;
    content = content.replace(/<([^>]+) \/ \/>/g, '<$1 />');
    content = content.replace(/<([^>]+) \/>/g, '<$1 />');
    
    // Fix malformed closing tags;
    content = content.replace(/<\/ ([^>]+)>/g, '</$1>');
    
    // Fix specific patterns;
    content = content.replace(/<Routes \/>/g, '<Routes>');
    content = content.replace(/<BrowserRouter \/>/g, '<BrowserRouter>');
    content = content.replace(/<HelmetProvider \/>/g, '<HelmetProvider>');
    content = content.replace(/<ErrorBoundary \/>/g, '<ErrorBoundary>');
    
    // Add missing closing tags at the end;
    content = content.replace(/(\s*)<\/Suspense>\s*<\/div>\s*<\/BrowserRouter>\s*<\/HelmetProvider>\s*<\/ErrorBoundary>\s*\);/g, 
      '$1</Suspense>\n          </div>\n        </BrowserRouter>\n      </HelmetProvider>\n    </ErrorBoundary>\n  );');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed app/App.tsx');
    return true;
  } catch (error) {
    console.error('Error fixing app/App.tsx:', error.message);
    return false;

// Run the fix;
fixAppTsx();
