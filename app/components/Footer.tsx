import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = memo(() => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Zion Tech Group
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Advanced AI and IT Solutions for the modern world. We help businesses transform through cutting-edge technology and innovative micro SAAS solutions.
            </p>
            <div className="flex space-x-6">
              <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:scale-110 transform">
                <span className="sr-only">Website</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform">
                <span className="sr-only">Email</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 hover:scale-110 transform">
                <span className="sr-only">Phone</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-cyan-400 border-b border-cyan-500/30 pb-2">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform block">AI Services</Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform block">IT Services</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform block">Cloud Infrastructure</Link></li>
              <li><Link to="/digital-transformation" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform block">Digital Transformation</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform block">Data Analytics</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform block">Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform block">Mobile Development</Link></li>
              <li><Link to="/database-management" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform block">Database Management</Link></li>
              <li><Link to="/network-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform block">Network Infrastructure</Link></li>
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform block">Micro SaaS Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-purple-400 border-b border-purple-500/30 pb-2">AI Tools</h4>
            <ul className="space-y-3">
              <li><Link to="/zion-ai-content-moderator" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform block">Content Moderator</Link></li>
              <li><Link to="/zion-ai-customer-support-pro" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform block">Customer Support Pro</Link></li>
              <li><Link to="/zion-ai-workflow-automator-pro" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform block">Workflow Automator Pro</Link></li>
              <li><Link to="/zion-ai-email-marketing-pro" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform block">Email Marketing Pro</Link></li>
              <li><Link to="/zion-ai-customer-churn-predictor" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform block">Customer Churn Predictor</Link></li>
              <li><Link to="/zion-ai-sales-predictor" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform block">Sales Predictor</Link></li>
              <li><Link to="/zion-ai-financial-forecaster" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform block">Financial Forecaster</Link></li>
              <li><Link to="/zion-ai-document-analyzer" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform block">Document Analyzer</Link></li>
              <li><Link to="/zion-ai-task-scheduler" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform block">Task Scheduler</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform block">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-green-400 border-b border-green-500/30 pb-2">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-1 transform block">About</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-1 transform block">Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-1 transform block">Careers</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-1 transform block">Partnerships</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-1 transform block">Case Studies</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-pink-400 border-b border-pink-500/30 pb-2">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 hover:translate-x-1 transform block">Blog</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 hover:translate-x-1 transform block">API Docs</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 hover:translate-x-1 transform block">Help Center</Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 hover:translate-x-1 transform block">Accessibility</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-orange-400 border-b border-orange-500/30 pb-2">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 transform block">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 transform block">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 transform block">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-300 mb-2">
                © 2025 Zion Tech Group. All rights reserved.
              </p>
              <p className="text-sm text-gray-400">
                <a href="https://ziontechgroup.com" className="hover:text-cyan-400 transition-colors duration-300">ziontechgroup.com</a> | 
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-purple-400 transition-colors duration-300 ml-2">kleber@ziontechgroup.com</a> | 
                <a href="tel:+13024640950" className="hover:text-pink-400 transition-colors duration-300 ml-2">+1 302 464 0950</a>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-300 hover:text-purple-400 text-sm transition-colors duration-300">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-300 hover:text-pink-400 text-sm transition-colors duration-300">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;