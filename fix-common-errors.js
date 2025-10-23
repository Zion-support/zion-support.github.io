import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files to fix
const filesToFix = [
  "app/ai-data-visualization/page.tsx",
  "app/ai-sales-automation/page.tsx",
  "app/autonomous-systems/page.tsx",
  "app/business-intelligence/page.tsx",
  "app/it-infrastructure/page.tsx",
  "app/it-services/page.tsx",
  "app/micro-saas/page.tsx",
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");

    // Add Helmet import if missing
    if (content.includes("Helmet") && !content.includes("import { Helmet }")) {
      content = content.replace(
        /'use client';\nimport React from 'react';/,
        "'use client';\nimport React from 'react';\nimport { Helmet } from 'react-helmet-async';",
      );
    }

    // Add missing icon imports
    if (
      content.includes("Database") &&
      !content.includes("import { Database }")
    ) {
      content = content.replace(
        /import { Helmet } from 'react-helmet-async';/,
        "import { Helmet } from 'react-helmet-async';\nimport { Database, Brain, Phone, Mail, Zap, Shield, Globe } from 'lucide-react';",
      );
    }

    // Fix export names
    content = content.replace(
      /export default Ai(\w+)Page;/g,
      "export default AI$1Page;",
    );
    content = content.replace(
      /export default It(\w+)Page;/g,
      "export default IT$1Page;",
    );
    content = content.replace(
      /export default MicroSaasPage;/g,
      "export default MicroSAASPage;",
    );

    // Fix component names in JSX
    content = content.replace(/<Ai(\w+)Page/g, "<AI$1Page");
    content = content.replace(/<It(\w+)Page/g, "<IT$1Page");
    content = content.replace(/<MicroSaasPage/g, "<MicroSAASPage");

    // Add Footer import if missing
    if (content.includes("<Footer") && !content.includes("import Footer")) {
      content = content.replace(
        /import { Helmet } from 'react-helmet-async';/,
        "import { Helmet } from 'react-helmet-async';\nimport Footer from '../components/Footer';",
      );
    }

    // Fix features array reference
    if (
      content.includes("features.map") &&
      !content.includes("const features = [")
    ) {
      // This is a more complex fix, so we'll handle it case by case
    }

    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach((file) => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    fixFile(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log("Common errors fixing completed!");
