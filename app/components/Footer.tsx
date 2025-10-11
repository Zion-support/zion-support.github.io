'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Brain } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Careers', url: '/careers' },
    { name: 'Partners', url: '/partners' },
    { name: 'Support', url: '/support' },
    { name: 'Status', url: '/status' }
  ];

  const resourcesLinks = [
    { name: 'Pricing', url: '/pricing' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Community', url: '/community' },
    { name: 'Demo', url: '/demo' },
    { name: 'Compliance', url: '/compliance' }
  ];

  const enterpriseLinks = [
    { name: 'Enterprise Solutions', url: '/enterprise' },
    { name: 'Digital Transformation', url: '/digital-transformation' },
    { name: 'Business Intelligence', url: '/business-intelligence' },
    { name: 'Edge Computing', url: '/edge-computing' },
    { name: 'Consultation', url: '/consultation' },
    { name: 'Custom Development', url: '/custom-software' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold neon-text-enhanced group-hover:glow">Zion Tech Group</span>
                <span className="text-sm text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI and IT solutions for modern businesses.
              We help companies transform their operations with cutting-edge technology, 
              delivering measurable results and exceptional value.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors font-medium">+1 302 464 0950</a>
              </div>
              <div className="flex items-center text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors font-medium">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-start text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3 mt-0.5 group-hover:scale-110 transition-transform">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
              <div className="flex items-center text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Enterprise</h3>
            <ul className="space-y-2">
              {enterpriseLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;
