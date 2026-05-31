const fs = require('fs');
const path = require('path');

const servicesPath = path.join(__dirname, 'app/data/servicesData.json');
const newServicesPath = path.join(__dirname, 'v526_v530_new_services.json');

const servicesData = JSON.parse(fs.readFileSync(servicesPath, 'utf8'));
const newServicesData = JSON.parse(fs.readFileSync(newServicesPath, 'utf8'));

let added = 0;
newServicesData.new_services.forEach(service => {
  if (!servicesData.find(s => s.id === service.id)) {
    servicesData.push(service);
    added++;
  }
});

fs.writeFileSync(servicesPath, JSON.stringify(servicesData, null, 2));
console.log(`✅ Added ${added} new services. Total: ${servicesData.length} services`);
