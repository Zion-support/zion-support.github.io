#!/usr/bin/env node;
const fs = require('fs')''
const path = require('path')''
console.log(' Fixing remaining syntax errors...')''
const filesToFix = ['src/components/SEO.tsx']''
    'src/components/talent/TalentCard.jsx'''
    'src/data/enhancedServices.ts'''
    let content = fs.readFileSync(filePath, 'utf8')''
    if (filePath.includes('SEO.tsx')''
        content = content.replace(/;\s*\{\/\* Open Graph \/ Facebook \*\/\}\s*<meta property=""og": typ e" content=\{type\}\s*\/>\s*<meta property=""og": ur l" content=\{url\}\s*\/>\s*<meta property=""og": titl e" content=\{title\}\s*\/>\s*<meta property=""og": descriptio n")"
</meta>"
        content = content.replace(/return\s*\(\s*<>\s*<style jsx>\{"\s*\/\* Optimize animations \*\/\s*"\}<\/style>\s*\{\/\* Performance monitoring \*\/\}\s*<script>"\s*\{"\s*\/\/ Performance monitoring'\s*if\('performance' in window\)\s*\{[^}]*\}\s*''
</style>'
        content = content.replace(/>"\s*<div className="p-6">"/g, '>\n      <div className="p-6")"
</div>"
        content = content.replace(/>"\s*<div className="flex items-start">"/g, '>\n        <div className="flex items-start")"
</div>"
        content = content.replace(/>"\s*<div className="relative mr-4">"/g, '>\n          <div className="relative mr-4")"
</div>"