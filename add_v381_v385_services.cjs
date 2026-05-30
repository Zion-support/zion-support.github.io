const fs = require('fs');
const newData = JSON.parse(fs.readFileSync('new_services_v381_v385.json', 'utf-8'));
const newServices = newData.services || newData;
const tsPath = 'app/data/servicesData.ts';
let tsContent = fs.readFileSync(tsPath, 'utf-8');

// Generate service entries
const serviceEntries = newServices.map(s => {
  const features = (s.features || []).map(f => `      "${f.replace(/"/g, '\\"')}"`).join(',\n');
  const pricing = s.pricing || {};
  return `  {
    id: "${s.id}",
    title: "${s.name.replace(/"/g, '\\"')}",
    description: "${s.description.replace(/"/g, '\\"')}",
    icon: "${s.category === 'ai' ? '🧠' : s.category === 'it' ? '🖥️' : s.category === 'security' ? '🔐' : s.category === 'micro-saas' ? '🚀' : s.category === 'cloud' ? '☁️' : '📊'}",
    features: [\n${features}\n    ],
    benefits: [],
    pricing: {
      basic: "${pricing.basic || 'Contact'}",
      pro: "${pricing.pro || 'Contact'}",
      enterprise: "${pricing.enterprise || 'Contact'}"
    },
    contactInfo: {
      website: "/services/${s.id}",
      email: "kleber@ziontechgroup.com",
      phone: "+1 302 464 0950"
    },
    href: "/services/${s.id}",
    category: "${s.category}",
    popular: true,
    industry: "Cross-Industry"
  }`;
}).join(',\n');

// Find allServices array and insert before closing bracket
const allServicesMatch = tsContent.match(/export const allServices: Service\[\] = \[([\s\S]*?)\n\];/);
if (allServicesMatch) {
  const insertPoint = tsContent.lastIndexOf('];', tsContent.indexOf(allServicesMatch[0]) + allServicesMatch[0].length);
  tsContent = tsContent.substring(0, insertPoint) + ',\n' + serviceEntries + '\n' + tsContent.substring(insertPoint);
}

// Generate exports
const exportLines = newServices.map(s => {
  const varName = s.id.replace(/-/g, '_');
  return `export const ${varName} = allServices.find(s => s.id === "${s.id}");`;
}).join('\n');

tsContent += '\n// V381-V385 Service Exports\n' + exportLines + '\n';

fs.writeFileSync(tsPath, tsContent);
console.log(`Added ${newServices.length} services to servicesData.ts`);
