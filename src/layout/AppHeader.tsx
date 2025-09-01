
interface AppHeaderProps {
  onSidebarToggle?: () => void;
  isSidebarOpen?: boolean}

export function AppHeader({ onSidebarToggle, isSidebarOpen }: AppHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [activeNav, setActiveNav] = useState<any>(null);

  useEffect(() => {
    
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)}, []);

  
    if (searchQuery.trim()) {
      setIsSearching(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate search
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`} finally {
        setIsSearching(false)}
    }
  };

  
  // Organized Services Categories
  
  
  
  
  
  
  
  
  
  
      // Close other dropdowns
      if (nav.name === 'Services') {
        setServicesDropdownOpen(true);
        setSolutionsDropdownOpen(false);
        setCompanyDropdownOpen(false);
        setResourcesDropdownOpen(false)} else if (nav.name === 'Solutions') {
        setSolutionsDropdownOpen(true);
        setServicesDropdownOpen(false);
        setCompanyDropdownOpen(false);
        setResourcesDropdownOpen(false)} else if (nav.name === 'Pricing') {
        // Use the same dropdown state as solutions for pricing
        setSolutionsDropdownOpen(true);
        setServicesDropdownOpen(false);
        setCompanyDropdownOpen(false);
        setResourcesDropdownOpen(false)} else if (nav.name === 'Company') {
        setCompanyDropdownOpen(true);
        setServicesDropdownOpen(false);
        setSolutionsDropdownOpen(false);
        setResourcesDropdownOpen(false)} else if (nav.name === 'Resources') {
        setResourcesDropdownOpen(true);
        setServicesDropdownOpen(false);
        setSolutionsDropdownOpen(false);
        setCompanyDropdownOpen(false)}
    } else {
      setActiveNav(null);
      setServicesDropdownOpen(false);
      setSolutionsDropdownOpen(false);
      setCompanyDropdownOpen(false);
      setResourcesDropdownOpen(false)}
  };

  
    setSolutionsDropdownOpen(false);
    setCompanyDropdownOpen(false);
    setResourcesDropdownOpen(false);
    setActiveNav(null)};

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10' 
          : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20'
      }`}>
        <div className="container-responsive">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 group">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-6 h-6 text-white"  />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    Zion Tech Group
                  </h1>
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => {
                          if (item.name === 'Services') {
                            setServicesDropdownOpen(!servicesDropdownOpen);
                            setSolutionsDropdownOpen(false);
                            setResourcesDropdownOpen(false)} else if (item.name === 'Solutions') {
                            setSolutionsDropdownOpen(!solutionsDropdownOpen);
                            setServicesDropdownOpen(false);
                            setResourcesDropdownOpen(false)} else if (item.name === 'Resources') {
                            setResourcesDropdownOpen(!resourcesDropdownOpen);
                            setServicesDropdownOpen(false);
                            setSolutionsDropdownOpen(false)}
                        }}
                        className="flex items-center space-x-1 text-slate-300 hover:text-cyan-400 transition-colors duration-200 group"
                      >
                        <span className="font-medium">{item.name}</span>
                        <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200"  />
                      </button>

                      {/* Services Dropdown */}
                      {item.name === 'Services' && servicesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-screen max-w-6xl bg-slate-900/95 backdrop-blur-xl border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-400/10 p-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {servicesCategories.map((category) => (
                              <div key={category.title} className="space-y-4">
                                <div className="flex items-center space-x-2">
                                  <div className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                                    <category.icon className="w-4 h-4 text-white" />
                                  </div>
                                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                                </div>
                                <div className="space-y-2">
                                  {category.services.map((service) => (
                                    <Link
                                      key={service.name}
                                      to={service.href}
                                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors duration-200 group"
                                    >
                                      <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                                        <service.icon className="w-4 h-4 text-cyan-400" />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                                          {service.name}
                                        </h4>
                                        <p className="text-xs text-slate-400">{service.description}</p>
                                      </div>
                                      {service.featured && (
                                        <Star className="w-3 h-3 text-yellow-400"  />
                                      )}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6 pt-6 border-t border-slate-700">
                            <div className="flex items-center justify-between">
                              <Link
                                to="/services"
                                className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                              >
                                <span>View All Services</span>
                                <ArrowRight className="w-4 h-4"  />
                              </Link>
                              <Link
                                to="/pricing"
                                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                              >
                                View Pricing
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Solutions Dropdown */}
                      {item.name === 'Solutions' && solutionsDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-xl border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-400/10 p-6">
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white mb-4">Industry Solutions</h3>
                            {solutions.map((solution) => (
                              <Link
                                key={solution.name}
                                to={solution.href}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors duration-200 group"
                              >
                                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                                  <solution.icon className="w-4 h-4 text-cyan-400" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                                    {solution.name}
                                  </h4>
                                  <p className="text-xs text-slate-400">{solution.description}</p>
                                </div>
                                {solution.featured && (
                                  <Star className="w-3 h-3 text-yellow-400"  />
                                )}
                              </Link>
                            ))}
                          </div>
                          <div className="mt-6 pt-6 border-t border-slate-700">
                            <Link
                              to="/solutions"
                              className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                              <span>View All Solutions</span>
                              <ArrowRight className="w-4 h-4"  />
                            </Link>
                          </div>
                        </div>
                      )}

                      {/* Resources Dropdown */}
                      {item.name === 'Resources' && resourcesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-xl border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-400/10 p-6">
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white mb-4">Resources & Support</h3>
                            {resources.map((resource) => (
                              <Link
                                key={resource.name}
                                to={resource.href}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors duration-200 group"
                              >
                                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                                  <resource.icon className="w-4 h-4 text-cyan-400" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                                    {resource.name}
                                  </h4>
                                  <p className="text-xs text-slate-400">{resource.description}</p>
                                </div>
                                {resource.featured && (
                                  <Star className="w-3 h-3 text-yellow-400"  />
                                )}
                              </Link>
                            ))}
                          </div>
                          <div className="mt-6 pt-6 border-t border-slate-700">
                            <Link
                              to="/resources"
                              className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                              <span>View All Resources</span>
                              <ArrowRight className="w-4 h-4"  />
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Search and Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services..."
                  className="w-64 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {isSearching ? (
                    <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Search className="w-4 h-4"  />
                  )}
                </button>
              </form>

              {/* Theme Toggle */}
              <ThemeToggle  />

              {/* CTA Button */}
              <Link
                to="/contact"
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium"
              >
                {mobileMenuOpen ? <X className="w-5 h-5"  /> : <Menu className="w-5 h-5"  />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-700">
            <div className="container-responsive py-6">
              <div className="space-y-6">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search services..."
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={isSearching}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {isSearching ? (
                      <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Search className="w-4 h-4"  />
                    )}
                  </button>
                </form>

                {/* Mobile Navigation */}
                <nav className="space-y-4">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        to={item.href}
                        className="block text-slate-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </nav>

                {/* Mobile Quick Links */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Quick Links</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {quickLinks.slice(0, 6).map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <link.icon className="w-4 h-4" />
                        <span className="text-sm">{link.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Contact Info */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Contact</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-slate-300">
                      <Phone className="w-4 h-4"  />
                      <span className="text-sm">{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-300">
                      <Mail className="w-4 h-4"  />
                      <span className="text-sm">{contactInfo.email}</span>
                    </div>
                  </div>
                </div>

                {/* Mobile CTA */}
                <Link
                  to="/contact"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>;
    </>
  )}
