'use client';
import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Services',
      links: [
        { name: 'AI Analytics', href: '/ai-analytics' },
        { name: 'AI Automation', href: '/ai-automation' },
        { name: 'AI Code Generation', href: '/ai-code-generation' },
        { name: 'AI Customer Support', href: '/ai-customer-support' },
        { name: 'AI Data Visualization', href: '/ai-data-visualization' },
        { name: 'AI Email Marketing', href: '/ai-email-marketing' }
      ]
    },
    {
      title: 'IT Services',
      links: [
        { name: 'IT Consulting', href: '/it-consulting' },
        { name: 'Cloud Migration', href: '/cloud-migration' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'DevOps', href: '/devops' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' }
      ]
    }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, 
              autonomous systems, and digital transformation services.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-cyan-400 mr-3" />
                <a 
                  href="tel:+13024640950" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-cyan-400 mr-3" />
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-cyan-400 mr-3 mt-1" />
                <div className="text-gray-300">
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown, DE 19709</div>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-cyan-400 mr-3" />
                <span className="text-gray-300">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-white mb-4">{category.title}</h4>
              <ul className="space-y-2">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/zion-tech-group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;