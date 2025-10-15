import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <h1 className="text-2xl font-bold gradient-text neon-text group-hover:scale-105 transition-transform duration-300">
                Zion Tech Group
              </h1>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20"
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
                  className="absolute left-0 mt-2 w-96 bg-black/95 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-500/20 z-50 overflow-hidden"
                >
                  <div className="py-2">
                    <div className="px-4 py-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider border-b border-cyan-500/20">AI & Machine Learning</div>
                    <Link to="/ai-services" className="block px-4 py-3 text-sm text-white hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300">
                      AI Services
                    </Link>
                    <Link to="/ai-solutions" className="block px-4 py-3 text-sm text-white hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300">
                      AI Solutions
                    </Link>
                    <Link to="/ai-content-generator" className="block px-4 py-3 text-sm text-white hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300">
                      AI Content Generator
                    </Link>
                    <Link to="/data-analytics" className="block px-4 py-3 text-sm text-white hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300">
                      Data Analytics
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider border-b border-cyan-500/20 mt-2">IT Services</div>
                    <Link to="/it-services" className="block px-4 py-3 text-sm text-white hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300">
                      IT Services
                    </Link>
                    <Link to="/web-development" className="block px-4 py-3 text-sm text-white hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300">
                      Web Development
                    </Link>
                    <Link to="/mobile-development" className="block px-4 py-3 text-sm text-white hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300">
                      Mobile Development
                    </Link>
                    <Link to="/database-management" className="block px-4 py-3 text-sm text-white hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300">
                      Database Management
                    </Link>
                    <Link to="/network-infrastructure" className="block px-4 py-3 text-sm text-white hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300">
                      Network Infrastructure
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider border-b border-cyan-500/20 mt-2">Infrastructure</div>
                    <Link to="/cloud-infrastructure" className="block px-4 py-3 text-sm text-white hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300">
                      Cloud Infrastructure
                    </Link>
                    <Link to="/5g-solutions" className="block px-4 py-3 text-sm text-white hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300">
                      5G Solutions
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider border-b border-cyan-500/20 mt-2">Business Solutions</div>
                    <Link to="/digital-transformation" className="block px-4 py-3 text-sm text-white hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300">
                      Digital Transformation
                    </Link>
                    <Link to="/micro-saas-solutions" className="block px-4 py-3 text-sm text-white hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300">
                      Micro SaaS Solutions
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider border-b border-cyan-500/20 mt-2">AI Tools</div>
                    <Link to="/zion-ai-content-moderator" className="block px-4 py-3 text-sm text-white hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300">
                      AI Content Moderator
                    </Link>
                    <Link to="/zion-ai-customer-churn-predictor" className="block px-4 py-3 text-sm text-white hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300">
                      Customer Churn Predictor
                    </Link>
                    <Link to="/zion-ai-customer-sentiment-tracker" className="block px-4 py-3 text-sm text-white hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300">
                      Customer Sentiment Tracker
                    </Link>
                    <Link to="/zion-ai-document-analyzer" className="block px-4 py-3 text-sm text-white hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300">
                      Document Analyzer
                    </Link>
                    <Link to="/zion-ai-financial-forecaster" className="block px-4 py-3 text-sm text-white hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300">
                      Financial Forecaster
                    </Link>
                    <Link to="/zion-ai-sales-predictor" className="block px-4 py-3 text-sm text-white hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300">
                      Sales Predictor
                    </Link>
                    <Link to="/zion-ai-workflow-automator" className="block px-4 py-3 text-sm text-white hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300">
                      Workflow Automator
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/pricing" className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20">
              Pricing
            </Link>
            <Link to="/blog" className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20">
              Blog
            </Link>
            <Link to="/team" className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20">
              Team
            </Link>
            <Link to="/careers" className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20">
              Careers
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20">
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400 focus:outline-none focus:text-cyan-400 transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-md z-50 mobile-nav">
          <div className="mobile-nav-content">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold gradient-text">Menu</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-cyan-400 transition-colors duration-300 p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-2">
              <Link to="/" className="text-white hover:text-cyan-400 block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-cyan-500/10" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-cyan-400 block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-cyan-500/10" onClick={() => setIsOpen(false)}>
                About
              </Link>
            <div className="space-y-4">
              <div className="text-cyan-400 px-4 py-2 text-lg font-semibold border-b border-cyan-500/20">AI & Machine Learning</div>
              <Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 block px-6 py-3 rounded-lg text-base transition-all duration-300 hover:bg-cyan-500/10" onClick={() => setIsOpen(false)}>
                AI Services
              </Link>
              <Link to="/ai-solutions" className="text-gray-300 hover:text-cyan-400 block px-6 py-3 rounded-lg text-base transition-all duration-300 hover:bg-cyan-500/10" onClick={() => setIsOpen(false)}>
                AI Solutions
              </Link>
              <Link to="/ai-content-generator" className="text-gray-300 hover:text-cyan-400 block px-6 py-3 rounded-lg text-base transition-all duration-300 hover:bg-cyan-500/10" onClick={() => setIsOpen(false)}>
                AI Content Generator
              </Link>
              <Link to="/data-analytics" className="text-gray-300 hover:text-cyan-400 block px-6 py-3 rounded-lg text-base transition-all duration-300 hover:bg-cyan-500/10" onClick={() => setIsOpen(false)}>
                Data Analytics
              </Link>
              
              <div className="text-cyan-400 px-4 py-2 text-lg font-semibold border-b border-cyan-500/20 mt-6">IT Services</div>
              <Link to="/it-services" className="text-gray-300 hover:text-cyan-400 block px-6 py-3 rounded-lg text-base transition-all duration-300 hover:bg-cyan-500/10" onClick={() => setIsOpen(false)}>
                IT Services
              </Link>
              <Link to="/web-development" className="text-gray-300 hover:text-cyan-400 block px-6 py-3 rounded-lg text-base transition-all duration-300 hover:bg-cyan-500/10" onClick={() => setIsOpen(false)}>
                Web Development
              </Link>
              <Link to="/mobile-development" className="text-gray-300 hover:text-cyan-400 block px-6 py-3 rounded-lg text-base transition-all duration-300 hover:bg-cyan-500/10" onClick={() => setIsOpen(false)}>
                Mobile Development
              </Link>
              <Link to="/database-management" className="text-gray-300 hover:text-cyan-400 block px-6 py-3 rounded-lg text-base transition-all duration-300 hover:bg-cyan-500/10" onClick={() => setIsOpen(false)}>
                Database Management
              </Link>
              <Link to="/network-infrastructure" className="text-gray-300 hover:text-cyan-400 block px-6 py-3 rounded-lg text-base transition-all duration-300 hover:bg-cyan-500/10" onClick={() => setIsOpen(false)}>
                Network Infrastructure
              </Link>
              
              <div className="text-cyan-400 px-4 py-2 text-lg font-semibold border-b border-cyan-500/20 mt-6">Infrastructure</div>
              <Link to="/cloud-infrastructure" className="text-gray-300 hover:text-cyan-400 block px-6 py-3 rounded-lg text-base transition-all duration-300 hover:bg-cyan-500/10" onClick={() => setIsOpen(false)}>
                Cloud Infrastructure
              </Link>
              <Link to="/5g-solutions" className="text-gray-300 hover:text-cyan-400 block px-6 py-3 rounded-lg text-base transition-all duration-300 hover:bg-cyan-500/10" onClick={() => setIsOpen(false)}>
                5G Solutions
              </Link>
              
              <div className="text-cyan-400 px-4 py-2 text-lg font-semibold border-b border-cyan-500/20 mt-6">Business Solutions</div>
              <Link to="/digital-transformation" className="text-gray-300 hover:text-cyan-400 block px-6 py-3 rounded-lg text-base transition-all duration-300 hover:bg-cyan-500/10" onClick={() => setIsOpen(false)}>
                Digital Transformation
              </Link>
              <Link to="/micro-saas-solutions" className="text-gray-300 hover:text-cyan-400 block px-6 py-3 rounded-lg text-base transition-all duration-300 hover:bg-cyan-500/10" onClick={() => setIsOpen(false)}>
                Micro SaaS Solutions
              </Link>
              
              <div className="text-cyan-400 px-4 py-2 text-lg font-semibold border-b border-cyan-500/20 mt-6">AI Tools</div>
              <Link to="/zion-ai-content-moderator" className="text-gray-300 hover:text-cyan-400 block px-6 py-3 rounded-lg text-base transition-all duration-300 hover:bg-cyan-500/10" onClick={() => setIsOpen(false)}>
                AI Content Moderator
              </Link>
              <Link to="/zion-ai-customer-churn-predictor" className="text-gray-300 hover:text-cyan-400 block px-6 py-3 rounded-lg text-base transition-all duration-300 hover:bg-cyan-500/10" onClick={() => setIsOpen(false)}>
                Customer Churn Predictor
              </Link>
              <Link to="/zion-ai-customer-sentiment-tracker" className="text-gray-300 hover:text-cyan-400 block px-6 py-3 rounded-lg text-base transition-all duration-300 hover:bg-cyan-500/10" onClick={() => setIsOpen(false)}>
                Customer Sentiment Tracker
              </Link>
              <Link to="/zion-ai-document-analyzer" className="text-gray-300 hover:text-cyan-400 block px-6 py-3 rounded-lg text-base transition-all duration-300 hover:bg-cyan-500/10" onClick={() => setIsOpen(false)}>
                Document Analyzer
              </Link>
              <Link to="/zion-ai-financial-forecaster" className="text-gray-300 hover:text-cyan-400 block px-6 py-3 rounded-lg text-base transition-all duration-300 hover:bg-cyan-500/10" onClick={() => setIsOpen(false)}>
                Financial Forecaster
              </Link>
              <Link to="/zion-ai-sales-predictor" className="text-gray-300 hover:text-cyan-400 block px-6 py-3 rounded-lg text-base transition-all duration-300 hover:bg-cyan-500/10" onClick={() => setIsOpen(false)}>
                Sales Predictor
              </Link>
              <Link to="/zion-ai-workflow-automator" className="text-gray-300 hover:text-cyan-400 block px-6 py-3 rounded-lg text-base transition-all duration-300 hover:bg-cyan-500/10" onClick={() => setIsOpen(false)}>
                Workflow Automator
              </Link>
            </div>
            
            <div className="mt-8 pt-6 border-t border-cyan-500/20">
              <Link to="/pricing" className="text-white hover:text-cyan-400 block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-cyan-500/10" onClick={() => setIsOpen(false)}>
                Pricing
              </Link>
              <Link to="/blog" className="text-white hover:text-cyan-400 block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-cyan-500/10" onClick={() => setIsOpen(false)}>
                Blog
              </Link>
              <Link to="/team" className="text-white hover:text-cyan-400 block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-cyan-500/10" onClick={() => setIsOpen(false)}>
                Team
              </Link>
              <Link to="/careers" className="text-white hover:text-cyan-400 block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-cyan-500/10" onClick={() => setIsOpen(false)}>
                Careers
              </Link>
              <Link to="/contact" className="text-white hover:text-cyan-400 block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-cyan-500/10" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;