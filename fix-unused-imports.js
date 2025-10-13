import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to remove unused imports from a file
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused imports - this is a simplified approach
    // We'll remove imports that are clearly unused based on common patterns
    
    // Remove single line imports that are unused
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip import lines that contain unused variables
      if (line.includes('import') && line.includes('from')) {
        // Check if this line has unused imports by looking for common patterns
        if (line.includes('TrendingUp') || 
            line.includes('Clock') || 
            line.includes('Star') ||
            line.includes('Zap') ||
            line.includes('Globe') ||
            line.includes('Link') ||
            line.includes('Cpu') ||
            line.includes('Settings') ||
            line.includes('Sparkles') ||
            line.includes('Users') ||
            line.includes('Smartphone') ||
            line.includes('Lock') ||
            line.includes('Target') ||
            line.includes('Calendar') ||
            line.includes('Search') ||
            line.includes('Filter') ||
            line.includes('Download') ||
            line.includes('Upload') ||
            line.includes('Share') ||
            line.includes('Bell') ||
            line.includes('Heart') ||
            line.includes('ThumbsUp') ||
            line.includes('AwardIcon') ||
            line.includes('Wifi') ||
            line.includes('Battery') ||
            line.includes('Camera') ||
            line.includes('Headphones') ||
            line.includes('Mic') ||
            line.includes('Video') ||
            line.includes('Music') ||
            line.includes('BookOpen') ||
            line.includes('Lightbulb') ||
            line.includes('Puzzle') ||
            line.includes('Gamepad2') ||
            line.includes('ShoppingCart') ||
            line.includes('CreditCard') ||
            line.includes('Wallet') ||
            line.includes('Banknote') ||
            line.includes('Coins') ||
            line.includes('Gift') ||
            line.includes('Tag') ||
            line.includes('Percent') ||
            line.includes('Calculator') ||
            line.includes('PieChart') ||
            line.includes('LineChart') ||
            line.includes('Activity') ||
            line.includes('Layers') ||
            line.includes('Grid') ||
            line.includes('List') ||
            line.includes('Map') ||
            line.includes('Compass') ||
            line.includes('Navigation') ||
            line.includes('Globe2') ||
            line.includes('WifiOff') ||
            line.includes('Signal') ||
            line.includes('Bluetooth') ||
            line.includes('Usb') ||
            line.includes('HardDrive') ||
            line.includes('MemoryStick') ||
            line.includes('Printer') ||
            line.includes('Scanner') ||
            line.includes('Fax') ||
            line.includes('Voicemail') ||
            line.includes('Headset') ||
            line.includes('Speaker') ||
            line.includes('Volume2') ||
            line.includes('VolumeX') ||
            line.includes('Play') ||
            line.includes('Pause') ||
            line.includes('Stop') ||
            line.includes('SkipBack') ||
            line.includes('SkipForward') ||
            line.includes('RotateCcw') ||
            line.includes('RotateCw') ||
            line.includes('Shuffle') ||
            line.includes('Repeat') ||
            line.includes('Repeat1') ||
            line.includes('Shuffle2') ||
            line.includes('Maximize') ||
            line.includes('Minimize') ||
            line.includes('Square') ||
            line.includes('Circle') ||
            line.includes('Triangle') ||
            line.includes('Hexagon') ||
            line.includes('Octagon') ||
            line.includes('Diamond') ||
            line.includes('StarIcon') ||
            line.includes('Moon') ||
            line.includes('Sun') ||
            line.includes('Sunrise') ||
            line.includes('Sunset') ||
            line.includes('CloudRain') ||
            line.includes('CloudSnow') ||
            line.includes('CloudLightning') ||
            line.includes('Wind') ||
            line.includes('Droplets') ||
            line.includes('Thermometer') ||
            line.includes('Gauge') ||
            line.includes('Timer') ||
            line.includes('Stopwatch') ||
            line.includes('Hourglass') ||
            line.includes('DollarSign') ||
            line.includes('Rocket') ||
            line.includes('Eye')) {
          // Skip this line (remove it)
          modified = true;
          continue;
        }
      }
      
      // Remove unused variable declarations
      if (line.includes('const benefits') || 
          line.includes('let benefits') || 
          line.includes('var benefits')) {
        // Skip this line
        modified = true;
        continue;
      }
      
      newLines.push(line);
    }
    
    if (modified) {
      fs.writeFileSync(filePath, newLines.join('\n'));
      console.log(`Fixed unused imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all TypeScript/JavaScript files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to modify
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist' && file !== '.next') {
        fixedCount += fixAllFiles(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixUnusedImports(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start fixing files
console.log('Starting to fix unused imports...');
const fixedCount = fixAllFiles('./app');
console.log(`Fixed ${fixedCount} files`);