import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import NeonButton from './NeonButton';

const Footer: React.FC = memo(() => {
  return (
    <footer className="bg-gray-900/95 backdrop-blur-sm border-t border-cyan-500/20 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Zion Tech Group
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Advanced AI and IT Solutions for the modern world. We help businesses transform through cutting-edge technology and innovative micro SaaS solutions.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            <NeonButton to="/contact" variant="primary" size="sm">
              Get Started Today
            </NeonButton>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-cyan-400 mb-4">AI & IT Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Services</Link></li>
              <li><Link to="/ai-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Solutions</Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors">IT Services</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/digital-transformation" className="text-gray-300 hover:text-cyan-400 transition-colors">Digital Transformation</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-cyan-400 transition-colors">Data Analytics</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-cyan-400 transition-colors">Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-cyan-400 transition-colors">Mobile Development</Link></li>
              <li><Link to="/database-management" className="text-gray-300 hover:text-cyan-400 transition-colors">Database Management</Link></li>
              <li><Link to="/network-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors">Network Infrastructure</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-purple-400 mb-4">Micro SaaS Solutions</h4>
            <ul className="space-y-2">
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-purple-400 transition-colors">All Micro SaaS</Link></li>
              <li><Link to="/zion-ai-content-moderator" className="text-gray-300 hover:text-purple-400 transition-colors">Content Moderator</Link></li>
              <li><Link to="/zion-ai-customer-support-pro" className="text-gray-300 hover:text-purple-400 transition-colors">Customer Support Pro</Link></li>
              <li><Link to="/zion-ai-workflow-automator-pro" className="text-gray-300 hover:text-purple-400 transition-colors">Workflow Automator Pro</Link></li>
              <li><Link to="/zion-ai-email-marketing-pro" className="text-gray-300 hover:text-purple-400 transition-colors">Email Marketing Pro</Link></li>
              <li><Link to="/zion-ai-customer-churn-predictor" className="text-gray-300 hover:text-purple-400 transition-colors">Customer Churn Predictor</Link></li>
              <li><Link to="/zion-ai-sales-predictor" className="text-gray-300 hover:text-purple-400 transition-colors">Sales Predictor</Link></li>
              <li><Link to="/zion-ai-financial-forecaster" className="text-gray-300 hover:text-purple-400 transition-colors">Financial Forecaster</Link></li>
              <li><Link to="/zion-ai-document-analyzer" className="text-gray-300 hover:text-purple-400 transition-colors">Document Analyzer</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-purple-400 transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-green-400 transition-colors">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-green-400 transition-colors">Careers</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-green-400 transition-colors">Partnerships</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-green-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-green-400 transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-pink-400 mb-4">Support & Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-300 hover:text-pink-400 transition-colors">Help Center</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-pink-400 transition-colors">API Documentation</Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-pink-400 transition-colors">Accessibility</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-pink-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-pink-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-pink-400 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-gray-300">
              © 2025 Zion Tech Group. All rights reserved. | 
              <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors ml-1">
                ziontechgroup.com
              </a>
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Privacy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Terms</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;