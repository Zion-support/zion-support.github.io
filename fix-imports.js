#!/usr/bin/env node;
<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
//Mapping of broken imports to correct imports;
const iconMappings = {}
=======

import fs from 'fs;

import path from 'path;

//Mapping of broken imports to correct imports;

const iconMappings = {;;

>>>>>>> origin/main
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
<<<<<<< HEAD
  ookopen: 'BookOpen'};
//Function to fix imports in a file;
function fixImportsInFile(filePath) {}
  try {}
    //Fix lucide-react imports;
    for (const [broken, correct] of Object.entries(iconMappings)) {}
      //       const oldImport = "`lucide-react/dist/esm/icons/${broken}`;"
const iconMappings = "{/* TODO: Fix JSX expression */}"
=======
  ookopen: 'BookOpen};

//Function to fix imports in a file;

function fixImportsInFile(filePath) {
  try {
    //Fix lucide-react imports;

    for (const [broken, correct] of Object.entries(iconMappings)) {
      //       const oldImport = `lucide-react/dist/esm/icons/${broken}`;;

const iconMappings = {/* TODO: Fix JSX expression */};;

>>>>>>> origin/main
};
//Function to fix imports in a file;

function fixImportsInFile(filePath) {/* TODO: Fix JSX expression */}
<<<<<<< HEAD
      //       const oldImport = "`lucide-react/dist/esm/icons/${broken}`;`"
      //       const newImport="`lucide-react`;"
      if (content.includes(oldImport)) {/* TODO: Fix JSX expression */}`
          new RegExp(`import ${correct} from '${oldImport}';`, 'g'));
        modified="true}"
    }

    //Fix Link imports if missing;
    if (content.includes('Link') && !content.includes("import Link from 'next/link'")) {}
      content=""import Link from 'next/link';\n" + content;"
      modified="true;"
=======

      //       const oldImport = `lucide-react/dist/esm/icons/${broken}`;`;;

      //       const newImport = `lucide-react`;;

      if (content.includes(oldImport)) {/* TODO: Fix JSX expression */}`
          new RegExp(`import ${correct} from '${oldImport}';`, 'g));

        modified = true}

    }

    //Fix Link imports if missing;

    if (content.includes('Link') && !content.includes("import Link from 'next/link'")) {
      content = "import Link from 'next/link';\n" + content;

      modified = true;

>>>>>>> origin/main
    if (content.includes('Link') && !content.includes("import Link from 'next/link'")) {/* TODO: Fix JSX expression */}

    }

    if (modified) {/* TODO: Fix JSX expression */}

      //       }

  } catch (error) {/* TODO: Fix JSX expression */}

    //     }

}

//Get all blog files;
<<<<<<< HEAD
// const blogDir = "'/workspace/app/blog';"
const files="fs;"
=======

// const blogDir = '/workspace/app/blog;;

const files = fs;;

>>>>>>> origin/main
  .readdirSync(blogDir, { recursive: true })
  .readdirSync(blogDir, {/* TODO: Fix JSX expression */})
  e: true })
  .filter(file = "> file.endsWith('.tsx'))"
  .map(file = "> path.join(blogDir, file));"
// Process each file;

files.forEach(fixImportsInFile);
// "`