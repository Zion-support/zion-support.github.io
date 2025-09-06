const fs = require('fs');

console.log('🔧 Fixing final JSX issues...');

// Fix ContactForm
let content = fs.readFileSync('/workspace/components/ContactForm.tsx', 'utf8');
content = content.replace(/return\s*\(\s*<div[^>]*>\s*<div[^>]*>\s*<\/div>\s*<h2[^>]*>\s*<\/h2>/g, 'return (\n    <div className="max-w-2xl mx-auto">\n      <div className="bg-white rounded-lg shadow-lg p-8">\n        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">');
fs.writeFileSync('/workspace/components/ContactForm.tsx', content);

// Fix EnhancedFooter
content = fs.readFileSync('/workspace/components/EnhancedFooter.tsx', 'utf8');
content = content.replace(/return\s*\(\s*<footer[^>]*>\s*<div[^>]*>\s*<\/div>\s*{/g, 'return (\n    <footer className="bg-slate-950 border-t border-white/10">\n      <div className="max-w-7xl mx-auto px-6 py-16">\n        {');
fs.writeFileSync('/workspace/components/EnhancedFooter.tsx', content);

// Fix EnhancedLayout
content = fs.readFileSync('/workspace/components/layout/EnhancedLayout.tsx', 'utf8');
content = content.replace(/return\s*\(\s*<div[^>]*>\s*<header>\s*<EnhancedNavigation/g, 'return (\n    <div className="min-h-screen flex flex-col">\n      <header>\n        <EnhancedNavigation');
fs.writeFileSync('/workspace/components/layout/EnhancedLayout.tsx', content);

console.log('✅ Fixed JSX structure issues');