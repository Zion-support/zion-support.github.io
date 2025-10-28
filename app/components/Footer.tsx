import React, { memo } from 'react';
import Link from 'next/link';
import { Phone, MapPin, Twitter, Brain, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  className?: string;
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = memo(({ className = '', children }) => {
  const currentYear = new Date().getFullYear();
  const aiServices = [
    { name: 'AI-Powered DevOps', href: '/ai-powered-devops' },
    { name: 'AI Email Analyzer', href: '/ai-powered-email-analyzer' },
    { name: 'E-commerce Analytics Pro', href: '/ecommerce-analytics-pro' },
    { name: 'Legal Document Manager', href: '/legal-document-manager' },
    { name: 'Medical Records Manager', href: '/medical-records-manager' },
    { name: 'Online Learning Platform', href: '/online-learning-platform' },
    { name: 'Property Management AI', href: '/property-management-ai' },
    { name: 'Supply Chain Optimizer', href: '/supply-chain-optimizer' }
  ];

  const itServices = [
    { name: 'Cybersecurity Audit', href: '/it-services/cybersecurity-audit' }
  ];

  return (
    <footer className={`bg-gray-900 text-white ${className}`}>
      {children || (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Brain className="h-8 w-8 text-purple-400" />
                <span className="text-xl font-bold">Zion Tech Group</span>
              </div>
              <p className="text-gray-300 text-sm">
                Leading the future of technology with innovative AI solutions, 
                cloud infrastructure, and cutting-edge software development.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* AI Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">AI Services</h3>
              <ul className="space-y-2">
                {aiServices.map((service) => (
                  <li key={service.name}>
                    <Link 
                      href={service.href}
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
                {itServices.map((service) => (
                  <li key={service.name}>
                    <Link 
                      href={service.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      )}
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;