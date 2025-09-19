<<<<<<< HEAD
#!/usr/bin/env node

const fs = require('fs');



// Fix SEO.tsx - remove everything after the return statement
const seoContent = fs.readFileSync('src/components/SEO.tsx', 'utf8');
const seoFixed = seoContent.split('  );')[0] + '  );';
fs.writeFileSync('src/components/SEO.tsx', seoFixed, 'utf8');


// Fix TalentCard.jsx - remove quotes from JSX
const talentContent = fs.readFileSync('src/components/talent/TalentCard.jsx', 'utf8');
const talentFixed = talentContent.replace(/>"/g, '>').replace(/"</g, '<');
fs.writeFileSync('src/components/talent/TalentCard.jsx', talentFixed, 'utf8');


// Fix use-toast.ts - add missing closing brace
const toastContent = fs.readFileSync('src/components/ui/use-toast.ts', 'utf8');
const toastFixed = toastContent.replace('  return { showToast };\n}', '  return { showToast };\n}');
fs.writeFileSync('src/components/ui/use-toast.ts', toastFixed, 'utf8');


// Fix enhancedServices.ts - remove quotes from object properties
const servicesContent = fs.readFileSync('src/data/enhancedServices.ts', 'utf8');
const servicesFixed = servicesContent.replace(/",/g, ',').replace(/":/g, ':');
fs.writeFileSync('src/data/enhancedServices.ts', servicesFixed, 'utf8');


// Fix useAuth.tsx - fix malformed useEffect
const authContent = fs.readFileSync('src/hooks/useAuth.tsx', 'utf8');
const authFixed = authContent.replace('useEffect(: unknown {', 'useEffect(() => {').replace(':src/hooks/useAuth.tsx', '  }, []);');
fs.writeFileSync('src/hooks/useAuth.tsx', authFixed, 'utf8');


=======
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"console.log(" Applying simple fixes.");/ Fix SEO.tsx - remove everything after the return statement"const seoContent = fs.readFileSync("src/components/SEO.tsx", "utf8");"const seoFixed = seoContent.split(" );")[0] + " );";"fs.writeFileSync("src/components/SEO.tsx", seoFixed, "utf8");"console.log(" Fixed SEO.tsx");/ Fix TalentCard.jsx - remove quotes from JSX"const talentContent = fs.readFileSync("src/components/talent/TalentCard.jsx", "utf8");"const talentFixed = talentContent.replace(/>"/g, ">").replace(/"</g, "<");"fs.writeFileSync("src/components/talent/TalentCard.jsx", talentFixed, "utf8");"console.log(" Fixed TalentCard.jsx");/ Fix use-toast.ts - add missing closing brace"const toastContent = fs.readFileSync("src/components/ui/use-toast.ts", "utf8");"const toastFixed = toastContent.replace(" return { showToast };\n}", " return { showToast };\n}");"fs.writeFileSync("src/components/ui/use-toast.ts", toastFixed, "utf8");"console.log(" Fixed use-toast.ts");/ Fix enhancedServices.ts - remove quotes from object properties"const servicesContent = fs.readFileSync("src/data/enhancedServices.ts", "utf8");""const servicesFixed = servicesContent.replace(/",/g, ",").replace(/":/g, ":");"fs.writeFileSync("src/data/enhancedServices.ts", servicesFixed, "utf8");"console.log(" Fixed enhancedServices.ts");/ Fix useAuth.tsx - fix malformed useEffect"const authContent = fs.readFileSync("src/hooks/useAuth.tsx", "utf8");"const authFixed = authContent.replace("useEffect(: unknown {", "useEffect(() => {").replace(":src/hooks/useAuth.tsx", " }, []);");"fs.writeFileSync("src/hooks/useAuth.tsx", authFixed, "utf8");"console.log(" Fixed useAuth.tsx");"console.log(" Simple fixes completed!");'"'"
=======
#!/usr/bin/env node;
const fs = require('fs')
console.log(' Applying simple fixes...')
const seoContent = fs.readFileSync('src/components/SEO.tsx', 'utf8')
const seoFixed = seoContent.split('  );')[0] + '  );'
fs.writeFileSync('src/components/SEO.tsx', seoFixed, 'utf8')
console.log(' Fixed SEO.tsx')
const talentContent = fs.readFileSync('src/components/talent/TalentCard.jsx', 'utf8')
const talentFixed = talentContent.replace(/>"/g, '>').replace(/')
const servicesFixed = servicesContent.replace(/",/g, ',').replace(/')
>>>>>>> main
>>>>>>> main
