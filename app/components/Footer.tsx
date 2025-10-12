import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900/95 backdrop-blur-lg text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI-powered solutions, 5G implementation, and enterprise IT services. 
              Transform your business with cutting-edge technology.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">AI Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ai-services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-semibold">
                  All AI Services
                </Link>
              </li>
              <li>
                <Link to="/ai-content-generator" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  AI Content Generator
                </Link>
              </li>
              <li>
                <Link to="/ai-chatbot-builder" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  AI Chatbot Builder
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/it-services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  IT Services
                </Link>
              </li>
              <li>
                <Link to="/micro-saas-services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Micro SAAS
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2024 Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-500 text-xs">
                Built with ❤️ by Zion Tech Group
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
