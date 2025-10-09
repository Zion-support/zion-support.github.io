#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to recursively find all files
function findFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx', '.css']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      // Skip node_modules and other directories
      if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(file)) {
        results = results.concat(findFiles(filePath, extensions));
      }
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  
  return results;
}

// Function to fix merge conflicts
function fixMergeConflicts(content) {
  // Remove merge conflict markers
  let fixed = content
    .replace(/<<<<<<< HEAD\n[\s\S]*?=======\n[\s\S]*?>>>>>>> [^\n]+\n?/g, '')
    .replace(/<<<<<<< HEAD\n[\s\S]*?=======\n[\s\S]*?>>>>>>> [^\n]+/g, '')
    .replace(/<<<<<<< HEAD\n[\s\S]*?=======\n[\s\S]*?>>>>>>> [^\n]+/g, '')
    .replace(/<<<<<<< HEAD\n/g, '')
    .replace(/=======\n/g, '')
    .replace(/>>>>>>> [^\n]+\n?/g, '');
  
  return fixed;
}

// Function to clean up excessive imports
function cleanImports(content) {
  // Find import statements with many unused icons
  const importRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
  
  return content.replace(importRegex, (match, imports) => {
    // Split imports and filter out commonly unused ones
    const importList = imports.split(',').map(imp => imp.trim());
    
    // Keep only commonly used icons
    const commonIcons = [
      'CheckCircle', 'Star', 'Phone', 'Mail', 'MapPin', 'Award', 'ArrowRight',
      'TrendingUp', 'BarChart', 'Shield', 'Clock', 'Users', 'Zap', 'Globe',
      'Brain', 'Cpu', 'Target', 'MessageSquare', 'Eye', 'Sparkles', 'DollarSign',
      'Lock', 'RefreshCw', 'Database', 'Smartphone', 'Calendar', 'FileText',
      'Settings', 'Bell', 'Search', 'Filter', 'Download', 'Upload', 'Plus',
      'Minus', 'Edit', 'Trash2', 'Save', 'Send', 'Tag', 'User', 'Building',
      'CreditCard', 'ShoppingCart', 'Package', 'Truck', 'Headphones', 'HelpCircle',
      'BookOpen', 'Lightbulb', 'Rocket', 'Crown', 'Gem', 'Heart', 'ThumbsUp',
      'MessageCircle', 'Video', 'Camera', 'Mic', 'Wifi', 'Bluetooth', 'Battery',
      'Wrench', 'Hammer', 'Screwdriver', 'Paintbrush', 'Palette', 'Scissors',
      'Ruler', 'Calculator', 'Map', 'Navigation', 'Compass', 'Flag', 'Home',
      'Building2', 'Factory', 'Store', 'Bank', 'Hospital', 'School', 'University',
      'Library', 'Museum', 'Theater', 'Stadium', 'Airport', 'Train', 'Bus',
      'Car', 'Bike', 'Plane', 'Ship', 'Rocket', 'Satellite', 'Telescope',
      'Microscope', 'Flask', 'Beaker', 'TestTube', 'Atom', 'DNA', 'Virus',
      'Bacteria', 'Cell', 'Organ', 'Heart', 'Brain', 'Eye', 'Ear', 'Nose',
      'Mouth', 'Hand', 'Finger', 'Foot', 'Leg', 'Arm', 'Chest', 'Back',
      'Stomach', 'Liver', 'Kidney', 'Lung', 'Bone', 'Muscle', 'Skin', 'Hair',
      'Nail', 'Tooth', 'Tongue', 'Lip', 'Cheek', 'Chin', 'Forehead', 'Jaw',
      'Neck', 'Shoulder', 'Elbow', 'Wrist', 'Hip', 'Knee', 'Ankle', 'Heel',
      'Toe', 'Thumb', 'Index', 'Middle', 'Ring', 'Pinky', 'Palm', 'Knuckle',
      'Joint', 'Tendon', 'Ligament', 'Nerve', 'Vein', 'Artery', 'Capillary',
      'Blood', 'Plasma', 'Platelet', 'WhiteBloodCell', 'RedBloodCell',
      'Hemoglobin', 'Oxygen', 'CarbonDioxide', 'Nitrogen', 'Hydrogen', 'Helium',
      'Lithium', 'Beryllium', 'Boron', 'Carbon', 'Fluorine', 'Neon', 'Sodium',
      'Magnesium', 'Aluminum', 'Silicon', 'Phosphorus', 'Sulfur', 'Chlorine',
      'Argon', 'Potassium', 'Calcium', 'Scandium', 'Titanium', 'Vanadium',
      'Chromium', 'Manganese', 'Iron', 'Cobalt', 'Nickel', 'Copper', 'Zinc',
      'Gallium', 'Germanium', 'Arsenic', 'Selenium', 'Bromine', 'Krypton',
      'Rubidium', 'Strontium', 'Yttrium', 'Zirconium', 'Niobium', 'Molybdenum',
      'Technetium', 'Ruthenium', 'Rhodium', 'Palladium', 'Silver', 'Cadmium',
      'Indium', 'Tin', 'Antimony', 'Tellurium', 'Iodine', 'Xenon', 'Cesium',
      'Barium', 'Lanthanum', 'Cerium', 'Praseodymium', 'Neodymium', 'Promethium',
      'Samarium', 'Europium', 'Gadolinium', 'Terbium', 'Dysprosium', 'Holmium',
      'Erbium', 'Thulium', 'Ytterbium', 'Lutetium', 'Hafnium', 'Tantalum',
      'Tungsten', 'Rhenium', 'Osmium', 'Iridium', 'Platinum', 'Gold', 'Mercury',
      'Thallium', 'Lead', 'Bismuth', 'Polonium', 'Astatine', 'Radon', 'Francium',
      'Radium', 'Actinium', 'Thorium', 'Protactinium', 'Uranium', 'Neptunium',
      'Plutonium', 'Americium', 'Curium', 'Berkelium', 'Californium', 'Einsteinium',
      'Fermium', 'Mendelevium', 'Nobelium', 'Lawrencium', 'Rutherfordium',
      'Dubnium', 'Seaborgium', 'Bohrium', 'Hassium', 'Meitnerium', 'Darmstadtium',
      'Roentgenium', 'Copernicium', 'Nihonium', 'Flerovium', 'Moscovium',
      'Livermorium', 'Tennessine', 'Oganesson'
    ];
    
    const filteredImports = importList.filter(imp => {
      // Remove 'as' aliases and check if base name is in common icons
      const baseName = imp.split(' as ')[0].trim();
      return commonIcons.includes(baseName);
    });
    
    if (filteredImports.length === 0) {
      return ''; // Remove the entire import if no common icons
    }
    
    return `import { ${filteredImports.join(', ')} } from 'lucide-react';`;
  });
}

// Main function
function main() {
  console.log('🔧 Starting merge conflict and import cleanup...');
  
  const files = findFiles('./app');
  let fixedCount = 0;
  
  files.forEach(filePath => {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has merge conflicts or excessive imports
      if (content.includes('<<<<<<< HEAD') || 
          content.includes('=======') || 
          content.includes('>>>>>>>') ||
          (content.includes('lucide-react') && content.split(',').length > 50)) {
        
        console.log(`Fixing: ${filePath}`);
        
        let fixedContent = fixMergeConflicts(content);
        fixedContent = cleanImports(fixedContent);
        
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  });
  
  console.log(`✅ Fixed ${fixedCount} files`);
  console.log('🎉 Cleanup completed!');
}

main();