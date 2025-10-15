import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="hidden lg:block lg:w-72 lg:flex-shrink-0">
      <div className="h-full flex flex-col futuristic-card border-r border-gray-700">
        <div className="p-6">
          <h2 className="text-xl font-bold neon-text-purple">Quick Navigation</h2>
        </div>
        <nav className="flex-1 px-6 pb-6 space-y-6 overflow-y-auto">
          <div className="space-y-3">
            <div className="text-sm font-bold neon-text-green uppercase tracking-wider">AI Services</div>
            <Link to="/ai-services" className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-neon-blue hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center">
              <span className="mr-3">🤖</span>AI Development
            </Link>
            <Link to="/ai-content-generator" className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-neon-blue hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center">
              <span className="mr-3">✍️</span>Content Generator
            </Link>
            <Link to="/ai-solutions" className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-neon-blue hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center">
              <span className="mr-3">🎧</span>Customer Support
            </Link>
            <Link to="/data-analytics" className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-neon-blue hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center">
              <span className="mr-3">📊</span>Data Analytics
            </Link>
          </div>
          
          <div className="space-y-3">
            <div className="text-sm font-bold neon-text-pink uppercase tracking-wider">Micro SAAS</div>
            <Link to="/micro-saas-solutions" className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-neon-pink hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center">
              <span className="mr-3">⚡</span>Task Manager Pro
            </Link>
            <Link to="/zion-smart-expense-tracker" className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-neon-pink hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center">
              <span className="mr-3">💰</span>Expense Tracker
            </Link>
            <Link to="/zion-ai-email-marketing-pro" className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-neon-pink hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center">
              <span className="mr-3">📧</span>Email Marketing
            </Link>
            <Link to="/zion-ai-workflow-automator-pro" className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-neon-pink hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center">
              <span className="mr-3">⚡</span>Workflow Automator
            </Link>
            <Link to="/zion-ai-social-scheduler-pro" className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-neon-pink hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center">
              <span className="mr-3">📱</span>Social Scheduler
            </Link>
          </div>
          
          <div className="space-y-3">
            <div className="text-sm font-bold neon-text uppercase tracking-wider">IT Solutions</div>
            <Link to="/cloud-infrastructure" className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-neon-blue hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center">
              <span className="mr-3">☁️</span>Cloud Infrastructure
            </Link>
            <Link to="/web-development" className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-neon-blue hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center">
              <span className="mr-3">🌐</span>Web Development
            </Link>
            <Link to="/mobile-development" className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-neon-blue hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center">
              <span className="mr-3">📱</span>Mobile Development
            </Link>
            <Link to="/network-infrastructure" className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-neon-blue hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center">
              <span className="mr-3">🔒</span>Network Security
            </Link>
            <Link to="/database-management" className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-neon-blue hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center">
              <span className="mr-3">🗄️</span>Database Management
            </Link>
          </div>
          
          <div className="space-y-3">
            <div className="text-sm font-bold neon-text-green uppercase tracking-wider">Company</div>
            <Link to="/about" className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-neon-green hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center">
              <span className="mr-3">🏢</span>About Us
            </Link>
            <Link to="/team" className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-neon-green hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center">
              <span className="mr-3">👥</span>Our Team
            </Link>
            <Link to="/careers" className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-neon-green hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center">
              <span className="mr-3">💼</span>Careers
            </Link>
            <Link to="/partnerships" className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-neon-green hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center">
              <span className="mr-3">🤝</span>Partnerships
            </Link>
          </div>
          
          <div className="space-y-3">
            <div className="text-sm font-bold neon-text-purple uppercase tracking-wider">Resources</div>
            <Link to="/pricing" className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-neon-purple hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center">
              <span className="mr-3">💰</span>Pricing
            </Link>
            <Link to="/blog" className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-neon-purple hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center">
              <span className="mr-3">📝</span>Blog
            </Link>
            <Link to="/case-studies" className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-neon-purple hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center">
              <span className="mr-3">📈</span>Case Studies
            </Link>
            <Link to="/api-docs" className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-neon-purple hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center">
              <span className="mr-3">🔧</span>API Docs
            </Link>
          </div>
          
          <div className="space-y-3">
            <div className="text-sm font-bold neon-text-pink uppercase tracking-wider">Support</div>
            <Link to="/help" className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-neon-pink hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center">
              <span className="mr-3">❓</span>Help Center
            </Link>
            <Link to="/contact" className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-neon-pink hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center">
              <span className="mr-3">📞</span>Contact Us
            </Link>
            <Link to="/accessibility" className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-neon-pink hover:bg-gray-800 rounded-lg transition-all duration-300 flex items-center">
              <span className="mr-3">♿</span>Accessibility
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;