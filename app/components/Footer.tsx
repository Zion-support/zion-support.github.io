import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/90 backdrop-blur-md border-t border-cyan-400/20">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold neon-text mb-6">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Pioneering the future with cutting-edge AI and IT solutions. 
              We transform businesses through innovative technology and expert implementation.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <div className="text-cyan-400">📞</div>
                <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-cyan-400">✉️</div>
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-cyan-400 mt-1">📍</div>
                <div className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <span className="sr-only">Website</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold neon-text-purple mb-6">AI Services</h4>
            <ul className="space-y-3">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Development</Link></li>
              <li><Link to="/ai-content-generator" className="text-gray-300 hover:text-cyan-400 transition-colors">Content Generator Pro</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-cyan-400 transition-colors">Data Analytics Platform</Link></li>
              <li><Link to="/ai-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Consulting</Link></li>
              <li><Link to="/digital-transformation" className="text-gray-300 hover:text-cyan-400 transition-colors">Digital Transformation</Link></li>
            </ul>
          </div>
          
          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold neon-text-green mb-6">IT Services</h4>
            <ul className="space-y-3">
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-cyan-400 transition-colors">Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-cyan-400 transition-colors">Mobile Development</Link></li>
              <li><Link to="/database-management" className="text-gray-300 hover:text-cyan-400 transition-colors">Database Management</Link></li>
              <li><Link to="/network-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors">Network Infrastructure</Link></li>
            </ul>
          </div>

          {/* Micro SaaS */}
          <div>
            <h4 className="text-lg font-semibold neon-text mb-6">Micro SaaS</h4>
            <ul className="space-y-3">
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">Task Manager Pro</Link></li>
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">Expense Tracker</Link></li>
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">Email Marketing Pro</Link></li>
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">Workflow Automator</Link></li>
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">Inventory Optimizer</Link></li>
            </ul>
          </div>
          
          {/* Company & Resources */}
          <div>
            <h4 className="text-lg font-semibold neon-text-purple mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors">Careers</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">Pricing</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors">Blog</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-cyan-400 transition-colors">Partnerships</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-cyan-400/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-gray-300 mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 ml-1">
                ziontechgroup.com
              </a>
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <Link to="/privacy" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">Cookie Policy</Link>
              <Link to="/accessibility" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;