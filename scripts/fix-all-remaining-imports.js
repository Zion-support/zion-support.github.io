#!/usr/bin/env node;
<<<<<<< HEAD
import fs from 'fs';'
import path from 'path';'
=======
import fs from 'fs';
import path from 'path';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { glob } from 'glob';
<<<<<<< HEAD
// Extended list of Lucide React icons
<<<<<<< HEAD
<<<<<<< HEAD
const allIcons = [
  'ArrowRight',
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
const allIcons = ['ArrowRight',
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
// Extended list of Lucide React icons;
pr-12325
const allIcons = ['ArrowRight',
const allIcons = [
  'ArrowRight',
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  'CheckCircle',
  'Star',
  'Users',
  'Zap',
  'Shield',
  'Globe',
  'TrendingUp',
  'Award',
  'Clock',
  'Brain',
  'Cloud',
  'Database',
  'Network',
  'Target',
  'Phone',
  'Mail',
  'MessageSquare',
  'FileText',
  'Search',
  'Menu',
  'X',
  'ChevronDown',
  'ChevronUp',
  'ChevronLeft',
  'ChevronRight',
  'Plus',
  'Minus',
  'Edit',
  'Trash',
  'Save',
  'Download',
  'Upload',
  'Settings',
  'User',
  'Lock',
  'Unlock',
  'Eye',
  'EyeOff',
  'Heart',
  'Share',
  'Copy',
  'ExternalLink',
  'Home',
  'Info',
  'AlertCircle',
  'Check',
  'XCircle',
  'Monitor',
  'BarChart3',
  'PieChart',
  'Activity',
  'TrendingDown',
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'Calendar',
  'MapPin',
  'Wifi',
  'Bluetooth',
  'Camera',
  'Video',
  'Image',
  'File',
  'Folder',
  'Archive',
  'Bookmark',
  'Tag',
  'Filter',
  'Sort',
  'Grid',
  'List',
  'Layout',
  'Maximize',
  'Minimize',
  'RotateCcw',
  'RotateCw',
  'RefreshCw',
  'RefreshCcw',
  'Play',
  'Pause',
  'Stop',
  'SkipBack',
  'SkipForward',
  'Volume2',
  'VolumeX',
  'Mic',
  'MicOff',
  'Headphones',
  'Speaker',
  'Radio',
  'Tv',
  'Laptop',
  'Smartphone',
  'Tablet',
  'Watch',
  'Gamepad2',
  'Joystick',
  'Mouse',
  'Keyboard',
  'Printer',
  'Scanner',
  'HardDrive',
  'Cpu',
  'MemoryStick',
  'Nfc',
  'QrCode',
  'Barcode',
  'CreditCard',
  'Wallet',
  'Banknote',
  'Coins',
  'PiggyBank',
  'BarChart',
  'LineChart',
  'Pulse',
  'Battery',
  'BatteryCharging',
  'Power',
  'Plug',
  'Outlet',
  'Lightbulb',
  'Sun',
  'Moon',
  'CloudRain',
  'CloudSnow',
  'CloudLightning',
  'Wind',
  'Thermometer',
  'Droplets',
  'Umbrella',
  'TreePine',
  'Tree',
  'Flower',
  'Leaf',
  'Bug',
  'Bird',
  'Fish',
  'Cat',
  'Dog',
  'Car',
  'Truck',
  'Bus',
  'Train',
  'Plane',
  'Ship',
  'Bike',
  'Motorbike',
  'Helicopter',
  'Rocket',
  'Map',
  'Navigation',
  'Compass',
  'Flag',
  'Building',
  'Building2',
  'Store',
  'Factory',
  'Warehouse',
  'Hospital',
  'School',
  'University',
  'Church',
  'Mosque',
  'Temple',
  'Castle',
  'Tower',
  'Bridge',
  'Road',
  'Rail',
  'Anchor',
  'Sailboat',
  'LifeBuoy',
  'Sword',
  'Axe',
  'Hammer',
  'Wrench',
  'Screwdriver',
  'Drill',
  'Saw',
  'Scissors',
  'Knife',
  'Fork',
  'Spoon',
  'Plate',
  'Bowl',
  'Cup',
  'Glass',
  'Bottle',
  'Can',
  'Box',
  'Package',
  'Gift',
  'Party',
  'Cake',
  'Cookie',
  'Coffee',
  'Tea',
  'Beer',
  'Wine',
  'Cocktail',
  'Ice',
  'Fire',
  'Flame',
  'Smoke',
  'Water',
  'Droplet',
  'Waves',
  'Snowflake',
  'Sunrise',
  'Sunset',
  'Planet',
  'Satellite',
  'Telescope',
  'Microscope',
  'Atom',
  'Dna',
  'Virus',
  'Pill',
  'Syringe',
  'Stethoscope',
  'Bandage',
  'Cross',
  'Lungs',
  'Ear',
  'Nose',
  'Mouth',
  'Tooth',
  'Bone',
  'Muscle',
  'Foot',
  'Hand',
  'Finger',
  'Thumb',
  'Palm',
  'Fist',
  'Peace',
  'Point',
  'Wave',
  'Clap',
  'ThumbsUp',
  'ThumbsDown',
  'Ok',
  'Victory',
  'Rock',
  'Paper',
  'Dice',
  'Cards',
  'Poker',
  'Chess',
  'Checkers',
  'Puzzle',
  'Rubik',
  'Magic',
  'Crystal',
  'Gem',
  'Diamond',
  'Gold',
  'Silver',
  'Bronze',
  'Copper',
  'Iron',
  'Steel',
  'Aluminum',
  'Plastic',
  'Wood',
  'Stone',
  'Brick',
  'Concrete',
  'Mirror',
  'Lens',
  'Binoculars',
  'Film',
  'Microphone',
  'Amplifier',
  'Equalizer',
  'Volume',
  'Mute',
  'Record',
  'Skip',
  'Rewind',
  'FastForward',
  'Repeat',
  'Shuffle',
  'Loop',
  'Random',
  'Sequential',
  'Alphabetical',
  'Numerical',
  'Chronological',
  'Ascending',
  'Descending',
  'Up',
  'Down',
  'Left',
  'Right',
  'Forward',
  'Backward',
  'North',
  'South',
  'East',
  'West',
  'Northeast',
  'Northwest',
  'Southeast',
  'Southwest',
  'Center',
  'Middle',
  'Top',
  'Bottom',
  'Front',
  'Back',
  'Side',
  'Inside',
  'Outside',
  'Above',
  'Below',
  'Over',
  'Under',
  'Through',
  'Across',
  'Around',
  'Between',
  'Among',
  'Within',
  'Without',
  'With',
  'Against',
  'Toward',
  'Away',
  'Near',
  'Far',
  'Close',
  'Open',
  'Closed',
  'Locked',
  'Unlocked',
  'Secure',
  'Insecure',
  'Safe',
  'Dangerous',
  'Risky',
  'Careful',
  'Careless',
  'Accurate',
  'Inaccurate',
  'Correct',
  'Incorrect',
  'Wrong',
  'True',
  'False',
  'Yes',
  'No',
  'Maybe',
  'Perhaps',
  'Possibly',
  'Definitely',
  'Certainly',
  'Absolutely',
  'Never',
  'Always',
  'Sometimes',
  'Often',
  'Rarely',
  'Frequently',
  'Occasionally',
  'Regularly',
  'Irregularly',
  'Consistently',
  'Inconsistently',
  'Constantly',
  'Temporarily',
  'Permanently',
  'Immediately',
  'Eventually',
  'Finally',
  'Initially',
  'Originally',
  'Previously',
  'Currently',
  'Presently',
  'Now',
  'Then',
  'Before',
  'After',
  'During',
  'While',
  'Since',
  'Until',
  'Till',
  'From',
  'To',
  'For',
  'By',
  'Beyond',
  'Past',
  'Future',
  'Present',
  'Today',
  'Yesterday',
  'Tomorrow',
  'Later',
  'Earlier',
  'Soon',
  'Late',
  'Early',
  'Quick',
  'Slow',
  'Fast',
  'Rapid',
  'Gradual',
  'Sudden',
  'Instant',
  'Momentary',
  'Brief',
  'Long',
  'Short',
  'Tall',
  'Small',
  'Large',
  'Big',
  'Little',
  'Huge',
  'Tiny',
  'Massive',
  'Miniature',
  'Giant',
  'Dwarf',
  'Wide',
  'Narrow',
  'Broad',
  'Thin',
  'Thick',
  'Deep',
  'Shallow',
  'High',
  'Low',
  'Elevated',
  'Depressed',
  'Raised',
  'Lowered',
  'Uplifted',
  'Downcast',
  'Optimistic',
  'Pessimistic',
  'Positive',
  'Negative',
  'Good',
  'Bad',
  'Better',
  'Worse',
  'Best',
  'Worst',
  'Excellent',
  'Poor',
  'Great',
  'Terrible',
  'Wonderful',
  'Awful',
  'Amazing',
  'Disappointing',
  'Surprising',
  'Expected',
  'Unexpected',
  'Normal',
  'Abnormal',
  'Regular',
  'Irregular',
  'Standard',
  'Nonstandard',
  'Typical',
  'Atypical',
  'Common',
  'Uncommon',
  'Rare',
  'Frequent',
  'Occasional',
  'Constant',
  'Variable',
  'Fixed',
  'Flexible',
  'Rigid',
  'Soft',
  'Hard',
  'Smooth',
  'Rough',
  'Sharp',
  'Dull',
  'Bright',
  'Dark',
  'Light',
  'Heavy',
  'Lightweight',
  'Strong',
  'Weak',
  'Powerful',
  'Powerless',
  'Energetic',
  'Lazy',
  'Active',
  'Passive',
  'Dynamic',
  'Static',
  'Moving',
  'Stationary',
  'Mobile',
  'Immobile',
  'Portable',
  'Elastic',
  'Metal',
  'Wooden',
  'Fabric',
  'Leather',
  'Rubber',
  'Ceramic',
  'Titanium',
  'Carbon',
  'Silicon',
  'Oxygen',
  'Hydrogen',
  'Nitrogen',
  'Helium',
  'Neon',
  'Argon',
  'Krypton',
  'Xenon',
  'Radon',
  'Uranium',
  'Plutonium',
  'Radium',
  'Polonium',
  'Astatine',
  'Francium',
  'Actinium',
  'Thorium',
  'Protactinium',
  'Neptunium',
  'Americium',
  'Curium',
  'Berkelium',
  'Californium',
  'Einsteinium',
  'Fermium',
  'Mendelevium',
  'Nobelium',
  'Lawrencium',
  'Rutherfordium',
  'Dubnium',
  'Seaborgium',
  'Bohrium',
  'Hassium',
  'Meitnerium',
  'Darmstadtium',
  'Roentgenium',
  'Copernicium',
  'Nihonium',
  'Flerovium',
  'Moscovium',
  'Livermorium',
  'Tennessine',
<<<<<<< HEAD
  'Oganesson',
=======

// Extended list of Lucide React icons;
const allIcons = ['
  'ArrowRight', 'CheckCircle', 'Star', 'Users', 'Zap', 'Shield', 'Globe', 'TrendingUp', 'Award', 'Clock','
  'Brain', 'Cloud', 'Database', 'Network', 'Target', 'Phone', 'Mail', 'MessageSquare', 'FileText', 'Search','
  'Menu', 'X', 'ChevronDown', 'ChevronUp', 'ChevronLeft', 'ChevronRight', 'Plus', 'Minus', 'Edit', 'Trash','
  'Save', 'Download', 'Upload', 'Settings', 'User', 'Lock', 'Unlock', 'Eye', 'EyeOff', 'Heart', 'Share','
  'Copy', 'ExternalLink', 'Home', 'Info', 'AlertCircle', 'Check', 'XCircle', 'Monitor', 'BarChart3', 'PieChart','
  'Activity', 'TrendingDown', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'Calendar', 'Clock', 'MapPin', 'Mail', 'Phone','
  'Globe', 'Wifi', 'Bluetooth', 'Camera', 'Video', 'Image', 'File', 'Folder', 'Archive', 'Bookmark', 'Tag','
  'Filter', 'Sort', 'Grid', 'List', 'Layout', 'Maximize', 'Minimize', 'RotateCcw', 'RotateCw', 'RefreshCw','
  'RefreshCcw', 'Play', 'Pause', 'Stop', 'SkipBack', 'SkipForward', 'Volume2', 'VolumeX', 'Mic', 'MicOff','
  'Headphones', 'Speaker', 'Radio', 'Tv', 'Monitor', 'Laptop', 'Smartphone', 'Tablet', 'Watch', 'Gamepad2','
  'Joystick', 'Mouse', 'Keyboard', 'Printer', 'Scanner', 'HardDrive', 'Cpu', 'MemoryStick', 'Wifi', 'Bluetooth','
  'Nfc', 'QrCode', 'Barcode', 'CreditCard', 'Wallet', 'Banknote', 'Coins', 'PiggyBank', 'TrendingUp', 'TrendingDown','
  'BarChart', 'LineChart', 'PieChart', 'Activity', 'Pulse', 'Heart', 'Zap', 'Battery', 'BatteryCharging', 'Power','
  'Plug', 'Outlet', 'Lightbulb', 'Sun', 'Moon', 'Cloud', 'CloudRain', 'CloudSnow', 'CloudLightning', 'Wind','
  'Thermometer', 'Droplets', 'Umbrella', 'TreePine', 'Tree', 'Flower', 'Leaf', 'Bug', 'Bird', 'Fish', 'Cat','
  'Dog', 'Car', 'Truck', 'Bus', 'Train', 'Plane', 'Ship', 'Bike', 'Motorbike', 'Helicopter', 'Rocket', 'Map','
  'MapPin', 'Navigation', 'Compass', 'Flag', 'Building', 'Building2', 'Home', 'Store', 'Factory', 'Warehouse','
  'Hospital', 'School', 'University', 'Church', 'Mosque', 'Temple', 'Castle', 'Tower', 'Bridge', 'Road', 'Rail','
  'Anchor', 'Sailboat', 'LifeBuoy', 'Umbrella', 'Shield', 'Sword', 'Axe', 'Hammer', 'Wrench', 'Screwdriver','
  'Drill', 'Saw', 'Scissors', 'Knife', 'Fork', 'Spoon', 'Plate', 'Bowl', 'Cup', 'Glass', 'Bottle', 'Can','
  'Box', 'Package', 'Gift', 'Party', 'Cake', 'Cookie', 'Coffee', 'Tea', 'Beer', 'Wine', 'Cocktail', 'Ice','
  'Fire', 'Flame', 'Smoke', 'Water', 'Droplet', 'Waves', 'Snowflake', 'Sunrise', 'Sunset', 'Moon', 'Star','
  'Planet', 'Satellite', 'Telescope', 'Microscope', 'Atom', 'Dna', 'Virus', 'Pill', 'Syringe', 'Stethoscope','
  'Bandage', 'Cross', 'Heart', 'Lungs', 'Brain', 'Eye', 'Ear', 'Nose', 'Mouth', 'Tooth', 'Bone', 'Muscle','
  'Foot', 'Hand', 'Finger', 'Thumb', 'Palm', 'Fist', 'Peace', 'Point', 'Wave', 'Clap', 'ThumbsUp', 'ThumbsDown','
  'Ok', 'Victory', 'Rock', 'Paper', 'Scissors', 'Dice', 'Cards', 'Poker', 'Chess', 'Checkers', 'Puzzle', 'Rubik','
  'Magic', 'Crystal', 'Gem', 'Diamond', 'Gold', 'Silver', 'Bronze', 'Copper', 'Iron', 'Steel', 'Aluminum','
  'Plastic', 'Wood', 'Stone', 'Brick', 'Concrete', 'Glass', 'Mirror', 'Lens', 'Telescope', 'Binoculars','
  'Camera', 'Video', 'Film', 'Tv', 'Radio', 'Speaker', 'Headphones', 'Mic', 'Microphone', 'Amplifier', 'Equalizer','
  'Volume', 'Mute', 'Play', 'Pause', 'Stop', 'Record', 'Skip', 'Rewind', 'FastForward', 'Repeat', 'Shuffle','
  'Loop', 'Random', 'Sequential', 'Alphabetical', 'Numerical', 'Chronological', 'Ascending', 'Descending','
  'Up', 'Down', 'Left', 'Right', 'Forward', 'Backward', 'North', 'South', 'East', 'West', 'Northeast', 'Northwest','
  'Southeast', 'Southwest', 'Center', 'Middle', 'Top', 'Bottom', 'Front', 'Back', 'Side', 'Inside', 'Outside','
  'Above', 'Below', 'Over', 'Under', 'Through', 'Across', 'Around', 'Between', 'Among', 'Within', 'Without','
  'With', 'Against', 'Toward', 'Away', 'Near', 'Far', 'Close', 'Open', 'Closed', 'Locked', 'Unlocked','
  'Secure', 'Insecure', 'Safe', 'Dangerous', 'Risky', 'Careful', 'Careless', 'Accurate', 'Inaccurate','
  'Correct', 'Incorrect', 'Right', 'Wrong', 'True', 'False', 'Yes', 'No', 'Maybe', 'Perhaps', 'Possibly','
  'Definitely', 'Certainly', 'Absolutely', 'Never', 'Always', 'Sometimes', 'Often', 'Rarely', 'Frequently','
  'Occasionally', 'Regularly', 'Irregularly', 'Consistently', 'Inconsistently', 'Constantly', 'Temporarily','
  'Permanently', 'Immediately', 'Eventually', 'Finally', 'Initially', 'Originally', 'Previously', 'Currently','
  'Presently', 'Now', 'Then', 'Before', 'After', 'During', 'While', 'Since', 'Until', 'Till', 'From', 'To','
  'For', 'By', 'With', 'Without', 'Within', 'Beyond', 'Past', 'Future', 'Present', 'Today', 'Yesterday','
  'Tomorrow', 'Now', 'Later', 'Earlier', 'Soon', 'Late', 'Early', 'Quick', 'Slow', 'Fast', 'Rapid', 'Gradual','
  'Sudden', 'Instant', 'Momentary', 'Brief', 'Long', 'Short', 'Tall', 'Small', 'Large', 'Big', 'Little','
  'Huge', 'Tiny', 'Massive', 'Miniature', 'Giant', 'Dwarf', 'Wide', 'Narrow', 'Broad', 'Thin', 'Thick','
  'Deep', 'Shallow', 'High', 'Low', 'Elevated', 'Depressed', 'Raised', 'Lowered', 'Uplifted', 'Downcast','
  'Optimistic', 'Pessimistic', 'Positive', 'Negative', 'Good', 'Bad', 'Better', 'Worse', 'Best', 'Worst','
  'Excellent', 'Poor', 'Great', 'Terrible', 'Wonderful', 'Awful', 'Amazing', 'Disappointing', 'Surprising','
  'Expected', 'Unexpected', 'Normal', 'Abnormal', 'Regular', 'Irregular', 'Standard', 'Nonstandard', 'Typical','
  'Atypical', 'Common', 'Uncommon', 'Rare', 'Frequent', 'Occasional', 'Constant', 'Variable', 'Fixed', 'Flexible','
  'Rigid', 'Soft', 'Hard', 'Smooth', 'Rough', 'Sharp', 'Dull', 'Bright', 'Dark', 'Light', 'Heavy', 'Lightweight','
  'Strong', 'Weak', 'Powerful', 'Powerless', 'Energetic', 'Lazy', 'Active', 'Passive', 'Dynamic', 'Static','
  'Moving', 'Stationary', 'Mobile', 'Immobile', 'Portable', 'Fixed', 'Flexible', 'Rigid', 'Elastic', 'Plastic','
  'Metal', 'Wooden', 'Glass', 'Paper', 'Fabric', 'Leather', 'Rubber', 'Plastic', 'Ceramic', 'Crystal', 'Diamond','
  'Gold', 'Silver', 'Bronze', 'Copper', 'Iron', 'Steel', 'Aluminum', 'Titanium', 'Carbon', 'Silicon', 'Oxygen','
  'Hydrogen', 'Nitrogen', 'Helium', 'Neon', 'Argon', 'Krypton', 'Xenon', 'Radon', 'Uranium', 'Plutonium', 'Radium','
  'Polonium', 'Astatine', 'Francium', 'Radon', 'Actinium', 'Thorium', 'Protactinium', 'Neptunium', 'Americium','
  'Curium', 'Berkelium', 'Californium', 'Einsteinium', 'Fermium', 'Mendelevium', 'Nobelium', 'Lawrencium','
  'Rutherfordium', 'Dubnium', 'Seaborgium', 'Bohrium', 'Hassium', 'Meitnerium', 'Darmstadtium', 'Roentgenium','
  'Copernicium', 'Nihonium', 'Flerovium', 'Moscovium', 'Livermorium', 'Tennessine', 'Oganesson'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
];
let totalFixes = 0;
let filesProcessed = 0;
<<<<<<< HEAD
// Find all missing imports in a file
function findAllMissingImports(content, filePath) {
  const missingImports = [];
<<<<<<< HEAD

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
  'Oganesson',']
];
let totalFixes = 0;
let filesProcessed = 0;
// Find all missing imports in a file;
function findAllMissingImports(content, filePath) {
  const missingImports = [];

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  // Check for each icon
  allIcons.forEach(icon => {
  // Check for each icon;
  allIcons.forEach(icon => {)
pr-12325
    const iconRegex = new RegExp(`\\b${icon}\\b`, 'g');
    const matches = content.match(iconRegex);
<<<<<<< HEAD
<<<<<<< HEAD

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    if (matches && matches.length > 0) {
      // Check if the icon is already imported;
      const importRegex = new RegExp(`;
        `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,""
        'g)
      );
      const existingImport = content.match(importRegex);
<<<<<<< HEAD
<<<<<<< HEAD

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      if (!existingImport) {
        missingImports.push(icon)}
    }
  });
<<<<<<< HEAD
<<<<<<< HEAD

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
  return [...new Set(missingImports)]; // Remove duplicates

}


:scripts/fix-all-remaining-imports.js
}



origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return [...new Set(missingImports)]; // Remove duplicates
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD:scripts/fix-all-remaining-imports.js
=======
}

<<<<<<< HEAD
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> main:corrupted_backup/fix-all-remaining-imports.js
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
// Fix all missing imports in a file
  return [...new Set(missingImports)]; // Remove duplicates;
// Fix all missing imports in a file;
pr-12325
function fixAllMissingImports(content, filePath) {
  const missingImports = findAllMissingImports(content, filePath);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  if (missingImports.length === 0) {
    return { content, "changes": 0 }}
  let fixedContent = content;
  let changes = 0;
  // Find existing lucide-react import
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
<<<<<<< HEAD:scripts/fix-all-remaining-imports.js
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g;
=======
  const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g;
>>>>>>> main:corrupted_backup/fix-all-remaining-imports.js
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
    /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g;
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
  const existingImport = fixedContent.match(existingImportRegex);
<<<<<<< HEAD
=======
    /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g;  const existingImport = fixedContent.match(existingImportRegex);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  if (existingImport) {
    // Add missing icons to existing import
    const existingIcons =
      existingImport[0]
        .match(/{([^}]*)}/)?.[1]
<<<<<<< HEAD

=======
        .map(icon => icon.trim()) || [];
    const allIcons = [...new Set([...existingIcons, ...missingImports])].sort();
    const newImport = `import { ${allIcons.join(', ')} } from 'lucide-react';`;
    fixedContent = fixedContent.replace(existingImportRegex, newImport);
    changes++} else {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  if (missingImports.length === 0) {
    return { content, "changes": 0 }}"
  let fixedContent = content;
  let changes = 0;
  // Find existing lucide-react import

:scripts/fix-all-remaining-imports.js
    /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g;
  const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g;

  const existingImport = fixedContent.match(existingImportRegex);
  if (existingImport) {
    // Add missing icons to existing import

:scripts/fix-all-remaining-imports.js

  // Find existing lucide-react import;"
    /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g;""
    /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g;"
  const existingImport = fixedContent.match(existingImportRegex);
  if (existingImport) {
    // Add missing icons to existing import;
    const existingIcons =
      existingImport[0]
        .match(/{([^}]*)}/)?.[1]
        .map(icon => icon.trim()) || [];
    const allIcons = [...new Set([...existingIcons, ...missingImports])].sort();"`;
    const newImport = `import { ${allIcons.join(', ')} } from 'lucide-react';`;
    fixedContent = fixedContent.replace(existingImportRegex, newImport);
    changes++} else {


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    const existingIcons = existingImport[0]
      .match(/{([^}]*)}/)?.[1]
      ?.split(',')
      .map(icon => icon.trim()) || [];
    const allIcons = [...new Set([...existingIcons, ...missingImports])].sort();

  if (missingImports.length === 0) {
    return { content, changes: 0 };
  }

  let fixedContent = content;
  let changes = 0;

  // Find existing lucide-react import
  const existingImportRegex =
    /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g;
  const existingImport = fixedContent.match(existingImportRegex);

<<<<<<< HEAD
=======
  if (missingImports.length === 0) {
    return { content, "changes": 0 }}
  let fixedContent = content;
  let changes = 0;
  // Find existing lucide-react import
    /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g;
    /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g;
  const existingImport = fixedContent.match(existingImportRegex);
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  if (existingImport) {
    // Add missing icons to existing import
    const existingIcons =
      existingImport[0]
        .match(/{([^}]*)}/)?.[1]
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        ?.split(',')
        .map(icon => icon.trim()) || [];
    const allIcons = [...new Set([...existingIcons, ...missingImports])].sort();

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
    const newImport = `import { ${allIcons.join(', ')} } from 'lucide-react';`;
    fixedContent = fixedContent.replace(existingImportRegex, newImport);
    changes++;
  } else {
    // Create new import statement

main:corrupted_backup/fix-all-remaining-imports.js
    const newImport = `import { ${missingImports.join(', ')} } from 'lucide-react';\n`;

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
<<<<<<< HEAD
=======
        .map(icon => icon.trim()) || [];
    const allIcons = [...new Set([...existingIcons, ...missingImports])].sort();
    const newImport = `import { ${allIcons.join(', ')} } from 'lucide-react';`;
    fixedContent = fixedContent.replace(existingImportRegex, newImport);
    changes++} else {
    const newImport = `import { ${missingImports.join(', ')} } from 'lucide-react';\n`;
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    // Find the best place to insert the import
  // TODO: Implement
}`;
    const newImport = `import { ${missingImports.join(', ')} } from 'lucide-react';\n`;
    // Find the best place to insert the import;
pr-12325
    const importIndex = fixedContent.indexOf('import');
    if (importIndex !== -1) {
      const nextLineIndex = fixedContent.indexOf('\n', importIndex);
      fixedContent =
        fixedContent.slice(0, nextLineIndex) +
        '\n' +
        newImport +
<<<<<<< HEAD
<<<<<<< HEAD
=======
        fixedContent.slice(nextLineIndex)} else {
  // TODO: Implement
      fixedContent = newImport + fixedContent}
    changes++}
  return { "content": fixedContent, changes }}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        fixedContent.slice(nextLineIndex);
    } else {
=======

// Find all missing imports in a file;
function findAllMissingImports(content, filePath) {}
  const missingImports = [];
  
  // Check for each icon;
  allIcons.forEach(icon => {'
    const iconRegex = new RegExp(`\\b${icon}\\b`, 'g');
    const matches = content.match(iconRegex);
    if (matches && matches.length > 0) {}
      // Check if the icon is already imported;
      const importRegex = new RegExp('`
        `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'
        'g'
      );
      const existingImport = content.match(importRegex);
      if (!existingImport) {}
        missingImports.push(icon);
      }
    }
  });
  
  return [...new Set(missingImports)]; // Remove duplicates;
// Fix all missing imports in a file;
function fixAllMissingImports(content, filePath) {}
  const missingImports = findAllMissingImports(content, filePath);
  
  if (missingImports.length === 0) {}
    return { content, changes: 0 };
  }
  
  let fixedContent = content;
  let changes = 0;
  
  // Find existing lucide-react import;
  const existingImport = fixedContent.match(existingImportRegex);
  
  if (existingImport) {}
    // Add missing icons to existing import;
'`
    const newImport = `import { ${missingImports.join(', ')} } from 'lucide-react';\n`;
    
    // Find the best place to insert the import'
    const importIndex = fixedContent.indexOf('import');
    if (importIndex !== -1) {'
      const nextLineIndex = fixedContent.indexOf('\n', importIndex);'
      fixedContent = fixedContent.slice(0, nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex);
    } else {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      fixedContent = newImport + fixedContent;
    }
    changes++;
  }

  return { content: fixedContent, changes };
}

<<<<<<< HEAD
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
<<<<<<< HEAD
=======
        fixedContent.slice(nextLineIndex)} else {
      fixedContent = newImport + fixedContent}
    changes++}
  return { "content": fixedContent, changes }}
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
// Process individual file
  return { "content": fixedContent, changes }}"
