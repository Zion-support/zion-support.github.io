import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const services = [
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'IT Solutions', href: '/it-solutions' },
    { name: 'Cloud Infrastructure', href: '/cloud-solutions' },
    { name: 'Digital Transformation', href: '/digital-transformation' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' }
  ];

  const support = [
    { name: 'Contact', href: '/contact' },
    { name: 'Support', href: '/support' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Demo', href: '/demo' },
    { name: 'Documentation', href: '/docs' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: 'linkedin' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: 'twitter' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: 'github' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: 'facebook' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                Zion Tech Group
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, 
              and digital transformation services for businesses worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <PhoneIcon className="w-5 h-5 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <EnvelopeIcon className="w-5 h-5 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPinIcon className="w-5 h-5 text-purple-400" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <span className="sr-only">{social.name}</span>
                  <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center hover:bg-purple-500 transition-colors">
                    {social.name.charAt(0)}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center group"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center group"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 text-gray-400 mb-4 md:mb-0">
              <span>© 2024 Zion Tech Group. All rights reserved.</span>
              <div className="flex items-center space-x-2">
                <span>Made with</span>
                <HeartIcon className="w-4 h-4 text-red-500" />
                <span>for innovation</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
