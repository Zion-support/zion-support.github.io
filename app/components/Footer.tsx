import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

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
              Advanced AI and IT Solutions for modern businesses. We help companies transform through cutting-edge technology.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/ai-solutions" className="text-gray-300 hover:text-blue-400 transition-colors">AI Solutions</a></li>
              <li><a href="/it-solutions" className="text-gray-300 hover:text-blue-400 transition-colors">IT Solutions</a></li>
              <li><a href="/cybersecurity" className="text-gray-300 hover:text-blue-400 transition-colors">Cybersecurity</a></li>
              <li><a href="/cloud-solutions" className="text-gray-300 hover:text-blue-400 transition-colors">Cloud Solutions</a></li>
              <li><a href="/micro-saas-solutions" className="text-gray-300 hover:text-blue-400 transition-colors">Micro SaaS</a></li>
              <li><a href="/5g-solutions" className="text-gray-300 hover:text-blue-400 transition-colors">5G Solutions</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="/pricing" className="text-gray-300 hover:text-blue-400 transition-colors">Pricing</a></li>
              <li><a href="/careers" className="text-gray-300 hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/tutorials" className="text-gray-300 hover:text-blue-400 transition-colors">Tutorials</a></li>
              <li><a href="/demo" className="text-gray-300 hover:text-blue-400 transition-colors">Demo</a></li>
              <li><a href="/support" className="text-gray-300 hover:text-blue-400 transition-colors">Support</a></li>
              <li><a href="/docs" className="text-gray-300 hover:text-blue-400 transition-colors">Documentation</a></li>
              <li><a href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>Mon-Fri: 9AM-6PM EST</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;