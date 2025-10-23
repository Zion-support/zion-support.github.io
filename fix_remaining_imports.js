import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesToFix = [
  "app/analytics-tools/page.tsx",
  "app/backup-recovery/page.tsx",
  "app/blockchain-integration-services/page.tsx",
  "app/business-apps/page.tsx",
  "app/business-intelligence/page.tsx",
  "app/cloud-migration/page.tsx",
  "app/cloud-security/page.tsx",
  "app/consultation/page.tsx",
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");

    // Remove unused imports - be more specific
    content = content.replace(
      /import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';/g,
      "import { CheckCircle, Zap, Shield, Brain } from 'lucide-react';",
    );

    // Fix other patterns
    content = content.replace(
      /import { ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';/g,
      "import { Zap, Shield, Brain } from 'lucide-react';",
    );

    content = content.replace(
      /import { CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';/g,
      "import { CheckCircle } from 'lucide-react';",
    );

    content = content.replace(
      /import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';/g,
      "import { } from 'lucide-react';",
    );

    // Remove empty imports
    content = content.replace(/import { } from 'lucide-react';/g, "");

    fs.writeFileSync(filePath, content);
    console.log(`Fixed file: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach((filePath) => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    fixFile(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log("Remaining imports fixed!");
