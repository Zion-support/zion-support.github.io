import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/95 backdrop-blur-sm border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+13024640950" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">AI Services</h3>
            <ul className="space-y-2">
              <li><Link to="/ai-voice-assistant-pro" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AI Voice Assistant Pro</Link></li>
              <li><Link to="/ai-image-recognition-pro" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AI Image Recognition Pro</Link></li>
              <li><Link to="/ai-fraud-detection-pro" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AI Fraud Detection Pro</Link></li>
              <li><Link to="/ai-services" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium">View All AI Services →</Link></li>
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Micro SAAS</h3>
            <ul className="space-y-2">
              <li><Link to="/smart-inventory-optimizer-pro" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Smart Inventory Optimizer Pro</Link></li>
              <li><Link to="/zion-analytics-pro" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Zion Analytics Pro</Link></li>
              <li><Link to="/zion-security-shield" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Zion Security Shield</Link></li>
              <li><Link to="/micro-saas" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium">View All Micro SAAS →</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (302) 464-0950</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4 md:mt-0">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;