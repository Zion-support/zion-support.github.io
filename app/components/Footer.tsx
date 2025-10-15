import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = memo(() => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 via-black to-gray-900 text-white relative overflow-hidden cyber-grid-bg">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-500 rounded-full blur-xl animate-pulse floating-element"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-purple-500 rounded-full blur-2xl animate-pulse delay-1000 floating-element"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500 rounded-full blur-xl animate-pulse delay-2000 floating-element"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-500 rounded-full blur-lg animate-pulse delay-3000 floating-element"></div>
        <div className="absolute bottom-10 right-1/4 w-28 h-28 bg-green-500 rounded-full blur-2xl animate-pulse delay-4000 floating-element"></div>
      </div>
      
      {/* Matrix rain effect */}
      <div className="matrix-rain">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="matrix-column"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div key={j} className="opacity-70">
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="holographic-card">
              <h3 className="text-3xl font-bold gradient-text mb-4 flex items-center">
                <span className="mr-3">⚡</span>
                Zion Tech Group
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Advanced AI and IT Solutions for the modern world. We help businesses transform through cutting-edge technology and innovative solutions.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-sm text-gray-400 group">
                  <span className="text-cyan-400 group-hover:neon-text-cyan transition-all">📧</span>
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors group-hover:neon-text-cyan">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-400 group">
                  <span className="text-cyan-400 group-hover:neon-text-cyan transition-all">📞</span>
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors group-hover:neon-text-cyan">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-400 group">
                  <span className="text-cyan-400 group-hover:neon-text-cyan transition-all">📍</span>
                  <span className="group-hover:text-cyan-400 transition-colors">
                    364 E Main St STE 1008, Middletown DE 19709
                  </span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors p-3 rounded-lg hover:bg-cyan-500/10 hover:neon-glow group">
                  <span className="sr-only">Website</span>
                  <svg className="h-6 w-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-300 hover:text-cyan-400 transition-colors p-3 rounded-lg hover:bg-cyan-500/10 hover:neon-glow group">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/ziontechgroup" className="text-gray-300 hover:text-cyan-400 transition-colors p-3 rounded-lg hover:bg-cyan-500/10 hover:neon-glow group">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Services Section */}
          <div className="glass-effect p-4 rounded-xl">
            <h4 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <span className="mr-2">⚙️</span>
              Services
            </h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors block py-2 px-3 rounded-lg hover:bg-cyan-500/10">All Services</Link></li>
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors block py-2 px-3 rounded-lg hover:bg-cyan-500/10">AI Services</Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors block py-2 px-3 rounded-lg hover:bg-cyan-500/10">IT Services</Link></li>
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors block py-2 px-3 rounded-lg hover:bg-cyan-500/10">Micro SAAS</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors block py-2 px-3 rounded-lg hover:bg-cyan-500/10">Cloud Infrastructure</Link></li>
              <li><Link to="/5g-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors block py-2 px-3 rounded-lg hover:bg-cyan-500/10">5G Solutions</Link></li>
              <li><Link to="/digital-transformation" className="text-gray-300 hover:text-cyan-400 transition-colors block py-2 px-3 rounded-lg hover:bg-cyan-500/10">Digital Transform</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors block py-2 px-3 rounded-lg hover:bg-cyan-500/10">Pricing</Link></li>
            </ul>
          </div>
          
          {/* AI Tools Section */}
          <div className="glass-effect p-4 rounded-xl">
            <h4 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <span className="mr-2">🤖</span>
              AI Tools
            </h4>
            <ul className="space-y-2">
              <li><Link to="/zion-ai-content-moderator" className="text-gray-300 hover:text-cyan-400 transition-colors block py-2 px-3 rounded-lg hover:bg-cyan-500/10">Content Moderator</Link></li>
              <li><Link to="/zion-ai-customer-churn-predictor" className="text-gray-300 hover:text-cyan-400 transition-colors block py-2 px-3 rounded-lg hover:bg-cyan-500/10">Churn Predictor</Link></li>
              <li><Link to="/zion-ai-sales-predictor" className="text-gray-300 hover:text-cyan-400 transition-colors block py-2 px-3 rounded-lg hover:bg-cyan-500/10">Sales Predictor</Link></li>
              <li><Link to="/zion-ai-workflow-automator" className="text-gray-300 hover:text-cyan-400 transition-colors block py-2 px-3 rounded-lg hover:bg-cyan-500/10">Workflow Automator</Link></li>
              <li><Link to="/zion-ai-financial-forecaster" className="text-gray-300 hover:text-cyan-400 transition-colors block py-2 px-3 rounded-lg hover:bg-cyan-500/10">Financial Forecaster</Link></li>
              <li><Link to="/zion-ai-document-analyzer" className="text-gray-300 hover:text-cyan-400 transition-colors block py-2 px-3 rounded-lg hover:bg-cyan-500/10">Document Analyzer</Link></li>
              <li><Link to="/zion-ai-task-scheduler" className="text-gray-300 hover:text-cyan-400 transition-colors block py-2 px-3 rounded-lg hover:bg-cyan-500/10">Task Scheduler</Link></li>
            </ul>
          </div>
          
          {/* Company Section */}
          <div className="glass-effect p-4 rounded-xl">
            <h4 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <span className="mr-2">🏢</span>
              Company
            </h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors block py-2 px-3 rounded-lg hover:bg-cyan-500/10">About Us</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors block py-2 px-3 rounded-lg hover:bg-cyan-500/10">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors block py-2 px-3 rounded-lg hover:bg-cyan-500/10">Careers</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-cyan-400 transition-colors block py-2 px-3 rounded-lg hover:bg-cyan-500/10">Partnerships</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors block py-2 px-3 rounded-lg hover:bg-cyan-500/10">Case Studies</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors block py-2 px-3 rounded-lg hover:bg-cyan-500/10">Contact</Link></li>
            </ul>
          </div>
          
          {/* Resources Section */}
          <div className="glass-effect p-4 rounded-xl">
            <h4 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <span className="mr-2">📚</span>
              Resources
            </h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors block py-2 px-3 rounded-lg hover:bg-cyan-500/10">Blog</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-cyan-400 transition-colors block py-2 px-3 rounded-lg hover:bg-cyan-500/10">API Docs</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-cyan-400 transition-colors block py-2 px-3 rounded-lg hover:bg-cyan-500/10">Help Center</Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-cyan-400 transition-colors block py-2 px-3 rounded-lg hover:bg-cyan-500/10">Accessibility</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-cyan-400 transition-colors block py-2 px-3 rounded-lg hover:bg-cyan-500/10">Data Analytics</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-cyan-400 transition-colors block py-2 px-3 rounded-lg hover:bg-cyan-500/10">Web Development</Link></li>
            </ul>
          </div>
          
          {/* Legal Section */}
          <div className="glass-effect p-4 rounded-xl">
            <h4 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <span className="mr-2">⚖️</span>
              Legal
            </h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors block py-2 px-3 rounded-lg hover:bg-cyan-500/10">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors block py-2 px-3 rounded-lg hover:bg-cyan-500/10">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-cyan-400 transition-colors block py-2 px-3 rounded-lg hover:bg-cyan-500/10">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-300 mb-2">
                © 2025 Zion Tech Group. All rights reserved.
              </p>
              <p className="text-sm text-gray-400">
                Powered by <a href="https://ziontechgroup.com" className="hover:text-cyan-400 transition-colors neon-text-cyan">ziontechgroup.com</a>
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6">
              <Link to="/privacy" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors hover:neon-text-cyan">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors hover:neon-text-cyan">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors hover:neon-text-cyan">
                Cookie Policy
              </Link>
            </div>
          </div>
          
          {/* Status Indicator */}
          <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-gray-400">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;