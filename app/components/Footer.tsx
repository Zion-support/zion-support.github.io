import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Zion Tech Group
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of advanced AI and IT solutions for modern businesses. 
              We empower organizations with cutting-edge technology to drive digital transformation and growth.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-cyan-400">📞</span>
                <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-cyan-400">✉️</span>
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-cyan-400">📍</span>
                <span className="text-gray-300">364 E Main St STE 1008<br />Middletown, DE 19709</span>
              </div>
            </div>
          </div>
          
          {/* AI Services */}
          <div>
            <h4 className="text-cyan-400 font-semibold mb-6 text-lg">AI Services</h4>
            <ul className="space-y-3">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Development</Link></li>
              <li><Link to="/ai-content-generator" className="text-gray-300 hover:text-cyan-400 transition-colors">Content Generator Pro</Link></li>
              <li><Link to="/zion-ai-customer-support-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">Customer Support AI</Link></li>
              <li><Link to="/zion-ai-sales-predictor" className="text-gray-300 hover:text-cyan-400 transition-colors">Sales Predictor</Link></li>
              <li><Link to="/zion-ai-financial-forecaster" className="text-gray-300 hover:text-cyan-400 transition-colors">Financial Forecaster</Link></li>
              <li><Link to="/zion-ai-document-analyzer" className="text-gray-300 hover:text-cyan-400 transition-colors">Document Analyzer</Link></li>
            </ul>
          </div>
          
          {/* Micro SaaS */}
          <div>
            <h4 className="text-purple-400 font-semibold mb-6 text-lg">Micro SaaS</h4>
            <ul className="space-y-3">
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-purple-400 transition-colors">All Micro SaaS</Link></li>
              <li><Link to="/zion-ai-task-scheduler" className="text-gray-300 hover:text-purple-400 transition-colors">Task Manager Pro</Link></li>
              <li><Link to="/zion-smart-expense-tracker" className="text-gray-300 hover:text-purple-400 transition-colors">Expense Tracker</Link></li>
              <li><Link to="/zion-ai-workflow-automator-pro" className="text-gray-300 hover:text-purple-400 transition-colors">Workflow Automator</Link></li>
              <li><Link to="/zion-ai-email-marketing-pro" className="text-gray-300 hover:text-purple-400 transition-colors">Email Marketing Pro</Link></li>
              <li><Link to="/zion-ai-social-scheduler-pro" className="text-gray-300 hover:text-purple-400 transition-colors">Social Scheduler Pro</Link></li>
            </ul>
          </div>
          
          {/* IT Solutions */}
          <div>
            <h4 className="text-green-400 font-semibold mb-6 text-lg">IT Solutions</h4>
            <ul className="space-y-3">
              <li><Link to="/it-services" className="text-gray-300 hover:text-green-400 transition-colors">IT Services</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-green-400 transition-colors">Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-green-400 transition-colors">Mobile Development</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-green-400 transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-green-400 transition-colors">Data Analytics</Link></li>
              <li><Link to="/digital-transformation" className="text-gray-300 hover:text-green-400 transition-colors">Digital Transformation</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Additional Links */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-white font-semibold mb-4">Company</h5>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">About Us</Link></li>
                <li><Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Our Team</Link></li>
                <li><Link to="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Careers</Link></li>
                <li><Link to="/partnerships" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Partnerships</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-semibold mb-4">Resources</h5>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Blog</Link></li>
                <li><Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Case Studies</Link></li>
                <li><Link to="/api-docs" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">API Documentation</Link></li>
                <li><Link to="/help" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Help Center</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-semibold mb-4">Legal</h5>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Terms of Service</Link></li>
                <li><Link to="/cookies" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Cookie Policy</Link></li>
                <li><Link to="/accessibility" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Accessibility</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-semibold mb-4">Connect</h5>
              <ul className="space-y-2">
                <li><Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Contact Us</Link></li>
                <li><Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Pricing</Link></li>
                <li><a href="https://ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Website</a></li>
                <li><a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Call Now</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href="https://ziontechgroup.com" className="hover:text-cyan-400 transition-colors ml-1">ziontechgroup.com</a>
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <span className="sr-only">Email</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <span className="sr-only">Phone</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;