const fs = require('fs');
const newServices = JSON.parse(fs.readFileSync('new_services_v366_v370.json', 'utf-8'));
const tsPath = 'app/data/servicesData.ts';
let tsContent = fs.readFileSync(tsPath, 'utf-8');

const newServiceLiterals = newServices.map(s => {
  const features = (s.features || []).map(f => `      "${f}"`).join(',\n');
  const pricing = s.pricing || {};
  return `  {
    id: "${s.id}",
    title: "${s.name}",
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

// Find allServices array end
const allServicesEnd = tsContent.lastIndexOf('];\n');
if (allServicesEnd > 0) {
  tsContent = tsContent.substring(0, allServicesEnd) + ',\n' + newServiceLiterals + '\n' + tsContent.substring(allServicesEnd);
}

// Add named exports
const exportLines = newServices.map(s => {
  const varName = s.id.replace(/-/g, '_');
  return `export const ${varName} = allServices.find(s => s.id === "${s.id}");`;
}).join('\n');

tsContent += '\n// V366-V370 Service Exports\n' + exportLines + '\n';
fs.writeFileSync(tsPath, tsContent);
console.log(`Added ${newServices.length} services + exports to servicesData.ts`);
