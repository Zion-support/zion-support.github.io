import fs from 'fs';

// Files to fix
const filesToFix = [
  'app/ai-powered-devops/page.tsx',
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

// Icon replacements
const iconReplacements = {
  'Scanner': 'Scan',
  'Fax': 'FileText',
  'Stop': 'SquareStop',
  'Shuffle2': 'Shuffle',
  'Stopwatch': 'Timer',
  'Office': 'Building',
  'Bank': 'Building2',
  'Taxi': 'Car',
  'Pulse': 'Activity',
  'Cd': 'Disc',
  'Dvd': 'Disc',
  'FloppyDisk': 'Save',
  'Hdmi': 'Cable',
  'Ethernet': 'Cable',
  'CalendarStar': 'Calendar',
  'CalendarUser': 'Calendar',
  'CalendarEdit': 'Calendar',
  'CalendarTrash': 'Calendar',
  'CalendarSettings': 'Calendar',
  'CalendarImport': 'Calendar',
  'CalendarExport': 'Calendar',
  'CalendarShare': 'Calendar',
  'CalendarLock': 'Calendar',
  'CalendarUnlock': 'Calendar',
  'CalendarKey': 'Calendar',
  'CalendarShield': 'Calendar',
  'CalendarAlert': 'Calendar',
  'CalendarBell': 'Calendar',
  'CalendarZap': 'Calendar',
  'CalendarSparkles': 'Calendar',
  'CalendarGift': 'Calendar',
  'CalendarAward': 'Calendar',
  'CalendarTrophy': 'Calendar',
  'CalendarMedal': 'Calendar',
  'CalendarCrown': 'Calendar',
  'CalendarGem': 'Calendar',
  'CalendarDiamond': 'Calendar',
  'CalendarPearl': 'Calendar',
  'CalendarRuby': 'Calendar',
  'CalendarSapphire': 'Calendar',
  'CalendarEmerald': 'Calendar',
  'CalendarTopaz': 'Calendar',
  'CalendarAmethyst': 'Calendar',
  'CalendarQuartz': 'Calendar',
  'CalendarCrystal': 'Calendar',
  'CalendarJewel': 'Calendar',
  'CalendarTreasure': 'Calendar',
  'CalendarGold': 'Calendar',
  'CalendarSilver': 'Calendar',
  'CalendarBronze': 'Calendar',
  'CalendarPlatinum': 'Calendar',
  'CalendarTitanium': 'Calendar',
  'CalendarSteel': 'Calendar',
  'CalendarIron': 'Calendar',
  'CalendarCopper': 'Calendar',
  'CalendarAluminum': 'Calendar',
  'CalendarZinc': 'Calendar',
  'CalendarTin': 'Calendar',
  'CalendarLead': 'Calendar',
  'CalendarMercury': 'Calendar',
  'CalendarUranium': 'Calendar',
  'CalendarPlutonium': 'Calendar',
  'CalendarRadium': 'Calendar',
  'CalendarThorium': 'Calendar',
  'CalendarActinium': 'Calendar',
  'CalendarProtactinium': 'Calendar',
  'CalendarNeptunium': 'Calendar',
  'CalendarAmericium': 'Calendar',
  'CalendarCurium': 'Calendar',
  'CalendarBerkelium': 'Calendar',
  'CalendarCalifornium': 'Calendar',
  'CalendarEinsteinium': 'Calendar',
  'CalendarFermium': 'Calendar',
  'CalendarMendelevium': 'Calendar',
  'CalendarNobelium': 'Calendar',
  'CalendarLawrencium': 'Calendar',
  'CalendarRutherfordium': 'Calendar',
  'CalendarDubnium': 'Calendar',
  'CalendarSeaborgium': 'Calendar',
  'CalendarBohrium': 'Calendar',
  'CalendarHassium': 'Calendar',
  'CalendarMeitnerium': 'Calendar',
  'CalendarDarmstadtium': 'Calendar',
  'CalendarRoentgenium': 'Calendar',
  'CalendarCopernicium': 'Calendar',
  'CalendarNihonium': 'Calendar',
  'CalendarFlerovium': 'Calendar',
  'CalendarMoscovium': 'Calendar',
  'CalendarLivermorium': 'Calendar',
  'CalendarTennessine': 'Calendar',
  'CalendarOganesson': 'Calendar'
};

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Replace missing icons
    Object.entries(iconReplacements).forEach(([oldIcon, newIcon]) => {
      if (content.includes(oldIcon)) {
        content = content.replace(new RegExp(`\\b${oldIcon}\\b`, 'g'), newIcon);
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed missing icons in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);
console.log('Missing icons fixed!');