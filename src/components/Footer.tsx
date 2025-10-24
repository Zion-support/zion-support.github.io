'use client';

import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const navigation = {
    solutions: [
      { name: 'AI Solutions', url: '/ai-solutions' },
      { name: 'IT Services', url: '/it-services' },
      { name: 'Cloud Infrastructure', url: '/cloud-infrastructure' },
      { name: 'Cybersecurity', url: '/cybersecurity' }
    ],
    company: [
      { name: 'About', url: '/about' },
      { name: 'Team', url: '/team' },
      { name: 'Careers', url: '/careers' },
      { name: 'Contact', url: '/contact' }
    ],
    resources: [
      { name: 'Blog', url: '/blog' },
      { name: 'Case Studies', url: '/case-studies' },
      { name: 'API Docs', url: '/api-docs' },
      { name: 'Compliance', url: '/compliance' }
    ]
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. 
              Transform your business with our cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+1234567890" className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors">
                <Phone className="h-5 w-5 mr-2" />
                +1 (234) 567-890
              </a>
              <a href="mailto:info@ziontechgroup.com" className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors">
                <Mail className="h-5 w-5 mr-2" />
                info@ziontechgroup.com
              </a>
            </div>
            <div className="flex items-center text-gray-300 mt-4">
              <MapPin className="h-5 w-5 mr-2" />
              123 Tech Street, Innovation City, IC 12345
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.url} 
                    className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center group"
                  >
                    {item.name}
                    <ArrowRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.url} 
                    className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center group"
                  >
                    {item.name}
                    <ArrowRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.url} 
                    className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center group"
                  >
                    {item.name}
                    <ArrowRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;