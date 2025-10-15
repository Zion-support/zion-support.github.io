import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation.
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="font-semibold">Phone:</span> +1 302 464 0950
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Email:</span> kleber@ziontechgroup.com
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Address:</span><br />
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
          
          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">AI Services</h4>
            <ul className="space-y-3">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-white transition-colors">AI Development</Link></li>
              <li><Link to="/ai-content-generator" className="text-gray-300 hover:text-white transition-colors">AI Content Generator Pro</Link></li>
              <li><Link to="/zion-ai-customer-support-pro" className="text-gray-300 hover:text-white transition-colors">AI Customer Support Pro</Link></li>
              <li><Link to="/zion-ai-sales-predictor" className="text-gray-300 hover:text-white transition-colors">AI Sales Predictor</Link></li>
              <li><Link to="/zion-ai-workflow-automator-pro" className="text-gray-300 hover:text-white transition-colors">Workflow Automator Pro</Link></li>
              <li><Link to="/zion-ai-email-marketing-pro" className="text-gray-300 hover:text-white transition-colors">AI Email Marketing Pro</Link></li>
            </ul>
          </div>
          
          {/* Micro SaaS */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Micro SaaS</h4>
            <ul className="space-y-3">
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-white transition-colors">All Micro SaaS</Link></li>
              <li><Link to="/zion-smart-expense-tracker" className="text-gray-300 hover:text-white transition-colors">Smart Expense Tracker</Link></li>
              <li><Link to="/zion-ai-inventory-optimizer-pro" className="text-gray-300 hover:text-white transition-colors">Inventory Optimizer Pro</Link></li>
              <li><Link to="/zion-ai-social-scheduler-pro" className="text-gray-300 hover:text-white transition-colors">Social Media Scheduler Pro</Link></li>
              <li><Link to="/zion-ai-task-scheduler" className="text-gray-300 hover:text-white transition-colors">AI Task Scheduler</Link></li>
              <li><Link to="/zion-ai-document-analyzer" className="text-gray-300 hover:text-white transition-colors">Document Analyzer</Link></li>
            </ul>
          </div>
          
          {/* IT Solutions & Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">IT Solutions</h4>
            <ul className="space-y-3 mb-6">
              <li><Link to="/it-services" className="text-gray-300 hover:text-white transition-colors">IT Services</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-white transition-colors">Mobile Development</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-white transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-white transition-colors">Data Analytics</Link></li>
              <li><Link to="/5g-solutions" className="text-gray-300 hover:text-white transition-colors">5G Solutions</Link></li>
            </ul>
            
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</Link>
              <Link to="/accessibility" className="text-gray-300 hover:text-white transition-colors">Accessibility</Link>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300 mb-2">
                © 2024 Zion Tech Group. All rights reserved.
              </p>
              <p className="text-sm text-gray-400">
                Website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300 transition-colors">ziontechgroup.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;