// Process individual file;
pr-12325
function processFile(filePath) {
  try {
  // TODO: Implement
}"
    const content = fs.readFileSync(filePath, 'utf8');
    const result = fixAllMissingImports(content, filePath);
<<<<<<< HEAD
<<<<<<< HEAD

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    if (result.changes > 0) {
      fs.writeFileSync(filePath, result.content, 'utf8');
      totalFixes += result.changes;

:scripts/fix-all-remaining-imports.js
      console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)}
    filesProcessed++} catch (error) {
      totalFixes += result.changes;`;
      console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)}
    filesProcessed++} catch (error) {
:scripts/fix-all-remaining-imports.js
      console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)}
    filesProcessed++} catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD:scripts/fix-all-remaining-imports.js
      console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)}
    filesProcessed++} catch (error) {
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`);
    }
<<<<<<< HEAD
    
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    filesProcessed++;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
>>>>>>> main:corrupted_backup/fix-all-remaining-imports.js
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======

<<<<<<< HEAD
>>>>>>> main:corrupted_backup/fix-all-remaining-imports.js
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
main:corrupted_backup/fix-all-remaining-imports.js



>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

main:corrupted_backup/fix-all-remaining-imports.js
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
// Main function

`;

// Main function;
pr-12325
async function main() {;
  console.log('🔧 Starting comprehensive missing imports fix...\n');
  const patterns = ['pages/**/*.{tsx,jsx}',
    'src/**/*.{tsx,jsx}',
    'components/**/*.{tsx,jsx}',']
  const excludeDirs = ['node_modules',

  const patterns = [
    'pages/**/*.{tsx,jsx}',
    'src/**/*.{tsx,jsx}',
    'components/**/*.{tsx,jsx}',
  ];

  const excludeDirs = [
    'node_modules',
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
<<<<<<< HEAD
=======
      console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)}
    filesProcessed++} catch (error) {
// Main function
async function main() {;
  console.log('🔧 Starting comprehensive missing imports fix...\n');
  const patterns = ['pages/**/*.{tsx,jsx}',
    'src/**/*.{tsx,jsx}',
    'components/**/*.{tsx,jsx}',
  ];
  const excludeDirs = ['node_modules',
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    '.next',
    'build',
    'dist',
    'scripts',
    'automation',
    'automation_backup',
    'src.disabled',
    'pages.disabled',
    'components.disabled',
  ];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
<<<<<<< HEAD:scripts/fix-all-remaining-imports.js
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  
<<<<<<< HEAD
  for (const pattern of patterns) {
    const files = await glob(pattern, {
      ignore: excludeDirs.map(dir => `**/${dir}/**`)
    });
    
=======
=======
=======
  
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======


:scripts/fix-all-remaining-imports.js
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
  for (const pattern of patterns) {
    const files = await glob(pattern, {
      ignore: excludeDirs.map(dir => `**/${dir}/**`),
    });

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    for (const file of files) {
      processFile(file);
    }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> main:corrupted_backup/fix-all-remaining-imports.js
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
main:corrupted_backup/fix-all-remaining-imports.js



>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

main:corrupted_backup/fix-all-remaining-imports.js
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }
  console.log("\n📊 Comprehensive Missing Imports Fix "Summary": ");

  console.log(`\n📊 Comprehensive Missing Imports Fix Summary:`);
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
<<<<<<< HEAD
=======
  }
  console.log("\n📊 Comprehensive Missing Imports Fix "Summary": ");
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  console.log(`   Files processed: ${filesProcessed}`);
  console.log(`   Total import "fixes": ${totalFixes}`);
  console.log("\n✨ Comprehensive missing imports fix completed!")}
// Run the script
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
main().catch(console.error);
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
<<<<<<< HEAD:scripts/fix-all-remaining-imports.js
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD:scripts/fix-all-remaining-imports.js
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
main().catch(console.error);
main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const allIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle','Monitor','BarChart3','PieChart','Activity','TrendingDown','ArrowUp','ArrowDown','ArrowLeft','Calendar','Clock','MapPin','Mail','Phone','Globe','Wifi','Bluetooth','Camera','Video','Image','File','Folder','Archive','Bookmark','Tag','Filter','Sort','Grid','List','Layout','Maximize','Minimize','RotateCcw','RotateCw','RefreshCw','RefreshCcw','Play','Pause','Stop','SkipBack','SkipForward','Volume2','VolumeX','Mic','MicOff','Headphones','Speaker','Radio','Tv','Monitor','Laptop','Smartphone','Tablet','Watch','Gamepad2','Joystick','Mouse','Keyboard','Printer','Scanner','HardDrive','Cpu','MemoryStick','Wifi','Bluetooth','Nfc','QrCode','Barcode','CreditCard','Wallet','Banknote','Coins','PiggyBank','TrendingUp','TrendingDown','BarChart','LineChart','PieChart','Activity','Pulse','Heart','Zap','Battery','BatteryCharging','Power','Plug','Outlet','Lightbulb','Sun','Moon','Cloud','CloudRain','CloudSnow','CloudLightning','Wind','Thermometer','Droplets','Umbrella','TreePine','Tree','Flower','Leaf','Bug','Bird','Fish','Cat','Dog','Car','Truck','Bus','Train','Plane','Ship','Bike','Motorbike','Helicopter','Rocket','Map','MapPin','Navigation','Compass','Flag','Building','Building2','Home','Store','Factory','Warehouse','Hospital','School','University','Church','Mosque','Temple','Castle','Tower','Bridge','Road','Rail','Anchor','Sailboat','LifeBuoy','Umbrella','Shield','Sword','Axe','Hammer','Wrench','Screwdriver','Drill','Saw','Scissors','Knife','Fork','Spoon','Plate','Bowl','Cup','Glass','Bottle','Can','Box','Package','Gift','Party','Cake','Cookie','Coffee','Tea','Beer','Wine','Cocktail','Ice','Fire','Flame','Smoke','Water','Droplet','Waves','Snowflake','Sunrise','Sunset','Moon','Star','Planet','Satellite','Telescope','Microscope','Atom','Dna','Virus','Pill','Syringe','Stethoscope','Bandage','Cross','Heart','Lungs','Brain','Eye','Ear','Nose','Mouth','Tooth','Bone','Muscle','Foot','Hand','Finger','Thumb','Palm','Fist','Peace','Point','Wave','Clap','ThumbsUp','ThumbsDown','Ok','Victory','Rock','Paper','Scissors','Dice','Cards','Poker','Chess','Checkers','Puzzle','Rubik','Magic','Crystal','Gem','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Plastic','Wood','Stone','Brick','Concrete','Glass','Mirror','Lens','Telescope','Binoculars','Camera','Video','Film','Tv','Radio','Speaker','Headphones','Mic','Microphone','Amplifier','Equalizer','Volume','Mute','Play','Pause','Stop','Record','Skip','Rewind','FastForward','Repeat','Shuffle','Loop','Random','Sequential','Alphabetical','Numerical','Chronological','Ascending','Descending','Up','Down','Left','Right','Forward','Backward','North','South','East','West','Northeast','Northwest','Southeast','Southwest','Center','Middle','Top','Bottom','Front','Back','Side','Inside','Outside','Above','Below','Over','Under','Through','Across','Around','Between','Among','Within','Without','With','Against','Toward','Away','Near','Far','Close','Open','Closed','Locked','Unlocked','Secure','Insecure','Safe','Dangerous','Risky','Careful','Careless','Accurate','Inaccurate','Correct','Incorrect','Right','Wrong','True','False','Yes','No','Maybe','Perhaps','Possibly','Definitely','Certainly','Absolutely','Never','Always','Sometimes','Often','Rarely','Frequently','Occasionally','Regularly','Irregularly','Consistently','Inconsistently','Constantly','Temporarily','Permanently','Immediately','Eventually','Finally','Initially','Originally','Previously','Currently','Presently','Now','Then','Before','After','During','While','Since','Until','Till','From','To','For','By','With','Without','Within','Beyond','Past','Future','Present','Today','Yesterday','Tomorrow','Now','Later','Earlier','Soon','Late','Early','Quick','Slow','Fast','Rapid','Gradual','Sudden','Instant','Momentary','Brief','Long','Short','Tall','Small','Large','Big','Little','Huge','Tiny','Massive','Miniature','Giant','Dwarf','Wide','Narrow','Broad','Thin','Thick','Deep','Shallow','High','Low','Elevated','Depressed','Raised','Lowered','Uplifted','Downcast','Optimistic','Pessimistic','Positive','Negative','Good','Bad','Better','Worse','Best','Worst','Excellent','Poor','Great','Terrible','Wonderful','Awful','Amazing','Disappointing','Surprising','Expected','Unexpected','Normal','Abnormal','Regular','Irregular','Standard','Nonstandard','Typical','Atypical','Common','Uncommon','Rare','Frequent','Occasional','Constant','Variable','Fixed','Flexible','Rigid','Soft','Hard','Smooth','Rough','Sharp','Dull','Bright','Dark','Light','Heavy','Lightweight','Strong','Weak','Powerful','Powerless','Energetic','Lazy','Active','Passive','Dynamic','Static','Moving','Stationary','Mobile','Immobile','Portable','Fixed','Flexible','Rigid','Elastic','Plastic','Metal','Wooden','Glass','Paper','Fabric','Leather','Rubber','Plastic','Ceramic','Crystal','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Titanium','Carbon','Silicon','Oxygen','Hydrogen','Nitrogen','Helium','Neon','Argon','Krypton','Xenon','Radon','Uranium','Plutonium','Radium','Polonium','Astatine','Francium','Radon','Actinium','Thorium','Protactinium','Neptunium','Americium','Curium','Berkelium','Californium','Einsteinium','Fermium','Mendelevium','Nobelium','Lawrencium','Rutherfordium','Dubnium','Seaborgium','Bohrium','Hassium','Meitnerium','Darmstadtium','Roentgenium','Copernicium','Nihonium','Flerovium','Moscovium','Livermorium','Tennessine','Oganesson',]; let totalFixes = 0; let filesProcessed = 0; function findAllMissingImports(content,filePath) { const missingImports = []; allIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return [...new Set(missingImports)]} function fixAllMissingImports(content,filePath) { const missingImports = findAllMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: '0' }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: 'fixedContent',changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixAllMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting comprehensive missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Comprehensive Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Comprehensive missing imports fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const allIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle','Monitor','BarChart3','PieChart','Activity','TrendingDown','ArrowUp','ArrowDown','ArrowLeft','Calendar','Clock','MapPin','Mail','Phone','Globe','Wifi','Bluetooth','Camera','Video','Image','File','Folder','Archive','Bookmark','Tag','Filter','Sort','Grid','List','Layout','Maximize','Minimize','RotateCcw','RotateCw','RefreshCw','RefreshCcw','Play','Pause','Stop','SkipBack','SkipForward','Volume2','VolumeX','Mic','MicOff','Headphones','Speaker','Radio','Tv','Monitor','Laptop','Smartphone','Tablet','Watch','Gamepad2','Joystick','Mouse','Keyboard','Printer','Scanner','HardDrive','Cpu','MemoryStick','Wifi','Bluetooth','Nfc','QrCode','Barcode','CreditCard','Wallet','Banknote','Coins','PiggyBank','TrendingUp','TrendingDown','BarChart','LineChart','PieChart','Activity','Pulse','Heart','Zap','Battery','BatteryCharging','Power','Plug','Outlet','Lightbulb','Sun','Moon','Cloud','CloudRain','CloudSnow','CloudLightning','Wind','Thermometer','Droplets','Umbrella','TreePine','Tree','Flower','Leaf','Bug','Bird','Fish','Cat','Dog','Car','Truck','Bus','Train','Plane','Ship','Bike','Motorbike','Helicopter','Rocket','Map','MapPin','Navigation','Compass','Flag','Building','Building2','Home','Store','Factory','Warehouse','Hospital','School','University','Church','Mosque','Temple','Castle','Tower','Bridge','Road','Rail','Anchor','Sailboat','LifeBuoy','Umbrella','Shield','Sword','Axe','Hammer','Wrench','Screwdriver','Drill','Saw','Scissors','Knife','Fork','Spoon','Plate','Bowl','Cup','Glass','Bottle','Can','Box','Package','Gift','Party','Cake','Cookie','Coffee','Tea','Beer','Wine','Cocktail','Ice','Fire','Flame','Smoke','Water','Droplet','Waves','Snowflake','Sunrise','Sunset','Moon','Star','Planet','Satellite','Telescope','Microscope','Atom','Dna','Virus','Pill','Syringe','Stethoscope','Bandage','Cross','Heart','Lungs','Brain','Eye','Ear','Nose','Mouth','Tooth','Bone','Muscle','Foot','Hand','Finger','Thumb','Palm','Fist','Peace','Point','Wave','Clap','ThumbsUp','ThumbsDown','Ok','Victory','Rock','Paper','Scissors','Dice','Cards','Poker','Chess','Checkers','Puzzle','Rubik','Magic','Crystal','Gem','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Plastic','Wood','Stone','Brick','Concrete','Glass','Mirror','Lens','Telescope','Binoculars','Camera','Video','Film','Tv','Radio','Speaker','Headphones','Mic','Microphone','Amplifier','Equalizer','Volume','Mute','Play','Pause','Stop','Record','Skip','Rewind','FastForward','Repeat','Shuffle','Loop','Random','Sequential','Alphabetical','Numerical','Chronological','Ascending','Descending','Up','Down','Left','Right','Forward','Backward','North','South','East','West','Northeast','Northwest','Southeast','Southwest','Center','Middle','Top','Bottom','Front','Back','Side','Inside','Outside','Above','Below','Over','Under','Through','Across','Around','Between','Among','Within','Without','With','Against','Toward','Away','Near','Far','Close','Open','Closed','Locked','Unlocked','Secure','Insecure','Safe','Dangerous','Risky','Careful','Careless','Accurate','Inaccurate','Correct','Incorrect','Right','Wrong','True','False','Yes','No','Maybe','Perhaps','Possibly','Definitely','Certainly','Absolutely','Never','Always','Sometimes','Often','Rarely','Frequently','Occasionally','Regularly','Irregularly','Consistently','Inconsistently','Constantly','Temporarily','Permanently','Immediately','Eventually','Finally','Initially','Originally','Previously','Currently','Presently','Now','Then','Before','After','During','While','Since','Until','Till','From','To','For','By','With','Without','Within','Beyond','Past','Future','Present','Today','Yesterday','Tomorrow','Now','Later','Earlier','Soon','Late','Early','Quick','Slow','Fast','Rapid','Gradual','Sudden','Instant','Momentary','Brief','Long','Short','Tall','Small','Large','Big','Little','Huge','Tiny','Massive','Miniature','Giant','Dwarf','Wide','Narrow','Broad','Thin','Thick','Deep','Shallow','High','Low','Elevated','Depressed','Raised','Lowered','Uplifted','Downcast','Optimistic','Pessimistic','Positive','Negative','Good','Bad','Better','Worse','Best','Worst','Excellent','Poor','Great','Terrible','Wonderful','Awful','Amazing','Disappointing','Surprising','Expected','Unexpected','Normal','Abnormal','Regular','Irregular','Standard','Nonstandard','Typical','Atypical','Common','Uncommon','Rare','Frequent','Occasional','Constant','Variable','Fixed','Flexible','Rigid','Soft','Hard','Smooth','Rough','Sharp','Dull','Bright','Dark','Light','Heavy','Lightweight','Strong','Weak','Powerful','Powerless','Energetic','Lazy','Active','Passive','Dynamic','Static','Moving','Stationary','Mobile','Immobile','Portable','Fixed','Flexible','Rigid','Elastic','Plastic','Metal','Wooden','Glass','Paper','Fabric','Leather','Rubber','Plastic','Ceramic','Crystal','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Titanium','Carbon','Silicon','Oxygen','Hydrogen','Nitrogen','Helium','Neon','Argon','Krypton','Xenon','Radon','Uranium','Plutonium','Radium','Polonium','Astatine','Francium','Radon','Actinium','Thorium','Protactinium','Neptunium','Americium','Curium','Berkelium','Californium','Einsteinium','Fermium','Mendelevium','Nobelium','Lawrencium','Rutherfordium','Dubnium','Seaborgium','Bohrium','Hassium','Meitnerium','Darmstadtium','Roentgenium','Copernicium','Nihonium','Flerovium','Moscovium','Livermorium','Tennessine','Oganesson',]; let totalFixes = 0; let filesProcessed = 0; function findAllMissingImports(content,filePath) { const missingImports = []; allIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return [...new Set(missingImports)]} function fixAllMissingImports(content,filePath) { const missingImports = findAllMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixAllMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting comprehensive missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Comprehensive Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Comprehensive missing imports fix completed!`)} main().catch(console.error);
main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const allIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle','Monitor','BarChart3','PieChart','Activity','TrendingDown','ArrowUp','ArrowDown','ArrowLeft','Calendar','Clock','MapPin','Mail','Phone','Globe','Wifi','Bluetooth','Camera','Video','Image','File','Folder','Archive','Bookmark','Tag','Filter','Sort','Grid','List','Layout','Maximize','Minimize','RotateCcw','RotateCw','RefreshCw','RefreshCcw','Play','Pause','Stop','SkipBack','SkipForward','Volume2','VolumeX','Mic','MicOff','Headphones','Speaker','Radio','Tv','Monitor','Laptop','Smartphone','Tablet','Watch','Gamepad2','Joystick','Mouse','Keyboard','Printer','Scanner','HardDrive','Cpu','MemoryStick','Wifi','Bluetooth','Nfc','QrCode','Barcode','CreditCard','Wallet','Banknote','Coins','PiggyBank','TrendingUp','TrendingDown','BarChart','LineChart','PieChart','Activity','Pulse','Heart','Zap','Battery','BatteryCharging','Power','Plug','Outlet','Lightbulb','Sun','Moon','Cloud','CloudRain','CloudSnow','CloudLightning','Wind','Thermometer','Droplets','Umbrella','TreePine','Tree','Flower','Leaf','Bug','Bird','Fish','Cat','Dog','Car','Truck','Bus','Train','Plane','Ship','Bike','Motorbike','Helicopter','Rocket','Map','MapPin','Navigation','Compass','Flag','Building','Building2','Home','Store','Factory','Warehouse','Hospital','School','University','Church','Mosque','Temple','Castle','Tower','Bridge','Road','Rail','Anchor','Sailboat','LifeBuoy','Umbrella','Shield','Sword','Axe','Hammer','Wrench','Screwdriver','Drill','Saw','Scissors','Knife','Fork','Spoon','Plate','Bowl','Cup','Glass','Bottle','Can','Box','Package','Gift','Party','Cake','Cookie','Coffee','Tea','Beer','Wine','Cocktail','Ice','Fire','Flame','Smoke','Water','Droplet','Waves','Snowflake','Sunrise','Sunset','Moon','Star','Planet','Satellite','Telescope','Microscope','Atom','Dna','Virus','Pill','Syringe','Stethoscope','Bandage','Cross','Heart','Lungs','Brain','Eye','Ear','Nose','Mouth','Tooth','Bone','Muscle','Foot','Hand','Finger','Thumb','Palm','Fist','Peace','Point','Wave','Clap','ThumbsUp','ThumbsDown','Ok','Victory','Rock','Paper','Scissors','Dice','Cards','Poker','Chess','Checkers','Puzzle','Rubik','Magic','Crystal','Gem','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Plastic','Wood','Stone','Brick','Concrete','Glass','Mirror','Lens','Telescope','Binoculars','Camera','Video','Film','Tv','Radio','Speaker','Headphones','Mic','Microphone','Amplifier','Equalizer','Volume','Mute','Play','Pause','Stop','Record','Skip','Rewind','FastForward','Repeat','Shuffle','Loop','Random','Sequential','Alphabetical','Numerical','Chronological','Ascending','Descending','Up','Down','Left','Right','Forward','Backward','North','South','East','West','Northeast','Northwest','Southeast','Southwest','Center','Middle','Top','Bottom','Front','Back','Side','Inside','Outside','Above','Below','Over','Under','Through','Across','Around','Between','Among','Within','Without','With','Against','Toward','Away','Near','Far','Close','Open','Closed','Locked','Unlocked','Secure','Insecure','Safe','Dangerous','Risky','Careful','Careless','Accurate','Inaccurate','Correct','Incorrect','Right','Wrong','True','False','Yes','No','Maybe','Perhaps','Possibly','Definitely','Certainly','Absolutely','Never','Always','Sometimes','Often','Rarely','Frequently','Occasionally','Regularly','Irregularly','Consistently','Inconsistently','Constantly','Temporarily','Permanently','Immediately','Eventually','Finally','Initially','Originally','Previously','Currently','Presently','Now','Then','Before','After','During','While','Since','Until','Till','From','To','For','By','With','Without','Within','Beyond','Past','Future','Present','Today','Yesterday','Tomorrow','Now','Later','Earlier','Soon','Late','Early','Quick','Slow','Fast','Rapid','Gradual','Sudden','Instant','Momentary','Brief','Long','Short','Tall','Small','Large','Big','Little','Huge','Tiny','Massive','Miniature','Giant','Dwarf','Wide','Narrow','Broad','Thin','Thick','Deep','Shallow','High','Low','Elevated','Depressed','Raised','Lowered','Uplifted','Downcast','Optimistic','Pessimistic','Positive','Negative','Good','Bad','Better','Worse','Best','Worst','Excellent','Poor','Great','Terrible','Wonderful','Awful','Amazing','Disappointing','Surprising','Expected','Unexpected','Normal','Abnormal','Regular','Irregular','Standard','Nonstandard','Typical','Atypical','Common','Uncommon','Rare','Frequent','Occasional','Constant','Variable','Fixed','Flexible','Rigid','Soft','Hard','Smooth','Rough','Sharp','Dull','Bright','Dark','Light','Heavy','Lightweight','Strong','Weak','Powerful','Powerless','Energetic','Lazy','Active','Passive','Dynamic','Static','Moving','Stationary','Mobile','Immobile','Portable','Fixed','Flexible','Rigid','Elastic','Plastic','Metal','Wooden','Glass','Paper','Fabric','Leather','Rubber','Plastic','Ceramic','Crystal','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Titanium','Carbon','Silicon','Oxygen','Hydrogen','Nitrogen','Helium','Neon','Argon','Krypton','Xenon','Radon','Uranium','Plutonium','Radium','Polonium','Astatine','Francium','Radon','Actinium','Thorium','Protactinium','Neptunium','Americium','Curium','Berkelium','Californium','Einsteinium','Fermium','Mendelevium','Nobelium','Lawrencium','Rutherfordium','Dubnium','Seaborgium','Bohrium','Hassium','Meitnerium','Darmstadtium','Roentgenium','Copernicium','Nihonium','Flerovium','Moscovium','Livermorium','Tennessine','Oganesson',]; let totalFixes = 0; let filesProcessed = 0; function findAllMissingImports(content,filePath) { const missingImports = []; allIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return [...new Set(missingImports)]} function fixAllMissingImports(content,filePath) { const missingImports = findAllMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: '0' }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: 'fixedContent',changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixAllMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting comprehensive missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Comprehensive Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Comprehensive missing imports fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const allIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle','Monitor','BarChart3','PieChart','Activity','TrendingDown','ArrowUp','ArrowDown','ArrowLeft','Calendar','Clock','MapPin','Mail','Phone','Globe','Wifi','Bluetooth','Camera','Video','Image','File','Folder','Archive','Bookmark','Tag','Filter','Sort','Grid','List','Layout','Maximize','Minimize','RotateCcw','RotateCw','RefreshCw','RefreshCcw','Play','Pause','Stop','SkipBack','SkipForward','Volume2','VolumeX','Mic','MicOff','Headphones','Speaker','Radio','Tv','Monitor','Laptop','Smartphone','Tablet','Watch','Gamepad2','Joystick','Mouse','Keyboard','Printer','Scanner','HardDrive','Cpu','MemoryStick','Wifi','Bluetooth','Nfc','QrCode','Barcode','CreditCard','Wallet','Banknote','Coins','PiggyBank','TrendingUp','TrendingDown','BarChart','LineChart','PieChart','Activity','Pulse','Heart','Zap','Battery','BatteryCharging','Power','Plug','Outlet','Lightbulb','Sun','Moon','Cloud','CloudRain','CloudSnow','CloudLightning','Wind','Thermometer','Droplets','Umbrella','TreePine','Tree','Flower','Leaf','Bug','Bird','Fish','Cat','Dog','Car','Truck','Bus','Train','Plane','Ship','Bike','Motorbike','Helicopter','Rocket','Map','MapPin','Navigation','Compass','Flag','Building','Building2','Home','Store','Factory','Warehouse','Hospital','School','University','Church','Mosque','Temple','Castle','Tower','Bridge','Road','Rail','Anchor','Sailboat','LifeBuoy','Umbrella','Shield','Sword','Axe','Hammer','Wrench','Screwdriver','Drill','Saw','Scissors','Knife','Fork','Spoon','Plate','Bowl','Cup','Glass','Bottle','Can','Box','Package','Gift','Party','Cake','Cookie','Coffee','Tea','Beer','Wine','Cocktail','Ice','Fire','Flame','Smoke','Water','Droplet','Waves','Snowflake','Sunrise','Sunset','Moon','Star','Planet','Satellite','Telescope','Microscope','Atom','Dna','Virus','Pill','Syringe','Stethoscope','Bandage','Cross','Heart','Lungs','Brain','Eye','Ear','Nose','Mouth','Tooth','Bone','Muscle','Foot','Hand','Finger','Thumb','Palm','Fist','Peace','Point','Wave','Clap','ThumbsUp','ThumbsDown','Ok','Victory','Rock','Paper','Scissors','Dice','Cards','Poker','Chess','Checkers','Puzzle','Rubik','Magic','Crystal','Gem','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Plastic','Wood','Stone','Brick','Concrete','Glass','Mirror','Lens','Telescope','Binoculars','Camera','Video','Film','Tv','Radio','Speaker','Headphones','Mic','Microphone','Amplifier','Equalizer','Volume','Mute','Play','Pause','Stop','Record','Skip','Rewind','FastForward','Repeat','Shuffle','Loop','Random','Sequential','Alphabetical','Numerical','Chronological','Ascending','Descending','Up','Down','Left','Right','Forward','Backward','North','South','East','West','Northeast','Northwest','Southeast','Southwest','Center','Middle','Top','Bottom','Front','Back','Side','Inside','Outside','Above','Below','Over','Under','Through','Across','Around','Between','Among','Within','Without','With','Against','Toward','Away','Near','Far','Close','Open','Closed','Locked','Unlocked','Secure','Insecure','Safe','Dangerous','Risky','Careful','Careless','Accurate','Inaccurate','Correct','Incorrect','Right','Wrong','True','False','Yes','No','Maybe','Perhaps','Possibly','Definitely','Certainly','Absolutely','Never','Always','Sometimes','Often','Rarely','Frequently','Occasionally','Regularly','Irregularly','Consistently','Inconsistently','Constantly','Temporarily','Permanently','Immediately','Eventually','Finally','Initially','Originally','Previously','Currently','Presently','Now','Then','Before','After','During','While','Since','Until','Till','From','To','For','By','With','Without','Within','Beyond','Past','Future','Present','Today','Yesterday','Tomorrow','Now','Later','Earlier','Soon','Late','Early','Quick','Slow','Fast','Rapid','Gradual','Sudden','Instant','Momentary','Brief','Long','Short','Tall','Small','Large','Big','Little','Huge','Tiny','Massive','Miniature','Giant','Dwarf','Wide','Narrow','Broad','Thin','Thick','Deep','Shallow','High','Low','Elevated','Depressed','Raised','Lowered','Uplifted','Downcast','Optimistic','Pessimistic','Positive','Negative','Good','Bad','Better','Worse','Best','Worst','Excellent','Poor','Great','Terrible','Wonderful','Awful','Amazing','Disappointing','Surprising','Expected','Unexpected','Normal','Abnormal','Regular','Irregular','Standard','Nonstandard','Typical','Atypical','Common','Uncommon','Rare','Frequent','Occasional','Constant','Variable','Fixed','Flexible','Rigid','Soft','Hard','Smooth','Rough','Sharp','Dull','Bright','Dark','Light','Heavy','Lightweight','Strong','Weak','Powerful','Powerless','Energetic','Lazy','Active','Passive','Dynamic','Static','Moving','Stationary','Mobile','Immobile','Portable','Fixed','Flexible','Rigid','Elastic','Plastic','Metal','Wooden','Glass','Paper','Fabric','Leather','Rubber','Plastic','Ceramic','Crystal','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Titanium','Carbon','Silicon','Oxygen','Hydrogen','Nitrogen','Helium','Neon','Argon','Krypton','Xenon','Radon','Uranium','Plutonium','Radium','Polonium','Astatine','Francium','Radon','Actinium','Thorium','Protactinium','Neptunium','Americium','Curium','Berkelium','Californium','Einsteinium','Fermium','Mendelevium','Nobelium','Lawrencium','Rutherfordium','Dubnium','Seaborgium','Bohrium','Hassium','Meitnerium','Darmstadtium','Roentgenium','Copernicium','Nihonium','Flerovium','Moscovium','Livermorium','Tennessine','Oganesson',]; let totalFixes = 0; let filesProcessed = 0; function findAllMissingImports(content,filePath) { const missingImports = []; allIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return [...new Set(missingImports)]} function fixAllMissingImports(content,filePath) { const missingImports = findAllMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixAllMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting comprehensive missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Comprehensive Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Comprehensive missing imports fix completed!`)} main().catch(console.error);
=======
<
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const allIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle','Monitor','BarChart3','PieChart','Activity','TrendingDown','ArrowUp','ArrowDown','ArrowLeft','Calendar','Clock','MapPin','Mail','Phone','Globe','Wifi','Bluetooth','Camera','Video','Image','File','Folder','Archive','Bookmark','Tag','Filter','Sort','Grid','List','Layout','Maximize','Minimize','RotateCcw','RotateCw','RefreshCw','RefreshCcw','Play','Pause','Stop','SkipBack','SkipForward','Volume2','VolumeX','Mic','MicOff','Headphones','Speaker','Radio','Tv','Monitor','Laptop','Smartphone','Tablet','Watch','Gamepad2','Joystick','Mouse','Keyboard','Printer','Scanner','HardDrive','Cpu','MemoryStick','Wifi','Bluetooth','Nfc','QrCode','Barcode','CreditCard','Wallet','Banknote','Coins','PiggyBank','TrendingUp','TrendingDown','BarChart','LineChart','PieChart','Activity','Pulse','Heart','Zap','Battery','BatteryCharging','Power','Plug','Outlet','Lightbulb','Sun','Moon','Cloud','CloudRain','CloudSnow','CloudLightning','Wind','Thermometer','Droplets','Umbrella','TreePine','Tree','Flower','Leaf','Bug','Bird','Fish','Cat','Dog','Car','Truck','Bus','Train','Plane','Ship','Bike','Motorbike','Helicopter','Rocket','Map','MapPin','Navigation','Compass','Flag','Building','Building2','Home','Store','Factory','Warehouse','Hospital','School','University','Church','Mosque','Temple','Castle','Tower','Bridge','Road','Rail','Anchor','Sailboat','LifeBuoy','Umbrella','Shield','Sword','Axe','Hammer','Wrench','Screwdriver','Drill','Saw','Scissors','Knife','Fork','Spoon','Plate','Bowl','Cup','Glass','Bottle','Can','Box','Package','Gift','Party','Cake','Cookie','Coffee','Tea','Beer','Wine','Cocktail','Ice','Fire','Flame','Smoke','Water','Droplet','Waves','Snowflake','Sunrise','Sunset','Moon','Star','Planet','Satellite','Telescope','Microscope','Atom','Dna','Virus','Pill','Syringe','Stethoscope','Bandage','Cross','Heart','Lungs','Brain','Eye','Ear','Nose','Mouth','Tooth','Bone','Muscle','Foot','Hand','Finger','Thumb','Palm','Fist','Peace','Point','Wave','Clap','ThumbsUp','ThumbsDown','Ok','Victory','Rock','Paper','Scissors','Dice','Cards','Poker','Chess','Checkers','Puzzle','Rubik','Magic','Crystal','Gem','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Plastic','Wood','Stone','Brick','Concrete','Glass','Mirror','Lens','Telescope','Binoculars','Camera','Video','Film','Tv','Radio','Speaker','Headphones','Mic','Microphone','Amplifier','Equalizer','Volume','Mute','Play','Pause','Stop','Record','Skip','Rewind','FastForward','Repeat','Shuffle','Loop','Random','Sequential','Alphabetical','Numerical','Chronological','Ascending','Descending','Up','Down','Left','Right','Forward','Backward','North','South','East','West','Northeast','Northwest','Southeast','Southwest','Center','Middle','Top','Bottom','Front','Back','Side','Inside','Outside','Above','Below','Over','Under','Through','Across','Around','Between','Among','Within','Without','With','Against','Toward','Away','Near','Far','Close','Open','Closed','Locked','Unlocked','Secure','Insecure','Safe','Dangerous','Risky','Careful','Careless','Accurate','Inaccurate','Correct','Incorrect','Right','Wrong','True','False','Yes','No','Maybe','Perhaps','Possibly','Definitely','Certainly','Absolutely','Never','Always','Sometimes','Often','Rarely','Frequently','Occasionally','Regularly','Irregularly','Consistently','Inconsistently','Constantly','Temporarily','Permanently','Immediately','Eventually','Finally','Initially','Originally','Previously','Currently','Presently','Now','Then','Before','After','During','While','Since','Until','Till','From','To','For','By','With','Without','Within','Beyond','Past','Future','Present','Today','Yesterday','Tomorrow','Now','Later','Earlier','Soon','Late','Early','Quick','Slow','Fast','Rapid','Gradual','Sudden','Instant','Momentary','Brief','Long','Short','Tall','Small','Large','Big','Little','Huge','Tiny','Massive','Miniature','Giant','Dwarf','Wide','Narrow','Broad','Thin','Thick','Deep','Shallow','High','Low','Elevated','Depressed','Raised','Lowered','Uplifted','Downcast','Optimistic','Pessimistic','Positive','Negative','Good','Bad','Better','Worse','Best','Worst','Excellent','Poor','Great','Terrible','Wonderful','Awful','Amazing','Disappointing','Surprising','Expected','Unexpected','Normal','Abnormal','Regular','Irregular','Standard','Nonstandard','Typical','Atypical','Common','Uncommon','Rare','Frequent','Occasional','Constant','Variable','Fixed','Flexible','Rigid','Soft','Hard','Smooth','Rough','Sharp','Dull','Bright','Dark','Light','Heavy','Lightweight','Strong','Weak','Powerful','Powerless','Energetic','Lazy','Active','Passive','Dynamic','Static','Moving','Stationary','Mobile','Immobile','Portable','Fixed','Flexible','Rigid','Elastic','Plastic','Metal','Wooden','Glass','Paper','Fabric','Leather','Rubber','Plastic','Ceramic','Crystal','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Titanium','Carbon','Silicon','Oxygen','Hydrogen','Nitrogen','Helium','Neon','Argon','Krypton','Xenon','Radon','Uranium','Plutonium','Radium','Polonium','Astatine','Francium','Radon','Actinium','Thorium','Protactinium','Neptunium','Americium','Curium','Berkelium','Californium','Einsteinium','Fermium','Mendelevium','Nobelium','Lawrencium','Rutherfordium','Dubnium','Seaborgium','Bohrium','Hassium','Meitnerium','Darmstadtium','Roentgenium','Copernicium','Nihonium','Flerovium','Moscovium','Livermorium','Tennessine','Oganesson',]; let totalFixes = 0; let filesProcessed = 0; function findAllMissingImports(content,filePath) { const missingImports = []; allIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return [...new Set(missingImports)]} function fixAllMissingImports(content,filePath) { const missingImports = findAllMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: '0' }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: 'fixedContent',changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixAllMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting comprehensive missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Comprehensive Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Comprehensive missing imports fix completed!`)} main().catch(console.error);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const allIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle','Monitor','BarChart3','PieChart','Activity','TrendingDown','ArrowUp','ArrowDown','ArrowLeft','Calendar','Clock','MapPin','Mail','Phone','Globe','Wifi','Bluetooth','Camera','Video','Image','File','Folder','Archive','Bookmark','Tag','Filter','Sort','Grid','List','Layout','Maximize','Minimize','RotateCcw','RotateCw','RefreshCw','RefreshCcw','Play','Pause','Stop','SkipBack','SkipForward','Volume2','VolumeX','Mic','MicOff','Headphones','Speaker','Radio','Tv','Monitor','Laptop','Smartphone','Tablet','Watch','Gamepad2','Joystick','Mouse','Keyboard','Printer','Scanner','HardDrive','Cpu','MemoryStick','Wifi','Bluetooth','Nfc','QrCode','Barcode','CreditCard','Wallet','Banknote','Coins','PiggyBank','TrendingUp','TrendingDown','BarChart','LineChart','PieChart','Activity','Pulse','Heart','Zap','Battery','BatteryCharging','Power','Plug','Outlet','Lightbulb','Sun','Moon','Cloud','CloudRain','CloudSnow','CloudLightning','Wind','Thermometer','Droplets','Umbrella','TreePine','Tree','Flower','Leaf','Bug','Bird','Fish','Cat','Dog','Car','Truck','Bus','Train','Plane','Ship','Bike','Motorbike','Helicopter','Rocket','Map','MapPin','Navigation','Compass','Flag','Building','Building2','Home','Store','Factory','Warehouse','Hospital','School','University','Church','Mosque','Temple','Castle','Tower','Bridge','Road','Rail','Anchor','Sailboat','LifeBuoy','Umbrella','Shield','Sword','Axe','Hammer','Wrench','Screwdriver','Drill','Saw','Scissors','Knife','Fork','Spoon','Plate','Bowl','Cup','Glass','Bottle','Can','Box','Package','Gift','Party','Cake','Cookie','Coffee','Tea','Beer','Wine','Cocktail','Ice','Fire','Flame','Smoke','Water','Droplet','Waves','Snowflake','Sunrise','Sunset','Moon','Star','Planet','Satellite','Telescope','Microscope','Atom','Dna','Virus','Pill','Syringe','Stethoscope','Bandage','Cross','Heart','Lungs','Brain','Eye','Ear','Nose','Mouth','Tooth','Bone','Muscle','Foot','Hand','Finger','Thumb','Palm','Fist','Peace','Point','Wave','Clap','ThumbsUp','ThumbsDown','Ok','Victory','Rock','Paper','Scissors','Dice','Cards','Poker','Chess','Checkers','Puzzle','Rubik','Magic','Crystal','Gem','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Plastic','Wood','Stone','Brick','Concrete','Glass','Mirror','Lens','Telescope','Binoculars','Camera','Video','Film','Tv','Radio','Speaker','Headphones','Mic','Microphone','Amplifier','Equalizer','Volume','Mute','Play','Pause','Stop','Record','Skip','Rewind','FastForward','Repeat','Shuffle','Loop','Random','Sequential','Alphabetical','Numerical','Chronological','Ascending','Descending','Up','Down','Left','Right','Forward','Backward','North','South','East','West','Northeast','Northwest','Southeast','Southwest','Center','Middle','Top','Bottom','Front','Back','Side','Inside','Outside','Above','Below','Over','Under','Through','Across','Around','Between','Among','Within','Without','With','Against','Toward','Away','Near','Far','Close','Open','Closed','Locked','Unlocked','Secure','Insecure','Safe','Dangerous','Risky','Careful','Careless','Accurate','Inaccurate','Correct','Incorrect','Right','Wrong','True','False','Yes','No','Maybe','Perhaps','Possibly','Definitely','Certainly','Absolutely','Never','Always','Sometimes','Often','Rarely','Frequently','Occasionally','Regularly','Irregularly','Consistently','Inconsistently','Constantly','Temporarily','Permanently','Immediately','Eventually','Finally','Initially','Originally','Previously','Currently','Presently','Now','Then','Before','After','During','While','Since','Until','Till','From','To','For','By','With','Without','Within','Beyond','Past','Future','Present','Today','Yesterday','Tomorrow','Now','Later','Earlier','Soon','Late','Early','Quick','Slow','Fast','Rapid','Gradual','Sudden','Instant','Momentary','Brief','Long','Short','Tall','Small','Large','Big','Little','Huge','Tiny','Massive','Miniature','Giant','Dwarf','Wide','Narrow','Broad','Thin','Thick','Deep','Shallow','High','Low','Elevated','Depressed','Raised','Lowered','Uplifted','Downcast','Optimistic','Pessimistic','Positive','Negative','Good','Bad','Better','Worse','Best','Worst','Excellent','Poor','Great','Terrible','Wonderful','Awful','Amazing','Disappointing','Surprising','Expected','Unexpected','Normal','Abnormal','Regular','Irregular','Standard','Nonstandard','Typical','Atypical','Common','Uncommon','Rare','Frequent','Occasional','Constant','Variable','Fixed','Flexible','Rigid','Soft','Hard','Smooth','Rough','Sharp','Dull','Bright','Dark','Light','Heavy','Lightweight','Strong','Weak','Powerful','Powerless','Energetic','Lazy','Active','Passive','Dynamic','Static','Moving','Stationary','Mobile','Immobile','Portable','Fixed','Flexible','Rigid','Elastic','Plastic','Metal','Wooden','Glass','Paper','Fabric','Leather','Rubber','Plastic','Ceramic','Crystal','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Titanium','Carbon','Silicon','Oxygen','Hydrogen','Nitrogen','Helium','Neon','Argon','Krypton','Xenon','Radon','Uranium','Plutonium','Radium','Polonium','Astatine','Francium','Radon','Actinium','Thorium','Protactinium','Neptunium','Americium','Curium','Berkelium','Californium','Einsteinium','Fermium','Mendelevium','Nobelium','Lawrencium','Rutherfordium','Dubnium','Seaborgium','Bohrium','Hassium','Meitnerium','Darmstadtium','Roentgenium','Copernicium','Nihonium','Flerovium','Moscovium','Livermorium','Tennessine','Oganesson',]; let totalFixes = 0; let filesProcessed = 0; function findAllMissingImports(content,filePath) { const missingImports = []; allIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return [...new Set(missingImports)]} function fixAllMissingImports(content,filePath) { const missingImports = findAllMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixAllMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting comprehensive missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Comprehensive Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Comprehensive missing imports fix completed!`)} main().catch(console.error);
main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const allIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle','Monitor','BarChart3','PieChart','Activity','TrendingDown','ArrowUp','ArrowDown','ArrowLeft','Calendar','Clock','MapPin','Mail','Phone','Globe','Wifi','Bluetooth','Camera','Video','Image','File','Folder','Archive','Bookmark','Tag','Filter','Sort','Grid','List','Layout','Maximize','Minimize','RotateCcw','RotateCw','RefreshCw','RefreshCcw','Play','Pause','Stop','SkipBack','SkipForward','Volume2','VolumeX','Mic','MicOff','Headphones','Speaker','Radio','Tv','Monitor','Laptop','Smartphone','Tablet','Watch','Gamepad2','Joystick','Mouse','Keyboard','Printer','Scanner','HardDrive','Cpu','MemoryStick','Wifi','Bluetooth','Nfc','QrCode','Barcode','CreditCard','Wallet','Banknote','Coins','PiggyBank','TrendingUp','TrendingDown','BarChart','LineChart','PieChart','Activity','Pulse','Heart','Zap','Battery','BatteryCharging','Power','Plug','Outlet','Lightbulb','Sun','Moon','Cloud','CloudRain','CloudSnow','CloudLightning','Wind','Thermometer','Droplets','Umbrella','TreePine','Tree','Flower','Leaf','Bug','Bird','Fish','Cat','Dog','Car','Truck','Bus','Train','Plane','Ship','Bike','Motorbike','Helicopter','Rocket','Map','MapPin','Navigation','Compass','Flag','Building','Building2','Home','Store','Factory','Warehouse','Hospital','School','University','Church','Mosque','Temple','Castle','Tower','Bridge','Road','Rail','Anchor','Sailboat','LifeBuoy','Umbrella','Shield','Sword','Axe','Hammer','Wrench','Screwdriver','Drill','Saw','Scissors','Knife','Fork','Spoon','Plate','Bowl','Cup','Glass','Bottle','Can','Box','Package','Gift','Party','Cake','Cookie','Coffee','Tea','Beer','Wine','Cocktail','Ice','Fire','Flame','Smoke','Water','Droplet','Waves','Snowflake','Sunrise','Sunset','Moon','Star','Planet','Satellite','Telescope','Microscope','Atom','Dna','Virus','Pill','Syringe','Stethoscope','Bandage','Cross','Heart','Lungs','Brain','Eye','Ear','Nose','Mouth','Tooth','Bone','Muscle','Foot','Hand','Finger','Thumb','Palm','Fist','Peace','Point','Wave','Clap','ThumbsUp','ThumbsDown','Ok','Victory','Rock','Paper','Scissors','Dice','Cards','Poker','Chess','Checkers','Puzzle','Rubik','Magic','Crystal','Gem','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Plastic','Wood','Stone','Brick','Concrete','Glass','Mirror','Lens','Telescope','Binoculars','Camera','Video','Film','Tv','Radio','Speaker','Headphones','Mic','Microphone','Amplifier','Equalizer','Volume','Mute','Play','Pause','Stop','Record','Skip','Rewind','FastForward','Repeat','Shuffle','Loop','Random','Sequential','Alphabetical','Numerical','Chronological','Ascending','Descending','Up','Down','Left','Right','Forward','Backward','North','South','East','West','Northeast','Northwest','Southeast','Southwest','Center','Middle','Top','Bottom','Front','Back','Side','Inside','Outside','Above','Below','Over','Under','Through','Across','Around','Between','Among','Within','Without','With','Against','Toward','Away','Near','Far','Close','Open','Closed','Locked','Unlocked','Secure','Insecure','Safe','Dangerous','Risky','Careful','Careless','Accurate','Inaccurate','Correct','Incorrect','Right','Wrong','True','False','Yes','No','Maybe','Perhaps','Possibly','Definitely','Certainly','Absolutely','Never','Always','Sometimes','Often','Rarely','Frequently','Occasionally','Regularly','Irregularly','Consistently','Inconsistently','Constantly','Temporarily','Permanently','Immediately','Eventually','Finally','Initially','Originally','Previously','Currently','Presently','Now','Then','Before','After','During','While','Since','Until','Till','From','To','For','By','With','Without','Within','Beyond','Past','Future','Present','Today','Yesterday','Tomorrow','Now','Later','Earlier','Soon','Late','Early','Quick','Slow','Fast','Rapid','Gradual','Sudden','Instant','Momentary','Brief','Long','Short','Tall','Small','Large','Big','Little','Huge','Tiny','Massive','Miniature','Giant','Dwarf','Wide','Narrow','Broad','Thin','Thick','Deep','Shallow','High','Low','Elevated','Depressed','Raised','Lowered','Uplifted','Downcast','Optimistic','Pessimistic','Positive','Negative','Good','Bad','Better','Worse','Best','Worst','Excellent','Poor','Great','Terrible','Wonderful','Awful','Amazing','Disappointing','Surprising','Expected','Unexpected','Normal','Abnormal','Regular','Irregular','Standard','Nonstandard','Typical','Atypical','Common','Uncommon','Rare','Frequent','Occasional','Constant','Variable','Fixed','Flexible','Rigid','Soft','Hard','Smooth','Rough','Sharp','Dull','Bright','Dark','Light','Heavy','Lightweight','Strong','Weak','Powerful','Powerless','Energetic','Lazy','Active','Passive','Dynamic','Static','Moving','Stationary','Mobile','Immobile','Portable','Fixed','Flexible','Rigid','Elastic','Plastic','Metal','Wooden','Glass','Paper','Fabric','Leather','Rubber','Plastic','Ceramic','Crystal','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Titanium','Carbon','Silicon','Oxygen','Hydrogen','Nitrogen','Helium','Neon','Argon','Krypton','Xenon','Radon','Uranium','Plutonium','Radium','Polonium','Astatine','Francium','Radon','Actinium','Thorium','Protactinium','Neptunium','Americium','Curium','Berkelium','Californium','Einsteinium','Fermium','Mendelevium','Nobelium','Lawrencium','Rutherfordium','Dubnium','Seaborgium','Bohrium','Hassium','Meitnerium','Darmstadtium','Roentgenium','Copernicium','Nihonium','Flerovium','Moscovium','Livermorium','Tennessine','Oganesson',]; let totalFixes = 0; let filesProcessed = 0; function findAllMissingImports(content,filePath) { const missingImports = []; allIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return [...new Set(missingImports)]} function fixAllMissingImports(content,filePath) { const missingImports = findAllMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: '0' }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: 'fixedContent',changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixAllMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting comprehensive missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Comprehensive Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Comprehensive missing imports fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const allIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle','Monitor','BarChart3','PieChart','Activity','TrendingDown','ArrowUp','ArrowDown','ArrowLeft','Calendar','Clock','MapPin','Mail','Phone','Globe','Wifi','Bluetooth','Camera','Video','Image','File','Folder','Archive','Bookmark','Tag','Filter','Sort','Grid','List','Layout','Maximize','Minimize','RotateCcw','RotateCw','RefreshCw','RefreshCcw','Play','Pause','Stop','SkipBack','SkipForward','Volume2','VolumeX','Mic','MicOff','Headphones','Speaker','Radio','Tv','Monitor','Laptop','Smartphone','Tablet','Watch','Gamepad2','Joystick','Mouse','Keyboard','Printer','Scanner','HardDrive','Cpu','MemoryStick','Wifi','Bluetooth','Nfc','QrCode','Barcode','CreditCard','Wallet','Banknote','Coins','PiggyBank','TrendingUp','TrendingDown','BarChart','LineChart','PieChart','Activity','Pulse','Heart','Zap','Battery','BatteryCharging','Power','Plug','Outlet','Lightbulb','Sun','Moon','Cloud','CloudRain','CloudSnow','CloudLightning','Wind','Thermometer','Droplets','Umbrella','TreePine','Tree','Flower','Leaf','Bug','Bird','Fish','Cat','Dog','Car','Truck','Bus','Train','Plane','Ship','Bike','Motorbike','Helicopter','Rocket','Map','MapPin','Navigation','Compass','Flag','Building','Building2','Home','Store','Factory','Warehouse','Hospital','School','University','Church','Mosque','Temple','Castle','Tower','Bridge','Road','Rail','Anchor','Sailboat','LifeBuoy','Umbrella','Shield','Sword','Axe','Hammer','Wrench','Screwdriver','Drill','Saw','Scissors','Knife','Fork','Spoon','Plate','Bowl','Cup','Glass','Bottle','Can','Box','Package','Gift','Party','Cake','Cookie','Coffee','Tea','Beer','Wine','Cocktail','Ice','Fire','Flame','Smoke','Water','Droplet','Waves','Snowflake','Sunrise','Sunset','Moon','Star','Planet','Satellite','Telescope','Microscope','Atom','Dna','Virus','Pill','Syringe','Stethoscope','Bandage','Cross','Heart','Lungs','Brain','Eye','Ear','Nose','Mouth','Tooth','Bone','Muscle','Foot','Hand','Finger','Thumb','Palm','Fist','Peace','Point','Wave','Clap','ThumbsUp','ThumbsDown','Ok','Victory','Rock','Paper','Scissors','Dice','Cards','Poker','Chess','Checkers','Puzzle','Rubik','Magic','Crystal','Gem','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Plastic','Wood','Stone','Brick','Concrete','Glass','Mirror','Lens','Telescope','Binoculars','Camera','Video','Film','Tv','Radio','Speaker','Headphones','Mic','Microphone','Amplifier','Equalizer','Volume','Mute','Play','Pause','Stop','Record','Skip','Rewind','FastForward','Repeat','Shuffle','Loop','Random','Sequential','Alphabetical','Numerical','Chronological','Ascending','Descending','Up','Down','Left','Right','Forward','Backward','North','South','East','West','Northeast','Northwest','Southeast','Southwest','Center','Middle','Top','Bottom','Front','Back','Side','Inside','Outside','Above','Below','Over','Under','Through','Across','Around','Between','Among','Within','Without','With','Against','Toward','Away','Near','Far','Close','Open','Closed','Locked','Unlocked','Secure','Insecure','Safe','Dangerous','Risky','Careful','Careless','Accurate','Inaccurate','Correct','Incorrect','Right','Wrong','True','False','Yes','No','Maybe','Perhaps','Possibly','Definitely','Certainly','Absolutely','Never','Always','Sometimes','Often','Rarely','Frequently','Occasionally','Regularly','Irregularly','Consistently','Inconsistently','Constantly','Temporarily','Permanently','Immediately','Eventually','Finally','Initially','Originally','Previously','Currently','Presently','Now','Then','Before','After','During','While','Since','Until','Till','From','To','For','By','With','Without','Within','Beyond','Past','Future','Present','Today','Yesterday','Tomorrow','Now','Later','Earlier','Soon','Late','Early','Quick','Slow','Fast','Rapid','Gradual','Sudden','Instant','Momentary','Brief','Long','Short','Tall','Small','Large','Big','Little','Huge','Tiny','Massive','Miniature','Giant','Dwarf','Wide','Narrow','Broad','Thin','Thick','Deep','Shallow','High','Low','Elevated','Depressed','Raised','Lowered','Uplifted','Downcast','Optimistic','Pessimistic','Positive','Negative','Good','Bad','Better','Worse','Best','Worst','Excellent','Poor','Great','Terrible','Wonderful','Awful','Amazing','Disappointing','Surprising','Expected','Unexpected','Normal','Abnormal','Regular','Irregular','Standard','Nonstandard','Typical','Atypical','Common','Uncommon','Rare','Frequent','Occasional','Constant','Variable','Fixed','Flexible','Rigid','Soft','Hard','Smooth','Rough','Sharp','Dull','Bright','Dark','Light','Heavy','Lightweight','Strong','Weak','Powerful','Powerless','Energetic','Lazy','Active','Passive','Dynamic','Static','Moving','Stationary','Mobile','Immobile','Portable','Fixed','Flexible','Rigid','Elastic','Plastic','Metal','Wooden','Glass','Paper','Fabric','Leather','Rubber','Plastic','Ceramic','Crystal','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Titanium','Carbon','Silicon','Oxygen','Hydrogen','Nitrogen','Helium','Neon','Argon','Krypton','Xenon','Radon','Uranium','Plutonium','Radium','Polonium','Astatine','Francium','Radon','Actinium','Thorium','Protactinium','Neptunium','Americium','Curium','Berkelium','Californium','Einsteinium','Fermium','Mendelevium','Nobelium','Lawrencium','Rutherfordium','Dubnium','Seaborgium','Bohrium','Hassium','Meitnerium','Darmstadtium','Roentgenium','Copernicium','Nihonium','Flerovium','Moscovium','Livermorium','Tennessine','Oganesson',]; let totalFixes = 0; let filesProcessed = 0; function findAllMissingImports(content,filePath) { const missingImports = []; allIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return [...new Set(missingImports)]} function fixAllMissingImports(content,filePath) { const missingImports = findAllMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixAllMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting comprehensive missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Comprehensive Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Comprehensive missing imports fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const allIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle','Monitor','BarChart3','PieChart','Activity','TrendingDown','ArrowUp','ArrowDown','ArrowLeft','Calendar','Clock','MapPin','Mail','Phone','Globe','Wifi','Bluetooth','Camera','Video','Image','File','Folder','Archive','Bookmark','Tag','Filter','Sort','Grid','List','Layout','Maximize','Minimize','RotateCcw','RotateCw','RefreshCw','RefreshCcw','Play','Pause','Stop','SkipBack','SkipForward','Volume2','VolumeX','Mic','MicOff','Headphones','Speaker','Radio','Tv','Monitor','Laptop','Smartphone','Tablet','Watch','Gamepad2','Joystick','Mouse','Keyboard','Printer','Scanner','HardDrive','Cpu','MemoryStick','Wifi','Bluetooth','Nfc','QrCode','Barcode','CreditCard','Wallet','Banknote','Coins','PiggyBank','TrendingUp','TrendingDown','BarChart','LineChart','PieChart','Activity','Pulse','Heart','Zap','Battery','BatteryCharging','Power','Plug','Outlet','Lightbulb','Sun','Moon','Cloud','CloudRain','CloudSnow','CloudLightning','Wind','Thermometer','Droplets','Umbrella','TreePine','Tree','Flower','Leaf','Bug','Bird','Fish','Cat','Dog','Car','Truck','Bus','Train','Plane','Ship','Bike','Motorbike','Helicopter','Rocket','Map','MapPin','Navigation','Compass','Flag','Building','Building2','Home','Store','Factory','Warehouse','Hospital','School','University','Church','Mosque','Temple','Castle','Tower','Bridge','Road','Rail','Anchor','Sailboat','LifeBuoy','Umbrella','Shield','Sword','Axe','Hammer','Wrench','Screwdriver','Drill','Saw','Scissors','Knife','Fork','Spoon','Plate','Bowl','Cup','Glass','Bottle','Can','Box','Package','Gift','Party','Cake','Cookie','Coffee','Tea','Beer','Wine','Cocktail','Ice','Fire','Flame','Smoke','Water','Droplet','Waves','Snowflake','Sunrise','Sunset','Moon','Star','Planet','Satellite','Telescope','Microscope','Atom','Dna','Virus','Pill','Syringe','Stethoscope','Bandage','Cross','Heart','Lungs','Brain','Eye','Ear','Nose','Mouth','Tooth','Bone','Muscle','Foot','Hand','Finger','Thumb','Palm','Fist','Peace','Point','Wave','Clap','ThumbsUp','ThumbsDown','Ok','Victory','Rock','Paper','Scissors','Dice','Cards','Poker','Chess','Checkers','Puzzle','Rubik','Magic','Crystal','Gem','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Plastic','Wood','Stone','Brick','Concrete','Glass','Mirror','Lens','Telescope','Binoculars','Camera','Video','Film','Tv','Radio','Speaker','Headphones','Mic','Microphone','Amplifier','Equalizer','Volume','Mute','Play','Pause','Stop','Record','Skip','Rewind','FastForward','Repeat','Shuffle','Loop','Random','Sequential','Alphabetical','Numerical','Chronological','Ascending','Descending','Up','Down','Left','Right','Forward','Backward','North','South','East','West','Northeast','Northwest','Southeast','Southwest','Center','Middle','Top','Bottom','Front','Back','Side','Inside','Outside','Above','Below','Over','Under','Through','Across','Around','Between','Among','Within','Without','With','Against','Toward','Away','Near','Far','Close','Open','Closed','Locked','Unlocked','Secure','Insecure','Safe','Dangerous','Risky','Careful','Careless','Accurate','Inaccurate','Correct','Incorrect','Right','Wrong','True','False','Yes','No','Maybe','Perhaps','Possibly','Definitely','Certainly','Absolutely','Never','Always','Sometimes','Often','Rarely','Frequently','Occasionally','Regularly','Irregularly','Consistently','Inconsistently','Constantly','Temporarily','Permanently','Immediately','Eventually','Finally','Initially','Originally','Previously','Currently','Presently','Now','Then','Before','After','During','While','Since','Until','Till','From','To','For','By','With','Without','Within','Beyond','Past','Future','Present','Today','Yesterday','Tomorrow','Now','Later','Earlier','Soon','Late','Early','Quick','Slow','Fast','Rapid','Gradual','Sudden','Instant','Momentary','Brief','Long','Short','Tall','Small','Large','Big','Little','Huge','Tiny','Massive','Miniature','Giant','Dwarf','Wide','Narrow','Broad','Thin','Thick','Deep','Shallow','High','Low','Elevated','Depressed','Raised','Lowered','Uplifted','Downcast','Optimistic','Pessimistic','Positive','Negative','Good','Bad','Better','Worse','Best','Worst','Excellent','Poor','Great','Terrible','Wonderful','Awful','Amazing','Disappointing','Surprising','Expected','Unexpected','Normal','Abnormal','Regular','Irregular','Standard','Nonstandard','Typical','Atypical','Common','Uncommon','Rare','Frequent','Occasional','Constant','Variable','Fixed','Flexible','Rigid','Soft','Hard','Smooth','Rough','Sharp','Dull','Bright','Dark','Light','Heavy','Lightweight','Strong','Weak','Powerful','Powerless','Energetic','Lazy','Active','Passive','Dynamic','Static','Moving','Stationary','Mobile','Immobile','Portable','Fixed','Flexible','Rigid','Elastic','Plastic','Metal','Wooden','Glass','Paper','Fabric','Leather','Rubber','Plastic','Ceramic','Crystal','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Titanium','Carbon','Silicon','Oxygen','Hydrogen','Nitrogen','Helium','Neon','Argon','Krypton','Xenon','Radon','Uranium','Plutonium','Radium','Polonium','Astatine','Francium','Radon','Actinium','Thorium','Protactinium','Neptunium','Americium','Curium','Berkelium','Californium','Einsteinium','Fermium','Mendelevium','Nobelium','Lawrencium','Rutherfordium','Dubnium','Seaborgium','Bohrium','Hassium','Meitnerium','Darmstadtium','Roentgenium','Copernicium','Nihonium','Flerovium','Moscovium','Livermorium','Tennessine','Oganesson',]; let totalFixes = 0; let filesProcessed = 0; function findAllMissingImports(content,filePath) { const missingImports = []; allIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return [...new Set(missingImports)]} function fixAllMissingImports(content,filePath) { const missingImports = findAllMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: '0' }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: 'fixedContent',changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixAllMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting comprehensive missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Comprehensive Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Comprehensive missing imports fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const allIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle','Monitor','BarChart3','PieChart','Activity','TrendingDown','ArrowUp','ArrowDown','ArrowLeft','Calendar','Clock','MapPin','Mail','Phone','Globe','Wifi','Bluetooth','Camera','Video','Image','File','Folder','Archive','Bookmark','Tag','Filter','Sort','Grid','List','Layout','Maximize','Minimize','RotateCcw','RotateCw','RefreshCw','RefreshCcw','Play','Pause','Stop','SkipBack','SkipForward','Volume2','VolumeX','Mic','MicOff','Headphones','Speaker','Radio','Tv','Monitor','Laptop','Smartphone','Tablet','Watch','Gamepad2','Joystick','Mouse','Keyboard','Printer','Scanner','HardDrive','Cpu','MemoryStick','Wifi','Bluetooth','Nfc','QrCode','Barcode','CreditCard','Wallet','Banknote','Coins','PiggyBank','TrendingUp','TrendingDown','BarChart','LineChart','PieChart','Activity','Pulse','Heart','Zap','Battery','BatteryCharging','Power','Plug','Outlet','Lightbulb','Sun','Moon','Cloud','CloudRain','CloudSnow','CloudLightning','Wind','Thermometer','Droplets','Umbrella','TreePine','Tree','Flower','Leaf','Bug','Bird','Fish','Cat','Dog','Car','Truck','Bus','Train','Plane','Ship','Bike','Motorbike','Helicopter','Rocket','Map','MapPin','Navigation','Compass','Flag','Building','Building2','Home','Store','Factory','Warehouse','Hospital','School','University','Church','Mosque','Temple','Castle','Tower','Bridge','Road','Rail','Anchor','Sailboat','LifeBuoy','Umbrella','Shield','Sword','Axe','Hammer','Wrench','Screwdriver','Drill','Saw','Scissors','Knife','Fork','Spoon','Plate','Bowl','Cup','Glass','Bottle','Can','Box','Package','Gift','Party','Cake','Cookie','Coffee','Tea','Beer','Wine','Cocktail','Ice','Fire','Flame','Smoke','Water','Droplet','Waves','Snowflake','Sunrise','Sunset','Moon','Star','Planet','Satellite','Telescope','Microscope','Atom','Dna','Virus','Pill','Syringe','Stethoscope','Bandage','Cross','Heart','Lungs','Brain','Eye','Ear','Nose','Mouth','Tooth','Bone','Muscle','Foot','Hand','Finger','Thumb','Palm','Fist','Peace','Point','Wave','Clap','ThumbsUp','ThumbsDown','Ok','Victory','Rock','Paper','Scissors','Dice','Cards','Poker','Chess','Checkers','Puzzle','Rubik','Magic','Crystal','Gem','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Plastic','Wood','Stone','Brick','Concrete','Glass','Mirror','Lens','Telescope','Binoculars','Camera','Video','Film','Tv','Radio','Speaker','Headphones','Mic','Microphone','Amplifier','Equalizer','Volume','Mute','Play','Pause','Stop','Record','Skip','Rewind','FastForward','Repeat','Shuffle','Loop','Random','Sequential','Alphabetical','Numerical','Chronological','Ascending','Descending','Up','Down','Left','Right','Forward','Backward','North','South','East','West','Northeast','Northwest','Southeast','Southwest','Center','Middle','Top','Bottom','Front','Back','Side','Inside','Outside','Above','Below','Over','Under','Through','Across','Around','Between','Among','Within','Without','With','Against','Toward','Away','Near','Far','Close','Open','Closed','Locked','Unlocked','Secure','Insecure','Safe','Dangerous','Risky','Careful','Careless','Accurate','Inaccurate','Correct','Incorrect','Right','Wrong','True','False','Yes','No','Maybe','Perhaps','Possibly','Definitely','Certainly','Absolutely','Never','Always','Sometimes','Often','Rarely','Frequently','Occasionally','Regularly','Irregularly','Consistently','Inconsistently','Constantly','Temporarily','Permanently','Immediately','Eventually','Finally','Initially','Originally','Previously','Currently','Presently','Now','Then','Before','After','During','While','Since','Until','Till','From','To','For','By','With','Without','Within','Beyond','Past','Future','Present','Today','Yesterday','Tomorrow','Now','Later','Earlier','Soon','Late','Early','Quick','Slow','Fast','Rapid','Gradual','Sudden','Instant','Momentary','Brief','Long','Short','Tall','Small','Large','Big','Little','Huge','Tiny','Massive','Miniature','Giant','Dwarf','Wide','Narrow','Broad','Thin','Thick','Deep','Shallow','High','Low','Elevated','Depressed','Raised','Lowered','Uplifted','Downcast','Optimistic','Pessimistic','Positive','Negative','Good','Bad','Better','Worse','Best','Worst','Excellent','Poor','Great','Terrible','Wonderful','Awful','Amazing','Disappointing','Surprising','Expected','Unexpected','Normal','Abnormal','Regular','Irregular','Standard','Nonstandard','Typical','Atypical','Common','Uncommon','Rare','Frequent','Occasional','Constant','Variable','Fixed','Flexible','Rigid','Soft','Hard','Smooth','Rough','Sharp','Dull','Bright','Dark','Light','Heavy','Lightweight','Strong','Weak','Powerful','Powerless','Energetic','Lazy','Active','Passive','Dynamic','Static','Moving','Stationary','Mobile','Immobile','Portable','Fixed','Flexible','Rigid','Elastic','Plastic','Metal','Wooden','Glass','Paper','Fabric','Leather','Rubber','Plastic','Ceramic','Crystal','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Titanium','Carbon','Silicon','Oxygen','Hydrogen','Nitrogen','Helium','Neon','Argon','Krypton','Xenon','Radon','Uranium','Plutonium','Radium','Polonium','Astatine','Francium','Radon','Actinium','Thorium','Protactinium','Neptunium','Americium','Curium','Berkelium','Californium','Einsteinium','Fermium','Mendelevium','Nobelium','Lawrencium','Rutherfordium','Dubnium','Seaborgium','Bohrium','Hassium','Meitnerium','Darmstadtium','Roentgenium','Copernicium','Nihonium','Flerovium','Moscovium','Livermorium','Tennessine','Oganesson',]; let totalFixes = 0; let filesProcessed = 0; function findAllMissingImports(content,filePath) { const missingImports = []; allIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return [...new Set(missingImports)]} function fixAllMissingImports(content,filePath) { const missingImports = findAllMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixAllMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting comprehensive missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Comprehensive Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Comprehensive missing imports fix completed!`)} main().catch(console.error);
<<<<<<< HEAD
main().catch(console.error);
<<<<<<< HEAD
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/fix-all-remaining-imports.js
>>>>>>> main:corrupted_backup/fix-all-remaining-imports.js
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const allIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle','Monitor','BarChart3','PieChart','Activity','TrendingDown','ArrowUp','ArrowDown','ArrowLeft','Calendar','Clock','MapPin','Mail','Phone','Globe','Wifi','Bluetooth','Camera','Video','Image','File','Folder','Archive','Bookmark','Tag','Filter','Sort','Grid','List','Layout','Maximize','Minimize','RotateCcw','RotateCw','RefreshCw','RefreshCcw','Play','Pause','Stop','SkipBack','SkipForward','Volume2','VolumeX','Mic','MicOff','Headphones','Speaker','Radio','Tv','Monitor','Laptop','Smartphone','Tablet','Watch','Gamepad2','Joystick','Mouse','Keyboard','Printer','Scanner','HardDrive','Cpu','MemoryStick','Wifi','Bluetooth','Nfc','QrCode','Barcode','CreditCard','Wallet','Banknote','Coins','PiggyBank','TrendingUp','TrendingDown','BarChart','LineChart','PieChart','Activity','Pulse','Heart','Zap','Battery','BatteryCharging','Power','Plug','Outlet','Lightbulb','Sun','Moon','Cloud','CloudRain','CloudSnow','CloudLightning','Wind','Thermometer','Droplets','Umbrella','TreePine','Tree','Flower','Leaf','Bug','Bird','Fish','Cat','Dog','Car','Truck','Bus','Train','Plane','Ship','Bike','Motorbike','Helicopter','Rocket','Map','MapPin','Navigation','Compass','Flag','Building','Building2','Home','Store','Factory','Warehouse','Hospital','School','University','Church','Mosque','Temple','Castle','Tower','Bridge','Road','Rail','Anchor','Sailboat','LifeBuoy','Umbrella','Shield','Sword','Axe','Hammer','Wrench','Screwdriver','Drill','Saw','Scissors','Knife','Fork','Spoon','Plate','Bowl','Cup','Glass','Bottle','Can','Box','Package','Gift','Party','Cake','Cookie','Coffee','Tea','Beer','Wine','Cocktail','Ice','Fire','Flame','Smoke','Water','Droplet','Waves','Snowflake','Sunrise','Sunset','Moon','Star','Planet','Satellite','Telescope','Microscope','Atom','Dna','Virus','Pill','Syringe','Stethoscope','Bandage','Cross','Heart','Lungs','Brain','Eye','Ear','Nose','Mouth','Tooth','Bone','Muscle','Foot','Hand','Finger','Thumb','Palm','Fist','Peace','Point','Wave','Clap','ThumbsUp','ThumbsDown','Ok','Victory','Rock','Paper','Scissors','Dice','Cards','Poker','Chess','Checkers','Puzzle','Rubik','Magic','Crystal','Gem','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Plastic','Wood','Stone','Brick','Concrete','Glass','Mirror','Lens','Telescope','Binoculars','Camera','Video','Film','Tv','Radio','Speaker','Headphones','Mic','Microphone','Amplifier','Equalizer','Volume','Mute','Play','Pause','Stop','Record','Skip','Rewind','FastForward','Repeat','Shuffle','Loop','Random','Sequential','Alphabetical','Numerical','Chronological','Ascending','Descending','Up','Down','Left','Right','Forward','Backward','North','South','East','West','Northeast','Northwest','Southeast','Southwest','Center','Middle','Top','Bottom','Front','Back','Side','Inside','Outside','Above','Below','Over','Under','Through','Across','Around','Between','Among','Within','Without','With','Against','Toward','Away','Near','Far','Close','Open','Closed','Locked','Unlocked','Secure','Insecure','Safe','Dangerous','Risky','Careful','Careless','Accurate','Inaccurate','Correct','Incorrect','Right','Wrong','True','False','Yes','No','Maybe','Perhaps','Possibly','Definitely','Certainly','Absolutely','Never','Always','Sometimes','Often','Rarely','Frequently','Occasionally','Regularly','Irregularly','Consistently','Inconsistently','Constantly','Temporarily','Permanently','Immediately','Eventually','Finally','Initially','Originally','Previously','Currently','Presently','Now','Then','Before','After','During','While','Since','Until','Till','From','To','For','By','With','Without','Within','Beyond','Past','Future','Present','Today','Yesterday','Tomorrow','Now','Later','Earlier','Soon','Late','Early','Quick','Slow','Fast','Rapid','Gradual','Sudden','Instant','Momentary','Brief','Long','Short','Tall','Small','Large','Big','Little','Huge','Tiny','Massive','Miniature','Giant','Dwarf','Wide','Narrow','Broad','Thin','Thick','Deep','Shallow','High','Low','Elevated','Depressed','Raised','Lowered','Uplifted','Downcast','Optimistic','Pessimistic','Positive','Negative','Good','Bad','Better','Worse','Best','Worst','Excellent','Poor','Great','Terrible','Wonderful','Awful','Amazing','Disappointing','Surprising','Expected','Unexpected','Normal','Abnormal','Regular','Irregular','Standard','Nonstandard','Typical','Atypical','Common','Uncommon','Rare','Frequent','Occasional','Constant','Variable','Fixed','Flexible','Rigid','Soft','Hard','Smooth','Rough','Sharp','Dull','Bright','Dark','Light','Heavy','Lightweight','Strong','Weak','Powerful','Powerless','Energetic','Lazy','Active','Passive','Dynamic','Static','Moving','Stationary','Mobile','Immobile','Portable','Fixed','Flexible','Rigid','Elastic','Plastic','Metal','Wooden','Glass','Paper','Fabric','Leather','Rubber','Plastic','Ceramic','Crystal','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Titanium','Carbon','Silicon','Oxygen','Hydrogen','Nitrogen','Helium','Neon','Argon','Krypton','Xenon','Radon','Uranium','Plutonium','Radium','Polonium','Astatine','Francium','Radon','Actinium','Thorium','Protactinium','Neptunium','Americium','Curium','Berkelium','Californium','Einsteinium','Fermium','Mendelevium','Nobelium','Lawrencium','Rutherfordium','Dubnium','Seaborgium','Bohrium','Hassium','Meitnerium','Darmstadtium','Roentgenium','Copernicium','Nihonium','Flerovium','Moscovium','Livermorium','Tennessine','Oganesson',]; let totalFixes = 0; let filesProcessed = 0; function findAllMissingImports(content,filePath) { const missingImports = []; allIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return [...new Set(missingImports)]} function fixAllMissingImports(content,filePath) { const missingImports = findAllMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixAllMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting comprehensive missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Comprehensive Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Comprehensive missing imports fix completed!`)} main().catch(console.error);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
main().catch(console.error);
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
:corrupted_backup/fix-all-remaining-imports.js
main:corrupted_backup/fix-all-remaining-imports.js
main().catch(console.error);
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
// Process individual file;
function processFile(filePath) {}
  try {'
    const content = fs.readFileSync(filePath, 'utf8');
    const result = fixAllMissingImports(content, filePath);
    
    if (result.changes > 0) {'
      fs.writeFileSync(filePath, result.content, 'utf8');
      totalFixes += result.changes;

// Main function;
async function main() { return null; }
    'pages/**/*.{tsx,jsx}','
    'src/**/*.{tsx,jsx}','
    'components/**/*.{tsx,jsx}',
  ];
  
  const excludeDirs = ['
    'node_modules','
    '.next','
    'build','
    'dist','
    'scripts','
    'automation','
    'automation_backup','
    'src.disabled','
    'pages.disabled','
    'components.disabled',
  ];

  }
  '
  console.log('\n📊 Comprehensive Missing Imports Fix Summary:');`
  console.log(`   Files processed: ${filesProcessed}`);`
  console.log(`   Total import fixes: ${totalFixes}`);'
  console.log('\n✨ Comprehensive missing imports fix completed!');
}

