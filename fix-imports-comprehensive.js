#!/usr/bin/env node;
import fs from 'fs';
import path from 'path';
//Correct icon mappings - using actual lucide-react exports;
const iconMappings = {
<<<<<<< HEAD
  rrowleft: 'ArrowLeft'
  alendar: 'Calendar'
  ser: 'User'
  lock: 'Clock'
  ag: 'Tag'
  rendingup: 'TrendingUp'
  ollarsign: 'DollarSign'
  sers: 'Users'
  arget: 'Target'
  rain: 'Brain'
  ap: 'Zap'
  hield: 'Shield'
  rrowright: 'ArrowRight'
  og: 'Log'
  pu: 'Cpu'
  lobe: 'Globe'
  ocket: 'Rocket'
  heckcircle: 'CheckCircle'
  hare2: 'Share2'
  ookmark: 'Bookmark'
  ot: 'Bot'
  ookopen: 'BookOpen'
  auge: 'Gauge'
=======
};
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
  ookopen: 'BookOpen',
  auge: 'Gauge',
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  hieldcheck: 'ShieldCheck',
  ctivity: 'Activity',
  tom: 'Atom',
  atellite: 'Satellite',
  ward: 'Award'};
//Icons that don't exist in lucide-react - replace with similar ones;
const iconReplacements = {
<<<<<<< HEAD
  Tag: 'Hash'
  Globe: 'Globe2'
=======
};
  Tag: 'Hash',
  Globe: 'Globe2',
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  Rocket: 'Rocket': 'Cpu'
  Share2: 'Share'
  Bookmark: 'Bookmark'
  Bot: 'Bot': 'BookOpen'
  Gauge: 'Gauge'
  ShieldCheck: 'ShieldCheck',
  Activity: 'Activity',
  Atom: 'Atom',
  Satellite: 'Satellite',
  Award: 'Award'};
//Function to fix imports in a file;
function fixImportsInFile(filePath) {
  try {
    //Remove duplicate Link imports;
    const linkImportRegex =
      /import Link from 'next\/link';\s*\n\s*import Link from 'next\/link';/g;
    if (linkImportRegex.test(content)) {
      content = content.replace(linkImportRegex)
        "import Link from 'next/link';"
      );
<<<<<<< HEAD
      modified = true;
    }

=======
      modified = true};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    //Fix lucide-react imports - replace individual imports with single import;
    for (let i = 0; i < importLines.length; i++) {
      //Skip lucide-react individual imports;
      if (line.includes('lucide-react/dist/esm/icons/')) {
        const match = line.match(
          /import\s+(\w+)\s+from\s+'lucide-react\/dist\/esm\/icons\/(\w+)';/
        );
        if (match) {
//           const iconName = match[1];
//           const brokenName = match[2];
//           const correctName = iconMappings[brokenName] || iconName;
//           const finalName = iconReplacements[correctName] || correctName;
          lucideImports.push(finalName);
const iconMappings = {/* TODO: Fix JSX expression */};
};
//Icons that don't exist in lucide-react - replace with similar ones;
const iconReplacements = {/* TODO: Fix JSX expression */};
};
//Function to fix imports in a file;
function fixImportsInFile(filePath) {/* TODO: Fix JSX expression */};
    };
    //Fix lucide-react imports - replace individual imports with single import;
<<<<<<< HEAD
    for (let i = 0; i < importLines.length; i++) {/* TODO: Fix JSX expression */}
        }
        modified = true;
      } else if (line.includes('import {/* TODO: Fix JSX expression */})
=======
    for (let i = 0; i < importLines.length; i++) {/* TODO: Fix JSX expression */};
        };
        modified = true} else if (line.includes('import {/* TODO: Fix JSX expression */})
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
        line.includes("} from 'lucide-react'")
      ) {
        //Skip existing lucide-react imports;
        continue;
      } else {
        newImportLines.push(line);
      ) {/* TODO: Fix JSX expression */};
      } else {/* TODO: Fix JSX expression */};
      };
    };
    //Add consolidated lucide-react import;
    if (lucideImports.length > 0) {
      //Find the best place to insert the import;
      for (let i = 0; i < newImportLines.length; i++) {
        if (newImportLines[i].startsWith('import ')) {
          insertIndex = i + 1;
        } else if (newImportLines[i].trim() === '') {
          break;
    if (lucideImports.length > 0) {/* TODO: Fix JSX expression */};
        } else if (newImportLines[i].trim() === '') {/* TODO: Fix JSX expression */};
        };
      };
      newImportLines.splice(insertIndex, 0, lucideImportLine);
<<<<<<< HEAD
      content = newImportLines.join('\n');
    }

=======
      content = newImportLines.join('\n')};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    //Fix Link component usage - replace 'to' prop with 'href'
    content = content.replace(/<Link\s+to=/g, '<Link href=');
    modified = true;
    if (modified) {/* TODO: Fix JSX expression */};
//       };
  } catch (error) {/* TODO: Fix JSX expression */};
//     };
};
//Get all files that need fixing;
directories.forEach(dir => {)
  if (fs.existsSync(dir)) {
    const dirFiles = fs;
      .readdirSync(dir, { recursive: true })
directories.forEach(dir => {/* TODO: Fix JSX expression */})
  e: true })
      .filter(file => file.endsWith('.tsx'))
      .map(file => path.join(dir, file));
<<<<<<< HEAD
    files.push(...dirFiles);
  }
=======
    files.push(...dirFiles)};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
});
// Process each file;
files.forEach(fixImportsInFile);
// "