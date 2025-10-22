import fs from 'fs';

const files = [
  'app/services/page.tsx',
  'app/solutions/page.tsx', 
  'app/expense-tracker-pro/page.tsx',
  'app/social-media-scheduler/page.tsx',
  'app/task-manager-pro/page.tsx',
  'app/it-solutions/page.tsx',
  'app/components/PerformanceMonitor.tsx',
  'app/cybersecurity/page.tsx'
];

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [a-f0-9]+\n/g, '$1');
    content = content.replace(/<<<<<<< HEAD\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> [a-f0-9]+\n/g, '');
    fs.writeFileSync(file, content);
    console.log('Fixed:', file);
  } catch (e) {
    console.log('Error with', file, ':', e.message);
  }
});