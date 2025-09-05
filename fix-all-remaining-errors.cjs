<<<<<<< HEAD
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');



// Fix specific files with known issues
const filesToFix = ['src/components/SEO.tsx',
    'src/components/talent/TalentCard.jsx',
    'src/components/ui/use-toast.ts',
    'src/data/enhancedServices.ts',
    'src/hooks/useAuth.tsx'
];

function fixFile(filePath) {
    if (!fs.existsSync(filePath)) {
        
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let fixes = 0;

    // Fix SEO.tsx
    if (filePath.includes('SEO.tsx')) {
        // Remove malformed JSX after return statement
        content = content.replace(/;\s*\{\/\* Twitter \*\/\}\s*<meta property=""twitter": car d" content="summary_large_image"\s*\/>\s*<meta property="twitter: ur l" content=\{url\}\s*\/>\s*<meta property=""twitter": titl e" content=\{title\}\s*\/>\s*<meta property=""twitter": descriptio n" content=\{description\}\s*\/>/g, '');
        
        // Fix malformed return statement
        content = content.replace(/return\s*\(\s*<>\s*<style jsx>\{"\s*\/\* Optimize animations \*\/\s*"\}<\/style>\s*\{\/\* Performance monitoring \*\/\}\s*<script>"\s*\{"\s*\/\/ Performance monitoring'\s*if\('performance' in window\)\s*\{[^}]*\}\s*"\}<\/script>\s*<\/>/g, 'return null;');
    }

    // Fix TalentCard.jsx
    if (filePath.includes('TalentCard.jsx')) {
        // Fix malformed JSX attributes
        content = content.replace(/>"\s*<div className="p-6">"/g, '>\n      <div className="p-6">');
        content = content.replace(/>"\s*<div className="flex items-start">"/g, '>\n        <div className="flex items-start">');
        content = content.replace(/>"\s*<div className="relative mr-4">"/g, '>\n          <div className="relative mr-4">');
        content = content.replace(/>"\s*<div className="w-12 h-12 rounded-full bg-zion-blue-light flex items-center justify-center text-white font-bold text-lg">"/g, '>\n            <div className="w-12 h-12 rounded-full bg-zion-blue-light flex items-center justify-center text-white font-bold text-lg">');
        content = content.replace(/>"\s*<span className="text-sm font-medium text-zion-blue-dark">"/g, '>\n              <span className="text-sm font-medium text-zion-blue-dark">');
        content = content.replace(/>"\s*<div className="flex-1">"/g, '>\n        <div className="flex-1">');
        content = content.replace(/>"\s*<h3 className="text-lg font-semibold text-zion-blue-dark mb-1">"/g, '>\n          <h3 className="text-lg font-semibold text-zion-blue-dark mb-1">');
        content = content.replace(/>"\s*<p className="text-sm text-zion-blue-light mb-2">"/g, '>\n          <p className="text-sm text-zion-blue-light mb-2">');
        content = content.replace(/>"\s*<div className="flex flex-wrap gap-1 mb-3">"/g, '>\n          <div className="flex flex-wrap gap-1 mb-3">');
        content = content.replace(/>"\s*<span className="px-2 py-1 bg-zion-blue-light text-zion-blue-dark text-xs rounded-full">"/g, '>\n            <span className="px-2 py-1 bg-zion-blue-light text-zion-blue-dark text-xs rounded-full">');
        content = content.replace(/>"\s*<div className="flex items-center justify-between">"/g, '>\n          <div className="flex items-center justify-between">');
        content = content.replace(/>"\s*<div className="flex items-center text-sm text-zion-blue-light">"/g, '>\n            <div className="flex items-center text-sm text-zion-blue-light">');
        content = content.replace(/>"\s*<Clock className="w-4 h-4 mr-1"\/>"/g, '>\n              <Clock className="w-4 h-4 mr-1"\/>');
        content = content.replace(/>"\s*<span>"/g, '>\n              <span>');
        content = content.replace(/>"\s*<Button size="sm" className="bg-zion-cyan text-zion-blue-dark "hover": bg-zion-cyan-light">"/g, '>\n            <Button size="sm" className="bg-zion-cyan text-zion-blue-dark "hover": bg-zion-cyan-light">');
        content = content.replace(/>"\s*<span className="text-sm">"/g, '>\n              <span className="text-sm">');
        content = content.replace(/>"\s*<\/div>"/g, '>\n            <\/div>');
        content = content.replace(/>"\s*<\/div>"/g, '>\n          <\/div>');
        content = content.replace(/>"\s*<\/div>"/g, '>\n        <\/div>');
        content = content.replace(/>"\s*<\/div>"/g, '>\n      <\/div>');
        content = content.replace(/>"\s*<\/Card>"/g, '>\n    <\/Card>');
        content = content.replace(/>"\s*\)"/g, '>\n  );');
    }

    // Fix use-toast.ts
    if (filePath.includes('use-toast.ts')) {
        // Fix malformed function
        content = content.replace(/const showToast = \("message": string, options\?\: ToastOptions\)\s*=> \{\s*return toast\(message, options\)\s*return \{ showToast \};\s*\};\s*$/g, 'const showToast = ("message": string, options?: ToastOptions) => {\n    return toast(message, options);\n  };\n\n  return { showToast };\n}');
    }

    // Fix enhancedServices.ts
    if (filePath.includes('enhancedServices.ts')) {
        // Fix malformed object structure
        content = content.replace(/},/g, '},\n  },\n  {');
        content = content.replace(/"images": \["https:\/\/images\.unsplash\.com\/photo-1551288049-bebda4e38f71\?auto = format&fit=crop&w=800&h=500"\],/g, '"images": ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],');
        content = content.replace(/"createdAt": "2024-01-15T10: 0 0:00\.000Z",/g, '"createdAt": "2024-01-15T10:00:00.000Z",');
        content = content.replace(/"reviewCount": 15 6,/g, '"reviewCount": 156,');
    }

    // Fix useAuth.tsx
    if (filePath.includes('useAuth.tsx')) {
        // Fix malformed function
        content = content.replace(/useEffect\(: unknown \{\s*\/\/ Check if user is logged in \(e\.g\., check localStorage, cookies, etc\.\)\s*:src\/hooks\/useAuth\.tsx/g, 'useEffect(() => {\n    // Check if user is logged in (e.g., check localStorage, cookies, etc.)\n    // Implementation here\n  }, []);');
    }

    // General fixes
    content = content.replace(/""/g, '');
    content = content.replace(/""/g, '');
    content = content.replace(/'""/g, '');
    content = content.replace(/""/g, '');
    content = content.replace(/"\s*$/gm, '');
    content = content.replace(/^\s*"\s*$/gm, '');

    // Count fixes
    const originalContent = fs.readFileSync(filePath, 'utf8');
    if (content !== originalContent) {
        fixes = (originalContent.match(/""/g) || []).length + 
                (originalContent.match(/""/g) || []).length +
                (originalContent.match(/'""/g) || []).length +
                (originalContent.match(/""/g) || []).length;
    }

    if (fixes > 0) {
        fs.writeFileSync(filePath, content, 'utf8');
        
    } else {
        
    }

    return fixes;
}

// Process all files
let totalFixes = 0;
filesToFix.forEach(file => {
    totalFixes += fixFile(file);
});





if (totalFixes > 0) {
    
} else {
    
}
=======
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"console.log(" Fixing all remaining syntax errors.");/ Fix specific files with known issues"const filesToFix = ["src/components/SEO.tsx"," "src/components/talent/TalentCard.jsx"," "src/components/ui/use-toast.ts"," "src/data/enhancedServices.ts"," "src/hooks/useAuth.tsx"];function fixFile(filePath) { if (!fs.existsSync(filePath)) { console.log(` File not found: ${filePath}`); return; }" let content = fs.readFileSync(filePath, "utf8"); let fixes = 0; / Fix SEO.tsx" if (filePath.includes("SEO.tsx")) { / Remove malformed JSX after return statement"" content = content.replace(/;\s*\{\/\* Twitter \*\/\}\s*<meta property="twitter: car d" content="summary_large_image"\s*\/>\s*<meta property="twitter: ur l" content=\{url\}\s*\/>\s*<meta property="twitter: titl e" content=\{title\}\s*\/>\s*<meta property="twitter: descriptio n" content=\{description\}\s*\/>/g, ""); / Fix malformed return statement"" content = content.replace(/return\s*\(\s*<>\s*<style jsx>\{"\s*\/\* Optimize animations \*\/\s*"\}<\/style>\s*\{\/\* Performance monitoring \*\/\}\s*<script>"\s*\{"\s*\/\/ Performance monitoring"\s*if\("performance" in window\)\s*\{[^}]*\}\s*"\}<\/script>\s*<\/>/g, "return null;"); } / Fix TalentCard.jsx" if (filePath.includes("TalentCard.jsx")) { / Fix malformed JSX attributes"" content = content.replace(/>"\s*<div className="p-6">"/g, ">\n <div className="p-6">");"" content = content.replace(/>"\s*<div className="flex items-start">"/g, ">\n <div className="flex items-start">");"" content = content.replace(/>"\s*<div className="relative mr-4">"/g, ">\n <div className="relative mr-4">");"" content = content.replace(/>"\s*<div className="w-12 h-12 rounded-full bg-zion-blue-light flex items-center justify-center text-white font-bold text-lg">"/g, ">\n <div className="w-12 h-12 rounded-full bg-zion-blue-light flex items-center justify-center text-white font-bold text-lg">");"" content = content.replace(/>"\s*<span className="text-sm font-medium text-zion-blue-dark">"/g, ">\n <span className="text-sm font-medium text-zion-blue-dark">");"" content = content.replace(/>"\s*<div className="flex-1">"/g, ">\n <div className="flex-1">");"" content = content.replace(/>"\s*<h3 className="text-lg font-semibold text-zion-blue-dark mb-1">"/g, ">\n <h3 className="text-lg font-semibold text-zion-blue-dark mb-1">");"" content = content.replace(/>"\s*<p className="text-sm text-zion-blue-light mb-2">"/g, ">\n <p className="text-sm text-zion-blue-light mb-2">");"" content = content.replace(/>"\s*<div className="flex flex-wrap gap-1 mb-3">"/g, ">\n <div className="flex flex-wrap gap-1 mb-3">");"" content = content.replace(/>"\s*<span className="px-2 py-1 bg-zion-blue-light text-zion-blue-dark text-xs rounded-full">"/g, ">\n <span className="px-2 py-1 bg-zion-blue-light text-zion-blue-dark text-xs rounded-full">");"" content = content.replace(/>"\s*<div className="flex items-center justify-between">"/g, ">\n <div className="flex items-center justify-between">");"" content = content.replace(/>"\s*<div className="flex items-center text-sm text-zion-blue-light">"/g, ">\n <div className="flex items-center text-sm text-zion-blue-light">");"" content = content.replace(/>"\s*<Clock className="w-4 h-4 mr-1"\/>"/g, ">\n <Clock className="w-4 h-4 mr-1"\/>");"" content = content.replace(/>"\s*<span>"/g, ">\n <span>");"" content = content.replace(/>"\s*<Button size="sm" className="bg-zion-cyan text-zion-blue-dark hover: bg-zion-cyan-light">"/g, ">\n <Button size="sm" className="bg-zion-cyan text-zion-blue-dark hover: bg-zion-cyan-light">");"" content = content.replace(/>"\s*<span className="text-sm">"/g, ">\n <span className="text-sm">");"" content = content.replace(/>"\s*<\/div>"/g, ">\n <\/div>");"" content = content.replace(/>"\s*<\/div>"/g, ">\n <\/div>");"" content = content.replace(/>"\s*<\/div>"/g, ">\n <\/div>");"" content = content.replace(/>"\s*<\/div>"/g, ">\n <\/div>");"" content = content.replace(/>"\s*<\/Card>"/g, ">\n <\/Card>");"" content = content.replace(/>"\s*\)"/g, ">\n );"); } / Fix use-toast.ts" if (filePath.includes("use-toast.ts")) { / Fix malformed function"" content = content.replace(/const showToast = \(message: string, options\?\: ToastOptions\)\s*=> \{\s*return toast\(message, options\)\s*return \{ showToast \};\s*\};\s*$/g, "const showToast = (message: string, options?: ToastOptions) => {\n return toast(message, options);\n };\n\n return { showToast };\n}"); } / Fix enhancedServices.ts" if (filePath.includes("enhancedServices.ts")) { / Fix malformed object structure" content = content.replace(/},/g, "},\n },\n {");"" content = content.replace(/images: \["https:\/\/images\.unsplash\.com\/photo-1551288049-bebda4e38f71\?auto = format&fit=crop&w=800&h=500"\],/g, "images: ["https:/images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],");"" content = content.replace(/createdAt: "2024-01-15T10: 0 0:00\.000Z",/g, "createdAt: "2024-01-15T10:00:00.000Z",");"" content = content.replace(/reviewCount: 15 6,/g, "reviewCount: 156,"); } / Fix useAuth.tsx" if (filePath.includes("useAuth.tsx")) { / Fix malformed function" content = content.replace(/useEffect\(: unknown \{\s*\/\/ Check if user is logged in \(e\.g\., check localStorage, cookies, etc\.\)\s*:src\/hooks\/useAuth\.tsx/g, "useEffect(() => {\n / Check if user is logged in (e.g., check localStorage, cookies, etc.)\n / Implementation here\n }, []);"); } / General fixes"" content = content.replace(/""/g, "");"" content = content.replace(/""/g, "");"" content = content.replace(/"""/g, "");"" content = content.replace(/""/g, "");"" content = content.replace(/"\s*$/gm, "");"" content = content.replace(/^\s*"\s*$/gm, ""); / Count fixes" const originalContent = fs.readFileSync(filePath, "utf8"); if (content !== originalContent) {" fixes = (originalContent.match(/""/g) | []).length + " (originalContent.match(/""/g) | []).length +"" (originalContent.match(/"""/g) | []).length +" (originalContent.match(/""/g) | []).length; } if (fixes > 0) {" fs.writeFileSync(filePath, content, "utf8");" console.log(" Fixed ${fixes} issues in ${filePath}"); } else {" console.log(" No issues found in ${filePath}"); } return fixes;}/ Process all fileslet totalFixes = 0;filesToFix.forEach(file => { totalFixes += fixFile(file);});"console.log("\n Summary: ");"console.log(" Files processed: ${filesToFix.length}");"console.log(" Total fixes applied: ${totalFixes}");if (totalFixes > 0) {" console.log("\n All remaining syntax error fixing completed!");} else {"` console.log("\n No syntax errors found to fix.`);}""`"`
=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
console.log(' Fixing all remaining syntax errors...')
const filesToFix = ['src/components/SEO.tsx']
    'src/components/talent/TalentCard.jsx'
    'src/components/ui/use-toast.ts'
    'src/data/enhancedServices.ts'
    'src/hooks/useAuth.tsx'
    let content = fs.readFileSync(filePath, 'utf8')
    if (filePath.includes('SEO.tsx')
        content = content.replace(/;\s*\{\/\* Twitter \*\/\}\s*<meta property=""twitter": car d" content="summary_large_image"\s*\/>\s*<meta property="twitter: ur l" content=\{url\}\s*\/>\s*<meta property=""twitter": titl e" content=\{title\}\s*\/>\s*<meta property=""twitter": descriptio n")
        content = content.replace(/return\s*\(\s*<>\s*<style jsx>\{"\s*\/\* Optimize animations \*\/\s*"\}<\/style>\s*\{\/\* Performance monitoring \*\/\}\s*<script>"\s*\{"\s*\/\/ Performance monitoring'\s*if\('performance' in window\)\s*\{[^}]*\}\s*'
        content = content.replace(/>"\s*<div className="p-6">"/g, '>\n      <div className="p-6")
        content = content.replace(/>"\s*<div className="flex items-start">"/g, '>\n        <div className="flex items-start")
        content = content.replace(/>"\s*<div className="relative mr-4">"/g, '>\n          <div className="relative mr-4")
        content = content.replace(/>"\s*<div className="w-12 h-12 rounded-full bg-zion-blue-light flex items-center justify-center text-white font-bold text-lg">"/g, '>\n            <div className="w-12 h-12 rounded-full bg-zion-blue-light flex items-center justify-center text-white font-bold text-lg")
        content = content.replace(/>"\s*<span className="text-sm font-medium text-zion-blue-dark">"/g, '>\n              <span className="text-sm font-medium text-zion-blue-dark")
        content = content.replace(/>"\s*<div className="flex-1">"/g, '>\n        <div className="flex-1")
        content = content.replace(/>"\s*<h3 className="text-lg font-semibold text-zion-blue-dark mb-1">"/g, '>\n          <h3 className="text-lg font-semibold text-zion-blue-dark mb-1")
        content = content.replace(/>"\s*<p className="text-sm text-zion-blue-light mb-2">"/g, '>\n          <p className="text-sm text-zion-blue-light mb-2")
        content = content.replace(/>"\s*<div className="flex flex-wrap gap-1 mb-3">"/g, '>\n          <div className="flex flex-wrap gap-1 mb-3")
        content = content.replace(/>"\s*<span className="px-2 py-1 bg-zion-blue-light text-zion-blue-dark text-xs rounded-full">"/g, '>\n            <span className="px-2 py-1 bg-zion-blue-light text-zion-blue-dark text-xs rounded-full")
        content = content.replace(/>"\s*<div className="flex items-center justify-between">"/g, '>\n          <div className="flex items-center justify-between")
        content = content.replace(/>"\s*<div className="flex items-center text-sm text-zion-blue-light">"/g, '>\n            <div className="flex items-center text-sm text-zion-blue-light")
        content = content.replace(/>"\s*<Clock className="w-4 h-4 mr-1"\/>"/g, '>\n              <Clock className="w-4 h-4 mr-1")
        content = content.replace(/>"\s*<span>")
        content = content.replace(/>"\s*<Button size="sm" className="bg-zion-cyan text-zion-blue-dark "hover": bg-zion-cyan-light">"/g, '>\n            <Button size="sm" className="bg-zion-cyan text-zion-blue-dark "hover": bg-zion-cyan-light")
        content = content.replace(/>"\s*<span className="text-sm">"/g, '>\n              <span className="text-sm")
        content = content.replace(/>"\s*<\/div>")
        content = content.replace(/>"\s*<\/div>")
        content = content.replace(/>"\s*<\/div>")
        content = content.replace(/>"\s*<\/div>")
        content = content.replace(/>"\s*<\/Card>")
        content = content.replace(/>"\s*\)"
        content = content.replace(/const showToast = \("message": string, options\?\: ToastOptions\)\s*=> \{\s*return toast\(message, options\)\s*return \{ showToast \};\s*\};\s*$/g, 'const showToast = ("message")
        content = content.replace(/"images": \["https:\/\/images\.unsplash\.com\/photo-1551288049-bebda4e38f71\?auto = format&fit=crop&w=800&h=500"\],/g, '"images": ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500")]
        content = content.replace(/"createdAt": "2024-01-15T10: 0 0:00\.000Z",/g, '"createdAt": "2024-01-15T10:00:00.000Z")
        content = content.replace(/"reviewCount": 15 6,/g, '"reviewCount")
    content = content.replace(/"")
    content = content.replace(/"")
    content = content.replace(/'"")
    content = content.replace(/"")
    content = content.replace(/")
    content = content.replace(/^\s*")
>>>>>>> main
>>>>>>> main
