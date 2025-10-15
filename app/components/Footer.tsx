import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 border-t border-cyan-500/20">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 animate-pulse"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered solutions, IT services, and micro SAAS platforms for the future of business. 
              Empowering companies with cutting-edge technology and innovative solutions.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-gray-300">364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Website</a>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Email</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">AI Services</Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">IT Services</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-green-400 transition-colors duration-300">Cloud Infrastructure</Link></li>
              <li><Link to="/digital-transformation" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Digital Transformation</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Data Analytics</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">Mobile Development</Link></li>
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Micro SAAS Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-purple-400">AI Tools</h4>
            <ul className="space-y-3">
              <li><Link to="/zion-ai-content-moderator" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Content Moderator</Link></li>
              <li><Link to="/zion-ai-customer-churn-predictor" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Churn Predictor</Link></li>
              <li><Link to="/zion-ai-sales-predictor" className="text-gray-300 hover:text-green-400 transition-colors duration-300">Sales Predictor</Link></li>
              <li><Link to="/zion-ai-workflow-automator" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Workflow Automator</Link></li>
              <li><Link to="/zion-ai-financial-forecaster" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Financial Forecaster</Link></li>
              <li><Link to="/zion-ai-document-analyzer" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">Document Analyzer</Link></li>
              <li><Link to="/zion-ai-meeting-transcriber" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">Meeting Transcriber</Link></li>
              <li><Link to="/zion-smart-expense-tracker" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Expense Tracker</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">About</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-green-400 transition-colors duration-300">Careers</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Partnerships</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Pricing</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">Case Studies</Link></li>
              <li><Link to="/5g-solutions" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">5G Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-400">Support</h4>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Contact</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Help Center</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-green-400 transition-colors duration-300">API Documentation</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Blog</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">Terms of Service</Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-center text-gray-300">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Privacy</a>
              <a href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">Terms</a>
              <a href="/cookies" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;