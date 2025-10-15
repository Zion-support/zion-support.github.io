import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = memo(() => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Zion Tech Group
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Pioneering the future with advanced AI and IT solutions. We help businesses transform through cutting-edge technology, 
              innovative micro SaaS platforms, and intelligent automation systems.
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2 text-cyan-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-semibold">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-semibold">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2 text-pink-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-semibold">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-cyan-400 mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                AI Services
              </Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                IT Services
              </Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Cloud Infrastructure
              </Link></li>
              <li><Link to="/digital-transformation" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Digital Transformation
              </Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Data Analytics
              </Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Web Development
              </Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Mobile Development
              </Link></li>
              <li><Link to="/database-management" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Database Management
              </Link></li>
              <li><Link to="/network-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Network Infrastructure
              </Link></li>
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Micro SaaS Solutions
              </Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-purple-400 mb-6">AI Tools</h4>
            <ul className="space-y-3">
              <li><Link to="/zion-ai-content-moderator" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Content Moderator
              </Link></li>
              <li><Link to="/zion-ai-customer-support-pro" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Customer Support Pro
              </Link></li>
              <li><Link to="/zion-ai-workflow-automator-pro" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Workflow Automator Pro
              </Link></li>
              <li><Link to="/zion-ai-email-marketing-pro" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Email Marketing Pro
              </Link></li>
              <li><Link to="/zion-ai-customer-churn-predictor" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Customer Churn Predictor
              </Link></li>
              <li><Link to="/zion-ai-sales-predictor" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Sales Predictor
              </Link></li>
              <li><Link to="/zion-ai-financial-forecaster" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Financial Forecaster
              </Link></li>
              <li><Link to="/zion-ai-document-analyzer" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Document Analyzer
              </Link></li>
              <li><Link to="/zion-ai-task-scheduler" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Task Scheduler
              </Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Pricing
              </Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-pink-400 mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                About
              </Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Team
              </Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Careers
              </Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Partnerships
              </Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Case Studies
              </Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-green-400 mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Blog
              </Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                API Docs
              </Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Help Center
              </Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Contact
              </Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Accessibility
              </Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Privacy Policy
              </Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Terms of Service
              </Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Cookie Policy
              </Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-gray-300 mb-4 md:mb-0">
              © 2025 Zion Tech Group. All rights reserved. | 
              <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 ml-1">
                ziontechgroup.com
              </a>
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors duration-300">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;