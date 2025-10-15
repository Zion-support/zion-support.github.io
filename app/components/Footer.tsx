import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="futuristic-card border-0 rounded-none mt-20">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold neon-text mb-6">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Advanced AI and IT Solutions for the modern world. We help businesses transform through cutting-edge technology.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-neon-blue">📞</span>
                <a href="tel:+13024640950" className="text-gray-300 hover:text-neon-blue transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-neon-purple">✉️</span>
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-neon-purple transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-neon-green">📍</span>
                <span className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-neon-pink">🌐</span>
                <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-neon-pink transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold neon-text-purple mb-6">AI Services</h4>
            <ul className="space-y-3">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-neon-blue transition-colors flex items-center"><span className="mr-2">🤖</span>AI Development</Link></li>
              <li><Link to="/ai-content-generator" className="text-gray-300 hover:text-neon-blue transition-colors flex items-center"><span className="mr-2">✍️</span>Content Generator</Link></li>
              <li><Link to="/ai-solutions" className="text-gray-300 hover:text-neon-blue transition-colors flex items-center"><span className="mr-2">🎧</span>Customer Support</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-neon-blue transition-colors flex items-center"><span className="mr-2">📊</span>Data Analytics</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-neon-blue transition-colors flex items-center"><span className="mr-2">💰</span>Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold neon-text-pink mb-6">Micro SAAS</h4>
            <ul className="space-y-3">
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-neon-pink transition-colors flex items-center"><span className="mr-2">⚡</span>Task Manager Pro</Link></li>
              <li><Link to="/zion-smart-expense-tracker" className="text-gray-300 hover:text-neon-pink transition-colors flex items-center"><span className="mr-2">💰</span>Expense Tracker</Link></li>
              <li><Link to="/zion-ai-email-marketing-pro" className="text-gray-300 hover:text-neon-pink transition-colors flex items-center"><span className="mr-2">📧</span>Email Marketing</Link></li>
              <li><Link to="/zion-ai-workflow-automator-pro" className="text-gray-300 hover:text-neon-pink transition-colors flex items-center"><span className="mr-2">⚡</span>Workflow Automator</Link></li>
              <li><Link to="/zion-ai-social-scheduler-pro" className="text-gray-300 hover:text-neon-pink transition-colors flex items-center"><span className="mr-2">📱</span>Social Scheduler</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold neon-text-green mb-6">IT Solutions</h4>
            <ul className="space-y-3">
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-neon-green transition-colors flex items-center"><span className="mr-2">☁️</span>Cloud Infrastructure</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-neon-green transition-colors flex items-center"><span className="mr-2">🌐</span>Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-neon-green transition-colors flex items-center"><span className="mr-2">📱</span>Mobile Development</Link></li>
              <li><Link to="/network-infrastructure" className="text-gray-300 hover:text-neon-green transition-colors flex items-center"><span className="mr-2">🔒</span>Network Security</Link></li>
              <li><Link to="/database-management" className="text-gray-300 hover:text-neon-green transition-colors flex items-center"><span className="mr-2">🗄️</span>Database Management</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-gray-300 mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved. | 
              <span className="ml-2 neon-text-green">Innovating the Future</span>
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <Link to="/privacy" className="text-gray-300 hover:text-neon-blue text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-300 hover:text-neon-purple text-sm transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-300 hover:text-neon-pink text-sm transition-colors">Cookie Policy</Link>
              <Link to="/accessibility" className="text-gray-300 hover:text-neon-green text-sm transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;