// Run the script;
main().catch(console.error);'"`
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const allIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle','Monitor','BarChart3','PieChart','Activity','TrendingDown','ArrowUp','ArrowDown','ArrowLeft','Calendar','Clock','MapPin','Mail','Phone','Globe','Wifi','Bluetooth','Camera','Video','Image','File','Folder','Archive','Bookmark','Tag','Filter','Sort','Grid','List','Layout','Maximize','Minimize','RotateCcw','RotateCw','RefreshCw','RefreshCcw','Play','Pause','Stop','SkipBack','SkipForward','Volume2','VolumeX','Mic','MicOff','Headphones','Speaker','Radio','Tv','Monitor','Laptop','Smartphone','Tablet','Watch','Gamepad2','Joystick','Mouse','Keyboard','Printer','Scanner','HardDrive','Cpu','MemoryStick','Wifi','Bluetooth','Nfc','QrCode','Barcode','CreditCard','Wallet','Banknote','Coins','PiggyBank','TrendingUp','TrendingDown','BarChart','LineChart','PieChart','Activity','Pulse','Heart','Zap','Battery','BatteryCharging','Power','Plug','Outlet','Lightbulb','Sun','Moon','Cloud','CloudRain','CloudSnow','CloudLightning','Wind','Thermometer','Droplets','Umbrella','TreePine','Tree','Flower','Leaf','Bug','Bird','Fish','Cat','Dog','Car','Truck','Bus','Train','Plane','Ship','Bike','Motorbike','Helicopter','Rocket','Map','MapPin','Navigation','Compass','Flag','Building','Building2','Home','Store','Factory','Warehouse','Hospital','School','University','Church','Mosque','Temple','Castle','Tower','Bridge','Road','Rail','Anchor','Sailboat','LifeBuoy','Umbrella','Shield','Sword','Axe','Hammer','Wrench','Screwdriver','Drill','Saw','Scissors','Knife','Fork','Spoon','Plate','Bowl','Cup','Glass','Bottle','Can','Box','Package','Gift','Party','Cake','Cookie','Coffee','Tea','Beer','Wine','Cocktail','Ice','Fire','Flame','Smoke','Water','Droplet','Waves','Snowflake','Sunrise','Sunset','Moon','Star','Planet','Satellite','Telescope','Microscope','Atom','Dna','Virus','Pill','Syringe','Stethoscope','Bandage','Cross','Heart','Lungs','Brain','Eye','Ear','Nose','Mouth','Tooth','Bone','Muscle','Foot','Hand','Finger','Thumb','Palm','Fist','Peace','Point','Wave','Clap','ThumbsUp','ThumbsDown','Ok','Victory','Rock','Paper','Scissors','Dice','Cards','Poker','Chess','Checkers','Puzzle','Rubik','Magic','Crystal','Gem','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Plastic','Wood','Stone','Brick','Concrete','Glass','Mirror','Lens','Telescope','Binoculars','Camera','Video','Film','Tv','Radio','Speaker','Headphones','Mic','Microphone','Amplifier','Equalizer','Volume','Mute','Play','Pause','Stop','Record','Skip','Rewind','FastForward','Repeat','Shuffle','Loop','Random','Sequential','Alphabetical','Numerical','Chronological','Ascending','Descending','Up','Down','Left','Right','Forward','Backward','North','South','East','West','Northeast','Northwest','Southeast','Southwest','Center','Middle','Top','Bottom','Front','Back','Side','Inside','Outside','Above','Below','Over','Under','Through','Across','Around','Between','Among','Within','Without','With','Against','Toward','Away','Near','Far','Close','Open','Closed','Locked','Unlocked','Secure','Insecure','Safe','Dangerous','Risky','Careful','Careless','Accurate','Inaccurate','Correct','Incorrect','Right','Wrong','True','False','Yes','No','Maybe','Perhaps','Possibly','Definitely','Certainly','Absolutely','Never','Always','Sometimes','Often','Rarely','Frequently','Occasionally','Regularly','Irregularly','Consistently','Inconsistently','Constantly','Temporarily','Permanently','Immediately','Eventually','Finally','Initially','Originally','Previously','Currently','Presently','Now','Then','Before','After','During','While','Since','Until','Till','From','To','For','By','With','Without','Within','Beyond','Past','Future','Present','Today','Yesterday','Tomorrow','Now','Later','Earlier','Soon','Late','Early','Quick','Slow','Fast','Rapid','Gradual','Sudden','Instant','Momentary','Brief','Long','Short','Tall','Small','Large','Big','Little','Huge','Tiny','Massive','Miniature','Giant','Dwarf','Wide','Narrow','Broad','Thin','Thick','Deep','Shallow','High','Low','Elevated','Depressed','Raised','Lowered','Uplifted','Downcast','Optimistic','Pessimistic','Positive','Negative','Good','Bad','Better','Worse','Best','Worst','Excellent','Poor','Great','Terrible','Wonderful','Awful','Amazing','Disappointing','Surprising','Expected','Unexpected','Normal','Abnormal','Regular','Irregular','Standard','Nonstandard','Typical','Atypical','Common','Uncommon','Rare','Frequent','Occasional','Constant','Variable','Fixed','Flexible','Rigid','Soft','Hard','Smooth','Rough','Sharp','Dull','Bright','Dark','Light','Heavy','Lightweight','Strong','Weak','Powerful','Powerless','Energetic','Lazy','Active','Passive','Dynamic','Static','Moving','Stationary','Mobile','Immobile','Portable','Fixed','Flexible','Rigid','Elastic','Plastic','Metal','Wooden','Glass','Paper','Fabric','Leather','Rubber','Plastic','Ceramic','Crystal','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Titanium','Carbon','Silicon','Oxygen','Hydrogen','Nitrogen','Helium','Neon','Argon','Krypton','Xenon','Radon','Uranium','Plutonium','Radium','Polonium','Astatine','Francium','Radon','Actinium','Thorium','Protactinium','Neptunium','Americium','Curium','Berkelium','Californium','Einsteinium','Fermium','Mendelevium','Nobelium','Lawrencium','Rutherfordium','Dubnium','Seaborgium','Bohrium','Hassium','Meitnerium','Darmstadtium','Roentgenium','Copernicium','Nihonium','Flerovium','Moscovium','Livermorium','Tennessine','Oganesson',]; let totalFixes = 0; let filesProcessed = 0; function findAllMissingImports(content,filePath) { const missingImports = []; allIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return [...new Set(missingImports)]} function fixAllMissingImports(content,filePath) { const missingImports = findAllMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: '0' }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: 'fixedContent',changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixAllMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting comprehensive missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Comprehensive Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Comprehensive missing imports fix completed!`)} main().catch(console.error);'"`
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const allIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle','Monitor','BarChart3','PieChart','Activity','TrendingDown','ArrowUp','ArrowDown','ArrowLeft','Calendar','Clock','MapPin','Mail','Phone','Globe','Wifi','Bluetooth','Camera','Video','Image','File','Folder','Archive','Bookmark','Tag','Filter','Sort','Grid','List','Layout','Maximize','Minimize','RotateCcw','RotateCw','RefreshCw','RefreshCcw','Play','Pause','Stop','SkipBack','SkipForward','Volume2','VolumeX','Mic','MicOff','Headphones','Speaker','Radio','Tv','Monitor','Laptop','Smartphone','Tablet','Watch','Gamepad2','Joystick','Mouse','Keyboard','Printer','Scanner','HardDrive','Cpu','MemoryStick','Wifi','Bluetooth','Nfc','QrCode','Barcode','CreditCard','Wallet','Banknote','Coins','PiggyBank','TrendingUp','TrendingDown','BarChart','LineChart','PieChart','Activity','Pulse','Heart','Zap','Battery','BatteryCharging','Power','Plug','Outlet','Lightbulb','Sun','Moon','Cloud','CloudRain','CloudSnow','CloudLightning','Wind','Thermometer','Droplets','Umbrella','TreePine','Tree','Flower','Leaf','Bug','Bird','Fish','Cat','Dog','Car','Truck','Bus','Train','Plane','Ship','Bike','Motorbike','Helicopter','Rocket','Map','MapPin','Navigation','Compass','Flag','Building','Building2','Home','Store','Factory','Warehouse','Hospital','School','University','Church','Mosque','Temple','Castle','Tower','Bridge','Road','Rail','Anchor','Sailboat','LifeBuoy','Umbrella','Shield','Sword','Axe','Hammer','Wrench','Screwdriver','Drill','Saw','Scissors','Knife','Fork','Spoon','Plate','Bowl','Cup','Glass','Bottle','Can','Box','Package','Gift','Party','Cake','Cookie','Coffee','Tea','Beer','Wine','Cocktail','Ice','Fire','Flame','Smoke','Water','Droplet','Waves','Snowflake','Sunrise','Sunset','Moon','Star','Planet','Satellite','Telescope','Microscope','Atom','Dna','Virus','Pill','Syringe','Stethoscope','Bandage','Cross','Heart','Lungs','Brain','Eye','Ear','Nose','Mouth','Tooth','Bone','Muscle','Foot','Hand','Finger','Thumb','Palm','Fist','Peace','Point','Wave','Clap','ThumbsUp','ThumbsDown','Ok','Victory','Rock','Paper','Scissors','Dice','Cards','Poker','Chess','Checkers','Puzzle','Rubik','Magic','Crystal','Gem','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Plastic','Wood','Stone','Brick','Concrete','Glass','Mirror','Lens','Telescope','Binoculars','Camera','Video','Film','Tv','Radio','Speaker','Headphones','Mic','Microphone','Amplifier','Equalizer','Volume','Mute','Play','Pause','Stop','Record','Skip','Rewind','FastForward','Repeat','Shuffle','Loop','Random','Sequential','Alphabetical','Numerical','Chronological','Ascending','Descending','Up','Down','Left','Right','Forward','Backward','North','South','East','West','Northeast','Northwest','Southeast','Southwest','Center','Middle','Top','Bottom','Front','Back','Side','Inside','Outside','Above','Below','Over','Under','Through','Across','Around','Between','Among','Within','Without','With','Against','Toward','Away','Near','Far','Close','Open','Closed','Locked','Unlocked','Secure','Insecure','Safe','Dangerous','Risky','Careful','Careless','Accurate','Inaccurate','Correct','Incorrect','Right','Wrong','True','False','Yes','No','Maybe','Perhaps','Possibly','Definitely','Certainly','Absolutely','Never','Always','Sometimes','Often','Rarely','Frequently','Occasionally','Regularly','Irregularly','Consistently','Inconsistently','Constantly','Temporarily','Permanently','Immediately','Eventually','Finally','Initially','Originally','Previously','Currently','Presently','Now','Then','Before','After','During','While','Since','Until','Till','From','To','For','By','With','Without','Within','Beyond','Past','Future','Present','Today','Yesterday','Tomorrow','Now','Later','Earlier','Soon','Late','Early','Quick','Slow','Fast','Rapid','Gradual','Sudden','Instant','Momentary','Brief','Long','Short','Tall','Small','Large','Big','Little','Huge','Tiny','Massive','Miniature','Giant','Dwarf','Wide','Narrow','Broad','Thin','Thick','Deep','Shallow','High','Low','Elevated','Depressed','Raised','Lowered','Uplifted','Downcast','Optimistic','Pessimistic','Positive','Negative','Good','Bad','Better','Worse','Best','Worst','Excellent','Poor','Great','Terrible','Wonderful','Awful','Amazing','Disappointing','Surprising','Expected','Unexpected','Normal','Abnormal','Regular','Irregular','Standard','Nonstandard','Typical','Atypical','Common','Uncommon','Rare','Frequent','Occasional','Constant','Variable','Fixed','Flexible','Rigid','Soft','Hard','Smooth','Rough','Sharp','Dull','Bright','Dark','Light','Heavy','Lightweight','Strong','Weak','Powerful','Powerless','Energetic','Lazy','Active','Passive','Dynamic','Static','Moving','Stationary','Mobile','Immobile','Portable','Fixed','Flexible','Rigid','Elastic','Plastic','Metal','Wooden','Glass','Paper','Fabric','Leather','Rubber','Plastic','Ceramic','Crystal','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Titanium','Carbon','Silicon','Oxygen','Hydrogen','Nitrogen','Helium','Neon','Argon','Krypton','Xenon','Radon','Uranium','Plutonium','Radium','Polonium','Astatine','Francium','Radon','Actinium','Thorium','Protactinium','Neptunium','Americium','Curium','Berkelium','Californium','Einsteinium','Fermium','Mendelevium','Nobelium','Lawrencium','Rutherfordium','Dubnium','Seaborgium','Bohrium','Hassium','Meitnerium','Darmstadtium','Roentgenium','Copernicium','Nihonium','Flerovium','Moscovium','Livermorium','Tennessine','Oganesson',]; let totalFixes = 0; let filesProcessed = 0; function findAllMissingImports(content,filePath) { const missingImports = []; allIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return [...new Set(missingImports)]} function fixAllMissingImports(content,filePath) { const missingImports = findAllMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixAllMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting comprehensive missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Comprehensive Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Comprehensive missing imports fix completed!`)} main().catch(console.error);




