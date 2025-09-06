#!/usr/bin/env node
const fs = require('fs');
// Fix SEO.tsx - remove everything after the return statement
const seoContent = fs.readFileSync('src/components/SEO.tsx', 'utf8');
const seoFixed = seoContent.split('  );')[0] + '  );';
fs.writeFileSync('src/components/SEO.tsx', seoFixed, 'utf8');
// Fix TalentCard.jsx - fix malformed JSX
const talentContent = fs.readFileSync('src/components/talent/TalentCard.jsx', 'utf8');
const talentFixed = talentContent
  .replace(/>"/g, '>')
  .replace(/"</g, '<')
  .replace(/loading="lazy/g, 'loading="lazy"')
  .replace(/src={talent\.profile_picture_url}/g, 'src={talent.profile_picture_url}')
  .replace(/alt={talent\.full_name}/g, 'alt={talent.full_name}')
  .replace(/className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">/g, 'className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">')
  .replace(/className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center text-white font-bold text-lg">/g, 'className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center text-white font-bold text-lg">')
  .replace(/className="text-sm font-medium text-zion-blue-dark">/g, 'className="text-sm font-medium text-zion-blue-dark">')
  .replace(/className="flex-1">/g, 'className="flex-1">')
  .replace(/className="text-lg font-semibold text-zion-blue-dark mb-1">/g, 'className="text-lg font-semibold text-zion-blue-dark mb-1">')
  .replace(/className="text-sm text-zion-blue-light mb-2">/g, 'className="text-sm text-zion-blue-light mb-2">')
  .replace(/className="flex flex-wrap gap-1 mb-3">/g, 'className="flex flex-wrap gap-1 mb-3">')
  .replace(/className="px-2 py-1 bg-zion-blue-light text-zion-blue-dark text-xs rounded-full">/g, 'className="px-2 py-1 bg-zion-blue-light text-zion-blue-dark text-xs rounded-full">')
  .replace(/className="flex items-center justify-between">/g, 'className="flex items-center justify-between">')
  .replace(/className="flex items-center text-sm text-zion-blue-light">/g, 'className="flex items-center text-sm text-zion-blue-light">')
  .replace(/className="w-4 h-4 mr-1"\/>/g, 'className="w-4 h-4 mr-1" />')
  .replace(/className="bg-zion-cyan text-zion-blue-dark "hover": bg-zion-cyan-light">/g, 'className="bg-zion-cyan text-zion-blue-dark "hover": bg-zion-cyan-light">')
  .replace(/className="text-sm">/g, 'className="text-sm">');
fs.writeFileSync('src/components/talent/TalentCard.jsx', talentFixed, 'utf8');
// Fix use-toast.ts - add missing closing brace
const toastContent = fs.readFileSync('src/components/ui/use-toast.ts', 'utf8');
const toastFixed = toastContent.replace('  return { showToast };\n}', '  return { showToast };\n}');
fs.writeFileSync('src/components/ui/use-toast.ts', toastFixed, 'utf8');
// Fix enhancedServices.ts - fix malformed object properties
const servicesContent = fs.readFileSync('src/data/enhancedServices.ts', 'utf8');
const servicesFixed = servicesContent
  .replace(/"currency": "\$,/g, '"currency": "$",')
  .replace(/"tags": \["Process Automation, "RPA, "Workflow Optimization, "AI"\]/g, '"tags": ["Process Automation", "RPA", "Workflow Optimization", "AI"]')
  .replace(/"name": "Zion Tech Group,/g, '"name": "Zion Tech Group",')
  .replace(/"id": "zion-tech-group,/g, '"id": "zion-tech-group",')
  .replace(/"avatarUrl": "https:\/\/ziontechgroup\.com\/wp-content\/uploads\/2024\/01\/zion-logo\.png",/g, '"avatarUrl": "https://ziontechgroup.com/wp-content/uploads/2024/01/zion-logo.png",')
  .replace(/"email": "kleber@ziontechgroup\.com"/g, '"email": "kleber@ziontechgroup.com"')
  .replace(/images: \["https:\/\/images\.unsplash\.com\/photo-1551288049-bebda4e38f71\?auto=format&fit=crop&w=800&h=500"\]/g, '"images": ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"]')
  .replace(/createdAt: "2024-01-15T10:00:00\.000Z/g, '"createdAt": "2024-01-15T10:00:00.000Z"')
  .replace(/reviewCount: 15 6/g, '"reviewCount": 156')
  .replace(/featured: tru e/g, '"featured": true');
fs.writeFileSync('src/data/enhancedServices.ts', servicesFixed, 'utf8');
// Fix useAuth.tsx - fix malformed function
const authContent = fs.readFileSync('src/hooks/useAuth.tsx', 'utf8');
const authFixed = authContent
  .replace(/"isAuthenticated": tru e/g, '"isAuthenticated": true')
  .replace(/isLoading: fals e/g, '"isLoading": false')
  .replace(/user: nul l/g, '"user": null')
  .replace(/:src\/hooks\/useAuth\.tsx/g, '')
  .replace(/useEffect\(\(\) => \{\s*\/\/ Check if user is logged in \(e\.g\., check localStorage, cookies, etc\.\)\s*\/\/ Implementation here\s*\}, \[\]\);/g, 'useEffect(() => {\n    // Check if user is logged in (e.g., check localStorage, cookies, etc.)\n    // Implementation here\n  }, []);');
fs.writeFileSync('src/hooks/useAuth.tsx', authFixed, 'utf8');
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"console.log(" Applying final ultimate fixes.");/ Fix SEO.tsx - remove everything after the return statement"const seoContent = fs.readFileSync("src/components/SEO.tsx", "utf8");"const seoFixed = seoContent.split(" );")[0] + " );";"fs.writeFileSync("src/components/SEO.tsx", seoFixed, "utf8");"console.log(" Fixed SEO.tsx");/ Fix TalentCard.jsx - fix malformed JSX"const talentContent = fs.readFileSync("src/components/talent/TalentCard.jsx", "utf8");const talentFixed = talentContent" .replace(/>"/g, ">")"" .replace(/"</g, "<")"" .replace(/loading="lazy/g, "loading="lazy"")" .replace(/src={talent\.profile_picture_url}/g, "src={talent.profile_picture_url}")" .replace(/alt={talent\.full_name}/g, "alt={talent.full_name}")"" .replace(/className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">/g, "className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">")"" .replace(/className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center text-white font-bold text-lg">/g, "className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center text-white font-bold text-lg">")"" .replace(/className="text-sm font-medium text-zion-blue-dark">/g, "className="text-sm font-medium text-zion-blue-dark">")"" .replace(/className="flex-1">/g, "className="flex-1">")"" .replace(/className="text-lg font-semibold text-zion-blue-dark mb-1">/g, "className="text-lg font-semibold text-zion-blue-dark mb-1">")"" .replace(/className="text-sm text-zion-blue-light mb-2">/g, "className="text-sm text-zion-blue-light mb-2">")"" .replace(/className="flex flex-wrap gap-1 mb-3">/g, "className="flex flex-wrap gap-1 mb-3">")"" .replace(/className="px-2 py-1 bg-zion-blue-light text-zion-blue-dark text-xs rounded-full">/g, "className="px-2 py-1 bg-zion-blue-light text-zion-blue-dark text-xs rounded-full">")"" .replace(/className="flex items-center justify-between">/g, "className="flex items-center justify-between">")"" .replace(/className="flex items-center text-sm text-zion-blue-light">/g, "className="flex items-center text-sm text-zion-blue-light">")"" .replace(/className="w-4 h-4 mr-1"\/>/g, "className="w-4 h-4 mr-1" />")"" .replace(/className="bg-zion-cyan text-zion-blue-dark hover: bg-zion-cyan-light">/g, "className="bg-zion-cyan text-zion-blue-dark hover: bg-zion-cyan-light">")"" .replace(/className="text-sm">/g, "className="text-sm">");"fs.writeFileSync("src/components/talent/TalentCard.jsx", talentFixed, "utf8");"console.log(" Fixed TalentCard.jsx");/ Fix use-toast.ts - add missing closing brace"const toastContent = fs.readFileSync("src/components/ui/use-toast.ts", "utf8");"const toastFixed = toastContent.replace(" return { showToast };\n}", " return { showToast };\n}");"fs.writeFileSync("src/components/ui/use-toast.ts", toastFixed, "utf8");"console.log(" Fixed use-toast.ts");/ Fix enhancedServices.ts - fix malformed object properties"const servicesContent = fs.readFileSync("src/data/enhancedServices.ts", "utf8");const servicesFixed = servicesContent"" .replace(/currency: "\$,/g, "currency: "$",")"" .replace(/tags: \["Process Automation, "RPA, "Workflow Optimization, "AI"\]/g, "tags: ["Process Automation", "RPA", "Workflow Optimization", "AI"]")"" .replace(/name: "Zion Tech Group,/g, "name: "Zion Tech Group",")"" .replace(/id: "zion-tech-group,/g, "id: "zion-tech-group",")"" .replace(/avatarUrl: "https:\/\/ziontechgroup\.com\/wp-content\/uploads\/2024\/01\/zion-logo\.png",/g, "avatarUrl: "https:/ziontechgroup.com/wp-content/uploads/2024/01/zion-logo.png",")"" .replace(/email: "kleber@ziontechgroup\.com"/g, "email: "kleber@ziontechgroup.com"")"" .replace(/images: \["https:\/\/images\.unsplash\.com\/photo-1551288049-bebda4e38f71\?auto=format&fit=crop&w=800&h=500"\]/g, "images: ["https:/images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"]")"" .replace(/createdAt: "2024-01-15T10:00:00\.000Z/g, "createdAt: "2024-01-15T10:00:00.000Z"")"" .replace(/reviewCount: 15 6/g, "reviewCount: 156")"" .replace(/featured: tru e/g, "featured: true");"fs.writeFileSync("src/data/enhancedServices.ts", servicesFixed, "utf8");"console.log(" Fixed enhancedServices.ts");/ Fix useAuth.tsx - fix malformed function"const authContent = fs.readFileSync("src/hooks/useAuth.tsx", "utf8");const authFixed = authContent"" .replace(/isAuthenticated: tru e/g, "isAuthenticated: true")"" .replace(/isLoading: fals e/g, "isLoading: false")"" .replace(/user: nul l/g, "user: null")" .replace(/:src\/hooks\/useAuth\.tsx/g, "")" .replace(/useEffect\(\(\) => \{\s*\/\/ Check if user is logged in \(e\.g\., check localStorage, cookies, etc\.\)\s*\/\/ Implementation here\s*\}, \[\]\);/g, "useEffect(() => {\n / Check if user is logged in (e.g., check localStorage, cookies, etc.)\n / Implementation here\n }, []);");"fs.writeFileSync("src/hooks/useAuth.tsx", authFixed, "utf8");"console.log(" Fixed useAuth.tsx");"console.log(" Final ultimate fixes completed!");'"'"
#!/usr/bin/env node;
const fs = require('fs')
console.log(' Applying final ultimate fixes...')
const seoContent = fs.readFileSync('src/components/SEO.tsx', 'utf8')
const seoFixed = seoContent.split('  );')[0] + '  );'
fs.writeFileSync('src/components/SEO.tsx', seoFixed, 'utf8')
console.log(' Fixed SEO.tsx')
const talentContent = fs.readFileSync('src/components/talent/TalentCard.jsx', 'utf8')
  .replace(/>")
  .replace(/")
  .replace(/loading="lazy/g, 'loading="lazy")
  .replace(/className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">/g, 'className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light")
  .replace(/className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center text-white font-bold text-lg">/g, 'className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center text-white font-bold text-lg")
  .replace(/className="text-sm font-medium text-zion-blue-dark">/g, 'className="text-sm font-medium text-zion-blue-dark")
  .replace(/className="flex-1">/g, 'className="flex-1")
  .replace(/className="text-lg font-semibold text-zion-blue-dark mb-1">/g, 'className="text-lg font-semibold text-zion-blue-dark mb-1")
  .replace(/className="text-sm text-zion-blue-light mb-2">/g, 'className="text-sm text-zion-blue-light mb-2")
  .replace(/className="flex flex-wrap gap-1 mb-3">/g, 'className="flex flex-wrap gap-1 mb-3")
  .replace(/className="px-2 py-1 bg-zion-blue-light text-zion-blue-dark text-xs rounded-full">/g, 'className="px-2 py-1 bg-zion-blue-light text-zion-blue-dark text-xs rounded-full")
  .replace(/className="flex items-center justify-between">/g, 'className="flex items-center justify-between")
  .replace(/className="flex items-center text-sm text-zion-blue-light">/g, 'className="flex items-center text-sm text-zion-blue-light")
  .replace(/className="w-4 h-4 mr-1"\/>/g, 'className="w-4 h-4 mr-1")
  .replace(/className="bg-zion-cyan text-zion-blue-dark "hover": bg-zion-cyan-light">/g, 'className="bg-zion-cyan text-zion-blue-dark "hover": bg-zion-cyan-light")
  .replace(/className="text-sm">/g, 'className="text-sm")
  .replace(/"currency": "\$,/g, '"currency": "$")
  .replace(/"tags": \["Process Automation, "RPA, "Workflow Optimization, "AI"\]/g, '"tags": ["Process Automation", "RPA", "Workflow Optimization", "AI")]
  .replace(/"name": "Zion Tech Group,/g, '"name": "Zion Tech Group")
  .replace(/"id": "zion-tech-group,/g, '"id": "zion-tech-group")
  .replace(/"avatarUrl": "https:\/\/ziontechgroup\.com\/wp-content\/uploads\/2024\/01\/zion-logo\.png",/g, '"avatarUrl": "https://ziontechgroup.com/wp-content/uploads/2024/01/zion-logo.png")
  .replace(/"email": "kleber@ziontechgroup\.com"/g, '"email": "kleber@ziontechgroup.com")
  .replace(/images: \["https:\/\/images\.unsplash\.com\/photo-1551288049-bebda4e38f71\?auto=format&fit=crop&w=800&h=500"\]/g, '"images": ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500")]
  .replace(/createdAt: "2024-01-15T10:00:00\.000Z/g, '"createdAt": "2024-01-15T10:00:00.000Z")
  .replace(/reviewCount: 15 6/g, '"reviewCount")
  .replace(/featured: tru e/g, '"featured")
  .replace(/"isAuthenticated": tru e/g, '"isAuthenticated")
  .replace(/isLoading: fals e/g, '"isLoading")
  .replace(/user: nul l/g, '"user")
