 /** * Helper script to update icon imports across the codebase * * Usage: * 1. Run: node scripts/update-icon-imports.js * 2. This will find and replace lucide-react icon imports with imports from our custom icons package */ 
}return false;
}catch (err) {
  console.error (`❌ Error processing $ {
  filePath 
}:`, err);
return false;
}
}//Find all TypeScript/JavaScript/JSX/TSX files const files = glob.sync ('src/**/*. {
  js, jsx, ts, tsx 
}');
let updatedFiles = 0;
files.forEach (file => {
  const updated = updateIconImportsInFile (file);
if (updated) updatedFiles++ 
});
