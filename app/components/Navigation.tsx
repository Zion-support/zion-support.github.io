import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/futuristic.css';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-neon-cyan/30' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg flex items-center justify-center rotating-icon">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <h1 className="text-2xl font-bold neon-text group-hover:neon-text-pink transition-all duration-300">
                  Zion Tech Group
                </h1>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-neon-cyan px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-black/20 hover:shadow-lg hover:shadow-neon-cyan/20">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-neon-cyan px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-black/20 hover:shadow-lg hover:shadow-neon-cyan/20">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="text-white hover:text-neon-cyan px-4 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300 hover:bg-black/20 hover:shadow-lg hover:shadow-neon-cyan/20"
              >
                Services
                <svg className="ml-1 h-4 w-4 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute left-0 mt-2 w-96 futuristic-card glow-effect z-50"
                >
                  <div className="py-4">
                    <div className="px-4 py-2 text-xs font-semibold text-neon-cyan uppercase tracking-wider border-b border-neon-cyan/30">AI & Machine Learning</div>
                    <Link to="/ai-services" className="block px-4 py-3 text-sm text-white hover:text-neon-cyan hover:bg-black/20 transition-all duration-300">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></span>
                        AI Services
                      </span>
                    </Link>
                    <Link to="/ai-solutions" className="block px-4 py-3 text-sm text-white hover:text-neon-cyan hover:bg-black/20 transition-all duration-300">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-neon-purple rounded-full mr-3"></span>
                        AI Solutions
                      </span>
                    </Link>
                    <Link to="/ai-content-generator" className="block px-4 py-3 text-sm text-white hover:text-neon-cyan hover:bg-black/20 transition-all duration-300">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-neon-pink rounded-full mr-3"></span>
                        AI Content Generator
                      </span>
                    </Link>
                    <Link to="/data-analytics" className="block px-4 py-3 text-sm text-white hover:text-neon-cyan hover:bg-black/20 transition-all duration-300">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-neon-green rounded-full mr-3"></span>
                        Data Analytics
                      </span>
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-neon-purple uppercase tracking-wider border-b border-neon-purple/30 mt-2">IT Services</div>
                    <Link to="/it-services" className="block px-4 py-3 text-sm text-white hover:text-neon-purple hover:bg-black/20 transition-all duration-300">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-neon-purple rounded-full mr-3"></span>
                        IT Services
                      </span>
                    </Link>
                    <Link to="/web-development" className="block px-4 py-3 text-sm text-white hover:text-neon-purple hover:bg-black/20 transition-all duration-300">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></span>
                        Web Development
                      </span>
                    </Link>
                    <Link to="/mobile-development" className="block px-4 py-3 text-sm text-white hover:text-neon-purple hover:bg-black/20 transition-all duration-300">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-neon-pink rounded-full mr-3"></span>
                        Mobile Development
                      </span>
                    </Link>
                    <Link to="/database-management" className="block px-4 py-3 text-sm text-white hover:text-neon-purple hover:bg-black/20 transition-all duration-300">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-neon-green rounded-full mr-3"></span>
                        Database Management
                      </span>
                    </Link>
                    <Link to="/network-infrastructure" className="block px-4 py-3 text-sm text-white hover:text-neon-purple hover:bg-black/20 transition-all duration-300">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-neon-orange rounded-full mr-3"></span>
                        Network Infrastructure
                      </span>
                    </Link>
                    <Link to="/blockchain-solutions" className="block px-4 py-3 text-sm text-white hover:text-neon-purple hover:bg-black/20 transition-all duration-300">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></span>
                        Blockchain Solutions
                      </span>
                    </Link>
                    <Link to="/iot-solutions" className="block px-4 py-3 text-sm text-white hover:text-neon-purple hover:bg-black/20 transition-all duration-300">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-neon-pink rounded-full mr-3"></span>
                        IoT Solutions
                      </span>
                    </Link>
                    <Link to="/devops-automation" className="block px-4 py-3 text-sm text-white hover:text-neon-purple hover:bg-black/20 transition-all duration-300">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-neon-green rounded-full mr-3"></span>
                        DevOps Automation
                      </span>
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-neon-green uppercase tracking-wider border-b border-neon-green/30 mt-2">Infrastructure</div>
                    <Link to="/cloud-infrastructure" className="block px-4 py-3 text-sm text-white hover:text-neon-green hover:bg-black/20 transition-all duration-300">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-neon-green rounded-full mr-3"></span>
                        Cloud Infrastructure
                      </span>
                    </Link>
                    <Link to="/5g-solutions" className="block px-4 py-3 text-sm text-white hover:text-neon-green hover:bg-black/20 transition-all duration-300">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></span>
                        5G Solutions
                      </span>
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-neon-orange uppercase tracking-wider border-b border-neon-orange/30 mt-2">Business Solutions</div>
                    <Link to="/digital-transformation" className="block px-4 py-3 text-sm text-white hover:text-neon-orange hover:bg-black/20 transition-all duration-300">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-neon-orange rounded-full mr-3"></span>
                        Digital Transformation
                      </span>
                    </Link>
                    <Link to="/micro-saas-solutions" className="block px-4 py-3 text-sm text-white hover:text-neon-orange hover:bg-black/20 transition-all duration-300">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-neon-pink rounded-full mr-3"></span>
                        Micro SaaS Solutions
                      </span>
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-neon-cyan uppercase tracking-wider border-b border-neon-cyan/30 mt-2">AI Tools</div>
                    <Link to="/zion-ai-content-moderator" className="block px-4 py-3 text-sm text-white hover:text-neon-cyan hover:bg-black/20 transition-all duration-300">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></span>
                        AI Content Moderator
                      </span>
                    </Link>
                    <Link to="/zion-ai-customer-churn-predictor" className="block px-4 py-3 text-sm text-white hover:text-neon-cyan hover:bg-black/20 transition-all duration-300">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-neon-purple rounded-full mr-3"></span>
                        Customer Churn Predictor
                      </span>
                    </Link>
                    <Link to="/zion-ai-customer-sentiment-tracker" className="block px-4 py-3 text-sm text-white hover:text-neon-cyan hover:bg-black/20 transition-all duration-300">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-neon-pink rounded-full mr-3"></span>
                        Customer Sentiment Tracker
                      </span>
                    </Link>
                    <Link to="/zion-ai-document-analyzer" className="block px-4 py-3 text-sm text-white hover:text-neon-cyan hover:bg-black/20 transition-all duration-300">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-neon-green rounded-full mr-3"></span>
                        Document Analyzer
                      </span>
                    </Link>
                    <Link to="/zion-ai-financial-forecaster" className="block px-4 py-3 text-sm text-white hover:text-neon-cyan hover:bg-black/20 transition-all duration-300">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-neon-orange rounded-full mr-3"></span>
                        Financial Forecaster
                      </span>
                    </Link>
                    <Link to="/zion-ai-sales-predictor" className="block px-4 py-3 text-sm text-white hover:text-neon-cyan hover:bg-black/20 transition-all duration-300">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></span>
                        Sales Predictor
                      </span>
                    </Link>
                    <Link to="/zion-ai-workflow-automator" className="block px-4 py-3 text-sm text-white hover:text-neon-cyan hover:bg-black/20 transition-all duration-300">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-neon-purple rounded-full mr-3"></span>
                        Workflow Automator
                      </span>
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-neon-pink uppercase tracking-wider border-b border-neon-pink/30 mt-2">New AI Tools</div>
                    <Link to="/zion-ai-project-manager" className="block px-4 py-3 text-sm text-white hover:text-neon-cyan hover:bg-black/20 transition-all duration-300">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-neon-pink rounded-full mr-3"></span>
                        AI Project Manager
                      </span>
                    </Link>
                    <Link to="/zion-ai-customer-analytics" className="block px-4 py-3 text-sm text-white hover:text-neon-cyan hover:bg-black/20 transition-all duration-300">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-neon-green rounded-full mr-3"></span>
                        Customer Analytics
                      </span>
                    </Link>
                    <Link to="/zion-ai-cybersecurity-monitor" className="block px-4 py-3 text-sm text-white hover:text-neon-cyan hover:bg-black/20 transition-all duration-300">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-neon-orange rounded-full mr-3"></span>
                        Cybersecurity Monitor
                      </span>
                    </Link>
                    <Link to="/zion-ai-inventory-optimizer" className="block px-4 py-3 text-sm text-white hover:text-neon-cyan hover:bg-black/20 transition-all duration-300">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></span>
                        Inventory Optimizer
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/pricing" className="text-white hover:text-neon-cyan px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-black/20 hover:shadow-lg hover:shadow-neon-cyan/20">
              Pricing
            </Link>
            <Link to="/blog" className="text-white hover:text-neon-cyan px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-black/20 hover:shadow-lg hover:shadow-neon-cyan/20">
              Blog
            </Link>
            <Link to="/team" className="text-white hover:text-neon-cyan px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-black/20 hover:shadow-lg hover:shadow-neon-cyan/20">
              Team
            </Link>
            <Link to="/careers" className="text-white hover:text-neon-cyan px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-black/20 hover:shadow-lg hover:shadow-neon-cyan/20">
              Careers
            </Link>
            <Link to="/contact" className="neon-button text-sm">
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-neon-cyan focus:outline-none focus:text-neon-cyan transition-all duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden futuristic-card glow-effect">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link to="/" className="text-white hover:text-neon-cyan block px-4 py-3 rounded-md text-base font-medium transition-all duration-300 hover:bg-black/20">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-neon-cyan block px-4 py-3 rounded-md text-base font-medium transition-all duration-300 hover:bg-black/20">
              About
            </Link>
            <div className="space-y-1">
              <div className="text-neon-cyan px-4 py-2 text-sm font-semibold uppercase tracking-wider">AI & Machine Learning</div>
              <Link to="/ai-services" className="text-white hover:text-neon-cyan block px-6 py-3 rounded-md text-sm transition-all duration-300 hover:bg-black/20">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></span>
                  AI Services
                </span>
              </Link>
              <Link to="/ai-solutions" className="text-white hover:text-neon-cyan block px-6 py-3 rounded-md text-sm transition-all duration-300 hover:bg-black/20">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-neon-purple rounded-full mr-3"></span>
                  AI Solutions
                </span>
              </Link>
              <Link to="/ai-content-generator" className="text-white hover:text-neon-cyan block px-6 py-3 rounded-md text-sm transition-all duration-300 hover:bg-black/20">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-neon-pink rounded-full mr-3"></span>
                  AI Content Generator
                </span>
              </Link>
              <Link to="/data-analytics" className="text-white hover:text-neon-cyan block px-6 py-3 rounded-md text-sm transition-all duration-300 hover:bg-black/20">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-neon-green rounded-full mr-3"></span>
                  Data Analytics
                </span>
              </Link>
              
              <div className="text-gray-700 px-3 py-2 text-base font-medium mt-4">IT Services</div>
              <Link to="/it-services" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                IT Services
              </Link>
              <Link to="/web-development" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Web Development
              </Link>
              <Link to="/mobile-development" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Mobile Development
              </Link>
              <Link to="/database-management" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Database Management
              </Link>
              <Link to="/network-infrastructure" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Network Infrastructure
              </Link>
              
              <div className="text-gray-700 px-3 py-2 text-base font-medium mt-4">Infrastructure</div>
              <Link to="/cloud-infrastructure" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Cloud Infrastructure
              </Link>
              <Link to="/5g-solutions" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                5G Solutions
              </Link>
              
              <div className="text-gray-700 px-3 py-2 text-base font-medium mt-4">Business Solutions</div>
              <Link to="/digital-transformation" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Digital Transformation
              </Link>
              <Link to="/micro-saas-solutions" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Micro SaaS Solutions
              </Link>
              
              <div className="text-gray-700 px-3 py-2 text-base font-medium mt-4">AI Tools</div>
              <Link to="/zion-ai-content-moderator" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Content Moderator
              </Link>
              <Link to="/zion-ai-customer-churn-predictor" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Customer Churn Predictor
              </Link>
              <Link to="/zion-ai-customer-sentiment-tracker" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Customer Sentiment Tracker
              </Link>
              <Link to="/zion-ai-document-analyzer" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Document Analyzer
              </Link>
              <Link to="/zion-ai-financial-forecaster" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Financial Forecaster
              </Link>
              <Link to="/zion-ai-sales-predictor" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Sales Predictor
              </Link>
              <Link to="/zion-ai-workflow-automator" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Workflow Automator
              </Link>
            </div>
            <Link to="/pricing" className="text-white hover:text-neon-cyan block px-4 py-3 rounded-md text-base font-medium transition-all duration-300 hover:bg-black/20">
              Pricing
            </Link>
            <Link to="/blog" className="text-white hover:text-neon-cyan block px-4 py-3 rounded-md text-base font-medium transition-all duration-300 hover:bg-black/20">
              Blog
            </Link>
            <Link to="/team" className="text-white hover:text-neon-cyan block px-4 py-3 rounded-md text-base font-medium transition-all duration-300 hover:bg-black/20">
              Team
            </Link>
            <Link to="/careers" className="text-white hover:text-neon-cyan block px-4 py-3 rounded-md text-base font-medium transition-all duration-300 hover:bg-black/20">
              Careers
            </Link>
            <Link to="/contact" className="neon-button block text-center mt-4">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;