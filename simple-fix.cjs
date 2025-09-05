#!/usr/bin/env node

const fs = require('fs'
console.log(' Applying simple fixes...'
const seoContent = fs.readFileSync('src/components/SEO.tsx', 'utf8'
const seoFixed = seoContent.split('  );')[0] + '  );'
fs.writeFileSync('src/components/SEO.tsx', seoFixed, 'utf8'
console.log(' Fixed SEO.tsx'
const talentContent = fs.readFileSync('src/components/talent/TalentCard.jsx', 'utf8'
const talentFixed = talentContent.replace(/>"/g, '>').replace(/"
const servicesFixed = servicesContent.replace(/",/g, ',').replace(/"