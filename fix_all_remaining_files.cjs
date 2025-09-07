const fs = require('fs');
const path = require('path');

// Find all problematic files
const filesToFix = [
  'components/ui/Button.tsx',
  'components/ui/Card.tsx',
  'components/ui/UltraFuturisticBackground.tsx',
  'components/ui/UltraFuturisticServiceCard2026.tsx',
  'pages/ITServices.tsx'
];

// UI Component templates
const buttonTemplate = `import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick, 
  className = '' 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200';
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50'
  };
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const classes = \`\${baseClasses} \${variantClasses[variant]} \${sizeClasses[size]} \${className}\`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}`;

const cardTemplate = `import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export default function Card({ children, className = '', title }: CardProps) {
  return (
    <div className={\`bg-white rounded-lg shadow-md border border-gray-200 p-6 \${className}\`}>
      {title && <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>}
      {children}
    </div>
  );
}`;

const backgroundTemplate = `import React from 'react';

interface UltraFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'quantum' | 'matrix' | 'neon';
  intensity?: 'low' | 'medium' | 'high';
}

export default function UltraFuturisticBackground({ 
  children, 
  variant = 'quantum', 
  intensity = 'medium' 
}: UltraFuturisticBackgroundProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {children}
    </div>
  );
}`;

const serviceCardTemplate = `import React from 'react';

interface UltraFuturisticServiceCard2026Props {
  id: string;
  title: string;
  description: string;
  features: string[];
  price?: string | { monthly?: number; yearly?: number; currency?: string };
  icon?: React.ReactNode;
}

export default function UltraFuturisticServiceCard2026({
  id,
  title,
  description,
  features,
  price,
  icon
}: UltraFuturisticServiceCard2026Props) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-400 text-sm">• {feature}</li>
        ))}
      </ul>
      {price && (
        <div className="text-blue-400 font-semibold">
          {typeof price === 'string' ? price : \`\${price.currency || '$'}\${price.monthly || 0}/month\`}
        </div>
      )}
    </div>
  );
}`;

const itServicesTemplate = `import React from 'react';
import { Cloud, Shield, Database, Server, Smartphone, Globe } from 'lucide-react';

const itServices = [
  {
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud solutions including AWS, Azure, and Google Cloud Platform management.',
    icon: Cloud,
    features: ['Multi-cloud strategy', 'Cost optimization', 'Security compliance', '24/7 monitoring']
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Advanced security measures to protect your digital assets and data.',
    icon: Shield,
    features: ['Threat detection', 'Vulnerability assessment', 'Incident response', 'Security training']
  },
  {
    title: 'Database Management',
    description: 'Expert database administration and optimization services.',
    icon: Database,
    features: ['Performance tuning', 'Backup & recovery', 'Migration services', 'Monitoring']
  },
  {
    title: 'Server Management',
    description: 'Complete server administration and maintenance services.',
    icon: Server,
    features: ['Server setup', 'Performance monitoring', 'Security hardening', 'Updates & patches']
  },
  {
    title: 'Mobile Solutions',
    description: 'Mobile app development and device management services.',
    icon: Smartphone,
    features: ['App development', 'Device management', 'Mobile security', 'Cross-platform solutions']
  },
  {
    title: 'Web Development',
    description: 'Modern web applications and websites built with latest technologies.',
    icon: Globe,
    features: ['Responsive design', 'Performance optimization', 'SEO optimization', 'Maintenance']
  }
];

export default function ITServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            IT Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions to support your business growth and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itServices.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <service.icon className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-500 text-sm">• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}`;

// Fix each file
filesToFix.forEach(filePath => {
  try {
    let content;
    const fileName = path.basename(filePath, '.tsx');
    
    switch (fileName) {
      case 'Button':
        content = buttonTemplate;
        break;
      case 'Card':
        content = cardTemplate;
        break;
      case 'UltraFuturisticBackground':
        content = backgroundTemplate;
        break;
      case 'UltraFuturisticServiceCard2026':
        content = serviceCardTemplate;
        break;
      case 'ITServices':
        content = itServicesTemplate;
        break;
      default:
        content = buttonTemplate;
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed file: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('All remaining files fixed successfully!');