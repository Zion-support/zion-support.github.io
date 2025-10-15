import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = memo(() => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <h3 className="text-lg font-semibold">Zion Tech Group</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Advanced AI and IT Solutions for the modern world. We help businesses transform through cutting-edge technology and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Website</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Email</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Phone</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Core Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-white transition-colors">AI Services</Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-white transition-colors">IT Services</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-white transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/digital-transformation" className="text-gray-300 hover:text-white transition-colors">Digital Transformation</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-white transition-colors">Data Analytics</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-white transition-colors">Mobile Development</Link></li>
              <li><Link to="/5g-solutions" className="text-gray-300 hover:text-white transition-colors">5G Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">AI Tools</h4>
            <ul className="space-y-2">
              <li><Link to="/zion-ai-content-moderator" className="text-gray-300 hover:text-white transition-colors">Content Moderator</Link></li>
              <li><Link to="/zion-ai-customer-churn-predictor" className="text-gray-300 hover:text-white transition-colors">Churn Predictor</Link></li>
              <li><Link to="/zion-ai-sales-predictor" className="text-gray-300 hover:text-white transition-colors">Sales Predictor</Link></li>
              <li><Link to="/zion-ai-workflow-automator" className="text-gray-300 hover:text-white transition-colors">Workflow Automator</Link></li>
              <li><Link to="/zion-ai-financial-forecaster" className="text-gray-300 hover:text-white transition-colors">Financial Forecaster</Link></li>
              <li><Link to="/zion-ai-document-analyzer" className="text-gray-300 hover:text-white transition-colors">Document Analyzer</Link></li>
              <li><Link to="/zion-ai-task-scheduler" className="text-gray-300 hover:text-white transition-colors">Task Scheduler</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-white transition-colors">Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-white transition-colors">Partnerships</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-white transition-colors">API Docs</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-white transition-colors">Accessibility</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</Link></li>
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