'use client';

import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    hours: 'Mon-Fri: 9AM-6PM EST'
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        </div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          </div><div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              Zion Tech Group
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Leading provider of AI and IT solutions for businesses worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">AI Services</h3>
            <ul className="space-y-2">
              <li><Link href="/ai-analytics" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">AI Analytics</Link></li>
              <li><Link href="/machine-learning" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">Machine Learning</Link></li>
              <li><Link href="/computer-vision" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">Computer Vision</Link></li>
              <li><Link href="/nlp" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">Natural Language Processing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">IT Services</h3>
            <ul className="space-y-2">
              <li><Link href="/cloud-services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">Cloud Services</Link></li>
              <li><Link href="/cybersecurity" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">Cybersecurity</Link></li>
              <li><Link href="/devops" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">DevOps</Link></li>
              <li><Link href="/database" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">Database Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Contact</h3>
            </div><div className="space-y-2">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;