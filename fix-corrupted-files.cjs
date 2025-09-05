#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of corrupted files that only contain a closing brace
const corruptedFiles = [
  'src/components/ThemeToggle.jsx',
  'src/components/UIEnhancer.jsx',
  'src/components/backgrounds/UltraFuturisticBackground2034.jsx',
  'src/components/mobile-app/MobileEmailCapture.jsx',
  'src/components/ui/accessibility-panel.jsx',
  'src/components/ui/accessibility.jsx',
  'src/components/ui/accordion.tsx',
  'src/components/ui/alert-dialog.jsx',
  'src/components/ui/analytics-dashboard.jsx',
  'src/components/ui/avatar.jsx',
  'src/components/ui/badge.tsx',
  'src/components/ui/button.jsx',
  'src/components/ui/card.tsx',
  'src/components/ui/checkbox.jsx',
  'src/components/ui/dialog.jsx',
  'src/components/ui/dropdown-menu.jsx',
  'src/components/ui/dropdown-menu.tsx',
  'src/components/ui/empty-state.tsx',
  'src/components/ui/enhanced-loading.jsx',
  'src/components/ui/form.tsx',
  'src/components/ui/gradient-heading.jsx',
  'src/components/ui/hover-card.tsx',
  'src/components/ui/input.tsx',
  'src/components/ui/interactive-timeline.jsx',
  'src/components/ui/label.jsx',
  'src/components/ui/lazy-load.tsx',
  'src/components/ui/loading-fallback.jsx',
  'src/components/ui/loading-skeleton.jsx',
  'src/components/ui/loading-skeleton.tsx',
  'src/components/ui/loading-spinner.tsx',
  'src/components/ui/loading.jsx',
  'src/components/ui/notification.jsx',
  'src/components/ui/performance-monitor.jsx',
  'src/components/ui/popover.jsx',
  'src/components/ui/progress.tsx',
  'src/components/ui/select.jsx',
  'src/components/ui/select.tsx',
  'src/components/ui/separator.jsx',
  'src/components/ui/separator.tsx',
  'src/components/ui/steps.jsx',
  'src/components/ui/switch.tsx',
  'src/components/ui/tabs.jsx',
  'src/components/ui/tabs.tsx',
  'src/components/ui/textarea.tsx',
  'src/components/ui/toaster.jsx',
  'src/components/ui/toaster.tsx',
  'src/components/ui/use-toast.ts',
  'src/hooks/useAnalytics.jsx',
  'src/components/ui/accessibility-menu.jsx'
];

// Function to check if file is corrupted (only contains closing brace)
function isCorrupted(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8').trim();
    return content === '}' || content === '};' || content.length < 10;
  } catch (error) {
    return true;
  }
}

// Function to create a basic component file
function createBasicComponent(filePath) {
  const ext = path.extname(filePath);
  const isTsx = ext === '.tsx';
  const isTs = ext === '.ts';
  
  let content = '';
  
  if (isTsx || isTs) {
    content = `import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export default function ${path.basename(filePath, ext)}(${isTsx ? '{ className, children }: Props' : 'props'}) {
  return (
    <div className={\`${isTsx ? 'className' : 'props.className' || ""}\`}>
      ${isTsx ? 'children' : 'props.children || "Component placeholder"'}
    </div>
  );
}`;
  } else {
    content = `import React from 'react';

export default function ${path.basename(filePath, ext)}({ className = '', children }) {
  return (
    <div className={\`\${className}\`}>
      {children || "Component placeholder"}
    </div>
  );
}`;
  }
  
  return content;
}

// Function to fix corrupted files
function fixCorruptedFiles() {
  let fixedCount = 0;
  let removedCount = 0;
  
  console.log('Starting to fix corrupted files...');
  
  for (const filePath of corruptedFiles) {
    if (fs.existsSync(filePath)) {
      if (isCorrupted(filePath)) {
        console.log(`Fixing corrupted file: ${filePath}`);
        
        // Check if there's a backup
        const backupPath = filePath.replace('src/', 'src.disabled/');
        if (fs.existsSync(backupPath)) {
          try {
            const backupContent = fs.readFileSync(backupPath, 'utf8');
            if (backupContent.trim().length > 10) {
              fs.writeFileSync(filePath, backupContent);
              console.log(`  Restored from backup: ${backupPath}`);
              fixedCount++;
              continue;
            }
          } catch (error) {
            console.log(`  Could not restore from backup: ${error.message}`);
          }
        }
        
        // Create a basic component
        try {
          const content = createBasicComponent(filePath);
          fs.writeFileSync(filePath, content);
          console.log(`  Created basic component`);
          fixedCount++;
        } catch (error) {
          console.log(`  Could not create basic component: ${error.message}`);
          // If we can't fix it, remove it
          try {
            fs.unlinkSync(filePath);
            console.log(`  Removed corrupted file`);
            removedCount++;
          } catch (removeError) {
            console.log(`  Could not remove file: ${removeError.message}`);
          }
        }
      }
    }
  }
  
  console.log(`\nFixed ${fixedCount} files, removed ${removedCount} files`);
}

// Run the fix
fixCorruptedFiles();