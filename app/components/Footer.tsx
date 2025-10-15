import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Zion Tech Group</h3>
                <p className="text-xs text-cyan-300">AI & IT Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Advanced AI and IT Solutions for the modern world. We help businesses transform through cutting-edge technology and innovative solutions.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span>📍</span>
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">AI Services</h4>
            <ul className="space-y-3">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors">All AI Services</Link></li>
              <li><Link to="/ai-content-generator" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Content Generator</Link></li>
              <li><Link to="/ai-translator" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Translator</Link></li>
              <li><Link to="/zion-ai-customer-support-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Customer Support Pro</Link></li>
              <li><Link to="/zion-ai-document-analyzer" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Document Analyzer</Link></li>
              <li><Link to="/zion-ai-sales-predictor" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Sales Predictor</Link></li>
              <li><Link to="/zion-ai-workflow-automator-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Workflow Automator Pro</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">IT Solutions</h4>
            <ul className="space-y-3">
              <li><Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors">All IT Services</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-cyan-400 transition-colors">Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-cyan-400 transition-colors">Mobile Development</Link></li>
              <li><Link to="/database-management" className="text-gray-300 hover:text-cyan-400 transition-colors">Database Management</Link></li>
              <li><Link to="/devops-automation" className="text-gray-300 hover:text-cyan-400 transition-colors">DevOps & Automation</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-cyan-400 transition-colors">Data Analytics</Link></li>
              <li><Link to="/digital-transformation" className="text-gray-300 hover:text-cyan-400 transition-colors">Digital Transformation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors">Careers</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-cyan-400 transition-colors">Partnerships</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
            
            <h4 className="text-lg font-semibold mb-6 text-cyan-400 mt-8">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">Micro SAAS</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">Pricing</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-cyan-400 transition-colors">API Docs</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-cyan-400 transition-colors">Help Center</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-gray-300">
              © 2025 Zion Tech Group. All rights reserved. | <a href="https://ziontechgroup.com" className="hover:text-cyan-400 transition-colors">ziontechgroup.com</a>
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">Website</a>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">Email</a>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">Call</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;