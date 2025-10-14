import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI Solutions', href: '/ai-solutions' },
      { name: 'IT Solutions', href: '/it-solutions' },
      { name: 'Cybersecurity', href: '/cybersecurity' },
      { name: 'Cloud Solutions', href: '/cloud-solutions' },
      { name: 'Digital Transformation', href: '/digital-transformation' },
      { name: 'Micro SaaS', href: '/micro-saas-solutions' },
      { name: '5G Solutions', href: '/5g-solutions' },
    ],
    microSaas: [
      { name: 'AI Content Generator', href: '/ai-content-generator' },
      { name: 'Business Intelligence', href: '/business-intelligence-dashboard' },
      { name: 'Cybersecurity Monitor', href: '/cybersecurity-monitor-pro' },
      { name: 'Cloud Manager', href: '/cloud-infrastructure-manager' },
      { name: 'Support Automation', href: '/customer-support-automation' },
      { name: 'API Management', href: '/api-management-suite' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Contact', href: '/contact' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Support', href: '/support' },
      { name: 'Demo', href: '/demo' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: GlobeAltIcon },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: GlobeAltIcon },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: GlobeAltIcon },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <CpuChipIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, 
              and digital transformation services for businesses worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <PhoneIcon className="w-4 h-4 text-purple-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <EnvelopeIcon className="w-4 h-4 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPinIcon className="w-4 h-4 text-purple-400" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRightIcon className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Micro SAAS</h3>
            <ul className="space-y-2">
              {footerLinks.microSaas.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRightIcon className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRightIcon className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRightIcon className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-slate-700/50">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Get the latest insights on AI and IT trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center font-semibold hover:scale-105 transform">
                Subscribe
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <HeartIcon className="w-4 h-4 text-red-400" />
              <span>by Zion Tech Group</span>
            </div>
            
            {/* Legal Links */}
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-4 text-center text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;