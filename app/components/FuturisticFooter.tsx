import React from 'react';
import { Link } from 'react-router-dom';

const FuturisticFooter: React.FC = () => {
  return (
    <footer className="relative mt-20">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent"></div>
      
      <div className="relative z-10 dark-glass-card mx-4 mb-4">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold gradient-text mb-6">Zion Tech Group</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Advanced AI and IT Solutions for the modern world. We help businesses transform through cutting-edge technology, 
                innovative solutions, and expert guidance.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-neon-blue/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">+1 (302) 464-0950</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-neon-purple/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">kleber@ziontechgroup.com</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-neon-green/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">364 E Main St STE 1008<br />Middletown, DE 19709</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="https://linkedin.com/company/ziontechgroup" className="w-10 h-10 bg-neon-blue/20 rounded-full flex items-center justify-center hover:bg-neon-blue/30 transition-all duration-300 group">
                  <svg className="w-5 h-5 text-neon-blue group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/ziontechgroup" className="w-10 h-10 bg-neon-purple/20 rounded-full flex items-center justify-center hover:bg-neon-purple/30 transition-all duration-300 group">
                  <svg className="w-5 h-5 text-neon-purple group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="https://github.com/ziontechgroup" className="w-10 h-10 bg-neon-green/20 rounded-full flex items-center justify-center hover:bg-neon-green/30 transition-all duration-300 group">
                  <svg className="w-5 h-5 text-neon-green group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                <li><Link to="/services" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">All Services</Link></li>
                <li><Link to="/ai-services" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">AI Services</Link></li>
                <li><Link to="/it-services" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">IT Services</Link></li>
                <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Cloud Infrastructure</Link></li>
                <li><Link to="/5g-solutions" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">5G Solutions</Link></li>
                <li><Link to="/digital-transformation" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Digital Transformation</Link></li>
                <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Micro SaaS Solutions</Link></li>
                <li><Link to="/pricing" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Pricing</Link></li>
              </ul>
            </div>
            
            {/* Zion AI Products */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Zion AI Products</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/zion-ai-content-moderator" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Content Moderator</Link></li>
                <li><Link to="/zion-ai-customer-churn-predictor" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Customer Churn Predictor</Link></li>
                <li><Link to="/zion-ai-customer-support-pro" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Customer Support Pro</Link></li>
                <li><Link to="/zion-ai-document-analyzer" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Document Analyzer</Link></li>
                <li><Link to="/zion-ai-financial-forecaster" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Financial Forecaster</Link></li>
                <li><Link to="/zion-ai-workflow-automator" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Workflow Automator</Link></li>
                <li><Link to="/zion-smart-expense-tracker" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Smart Expense Tracker</Link></li>
                <li><Link to="/services" className="text-neon-blue hover:text-white transition-colors duration-300 font-medium">View All Products →</Link></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-300 hover:text-neon-green transition-colors duration-300">About Us</Link></li>
                <li><Link to="/team" className="text-gray-300 hover:text-neon-green transition-colors duration-300">Our Team</Link></li>
                <li><Link to="/careers" className="text-gray-300 hover:text-neon-green transition-colors duration-300">Careers</Link></li>
                <li><Link to="/partnerships" className="text-gray-300 hover:text-neon-green transition-colors duration-300">Partnerships</Link></li>
                <li><Link to="/case-studies" className="text-gray-300 hover:text-neon-green transition-colors duration-300">Case Studies</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-neon-green transition-colors duration-300">Contact</Link></li>
              </ul>
            </div>
            
            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
              <ul className="space-y-3">
                <li><Link to="/blog" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">Blog</Link></li>
                <li><Link to="/api-docs" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">API Docs</Link></li>
                <li><Link to="/help" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">Help Center</Link></li>
                <li><Link to="/accessibility" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">Accessibility</Link></li>
                <li><Link to="/privacy" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-center md:text-left text-gray-300 mb-4 md:mb-0">
                © 2025 Zion Tech Group. All rights reserved. | 
                <a href="https://ziontechgroup.com" className="text-neon-blue hover:text-white transition-colors duration-300 ml-1">
                  ziontechgroup.com
                </a>
              </p>
              <div className="flex space-x-6">
                <Link to="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-300 hover:text-white text-sm transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-gray-300 hover:text-white text-sm transition-colors duration-300">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FuturisticFooter;