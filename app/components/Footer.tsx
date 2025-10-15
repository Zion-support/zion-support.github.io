import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="futuristic-card bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 neon-text">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Advanced AI and IT Solutions for the modern world. We help businesses transform through cutting-edge technology.
            </p>
            <div className="text-sm text-gray-400 mb-4">
              <p className="hover:text-cyan-400 transition-colors duration-300">Email: kleber@ziontechgroup.com</p>
              <p className="hover:text-cyan-400 transition-colors duration-300">Phone: +1 302 464 0950</p>
              <p className="hover:text-cyan-400 transition-colors duration-300">Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
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
            <h4 className="text-md font-semibold mb-4 neon-text-purple">Core Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">All Services</Link></li>
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">AI Services</Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">IT Services</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Cloud Infrastructure</Link></li>
              <li><Link to="/5g-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">5G Solutions</Link></li>
              <li><Link to="/digital-transformation" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Digital Transformation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4 neon-text-green">AI Products</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-content-generator" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">AI Content Generator</Link></li>
              <li><Link to="/zion-ai-customer-support-pro" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">AI Customer Support Pro</Link></li>
              <li><Link to="/zion-ai-workflow-automator-pro" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">AI Workflow Automator Pro</Link></li>
              <li><Link to="/zion-ai-email-marketing-pro" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">AI Email Marketing Pro</Link></li>
              <li><Link to="/zion-ai-chatbot-pro" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">AI Chatbot Pro</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-white">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white">Careers</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-white">Partnerships</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-white">Case Studies</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-white">API Docs</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-white">Help Center</Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-white">Accessibility</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-white">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-gray-300">
              © 2025 Zion Tech Group. All rights reserved. | <a href="https://ziontechgroup.com" className="hover:text-white">ziontechgroup.com</a>
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-300 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-300 hover:text-white text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;