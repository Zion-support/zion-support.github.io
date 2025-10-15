import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/95 backdrop-blur-md border-t border-gray-700">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 neon-text cyber-font">ZION TECH GROUP</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Advanced AI and IT Solutions for the modern world. We help businesses transform through cutting-edge technology, 
              innovative micro SAAS solutions, and comprehensive digital transformation services.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📞 <span className="text-neon-blue">+1 302 464 0950</span></p>
              <p>✉️ <span className="text-neon-blue">kleber@ziontechgroup.com</span></p>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="https://ziontechgroup.com" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
                <span className="sr-only">Website</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 neon-text-purple">AI Services</h4>
            <ul className="space-y-3">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">AI Development</Link></li>
              <li><Link to="/ai-content-generator" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">AI Content Generator</Link></li>
              <li><Link to="/zion-ai-sales-predictor" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Sales Predictor</Link></li>
              <li><Link to="/zion-ai-workflow-automator" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Workflow Automator</Link></li>
              <li><Link to="/zion-ai-financial-forecaster" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Financial Forecaster</Link></li>
            </ul>
            
            <h4 className="text-lg font-bold mb-6 neon-text-pink mt-8">Micro SAAS</h4>
            <ul className="space-y-3">
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Task Management Pro</Link></li>
              <li><Link to="/zion-smart-expense-tracker" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Smart Expense Tracker</Link></li>
              <li><Link to="/zion-ai-email-marketing-pro" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Email Marketing Pro</Link></li>
              <li><Link to="/zion-ai-social-scheduler-pro" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Social Scheduler Pro</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 neon-text">IT Solutions</h4>
            <ul className="space-y-3">
              <li><Link to="/it-services" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">IT Services</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Cloud Infrastructure</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Mobile Development</Link></li>
              <li><Link to="/cybersecurity" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Cybersecurity</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Data Analytics</Link></li>
              <li><Link to="/digital-transformation" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Digital Transformation</Link></li>
              <li><Link to="/5g-solutions" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">5G Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 neon-text-purple">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">About Us</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Careers</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Partnerships</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Case Studies</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Pricing</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Blog</Link></li>
            </ul>
            
            <h4 className="text-lg font-bold mb-6 neon-text-pink mt-8">Support</h4>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">Contact</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">Help & Support</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">API Documentation</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">Terms of Service</Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 text-center">
              <p className="text-gray-400 text-sm mb-2">
                Built with <span className="neon-text">❤️</span> for the future of technology
              </p>
              <p className="text-xs text-gray-500">
                Transforming businesses through AI and innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;