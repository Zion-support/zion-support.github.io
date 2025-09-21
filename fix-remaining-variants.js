const fs = require('fs');

// Get all TypeScript files in the current directory
const files = fs.readdirSync('.')
  .filter(file => file.endsWith('.ts') && !file.includes('node_modules'))
  .filter(file => !file.includes('types.ts') && !file.includes('service-variants.ts'));

console.log(`Found ${files.length} TypeScript files to process`);

let totalReplacements = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let fileReplacements = 0;
  
  // Find all variant: 'something' patterns and replace invalid ones
  const variantRegex = /variant:\s*'([^']+)'/g;
  const matches = [...content.matchAll(variantRegex)];
  
  matches.forEach(match => {
    const variant = match[1];
    // If it's not a valid variant (doesn't match common patterns), replace it
    if (!variant.match(/^(ai-futuristic|it-infrastructure|cybersecurity|cloud-native|micro-saas|micro-saas-futuristic|enterprise|startup|blockchain|iot|quantum|ai-automation|fintech|healthcare|agriculture|space-tech|emerging-tech|autonomous-systems|robotics|biotech|metaverse|web3|edge-computing|digital-banking|research-development|practical-business|innovative|cutting-edge|futuristic|revolutionary|advanced|specialized-industry|comprehensive|real-market|market-validated|enterprise-futuristic|ai-innovation|it-cybersecurity|cybersecurity-blockchain|ai-autonomous|quantum-space|space-colonization|space-metaverse|healthcare-biotech|fintech-blockchain|iot-edge|advanced-micro-saas|innovative-micro-saas|cutting-edge-micro-saas|ultimate-futuristic|comprehensive-real|targeted-merge|build-fixes|comprehensive-improvements|comprehensive-expansion|comprehensive-services|comprehensive-pricing|comprehensive-analysis|comprehensive-infrastructure|comprehensive-automation|comprehensive-breakthrough|comprehensive-solutions|comprehensive-innovations|comprehensive-technologies|comprehensive-platforms|comprehensive-systems|comprehensive-tools|comprehensive-applications|comprehensive-frameworks|comprehensive-libraries|comprehensive-modules|comprehensive-components|comprehensive-features|comprehensive-capabilities|comprehensive-functionalities|comprehensive-products)$/)) {
      content = content.replace(`variant: '${variant}'`, `variant: 'ai-futuristic'`);
      fileReplacements++;
      console.log(`  ${file}: Replaced '${variant}' with 'ai-futuristic'`);
    }
  });
  
  if (fileReplacements > 0) {
    fs.writeFileSync(file, content);
    totalReplacements += fileReplacements;
  }
});

console.log(`\nTotal replacements made: ${totalReplacements}`);