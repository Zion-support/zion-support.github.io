import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="glass-dark border-t border-white/20">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold neon-glow-cyan mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of advanced AI and IT solutions for the modern world. 
              Empowering businesses with cutting-edge technology and innovative solutions.
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="text-cyan-400">📞</span> +1 302 464 0950
              </p>
              <p className="text-gray-300">
                <span className="text-cyan-400">✉️</span> kleber@ziontechgroup.com
              </p>
              <p className="text-gray-300">
                <span className="text-cyan-400">📍</span> 364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
          
          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold text-cyan-400 mb-4">AI Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">All AI Services</Link></li>
              <li><Link to="/zion-ai-content-moderator" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Content Moderator</Link></li>
              <li><Link to="/zion-ai-customer-support-pro" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Customer Support Pro</Link></li>
              <li><Link to="/zion-ai-document-analyzer" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Document Analyzer</Link></li>
              <li><Link to="/zion-ai-financial-forecaster" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Financial Forecaster</Link></li>
              <li><Link to="/zion-ai-sales-predictor" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Sales Predictor</Link></li>
            </ul>
          </div>
          
          {/* Micro SaaS */}
          <div>
            <h4 className="text-lg font-semibold text-purple-400 mb-4">Micro SaaS</h4>
            <ul className="space-y-2">
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">All Micro SaaS</Link></li>
              <li><Link to="/zion-smart-expense-tracker" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Smart Expense Tracker</Link></li>
              <li><Link to="/zion-customer-satisfaction-monitor" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Satisfaction Monitor</Link></li>
              <li><Link to="/zion-ai-task-scheduler" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">AI Task Scheduler</Link></li>
              <li><Link to="/zion-ai-workflow-automator" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Workflow Automator</Link></li>
              <li><Link to="/zion-ai-email-marketing-pro" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Email Marketing Pro</Link></li>
            </ul>
          </div>
          
          {/* IT Solutions */}
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-4">IT Solutions</h4>
            <ul className="space-y-2">
              <li><Link to="/it-services" className="text-gray-300 hover:text-green-400 transition-colors duration-300">All IT Services</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-green-400 transition-colors duration-300">Cloud Infrastructure</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-green-400 transition-colors duration-300">Data Analytics</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-green-400 transition-colors duration-300">Mobile Development</Link></li>
              <li><Link to="/network-infrastructure" className="text-gray-300 hover:text-green-400 transition-colors duration-300">Network Infrastructure</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-green-400 transition-colors duration-300">Web Development</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Additional Links */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-yellow-400 mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">About Us</Link></li>
                <li><Link to="/team" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Our Team</Link></li>
                <li><Link to="/careers" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Careers</Link></li>
                <li><Link to="/partnerships" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Partnerships</Link></li>
                <li><Link to="/case-studies" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Case Studies</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-pink-400 mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">Blog</Link></li>
                <li><Link to="/api-docs" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">API Documentation</Link></li>
                <li><Link to="/help" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">Help Center</Link></li>
                <li><Link to="/accessibility" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">Accessibility</Link></li>
                <li><Link to="/5g-solutions" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">5G Solutions</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-orange-400 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Terms of Service</Link></li>
                <li><Link to="/cookies" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Cookie Policy</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Contact Us</Link></li>
                <li><Link to="/pricing" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Pricing</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-center md:text-left">
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 ml-1">ziontechgroup.com</a>
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                LinkedIn
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Twitter
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;