import fs from 'fs';
import path from 'path';

// List of files with unused imports
const filesToFix = [
  'app/ai-automation-platform/page.tsx',
  'app/ai-code-assistant-pro/page.tsx',
  'app/ai-content-studio/page.tsx',
  'app/ai-data-analytics-pro/page.tsx',
  'app/ai-financial-analysis/page.tsx',
  'app/ai-hr-recruitment-pro/page.tsx',
  'app/ai-powered-devops/page.tsx',
  'app/ai-powered-email-analyzer/page.tsx',
  'app/ai-quantum-computing/page.tsx',
  'app/it-services/page.tsx',
  'app/micro-saas/page.tsx',
  'app/zion-ai-analytics-pro/page.tsx',
  'app/zion-ai-crm-pro/page.tsx',
  'app/zion-ai-customer-insights/page.tsx',
  'app/zion-ai-email-analyzer/page.tsx',
  'app/zion-ai-invoice-generator/page.tsx',
  'app/zion-ai-marketing-automation-pro/page.tsx'
];

// Icons that don't exist in lucide-react
const nonExistentIcons = [
  'Scanner', 'Fax', 'Stop', 'Shuffle2', 'Stopwatch', 'Office', 'Bank', 'Taxi', 'Pulse',
  'Cd', 'Dvd', 'FloppyDisk', 'Hdmi', 'Ethernet', 'CalendarStar', 'CalendarUser',
  'CalendarEdit', 'CalendarTrash', 'CalendarSettings', 'CalendarImport', 'CalendarExport',
  'CalendarShare', 'CalendarLock', 'CalendarUnlock', 'CalendarKey', 'CalendarShield',
  'CalendarAlert', 'CalendarBell', 'CalendarZap', 'CalendarSparkles', 'CalendarGift',
  'CalendarAward', 'CalendarTrophy', 'CalendarMedal', 'CalendarCrown', 'CalendarGem',
  'CalendarDiamond', 'CalendarPearl', 'CalendarRuby', 'CalendarSapphire', 'CalendarEmerald',
  'CalendarTopaz', 'CalendarAmethyst', 'CalendarQuartz', 'CalendarCrystal', 'CalendarJewel',
  'CalendarTreasure', 'CalendarGold', 'CalendarSilver', 'CalendarBronze', 'CalendarPlatinum',
  'CalendarTitanium', 'CalendarSteel', 'CalendarIron', 'CalendarCopper', 'CalendarAluminum',
  'CalendarZinc', 'CalendarTin', 'CalendarLead', 'CalendarMercury', 'CalendarUranium',
  'CalendarPlutonium', 'CalendarRadium', 'CalendarThorium', 'CalendarActinium',
  'CalendarProtactinium', 'CalendarNeptunium', 'CalendarAmericium', 'CalendarCurium',
  'CalendarBerkelium', 'CalendarCalifornium', 'CalendarEinsteinium', 'CalendarFermium',
  'CalendarMendelevium', 'CalendarNobelium', 'CalendarLawrencium', 'CalendarRutherfordium',
  'CalendarDubnium', 'CalendarSeaborgium', 'CalendarBohrium', 'CalendarHassium',
  'CalendarMeitnerium', 'CalendarDarmstadtium', 'CalendarRoentgenium', 'CalendarCopernicium',
  'CalendarNihonium', 'CalendarFlerovium', 'CalendarMoscovium', 'CalendarLivermorium',
  'CalendarTennessine', 'CalendarOganesson'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove non-existent icons from imports
    nonExistentIcons.forEach(icon => {
      const regex = new RegExp(`\\s*${icon},?\\s*`, 'g');
      if (content.includes(icon)) {
        content = content.replace(regex, '');
        modified = true;
      }
    });

    // Clean up empty import lines
    content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]*['"];?\s*\n/g, '');
    
    // Clean up trailing commas in imports
    content = content.replace(/,(\s*})/g, '$1');

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);
console.log('Unused imports fixed!');