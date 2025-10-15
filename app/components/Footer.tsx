import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-white">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Advanced AI and IT Solutions for the modern world. We help businesses transform through cutting-edge technology, 
              innovative micro SAAS solutions, and comprehensive digital services.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">📞</span>
                <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">✉️</span>
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">📍</span>
                <span className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Website</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">AI Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-blue-400 transition-colors">AI Development</Link></li>
              <li><Link to="/ai-content-generator" className="text-gray-300 hover:text-blue-400 transition-colors">Content Generator</Link></li>
              <li><Link to="/ai-sales-predictor" className="text-gray-300 hover:text-blue-400 transition-colors">Sales Predictor</Link></li>
              <li><Link to="/ai-customer-support" className="text-gray-300 hover:text-blue-400 transition-colors">Customer Support</Link></li>
              <li><Link to="/ai-solutions" className="text-gray-300 hover:text-blue-400 transition-colors">AI Solutions</Link></li>
            </ul>
          </div>
          
          {/* Micro SAAS */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Micro SAAS</h4>
            <ul className="space-y-2">
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-blue-400 transition-colors">All SAAS Solutions</Link></li>
              <li><Link to="/task-manager" className="text-gray-300 hover:text-blue-400 transition-colors">Task Manager</Link></li>
              <li><Link to="/expense-tracker" className="text-gray-300 hover:text-blue-400 transition-colors">Expense Tracker</Link></li>
              <li><Link to="/email-marketing" className="text-gray-300 hover:text-blue-400 transition-colors">Email Marketing</Link></li>
              <li><Link to="/workflow-automator" className="text-gray-300 hover:text-blue-400 transition-colors">Workflow Automator</Link></li>
            </ul>
          </div>
          
          {/* IT Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">IT Solutions</h4>
            <ul className="space-y-2">
              <li><Link to="/it-services" className="text-gray-300 hover:text-blue-400 transition-colors">IT Services</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-blue-400 transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-blue-400 transition-colors">Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-blue-400 transition-colors">Mobile Development</Link></li>
              <li><Link to="/cybersecurity" className="text-gray-300 hover:text-blue-400 transition-colors">Cybersecurity</Link></li>
            </ul>
          </div>
          
          {/* Company & Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 mb-6">
              <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-blue-400 transition-colors">Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-blue-400 transition-colors">Partnerships</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-blue-400 transition-colors">Case Studies</Link></li>
            </ul>
            
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-300 hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-blue-400 transition-colors">API Docs</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-blue-400 transition-colors">Help</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-blue-400 transition-colors">Pricing</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-300 mb-2">
                © 2024 Zion Tech Group. All rights reserved.
              </p>
              <p className="text-sm text-gray-400">
                Advanced AI and IT Solutions | Delaware, USA
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">Cookie Policy</Link>
              <Link to="/accessibility" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;