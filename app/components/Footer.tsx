import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
      { name: 'AI Content Generator', href: '/ai-content-generator' },
      { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
      { name: 'AI Automation', href: '/ai-automation' },
      { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
      { name: 'Cybersecurity', href: '/cybersecurity' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Solutions', href: '/solutions' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Blog', href: '/blog' }
    ],
    support: [
      { name: 'Contact', href: '/contact' },
      { name: 'Support', href: '/support' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'Demo', href: '/demo' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'GitHub', href: '#', icon: '🐙' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center neon-pulse">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-white font-bold text-2xl text-gradient">Zion Tech Group</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming businesses through cutting-edge AI and IT solutions. 
              We help companies innovate and grow in the digital age.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-purple-400 transition-colors hover:scale-110 text-2xl"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 text-gradient">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-all duration-300 flex items-center group hover:translate-x-2"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 text-gradient">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-all duration-300 flex items-center group hover:translate-x-2"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 text-gradient">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-all duration-300 flex items-center group hover:translate-x-2"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <div className="max-w-md">
            <h3 className="text-white font-semibold mb-4 text-gradient">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Get the latest insights on AI and IT trends delivered to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-futuristic flex-1 rounded-r-none"
              />
              <button className="btn-futuristic rounded-l-none flex items-center">
                Subscribe
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
            {footerLinks.legal.map((link) => (
              <Link 
                key={link.name}
                to={link.href}
                className="text-gray-400 hover:text-purple-400 transition-colors text-sm hover:scale-105"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;