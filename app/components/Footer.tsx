import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Zion Tech Group
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Advanced AI and IT Solutions for the modern world. We help businesses transform through cutting-edge technology, 
              intelligent automation, and innovative micro SaaS solutions.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <span className="mr-3">📞</span>
                <a href="tel:+13024640950" className="text-gray-300 hover:text-purple-300 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-3">✉️</span>
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-purple-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start">
                <span className="mr-3 mt-1">📍</span>
                <div className="text-gray-300">
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown, DE 19709</div>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-purple-300 transition-colors">
                <span className="sr-only">Website</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-purple-300">Core Services</h4>
            <ul className="space-y-3">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-purple-300 transition-colors">🤖 AI Services</Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-purple-300 transition-colors">💻 IT Services</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-purple-300 transition-colors">☁️ Cloud Infrastructure</Link></li>
              <li><Link to="/5g-solutions" className="text-gray-300 hover:text-purple-300 transition-colors">📡 5G Solutions</Link></li>
              <li><Link to="/digital-transformation" className="text-gray-300 hover:text-purple-300 transition-colors">🔄 Digital Transformation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-purple-300">Micro SaaS</h4>
            <ul className="space-y-3">
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-purple-300 transition-colors">🚀 All Micro SaaS</Link></li>
              <li><Link to="/zion-ai-content-moderator" className="text-gray-300 hover:text-purple-300 transition-colors">🛡️ Content Moderator</Link></li>
              <li><Link to="/zion-ai-customer-churn-predictor" className="text-gray-300 hover:text-purple-300 transition-colors">📊 Churn Predictor</Link></li>
              <li><Link to="/zion-ai-email-marketing-pro" className="text-gray-300 hover:text-purple-300 transition-colors">📧 Email Marketing Pro</Link></li>
              <li><Link to="/zion-ai-workflow-automator-pro" className="text-gray-300 hover:text-purple-300 transition-colors">⚡ Workflow Automator</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-purple-300">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-purple-300 transition-colors">About</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-purple-300 transition-colors">Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-purple-300 transition-colors">Careers</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-purple-300 transition-colors">Partnerships</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-purple-300 transition-colors">Case Studies</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-purple-300">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-gray-300 hover:text-purple-300 transition-colors">Blog</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-purple-300 transition-colors">API Docs</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-purple-300 transition-colors">Help</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-purple-300 transition-colors">Pricing</Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-purple-300 transition-colors">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-gray-300 mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <Link to="/privacy" className="text-gray-300 hover:text-purple-300 text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-300 hover:text-purple-300 text-sm transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-300 hover:text-purple-300 text-sm transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;