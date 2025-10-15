import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="hidden lg:block lg:w-64 lg:flex-shrink-0">
      <div className="h-full flex flex-col glass-effect border-r border-cyan-500/20 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-500 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="p-4 relative z-10">
          <h2 className="text-lg font-semibold gradient-text">Quick Navigation</h2>
        </div>
        <nav className="flex-1 px-4 pb-4 space-y-1 relative z-10">
          <div className="space-y-1">
            <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">AI & ML Services</div>
            <Link to="/ai-services" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              AI Services
            </Link>
            <Link to="/ai-solutions" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              AI Solutions
            </Link>
            <Link to="/ai-content-generator" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              AI Content Generator
            </Link>
            <Link to="/data-analytics" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              Data Analytics
            </Link>
          </div>
          
          <div className="space-y-1 mt-6">
            <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">IT Services</div>
            <Link to="/it-services" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              IT Services
            </Link>
            <Link to="/web-development" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              Web Development
            </Link>
            <Link to="/mobile-development" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              Mobile Development
            </Link>
            <Link to="/database-management" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              Database Management
            </Link>
            <Link to="/network-infrastructure" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              Network Infrastructure
            </Link>
          </div>
          
          <div className="space-y-1 mt-6">
            <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Infrastructure</div>
            <Link to="/cloud-infrastructure" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              Cloud Infrastructure
            </Link>
            <Link to="/5g-solutions" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              5G Solutions
            </Link>
            <Link to="/digital-transformation" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              Digital Transformation
            </Link>
            <Link to="/micro-saas-solutions" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              Micro SaaS Solutions
            </Link>
          </div>
          
          <div className="space-y-1 mt-6">
            <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Micro SaaS Tools</div>
            <Link to="/zion-ai-chatbot-builder" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              AI Chatbot Builder
            </Link>
            <Link to="/zion-ai-form-builder" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              AI Form Builder
            </Link>
            <Link to="/zion-ai-document-processor" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              AI Document Processor
            </Link>
            <Link to="/zion-ai-scheduling-assistant" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              AI Scheduling Assistant
            </Link>
            <Link to="/zion-ai-social-media-manager" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              AI Social Media Manager
            </Link>
            <Link to="/zion-ai-crm-optimizer" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              AI CRM Optimizer
            </Link>
          </div>
          
          <div className="mb-4">
            <h3 className="text-sm font-medium text-cyan-400 uppercase tracking-wider mb-2">Company</h3>
            <Link to="/about" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              About Us
            </Link>
            <Link to="/team" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              Our Team
            </Link>
            <Link to="/careers" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              Careers
            </Link>
            <Link to="/partnerships" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              Partnerships
            </Link>
          </div>
          
          <div className="mb-4">
            <h3 className="text-sm font-medium text-cyan-400 uppercase tracking-wider mb-2">AI Tools</h3>
            <Link to="/zion-ai-content-moderator" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              AI Content Moderator
            </Link>
            <Link to="/zion-ai-customer-churn-predictor" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              Customer Churn Predictor
            </Link>
            <Link to="/zion-ai-customer-sentiment-tracker" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              Customer Sentiment Tracker
            </Link>
            <Link to="/zion-ai-document-analyzer" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              Document Analyzer
            </Link>
            <Link to="/zion-ai-financial-forecaster" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              Financial Forecaster
            </Link>
            <Link to="/zion-ai-sales-predictor" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              Sales Predictor
            </Link>
            <Link to="/zion-ai-workflow-automator" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              Workflow Automator
            </Link>
          </div>
          
          <div className="mb-4">
            <h3 className="text-sm font-medium text-cyan-400 uppercase tracking-wider mb-2">Resources</h3>
            <Link to="/blog" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              Blog
            </Link>
            <Link to="/case-studies" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              Case Studies
            </Link>
            <Link to="/pricing" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              Pricing
            </Link>
            <Link to="/api-docs" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              API Docs
            </Link>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-cyan-400 uppercase tracking-wider mb-2">Support</h3>
            <Link to="/contact" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              Contact
            </Link>
            <Link to="/help" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              Help Center
            </Link>
            <Link to="/accessibility" className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300">
              Accessibility
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;