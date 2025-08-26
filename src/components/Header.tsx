import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const services = [
    { name: "AI Solutions", path: "/services/ai", description: "AI-powered business solutions" },
    { name: "Cloud & DevOps", path: "/services/cloud", description: "Cloud infrastructure & automation" },
    { name: "Cybersecurity", path: "/services/cybersecurity", description: "Advanced security solutions" },
    { name: "IT Infrastructure", path: "/services/infrastructure", description: "Robust IT foundations" },
    { name: "Digital Transformation", path: "/services/transformation", description: "Business modernization" },
    { name: "Consulting", path: "/services/consulting", description: "Strategic technology guidance" }
  ];

  const solutions = [
    { name: "Enterprise", path: "/solutions/enterprise", description: "Large-scale business solutions" },
    { name: "Financial", path: "/solutions/financial", description: "Fintech & banking solutions" },
    { name: "Healthcare", path: "/solutions/healthcare", description: "Healthcare technology" },
    { name: "Government", path: "/solutions/government", description: "Public sector solutions" },
    { name: "Manufacturing", path: "/solutions/manufacturing", description: "Industry 4.0 solutions" },
    { name: "Retail", path: "/solutions/retail", description: "E-commerce & retail tech" }
  ];

  const company = [
    { name: "About Us", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" }
  ];

  const resources = [
    { name: "Blog", path: "/blog" },
    { name: "Events", path: "/events" },
    { name: "Webinars", path: "/webinars" },
    { name: "White Papers", path: "/white-papers" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "Research & Development", path: "/research-development" }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/20 shadow-2xl' 
        : 'bg-slate-900/80 backdrop-blur-lg border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center group" onClick={closeMenu}>
            <motion.div 
              className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg"
              whileHover={{ rotate: 5 }}
            >
              <span className="text-white font-bold text-xl lg:text-2xl">Z</span>
            </motion.div>
            <motion.span 
              className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-zion-cyan via-white to-zion-purple bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Zion Tech Group
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
              >
                Services
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    >
                      <div className="font-medium">{service.name}</div>
                      <div className="text-sm text-gray-600">{service.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
                className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
              >
                Solutions
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isSolutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.path}
                      to={solution.path}
                      className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    >
                      <div className="font-medium">{solution.name}</div>
                      <div className="text-sm text-gray-600">{solution.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsCompanyOpen(true)}
                onMouseLeave={() => setIsCompanyOpen(false)}
                className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
              >
                Company
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isCompanyOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                  {company.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
                className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
              >
                Resources
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isResourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                  {resources.map((resource) => (
                    <Link
                      key={resource.path}
                      to={resource.path}
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    >
                      {resource.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/pricing"
              className="text-gray-300 hover:text-white transition-colors duration-300 px-4 py-2"
            >
              Pricing
            </Link>

            <Link
              to="/contact"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/get-started"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 rounded-lg mt-2">
              <Link
                key={path}
                to={path}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                  isActive(path)
                    ? 'text-blue-400 bg-blue-900/20'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
                aria-current={isActive(path) ? 'page' : undefined}
              >
                Home
              </Link>
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-gray-300 font-medium mb-2">Services</div>
                <div className="ml-4 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block text-gray-400 hover:text-white hover:bg-gray-700 rounded-md px-2 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Solutions */}
              <div className="px-3 py-2">
                <div className="text-gray-300 font-medium mb-2">Solutions</div>
                <div className="ml-4 space-y-1">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.path}
                      to={solution.path}
                      className="block text-gray-400 hover:text-white hover:bg-gray-700 rounded-md px-2 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {solution.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Company */}
              <div className="px-3 py-2">
                <div className="text-gray-300 font-medium mb-2">Company</div>
                <div className="ml-4 space-y-1">
                  {company.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block text-gray-400 hover:text-white hover:bg-gray-700 rounded-md px-2 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Resources */}
              <div className="px-3 py-2">
                <div className="text-gray-300 font-medium mb-2">Resources</div>
                <div className="ml-4 space-y-1">
                  {resources.map((resource) => (
                    <Link
                      key={resource.path}
                      to={resource.path}
                      className="block text-gray-400 hover:text-white hover:bg-gray-700 rounded-md px-2 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {resource.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/pricing"
                className="block w-full text-center px-6 py-2 text-gray-300 hover:text-white transition-colors duration-300"
                onClick={closeMenu}
              >
                Pricing
              </Link>

              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <Link
                to="/get-started"
                className="block px-3 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-md font-semibold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
