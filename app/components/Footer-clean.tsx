'use client';

import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const aiServices = [
    { name: 'AI Analytics', url: '/ai-analytics' },
    { name: 'Machine Learning', url: '/machine-learning' },
    { name: 'Computer Vision', url: '/computer-vision' },
    { name: 'NLP', url: '/nlp' }
  ];

  const itServices = [
    { name: 'Cloud Services', url: '/cloud-services' },
    { name: 'Cybersecurity', url: '/cybersecurity' },
    { name: 'DevOps', url: '/devops' },
    { name: 'Database Services', url: '/database' }
  ];

  const supportLinks = [
    { name: 'Support Center', url: '/support' },
    { name: 'System Status', url: '/status' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' }
  ];

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    hours: 'Mon-Fri: 9AM-6PM EST'
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        </div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* AI Services */}
          </div><div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">IT Services</h3>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            </div><div className="flex items-center text-sm text-gray-300">
              <Phone className="w-4 h-4 mr-2" />
              <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-400 transition-colors">
                {contactInfo.phone}
              </a>
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <Mail className="w-4 h-4 mr-2" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                {contactInfo.email}
              </a>
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{contactInfo.address}</span>
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <Clock className="w-4 h-4 mr-2" />
              <span>{contactInfo.hours}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          </div><div className="flex flex-col md:flex-row justify-between items-center">
            </div><div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;