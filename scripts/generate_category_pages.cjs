// scripts/generate_category_pages.cjs
// Generates static HTML for all 10 category pages into out/
const fs = require('fs');
const path = require('path');

const categories = [
  { slug: 'micro-saas', label: 'Micro-SaaS', category: 'micro-saas', icon: '🚀', gradient: 'from-amber-500 to-orange-500', desc: 'Innovative small-scale SaaS solutions for agile businesses' },
  { slug: 'it-services', label: 'IT Services', category: 'it', icon: '🖥️', gradient: 'from-blue-500 to-cyan-500', desc: 'Enterprise IT infrastructure, managed services, and technology solutions' },
  { slug: 'security-services', label: 'Security Services', category: 'security', icon: '🔐', gradient: 'from-red-500 to-orange-500', desc: 'Comprehensive cybersecurity, compliance, and threat protection solutions' },
  { slug: 'cloud-services', label: 'Cloud Services', category: 'cloud', icon: '☁️', gradient: 'from-sky-400 to-blue-600', desc: 'Scalable cloud infrastructure, migration, and managed platforms' },
  { slug: 'data-services', label: 'Data Services', category: 'data', icon: '📊', gradient: 'from-green-500 to-emerald-500', desc: 'Data analytics, warehousing, and business intelligence platforms' },
  { slug: 'automation', label: 'Automation', category: 'automation', icon: '🤖', gradient: 'from-pink-500 to-rose-500', desc: 'Workflow automation, process optimization, and intelligent orchestration' },
  { slug: 'devops', label: 'DevOps & Platform', category: 'devops', icon: '⚙️', gradient: 'from-cyan-500 to-blue-500', desc: 'CI/CD pipelines, infrastructure as code, and platform engineering' },
  { slug: 'blockchain', label: 'Blockchain & Web3', category: 'blockchain', icon: '⛓️', gradient: 'from-yellow-500 to-amber-600', desc: 'Smart contracts, DeFi, NFTs, and decentralized applications' },
  { slug: 'iot', label: 'IoT & Edge', category: 'iot', icon: '📡', gradient: 'from-teal-500 to-green-500', desc: 'Internet of Things platforms, edge computing, and connected device solutions' },
  { slug: 'email-intelligence', label: 'Email Intelligence', category: 'email-intelligence', icon: '📧', gradient: 'from-violet-500 to-purple-600', desc: 'AI-powered email intelligence engines (V199-V380)' },
];

// Load services data
const servicesPath = path.join(__dirname, '..', 'app', 'data', 'servicesData.json');
let services = [];
try {
  services = JSON.parse(fs.readFileSync(servicesPath, 'utf-8'));
} catch (e) {
  console.log('Could not load servicesData.json, using empty array');
}

function generateCategoryPage(cat) {
  const catServices = services.filter(s => s.category === cat.category);
  const serviceCards = catServices.slice(0, 60).map(s => `
    <a href="${s.href || '/services/' + s.id}" class="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20">
      <div class="text-4xl mb-3">${s.icon || '🔧'}</div>
      <h3 class="text-xl font-bold text-white mb-2">${s.title}</h3>
      <p class="text-slate-400 text-sm mb-4" style="display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden">${s.description}</p>
      <div class="flex items-center justify-between">
        <span class="text-purple-400 text-sm font-semibold">Learn More →</span>
        ${s.popular ? '<span class="text-xs bg-purple-600 text-white px-2 py-1 rounded">Popular</span>' : ''}
      </div>
    </a>`).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>${cat.label} Solutions | Zion Tech Group</title>
  <meta name="description" content="${cat.desc}. Explore ${catServices.length}+ professional ${cat.label.toLowerCase()} solutions from Zion Tech Group."/>
  <link rel="canonical" href="https://ziontechgroup.com/${cat.slug}/"/>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-slate-950">
  <div class="max-w-7xl mx-auto px-4 py-20">
    <nav class="mb-8 text-sm text-slate-400">
      <a href="/" class="hover:text-purple-400 transition">Home</a>
      <span class="mx-2">/</span>
      <a href="/services/" class="hover:text-purple-400 transition">Services</a>
      <span class="mx-2">/</span>
      <span class="text-purple-400">${cat.label}</span>
    </nav>
    <div class="text-center mb-12">
      <div class="text-6xl mb-4">${cat.icon}</div>
      <h1 class="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${cat.gradient} mb-4">${cat.label} Solutions</h1>
      <p class="text-xl text-slate-300 max-w-3xl mx-auto">${cat.desc}. Explore ${catServices.length}+ professional solutions.</p>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      ${serviceCards}
    </div>
    <div class="text-center">
      <a href="/contact/" class="inline-block bg-gradient-to-r ${cat.gradient} text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all">Need Custom ${cat.label}? Contact Us</a>
      <p class="text-slate-400 mt-4">📱 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com</p>
      <p class="text-slate-500 mt-1">📍 364 E Main St STE 1008, Middletown DE 19709</p>
    </div>
  </div>
</body>
</html>`;
}

let created = 0;
for (const cat of categories) {
  const dir = path.join(__dirname, '..', 'out', cat.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), generateCategoryPage(cat));
  created++;
}
console.log(`category-pages: ${created} pages generated in out/`);
