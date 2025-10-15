import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Advanced AI and IT Solutions for the modern world. We help businesses transform through cutting-edge technology.
            </p>
            <div className="text-sm text-gray-400 mb-4">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Phone: +1 (302) 464-0950</p>
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
            <h4 className="text-md font-semibold mb-4">AI Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-white">AI Services</Link></li>
              <li><Link to="/ai-voice-assistant" className="text-gray-300 hover:text-white">AI Voice Assistant</Link></li>
              <li><Link to="/ai-image-recognition" className="text-gray-300 hover:text-white">AI Image Recognition</Link></li>
              <li><Link to="/ai-predictive-maintenance" className="text-gray-300 hover:text-white">AI Predictive Maintenance</Link></li>
              <li><Link to="/ai-fraud-detection" className="text-gray-300 hover:text-white">AI Fraud Detection</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-white">Data Analytics</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">IT Services</h4>
            <ul className="space-y-2">
              <li><Link to="/it-services" className="text-gray-300 hover:text-white">IT Services</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-white">Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-white">Mobile Development</Link></li>
              <li><Link to="/blockchain-solutions" className="text-gray-300 hover:text-white">Blockchain Solutions</Link></li>
              <li><Link to="/iot-solutions" className="text-gray-300 hover:text-white">IoT Solutions</Link></li>
              <li><Link to="/devops-automation" className="text-gray-300 hover:text-white">DevOps & Automation</Link></li>
              <li><Link to="/api-development" className="text-gray-300 hover:text-white">API Development</Link></li>
              <li><Link to="/security-audit" className="text-gray-300 hover:text-white">Security Audit</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Micro SaaS</h4>
            <ul className="space-y-2">
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-white">Micro SaaS Solutions</Link></li>
              <li><Link to="/ai-chatbot-builder" className="text-gray-300 hover:text-white">AI Chatbot Builder</Link></li>
              <li><Link to="/ai-form-builder" className="text-gray-300 hover:text-white">AI Form Builder</Link></li>
              <li><Link to="/ai-scheduling-assistant" className="text-gray-300 hover:text-white">AI Scheduling Assistant</Link></li>
              <li><Link to="/ai-document-processor" className="text-gray-300 hover:text-white">AI Document Processor</Link></li>
              <li><Link to="/ai-lead-scoring" className="text-gray-300 hover:text-white">AI Lead Scoring</Link></li>
              <li><Link to="/ai-price-optimizer" className="text-gray-300 hover:text-white">AI Price Optimizer</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Infrastructure</h4>
            <ul className="space-y-2">
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-white">Cloud Infrastructure</Link></li>
              <li><Link to="/5g-solutions" className="text-gray-300 hover:text-white">5G Solutions</Link></li>
              <li><Link to="/digital-transformation" className="text-gray-300 hover:text-white">Digital Transformation</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Zion AI Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/zion-ai-content-moderator" className="text-gray-300 hover:text-white">Content Moderator</Link></li>
              <li><Link to="/zion-ai-customer-churn-predictor" className="text-gray-300 hover:text-white">Customer Churn Predictor</Link></li>
              <li><Link to="/zion-ai-customer-support-pro" className="text-gray-300 hover:text-white">Customer Support Pro</Link></li>
              <li><Link to="/zion-ai-document-analyzer" className="text-gray-300 hover:text-white">Document Analyzer</Link></li>
              <li><Link to="/zion-ai-financial-forecaster" className="text-gray-300 hover:text-white">Financial Forecaster</Link></li>
              <li><Link to="/zion-ai-workflow-automator" className="text-gray-300 hover:text-white">Workflow Automator</Link></li>
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