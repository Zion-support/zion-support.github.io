#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function optimizeFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Add React.memo to functional components
    if (content.includes('export default function') && !content.includes('React.memo')) {
      content = content.replace(
        /export default function (\w+)/g,
        'const $1 = React.memo(function $1'
      );
      content = content.replace(
        /^(\s*)(const \w+ = React\.memo\(function \w+\([^)]*\)\s*\{[\s\S]*?\})\s*$(\s*export default)/gm,
        '$1$2$3'
      );
      modified = true;
    }
    
    // Add useMemo for expensive calculations
    if (content.includes('useState') && content.includes('const ') && !content.includes('useMemo')) {
      const expensiveCalculations = content.match(/const \w+ = [^;]+\([^)]*\)[^;]*;/g);
      if (expensiveCalculations) {
        expensiveCalculations.forEach(calc => {
          if (calc.includes('map(') || calc.includes('filter(') || calc.includes('reduce(')) {
            const varName = calc.match(/const (\w+)/)[1];
            content = content.replace(
              calc,
              `const ${varName} = useMemo(() => ${calc.replace(`const ${varName} = `, '')}, [dependencies]);`
            );
            modified = true;
          }
        });
      }
    }
    
    // Add useCallback for event handlers
    if (content.includes('const handle') && !content.includes('useCallback')) {
      const handlers = content.match(/const handle\w+ = \([^)]*\) => \{[\s\S]*?\}/g);
      if (handlers) {
        handlers.forEach(handler => {
          const handlerName = handler.match(/const (handle\w+)/)[1];
          content = content.replace(
            handler,
            `const ${handlerName} = useCallback(${handler.replace(`const ${handlerName} = `, '')}, [dependencies]);`
          );
          modified = true;
        });
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
            return true;
    }
    
    return false;
  } catch (error) {
        return false;
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let optimizedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      optimizedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (optimizeFile(filePath)) {
        optimizedCount++;
      }
    }
  }
  
  return optimizedCount;
}

const optimizedCount = processDirectory('./app');
