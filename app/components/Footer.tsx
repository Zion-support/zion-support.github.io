import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import '../styles/futuristic.css';

const Footer: React.FC = memo(() => {
  return (
    <footer className="futuristic-bg cyber-grid relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="particles">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg flex items-center justify-center rotating-icon">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <h3 className="text-2xl font-bold neon-text">Zion Tech Group</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Advanced AI and IT Solutions for the modern world. We help businesses transform through cutting-edge technology 
              and intelligent automation. Experience the future of business with our innovative micro SaaS services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></span>
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-neon-purple rounded-full mr-3"></span>
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-neon-pink rounded-full mr-3"></span>
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-neon-cyan transition-colors duration-300">
                <span className="sr-only">Website</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold neon-text-purple mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-neon-cyan transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full mr-3"></span>
                AI Services
              </Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-neon-purple transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-3"></span>
                IT Services
              </Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-neon-pink transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-3"></span>
                Cloud Infrastructure
              </Link></li>
              <li><Link to="/digital-transformation" className="text-gray-300 hover:text-neon-green transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-neon-green rounded-full mr-3"></span>
                Digital Transformation
              </Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-neon-orange transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-neon-orange rounded-full mr-3"></span>
                Data Analytics
              </Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-neon-cyan transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full mr-3"></span>
                Web Development
              </Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-neon-purple transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-3"></span>
                Mobile Development
              </Link></li>
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-neon-pink transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-3"></span>
                Micro SaaS Solutions
              </Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold neon-text mb-6">AI Tools</h4>
            <ul className="space-y-3">
              <li><Link to="/zion-ai-content-moderator" className="text-gray-300 hover:text-neon-cyan transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full mr-3"></span>
                Content Moderator
              </Link></li>
              <li><Link to="/zion-ai-project-manager" className="text-gray-300 hover:text-neon-purple transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-3"></span>
                AI Project Manager
              </Link></li>
              <li><Link to="/zion-ai-customer-analytics" className="text-gray-300 hover:text-neon-pink transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-3"></span>
                Customer Analytics
              </Link></li>
              <li><Link to="/zion-ai-cybersecurity-monitor" className="text-gray-300 hover:text-neon-orange transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-neon-orange rounded-full mr-3"></span>
                Cybersecurity Monitor
              </Link></li>
              <li><Link to="/zion-ai-inventory-optimizer" className="text-gray-300 hover:text-neon-green transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-neon-green rounded-full mr-3"></span>
                Inventory Optimizer
              </Link></li>
              <li><Link to="/zion-ai-sales-predictor" className="text-gray-300 hover:text-neon-cyan transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full mr-3"></span>
                Sales Predictor
              </Link></li>
              <li><Link to="/zion-ai-financial-forecaster" className="text-gray-300 hover:text-neon-purple transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-3"></span>
                Financial Forecaster
              </Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-neon-pink transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-3"></span>
                Pricing
              </Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold neon-text-purple mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-neon-cyan transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full mr-3"></span>
                About
              </Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-neon-purple transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-3"></span>
                Team
              </Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-neon-pink transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-3"></span>
                Careers
              </Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-neon-green transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-neon-green rounded-full mr-3"></span>
                Partnerships
              </Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-neon-orange transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-neon-orange rounded-full mr-3"></span>
                Case Studies
              </Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold neon-text-pink mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-gray-300 hover:text-neon-cyan transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full mr-3"></span>
                Blog
              </Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-neon-purple transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-3"></span>
                API Docs
              </Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-neon-pink transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-3"></span>
                Help Center
              </Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-neon-green transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-neon-green rounded-full mr-3"></span>
                Contact
              </Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-neon-orange transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-neon-orange rounded-full mr-3"></span>
                Privacy Policy
              </Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-neon-cyan transition-colors duration-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full mr-3"></span>
                Terms of Service
              </Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-neon-cyan/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-300 mb-2">
                © 2025 Zion Tech Group. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm">
                <a href="https://ziontechgroup.com" className="hover:text-neon-cyan transition-colors duration-300">
                  ziontechgroup.com
                </a>
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-300 hover:text-neon-cyan text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-neon-purple text-sm transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;