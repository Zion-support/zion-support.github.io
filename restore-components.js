import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Template for Footer component
const footerTemplate = `'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const aiServices = [
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
    { name: 'AI Content Generator', href: '/ai-content-generator' },
    { name: 'AI Data Visualizer', href: '/ai-data-visualizer' },
    { name: 'AI Document Intelligence', href: '/ai-document-intelligence' },
    { name: 'AI Financial Forecasting', href: '/ai-financial-forecasting' },
    { name: 'AI Fraud Detection', href: '/ai-fraud-detection' }
  ];

  const itServices = [
    { name: 'Web Development', href: '/web-development' },
    { name: 'Mobile Development', href: '/mobile-development' },
    { name: 'API Development', href: '/api-development' },
    { name: 'Cloud Solutions', href: '/cloud-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Data Analytics', href: '/data-analytics' }
  ];

  const microSaas = [
    { name: 'Analytics Dashboard', href: '/analytics-dashboard' },
    { name: 'Expense Tracker Pro', href: '/expense-tracker-pro' },
    { name: 'Inventory Manager', href: '/inventory-manager' },
    { name: 'Task Manager Pro', href: '/task-manager-pro' },
    { name: 'Social Media Scheduler', href: '/social-media-scheduler' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Partnerships', href: '/partnerships' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'API Documentation', href: '/api-docs' },
    { name: 'Status Page', href: '/status' }
  ];

  const quickLinks = [
    { name: 'Free Consultation', href: '/consultation' },
    { name: 'Request Demo', href: '/demo' },
    { name: 'Contact Sales', href: '/contact' },
    { name: 'Technical Support', href: '/support' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Leading provider of AI and IT solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:info@ziontechgroup.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">AI Services</h3>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">IT Services</h3>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SaaS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Micro SaaS</h3>
            <ul className="space-y-2">
              {microSaas.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 mb-6">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {quickLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.href} 
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
                >
                  {link.name}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;`;

// Template for Navigation component
const navigationTemplate = `'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Brain, ArrowRight } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas-solutions' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const aiServices = [
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
    { name: 'AI Content Generator', href: '/ai-content-generator' },
    { name: 'AI Data Visualizer', href: '/ai-data-visualizer' },
    { name: 'AI Document Intelligence', href: '/ai-document-intelligence' },
    { name: 'AI Financial Forecasting', href: '/ai-financial-forecasting' },
    { name: 'AI Fraud Detection', href: '/ai-fraud-detection' }
  ];

  const itServices = [
    { name: 'Web Development', href: '/web-development' },
    { name: 'Mobile Development', href: '/mobile-development' },
    { name: 'API Development', href: '/api-development' },
    { name: 'Cloud Solutions', href: '/cloud-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Data Analytics', href: '/data-analytics' }
  ];

  const microSaas = [
    { name: 'Analytics Dashboard', href: '/analytics-dashboard' },
    { name: 'Expense Tracker Pro', href: '/expense-tracker-pro' },
    { name: 'Inventory Manager', href: '/inventory-manager' },
    { name: 'Task Manager Pro', href: '/task-manager-pro' },
    { name: 'Social Media Scheduler', href: '/social-media-scheduler' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block px-3 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;`;

// Template for other components
const componentTemplates = {
  'Footer.tsx': footerTemplate,
  'Navigation.tsx': navigationTemplate,
  'ErrorBoundary.tsx': `'use client';
import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback;
      if (FallbackComponent) {
        return <FallbackComponent error={this.state.error} resetError={this.resetError} />;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h2>
            <p className="text-gray-600 mb-6">
              We apologize for the inconvenience. Please try refreshing the page.
            </p>
            <button
              onClick={this.resetError}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;`,
  'LoadingSpinner.tsx': `'use client';
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={\`flex items-center justify-center \${className}\`}>
      <div className={\`\${sizeClasses[size]} animate-spin rounded-full border-2 border-gray-300 border-t-blue-600\`}></div>
    </div>
  );
};

export default LoadingSpinner;`
};

// Main function to restore all component files
async function main() {
  const componentsDir = path.join(__dirname, 'app', 'components');
  const pattern = path.join(componentsDir, '*.tsx');
  
  const files = await glob(pattern);
  
  console.log(`Found ${files.length} component files to restore`);
  
  files.forEach(filePath => {
    try {
      const fileName = path.basename(filePath);
      
      if (componentTemplates[fileName]) {
        const content = componentTemplates[fileName];
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Restored: ${filePath}`);
      } else {
        // Create a basic component template for unknown components
        const componentName = fileName.replace('.tsx', '');
        const basicTemplate = `'use client';
import React from 'react';

const ${componentName}: React.FC = () => {
  return (
    <div>
      <h1>${componentName}</h1>
    </div>
  );
};

export default ${componentName};`;
        
        fs.writeFileSync(filePath, basicTemplate, 'utf8');
        console.log(`Created basic template for: ${filePath}`);
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  });
  
  console.log('Component restoration completed!');
}

main().catch(console.error);