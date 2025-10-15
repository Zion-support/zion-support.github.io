import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI and IT solutions, helping businesses transform and grow through innovative technology.
            </p>
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
                <span className="text-gray-300 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-400 mr-3">🌐</span>
                <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
          
          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">AI Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-white transition-colors">All AI Services</Link></li>
              <li><Link to="/ai-content-generator" className="text-gray-300 hover:text-white transition-colors">AI Content Generator Pro</Link></li>
              <li><Link to="/zion-ai-customer-support-pro" className="text-gray-300 hover:text-white transition-colors">AI Customer Support Pro</Link></li>
              <li><Link to="/zion-ai-workflow-automator-pro" className="text-gray-300 hover:text-white transition-colors">AI Workflow Automator Pro</Link></li>
              <li><Link to="/zion-ai-email-marketing-pro" className="text-gray-300 hover:text-white transition-colors">AI Email Marketing Pro</Link></li>
              <li><Link to="/zion-ai-social-scheduler-pro" className="text-gray-300 hover:text-white transition-colors">AI Social Scheduler Pro</Link></li>
            </ul>
          </div>
          
          {/* Micro SaaS */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Micro SaaS</h4>
            <ul className="space-y-2">
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-white transition-colors">All Micro SaaS</Link></li>
              <li><Link to="/zion-smart-expense-tracker" className="text-gray-300 hover:text-white transition-colors">Smart Expense Tracker</Link></li>
              <li><Link to="/zion-ai-inventory-optimizer-pro" className="text-gray-300 hover:text-white transition-colors">Inventory Optimizer Pro</Link></li>
              <li><Link to="/zion-ai-financial-forecaster" className="text-gray-300 hover:text-white transition-colors">Financial Forecaster Pro</Link></li>
              <li><Link to="/zion-ai-task-scheduler" className="text-gray-300 hover:text-white transition-colors">AI Task Scheduler</Link></li>
              <li><Link to="/zion-ai-sales-predictor" className="text-gray-300 hover:text-white transition-colors">AI Sales Predictor</Link></li>
            </ul>
          </div>
          
          {/* IT Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">IT Solutions</h4>
            <ul className="space-y-2">
              <li><Link to="/it-services" className="text-gray-300 hover:text-white transition-colors">All IT Services</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-white transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-white transition-colors">Mobile Development</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-white transition-colors">Data Analytics</Link></li>
              <li><Link to="/database-management" className="text-gray-300 hover:text-white transition-colors">Database Management</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Additional Links */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-md font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/team" className="text-gray-300 hover:text-white transition-colors">Our Team</Link></li>
                <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/partnerships" className="text-gray-300 hover:text-white transition-colors">Partnerships</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-md font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/api-docs" className="text-gray-300 hover:text-white transition-colors">API Documentation</Link></li>
                <li><Link to="/help" className="text-gray-300 hover:text-white transition-colors">Help Center</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-md font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
                <Link to="/cookies" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</Link>
                <li><Link to="/accessibility" className="text-gray-300 hover:text-white transition-colors">Accessibility</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-md font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
                <li><a href="https://ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">Website</a></li>
                <li><a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                Terms of Service
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