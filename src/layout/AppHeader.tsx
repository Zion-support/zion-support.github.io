import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown } from 'lucide-react';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Services', href: '/services', current: false, hasDropdown: true },
    { name: 'Solutions', href: '/solutions', current: false },
    { name: 'Company', href: '#', current: false, hasDropdown: true },
    { name: 'Resources', href: '#', current: false, hasDropdown: true },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const servicesDropdown = [
    { name: 'AI Solutions', href: '/services/ai' },
    { name: 'Cloud & DevOps', href: '/services/cloud' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
    { name: 'IT Infrastructure', href: '/services/infrastructure' },
    { name: 'Digital Transformation', href: '/services/transformation' },
    { name: 'Consulting', href: '/services/consulting' },
  ];

  const companyDropdown = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'News & Updates', href: '/news' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Partners', href: '/partners' },
  ];

  const resourcesDropdown = [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: '/docs' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Training', href: '/training' },
    { name: 'Help Center', href: '/help' },
  ];

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'border-b border-zion-cyan/30 bg-slate-900/95 backdrop-blur-md shadow-lg shadow-zion-cyan/10' 
          : 'border-b border-slate-700/20 bg-slate-900/80 backdrop-blur-md'
      }`}>
        <div className="container-responsive flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  Zion Tech Group
                </h1>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex ml-8 space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => {
                        if (item.name === 'Services') setServicesDropdownOpen(!servicesDropdownOpen);
                        if (item.name === 'Company') setCompanyDropdownOpen(!companyDropdownOpen);
                        if (item.name === 'Resources') setResourcesDropdownOpen(!resourcesDropdownOpen);
                      }}
                      className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {/* Services Dropdown */}
                    {item.name === 'Services' && servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-slate-800 border border-slate-700 rounded-lg shadow-lg py-2 z-50">
                        {servicesDropdown.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block px-4 py-2 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors duration-200"
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                    
                    {/* Company Dropdown */}
                    {item.name === 'Company' && companyDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-slate-800 border border-slate-700 rounded-lg shadow-lg py-2 z-50">
                        {companyDropdown.map((company) => (
                          <Link
                            key={company.name}
                            to={company.href}
                            className="block px-4 py-2 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors duration-200"
                            onClick={() => setCompanyDropdownOpen(false)}
                          >
                            {company.name}
                          </Link>
                        ))}
                      </div>
                    )}
                    
                    {/* Resources Dropdown */}
                    {item.name === 'Resources' && resourcesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-slate-800 border border-slate-700 rounded-lg shadow-lg py-2 z-50">
                        {resourcesDropdown.map((resource) => (
                          <Link
                            key={resource.name}
                            to={resource.href}
                            className="block px-4 py-2 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors duration-200"
                            onClick={() => setResourcesDropdownOpen(false)}
                          >
                            {resource.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
                className="flex items-center text-slate-300 hover:text-zion-cyan px-3 py-2 text-sm font-medium transition-colors duration-200 group"
              >
                Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 border border-slate-700/50 rounded-xl shadow-2xl backdrop-blur-md neon-card"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <div className="p-6">
                    <div className="grid grid-cols-1 gap-3 mb-6">
                      {services.map((service) => {
                        const IconComponent = service.icon;
                        return (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group"
                          >
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200`}>
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="text-white font-medium group-hover:text-zion-cyan transition-colors">
                                {service.name}
                              </div>
                              <div className="text-sm text-gray-400">
                                {service.description}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    
                    {/* Micro SAAS Services */}
                    <div className="border-t border-slate-700/50 pt-4">
                      <h3 className="text-sm font-semibold text-zion-cyan mb-3">Micro SAAS Solutions</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {microSaasServices.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="text-xs text-gray-400 hover:text-zion-cyan transition-colors p-2 rounded hover:bg-slate-700/30"
                          >
                            <div className="font-medium">{service.name}</div>
                            <div className="text-zion-cyan">{service.price}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-slate-700/50">
                      <Link
                        to="/services"
                        className="block text-center text-zion-cyan hover:text-zion-cyan-light text-sm font-medium transition-colors py-2 rounded-lg hover:bg-slate-700/30"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
                onMouseEnter={() => setResourcesDropdownOpen(true)}
                className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                  resourcesDropdownOpen 
                    ? 'text-cyan-400 bg-cyan-500/10' 
                    : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50'
                }`}
              >
                Resources
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${resourcesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {resourcesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 border border-slate-700/50 rounded-xl shadow-xl backdrop-blur-md"
                  onMouseEnter={() => setResourcesDropdownOpen(true)}
                  onMouseLeave={() => setResourcesDropdownOpen(false)}
                >
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-2">
                      {resources.map((resource) => (
                        <Link
                          key={resource.name}
                          to={resource.href}
                          className="flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                        >
                          <div className="flex-1">
                            <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                              {resource.name}
                            </div>
                            <div className="text-sm text-gray-400">
                              {resource.description}
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Search and Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 focus:outline-none transition-all duration-300"
                />
              </div>
            </form>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button className="p-2 text-gray-400 hover:text-zion-cyan transition-colors duration-200">
                <Bell className="w-5 h-5" />
              </button>
              <Link
                to="/login"
                className="btn-primary text-sm px-4 py-2"
              >
                Sign In
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 border-t border-slate-700/20">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div className="space-y-2">
                      <div className="text-slate-400 px-3 py-2 text-sm font-medium">{item.name}</div>
                      {item.name === 'Services' && (
                        <div className="ml-4 space-y-1">
                          {servicesDropdown.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="text-slate-300 hover:text-cyan-400 block px-3 py-2 text-sm transition-colors duration-200"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                      {item.name === 'Company' && (
                        <div className="ml-4 space-y-1">
                          {companyDropdown.map((company) => (
                            <Link
                              key={company.name}
                              to={company.href}
                              className="text-slate-300 hover:text-cyan-400 block px-3 py-2 text-sm transition-colors duration-200"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {company.name}
                            </Link>
                          ))}
                        </div>
                      )}
                      {item.name === 'Resources' && (
                        <div className="ml-4 space-y-1">
                          {resourcesDropdown.map((resource) => (
                            <Link
                              key={resource.name}
                              to={resource.href}
                              className="text-slate-300 hover:text-cyan-400 block px-3 py-2 text-sm transition-colors duration-200"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {resource.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-slate-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile services */}
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-slate-400 mb-2">Services</div>
                <div className="space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-3 py-2 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50 rounded-md transition-colors duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-6 mt-2 space-y-2"
                      >
                        {item.dropdown?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block p-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-colors duration-200"
                          >
                            <div className="flex items-center gap-3">
                              <dropdownItem.icon className="w-4 h-4" />
                              <div>
                                <div className="font-medium text-white">{dropdownItem.name}</div>
                                <div className="text-sm text-zion-slate-light">{dropdownItem.description}</div>
                                {dropdownItem.price && (
                                  <div className="text-xs text-zion-cyan">{dropdownItem.price}</div>
                                )}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Contact Info */}
              <div className="mt-8 pt-6 border-t border-zion-cyan/20">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-zion-slate-light">
                    <Phone className="w-4 h-4 text-zion-cyan" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center gap-3 text-zion-slate-light">
                    <Mail className="w-4 h-4 text-zion-cyan" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-zion-slate-light">
                    <MapPin className="w-4 h-4 text-zion-cyan" />
                    <span>364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </div>

              {/* Mobile resources */}
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-slate-400 mb-2">Resources</div>
                <div className="space-y-1">
                  {resources.map((resource) => (
                    <Link
                      key={resource.name}
                      to={resource.href}
                      className="block px-3 py-2 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50 rounded-md transition-colors duration-200"
                    >
                      {resource.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
