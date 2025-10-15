import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FuturisticNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [zionAIOpen, setZionAIOpen] = useState(false);
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
      scrolled ? 'glass-card py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group">
            <h1 className="text-2xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
              Zion Tech Group
            </h1>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/10"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/10"
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="text-white hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300 hover:bg-white/10"
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
                  className="absolute left-0 mt-2 w-96 dark-glass-card z-50 slide-in-up"
                >
                  <div className="py-4">
                    <Link 
                      to="/services" 
                      className="block px-6 py-3 text-sm text-white hover:text-neon-blue font-semibold hover:bg-white/10 transition-all duration-300"
                    >
                      All Services
                    </Link>
                    <div className="border-t border-white/10 my-2"></div>
                    
                    <div className="px-6 py-2">
                      <h4 className="text-xs font-semibold text-neon-blue uppercase tracking-wide mb-3">AI Services</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <Link to="/ai-services" className="block px-3 py-2 text-sm text-white/80 hover:text-neon-blue hover:bg-white/5 rounded transition-all duration-300">AI Services</Link>
                        <Link to="/ai-solutions" className="block px-3 py-2 text-sm text-white/80 hover:text-neon-blue hover:bg-white/5 rounded transition-all duration-300">AI Solutions</Link>
                        <Link to="/ai-content-generator" className="block px-3 py-2 text-sm text-white/80 hover:text-neon-blue hover:bg-white/5 rounded transition-all duration-300">Content Generator</Link>
                        <Link to="/data-analytics" className="block px-3 py-2 text-sm text-white/80 hover:text-neon-blue hover:bg-white/5 rounded transition-all duration-300">Data Analytics</Link>
                      </div>
                    </div>
                    
                    <div className="px-6 py-2">
                      <h4 className="text-xs font-semibold text-neon-purple uppercase tracking-wide mb-3">IT Services</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <Link to="/it-services" className="block px-3 py-2 text-sm text-white/80 hover:text-neon-purple hover:bg-white/5 rounded transition-all duration-300">IT Services</Link>
                        <Link to="/web-development" className="block px-3 py-2 text-sm text-white/80 hover:text-neon-purple hover:bg-white/5 rounded transition-all duration-300">Web Development</Link>
                        <Link to="/mobile-development" className="block px-3 py-2 text-sm text-white/80 hover:text-neon-purple hover:bg-white/5 rounded transition-all duration-300">Mobile Development</Link>
                        <Link to="/database-management" className="block px-3 py-2 text-sm text-white/80 hover:text-neon-purple hover:bg-white/5 rounded transition-all duration-300">Database Management</Link>
                      </div>
                    </div>
                    
                    <div className="px-6 py-2">
                      <h4 className="text-xs font-semibold text-neon-green uppercase tracking-wide mb-3">Infrastructure</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <Link to="/cloud-infrastructure" className="block px-3 py-2 text-sm text-white/80 hover:text-neon-green hover:bg-white/5 rounded transition-all duration-300">Cloud Infrastructure</Link>
                        <Link to="/network-infrastructure" className="block px-3 py-2 text-sm text-white/80 hover:text-neon-green hover:bg-white/5 rounded transition-all duration-300">Network Infrastructure</Link>
                        <Link to="/5g-solutions" className="block px-3 py-2 text-sm text-white/80 hover:text-neon-green hover:bg-white/5 rounded transition-all duration-300">5G Solutions</Link>
                        <Link to="/cybersecurity" className="block px-3 py-2 text-sm text-white/80 hover:text-neon-green hover:bg-white/5 rounded transition-all duration-300">Cybersecurity</Link>
                      </div>
                    </div>
                    
                    <div className="px-6 py-2">
                      <h4 className="text-xs font-semibold text-neon-pink uppercase tracking-wide mb-3">Specialized</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <Link to="/digital-transformation" className="block px-3 py-2 text-sm text-white/80 hover:text-neon-pink hover:bg-white/5 rounded transition-all duration-300">Digital Transformation</Link>
                        <Link to="/micro-saas-solutions" className="block px-3 py-2 text-sm text-white/80 hover:text-neon-pink hover:bg-white/5 rounded transition-all duration-300">Micro SaaS Solutions</Link>
                        <Link to="/blockchain-development" className="block px-3 py-2 text-sm text-white/80 hover:text-neon-pink hover:bg-white/5 rounded transition-all duration-300">Blockchain Development</Link>
                        <Link to="/iot-solutions" className="block px-3 py-2 text-sm text-white/80 hover:text-neon-pink hover:bg-white/5 rounded transition-all duration-300">IoT Solutions</Link>
                        <Link to="/ar-vr-development" className="block px-3 py-2 text-sm text-white/80 hover:text-neon-pink hover:bg-white/5 rounded transition-all duration-300">AR/VR Development</Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Zion AI Products Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setZionAIOpen(true)}
                onMouseLeave={() => setZionAIOpen(false)}
                className="text-white hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300 hover:bg-white/10"
              >
                Zion AI Products
                <svg className="ml-1 h-4 w-4 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {zionAIOpen && (
                <div
                  onMouseEnter={() => setZionAIOpen(true)}
                  onMouseLeave={() => setZionAIOpen(false)}
                  className="absolute left-0 mt-2 w-80 dark-glass-card z-50 slide-in-up max-h-96 overflow-y-auto"
                >
                  <div className="py-4">
                    <div className="grid grid-cols-1 gap-1">
                      <Link to="/zion-ai-content-moderator" className="block px-6 py-2 text-sm text-white/80 hover:text-neon-blue hover:bg-white/5 transition-all duration-300">Content Moderator</Link>
                      <Link to="/zion-ai-customer-churn-predictor" className="block px-6 py-2 text-sm text-white/80 hover:text-neon-blue hover:bg-white/5 transition-all duration-300">Customer Churn Predictor</Link>
                      <Link to="/zion-ai-customer-churn-predictor-pro" className="block px-6 py-2 text-sm text-white/80 hover:text-neon-blue hover:bg-white/5 transition-all duration-300">Customer Churn Predictor Pro</Link>
                      <Link to="/zion-ai-customer-sentiment-tracker" className="block px-6 py-2 text-sm text-white/80 hover:text-neon-blue hover:bg-white/5 transition-all duration-300">Customer Sentiment Tracker</Link>
                      <Link to="/zion-ai-customer-support-pro" className="block px-6 py-2 text-sm text-white/80 hover:text-neon-blue hover:bg-white/5 transition-all duration-300">Customer Support Pro</Link>
                      <Link to="/zion-ai-document-analyzer" className="block px-6 py-2 text-sm text-white/80 hover:text-neon-blue hover:bg-white/5 transition-all duration-300">Document Analyzer</Link>
                      <Link to="/zion-ai-email-marketing-pro" className="block px-6 py-2 text-sm text-white/80 hover:text-neon-blue hover:bg-white/5 transition-all duration-300">Email Marketing Pro</Link>
                      <Link to="/zion-ai-financial-forecaster" className="block px-6 py-2 text-sm text-white/80 hover:text-neon-blue hover:bg-white/5 transition-all duration-300">Financial Forecaster</Link>
                      <Link to="/zion-ai-inventory-optimizer-pro" className="block px-6 py-2 text-sm text-white/80 hover:text-neon-blue hover:bg-white/5 transition-all duration-300">Inventory Optimizer Pro</Link>
                      <Link to="/zion-ai-meeting-transcriber" className="block px-6 py-2 text-sm text-white/80 hover:text-neon-blue hover:bg-white/5 transition-all duration-300">Meeting Transcriber</Link>
                      <Link to="/zion-ai-sales-predictor" className="block px-6 py-2 text-sm text-white/80 hover:text-neon-blue hover:bg-white/5 transition-all duration-300">Sales Predictor</Link>
                      <Link to="/zion-ai-social-scheduler-pro" className="block px-6 py-2 text-sm text-white/80 hover:text-neon-blue hover:bg-white/5 transition-all duration-300">Social Scheduler Pro</Link>
                      <Link to="/zion-ai-task-scheduler" className="block px-6 py-2 text-sm text-white/80 hover:text-neon-blue hover:bg-white/5 transition-all duration-300">Task Scheduler</Link>
                      <Link to="/zion-ai-workflow-automator" className="block px-6 py-2 text-sm text-white/80 hover:text-neon-blue hover:bg-white/5 transition-all duration-300">Workflow Automator</Link>
                      <Link to="/zion-ai-workflow-automator-pro" className="block px-6 py-2 text-sm text-white/80 hover:text-neon-blue hover:bg-white/5 transition-all duration-300">Workflow Automator Pro</Link>
                      <Link to="/zion-customer-satisfaction-monitor" className="block px-6 py-2 text-sm text-white/80 hover:text-neon-blue hover:bg-white/5 transition-all duration-300">Customer Satisfaction Monitor</Link>
                      <Link to="/zion-smart-expense-tracker" className="block px-6 py-2 text-sm text-white/80 hover:text-neon-blue hover:bg-white/5 transition-all duration-300">Smart Expense Tracker</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link 
              to="/pricing" 
              className="text-white hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/10"
            >
              Pricing
            </Link>
            <Link 
              to="/blog" 
              className="text-white hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/10"
            >
              Blog
            </Link>
            <Link 
              to="/team" 
              className="text-white hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/10"
            >
              Team
            </Link>
            <Link 
              to="/contact" 
              className="futuristic-btn neon-btn"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-neon-blue focus:outline-none focus:text-neon-blue transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden dark-glass-card mx-4 mt-2 slide-in-up">
          <div className="px-6 pt-4 pb-6 space-y-4">
            <Link 
              to="/" 
              className="block text-white hover:text-neon-blue px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block text-white hover:text-neon-blue px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            
            <div className="px-3 py-2">
              <div className="text-white text-base font-medium mb-3">Services</div>
              <div className="ml-4 space-y-2">
                <Link 
                  to="/services" 
                  className="block text-white/80 hover:text-neon-blue px-3 py-1 rounded-md text-sm font-semibold transition-all duration-300 hover:bg-white/5"
                  onClick={() => setIsOpen(false)}
                >
                  All Services
                </Link>
                
                <div className="ml-2 mt-3">
                  <div className="text-xs font-semibold text-neon-blue uppercase tracking-wide mb-2">AI Services</div>
                  <Link to="/ai-services" className="block text-white/70 hover:text-neon-blue px-3 py-1 rounded-md text-sm transition-all duration-300 hover:bg-white/5" onClick={() => setIsOpen(false)}>AI Services</Link>
                  <Link to="/ai-solutions" className="block text-white/70 hover:text-neon-blue px-3 py-1 rounded-md text-sm transition-all duration-300 hover:bg-white/5" onClick={() => setIsOpen(false)}>AI Solutions</Link>
                  <Link to="/ai-content-generator" className="block text-white/70 hover:text-neon-blue px-3 py-1 rounded-md text-sm transition-all duration-300 hover:bg-white/5" onClick={() => setIsOpen(false)}>Content Generator</Link>
                  <Link to="/data-analytics" className="block text-white/70 hover:text-neon-blue px-3 py-1 rounded-md text-sm transition-all duration-300 hover:bg-white/5" onClick={() => setIsOpen(false)}>Data Analytics</Link>
                </div>
                
                <div className="ml-2 mt-3">
                  <div className="text-xs font-semibold text-neon-purple uppercase tracking-wide mb-2">IT Services</div>
                  <Link to="/it-services" className="block text-white/70 hover:text-neon-purple px-3 py-1 rounded-md text-sm transition-all duration-300 hover:bg-white/5" onClick={() => setIsOpen(false)}>IT Services</Link>
                  <Link to="/web-development" className="block text-white/70 hover:text-neon-purple px-3 py-1 rounded-md text-sm transition-all duration-300 hover:bg-white/5" onClick={() => setIsOpen(false)}>Web Development</Link>
                  <Link to="/mobile-development" className="block text-white/70 hover:text-neon-purple px-3 py-1 rounded-md text-sm transition-all duration-300 hover:bg-white/5" onClick={() => setIsOpen(false)}>Mobile Development</Link>
                  <Link to="/database-management" className="block text-white/70 hover:text-neon-purple px-3 py-1 rounded-md text-sm transition-all duration-300 hover:bg-white/5" onClick={() => setIsOpen(false)}>Database Management</Link>
                </div>
              </div>
            </div>
            
            <Link 
              to="/pricing" 
              className="block text-white hover:text-neon-blue px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/blog" 
              className="block text-white hover:text-neon-blue px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/team" 
              className="block text-white hover:text-neon-blue px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
            <Link 
              to="/contact" 
              className="block futuristic-btn neon-btn text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default FuturisticNavigation;