// scripts/generate_spotlight_feed.cjs
// Generates data/service-spotlight.json — top 12 popular services for carousel
const fs = require('fs');
const path = require('path');
const outDir = path.join(process.cwd(), 'out');
const svcPath = path.join(outDir, 'data', 'services.json');
const dest = path.join(outDir, 'data', 'service-spotlight.json');

try {
  const raw = JSON.parse(fs.readFileSync(svcPath, 'utf8'));
  const services = raw.services || [];
  // Prioritize popular=true, then title alpha
  const featured = [...services]
    .filter(s => s.popular)
    .sort((a,b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0) || a.title.localeCompare(b.title))
    .slice(0, 12);
  if (featured.length < 12) {
    const rest = services.filter(s => !s.popular).sort((a,b) => a.title.localeCompare(b.title));
    while (featured.length < 12 && rest.length) featured.push(rest.shift());
  }
  fs.writeFileSync(dest, JSON.stringify({ generated: new Date().toISOString(), featured }, null, 2));
  console.log(`service-spotlight.json: ${featured.length} featured`);
} catch(e) {
  console.log('⚠️ spotlight feed failed:', e.message);
}
