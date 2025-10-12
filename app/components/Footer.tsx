'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Brain, Cloud, Shield, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm">
              Leading technology company providing cutting-edge AI and IT solutions 
              to transform businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors">
                <Cloud className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors">
                <Code className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ai-services" className="text-gray-300 hover:text-white transition-colors text-sm">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link to="/it-services" className="text-gray-300 hover:text-white transition-colors text-sm">
                  IT Services
                </Link>
              </li>
              <li>
                <Link to="/micro-saas" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Micro SAAS
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300 text-sm">+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300 text-sm">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-purple-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
