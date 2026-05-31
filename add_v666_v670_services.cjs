const fs = require('fs');
const path = require('path');

// Read existing services
const servicesPath = path.join(__dirname, 'app', 'data', 'servicesData.json');
const services = JSON.parse(fs.readFileSync(servicesPath, 'utf8'));
console.log(`Current service count: ${services.length}`);

// Read new services
const newServicesPath = path.join(__dirname, 'v666-v670-services.json');
const newData = JSON.parse(fs.readFileSync(newServicesPath, 'utf8'));
const newServices = newData.newServices;
console.log(`Adding ${newServices.length} new services`);

// Transform new services to match existing format
const transformedServices = newServices.map(s => ({
  id: s.id,
  title: s.name,
  description: s.description,
  longDescription: `${s.description}. Part of the ${s.engine} Email Intelligence suite. Features include: ${s.features.join(', ')}.`,
  category: s.category,
  price: `$${s.price}/mo`,
  features: s.features,
  icon: s.icon,
  color: s.color,
  badge: s.engine,
  popular: ['emotional-intelligence-coaching', 'meeting-scheduler-ai', 'vendor-relationship-manager', 'innovation-idea-tracker', 'document-version-tracker'].includes(s.id),
  tags: [s.category.toLowerCase(), s.engine.toLowerCase(), 'email-intelligence']
}));

// Add to services
services.push(...transformedServices);

// Write back
fs.writeFileSync(servicesPath, JSON.stringify(services, null, 2));
console.log(`New total: ${services.length} services`);
