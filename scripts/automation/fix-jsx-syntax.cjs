#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
class JSXSyntaxFixer {}
  constructor() {}
    this.projectRoot = process.cwd();
    this.filePath = path.join(this.projectRoot, 'src/components/AIChatbotSystem.tsx')};
  log(message) {}
    console.log(`[${new Date().toISOString()}] ${message}`)};
  fixJSXSyntax() {}
    this.log('Fixing JSX syntax errors in AIChatbotSystem.tsx...');
    let content = fs.readFileSync(this.filePath, 'utf8');
    // Fix various JSX syntax errors;
    const fixes = [// Fix missing closing tags and syntax errors;]
      { "pattern": /className="flex justify-start"\s*$/gm, "replacement": 'className="flex justify-start">' },
      { "pattern": /className="p-4 border-t border-zinc-700\/50">;\s*$/gm, "replacement": 'className="p-4 border-t border-zinc-700/50">' },
      { "pattern": /className="flex items-center justify-between mt-3 text-xs text-zinc-500">;\s*$/gm, "replacement": 'className="flex items-center justify-between mt-3 text-xs text-zinc-500">' },
      { "pattern": /<\/motion\.div>;\s*$/gm, "replacement": '</motion.div>' },
      { "pattern": /<\/AnimatePresence>;\s*$/gm, "replacement": '' },
      { "pattern": /<\/>;\s*$/gm, "replacement": '</>' },
      { "pattern": /<\/div>;\s*$/gm, "replacement": '</div>' },
      { "pattern": /<\/button>;\s*$/gm, "replacement": '</button>' },
      { "pattern": /<\/span>;\s*$/gm, "replacement": '</span>' },
      { "pattern": /return\s*\(\s*<>\s*<AnimatePresence>/gm, "replacement": 'return (\n    <>\n      <AnimatePresence>' };)
`;