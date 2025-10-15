import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <h3 className="text-xl font-bold">Zion Tech Group</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI and IT solutions for modern businesses. We deliver innovative technology 
              solutions that drive growth and transformation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-blue-400 mr-3">📞</span>
                <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-blue-400 mr-3">✉️</span>
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">📍</span>
                <div className="text-gray-300">
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown DE 19709</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">AI Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-white transition-colors">AI Development</Link></li>
              <li><Link to="/ai-content-generator" className="text-gray-300 hover:text-white transition-colors">Content Generator</Link></li>
              <li><Link to="/zion-ai-customer-support-pro" className="text-gray-300 hover:text-white transition-colors">Customer Support Pro</Link></li>
              <li><Link to="/zion-ai-sales-predictor" className="text-gray-300 hover:text-white transition-colors">Sales Predictor</Link></li>
              <li><Link to="/zion-ai-workflow-automator-pro" className="text-gray-300 hover:text-white transition-colors">Workflow Automator</Link></li>
            </ul>
          </div>
          
          {/* IT Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">IT Solutions</h4>
            <ul className="space-y-2">
              <li><Link to="/web-development" className="text-gray-300 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-white transition-colors">Mobile Apps</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-white transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/cybersecurity" className="text-gray-300 hover:text-white transition-colors">Cybersecurity</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-white transition-colors">Data Analytics</Link></li>
              <li><Link to="/5g-solutions" className="text-gray-300 hover:text-white transition-colors">5G Solutions</Link></li>
            </ul>
          </div>
          
          {/* Micro SAAS */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Micro SAAS</h4>
            <ul className="space-y-2">
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-white transition-colors">All Solutions</Link></li>
              <li><Link to="/zion-smart-expense-tracker" className="text-gray-300 hover:text-white transition-colors">Expense Tracker</Link></li>
              <li><Link to="/zion-ai-email-marketing-pro" className="text-gray-300 hover:text-white transition-colors">Email Marketing Pro</Link></li>
              <li><Link to="/zion-ai-inventory-optimizer-pro" className="text-gray-300 hover:text-white transition-colors">Inventory Optimizer</Link></li>
              <li><Link to="/zion-ai-social-scheduler-pro" className="text-gray-300 hover:text-white transition-colors">Social Scheduler</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Additional Links */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-sm font-semibold text-gray-400 mb-3">Company</h5>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</Link></li>
                <li><Link to="/team" className="text-gray-300 hover:text-white transition-colors text-sm">Our Team</Link></li>
                <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors text-sm">Careers</Link></li>
                <li><Link to="/partnerships" className="text-gray-300 hover:text-white transition-colors text-sm">Partnerships</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-sm font-semibold text-gray-400 mb-3">Resources</h5>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors text-sm">Blog</Link></li>
                <li><Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors text-sm">Case Studies</Link></li>
                <li><Link to="/api-docs" className="text-gray-300 hover:text-white transition-colors text-sm">API Documentation</Link></li>
                <li><Link to="/help" className="text-gray-300 hover:text-white transition-colors text-sm">Help Center</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-sm font-semibold text-gray-400 mb-3">Legal</h5>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">Terms of Service</Link></li>
                <li><Link to="/cookies" className="text-gray-300 hover:text-white transition-colors text-sm">Cookie Policy</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-sm font-semibold text-gray-400 mb-3">Connect</h5>
              <ul className="space-y-2">
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact Us</Link></li>
                <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors text-sm">Pricing</Link></li>
                <li><a href="https://ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors text-sm">Website</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                Website
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;