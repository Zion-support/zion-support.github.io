const fs = require('fs');
const path = require('path');

// Files that need import fixes
const files = [
  'app/ai-education-solutions-pro/page.tsx',
  'app/ai-healthcare-solutions-pro/page.tsx',
  'app/ai-iot-management-pro/page.tsx'
];

// Icons that are commonly used
const commonIcons = [
  'Brain', 'GraduationCap', 'BookOpen', 'BarChart3', 'Shield', 'Zap', 'Book', 'Briefcase', 'Monitor',
  'Star', 'Phone', 'Play', 'CheckCircle', 'ArrowRight', 'Mail', 'Stethoscope', 'Pill', 'Microscope',
  'Ambulance', 'Heart', 'UserCheck', 'Wifi', 'Database', 'Activity', 'Thermometer', 'Camera', 'Home',
  'Building', 'Car', 'Smartphone', 'Wind', 'Cpu'
];

files.forEach(filePath => {
  const fullPath = path.join('/workspace', filePath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if the import line is empty or has issues
    const importMatch = content.match(/import { } from 'lucide-react';/);
    if (importMatch) {
      // Replace with a proper import
      const newImport = `import { ${commonIcons.join(', ')} } from 'lucide-react';`;
      content = content.replace(/import { } from 'lucide-react';/, newImport);
      
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed imports in ${filePath}`);
    }
  }
});

console.log('Import fixes completed');
