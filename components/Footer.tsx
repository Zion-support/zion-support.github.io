import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/talent' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' }
    ],
    services: [
      { name: 'AI Development', href: '/services/ai' },
      { name: 'Cloud Services', href: '/services/cloud' },
      { name: 'Blockchain', href: '/services/blockchain' },
      { name: 'Data Analytics', href: '/services/analytics' }
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Support', href: '/support' },
      { name: 'Community', href: '/community' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: 'LinkedIn' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: 'Twitter' },
    { name: 'GitHub', href: 'https://github.com/zion-tech-group', icon: 'GitHub' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;