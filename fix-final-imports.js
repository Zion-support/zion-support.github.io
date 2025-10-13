import fs from 'fs';'import { fileURLToPath } from 'url''function processFile(filePath) {
  
  try {
  
    // Fix remaining import path issues;
const replacements = [
  
      // Fix SEOOptimizer component
      {
  
        pattern: /import\s+{\s*useRouter\s*}\s+from\s+'\.\.\/\.\.\/utils\/navigation';/g,''        replacement: "import { useRouter } from '../utils/navigation';"},";'"'      // Fix root-level files"      {
  
        pattern: /import\s+{\s*Metadata\s*}\s+from\s+'\.\/types\/next';/g,''        replacement: "import { Metadata } from './types/next';"},";'"'      {"  
        pattern: /import\s+Link\s+from\s+'\.\/utils\/link';/g''        replacement: "import Link from './utils/link';"},";'"'      // Fix MetadataRoute namespace issue"      {
  
        pattern: /MetadataRoute\./g
        replacement: 'MetadataRoute',''function processFile(filePath) {/* TODO: Fix JSX expression */}
  n: /import\s+{\s*useRouter\s*}\s+from\s+'\.\.\/\.\.\/utils\/navigation';/g,''        replacemen,
  t: "import { useRouter } from '../utils/navigation';"},";'"'      // Fix root-level files"      {/* TODO: Fix JSX expression */}
  n: /import\s+{\s*Metadata\s*}\s+from\s+'\.\/types\/next';/g,''        replacemen,"""  t: "import { Metadata } from './types/next';"},";'"'      {/* TODO: Fix JSX expression */}"      },
      // Fix MetadataRoute namespace issue
      {/* TODO: Fix JSX expression */}
      }]
    replacements.forEach(({ pattern, replacement }) => {/* TODO: Fix JSX expression */}
      }
    })
    if (modified) {/* TODO: Fix JSX expression */}
    }
    return false
  } catch (error) {/* TODO: Fix JSX expression */}
  }
}

function processDirectory(dirPath) {
  
  items.forEach(item => {)
)
    if (stat.isDirectory()) {
  
      totalFixed += processDirectory(fullPath)
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {''      if (processFile(fullPath)) {
  
        totalFixed++
function processDirectory(dirPath) {/* TODO: Fix JSX expression */}
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {/* TODO: Fix JSX expression */}''      }
    }
  })
  return totalFixed
}

// Process the app directory
// Process the app directory;"""