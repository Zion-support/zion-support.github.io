const fs = require('fs');
const path = require('path');

// List of files to remove (corrupted files)
const filesToRemove = [
  'app/contact/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/data-center/page.tsx',
  'app/database-services/page.tsx',
  'app/database/page.tsx',
  'app/devops/page.tsx',
  'app/enterprise-security/page.tsx',
  'app/enterprise/page.tsx',
  'app/gdpr/page.tsx',
  'app/investors/page.tsx',
  'app/iot-edge-computing/page.tsx',
  'app/it-consulting/page.tsx',
  'app/main.tsx',
  'app/micro-saas-services/microSaasServices.tsx',
  'app/micro-saas-services/services.tsx',
  'app/news/page.tsx',
  'app/not-found.tsx',
  'app/pricing/page.tsx',
  'app/robotics/page.tsx',
  'app/services-advertising/page.tsx',
  'app/smart-city-infrastructure/page.tsx',
  'app/status/page.tsx',
  'app/support/page.tsx',
  'app/system-status/page.tsx',
  'app/task-manager-pro/page.tsx',
  'app/training/page.tsx'
];

// Remove corrupted files
let removedCount = 0;
for (const file of filesToRemove) {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    console.log(`Removed: ${file}`);
    removedCount++;
  }
}

console.log(`Removed ${removedCount} corrupted files`);

// Create simple placeholder pages
const createPlaceholderPage = (filePath, title) => {
  const content = `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ${title.replace(/\s+/g, '')}Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${title} services by Zion Tech Group" />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">${title}</h1>
        <p className="text-gray-300 mb-8">This page is under construction.</p>
        <a 
          href="/" 
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}`;

  // Ensure directory exists
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, content);
  console.log(`Created: ${filePath}`);
};

// Create placeholder pages
const placeholders = [
  { path: 'app/contact/page.tsx', title: 'Contact' },
  { path: 'app/cybersecurity/page.tsx', title: 'Cybersecurity' },
  { path: 'app/data-center/page.tsx', title: 'Data Center' },
  { path: 'app/database-services/page.tsx', title: 'Database Services' },
  { path: 'app/database/page.tsx', title: 'Database' },
  { path: 'app/devops/page.tsx', title: 'DevOps' },
  { path: 'app/enterprise-security/page.tsx', title: 'Enterprise Security' },
  { path: 'app/enterprise/page.tsx', title: 'Enterprise' },
  { path: 'app/gdpr/page.tsx', title: 'GDPR' },
  { path: 'app/investors/page.tsx', title: 'Investors' },
  { path: 'app/iot-edge-computing/page.tsx', title: 'IoT Edge Computing' },
  { path: 'app/it-consulting/page.tsx', title: 'IT Consulting' },
  { path: 'app/news/page.tsx', title: 'News' },
  { path: 'app/not-found.tsx', title: 'Not Found' },
  { path: 'app/pricing/page.tsx', title: 'Pricing' },
  { path: 'app/robotics/page.tsx', title: 'Robotics' },
  { path: 'app/services-advertising/page.tsx', title: 'Services Advertising' },
  { path: 'app/smart-city-infrastructure/page.tsx', title: 'Smart City Infrastructure' },
  { path: 'app/status/page.tsx', title: 'Status' },
  { path: 'app/support/page.tsx', title: 'Support' },
  { path: 'app/system-status/page.tsx', title: 'System Status' },
  { path: 'app/task-manager-pro/page.tsx', title: 'Task Manager Pro' },
  { path: 'app/training/page.tsx', title: 'Training' }
];

for (const placeholder of placeholders) {
  createPlaceholderPage(placeholder.path, placeholder.title);
}

console.log('Cleanup completed!');