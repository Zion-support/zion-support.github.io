import React from "react";
import { Helmet } from "react-helmet-async";

const NavigationPage = () => {
  return (
    <>
      {/* Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-2 text-sm">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Phone className="h-4 w-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-400">
                <Mail className="h-4 w-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-400">
                <MapPin className="h-4 w-4" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FuturisticButton
                as={Link}
                to="/contact
                className="px-4 py-1 text-sm
                variant="outline
              >
                Get Quote
              </FuturisticButton>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                to="/
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-cyan-400 bg-cyan-500/10' 
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
              >
                Home
              </Link>

              <Link
                to="/about
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-cyan-400 bg-cyan-500/10' 
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
              >
                About
              </Link>

              {/* AI Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isServicesOpen || aiServices.some(service => isActive(service.path))
                      ? 'text-cyan-400 bg-cyan-500/10' 
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                >
                  AI Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-slate-800 rounded-lg shadow-lg border border-cyan-500/20 py-2 z-50">
                    {aiServices.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={closeAllDropdowns}
                        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors
                      >
                        <service.icon className="h-4 w-4 mr-3" />
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* IT Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleItServices}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isItServicesOpen || itServices.some(service => isActive(service.path))
                      ? 'text-cyan-400 bg-cyan-500/10' 
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                >
                  IT Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isItServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isItServicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-slate-800 rounded-lg shadow-lg border border-cyan-500/20 py-2 z-50">
                    {itServices.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={closeAllDropdowns}
                        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors
                      >
                        <service.icon className="h-4 w-4 mr-3" />
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Micro SAAS Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleMicroSaas}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isMicroSaasOpen || microSaasServices.some(service => isActive(service.path))
                      ? 'text-cyan-400 bg-cyan-500/10' 
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                >
                  Micro SAAS
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isMicroSaasOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMicroSaasOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-slate-800 rounded-lg shadow-lg border border-cyan-500/20 py-2 z-50">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={closeAllDropdowns}
                        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors
                      >
                        <service.icon className="h-4 w-4 mr-3" />
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/pricing
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/pricing') 
                    ? 'text-cyan-400 bg-cyan-500/10' 
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
              >
                Pricing
              </Link>

              <Link
                to="/blog
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/blog') 
                    ? 'text-cyan-400 bg-cyan-500/10' 
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
              >
                Blog
              </Link>

              <Link
                to="/contact
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-cyan-400 bg-cyan-500/10' 
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <FuturisticButton
                as={Link}
                to="/demo
                className="px-4 py-2 text-sm
                variant="outline
              >
                Demo
              </FuturisticButton>
              <FuturisticButton
                as={Link}
                to="/contact
                className="px-4 py-2 text-sm
                variant="primary
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </FuturisticButton>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={onSidebarToggle}
                className="p-2 rounded-md text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors
              >
                <SidebarIcon className="h-6 w-6" />
              </button>
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-slate-800 border-t border-cyan-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/
                onClick={closeAllDropdowns}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/') 
                    ? 'text-cyan-400 bg-cyan-500/10' 
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
              >
                Home
              </Link>
              
              <Link
                to="/about
                onClick={closeAllDropdowns}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/about') 
                    ? 'text-cyan-400 bg-cyan-500/10' 
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
              >
                About
              </Link>

              <Link
                to="/ai-services
                onClick={closeAllDropdowns}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/ai-services') 
                    ? 'text-cyan-400 bg-cyan-500/10' 
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
              >
                AI Services
              </Link>

              <Link
                to="/services
                onClick={closeAllDropdowns}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/services') 
                    ? 'text-cyan-400 bg-cyan-500/10' 
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
              >
                IT Services
              </Link>

              <Link
                to="/micro-saas
                onClick={closeAllDropdowns}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/micro-saas') 
                    ? 'text-cyan-400 bg-cyan-500/10' 
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
              >
                Micro SAAS
              </Link>

              <Link
                to="/pricing
                onClick={closeAllDropdowns}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/pricing') 
                    ? 'text-cyan-400 bg-cyan-500/10' 
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
              >
                Pricing
              </Link>

              <Link
                to="/blog
                onClick={closeAllDropdowns}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/blog') 
                    ? 'text-cyan-400 bg-cyan-500/10' 
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
              >
                Blog
              </Link>

              <Link
                to="/contact
                onClick={closeAllDropdowns}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/contact') 
                    ? 'text-cyan-400 bg-cyan-500/10' 
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
              >
                Contact
              </Link>

              <div className="pt-4 pb-2 border-t border-cyan-500/20">
                <FuturisticButton
                  as={Link}
                  to="/demo
                  onClick={closeAllDropdowns}
                  className="w-full mb-2
                  variant="outline
                >
                  Demo
                </FuturisticButton>
                <FuturisticButton
                  as={Link}
                  to="/contact
                  onClick={closeAllDropdowns}
                  className="w-full
                  variant="primary
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </FuturisticButton>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Click outside to close dropdowns */}
      {(isServicesOpen || isItServicesOpen || isMicroSaasOpen) && (
        <div
          className="fixed inset-0 z-40
          onClick={closeAllDropdowns}
        />
      )}
    </>
  );
};

export default Navigation
