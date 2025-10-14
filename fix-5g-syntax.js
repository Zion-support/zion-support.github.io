import fs from &apos;fs&apos;;
import path from &apos;path&apos;;
import { fileURLToPath } from &apos;url&apos;;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const files = [&apos;app/5g-consulting/page.tsx&apos;,
  &apos;app/5g-deployment/page.tsx&apos;,
  &apos;app/5g-integration/page.tsx&apos;,
  &apos;app/5g-maintenance/page.tsx&apos;,
  &apos;app/5g-migration/page.tsx&apos;,
  &apos;app/5g-modernization/page.tsx&apos;,
  &apos;app/5g-monitoring/page.tsx&apos;,
  &apos;app/5g-optimization/page.tsx&apos;];

files.forEach(file => {;
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, &apos;utf8&apos;);
    
    // Fix semicolons in object properties
    content = content.replace(/title: &apos;([^&apos]+)&apos;,/g, "title: &apos;$1&apos;,");
    content = content.replace(/description: &apos;([^&apos]+)&apos;;/g, "description: &apos;$1&apos;");
    
    // Fix other common syntax errors
    content = content.replace(/grid md: grid-cols/g, &apos;grid md:grid-cols&apos;);
    content = content.replace(/hover: border-/g, &apos;hover:border-&apos;);
    content = content.replace(/hover: from-/g, &apos;hover:from-&apos;);
    content = content.replace(/hover: to-/g, &apos;hover:to-&apos;);
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${file}`);
  }
});

console.log(&apos;All 5G pages fixed!&apos;);