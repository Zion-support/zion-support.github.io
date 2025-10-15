import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FuturisticNavigation: React.FC = () => {
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

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Team', path: '/team' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      services: [
        { name: 'AI Services', path: '/ai-services' },
        { name: 'AI Solutions', path: '/ai-solutions' },
        { name: 'AI Content Generator', path: '/ai-content-generator' },
        { name: 'Data Analytics', path: '/data-analytics' }
      ]
    },
    {
      title: 'IT Services',
      services: [
        { name: 'IT Services', path: '/it-services' },
        { name: 'Web Development', path: '/web-development' },
        { name: 'Mobile Development', path: '/mobile-development' },
        { name: 'Database Management', path: '/database-management' },
        { name: 'Network Infrastructure', path: '/network-infrastructure' }
      ]
    },
    {
      title: 'Infrastructure',
      services: [
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure' },
        { name: '5G Solutions', path: '/5g-solutions' }
      ]
    },
    {
      title: 'Business Solutions',
      services: [
        { name: 'Digital Transformation', path: '/digital-transformation' },
        { name: 'Micro SaaS Solutions', path: '/micro-saas-solutions' }
      ]
    },
    {
      title: 'AI Tools',
      services: [
        { name: 'AI Content Moderator', path: '/zion-ai-content-moderator' },
        { name: 'Customer Churn Predictor', path: '/zion-ai-customer-churn-predictor' },
        { name: 'Customer Sentiment Tracker', path: '/zion-ai-customer-sentiment-tracker' },
        { name: 'Document Analyzer', path: '/zion-ai-document-analyzer' },
        { name: 'Financial Forecaster', path: '/zion-ai-financial-forecaster' },
        { name: 'Sales Predictor', path: '/zion-ai-sales-predictor' },
        { name: 'Workflow Automator', path: '/zion-ai-workflow-automator' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-md border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-gray-400 -mt-1">Advanced AI & IT Solutions</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    className="relative"
                  >
                    <button className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center group">
                      {item.name}
                      <svg className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {servicesOpen && (
                      <div className="absolute left-0 mt-2 w-96 bg-black/90 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-500/20 overflow-hidden">
                        <div className="p-6">
                          {serviceCategories.map((category, index) => (
                            <div key={index} className="mb-6 last:mb-0">
                              <h3 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                                {category.title}
                              </h3>
                              <div className="grid grid-cols-1 gap-1">
                                {category.services.map((service) => (
                                  <Link
                                    key={service.name}
                                    to={service.path}
                                    className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-200 group"
                                  >
                                    <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                                      {service.name}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400 focus:outline-none focus:text-cyan-400 p-2"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-cyan-500/20">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <div className="text-cyan-400 px-3 py-2 text-base font-medium">
                      {item.name}
                    </div>
                    <div className="pl-6 space-y-1">
                      {serviceCategories.map((category) => (
                        <div key={category.title}>
                          <div className="text-gray-400 px-3 py-1 text-sm font-medium">
                            {category.title}
                          </div>
                          {category.services.map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-200"
                              onClick={() => setIsOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="text-white hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-700">
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center px-6 py-3 rounded-full text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
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

export default FuturisticNavigation;