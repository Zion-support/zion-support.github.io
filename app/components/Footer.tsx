import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ArrowRightIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SAAS', href: '/micro-saas-solutions' },
    { name: '5G Solutions', href: '/5g-solutions' },
    { name: 'Cybersecurity Suite', href: '/ai-cybersecurity-suite' },
    { name: 'Data Analytics', href: '/ai-data-analytics' }
  ];

  const innovativeServices = [
    { name: 'Quantum Computing Simulator', href: '/ai-quantum-computing-simulator' },
    { name: 'Neural Interface', href: '/ai-neural-interface' },
    { name: 'Space Mission Optimizer', href: '/ai-space-mission-optimizer' },
    { name: 'Holographic Workspace', href: '/ai-holographic-workspace' },
    { name: 'Climate Prediction Engine', href: '/ai-climate-prediction-engine' },
    { name: 'Telepathic Interface', href: '/ai-telepathic-interface' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Partners', href: '/partners' }
  ];

  const support = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Support Center', href: '/support' },
    { name: 'Documentation', href: '/documentation' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'Status Page', href: '/status' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, 
                and digital transformation services for businesses worldwide.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                <div className="text-gray-300">
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown DE 19709</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <ArrowRightIcon className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Innovative Solutions */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Innovative Solutions</h4>
            <ul className="space-y-3">
              {innovativeServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <ArrowRightIcon className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <ArrowRightIcon className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support & Legal</h4>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <ArrowRightIcon className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-white mb-3">Legal</h5>
              <ul className="space-y-2">
                {legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>
            <p className="text-gray-300 mb-4">Get the latest news and updates about our innovative solutions.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md border border-slate-600 bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-800 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-gray-400 text-sm">
                <HeartIcon className="h-4 w-4 mr-1 text-red-500" />
                Made with passion for innovation
              </div>
              <div className="text-gray-400 text-sm">
                Proudly serving clients worldwide
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Component;