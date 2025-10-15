import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Advanced AI and IT Solutions for the modern world. Empowering businesses with cutting-edge technology, 
              intelligent automation, and innovative micro SaaS solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">+1 302 464 0950</a>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-gray-300">
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown DE 19709</div>
                </div>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
                <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">ziontechgroup.com</a>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-blue-400 transition-colors">AI Services</Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-blue-400 transition-colors">IT Services</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-blue-400 transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/digital-transformation" className="text-gray-300 hover:text-blue-400 transition-colors">Digital Transformation</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-blue-400 transition-colors">Data Analytics</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-blue-400 transition-colors">Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-blue-400 transition-colors">Mobile Development</Link></li>
            </ul>
          </div>
          
          {/* Micro SaaS */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Micro SaaS</h4>
            <ul className="space-y-3">
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-blue-400 transition-colors">All Solutions</Link></li>
              <li><Link to="/zion-task-pro" className="text-gray-300 hover:text-blue-400 transition-colors">Task Management</Link></li>
              <li><Link to="/zion-crm" className="text-gray-300 hover:text-blue-400 transition-colors">CRM System</Link></li>
              <li><Link to="/zion-analytics" className="text-gray-300 hover:text-blue-400 transition-colors">Analytics Platform</Link></li>
              <li><Link to="/zion-hr" className="text-gray-300 hover:text-blue-400 transition-colors">HR Management</Link></li>
              <li><Link to="/zion-finance" className="text-gray-300 hover:text-blue-400 transition-colors">Financial Management</Link></li>
              <li><Link to="/zion-inventory" className="text-gray-300 hover:text-blue-400 transition-colors">Inventory Management</Link></li>
            </ul>
          </div>
          
          {/* AI Tools */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">AI Tools</h4>
            <ul className="space-y-3">
              <li><Link to="/zion-ai-content-moderator" className="text-gray-300 hover:text-blue-400 transition-colors">Content Moderator</Link></li>
              <li><Link to="/zion-ai-customer-churn-predictor" className="text-gray-300 hover:text-blue-400 transition-colors">Churn Predictor</Link></li>
              <li><Link to="/zion-ai-sales-predictor" className="text-gray-300 hover:text-blue-400 transition-colors">Sales Predictor</Link></li>
              <li><Link to="/zion-ai-workflow-automator" className="text-gray-300 hover:text-blue-400 transition-colors">Workflow Automator</Link></li>
              <li><Link to="/zion-ai-financial-forecaster" className="text-gray-300 hover:text-blue-400 transition-colors">Financial Forecaster</Link></li>
              <li><Link to="/zion-ai-email-marketing-pro" className="text-gray-300 hover:text-blue-400 transition-colors">Email Marketing Pro</Link></li>
              <li><Link to="/zion-ai-social-scheduler-pro" className="text-gray-300 hover:text-blue-400 transition-colors">Social Scheduler Pro</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-blue-400 transition-colors">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-blue-400 transition-colors">Partnerships</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-blue-400 transition-colors">Pricing</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-blue-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/5g-solutions" className="text-gray-300 hover:text-blue-400 transition-colors">5G Solutions</Link></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Support</h4>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-blue-400 transition-colors">Help Center</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-blue-400 transition-colors">API Documentation</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-blue-400 transition-colors">Accessibility</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-blue-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href="https://ziontechgroup.com" className="hover:text-white transition-colors ml-1">ziontechgroup.com</a>
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://ziontechgroup.com" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Website</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Email</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="tel:+13024640950" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Phone</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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