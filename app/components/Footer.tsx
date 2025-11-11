
import React, { memo } from 'react';
import Link from 'next/link';
import { Phone, MapPin, Twitter, Sparkles, Github, Linkedin, Mail } from 'lucide-react';

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
    <footer className={`relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-t border-purple-500/20 ${className}`}>
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/5 to-transparent pointer-events-none"></div>
      
      {children || (
        <>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Company Info */}
              <div className="space-y-5">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl blur-sm opacity-75"></div>
                    <div className="relative h-10 w-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    Zion Tech Group
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Leading provider of AI-powered solutions and IT services for modern businesses. 
                  Transform your operations with cutting-edge technology.
                </p>
                <div className="flex space-x-3">
                  <a 
                    href="#" 
                    className="p-2 text-gray-400 hover:text-purple-400 hover:bg-purple-500/20 rounded-lg transition-all duration-200"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="p-2 text-gray-400 hover:text-purple-400 hover:bg-purple-500/20 rounded-lg transition-all duration-200"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="p-2 text-gray-400 hover:text-purple-400 hover:bg-purple-500/20 rounded-lg transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* AI Services */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">AI Services</h3>
                <ul className="space-y-2.5">
                  {aiServices.map((service, _index) => (
                    <li key={_index}>
                      <Link 
                        href={service.href} 
                        className="text-gray-400 hover:text-purple-400 transition-colors text-sm inline-block hover:translate-x-1 duration-200"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* IT Services */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">IT Services</h3>
                <ul className="space-y-2.5">
                  {itServices.map((service, _index) => (
                    <li key={_index}>
                      <Link 
                        href={service.href} 
                        className="text-gray-400 hover:text-purple-400 transition-colors text-sm inline-block hover:translate-x-1 duration-200"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 text-gray-400 text-sm group">
                    <Phone className="h-4 w-4 mt-0.5 text-purple-400 group-hover:text-purple-300 transition-colors flex-shrink-0" />
                    <span className="group-hover:text-gray-300 transition-colors">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-start space-x-3 text-gray-400 text-sm group">
                    <Mail className="h-4 w-4 mt-0.5 text-purple-400 group-hover:text-purple-300 transition-colors flex-shrink-0" />
                    <span className="group-hover:text-gray-300 transition-colors break-all">info@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-start space-x-3 text-gray-400 text-sm group">
                    <MapPin className="h-4 w-4 mt-0.5 text-purple-400 group-hover:text-purple-300 transition-colors flex-shrink-0" />
                    <span className="group-hover:text-gray-300 transition-colors">123 Tech Street, Silicon Valley, CA</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-purple-500/20 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-gray-400 text-sm">
                  © {currentYear} Zion Tech Group. All rights reserved.
                </p>
                <div className="flex space-x-6 text-sm">
                  <Link href="/terms" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Terms of Service
                  </Link>
                  <Link href="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;