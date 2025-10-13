'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Shield, Zap, Brain } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Solutions', path: '/ai-services' },
    { name: 'IT Services', path: '/services' },
    { name: '5G Solutions', path: '/5g-solutions' },
    { name: 'Micro SaaS', path: '/micro-saas' }
  ];

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' }
  ];

  const support = [
    { name: 'Documentation', path: '/docs' },
    { name: 'Support Center', path: '/support' },
    { name: 'API Docs', path: '/api-docs' },
    { name: 'Status', path: '/status' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white text-xl font-bold">Zion Tech Group</h3>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6 max-w-md">
              Leading provider of advanced AI and IT solutions for modern businesses. 
              We empower organizations with cutting-edge technology that drives innovation and growth.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:contact@ziontechgroup.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+1-555-0123" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-cyan-400" />
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-purple-400" />
              Company
            </h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 text-gray-400 text-sm mb-4 md:mb-0">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
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