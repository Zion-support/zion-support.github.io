import React, { useState, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
    }
  }, [closeMobileMenu]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`bg-white shadow-lg transition-all duration-200 ${
        isScrolled ? 'shadow-xl' : ''
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
              aria-label="Zion Tech Group - Home"
            >
              <h1 className="text-2xl font-bold text-blue-600">Zion Tech Group</h1>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
              aria-current={isActive('/') ? 'page' : undefined}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isActive('/about') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
              aria-current={isActive('/about') ? 'page' : undefined}
            >
              About
            </Link>
            <div className="relative group">
              <button 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-expanded="false"
                aria-haspopup="true"
                aria-label="Services menu"
              >
                Services
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" role="menu">
                <div className="py-1">
                  <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" role="menuitem">AI Services</Link>
                  <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" role="menuitem">IT Services</Link>
                  <Link to="/cloud-infrastructure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" role="menuitem">Cloud Infrastructure</Link>
                  <Link to="/digital-transformation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" role="menuitem">Digital Transformation</Link>
                  <Link to="/data-analytics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" role="menuitem">Data Analytics</Link>
                  <Link to="/web-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" role="menuitem">Web Development</Link>
                  <Link to="/mobile-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" role="menuitem">Mobile Development</Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-expanded="false"
                aria-haspopup="true"
                aria-label="AI Tools menu"
              >
                AI Tools
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" role="menu">
                <div className="py-1">
                  <Link to="/zion-ai-content-moderator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" role="menuitem">Content Moderator</Link>
                  <Link to="/zion-ai-customer-churn-predictor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" role="menuitem">Customer Churn Predictor</Link>
                  <Link to="/zion-ai-customer-sentiment-tracker" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" role="menuitem">Sentiment Tracker</Link>
                  <Link to="/zion-ai-document-analyzer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" role="menuitem">Document Analyzer</Link>
                  <Link to="/zion-ai-financial-forecaster" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" role="menuitem">Financial Forecaster</Link>
                  <Link to="/zion-ai-sales-predictor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" role="menuitem">Sales Predictor</Link>
                  <Link to="/zion-ai-workflow-automator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" role="menuitem">Workflow Automator</Link>
                </div>
              </div>
            </div>
            <Link 
              to="/pricing" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isActive('/pricing') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
              aria-current={isActive('/pricing') ? 'page' : undefined}
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isActive('/contact') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
              aria-current={isActive('/contact') ? 'page' : undefined}
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              onKeyDown={handleKeyDown}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-2"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu" role="menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
              role="menuitem"
              aria-current={isActive('/') ? 'page' : undefined}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isActive('/about') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
              role="menuitem"
              aria-current={isActive('/about') ? 'page' : undefined}
            >
              About
            </Link>
            <div className="px-3 py-2 text-base font-medium text-gray-700">
              Services
            </div>
            <div className="pl-6 space-y-1">
              <Link to="/ai-services" onClick={closeMobileMenu} className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" role="menuitem">AI Services</Link>
              <Link to="/it-services" onClick={closeMobileMenu} className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" role="menuitem">IT Services</Link>
              <Link to="/cloud-infrastructure" onClick={closeMobileMenu} className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" role="menuitem">Cloud Infrastructure</Link>
              <Link to="/digital-transformation" onClick={closeMobileMenu} className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" role="menuitem">Digital Transformation</Link>
            </div>
            <div className="px-3 py-2 text-base font-medium text-gray-700">
              AI Tools
            </div>
            <div className="pl-6 space-y-1">
              <Link to="/zion-ai-content-moderator" onClick={closeMobileMenu} className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" role="menuitem">Content Moderator</Link>
              <Link to="/zion-ai-customer-churn-predictor" onClick={closeMobileMenu} className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" role="menuitem">Churn Predictor</Link>
              <Link to="/zion-ai-sales-predictor" onClick={closeMobileMenu} className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" role="menuitem">Sales Predictor</Link>
            </div>
            <Link 
              to="/pricing" 
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isActive('/pricing') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
              role="menuitem"
              aria-current={isActive('/pricing') ? 'page' : undefined}
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isActive('/contact') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
              role="menuitem"
              aria-current={isActive('/contact') ? 'page' : undefined}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;