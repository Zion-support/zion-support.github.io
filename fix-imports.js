#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
//Mapping of broken imports to correct imports
const iconMappings = {
  rrowleft: 'ArrowLeft',
  alendar: 'Calendar',
  ser: 'User',
  lock: 'Clock',
  ag: 'Tag',
  rendingup: 'TrendingUp',
  ollarsign: 'DollarSign',
  sers: 'Users',
  arget: 'Target',
  rain: 'Brain',
  ap: 'Zap',
  hield: 'Shield',
  rrowright: 'ArrowRight',
  og: 'Log',
  pu: 'Cpu',
  lobe: 'Globe',
  ocket: 'Rocket',
  heckcircle: 'CheckCircle',
  hare2: 'Share2',
  ookmark: 'Bookmark',
  ot: 'Bot',
  ookopen: 'BookOpen'};
//Function to fix imports in a file
function fixImportsInFile(filePath) {
  try {
    //Fix lucide-react imports
    for (const [broken, correct] of Object.entries(iconMappings)) {
      //       const oldImport = `lucide-react/dist/esm/icons/${broken}`
const iconMappings = {/* TODO: Fix JSX expression */};
}
//Function to fix imports in a file
function fixImportsInFile(filePath) {/* TODO: Fix JSX expression */}
      //       const oldImport = `lucide-react/dist/esm/icons/${broken}`;`
      //       const newImport = `lucide-react`
      if (content.includes(oldImport)) {/* TODO: Fix JSX expression */}`
          new RegExp(`import ${correct} from '${oldImport}';`, 'g'))
        modified = true
      }
    }

    //Fix Link imports if missing
    if (content.includes('Link') && !content.includes("import Link from 'next/link'")) {
      content = "import Link from 'next/link';\n" + content
      modified = true
    if (content.includes('Link') && !content.includes("import Link from 'next/link'")) {/* TODO: Fix JSX expression */}
    }

    if (modified) {/* TODO: Fix JSX expression */}
      //       }
  } catch (error) {/* TODO: Fix JSX expression */}
    //     }
}

//Get all blog files
// const blogDir = '/workspace/app/blog'
const files = fs
  .readdirSync(blogDir, { recursive: true })
  .readdirSync(blogDir, {/* TODO: Fix JSX expression */})
  e: true })
  .filter(file => file.endsWith('.tsx'))
  .map(file => path.join(blogDir, file))
// Process each file
files.forEach(fixImportsInFile)
// "`