import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-gray-800 text-white border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Advanced AI and IT Solutions for the modern world. Empowering businesses with cutting-edge technology and intelligent automation.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-cyan-400">📞</span>
                <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">+1 302 464 0950</a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-cyan-400">✉️</span>
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-cyan-400">📍</span>
                <span className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-cyan-400">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center"><span className="mr-2">🤖</span>AI Services</Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center"><span className="mr-2">💻</span>IT Services</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center"><span className="mr-2">☁️</span>Cloud Infrastructure</Link></li>
              <li><Link to="/digital-transformation" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center"><span className="mr-2">🔄</span>Digital Transformation</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center"><span className="mr-2">📊</span>Data Analytics</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center"><span className="mr-2">🌐</span>Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center"><span className="mr-2">📱</span>Mobile Development</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-purple-400">AI Tools</h4>
            <ul className="space-y-3">
              <li><Link to="/zion-ai-content-moderator" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center"><span className="mr-2">🛡️</span>Content Moderator</Link></li>
              <li><Link to="/zion-ai-customer-churn-predictor" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center"><span className="mr-2">📊</span>Churn Predictor</Link></li>
              <li><Link to="/zion-ai-sales-predictor" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center"><span className="mr-2">💰</span>Sales Predictor</Link></li>
              <li><Link to="/zion-ai-workflow-automator" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center"><span className="mr-2">⚡</span>Workflow Automator</Link></li>
              <li><Link to="/zion-ai-financial-forecaster" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center"><span className="mr-2">📈</span>Financial Forecaster</Link></li>
              <li><Link to="/ai-project-manager" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center"><span className="mr-2">📋</span>AI Project Manager</Link></li>
              <li><Link to="/ai-hr-recruiter" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center"><span className="mr-2">👥</span>AI HR Recruiter</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-green-400">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center"><span className="mr-2">ℹ️</span>About</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center"><span className="mr-2">👥</span>Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center"><span className="mr-2">💼</span>Careers</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center"><span className="mr-2">🤝</span>Partnerships</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center"><span className="mr-2">💰</span>Pricing</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center"><span className="mr-2">📚</span>Case Studies</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-orange-400">Support</h4>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center"><span className="mr-2">📞</span>Contact</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center"><span className="mr-2">❓</span>Help</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center"><span className="mr-2">📖</span>API Docs</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center"><span className="mr-2">📝</span>Blog</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center"><span className="mr-2">🔒</span>Privacy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center"><span className="mr-2">📋</span>Terms</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-gray-400 mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved. | 364 E Main St STE 1008, Middletown DE 19709
            </p>
            <div className="flex space-x-6">
              <a href="https://ziontechgroup.com" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Website</a>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Email</a>
              <a href="tel:+13024640950" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Phone</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;