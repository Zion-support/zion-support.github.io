import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = memo(() => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="cyber-grid absolute inset-0 opacity-20"></div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 gradient-text">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Advanced AI and IT Solutions for the modern world. We help businesses transform through cutting-edge technology.
            </p>
            <div className="mb-4">
              <p className="text-neon-cyan font-semibold">Contact Information</p>
              <p className="text-gray-300">Mobile: +1 302 464 0950</p>
              <p className="text-gray-300">Email: kleber@ziontechgroup.com</p>
              <p className="text-gray-300">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-white">
                <span className="sr-only">Website</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4 neon-text-cyan">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-neon-cyan transition-all duration-300">AI Services</Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-neon-cyan transition-all duration-300">IT Services</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-neon-cyan transition-all duration-300">Cloud Infrastructure</Link></li>
              <li><Link to="/digital-transformation" className="text-gray-300 hover:text-neon-cyan transition-all duration-300">Digital Transformation</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-neon-cyan transition-all duration-300">Data Analytics</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-neon-cyan transition-all duration-300">Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-neon-cyan transition-all duration-300">Mobile Development</Link></li>
              <li><Link to="/database-management" className="text-gray-300 hover:text-neon-cyan transition-all duration-300">Database Management</Link></li>
              <li><Link to="/network-infrastructure" className="text-gray-300 hover:text-neon-cyan transition-all duration-300">Network Infrastructure</Link></li>
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-neon-cyan transition-all duration-300">Micro SaaS Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4 neon-text-purple">AI Tools</h4>
            <ul className="space-y-2">
              <li><Link to="/zion-ai-content-moderator" className="text-gray-300 hover:text-neon-purple transition-all duration-300">Content Moderator</Link></li>
              <li><Link to="/zion-ai-customer-support-pro" className="text-gray-300 hover:text-neon-purple transition-all duration-300">Customer Support Pro</Link></li>
              <li><Link to="/zion-ai-workflow-automator-pro" className="text-gray-300 hover:text-neon-purple transition-all duration-300">Workflow Automator Pro</Link></li>
              <li><Link to="/zion-ai-email-marketing-pro" className="text-gray-300 hover:text-neon-purple transition-all duration-300">Email Marketing Pro</Link></li>
              <li><Link to="/zion-ai-customer-churn-predictor" className="text-gray-300 hover:text-neon-purple transition-all duration-300">Customer Churn Predictor</Link></li>
              <li><Link to="/zion-ai-sales-predictor" className="text-gray-300 hover:text-neon-purple transition-all duration-300">Sales Predictor</Link></li>
              <li><Link to="/zion-ai-financial-forecaster" className="text-gray-300 hover:text-neon-purple transition-all duration-300">Financial Forecaster</Link></li>
              <li><Link to="/zion-ai-document-analyzer" className="text-gray-300 hover:text-neon-purple transition-all duration-300">Document Analyzer</Link></li>
              <li><Link to="/zion-ai-task-scheduler" className="text-gray-300 hover:text-neon-purple transition-all duration-300">Task Scheduler</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-neon-purple transition-all duration-300">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4 neon-text-pink">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-neon-pink transition-all duration-300">About</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-neon-pink transition-all duration-300">Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-neon-pink transition-all duration-300">Careers</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-neon-pink transition-all duration-300">Partnerships</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-neon-pink transition-all duration-300">Case Studies</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4 neon-text-green">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-300 hover:text-neon-green transition-all duration-300">Blog</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-neon-green transition-all duration-300">API Docs</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-neon-green transition-all duration-300">Help Center</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-neon-green transition-all duration-300">Contact</Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-neon-green transition-all duration-300">Accessibility</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-neon-green transition-all duration-300">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-neon-green transition-all duration-300">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-neon-green transition-all duration-300">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-gray-300">
              © 2025 Zion Tech Group. All rights reserved. | <a href="https://ziontechgroup.com" className="neon-text-cyan hover:glow-text transition-all duration-300">ziontechgroup.com</a>
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-300 hover:text-neon-cyan text-sm transition-all duration-300">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-300 hover:text-neon-cyan text-sm transition-all duration-300">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;