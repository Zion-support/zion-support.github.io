import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="hidden lg:block lg:w-64 lg:flex-shrink-0">
      <div className="h-full flex flex-col futuristic-bg border-r border-cyan-500/20">
        <div className="p-4">
          <h2 className="text-lg font-semibold text-white neon-text">Quick Navigation</h2>
        </div>
        <nav className="flex-1 px-4 pb-4 space-y-1 overflow-y-auto">
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">Main Services</h3>
            <Link to="/ai-services" className="block px-3 py-2 text-sm font-medium text-white hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-colors">
              AI Services
            </Link>
            <Link to="/comprehensive-ai-services" className="block px-3 py-2 text-sm font-medium text-white hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-colors">
              Comprehensive AI
            </Link>
            <Link to="/it-services" className="block px-3 py-2 text-sm font-medium text-white hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-colors">
              IT Services
            </Link>
            <Link to="/comprehensive-it-services" className="block px-3 py-2 text-sm font-medium text-white hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-colors">
              Comprehensive IT
            </Link>
            <Link to="/cloud-infrastructure" className="block px-3 py-2 text-sm font-medium text-white hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-colors">
              Cloud Infrastructure
            </Link>
            <Link to="/digital-transformation" className="block px-3 py-2 text-sm font-medium text-white hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-colors">
              Digital Transformation
            </Link>
            <Link to="/data-analytics" className="block px-3 py-2 text-sm font-medium text-white hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-colors">
              Data Analytics
            </Link>
          </div>
          
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">AI Tools</h3>
            <Link to="/ai-chatbot-builder" className="block px-3 py-2 text-sm font-medium text-white hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-colors">
              Chatbot Builder
            </Link>
            <Link to="/ai-form-builder" className="block px-3 py-2 text-sm font-medium text-white hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-colors">
              Form Builder
            </Link>
            <Link to="/ai-video-generator" className="block px-3 py-2 text-sm font-medium text-white hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-colors">
              Video Generator
            </Link>
            <Link to="/zion-ai-content-moderator" className="block px-3 py-2 text-sm font-medium text-white hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-colors">
              Content Moderator
            </Link>
            <Link to="/zion-ai-sales-predictor" className="block px-3 py-2 text-sm font-medium text-white hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-colors">
              Sales Predictor
            </Link>
          </div>
          
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Company</h3>
            <Link to="/about" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              About Us
            </Link>
            <Link to="/team" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Our Team
            </Link>
            <Link to="/careers" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Careers
            </Link>
            <Link to="/pricing" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Pricing
            </Link>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Resources</h3>
            <Link to="/blog" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Blog
            </Link>
            <Link to="/case-studies" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Case Studies
            </Link>
            <Link to="/api-docs" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              API Documentation
            </Link>
            <Link to="/help" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Help Center
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;