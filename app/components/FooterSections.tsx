import React from 'react';
import { Link } from 'react-router-dom';

export const ServicesSection: React.FC = () => (
  <div>
    <h4 className="text-lg font-semibold mb-6 text-gradient holographic-text">Services</h4>
    <ul className="space-y-3">
      <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>AI Services</Link></li>
      <li><Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>IT Services</Link></li>
      <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Cloud Infrastructure</Link></li>
      <li><Link to="/digital-transformation" className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Digital Transformation</Link></li>
      <li><Link to="/data-analytics" className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Data Analytics</Link></li>
      <li><Link to="/web-development" className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Web Development</Link></li>
      <li><Link to="/mobile-development" className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Mobile Development</Link></li>
      <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Micro SaaS Solutions</Link></li>
    </ul>
  </div>
);

export const AIServicesSection: React.FC = () => (
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
      <li><Link to="/ai-crm-optimizer" className="text-gray-300 hover:text-white">AI CRM Optimizer</Link></li>
      <li><Link to="/ai-data-visualizer" className="text-gray-300 hover:text-white">AI Data Visualizer</Link></li>
      <li><Link to="/ai-email-optimizer" className="text-gray-300 hover:text-white">AI Email Optimizer</Link></li>
      <li><Link to="/ai-website-analyzer" className="text-gray-300 hover:text-white">AI Website Analyzer</Link></li>
      <li><Link to="/ai-social-media-manager" className="text-gray-300 hover:text-white">AI Social Media Manager</Link></li>
      <li><Link to="/pricing" className="text-gray-300 hover:text-white">Pricing</Link></li>
    </ul>
  </div>
);

export const ZionAIToolsSection: React.FC = () => (
  <div>
    <h4 className="text-md font-semibold mb-4">Zion AI Tools</h4>
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
      <li><Link to="/zion-ai-translation-service" className="text-gray-300 hover:text-white">Translation Service</Link></li>
      <li><Link to="/zion-ai-video-generator" className="text-gray-300 hover:text-white">Video Generator</Link></li>
    </ul>
  </div>
);

export const CompanySection: React.FC = () => (
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
);

export const ResourcesSection: React.FC = () => (
  <div>
    <h4 className="text-md font-semibold mb-4">Resources</h4>
    <ul className="space-y-2">
      <li><Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
      <li><Link to="/api-docs" className="text-gray-300 hover:text-white">API Docs</Link></li>
      <li><Link to="/help" className="text-gray-300 hover:text-white">Help Center</Link></li>
      <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
      <li><Link to="/accessibility" className="text-gray-300 hover:text-white">Accessibility</Link></li>
      <li><Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
      <li><Link to="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
      <li><Link to="/cookies" className="text-gray-300 hover:text-white">Cookie Policy</Link></li>
    </ul>
  </div>
);
