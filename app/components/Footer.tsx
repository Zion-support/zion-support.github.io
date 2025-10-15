import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <h3 className="text-xl font-bold">Zion Tech Group</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Advanced AI and IT Solutions for the modern world. We help businesses transform through cutting-edge technology and innovative solutions.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p><strong>Phone:</strong> <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 302 464 0950</a></p>
              <p><strong>Email:</strong> <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a></p>
              <p><strong>Address:</strong> 364 E Main St STE 1008<br />Middletown DE 19709</p>
              <p><strong>Website:</strong> <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">https://ziontechgroup.com</a></p>
            </div>
          </div>
          
          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">AI Services</h4>
            <ul className="space-y-3">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-white text-sm transition-colors">AI Services Overview</Link></li>
              <li><Link to="/ai-solutions" className="text-gray-300 hover:text-white text-sm transition-colors">AI Solutions</Link></li>
              <li><Link to="/ai-content-generator" className="text-gray-300 hover:text-white text-sm transition-colors">AI Content Generator</Link></li>
              <li><Link to="/zion-ai-content-moderator" className="text-gray-300 hover:text-white text-sm transition-colors">Content Moderator</Link></li>
              <li><Link to="/zion-ai-customer-churn-predictor" className="text-gray-300 hover:text-white text-sm transition-colors">Churn Predictor</Link></li>
              <li><Link to="/zion-ai-workflow-automator" className="text-gray-300 hover:text-white text-sm transition-colors">Workflow Automator</Link></li>
            </ul>
          </div>
          
          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">IT Services</h4>
            <ul className="space-y-3">
              <li><Link to="/it-services" className="text-gray-300 hover:text-white text-sm transition-colors">IT Services Overview</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-white text-sm transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-white text-sm transition-colors">Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-white text-sm transition-colors">Mobile Development</Link></li>
              <li><Link to="/database-management" className="text-gray-300 hover:text-white text-sm transition-colors">Database Management</Link></li>
              <li><Link to="/network-infrastructure" className="text-gray-300 hover:text-white text-sm transition-colors">Network Infrastructure</Link></li>
            </ul>
          </div>
          
          {/* Micro SaaS Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Micro SaaS</h4>
            <ul className="space-y-3">
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-white text-sm transition-colors">All Solutions</Link></li>
              <li><Link to="/zion-smart-expense-tracker" className="text-gray-300 hover:text-white text-sm transition-colors">Expense Tracker</Link></li>
              <li><Link to="/zion-ai-email-marketing-pro" className="text-gray-300 hover:text-white text-sm transition-colors">Email Marketing Pro</Link></li>
              <li><Link to="/zion-ai-social-scheduler-pro" className="text-gray-300 hover:text-white text-sm transition-colors">Social Scheduler Pro</Link></li>
              <li><Link to="/zion-ai-financial-forecaster" className="text-gray-300 hover:text-white text-sm transition-colors">Financial Forecaster</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-white text-sm transition-colors">Data Analytics</Link></li>
            </ul>
          </div>
          
          {/* Company & Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-white text-sm transition-colors">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white text-sm transition-colors">Careers</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-white text-sm transition-colors">Partnerships</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-white text-sm transition-colors">Case Studies</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white text-sm transition-colors">Pricing</Link></li>
            </ul>
            
            <h4 className="text-lg font-semibold mb-4 mt-8">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-gray-300 hover:text-white text-sm transition-colors">Blog</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-white text-sm transition-colors">API Documentation</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-white text-sm transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">Contact Us</Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-white text-sm transition-colors">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 lg:mb-0">
              <p className="text-gray-300 text-sm">
                © 2024 Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link to="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">Terms of Service</Link>
                <Link to="/cookies" className="text-gray-300 hover:text-white text-sm transition-colors">Cookie Policy</Link>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Website</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Email</span>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Phone</span>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;