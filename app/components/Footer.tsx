import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Advanced AI and IT Solutions for modern businesses. Transforming industries through cutting-edge technology.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-white transition-colors">+1 302 464 0950</a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/ai-solutions" className="text-gray-300 hover:text-white transition-colors">AI Solutions</a></li>
              <li><a href="/it-solutions" className="text-gray-300 hover:text-white transition-colors">IT Solutions</a></li>
              <li><a href="/cybersecurity" className="text-gray-300 hover:text-white transition-colors">Cybersecurity</a></li>
              <li><a href="/cloud-solutions" className="text-gray-300 hover:text-white transition-colors">Cloud Solutions</a></li>
              <li><a href="/micro-saas-solutions" className="text-gray-300 hover:text-white transition-colors">Micro SaaS</a></li>
              <li><a href="/5g-solutions" className="text-gray-300 hover:text-white transition-colors">5G Solutions</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</a></li>
              <li><a href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/support" className="text-gray-300 hover:text-white transition-colors">Support</a></li>
              <li><a href="/docs" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
              <li>
                <a 
                  href="https://ziontechgroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  Visit Website
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              &copy; 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;