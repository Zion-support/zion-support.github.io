#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing final syntax errors...');

// Fix specific files with known issues
const filesToFix = [
    'src/components/SEO.tsx',
    'src/components/talent/TalentCard.jsx',
    'src/components/ui/card.tsx',
    'src/components/ui/textarea.tsx',
    'src/components/ui/use-toast.ts'
];

function fixFile(filePath) {
    if (!fs.existsSync(filePath)) {
        console.log(`⚠️  File not found: ${filePath}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let fixes = 0;

    // Fix SEO.tsx
    if (filePath.includes('SEO.tsx')) {
        // Fix malformed JSX
        content = content.replace(/'"`\s*<meta name="description" content={description}\s*\/>\s*<meta name="keywords" content={keywords}\s*\/>\s*<meta name="author" content="Zion Tech Group"\s*\/>\s*<meta name="robots" content="index, follow"\s*\/>/g, '');
        
        // Fix malformed return statement
        content = content.replace(/return\s*\(\s*<>\s*<style jsx>\{`\s*\/\* Optimize animations \*\/\s*`\}<\/style>\s*\{\/\* Performance monitoring \*\/\}\s*<script>`\s*\{`\s*\/\/ Performance monitoring'\s*if\('performance' in window\)\s*\{[^}]*\}\s*`\}<\/script>\s*<\/>/g, 'return null;');
    }

    // Fix TalentCard.jsx
    if (filePath.includes('TalentCard.jsx')) {
        // Fix malformed return statement
        content = content.replace(/return\s*\(\s*<Card[^>]*className="[^"]*"""\s*onClick={handleViewProfile}\s*tabIndex={0}"""\s*>\s*""""\s*<div className="p-6">""""/g, (match) => {
            return match.replace(/"""/g, '').replace(/""""/g, '');
        });
        
        // Fix malformed function structure
        content = content.replace(/export default function Page\(props\) \{\s*\}\s*const handleBook = \(e\) => \{\s*e\.preventDefault\(\)\s*e\.stopPropagation\(\)\s*if\(onBook\) \{\s*onBook\(talent\);\s*\}\s*\};\s*const handleViewProfile = \(\) => \{\s*navigate\(`\/talent\/\$\{talent\.id\}`\);\s*\};\s*\/\/ Extract skills - limit to 5 for display\s*const skills = talent\.skills\?\.slice\(0, 5\) \|\| \[\]\s*return \(\s*<Card[^>]*>\s*<div[^>]*>/g, (match) => {
            return `export default function TalentCard({ talent, onBook }) {
  const navigate = useNavigate();
  
  const handleBook = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onBook) {
      onBook(talent);
    }
  };
  
  const handleViewProfile = () => {
    navigate(\`/talent/\${talent.id}\`);
  };
  
  // Extract skills - limit to 5 for display
  const skills = talent.skills?.slice(0, 5) || [];
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-purple" onClick={handleViewProfile} tabIndex={0}>
      <div className="p-6">`;
        });
    }

    // Fix card.tsx
    if (filePath.includes('card.tsx')) {
        // Remove malformed closing tags
        content = content.replace(/<\/div>\s*$/g, '');
    }

    // Fix textarea.tsx
    if (filePath.includes('textarea.tsx')) {
        // Fix malformed className
        content = content.replace(/className=\{`flex min-h-\[80px\] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder: tex t-muted-foreground focus-visible: outlin e-none focus-visible: rin g-2 focus-visible: rin g-ring focus-visible: rin g-offset-2 disabled: curso r-not-allowed disabled: opacit y-50 \$\{className\}`\}/g, 'className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}');
    }

    // Fix use-toast.ts
    if (filePath.includes('use-toast.ts')) {
        // Fix malformed interface
        content = content.replace(/position\?\: "top-right" \| "top-center" \| "top-left" \| "bottom-right" \| "bottom-center" \| "bottom-left"\}\s*$/g, 'position?: "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left";\n}');
        
        // Fix malformed function
        content = content.replace(/const showToast = \(message: string, options\?\: ToastOptions\)\s*=> \{\s*return toast\(message, options\)\s*return \{ showToast \};\s*\};\s*$/g, 'const showToast = (message: string, options?: ToastOptions) => {\n    return toast(message, options);\n  };\n\n  return { showToast };\n}');
    }

    // General fixes
    content = content.replace(/"""/g, '');
    content = content.replace(/""""/g, '');
    content = content.replace(/'"`/g, '');
    content = content.replace(/`"/g, '');
    content = content.replace(/`\s*$/gm, '');
    content = content.replace(/^\s*`\s*$/gm, '');

    // Count fixes
    const originalContent = fs.readFileSync(filePath, 'utf8');
    if (content !== originalContent) {
        fixes = (originalContent.match(/"""/g) || []).length + 
                (originalContent.match(/""""/g) || []).length +
                (originalContent.match(/'"`/g) || []).length +
                (originalContent.match(/`"/g) || []).length;
    }

    if (fixes > 0) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed ${fixes} issues in ${filePath}`);
    } else {
        console.log(`✨ No issues found in ${filePath}`);
    }

    return fixes;
}

// Process all files
let totalFixes = 0;
filesToFix.forEach(file => {
    totalFixes += fixFile(file);
});

console.log(`\n📊 Summary:`);
console.log(`   Files processed: ${filesToFix.length}`);
console.log(`   Total fixes applied: ${totalFixes}`);

if (totalFixes > 0) {
    console.log(`\n✨ Final syntax error fixing completed!`);
} else {
    console.log(`\n✨ No syntax errors found to fix.`);
}