import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesToFix = [
  'app/analytics-tools/page.tsx',
  'app/backup-recovery/page.tsx',
  'app/blockchain-integration-services/page.tsx',
  'app/business-apps/page.tsx',
  'app/business-intelligence/page.tsx',
  'app/cloud-migration/page.tsx',
  'app/cloud-security/page.tsx',
  'app/consultation/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // For analytics-tools, keep only what's used
    if (filePath.includes('analytics-tools')) {
      content = content.replace(
        /import { CheckCircle, Zap, Shield, Brain } from 'lucide-react';/g,
        "import { CheckCircle, Zap, Shield, Brain, Globe, Phone, Mail } from 'lucide-react';"
      );
    }
    
    // For backup-recovery, remove unused ones
    if (filePath.includes('backup-recovery')) {
      content = content.replace(
        /import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Database, Clock, ShieldCheck } from 'lucide-react';/g,
        "import { CheckCircle, Database, Clock, ShieldCheck } from 'lucide-react';"
      );
    }
    
    // For blockchain-integration-services, keep what's used
    if (filePath.includes('blockchain-integration-services')) {
      content = content.replace(
        /import { CheckCircle, Zap, Shield, Brain } from 'lucide-react';/g,
        "import { CheckCircle, Zap, Shield, Brain, Globe, Phone, Mail } from 'lucide-react';"
      );
    }
    
    // For business-apps, remove unused ones
    if (filePath.includes('business-apps')) {
      content = content.replace(
        /import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';/g,
        "import { CheckCircle, Database, Clock, ShieldCheck } from 'lucide-react';"
      );
    }
    
    // For business-intelligence, remove unused ones
    if (filePath.includes('business-intelligence')) {
      content = content.replace(
        /import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';/g,
        "import { CheckCircle, Database, Clock, ShieldCheck } from 'lucide-react';"
      );
    }
    
    // For cloud-migration, keep what's used
    if (filePath.includes('cloud-migration')) {
      content = content.replace(
        /import { CheckCircle, Zap, Shield, Brain } from 'lucide-react';/g,
        "import { CheckCircle, Zap, Shield, Brain, Globe, Phone, Mail } from 'lucide-react';"
      );
    }
    
    // For cloud-security, remove unused ones
    if (filePath.includes('cloud-security')) {
      content = content.replace(
        /import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';/g,
        "import { CheckCircle, Database, Clock, ShieldCheck } from 'lucide-react';"
      );
    }
    
    // For consultation, remove unused MapPin
    if (filePath.includes('consultation')) {
      content = content.replace(
        /import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain } from 'lucide-react';/g,
        "import { CheckCircle, ArrowRight, Phone, Mail, Zap, Shield, Brain } from 'lucide-react';"
      );
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed file: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    fixFile(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('Final import fixes completed!');