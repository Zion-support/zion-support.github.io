import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 group-hover:from-cyan-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-300">
                Zion Tech Group
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 flex items-center">
                Services
                <svg className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-lg rounded-xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 text-sm uppercase tracking-wider">AI Services</h3>
                      <div className="space-y-2">
                        <Link to="/ai-services" className="block text-gray-300 hover:text-cyan-400 text-sm transition-colors">AI Development</Link>
                        <Link to="/ai-content-generator" className="block text-gray-300 hover:text-cyan-400 text-sm transition-colors">Content Generator Pro</Link>
                        <Link to="/zion-ai-customer-support-pro" className="block text-gray-300 hover:text-cyan-400 text-sm transition-colors">Customer Support AI</Link>
                        <Link to="/zion-ai-sales-predictor" className="block text-gray-300 hover:text-cyan-400 text-sm transition-colors">Sales Predictor</Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-purple-400 font-semibold mb-3 text-sm uppercase tracking-wider">Micro SaaS</h3>
                      <div className="space-y-2">
                        <Link to="/micro-saas-solutions" className="block text-gray-300 hover:text-purple-400 text-sm transition-colors">All Micro SaaS</Link>
                        <Link to="/zion-ai-task-scheduler" className="block text-gray-300 hover:text-purple-400 text-sm transition-colors">Task Manager Pro</Link>
                        <Link to="/zion-smart-expense-tracker" className="block text-gray-300 hover:text-purple-400 text-sm transition-colors">Expense Tracker</Link>
                        <Link to="/zion-ai-workflow-automator-pro" className="block text-gray-300 hover:text-purple-400 text-sm transition-colors">Workflow Automator</Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-green-400 font-semibold mb-3 text-sm uppercase tracking-wider">IT Solutions</h3>
                      <div className="space-y-2">
                        <Link to="/it-services" className="block text-gray-300 hover:text-green-400 text-sm transition-colors">IT Services</Link>
                        <Link to="/web-development" className="block text-gray-300 hover:text-green-400 text-sm transition-colors">Web Development</Link>
                        <Link to="/cloud-infrastructure" className="block text-gray-300 hover:text-green-400 text-sm transition-colors">Cloud Infrastructure</Link>
                        <Link to="/digital-transformation" className="block text-gray-300 hover:text-green-400 text-sm transition-colors">Digital Transformation</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link 
              to="/about" 
              className="text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10"
            >
              About
            </Link>
            <Link 
              to="/team" 
              className="text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10"
            >
              Team
            </Link>
            <Link 
              to="/pricing" 
              className="text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10"
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10"
            >
              Contact
            </Link>
            
            {/* CTA Button */}
            <Link 
              to="/contact" 
              className="ml-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:text-cyan-400 transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-lg border-t border-cyan-500/20">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-lg text-base font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            {/* Mobile Services Section */}
            <div className="px-3 py-2">
              <div className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-2">AI Services</div>
              <div className="ml-4 space-y-1">
                <Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 block py-1 text-sm transition-colors" onClick={() => setIsOpen(false)}>AI Development</Link>
                <Link to="/ai-content-generator" className="text-gray-300 hover:text-cyan-400 block py-1 text-sm transition-colors" onClick={() => setIsOpen(false)}>Content Generator Pro</Link>
                <Link to="/zion-ai-customer-support-pro" className="text-gray-300 hover:text-cyan-400 block py-1 text-sm transition-colors" onClick={() => setIsOpen(false)}>Customer Support AI</Link>
                <Link to="/zion-ai-sales-predictor" className="text-gray-300 hover:text-cyan-400 block py-1 text-sm transition-colors" onClick={() => setIsOpen(false)}>Sales Predictor</Link>
              </div>
            </div>

            <div className="px-3 py-2">
              <div className="text-purple-400 font-semibold text-sm uppercase tracking-wider mb-2">Micro SaaS</div>
              <div className="ml-4 space-y-1">
                <Link to="/micro-saas-solutions" className="text-gray-300 hover:text-purple-400 block py-1 text-sm transition-colors" onClick={() => setIsOpen(false)}>All Micro SaaS</Link>
                <Link to="/zion-ai-task-scheduler" className="text-gray-300 hover:text-purple-400 block py-1 text-sm transition-colors" onClick={() => setIsOpen(false)}>Task Manager Pro</Link>
                <Link to="/zion-smart-expense-tracker" className="text-gray-300 hover:text-purple-400 block py-1 text-sm transition-colors" onClick={() => setIsOpen(false)}>Expense Tracker</Link>
                <Link to="/zion-ai-workflow-automator-pro" className="text-gray-300 hover:text-purple-400 block py-1 text-sm transition-colors" onClick={() => setIsOpen(false)}>Workflow Automator</Link>
              </div>
            </div>

            <div className="px-3 py-2">
              <div className="text-green-400 font-semibold text-sm uppercase tracking-wider mb-2">IT Solutions</div>
              <div className="ml-4 space-y-1">
                <Link to="/it-services" className="text-gray-300 hover:text-green-400 block py-1 text-sm transition-colors" onClick={() => setIsOpen(false)}>IT Services</Link>
                <Link to="/web-development" className="text-gray-300 hover:text-green-400 block py-1 text-sm transition-colors" onClick={() => setIsOpen(false)}>Web Development</Link>
                <Link to="/cloud-infrastructure" className="text-gray-300 hover:text-green-400 block py-1 text-sm transition-colors" onClick={() => setIsOpen(false)}>Cloud Infrastructure</Link>
                <Link to="/digital-transformation" className="text-gray-300 hover:text-green-400 block py-1 text-sm transition-colors" onClick={() => setIsOpen(false)}>Digital Transformation</Link>
              </div>
            </div>

            <Link 
              to="/about" 
              className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-lg text-base font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/team" 
              className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-lg text-base font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
            <Link 
              to="/pricing" 
              className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-lg text-base font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-lg text-base font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            
            {/* Mobile CTA */}
            <div className="pt-4">
              <Link 
                to="/contact" 
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;