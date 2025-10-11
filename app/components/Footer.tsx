'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Brain } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 text-gray-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Zion Tech Group</h2>
                <p className="text-sm text-cyan-400 font-medium">AI & IT SOLUTIONS</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Leading provider of AI and IT solutions that transform businesses through cutting-edge technology.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400 mr-3" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">+1 302 464 0950</a>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400 mr-3" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-start text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400 mr-3 mt-0.5" />
                <div>
                  <span>364 E Main St STE 1008</span><br />
                  <span className="text-gray-400">Middletown, DE 19709</span>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Clock className="w-4 h-4 text-cyan-400 mr-3" />
                <span>Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-cyan-400">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-cyan-400">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Services</Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors">IT Services</Link></li>
              <li><Link to="/micro-saas" className="text-gray-300 hover:text-cyan-400 transition-colors">Micro SAAS</Link></li>
              <li><Link to="/consultation" className="text-gray-300 hover:text-cyan-400 transition-colors">Consultation</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-sm text-gray-400">
                <span className="text-cyan-400 font-semibold">99.9%</span> Uptime
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400 font-semibold">500+</span> Clients
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
