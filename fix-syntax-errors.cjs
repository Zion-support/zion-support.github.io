#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all files with the malformed return statement
const files = glob.sync('app/**/*.tsx');

let fixedCount = 0;

files.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has the malformed pattern: "return;", followed by comma and object literals
    const malformedPattern = /export default function \w+\(\) \{\s*return;\s*\},\s*(\{[\s\S]*?\})\s*\]/;
    const match = content.match(malformedPattern);
    
    if (match) {
      console.log(`Fixing ${filePath}...`);
      
      // Extract the object literals that should be in a features array
      const objectLiterals = match[1];
      
      // Replace the malformed pattern with proper structure
      const fixedContent = content.replace(
        malformedPattern,
        `export default function ${filePath.split('/').pop().replace('.tsx', '')}() {
  const features = [${objectLiterals}
  ];`
      );
      
      // Also need to add missing imports for common icons
      const iconImports = [
        'FileText', 'BarChart3', 'Calculator', 'Target', 'CheckCircle', 'Globe',
        'Zap', 'Users', 'Clock', 'Sparkles', 'Star', 'Box', 'ArrowRight',
        'Shield', 'TrendingUp', 'Database', 'Cpu', 'Brain', 'Eye', 'Layers',
        'PieChart', 'Activity', 'DollarSign', 'CreditCard', 'Building',
        'Smartphone', 'Monitor', 'Server', 'Cloud', 'Lock', 'Key', 'Search',
        'Filter', 'Settings', 'Wrench', 'Tool', 'Code', 'Terminal', 'GitBranch',
        'GitCommit', 'GitMerge', 'GitPullRequest', 'Bug', 'AlertTriangle',
        'CheckCircle2', 'XCircle', 'Info', 'HelpCircle', 'ExternalLink',
        'Download', 'Upload', 'Share', 'Copy', 'Edit', 'Trash2', 'Plus',
        'Minus', 'ChevronDown', 'ChevronUp', 'ChevronLeft', 'ChevronRight',
        'ArrowLeft', 'ArrowUp', 'ArrowDown', 'Home', 'Menu', 'X', 'Menu',
        'Bell', 'Mail', 'Phone', 'MapPin', 'Calendar', 'Clock', 'User',
        'Users', 'UserPlus', 'UserMinus', 'UserCheck', 'UserX', 'Heart',
        'ThumbsUp', 'ThumbsDown', 'MessageCircle', 'MessageSquare', 'Send',
        'Reply', 'Forward', 'Flag', 'Bookmark', 'Tag', 'Tags', 'Folder',
        'FolderOpen', 'File', 'FileText', 'FileImage', 'FileVideo', 'FileAudio',
        'FileArchive', 'FileCode', 'FileSpreadsheet', 'FilePdf', 'FileWord',
        'FileExcel', 'FilePowerpoint', 'FileCheck', 'FileX', 'FilePlus',
        'FileMinus', 'FileEdit', 'FileSearch', 'FileDownload', 'FileUpload',
        'FolderPlus', 'FolderMinus', 'FolderOpen', 'FolderCheck', 'FolderX',
        'FolderEdit', 'FolderSearch', 'FolderDownload', 'FolderUpload'
      ];
      
      // Check which icons are used in the file
      const usedIcons = [];
      iconImports.forEach(icon => {
        if (content.includes(`<${icon} className="`)) {
          usedIcons.push(icon);
        }
      });
      
      // Update imports if needed
      if (usedIcons.length > 0) {
        const importMatch = content.match(/import \{([^}]+)\} from 'lucide-react';/);
        if (importMatch) {
          const existingImports = importMatch[1].split(',').map(imp => imp.trim());
          const newImports = [...new Set([...existingImports, ...usedIcons])];
          const newImportStatement = `import { ${newImports.join(', ')} } from 'lucide-react';`;
          content = content.replace(importMatch[0], newImportStatement);
        }
      }
      
      fs.writeFileSync(filePath, content);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files.`);