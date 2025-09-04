import React from 'react';
import Link from 'next/link';
import { Globe, Shield, HelpCircle, FileText, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

export default function EnhancedFooter() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI Development', href: '/services/ai-development' },
      { name: 'Cloud Architecture', href: '/services/cloud-architecture' },
      { name: 'Cybersecurity', href: '/services/it/cybersecurity' },
      { name: 'Data Analytics', href: '/services/data-analytics' },
      { name: 'DevOps', href: '/services/devops' },
    ],
    solutions: [
      { name: 'Blockchain Solutions', href: '/blockchain-solutions' },
      { name: 'IoT Platforms', href: '/iot-platforms' },
      { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Pricing', href: '/pricing' },
    ],
    resources: [
      { name: 'API Documentation', href: '/api-documentation' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Sitemap', href: '/sitemap' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8 py-12">
        <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-6 gap-8">
          <div className="lg: co l-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div>
                <span className="text-xl font-bold">Zion Tech Group</span>
                <div className="text-xs text-gray-400">Technology Solutions</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Leading provider of AI services, cloud infrastructure, cybersecurity, and digital transformation solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4"  />
                <a href="tel:+13024640950" className="hover: tex t-white transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4"  />
                <a href="mailto: klebe r@ziontechgroup.com" className="hover: tex t-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4"  />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-blue-400"  /> Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover: tex t-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-green-400"  /> Solutions
            </h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover: tex t-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-purple-400"  /> Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover: tex t-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <HelpCircle className="w-5 h-5 mr-2 text-yellow-400"  /> Resources
            </h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover: tex t-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-md font-semibold mb-3 text-gray-300">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover: tex t-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md: fle x-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md: m b-0">© {currentYear} Zion Tech Group. All rights reserved.</div>
          <button onClick={scrollToTop} className="bg-blue-600 hover: b g-blue-700 text-white p-3 rounded-full shadow-lg transition-colors" aria-label="Scroll to top">
            <ArrowUp className="w-5 h-5"  />
          </button>
        </div>
      </div>
    </footer>
  );
}