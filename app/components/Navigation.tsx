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
        ? 'bg-black/90 backdrop-blur-md border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:animate-pulse transition-all duration-300">
                Zion Tech Group
              </h1>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/20">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/20">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="text-white hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                Services
                <svg className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute left-0 mt-2 w-96 bg-black/95 backdrop-blur-xl rounded-xl shadow-2xl shadow-cyan-500/20 border border-cyan-500/20 z-50"
                >
                  <div className="py-4">
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
                    
                    <div className="px-4 py-2 text-xs font-semibold text-purple-400 uppercase tracking-wider border-b border-purple-500/20 mt-2">IT Services</div>
                    <Link to="/it-services" className="block px-4 py-3 text-sm text-white hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300">
                      IT Services
                    </Link>
                    <Link to="/web-development" className="block px-4 py-3 text-sm text-white hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300">
                      Web Development
                    </Link>
                    <Link to="/mobile-development" className="block px-4 py-3 text-sm text-white hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300">
                      Mobile Development
                    </Link>
                    <Link to="/database-management" className="block px-4 py-3 text-sm text-white hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300">
                      Database Management
                    </Link>
                    <Link to="/network-infrastructure" className="block px-4 py-3 text-sm text-white hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300">
                      Network Infrastructure
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-green-400 uppercase tracking-wider border-b border-green-500/20 mt-2">Infrastructure</div>
                    <Link to="/cloud-infrastructure" className="block px-4 py-3 text-sm text-white hover:bg-green-500/10 hover:text-green-400 transition-all duration-300">
                      Cloud Infrastructure
                    </Link>
                    <Link to="/5g-solutions" className="block px-4 py-3 text-sm text-white hover:bg-green-500/10 hover:text-green-400 transition-all duration-300">
                      5G Solutions
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-pink-400 uppercase tracking-wider border-b border-pink-500/20 mt-2">Business Solutions</div>
                    <Link to="/digital-transformation" className="block px-4 py-3 text-sm text-white hover:bg-pink-500/10 hover:text-pink-400 transition-all duration-300">
                      Digital Transformation
                    </Link>
                    <Link to="/micro-saas-solutions" className="block px-4 py-3 text-sm text-white hover:bg-pink-500/10 hover:text-pink-400 transition-all duration-300">
                      Micro SaaS Solutions
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-orange-400 uppercase tracking-wider border-b border-orange-500/20 mt-2">AI Tools</div>
                    <Link to="/zion-ai-content-moderator" className="block px-4 py-3 text-sm text-white hover:bg-orange-500/10 hover:text-orange-400 transition-all duration-300">
                      AI Content Moderator
                    </Link>
                    <Link to="/zion-ai-customer-churn-predictor" className="block px-4 py-3 text-sm text-white hover:bg-orange-500/10 hover:text-orange-400 transition-all duration-300">
                      Customer Churn Predictor
                    </Link>
                    <Link to="/zion-ai-customer-sentiment-tracker" className="block px-4 py-3 text-sm text-white hover:bg-orange-500/10 hover:text-orange-400 transition-all duration-300">
                      Customer Sentiment Tracker
                    </Link>
                    <Link to="/zion-ai-document-analyzer" className="block px-4 py-3 text-sm text-white hover:bg-orange-500/10 hover:text-orange-400 transition-all duration-300">
                      Document Analyzer
                    </Link>
                    <Link to="/zion-ai-financial-forecaster" className="block px-4 py-3 text-sm text-white hover:bg-orange-500/10 hover:text-orange-400 transition-all duration-300">
                      Financial Forecaster
                    </Link>
                    <Link to="/zion-ai-sales-predictor" className="block px-4 py-3 text-sm text-white hover:bg-orange-500/10 hover:text-orange-400 transition-all duration-300">
                      Sales Predictor
                    </Link>
                    <Link to="/zion-ai-workflow-automator" className="block px-4 py-3 text-sm text-white hover:bg-orange-500/10 hover:text-orange-400 transition-all duration-300">
                      Workflow Automator
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/pricing" className="text-white hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/20">
              Pricing
            </Link>
            <Link to="/blog" className="text-white hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/20">
              Blog
            </Link>
            <Link to="/team" className="text-white hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/20">
              Team
            </Link>
            <Link to="/careers" className="text-white hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/20">
              Careers
            </Link>
            <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30">
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400 focus:outline-none focus:text-cyan-400 p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link to="/" className="text-white hover:text-cyan-400 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-white/10">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-white/10">
              About
            </Link>
            <div className="space-y-1">
              <div className="text-cyan-400 px-4 py-2 text-base font-medium border-l-2 border-cyan-500">AI & Machine Learning</div>
              <Link to="/ai-services" className="text-white hover:text-cyan-400 block px-8 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-cyan-500/10">
                AI Services
              </Link>
              <Link to="/ai-solutions" className="text-white hover:text-cyan-400 block px-8 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-cyan-500/10">
                AI Solutions
              </Link>
              <Link to="/ai-content-generator" className="text-white hover:text-cyan-400 block px-8 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-cyan-500/10">
                AI Content Generator
              </Link>
              <Link to="/data-analytics" className="text-white hover:text-cyan-400 block px-8 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-cyan-500/10">
                Data Analytics
              </Link>
              
              <div className="text-purple-400 px-4 py-2 text-base font-medium mt-4 border-l-2 border-purple-500">IT Services</div>
              <Link to="/it-services" className="text-white hover:text-purple-400 block px-8 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-purple-500/10">
                IT Services
              </Link>
              <Link to="/web-development" className="text-white hover:text-purple-400 block px-8 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-purple-500/10">
                Web Development
              </Link>
              <Link to="/mobile-development" className="text-white hover:text-purple-400 block px-8 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-purple-500/10">
                Mobile Development
              </Link>
              <Link to="/database-management" className="text-white hover:text-purple-400 block px-8 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-purple-500/10">
                Database Management
              </Link>
              <Link to="/network-infrastructure" className="text-white hover:text-purple-400 block px-8 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-purple-500/10">
                Network Infrastructure
              </Link>
              
              <div className="text-green-400 px-4 py-2 text-base font-medium mt-4 border-l-2 border-green-500">Infrastructure</div>
              <Link to="/cloud-infrastructure" className="text-white hover:text-green-400 block px-8 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-green-500/10">
                Cloud Infrastructure
              </Link>
              <Link to="/5g-solutions" className="text-white hover:text-green-400 block px-8 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-green-500/10">
                5G Solutions
              </Link>
              
              <div className="text-pink-400 px-4 py-2 text-base font-medium mt-4 border-l-2 border-pink-500">Business Solutions</div>
              <Link to="/digital-transformation" className="text-white hover:text-pink-400 block px-8 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-pink-500/10">
                Digital Transformation
              </Link>
              <Link to="/micro-saas-solutions" className="text-white hover:text-pink-400 block px-8 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-pink-500/10">
                Micro SaaS Solutions
              </Link>
              
              <div className="text-orange-400 px-4 py-2 text-base font-medium mt-4 border-l-2 border-orange-500">AI Tools</div>
              <Link to="/zion-ai-content-moderator" className="text-white hover:text-orange-400 block px-8 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-orange-500/10">
                AI Content Moderator
              </Link>
              <Link to="/zion-ai-customer-churn-predictor" className="text-white hover:text-orange-400 block px-8 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-orange-500/10">
                Customer Churn Predictor
              </Link>
              <Link to="/zion-ai-customer-sentiment-tracker" className="text-white hover:text-orange-400 block px-8 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-orange-500/10">
                Customer Sentiment Tracker
              </Link>
              <Link to="/zion-ai-document-analyzer" className="text-white hover:text-orange-400 block px-8 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-orange-500/10">
                Document Analyzer
              </Link>
              <Link to="/zion-ai-financial-forecaster" className="text-white hover:text-orange-400 block px-8 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-orange-500/10">
                Financial Forecaster
              </Link>
              <Link to="/zion-ai-sales-predictor" className="text-white hover:text-orange-400 block px-8 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-orange-500/10">
                Sales Predictor
              </Link>
              <Link to="/zion-ai-workflow-automator" className="text-white hover:text-orange-400 block px-8 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-orange-500/10">
                Workflow Automator
              </Link>
            </div>
            <Link to="/pricing" className="text-white hover:text-cyan-400 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-white/10">
              Pricing
            </Link>
            <Link to="/blog" className="text-white hover:text-cyan-400 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-white/10">
              Blog
            </Link>
            <Link to="/team" className="text-white hover:text-cyan-400 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-white/10">
              Team
            </Link>
            <Link to="/careers" className="text-white hover:text-cyan-400 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-white/10">
              Careers
            </Link>
            <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;