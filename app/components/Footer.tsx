import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <h3 className="text-xl font-bold">Zion Tech Group</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Advanced AI and IT Solutions for the modern world. Empowering businesses with cutting-edge technology and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">Website</a>
              <a href="mailto:contact@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">Email</a>
              <a href="tel:+15551234567" className="text-gray-300 hover:text-white transition-colors">Phone</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Core Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-white transition-colors">AI Services</Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-white transition-colors">IT Services</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-white transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/digital-transformation" className="text-gray-300 hover:text-white transition-colors">Digital Transformation</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-white transition-colors">Data Analytics</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-white transition-colors">Web Development</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">AI Tools</h4>
            <ul className="space-y-2">
              <li><Link to="/zion-ai-sales-predictor" className="text-gray-300 hover:text-white transition-colors">Sales Predictor</Link></li>
              <li><Link to="/zion-ai-customer-churn-predictor" className="text-gray-300 hover:text-white transition-colors">Churn Predictor</Link></li>
              <li><Link to="/zion-ai-content-moderator" className="text-gray-300 hover:text-white transition-colors">Content Moderator</Link></li>
              <li><Link to="/zion-ai-workflow-automator" className="text-gray-300 hover:text-white transition-colors">Workflow Automator</Link></li>
              <li><Link to="/zion-ai-financial-forecaster" className="text-gray-300 hover:text-white transition-colors">Financial Forecaster</Link></li>
              <li><Link to="/zion-ai-document-analyzer" className="text-gray-300 hover:text-white transition-colors">Document Analyzer</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-white transition-colors">Partnerships</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-white transition-colors">API Documentation</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-white transition-colors">Accessibility</Link></li>
              <li><Link to="/ai-content-generator" className="text-gray-300 hover:text-white transition-colors">AI Content Generator</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href="https://ziontechgroup.com" className="hover:text-white transition-colors"> ziontechgroup.com</a>
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
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