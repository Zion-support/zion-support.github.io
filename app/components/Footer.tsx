import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = memo(() => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <h3 className="text-xl font-bold">Zion Tech Group</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Advanced AI and IT Solutions for the modern world. We help businesses transform through cutting-edge technology and intelligent automation.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>📞 +1 302 464 0950</p>
              <p>✉️ kleber@ziontechgroup.com</p>
              <p>🌐 <a href="https://ziontechgroup.com" className="hover:text-white underline">https://ziontechgroup.com</a></p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-medium text-blue-400 mb-2">AI & Machine Learning</h5>
                <ul className="space-y-2">
                  <li><Link to="/ai-services" className="text-gray-300 hover:text-white text-sm">AI Services</Link></li>
                  <li><Link to="/ai-solutions" className="text-gray-300 hover:text-white text-sm">AI Solutions</Link></li>
                  <li><Link to="/data-analytics" className="text-gray-300 hover:text-white text-sm">Data Analytics</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-medium text-blue-400 mb-2">IT Services</h5>
                <ul className="space-y-2">
                  <li><Link to="/it-services" className="text-gray-300 hover:text-white text-sm">IT Services</Link></li>
                  <li><Link to="/web-development" className="text-gray-300 hover:text-white text-sm">Web Development</Link></li>
                  <li><Link to="/mobile-development" className="text-gray-300 hover:text-white text-sm">Mobile Development</Link></li>
                  <li><Link to="/database-management" className="text-gray-300 hover:text-white text-sm">Database Management</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-medium text-blue-400 mb-2">Infrastructure</h5>
                <ul className="space-y-2">
                  <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-white text-sm">Cloud Infrastructure</Link></li>
                  <li><Link to="/5g-solutions" className="text-gray-300 hover:text-white text-sm">5G Solutions</Link></li>
                  <li><Link to="/network-infrastructure" className="text-gray-300 hover:text-white text-sm">Network Infrastructure</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">AI Tools</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-medium text-blue-400 mb-2">Business Intelligence</h5>
                <ul className="space-y-2">
                  <li><Link to="/zion-ai-customer-churn-predictor" className="text-gray-300 hover:text-white text-sm">Churn Predictor</Link></li>
                  <li><Link to="/zion-ai-sales-predictor" className="text-gray-300 hover:text-white text-sm">Sales Predictor</Link></li>
                  <li><Link to="/zion-ai-financial-forecaster" className="text-gray-300 hover:text-white text-sm">Financial Forecaster</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-medium text-blue-400 mb-2">Content & Marketing</h5>
                <ul className="space-y-2">
                  <li><Link to="/zion-ai-content-moderator" className="text-gray-300 hover:text-white text-sm">Content Moderator</Link></li>
                  <li><Link to="/zion-ai-email-marketing-pro" className="text-gray-300 hover:text-white text-sm">Email Marketing Pro</Link></li>
                  <li><Link to="/zion-ai-social-scheduler-pro" className="text-gray-300 hover:text-white text-sm">Social Scheduler Pro</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-medium text-blue-400 mb-2">Operations</h5>
                <ul className="space-y-2">
                  <li><Link to="/zion-ai-workflow-automator" className="text-gray-300 hover:text-white text-sm">Workflow Automator</Link></li>
                  <li><Link to="/zion-ai-task-scheduler" className="text-gray-300 hover:text-white text-sm">Task Scheduler</Link></li>
                  <li><Link to="/zion-smart-expense-tracker" className="text-gray-300 hover:text-white text-sm">Expense Tracker</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white text-sm">About Us</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-white text-sm">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white text-sm">Careers</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-white text-sm">Partnerships</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-white text-sm">Case Studies</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-gray-300 hover:text-white text-sm">Blog</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white text-sm">Pricing</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-white text-sm">API Documentation</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-white text-sm">Help Center</Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-white text-sm">Accessibility</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-gray-300 hover:text-white text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white text-sm">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-white text-sm">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm">
                © 2025 Zion Tech Group. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Advanced AI and IT Solutions | <a href="https://ziontechgroup.com" className="hover:text-white underline">ziontechgroup.com</a>
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;