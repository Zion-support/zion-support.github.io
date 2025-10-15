import React from 'react';
import { Phone, Mail, MapPin, Globe, Clock } from 'lucide-react';

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
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Advanced AI and IT Solutions for modern businesses. We deliver innovative technology solutions that drive growth and efficiency.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-blue-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-2 text-blue-400" />
                <span>https://ziontechgroup.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/ai-solutions" className="text-gray-300 hover:text-blue-400 transition-colors">AI Solutions</a></li>
              <li><a href="/it-solutions" className="text-gray-300 hover:text-blue-400 transition-colors">IT Solutions</a></li>
              <li><a href="/micro-saas-solutions" className="text-gray-300 hover:text-blue-400 transition-colors">Micro SaaS Solutions</a></li>
              <li><a href="/cloud-solutions" className="text-gray-300 hover:text-blue-400 transition-colors">Cloud Solutions</a></li>
              <li><a href="/cybersecurity" className="text-gray-300 hover:text-blue-400 transition-colors">Cybersecurity</a></li>
              <li><a href="/5g-solutions" className="text-gray-300 hover:text-blue-400 transition-colors">5G Solutions</a></li>
              <li><a href="/digital-transformation" className="text-gray-300 hover:text-blue-400 transition-colors">Digital Transformation</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Solutions</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/ai-content-generator" className="text-gray-300 hover:text-blue-400 transition-colors">AI Content Generator</a></li>
              <li><a href="/ai-analytics-dashboard" className="text-gray-300 hover:text-blue-400 transition-colors">AI Analytics Dashboard</a></li>
              <li><a href="/ai-customer-support" className="text-gray-300 hover:text-blue-400 transition-colors">AI Customer Support</a></li>
              <li><a href="/ai-cybersecurity-monitor" className="text-gray-300 hover:text-blue-400 transition-colors">AI Cybersecurity Monitor</a></li>
              <li><a href="/ai-automation-platform" className="text-gray-300 hover:text-blue-400 transition-colors">AI Workflow Automation</a></li>
              <li><a href="/ai-business-intelligence" className="text-gray-300 hover:text-blue-400 transition-colors">AI Business Intelligence</a></li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3 text-sm mb-6">
              <li><a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="/careers" className="text-gray-300 hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="/case-studies" className="text-gray-300 hover:text-blue-400 transition-colors">Case Studies</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="/tutorials" className="text-gray-300 hover:text-blue-400 transition-colors">Tutorials</a></li>
              <li><a href="/support" className="text-gray-300 hover:text-blue-400 transition-colors">Support</a></li>
            </ul>
            
            <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="/pricing" className="text-gray-300 hover:text-blue-400 transition-colors">Pricing</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
              <p className="mt-1">Delivering innovative AI and IT solutions worldwide.</p>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>24/7 Support Available</span>
              </div>
              <div className="text-blue-400">
                <span>ISO 27001 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;