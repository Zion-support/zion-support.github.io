import fs from 'fs';
import path from 'path';

// Files that need specific fixes
const fixes = [
  {
    file: 'src/about/page.tsx',
    changes: [
      { from: "import Navigation from '../components/Navigation';", to: '' },
      { from: "import SEOOptimizer from '../components/SEOOptimizer';", to: '' },
      { from: 'const AboutPage: React.FC = () => {', to: 'const AboutPage: React.FC = () => {' },
      { from: 'export default AboutPage;', to: 'export default AboutPage;' }
    ]
  },
  {
    file: 'src/ai-computer-vision/page.tsx',
    changes: [
      { from: "import { Image, Brain, Zap, Shield, BarChart, Users, ArrowRight, CheckCircle, Star, TrendingUp, Cpu, Database, Code, Cloud, Globe, Lock, Award } from 'lucide-react';", to: "import { Brain, Zap, Shield, BarChart, Users, ArrowRight, CheckCircle, Star, TrendingUp, Cpu, Database, Code, Cloud, Globe, Lock, Award } from 'lucide-react';" }
    ]
  },
  {
    file: 'src/ai-crm/page.tsx',
    changes: [
      { from: "import Navigation from '../components/Navigation';", to: '' },
      { from: "import Footer from '../components/Footer';", to: '' }
    ]
  },
  {
    file: 'src/ai-customer-support/page.tsx',
    changes: [
      { from: 'const AICustomerSupportPage: React.FC = () => {', to: 'const AICustomerSupportPage: React.FC = () => {' },
      { from: 'export default AICustomerSupportPage;', to: 'export default AICustomerSupportPage;' }
    ]
  },
  {
    file: 'src/ai-invoice-generator/page.tsx',
    changes: [
      { from: "import { FileText, DollarSign, Clock, Shield, CheckCircle, ArrowRight, Star, TrendingUp, Cpu, Database, BarChart, Code, Cloud, Users, Globe, Lock, Award, Brain, Zap, Target, Mail, Phone, Calendar, Settings, Lightbulb, Lightning, Security, StarIcon, Check, PhoneIcon } from 'lucide-react';", to: "import { FileText, DollarSign, Clock, Shield, CheckCircle, ArrowRight, Star, TrendingUp, Cpu, Database, BarChart, Code, Cloud, Users, Globe, Lock, Award, Brain, Zap, Target, Mail, Calendar, Settings, Lightbulb } from 'lucide-react';" }
    ]
  }
];

// Apply fixes
fixes.forEach(({ file, changes }) => {
  const filePath = path.join(process.cwd(), file);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    changes.forEach(({ from, to }) => {
      if (from && to) {
        content = content.replace(from, to);
      } else if (from) {
        content = content.replace(from + '\n', '');
      }
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${file}`);
  } catch (error) {
    console.error(`Error fixing ${file}:`, error.message);
  }
});

console.log('Done fixing remaining issues!');