'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
main().catch(console.error);
main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const allIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle','Monitor','BarChart3','PieChart','Activity','TrendingDown','ArrowUp','ArrowDown','ArrowLeft','Calendar','Clock','MapPin','Mail','Phone','Globe','Wifi','Bluetooth','Camera','Video','Image','File','Folder','Archive','Bookmark','Tag','Filter','Sort','Grid','List','Layout','Maximize','Minimize','RotateCcw','RotateCw','RefreshCw','RefreshCcw','Play','Pause','Stop','SkipBack','SkipForward','Volume2','VolumeX','Mic','MicOff','Headphones','Speaker','Radio','Tv','Monitor','Laptop','Smartphone','Tablet','Watch','Gamepad2','Joystick','Mouse','Keyboard','Printer','Scanner','HardDrive','Cpu','MemoryStick','Wifi','Bluetooth','Nfc','QrCode','Barcode','CreditCard','Wallet','Banknote','Coins','PiggyBank','TrendingUp','TrendingDown','BarChart','LineChart','PieChart','Activity','Pulse','Heart','Zap','Battery','BatteryCharging','Power','Plug','Outlet','Lightbulb','Sun','Moon','Cloud','CloudRain','CloudSnow','CloudLightning','Wind','Thermometer','Droplets','Umbrella','TreePine','Tree','Flower','Leaf','Bug','Bird','Fish','Cat','Dog','Car','Truck','Bus','Train','Plane','Ship','Bike','Motorbike','Helicopter','Rocket','Map','MapPin','Navigation','Compass','Flag','Building','Building2','Home','Store','Factory','Warehouse','Hospital','School','University','Church','Mosque','Temple','Castle','Tower','Bridge','Road','Rail','Anchor','Sailboat','LifeBuoy','Umbrella','Shield','Sword','Axe','Hammer','Wrench','Screwdriver','Drill','Saw','Scissors','Knife','Fork','Spoon','Plate','Bowl','Cup','Glass','Bottle','Can','Box','Package','Gift','Party','Cake','Cookie','Coffee','Tea','Beer','Wine','Cocktail','Ice','Fire','Flame','Smoke','Water','Droplet','Waves','Snowflake','Sunrise','Sunset','Moon','Star','Planet','Satellite','Telescope','Microscope','Atom','Dna','Virus','Pill','Syringe','Stethoscope','Bandage','Cross','Heart','Lungs','Brain','Eye','Ear','Nose','Mouth','Tooth','Bone','Muscle','Foot','Hand','Finger','Thumb','Palm','Fist','Peace','Point','Wave','Clap','ThumbsUp','ThumbsDown','Ok','Victory','Rock','Paper','Scissors','Dice','Cards','Poker','Chess','Checkers','Puzzle','Rubik','Magic','Crystal','Gem','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Plastic','Wood','Stone','Brick','Concrete','Glass','Mirror','Lens','Telescope','Binoculars','Camera','Video','Film','Tv','Radio','Speaker','Headphones','Mic','Microphone','Amplifier','Equalizer','Volume','Mute','Play','Pause','Stop','Record','Skip','Rewind','FastForward','Repeat','Shuffle','Loop','Random','Sequential','Alphabetical','Numerical','Chronological','Ascending','Descending','Up','Down','Left','Right','Forward','Backward','North','South','East','West','Northeast','Northwest','Southeast','Southwest','Center','Middle','Top','Bottom','Front','Back','Side','Inside','Outside','Above','Below','Over','Under','Through','Across','Around','Between','Among','Within','Without','With','Against','Toward','Away','Near','Far','Close','Open','Closed','Locked','Unlocked','Secure','Insecure','Safe','Dangerous','Risky','Careful','Careless','Accurate','Inaccurate','Correct','Incorrect','Right','Wrong','True','False','Yes','No','Maybe','Perhaps','Possibly','Definitely','Certainly','Absolutely','Never','Always','Sometimes','Often','Rarely','Frequently','Occasionally','Regularly','Irregularly','Consistently','Inconsistently','Constantly','Temporarily','Permanently','Immediately','Eventually','Finally','Initially','Originally','Previously','Currently','Presently','Now','Then','Before','After','During','While','Since','Until','Till','From','To','For','By','With','Without','Within','Beyond','Past','Future','Present','Today','Yesterday','Tomorrow','Now','Later','Earlier','Soon','Late','Early','Quick','Slow','Fast','Rapid','Gradual','Sudden','Instant','Momentary','Brief','Long','Short','Tall','Small','Large','Big','Little','Huge','Tiny','Massive','Miniature','Giant','Dwarf','Wide','Narrow','Broad','Thin','Thick','Deep','Shallow','High','Low','Elevated','Depressed','Raised','Lowered','Uplifted','Downcast','Optimistic','Pessimistic','Positive','Negative','Good','Bad','Better','Worse','Best','Worst','Excellent','Poor','Great','Terrible','Wonderful','Awful','Amazing','Disappointing','Surprising','Expected','Unexpected','Normal','Abnormal','Regular','Irregular','Standard','Nonstandard','Typical','Atypical','Common','Uncommon','Rare','Frequent','Occasional','Constant','Variable','Fixed','Flexible','Rigid','Soft','Hard','Smooth','Rough','Sharp','Dull','Bright','Dark','Light','Heavy','Lightweight','Strong','Weak','Powerful','Powerless','Energetic','Lazy','Active','Passive','Dynamic','Static','Moving','Stationary','Mobile','Immobile','Portable','Fixed','Flexible','Rigid','Elastic','Plastic','Metal','Wooden','Glass','Paper','Fabric','Leather','Rubber','Plastic','Ceramic','Crystal','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Titanium','Carbon','Silicon','Oxygen','Hydrogen','Nitrogen','Helium','Neon','Argon','Krypton','Xenon','Radon','Uranium','Plutonium','Radium','Polonium','Astatine','Francium','Radon','Actinium','Thorium','Protactinium','Neptunium','Americium','Curium','Berkelium','Californium','Einsteinium','Fermium','Mendelevium','Nobelium','Lawrencium','Rutherfordium','Dubnium','Seaborgium','Bohrium','Hassium','Meitnerium','Darmstadtium','Roentgenium','Copernicium','Nihonium','Flerovium','Moscovium','Livermorium','Tennessine','Oganesson',]; let totalFixes = 0; let filesProcessed = 0; function findAllMissingImports(content,filePath) { const missingImports = []; allIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return [...new Set(missingImports)]} function fixAllMissingImports(content,filePath) { const missingImports = findAllMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: '0' }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: 'fixedContent',changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixAllMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting comprehensive missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Comprehensive Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Comprehensive missing imports fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const allIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle','Monitor','BarChart3','PieChart','Activity','TrendingDown','ArrowUp','ArrowDown','ArrowLeft','Calendar','Clock','MapPin','Mail','Phone','Globe','Wifi','Bluetooth','Camera','Video','Image','File','Folder','Archive','Bookmark','Tag','Filter','Sort','Grid','List','Layout','Maximize','Minimize','RotateCcw','RotateCw','RefreshCw','RefreshCcw','Play','Pause','Stop','SkipBack','SkipForward','Volume2','VolumeX','Mic','MicOff','Headphones','Speaker','Radio','Tv','Monitor','Laptop','Smartphone','Tablet','Watch','Gamepad2','Joystick','Mouse','Keyboard','Printer','Scanner','HardDrive','Cpu','MemoryStick','Wifi','Bluetooth','Nfc','QrCode','Barcode','CreditCard','Wallet','Banknote','Coins','PiggyBank','TrendingUp','TrendingDown','BarChart','LineChart','PieChart','Activity','Pulse','Heart','Zap','Battery','BatteryCharging','Power','Plug','Outlet','Lightbulb','Sun','Moon','Cloud','CloudRain','CloudSnow','CloudLightning','Wind','Thermometer','Droplets','Umbrella','TreePine','Tree','Flower','Leaf','Bug','Bird','Fish','Cat','Dog','Car','Truck','Bus','Train','Plane','Ship','Bike','Motorbike','Helicopter','Rocket','Map','MapPin','Navigation','Compass','Flag','Building','Building2','Home','Store','Factory','Warehouse','Hospital','School','University','Church','Mosque','Temple','Castle','Tower','Bridge','Road','Rail','Anchor','Sailboat','LifeBuoy','Umbrella','Shield','Sword','Axe','Hammer','Wrench','Screwdriver','Drill','Saw','Scissors','Knife','Fork','Spoon','Plate','Bowl','Cup','Glass','Bottle','Can','Box','Package','Gift','Party','Cake','Cookie','Coffee','Tea','Beer','Wine','Cocktail','Ice','Fire','Flame','Smoke','Water','Droplet','Waves','Snowflake','Sunrise','Sunset','Moon','Star','Planet','Satellite','Telescope','Microscope','Atom','Dna','Virus','Pill','Syringe','Stethoscope','Bandage','Cross','Heart','Lungs','Brain','Eye','Ear','Nose','Mouth','Tooth','Bone','Muscle','Foot','Hand','Finger','Thumb','Palm','Fist','Peace','Point','Wave','Clap','ThumbsUp','ThumbsDown','Ok','Victory','Rock','Paper','Scissors','Dice','Cards','Poker','Chess','Checkers','Puzzle','Rubik','Magic','Crystal','Gem','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Plastic','Wood','Stone','Brick','Concrete','Glass','Mirror','Lens','Telescope','Binoculars','Camera','Video','Film','Tv','Radio','Speaker','Headphones','Mic','Microphone','Amplifier','Equalizer','Volume','Mute','Play','Pause','Stop','Record','Skip','Rewind','FastForward','Repeat','Shuffle','Loop','Random','Sequential','Alphabetical','Numerical','Chronological','Ascending','Descending','Up','Down','Left','Right','Forward','Backward','North','South','East','West','Northeast','Northwest','Southeast','Southwest','Center','Middle','Top','Bottom','Front','Back','Side','Inside','Outside','Above','Below','Over','Under','Through','Across','Around','Between','Among','Within','Without','With','Against','Toward','Away','Near','Far','Close','Open','Closed','Locked','Unlocked','Secure','Insecure','Safe','Dangerous','Risky','Careful','Careless','Accurate','Inaccurate','Correct','Incorrect','Right','Wrong','True','False','Yes','No','Maybe','Perhaps','Possibly','Definitely','Certainly','Absolutely','Never','Always','Sometimes','Often','Rarely','Frequently','Occasionally','Regularly','Irregularly','Consistently','Inconsistently','Constantly','Temporarily','Permanently','Immediately','Eventually','Finally','Initially','Originally','Previously','Currently','Presently','Now','Then','Before','After','During','While','Since','Until','Till','From','To','For','By','With','Without','Within','Beyond','Past','Future','Present','Today','Yesterday','Tomorrow','Now','Later','Earlier','Soon','Late','Early','Quick','Slow','Fast','Rapid','Gradual','Sudden','Instant','Momentary','Brief','Long','Short','Tall','Small','Large','Big','Little','Huge','Tiny','Massive','Miniature','Giant','Dwarf','Wide','Narrow','Broad','Thin','Thick','Deep','Shallow','High','Low','Elevated','Depressed','Raised','Lowered','Uplifted','Downcast','Optimistic','Pessimistic','Positive','Negative','Good','Bad','Better','Worse','Best','Worst','Excellent','Poor','Great','Terrible','Wonderful','Awful','Amazing','Disappointing','Surprising','Expected','Unexpected','Normal','Abnormal','Regular','Irregular','Standard','Nonstandard','Typical','Atypical','Common','Uncommon','Rare','Frequent','Occasional','Constant','Variable','Fixed','Flexible','Rigid','Soft','Hard','Smooth','Rough','Sharp','Dull','Bright','Dark','Light','Heavy','Lightweight','Strong','Weak','Powerful','Powerless','Energetic','Lazy','Active','Passive','Dynamic','Static','Moving','Stationary','Mobile','Immobile','Portable','Fixed','Flexible','Rigid','Elastic','Plastic','Metal','Wooden','Glass','Paper','Fabric','Leather','Rubber','Plastic','Ceramic','Crystal','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Titanium','Carbon','Silicon','Oxygen','Hydrogen','Nitrogen','Helium','Neon','Argon','Krypton','Xenon','Radon','Uranium','Plutonium','Radium','Polonium','Astatine','Francium','Radon','Actinium','Thorium','Protactinium','Neptunium','Americium','Curium','Berkelium','Californium','Einsteinium','Fermium','Mendelevium','Nobelium','Lawrencium','Rutherfordium','Dubnium','Seaborgium','Bohrium','Hassium','Meitnerium','Darmstadtium','Roentgenium','Copernicium','Nihonium','Flerovium','Moscovium','Livermorium','Tennessine','Oganesson',]; let totalFixes = 0; let filesProcessed = 0; function findAllMissingImports(content,filePath) { const missingImports = []; allIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return [...new Set(missingImports)]} function fixAllMissingImports(content,filePath) { const missingImports = findAllMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixAllMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting comprehensive missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Comprehensive Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Comprehensive missing imports fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const allIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle','Monitor','BarChart3','PieChart','Activity','TrendingDown','ArrowUp','ArrowDown','ArrowLeft','Calendar','Clock','MapPin','Mail','Phone','Globe','Wifi','Bluetooth','Camera','Video','Image','File','Folder','Archive','Bookmark','Tag','Filter','Sort','Grid','List','Layout','Maximize','Minimize','RotateCcw','RotateCw','RefreshCw','RefreshCcw','Play','Pause','Stop','SkipBack','SkipForward','Volume2','VolumeX','Mic','MicOff','Headphones','Speaker','Radio','Tv','Monitor','Laptop','Smartphone','Tablet','Watch','Gamepad2','Joystick','Mouse','Keyboard','Printer','Scanner','HardDrive','Cpu','MemoryStick','Wifi','Bluetooth','Nfc','QrCode','Barcode','CreditCard','Wallet','Banknote','Coins','PiggyBank','TrendingUp','TrendingDown','BarChart','LineChart','PieChart','Activity','Pulse','Heart','Zap','Battery','BatteryCharging','Power','Plug','Outlet','Lightbulb','Sun','Moon','Cloud','CloudRain','CloudSnow','CloudLightning','Wind','Thermometer','Droplets','Umbrella','TreePine','Tree','Flower','Leaf','Bug','Bird','Fish','Cat','Dog','Car','Truck','Bus','Train','Plane','Ship','Bike','Motorbike','Helicopter','Rocket','Map','MapPin','Navigation','Compass','Flag','Building','Building2','Home','Store','Factory','Warehouse','Hospital','School','University','Church','Mosque','Temple','Castle','Tower','Bridge','Road','Rail','Anchor','Sailboat','LifeBuoy','Umbrella','Shield','Sword','Axe','Hammer','Wrench','Screwdriver','Drill','Saw','Scissors','Knife','Fork','Spoon','Plate','Bowl','Cup','Glass','Bottle','Can','Box','Package','Gift','Party','Cake','Cookie','Coffee','Tea','Beer','Wine','Cocktail','Ice','Fire','Flame','Smoke','Water','Droplet','Waves','Snowflake','Sunrise','Sunset','Moon','Star','Planet','Satellite','Telescope','Microscope','Atom','Dna','Virus','Pill','Syringe','Stethoscope','Bandage','Cross','Heart','Lungs','Brain','Eye','Ear','Nose','Mouth','Tooth','Bone','Muscle','Foot','Hand','Finger','Thumb','Palm','Fist','Peace','Point','Wave','Clap','ThumbsUp','ThumbsDown','Ok','Victory','Rock','Paper','Scissors','Dice','Cards','Poker','Chess','Checkers','Puzzle','Rubik','Magic','Crystal','Gem','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Plastic','Wood','Stone','Brick','Concrete','Glass','Mirror','Lens','Telescope','Binoculars','Camera','Video','Film','Tv','Radio','Speaker','Headphones','Mic','Microphone','Amplifier','Equalizer','Volume','Mute','Play','Pause','Stop','Record','Skip','Rewind','FastForward','Repeat','Shuffle','Loop','Random','Sequential','Alphabetical','Numerical','Chronological','Ascending','Descending','Up','Down','Left','Right','Forward','Backward','North','South','East','West','Northeast','Northwest','Southeast','Southwest','Center','Middle','Top','Bottom','Front','Back','Side','Inside','Outside','Above','Below','Over','Under','Through','Across','Around','Between','Among','Within','Without','With','Against','Toward','Away','Near','Far','Close','Open','Closed','Locked','Unlocked','Secure','Insecure','Safe','Dangerous','Risky','Careful','Careless','Accurate','Inaccurate','Correct','Incorrect','Right','Wrong','True','False','Yes','No','Maybe','Perhaps','Possibly','Definitely','Certainly','Absolutely','Never','Always','Sometimes','Often','Rarely','Frequently','Occasionally','Regularly','Irregularly','Consistently','Inconsistently','Constantly','Temporarily','Permanently','Immediately','Eventually','Finally','Initially','Originally','Previously','Currently','Presently','Now','Then','Before','After','During','While','Since','Until','Till','From','To','For','By','With','Without','Within','Beyond','Past','Future','Present','Today','Yesterday','Tomorrow','Now','Later','Earlier','Soon','Late','Early','Quick','Slow','Fast','Rapid','Gradual','Sudden','Instant','Momentary','Brief','Long','Short','Tall','Small','Large','Big','Little','Huge','Tiny','Massive','Miniature','Giant','Dwarf','Wide','Narrow','Broad','Thin','Thick','Deep','Shallow','High','Low','Elevated','Depressed','Raised','Lowered','Uplifted','Downcast','Optimistic','Pessimistic','Positive','Negative','Good','Bad','Better','Worse','Best','Worst','Excellent','Poor','Great','Terrible','Wonderful','Awful','Amazing','Disappointing','Surprising','Expected','Unexpected','Normal','Abnormal','Regular','Irregular','Standard','Nonstandard','Typical','Atypical','Common','Uncommon','Rare','Frequent','Occasional','Constant','Variable','Fixed','Flexible','Rigid','Soft','Hard','Smooth','Rough','Sharp','Dull','Bright','Dark','Light','Heavy','Lightweight','Strong','Weak','Powerful','Powerless','Energetic','Lazy','Active','Passive','Dynamic','Static','Moving','Stationary','Mobile','Immobile','Portable','Fixed','Flexible','Rigid','Elastic','Plastic','Metal','Wooden','Glass','Paper','Fabric','Leather','Rubber','Plastic','Ceramic','Crystal','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Titanium','Carbon','Silicon','Oxygen','Hydrogen','Nitrogen','Helium','Neon','Argon','Krypton','Xenon','Radon','Uranium','Plutonium','Radium','Polonium','Astatine','Francium','Radon','Actinium','Thorium','Protactinium','Neptunium','Americium','Curium','Berkelium','Californium','Einsteinium','Fermium','Mendelevium','Nobelium','Lawrencium','Rutherfordium','Dubnium','Seaborgium','Bohrium','Hassium','Meitnerium','Darmstadtium','Roentgenium','Copernicium','Nihonium','Flerovium','Moscovium','Livermorium','Tennessine','Oganesson',]; let totalFixes = 0; let filesProcessed = 0; function findAllMissingImports(content,filePath) { const missingImports = []; allIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return [...new Set(missingImports)]} function fixAllMissingImports(content,filePath) { const missingImports = findAllMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: '0' }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: 'fixedContent',changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixAllMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting comprehensive missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Comprehensive Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Comprehensive missing imports fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const allIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle','Monitor','BarChart3','PieChart','Activity','TrendingDown','ArrowUp','ArrowDown','ArrowLeft','Calendar','Clock','MapPin','Mail','Phone','Globe','Wifi','Bluetooth','Camera','Video','Image','File','Folder','Archive','Bookmark','Tag','Filter','Sort','Grid','List','Layout','Maximize','Minimize','RotateCcw','RotateCw','RefreshCw','RefreshCcw','Play','Pause','Stop','SkipBack','SkipForward','Volume2','VolumeX','Mic','MicOff','Headphones','Speaker','Radio','Tv','Monitor','Laptop','Smartphone','Tablet','Watch','Gamepad2','Joystick','Mouse','Keyboard','Printer','Scanner','HardDrive','Cpu','MemoryStick','Wifi','Bluetooth','Nfc','QrCode','Barcode','CreditCard','Wallet','Banknote','Coins','PiggyBank','TrendingUp','TrendingDown','BarChart','LineChart','PieChart','Activity','Pulse','Heart','Zap','Battery','BatteryCharging','Power','Plug','Outlet','Lightbulb','Sun','Moon','Cloud','CloudRain','CloudSnow','CloudLightning','Wind','Thermometer','Droplets','Umbrella','TreePine','Tree','Flower','Leaf','Bug','Bird','Fish','Cat','Dog','Car','Truck','Bus','Train','Plane','Ship','Bike','Motorbike','Helicopter','Rocket','Map','MapPin','Navigation','Compass','Flag','Building','Building2','Home','Store','Factory','Warehouse','Hospital','School','University','Church','Mosque','Temple','Castle','Tower','Bridge','Road','Rail','Anchor','Sailboat','LifeBuoy','Umbrella','Shield','Sword','Axe','Hammer','Wrench','Screwdriver','Drill','Saw','Scissors','Knife','Fork','Spoon','Plate','Bowl','Cup','Glass','Bottle','Can','Box','Package','Gift','Party','Cake','Cookie','Coffee','Tea','Beer','Wine','Cocktail','Ice','Fire','Flame','Smoke','Water','Droplet','Waves','Snowflake','Sunrise','Sunset','Moon','Star','Planet','Satellite','Telescope','Microscope','Atom','Dna','Virus','Pill','Syringe','Stethoscope','Bandage','Cross','Heart','Lungs','Brain','Eye','Ear','Nose','Mouth','Tooth','Bone','Muscle','Foot','Hand','Finger','Thumb','Palm','Fist','Peace','Point','Wave','Clap','ThumbsUp','ThumbsDown','Ok','Victory','Rock','Paper','Scissors','Dice','Cards','Poker','Chess','Checkers','Puzzle','Rubik','Magic','Crystal','Gem','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Plastic','Wood','Stone','Brick','Concrete','Glass','Mirror','Lens','Telescope','Binoculars','Camera','Video','Film','Tv','Radio','Speaker','Headphones','Mic','Microphone','Amplifier','Equalizer','Volume','Mute','Play','Pause','Stop','Record','Skip','Rewind','FastForward','Repeat','Shuffle','Loop','Random','Sequential','Alphabetical','Numerical','Chronological','Ascending','Descending','Up','Down','Left','Right','Forward','Backward','North','South','East','West','Northeast','Northwest','Southeast','Southwest','Center','Middle','Top','Bottom','Front','Back','Side','Inside','Outside','Above','Below','Over','Under','Through','Across','Around','Between','Among','Within','Without','With','Against','Toward','Away','Near','Far','Close','Open','Closed','Locked','Unlocked','Secure','Insecure','Safe','Dangerous','Risky','Careful','Careless','Accurate','Inaccurate','Correct','Incorrect','Right','Wrong','True','False','Yes','No','Maybe','Perhaps','Possibly','Definitely','Certainly','Absolutely','Never','Always','Sometimes','Often','Rarely','Frequently','Occasionally','Regularly','Irregularly','Consistently','Inconsistently','Constantly','Temporarily','Permanently','Immediately','Eventually','Finally','Initially','Originally','Previously','Currently','Presently','Now','Then','Before','After','During','While','Since','Until','Till','From','To','For','By','With','Without','Within','Beyond','Past','Future','Present','Today','Yesterday','Tomorrow','Now','Later','Earlier','Soon','Late','Early','Quick','Slow','Fast','Rapid','Gradual','Sudden','Instant','Momentary','Brief','Long','Short','Tall','Small','Large','Big','Little','Huge','Tiny','Massive','Miniature','Giant','Dwarf','Wide','Narrow','Broad','Thin','Thick','Deep','Shallow','High','Low','Elevated','Depressed','Raised','Lowered','Uplifted','Downcast','Optimistic','Pessimistic','Positive','Negative','Good','Bad','Better','Worse','Best','Worst','Excellent','Poor','Great','Terrible','Wonderful','Awful','Amazing','Disappointing','Surprising','Expected','Unexpected','Normal','Abnormal','Regular','Irregular','Standard','Nonstandard','Typical','Atypical','Common','Uncommon','Rare','Frequent','Occasional','Constant','Variable','Fixed','Flexible','Rigid','Soft','Hard','Smooth','Rough','Sharp','Dull','Bright','Dark','Light','Heavy','Lightweight','Strong','Weak','Powerful','Powerless','Energetic','Lazy','Active','Passive','Dynamic','Static','Moving','Stationary','Mobile','Immobile','Portable','Fixed','Flexible','Rigid','Elastic','Plastic','Metal','Wooden','Glass','Paper','Fabric','Leather','Rubber','Plastic','Ceramic','Crystal','Diamond','Gold','Silver','Bronze','Copper','Iron','Steel','Aluminum','Titanium','Carbon','Silicon','Oxygen','Hydrogen','Nitrogen','Helium','Neon','Argon','Krypton','Xenon','Radon','Uranium','Plutonium','Radium','Polonium','Astatine','Francium','Radon','Actinium','Thorium','Protactinium','Neptunium','Americium','Curium','Berkelium','Californium','Einsteinium','Fermium','Mendelevium','Nobelium','Lawrencium','Rutherfordium','Dubnium','Seaborgium','Bohrium','Hassium','Meitnerium','Darmstadtium','Roentgenium','Copernicium','Nihonium','Flerovium','Moscovium','Livermorium','Tennessine','Oganesson',]; let totalFixes = 0; let filesProcessed = 0; function findAllMissingImports(content,filePath) { const missingImports = []; allIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return [...new Set(missingImports)]} function fixAllMissingImports(content,filePath) { const missingImports = findAllMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixAllMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting comprehensive missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Comprehensive Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Comprehensive missing imports fix completed!`)} main().catch(console.error);
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
main().catch(console.error);`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
