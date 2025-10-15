import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/90 backdrop-blur-md border-t border-neon-blue/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 via-neon-purple/5 to-neon-green/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
      
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 holographic">ZION TECH GROUP</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Advanced AI and IT Solutions for the modern world. Empowering businesses with cutting-edge technology, 
              innovative micro SAAS solutions, and futuristic digital transformation.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-neon-blue">📞</span>
                <a href="tel:+13024640950" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-neon-purple">✉️</span>
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-neon-green">📍</span>
                <div className="text-gray-300">
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown DE 19709</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 neon-text">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-neon-blue transition-colors duration-300 text-sm">AI Services</Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-neon-blue transition-colors duration-300 text-sm">IT Services</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-neon-blue transition-colors duration-300 text-sm">Cloud Infrastructure</Link></li>
              <li><Link to="/digital-transformation" className="text-gray-300 hover:text-neon-blue transition-colors duration-300 text-sm">Digital Transformation</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-neon-blue transition-colors duration-300 text-sm">Data Analytics</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-neon-blue transition-colors duration-300 text-sm">Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-neon-blue transition-colors duration-300 text-sm">Mobile Development</Link></li>
            </ul>
          </div>
          
          {/* Micro SAAS */}
          <div>
            <h4 className="text-lg font-bold mb-6 neon-text-green">Micro SAAS</h4>
            <ul className="space-y-3">
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-neon-green transition-colors duration-300 text-sm">AI CRM Pro</Link></li>
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-neon-green transition-colors duration-300 text-sm">AI Analytics Suite</Link></li>
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-neon-green transition-colors duration-300 text-sm">AI Marketing Automation</Link></li>
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-neon-green transition-colors duration-300 text-sm">AI HR Management</Link></li>
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-neon-green transition-colors duration-300 text-sm">AI Financial Suite</Link></li>
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-neon-green transition-colors duration-300 text-sm">AI E-commerce Platform</Link></li>
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-neon-green transition-colors duration-300 text-sm">View All Solutions</Link></li>
            </ul>
          </div>
          
          {/* AI Tools */}
          <div>
            <h4 className="text-lg font-bold mb-6 neon-text-purple">AI Tools</h4>
            <ul className="space-y-3">
              <li><Link to="/zion-ai-content-moderator" className="text-gray-300 hover:text-neon-purple transition-colors duration-300 text-sm">Content Moderator</Link></li>
              <li><Link to="/zion-ai-customer-churn-predictor" className="text-gray-300 hover:text-neon-purple transition-colors duration-300 text-sm">Churn Predictor</Link></li>
              <li><Link to="/zion-ai-sales-predictor" className="text-gray-300 hover:text-neon-purple transition-colors duration-300 text-sm">Sales Predictor</Link></li>
              <li><Link to="/zion-ai-workflow-automator" className="text-gray-300 hover:text-neon-purple transition-colors duration-300 text-sm">Workflow Automator</Link></li>
              <li><Link to="/zion-ai-financial-forecaster" className="text-gray-300 hover:text-neon-purple transition-colors duration-300 text-sm">Financial Forecaster</Link></li>
              <li><Link to="/ai-content-generator" className="text-gray-300 hover:text-neon-purple transition-colors duration-300 text-sm">Content Generator</Link></li>
              <li><Link to="/zion-ai-document-analyzer" className="text-gray-300 hover:text-neon-purple transition-colors duration-300 text-sm">Document Analyzer</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6 neon-text-pink">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-neon-pink transition-colors duration-300 text-sm">About Us</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-neon-pink transition-colors duration-300 text-sm">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-neon-pink transition-colors duration-300 text-sm">Careers</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-neon-pink transition-colors duration-300 text-sm">Partnerships</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-neon-pink transition-colors duration-300 text-sm">Pricing</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-neon-pink transition-colors duration-300 text-sm">Case Studies</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-neon-pink transition-colors duration-300 text-sm">Blog</Link></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6 neon-text-orange">Support</h4>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-gray-300 hover:text-neon-orange transition-colors duration-300 text-sm">Contact Us</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-neon-orange transition-colors duration-300 text-sm">Help Center</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-neon-orange transition-colors duration-300 text-sm">API Documentation</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-neon-orange transition-colors duration-300 text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-neon-orange transition-colors duration-300 text-sm">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-neon-orange transition-colors duration-300 text-sm">Cookie Policy</Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-neon-orange transition-colors duration-300 text-sm">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-neon-blue/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm">
                © 2024 Zion Tech Group. All rights reserved. | 
                <a href="https://ziontechgroup.com" className="text-neon-blue hover:text-neon-cyan transition-colors duration-300 ml-1">
                  ziontechgroup.com
                </a>
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="https://ziontechgroup.com" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
                <span className="sr-only">Website</span>
                🌐
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-400 hover:text-neon-purple transition-colors duration-300">
                <span className="sr-only">Email</span>
                ✉️
              </a>
              <a href="tel:+13024640950" className="text-gray-400 hover:text-neon-green transition-colors duration-300">
                <span className="sr-only">Phone</span>
                📞
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;