import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900"></div>
      
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 holographic">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Advanced AI and IT Solutions for the modern world. We help businesses transform through cutting-edge technology and innovative micro SaaS solutions.
            </p>
            <div className="text-sm text-gray-400 mb-6 space-y-2">
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                kleber@ziontechgroup.com
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                +1 302 464 0950
              </p>
              <p className="flex items-start">
                <svg className="w-4 h-4 mr-2 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 p-2 rounded-lg hover:bg-cyan-500/10">
                <span className="sr-only">Website</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">AI & ML Services</h4>
            <ul className="space-y-3">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 block py-1">AI Services</Link></li>
              <li><Link to="/ai-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 block py-1">AI Solutions</Link></li>
              <li><Link to="/ai-content-generator" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 block py-1">AI Content Generator</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 block py-1">Data Analytics</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">IT Services</h4>
            <ul className="space-y-3">
              <li><Link to="/it-services" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 block py-1">IT Services</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 block py-1">Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 block py-1">Mobile Development</Link></li>
              <li><Link to="/database-management" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 block py-1">Database Management</Link></li>
              <li><Link to="/network-infrastructure" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 block py-1">Network Infrastructure</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Infrastructure</h4>
            <ul className="space-y-3">
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-green-400 transition-colors duration-300 block py-1">Cloud Infrastructure</Link></li>
              <li><Link to="/5g-solutions" className="text-gray-300 hover:text-green-400 transition-colors duration-300 block py-1">5G Solutions</Link></li>
              <li><Link to="/digital-transformation" className="text-gray-300 hover:text-green-400 transition-colors duration-300 block py-1">Digital Transformation</Link></li>
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-green-400 transition-colors duration-300 block py-1">Micro SaaS Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">AI Products</h4>
            <ul className="space-y-3">
              <li><Link to="/zion-ai-content-moderator" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 block py-1">AI Content Moderator</Link></li>
              <li><Link to="/zion-ai-customer-support-pro" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 block py-1">AI Customer Support Pro</Link></li>
              <li><Link to="/zion-ai-workflow-automator-pro" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 block py-1">AI Workflow Automator Pro</Link></li>
              <li><Link to="/zion-ai-email-marketing-pro" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 block py-1">AI Email Marketing Pro</Link></li>
              <li><Link to="/zion-ai-customer-churn-predictor" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 block py-1">Customer Churn Predictor</Link></li>
              <li><Link to="/zion-ai-sales-predictor" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 block py-1">Sales Predictor</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 block py-1">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 block py-1">About Us</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 block py-1">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 block py-1">Careers</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 block py-1">Partnerships</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 block py-1">Case Studies</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 block py-1">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 block py-1">Blog</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 block py-1">API Docs</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 block py-1">Help Center</Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 block py-1">Accessibility</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-400">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-gray-300 hover:text-gray-400 transition-colors duration-300 block py-1">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-gray-400 transition-colors duration-300 block py-1">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-gray-400 transition-colors duration-300 block py-1">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-gray-400 mb-4 md:mb-0">
              © 2025 Zion Tech Group. All rights reserved. | <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">ziontechgroup.com</a>
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;