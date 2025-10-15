import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = memo(() => {
  return (
    <footer className="bg-black/90 backdrop-blur-sm border-t border-cyan-500/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-900/20 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
                ZION TECH GROUP
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Advanced AI and IT Solutions for the modern world. Empowering businesses with cutting-edge technology and intelligent automation.
              </p>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-cyan-400 mb-6 flex items-center">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
              Services
            </h4>
            <ul className="space-y-3">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 group flex items-center">
                <span className="w-1 h-1 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                AI Services
              </Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 group flex items-center">
                <span className="w-1 h-1 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                IT Services
              </Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 group flex items-center">
                <span className="w-1 h-1 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Cloud Infrastructure
              </Link></li>
              <li><Link to="/digital-transformation" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 group flex items-center">
                <span className="w-1 h-1 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Digital Transformation
              </Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 group flex items-center">
                <span className="w-1 h-1 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Data Analytics
              </Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 group flex items-center">
                <span className="w-1 h-1 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Web Development
              </Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 group flex items-center">
                <span className="w-1 h-1 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Mobile Development
              </Link></li>
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 group flex items-center">
                <span className="w-1 h-1 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Micro SaaS Solutions
              </Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-purple-400 mb-6 flex items-center">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
              AI Tools
            </h4>
            <ul className="space-y-3">
              <li><Link to="/zion-ai-content-moderator" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 group flex items-center">
                <span className="w-1 h-1 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Content Moderator
              </Link></li>
              <li><Link to="/zion-ai-customer-churn-predictor" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 group flex items-center">
                <span className="w-1 h-1 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Churn Predictor
              </Link></li>
              <li><Link to="/zion-ai-sales-predictor" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 group flex items-center">
                <span className="w-1 h-1 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Sales Predictor
              </Link></li>
              <li><Link to="/zion-ai-workflow-automator" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 group flex items-center">
                <span className="w-1 h-1 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Workflow Automator
              </Link></li>
              <li><Link to="/zion-ai-financial-forecaster" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 group flex items-center">
                <span className="w-1 h-1 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Financial Forecaster
              </Link></li>
              <li><Link to="/zion-ai-document-analyzer" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 group flex items-center">
                <span className="w-1 h-1 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Document Analyzer
              </Link></li>
              <li><Link to="/zion-ai-task-scheduler" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 group flex items-center">
                <span className="w-1 h-1 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Task Scheduler
              </Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-pink-400 mb-6 flex items-center">
              <span className="w-2 h-2 bg-pink-400 rounded-full mr-2 animate-pulse"></span>
              Company
            </h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 group flex items-center">
                <span className="w-1 h-1 bg-pink-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                About
              </Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 group flex items-center">
                <span className="w-1 h-1 bg-pink-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Team
              </Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 group flex items-center">
                <span className="w-1 h-1 bg-pink-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Careers
              </Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 group flex items-center">
                <span className="w-1 h-1 bg-pink-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Partnerships
              </Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 group flex items-center">
                <span className="w-1 h-1 bg-pink-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Pricing
              </Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 group flex items-center">
                <span className="w-1 h-1 bg-pink-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Case Studies
              </Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-green-400 mb-6 flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Support
            </h4>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors duration-300 group flex items-center">
                <span className="w-1 h-1 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Contact
              </Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-green-400 transition-colors duration-300 group flex items-center">
                <span className="w-1 h-1 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Help
              </Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-green-400 transition-colors duration-300 group flex items-center">
                <span className="w-1 h-1 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                API Docs
              </Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-green-400 transition-colors duration-300 group flex items-center">
                <span className="w-1 h-1 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Blog
              </Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-green-400 transition-colors duration-300 group flex items-center">
                <span className="w-1 h-1 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Privacy
              </Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-green-400 transition-colors duration-300 group flex items-center">
                <span className="w-1 h-1 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Terms
              </Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-center text-gray-300">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="https://ziontechgroup.com" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Website
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Email
              </a>
              <a href="tel:+13024640950" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Phone
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;