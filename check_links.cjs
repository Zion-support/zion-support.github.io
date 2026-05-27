const fs = require('fs');
const path = require('path');

// Load the generated service index
const indexPath = path.join(__dirname, 'out', 'service-index.json');
const index = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
const serviceIds = new Set(index.services.map(s => s.id));

// Broken links from broken-links.json
const brokenLinksPath = path.join(__dirname, 'broken-links.json');
const brokenLinks = JSON.parse(fs.readFileSync(brokenLinksPath, 'utf8'));

console.log(`Total services in index: ${index.services.length}`);
console.log(`Checking ${brokenLinks.length} broken links:`);

brokenLinks.forEach(({file, link}) => {
  // The link is like "services/it-endpoint-security-compliance"
  // We need to extract the id part after "services/"
  const id = link.replace(/^services\//, '');
  if (serviceIds.has(id)) {
    console.log(`✓ ${file}: link '${link}' -> ID '${id}' exists`);
  } else {
    console.log(`✗ ${file}: link '${link}' -> ID '${id}' NOT FOUND`);
    // Suggest similar IDs
    const similar = Array.from(serviceIds).filter(sid => sid.includes(id.split('-')[0]) || id.includes(sid.split('-')[0])).slice(0,5);
    if (similar.length) {
      console.log(`  Similar IDs: ${similar.join(', ')}`);
    }
  }
});