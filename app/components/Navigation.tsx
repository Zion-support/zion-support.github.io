import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  return (
    <nav className="bg-gray-900/90 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-3xl font-bold neon-text cyber-font">ZION TECH</h1>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800/50">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800/50">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300 hover:bg-gray-800/50">
                Services
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-700">
                <div className="py-2">
                  <div className="px-4 py-2 text-xs font-semibold text-neon-blue uppercase tracking-wider">AI Services</div>
                  <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-blue hover:bg-gray-800/50 transition-all duration-200">AI Development & Consulting</Link>
                  <Link to="/ai-content-generator" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-blue hover:bg-gray-800/50 transition-all duration-200">AI Content Generation</Link>
                  
                  <div className="px-4 py-2 text-xs font-semibold text-neon-purple uppercase tracking-wider mt-2">Micro SAAS</div>
                  <Link to="/micro-saas-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-purple hover:bg-gray-800/50 transition-all duration-200">Task Management Pro</Link>
                  <Link to="/zion-smart-expense-tracker" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-purple hover:bg-gray-800/50 transition-all duration-200">Smart Expense Tracker</Link>
                  <Link to="/zion-ai-email-marketing-pro" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-purple hover:bg-gray-800/50 transition-all duration-200">Email Marketing Pro</Link>
                  
                  <div className="px-4 py-2 text-xs font-semibold text-neon-pink uppercase tracking-wider mt-2">IT Solutions</div>
                  <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-pink hover:bg-gray-800/50 transition-all duration-200">IT Services</Link>
                  <Link to="/cloud-infrastructure" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-pink hover:bg-gray-800/50 transition-all duration-200">Cloud Infrastructure</Link>
                  <Link to="/web-development" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-pink hover:bg-gray-800/50 transition-all duration-200">Web Development</Link>
                  <Link to="/mobile-development" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-pink hover:bg-gray-800/50 transition-all duration-200">Mobile Development</Link>
                  <Link to="/cybersecurity" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-pink hover:bg-gray-800/50 transition-all duration-200">Cybersecurity</Link>
                </div>
              </div>
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300 hover:bg-gray-800/50">
                Company
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-md rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-700">
                <div className="py-2">
                  <Link to="/team" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-blue hover:bg-gray-800/50 transition-all duration-200">Our Team</Link>
                  <Link to="/careers" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-blue hover:bg-gray-800/50 transition-all duration-200">Careers</Link>
                  <Link to="/partnerships" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-blue hover:bg-gray-800/50 transition-all duration-200">Partnerships</Link>
                  <Link to="/case-studies" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-blue hover:bg-gray-800/50 transition-all duration-200">Case Studies</Link>
                  <Link to="/pricing" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-blue hover:bg-gray-800/50 transition-all duration-200">Pricing</Link>
                </div>
              </div>
            </div>

            <Link to="/blog" className="text-white hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800/50">
              Blog
            </Link>
            <Link to="/contact" className="neon-button px-6 py-2 text-sm font-bold">
              Contact
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-neon-blue focus:outline-none focus:text-neon-blue transition-all duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-white hover:text-neon-blue block px-3 py-2 rounded-md text-base font-medium transition-all duration-300">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-neon-blue block px-3 py-2 rounded-md text-base font-medium transition-all duration-300">
              About
            </Link>
            
            {/* Mobile Services Section */}
            <div>
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-white hover:text-neon-blue block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between transition-all duration-300"
              >
                Services
                <svg className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-1 bg-gray-800/50 rounded-lg mt-2">
                  <div className="px-3 py-1 text-xs font-semibold text-neon-blue uppercase tracking-wider">AI Services</div>
                  <Link to="/ai-services" className="text-gray-300 hover:text-neon-blue block px-3 py-2 rounded-md text-sm transition-all duration-200">AI Development</Link>
                  <Link to="/ai-content-generator" className="text-gray-300 hover:text-neon-blue block px-3 py-2 rounded-md text-sm transition-all duration-200">AI Content Generator</Link>
                  
                  <div className="px-3 py-1 text-xs font-semibold text-neon-purple uppercase tracking-wider">Micro SAAS</div>
                  <Link to="/micro-saas-solutions" className="text-gray-300 hover:text-neon-purple block px-3 py-2 rounded-md text-sm transition-all duration-200">Task Management Pro</Link>
                  <Link to="/zion-smart-expense-tracker" className="text-gray-300 hover:text-neon-purple block px-3 py-2 rounded-md text-sm transition-all duration-200">Expense Tracker</Link>
                  
                  <div className="px-3 py-1 text-xs font-semibold text-neon-pink uppercase tracking-wider">IT Solutions</div>
                  <Link to="/it-services" className="text-gray-300 hover:text-neon-pink block px-3 py-2 rounded-md text-sm transition-all duration-200">IT Services</Link>
                  <Link to="/cloud-infrastructure" className="text-gray-300 hover:text-neon-pink block px-3 py-2 rounded-md text-sm transition-all duration-200">Cloud Infrastructure</Link>
                  <Link to="/web-development" className="text-gray-300 hover:text-neon-pink block px-3 py-2 rounded-md text-sm transition-all duration-200">Web Development</Link>
                  <Link to="/mobile-development" className="text-gray-300 hover:text-neon-pink block px-3 py-2 rounded-md text-sm transition-all duration-200">Mobile Development</Link>
                </div>
              )}
            </div>

            {/* Mobile Company Section */}
            <div>
              <button 
                onClick={() => setCompanyOpen(!companyOpen)}
                className="text-white hover:text-neon-blue block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between transition-all duration-300"
              >
                Company
                <svg className={`h-4 w-4 transition-transform ${companyOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {companyOpen && (
                <div className="pl-4 space-y-1 bg-gray-800/50 rounded-lg mt-2">
                  <Link to="/team" className="text-gray-300 hover:text-neon-blue block px-3 py-2 rounded-md text-sm transition-all duration-200">Our Team</Link>
                  <Link to="/careers" className="text-gray-300 hover:text-neon-blue block px-3 py-2 rounded-md text-sm transition-all duration-200">Careers</Link>
                  <Link to="/partnerships" className="text-gray-300 hover:text-neon-blue block px-3 py-2 rounded-md text-sm transition-all duration-200">Partnerships</Link>
                  <Link to="/case-studies" className="text-gray-300 hover:text-neon-blue block px-3 py-2 rounded-md text-sm transition-all duration-200">Case Studies</Link>
                  <Link to="/pricing" className="text-gray-300 hover:text-neon-blue block px-3 py-2 rounded-md text-sm transition-all duration-200">Pricing</Link>
                </div>
              )}
            </div>

            <Link to="/blog" className="text-white hover:text-neon-blue block px-3 py-2 rounded-md text-base font-medium transition-all duration-300">
              Blog
            </Link>
            <Link to="/contact" className="neon-button w-full text-center block mt-4">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;