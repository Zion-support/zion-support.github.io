import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = memo(() => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <h3 className="text-lg font-semibold">Zion Tech Group</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Advanced AI and IT Solutions for the modern world. Empowering businesses with cutting-edge technology.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <a href="tel:+13024640950" className="hover:text-white">+1 302 464 0950</a>
              </div>
              <div className="flex items-center space-x-2">
                <span>✉️</span>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <span>📍</span>
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🌐</span>
                <a href="https://ziontechgroup.com" className="hover:text-white">ziontechgroup.com</a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">AI Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-white">AI Services</Link></li>
              <li><Link to="/ai-solutions" className="text-gray-300 hover:text-white">AI Solutions</Link></li>
              <li><Link to="/ai-content-generator" className="text-gray-300 hover:text-white">Content Generator</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-white">Data Analytics</Link></li>
              <li><Link to="/zion-ai-predictive-analytics" className="text-gray-300 hover:text-white">Predictive Analytics</Link></li>
              <li><Link to="/zion-ai-image-recognition" className="text-gray-300 hover:text-white">Image Recognition</Link></li>
              <li><Link to="/zion-ai-voice-assistant" className="text-gray-300 hover:text-white">Voice Assistant</Link></li>
              <li><Link to="/zion-ai-recommendation-engine" className="text-gray-300 hover:text-white">Recommendation Engine</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">IT Services</h4>
            <ul className="space-y-2">
              <li><Link to="/it-services" className="text-gray-300 hover:text-white">IT Services</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-white">Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-white">Mobile Development</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-white">Cloud Infrastructure</Link></li>
              <li><Link to="/cybersecurity" className="text-gray-300 hover:text-white">Cybersecurity</Link></li>
              <li><Link to="/database-management" className="text-gray-300 hover:text-white">Database Management</Link></li>
              <li><Link to="/network-infrastructure" className="text-gray-300 hover:text-white">Network Infrastructure</Link></li>
              <li><Link to="/devops-automation" className="text-gray-300 hover:text-white">DevOps & Automation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Micro SaaS</h4>
            <ul className="space-y-2">
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-white">Micro SaaS Solutions</Link></li>
              <li><Link to="/crm-suite" className="text-gray-300 hover:text-white">CRM Suite</Link></li>
              <li><Link to="/hr-management" className="text-gray-300 hover:text-white">HR Management</Link></li>
              <li><Link to="/invoicing-pro" className="text-gray-300 hover:text-white">Invoicing Pro</Link></li>
              <li><Link to="/analytics-dashboard" className="text-gray-300 hover:text-white">Analytics Dashboard</Link></li>
              <li><Link to="/document-management" className="text-gray-300 hover:text-white">Document Management</Link></li>
              <li><Link to="/time-tracking" className="text-gray-300 hover:text-white">Time Tracking</Link></li>
              <li><Link to="/customer-feedback" className="text-gray-300 hover:text-white">Customer Feedback</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Company & Support</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-white">Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white">Pricing</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-white">Help</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-white">API Docs</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white">Privacy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;