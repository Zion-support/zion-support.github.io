const fs = require('fs');
const services = JSON.parse(fs.readFileSync('app/data/servicesData.json', 'utf8'));
let ts = fs.readFileSync('app/data/servicesData.ts', 'utf8');
const hasCRLF = ts.includes('\r\n');
ts = ts.replace(/\r\n/g, '\n');

// Get the last 20 services (newly added)
const newServices = services.slice(-20);

// Generate TS entries
const newEntries = newServices.map(s => {
  const features = (s.features || []).map(f => `'${f.replace(/'/g, "\\'")}'`).join(', ');
  const pricing = s.pricing || {};
  const contact = s.contactInfo || {};
  
  return `  {
    id: '${s.id}',
    title: '${s.title.replace(/'/g, "\\'")}',
    description: '${s.description.replace(/'/g, "\\'")}',
    icon: '${s.icon || '⚡'}',
    category: '${s.category || 'ai'}',
    features: [${features}],
    pricing: {
      basic: '${pricing.basic || '99'}',
      pro: '${pricing.pro || '299'}',
      enterprise: '${pricing.enterprise || '999'}'
    },
    href: '${s.href || `/services/${s.id}`}',
    popular: ${s.popular || false},
    industry: '${s.industry || 'General'}'
  }`;
}).join(',\n');

// Find the end of the services array
const insertPoint = ts.lastIndexOf('];');
if (insertPoint === -1) {
  console.error('Could not find insertion point');
  process.exit(1);
}

// Insert new entries
const newContent = ts.slice(0, insertPoint) + ',\n' + newEntries + '\n' + ts.slice(insertPoint);

fs.writeFileSync('app/data/servicesData.ts', hasCRLF ? newContent.replace(/\n/g, '\r\n') : newContent);
console.log('Added', newServices.length, 'services to TypeScript file');
