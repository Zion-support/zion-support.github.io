import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = memo(() => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Advanced AI and IT Solutions for the modern world. We help businesses transform through cutting-edge technology.
            </p>
            <div className="text-gray-300 text-sm">
              <p className="mb-1">📧 kleber@ziontechgroup.com</p>
              <p className="mb-1">📞 +1 (302) 464-0950</p>
              <p className="mb-1">📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-white">
                <span className="sr-only">Website</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-white">AI Services</Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-white">IT Services</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-white">Cloud Infrastructure</Link></li>
              <li><Link to="/digital-transformation" className="text-gray-300 hover:text-white">Digital Transformation</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-white">Data Analytics</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-white">Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-white">Mobile Development</Link></li>
              <li><Link to="/database-management" className="text-gray-300 hover:text-white">Database Management</Link></li>
              <li><Link to="/network-infrastructure" className="text-gray-300 hover:text-white">Network Infrastructure</Link></li>
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-white">Micro SaaS Solutions</Link></li>
              <li><Link to="/blockchain-solutions" className="text-gray-300 hover:text-white">Blockchain Solutions</Link></li>
              <li><Link to="/iot-solutions" className="text-gray-300 hover:text-white">IoT Solutions</Link></li>
              <li><Link to="/devops-automation" className="text-gray-300 hover:text-white">DevOps Automation</Link></li>
              <li><Link to="/data-engineering" className="text-gray-300 hover:text-white">Data Engineering</Link></li>
              <li><Link to="/api-development" className="text-gray-300 hover:text-white">API Development</Link></li>
              <li><Link to="/security-audit" className="text-gray-300 hover:text-white">Security Audit</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">AI Tools</h4>
            <ul className="space-y-2">
              <li><Link to="/zion-ai-content-moderator" className="text-gray-300 hover:text-white">Content Moderator</Link></li>
              <li><Link to="/zion-ai-customer-support-pro" className="text-gray-300 hover:text-white">Customer Support Pro</Link></li>
              <li><Link to="/zion-ai-workflow-automator-pro" className="text-gray-300 hover:text-white">Workflow Automator Pro</Link></li>
              <li><Link to="/zion-ai-email-marketing-pro" className="text-gray-300 hover:text-white">Email Marketing Pro</Link></li>
              <li><Link to="/zion-ai-customer-churn-predictor" className="text-gray-300 hover:text-white">Customer Churn Predictor</Link></li>
              <li><Link to="/zion-ai-sales-predictor" className="text-gray-300 hover:text-white">Sales Predictor</Link></li>
              <li><Link to="/zion-ai-financial-forecaster" className="text-gray-300 hover:text-white">Financial Forecaster</Link></li>
              <li><Link to="/zion-ai-document-analyzer" className="text-gray-300 hover:text-white">Document Analyzer</Link></li>
              <li><Link to="/zion-ai-task-scheduler" className="text-gray-300 hover:text-white">Task Scheduler</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">AI Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-chatbot-builder" className="text-gray-300 hover:text-white">AI Chatbot Builder</Link></li>
              <li><Link to="/ai-document-processor" className="text-gray-300 hover:text-white">AI Document Processor</Link></li>
              <li><Link to="/ai-form-builder" className="text-gray-300 hover:text-white">AI Form Builder</Link></li>
              <li><Link to="/ai-voice-assistant" className="text-gray-300 hover:text-white">AI Voice Assistant</Link></li>
              <li><Link to="/ai-fraud-detection" className="text-gray-300 hover:text-white">AI Fraud Detection</Link></li>
              <li><Link to="/ai-image-recognition" className="text-gray-300 hover:text-white">AI Image Recognition</Link></li>
              <li><Link to="/ai-lead-scoring" className="text-gray-300 hover:text-white">AI Lead Scoring</Link></li>
              <li><Link to="/ai-predictive-maintenance" className="text-gray-300 hover:text-white">AI Predictive Maintenance</Link></li>
              <li><Link to="/ai-price-optimizer" className="text-gray-300 hover:text-white">AI Price Optimizer</Link></li>
              <li><Link to="/ai-scheduling-assistant" className="text-gray-300 hover:text-white">AI Scheduling Assistant</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-white">Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white">Careers</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-white">Partnerships</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-white">Case Studies</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-white">API Docs</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-white">Help Center</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-white">Accessibility</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-white">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
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
});

Footer.displayName = 'Footer';

export default Footer;