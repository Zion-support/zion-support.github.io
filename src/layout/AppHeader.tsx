<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown } from 'lucide-react';
export function AppHeader() {;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const handleSearch = (e: React.FormEvent) => {;
    e.preventDefault();
    if (searchQuery.trim()) {;
      // Navigate to search results;
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
}
  };
  // Organized Services Categories;
  const servicesCategories = [{;
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-zion-cyan to-zion-purple',
      dropdown: [;
        { name: 'Machine Learning', href: '/ai-solutions/machine-learning', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
        { name: 'Computer Vision', href: '/ai-solutions/computer-vision', icon: Eye, color: 'from-zion-purple to-zion-pink' },
        { name: 'NLP & Chatbots', href: '/ai-solutions/nlp-chatbots', icon: MessageCircle, color: 'from-zion-green to-zion-cyan' },
        { name: 'Predictive Analytics', href: '/ai-solutions/predictive-analytics', icon: TrendingUp, color: 'from-zion-blue to-zion-green' },
        { name: 'AI Consulting', href: '/ai-solutions/consulting', icon: Users, color: 'from-zion-pink to-zion-purple' },
        { name: 'Custom AI Models', href: '/ai-solutions/custom-models', icon: Code, color: 'from-zion-orange to-zion-purple' }
      ];
},
    {;
      name: 'Innovation Lab',
      href: '/innovation-lab',
      icon: Sparkles,
      color: 'from-zion-purple to-zion-pink',
      dropdown: [;
        { name: 'Research & Development', href: '/innovation-lab/research', icon: Sparkles, color: 'from-zion-purple to-zion-pink' },
        { name: 'Emerging Tech', href: '/innovation-lab/emerging-tech', icon: Rocket, color: 'from-zion-purple to-zion-cyan' },
        { name: 'Prototyping', href: '/innovation-lab/prototyping', icon: Code, color: 'from-zion-green to-zion-cyan' },
        { name: 'Innovation Consulting', href: '/innovation-lab/consulting', icon: Users, color: 'from-zion-pink to-zion-purple' },
        { name: 'Tech Partnerships', href: '/innovation-lab/partnerships', icon: Handshake, color: 'from-zion-blue to-zion-green' }
      ];
}
  ];
        setServicesDropdownOpen(true);
        setSolutionsDropdownOpen(false);
        setCompanyDropdownOpen(false);
        setResourcesDropdownOpen(false)} else if(nav.name === 'Solutions') {;

        setSolutionsDropdownOpen(true);
        setServicesDropdownOpen(false);
        setCompanyDropdownOpen(false);
        setResourcesDropdownOpen(false)} else if(nav.name === 'Pricing') {;
        // Use the same dropdown state as solutions for pricing;
        setSolutionsDropdownOpen(true);
        setServicesDropdownOpen(false);
        setCompanyDropdownOpen(false);
        setResourcesDropdownOpen(false)} else if(nav.name === 'Company') {;

        setCompanyDropdownOpen(true);
        setServicesDropdownOpen(false);
        setSolutionsDropdownOpen(false);
        setResourcesDropdownOpen(false)} else if(nav.name === 'Resources') {;
        setResourcesDropdownOpen(true);
        setServicesDropdownOpen(false);
        setSolutionsDropdownOpen(false);
        setCompanyDropdownOpen(false)}
    } else {;

      setActiveNav(null);
      setServicesDropdownOpen(false);
      setSolutionsDropdownOpen(false);
      setCompanyDropdownOpen(false);
      setResourcesDropdownOpen(false)}
  };
  const closeAllDropdowns = (...args: unknown[]): unknown => {;
    setServicesDropdownOpen(false);    setSolutionsDropdownOpen(false);
    setCompanyDropdownOpen(false);
    setResourcesDropdownOpen(false);
    setActiveNav(null)};
  return ();
    <>`;
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${        scrolled;
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10';
          : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20'      }`}>;
        <div className="container-responsive">";
          <div className="flex h-20 items-center justify-between">;
            {/* Logo */}";
            <div className="flex items-center">";
              <Link to="/" className="flex-shrink-0 group">";
                <div className="flex items-center space-x-3">";
                  <div className="relative">";
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">";
                      <Zap className="w-6 h-6 text-white"  />;
                    </div>"                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>;
                  </div>";
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">;
                    Zion Tech Group;
                  </h1>;
                </div>;
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">;
                  Zion Tech Group;
                </span>;
              </Link>;
            </div>;

            {/* Desktop Navigation */}            <nav className="hidden lg:flex items-center space-x-8">;
              {navigation.map((item) => (";
                <div key={item.name} className="relative">;
                  {item.hasDropdown ? (";
                    <div className="relative">;
                      <button;
                        onClick={() => {;

              <AnimatePresence>;
                {activeDropdown === 'services' && (;
                  <motion.div;
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">;
                    <div className="p-4">;
                      <div className="grid grid-cols-1 gap-2">;
                        {services.map((service) => (;
                          <Link;
                            key={service.name}
                            to={service.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">;
                            <div className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>;
                              <service.icon className="w-5 h-5 text-white" />;
                            </div>;
                            <div>;
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">;
                                {service.name}
                              </div>;
                              <div className="text-sm text-zion-slate-light">;
                                {service.description}
                              </div>;
                            </div>;
                          </Link>;
                        ))}
                      </div>;
                    </div>;
                  </motion.div>;
                )}
              </AnimatePresence>;
            </div>;

            {/* Solutions Dropdown */}
            <div className="relative dropdown-container">;
              <button;
                onClick={() => toggleDropdown('solutions')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors";
                aria-expanded={activeDropdown === 'solutions'}
                aria-haspopup="true">;
                Solutions;
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />;
              </button>;

              <AnimatePresence>;
                {activeDropdown === 'solutions' && (;
                  <motion.div;
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">;
                    <div className="p-4">;
                      <div className="grid grid-cols-1 gap-2">;
                        {solutions.map((solution) => (;
                          <Link;
                            key={solution.name}
                            to={solution.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">;
                            <div className={`w-10 h-10 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>;
                              <solution.icon className="w-5 h-5 text-white" />;
                            </div>;
                            <div>;
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">;
                                {solution.name}
                              </div>;
                              <div className="text-sm text-zion-slate-light">;
                                {solution.description}
                              </div>;
                            </div>;
                          </Link>;
                        ))}
                      </div>;
                    </div>;
                  </motion.div>;
                )}
              </AnimatePresence>;
            </div>;

            {/* Resources Dropdown */}
            <div className="relative dropdown-container">;
              <button;
                onClick={() => toggleDropdown('resources')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors";
                aria-expanded={activeDropdown === 'resources'}
                aria-haspopup="true">;
                Resources;
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />;
              </button>;

              <AnimatePresence>;
                {activeDropdown === 'resources' && (;
                  <motion.div;
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">;
                    <div className="p-4">;
                      <div className="grid grid-cols-1 gap-2">;
                        {resources.map((resource) => (;
                          <Link;
                            key={resource.name}
                            to={resource.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">;
                            <resource.icon className="w-5 h-5 text-zion-cyan mr-3 group-hover:scale-110 transition-transform" />;
                            <span className="text-white group-hover:text-zion-cyan transition-colors">;
                              {resource.name}
                            </span>;
                          </Link>;
                        ))}
                      </div>;
                    </div>;
                  </motion.div>;
                )}
              </AnimatePresence>;
            </div>;

            {/* Company Dropdown */}
            <div className="relative dropdown-container">;
              <button;
                onClick={() => toggleDropdown('company')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors";
                aria-expanded={activeDropdown === 'company'}
                aria-haspopup="true">;
                Company;
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />;
              </button>;

              <AnimatePresence>;
                {activeDropdown === 'company' && (;
                  <motion.div;
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">;
                    <div className="p-4">;
                      <div className="grid grid-cols-1 gap-2">;
                        {company.map((item) => (;
                          <Link;
                            key={item.name}
                            to={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">;
                            <item.icon className="w-5 h-5 text-zion-cyan mr-3 group-hover:scale-110 transition-transform" />;
                            <span className="text-white group-hover:text-zion-cyan transition-colors">;
                              {item.name}
                            </span>;
                          </Link>;
                        ))}
                      </div>;
                    </div>;
                  </motion.div>;
                )}
              </AnimatePresence>;
            </div>;
          </nav>;

          {/* Right side - Search, User, Mobile menu */}
          <div className="flex items-center space-x-4">;
            {/* Search */}
            <div className="relative hidden md:block">;
              <form onSubmit={handleSearch} className="relative">;
                <input;
                  type="text";
                  placeholder="Search...";
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className={`w-64 px-4 py-2 pl-10 bg-zion-slate/20 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan transition-all duration-200 ${;
                    searchFocused ? 'w-80' : '';
}`}
                />;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />;
              </form>;
            </div>;

            {/* User Menu */}
            {user ? (;
              <div className="relative dropdown-container">;
                <button;
                  onClick={() => toggleDropdown('user')}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-zion-cyan/10 transition-colors";
                  aria-expanded={activeDropdown === 'user'}
                  aria-haspopup="true">;
                  <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">;
                    <User className="w-4 h-4 text-white" />;
                  </div>;
                  <span className="text-white text-sm hidden lg:block">{user.name}</span>;
                  <ChevronDown className="w-4 h-4 text-zion-slate-light" />;
                </button>;

                <AnimatePresence>;
                  {activeDropdown === 'user' && (;
                    <motion.div;
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">;
                      <div className="p-2">;
                        <Link;
                          to="/dashboard";
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">;
                          <PanelLeft className="w-4 h-4 mr-3" />;
                          Dashboard;
                        </Link>;
                        <Link;
                          to="/profile";
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">;
                          <User className="w-4 h-4 mr-3" />;
                          Profile;
                        </Link>;
                        <Link;
                          to="/settings";
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">;
                          <Settings className="w-4 h-4 mr-3" />;
                          Settings;
                        </Link>;
                        <hr className="border-zion-slate/20 my-2" />;
                        <button;
                          onClick={() => {;
                            logout();
                            setActiveDropdown(null);
}}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">;
                          <LogOut className="w-4 h-4 mr-3" />;
                          Logout;
                        </button>;
                      </div>;
                    </motion.div>;
                  )}
                </AnimatePresence>;
              </div>;
            ))}
          </nav>;

          {/* Right side actions */}
          <div className="flex items-center space-x-4">;
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:flex relative">  const navigation = [;
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];
  const services = [;
    { name: 'AI Solutions', href: '/services/ai', description: 'Machine Learning & NLP' },
    { name: 'Tech Talent', href: '/talent', description: 'Expert Developers & Engineers' },
    { name: 'Equipment', href: '/equipment', description: 'Infrastructure & Hardware' },
    { name: 'Consulting', href: '/consulting', description: 'Digital Transformation' },
    { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Security & Compliance' },
    { name: 'Cloud Services', href: '/services/cloud', description: 'DevOps & Infrastructure' },
  ];
  return (;
    <>;
      <header className="sticky top-0 z-50 w-full border-b border-slate-700/20 bg-slate-900/95 backdrop-blur-md">;
        <div className="container flex h-16 items-center px-4 sm:px-6">;
          {/* Logo */}
          <div className="flex items-center">;
            <Link to="/" className="flex-shrink-0">;
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">;
                Zion Tech Group;
              </h1>;
            </Link>;
          </div>;
          {/* Desktop Navigation */}
          <nav className="hidden md:flex ml-8 space-x-8">;
            {navigation.map((item) => (;
              <Link;
                key={item.name}
                to={item.href}
                className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">;
                {item.name}
              </Link>;
            ))}

            {/* Services Dropdown */}
            <div className="relative">;
              <button;
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
                className="flex items-center text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">;
                Services;
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />;
              </button>;
              {servicesDropdownOpen && (;
                <div ;
                  className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 border border-slate-700/50 rounded-lg shadow-xl backdrop-blur-md";
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >;
                  <div className="p-4">;
                    <div className="grid grid-cols-1 gap-2">;
                      {services.map((service) => (;
                        <Link;
                          key={service.name}
                          to={service.href}
                          className="flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group">;
                          <div className="flex-1">;
                            <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">;
                              {service.name}
                            </div>;
                            <div className="text-sm text-gray-400">;
                              {service.description}
                            </div>;
                          </div>;
                        </Link>;
                      ))}
                    </div>;
                    <div className="mt-4 pt-4 border-t border-slate-700/50">;
                      <Link;
                        to="/services";
                        className="block text-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">;
                        View All Services →;
                      </Link>;
                    </div>;
                  </div>;
                </div>;
              )}
            </div>;
          </nav>;

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex ml-6 flex-1 max-w-md">;
            <form onSubmit={handleSearch} className="relative w-full">;
              />;
              <button;
                type="submit";
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-cyan-400 transition-colors">;
                <Search className="h-4 h-4" />;
              <div className="hidden md:flex items-center space-x-3">;
                <Link;
                  to="/login";
                  className="px-4 py-2 text-zion-cyan border border-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors">;
                  Login;
                </Link>;
                <Link;
                  to="/signup";
                  className="px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors">;
                  Get Started;
                </Link>;
              </div>;
            )}
          {/* Right side actions */}
          <div className="ml-6 flex items-center space-x-4">;
            {/* Notifications */}
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">;
              <Bell className="h-5 w-5" />;
            </button>;

            {/* User menu */}
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">;
              <User className="h-5 w-5" />;
            </button>;
              {mobileMenuOpen ? (;
                <X className="w-6 h-6 text-white" />;
              ) : (;
                <Menu className="w-6 h-6 text-zinc-400" />              className="md:hidden p-2 text-slate-400 hover:text-cyan-400 transition-colors">;
              {mobileMenuOpen ? (;
                <X className="h-5 w-5" />;
              ) : (;
                <Menu className="h-5 w-5" />;
                <Menu className="w-6 h-6 text-white" />;
              )}
            </button>;
          </div>;
        </div>;
      </div>;

      {/* Mobile Navigation */}
      <AnimatePresence>;
        {mobileMenuOpen && (;
          <motion.div;
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-zion-slate-dark border-t border-zion-cyan/20">;
            <div className="container mx-auto px-6 py-6">              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">;
                <input;
                  type="text";
                  placeholder="Search...";
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 bg-zion-slate/20 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan";
                />;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />;
              </form>;

              {/* Mobile Navigation Links */}
              <div className="space-y-2">;
                {navigation.map((item) => (;
                  <Link;
                    key={item.name}
                    to={item.href}
                    onClick={closeMobileMenu}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${;
                      item.current;
                        ? 'text-zion-cyan bg-zion-cyan/10';
                        : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10';
}`}
                  >;
                    {item.name}
                  </Link>;
                ))}
              </nav>;

              {/* Mobile Quick Actions */}
              <div className="mt-6 pt-6 border-t border-zinc-800/50">;
                <div className="grid grid-cols-1 gap-3">;
                  {quickActions.map((action) => (;
                    <Link;
                      key={action.name}
                      to={action.href}
                      className="btn-futuristic text-center">;
                      {action.name}        {/* Mobile Navigation */}
        {mobileMenuOpen && (;
          <div className="md:hidden">;
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 border-t border-slate-700/20">;
              {navigation.map((item) => (;
                <Link;
                  key={item.name}
                  to={item.href}
                  className="text-slate-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors duration-200";
                  onClick={() => setMobileMenuOpen(false)}
                >;
                  {item.name}
                </Link>;
              ))}

              {/* Mobile Services */}
              <div className="px-3 py-2">;
                <div className="text-slate-400 text-sm font-medium mb-2">Services</div>;
                <div className="space-y-1">;
                  {services.map((service) => (;
                    <Link;
                      key={service.name}
                      to={service.href}
                      className="block text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm transition-colors duration-200";
                      onClick={() => setMobileMenuOpen(false)}
                    >;
                      {service.name}
                    </Link>;
                  ))}
                </div>;
              </div>;
              </div>;

              {/* Mobile Services */}
              <div className="space-y-2">;
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">;
                  Services;
                </div>;
                {services.map((service) => (;
                  <Link;
                    key={service.name}
                    to={service.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors">;
                    {service.name}
                  </Link>;
                ))}
              </div>;

              {/* Mobile Solutions */}
              <div className="space-y-2">;
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">;
                  Solutions;
                </div>;
                {solutions.map((solution) => (;
                  <Link;
                    key={solution.name}
                    to={solution.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors">;
                    {solution.name}
                  </Link>;
                ))}
              </div>;

              {/* Mobile Resources */}
              <div className="space-y-2">;
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">;
                  Resources;
                </div>;
                {resources.map((resource) => (;
                  <Link;
                    key={resource.name}
                    to={resource.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors">;
                    {resource.name}
                  </Link>;
                ))}
              </div>;

              {/* Mobile Company */}
              <div className="space-y-2">;
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">;
                  Company;
                </div>;
                {company.map((item) => (;
                  <Link;
                    key={item.name}
                    to={item.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors">;
                    {item.name}
                  </Link>;
                ))}
              </div>;

              {/* Mobile Auth */}
              {!user ? (;
                <div className="pt-4 border-t border-zion-slate/20">;
                  <div className="space-y-3">;
                    <Link;
                      to="/login";
                      onClick={closeMobileMenu}
                      className="block w-full px-4 py-2 text-center text-zion-cyan border border-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors">;
                      Login;
                    </Link>;
                    <Link;
                      to="/signup";
                      onClick={closeMobileMenu}
                      className="block w-full px-4 py-2 text-center bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors">;
                      Get Started;
                    </Link>;
                  </div>;
                </div>;
              ) : (;
                <div className="pt-4 border-t border-zion-slate/20">;
                  <div className="space-y-3">;
                    <Link;
                      to="/dashboard";
                      onClick={closeMobileMenu}
                      className="block w-full px-4 py-2 text-center bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors">;
                      Dashboard;
                    </Link>;
                    <button;
                      onClick={() => {;
                        logout();
                        closeMobileMenu();
}}
                      className="block w-full px-4 py-2 text-center text-zion-cyan border border-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors">;
                      Logout;
                    </button>;
                  </div>;
                </div>;
              )}
            </div>;
          </motion.div>;
        )}
      </AnimatePresence>;
    </header>  );
}
}}})))))
=======
import React from 'react'; import { Link,Link } from 'react-router-dom'; import { Menu,X } from 'lucide-react'; const handleDropdownToggle = (props: any) => { setActiveDropdown(activeDropdown === itemName ? null : itemName)}; ======= export function AppHeader() { <<<<<<< HEAD const [mobileOpen,setMobileOpen] = React.useState(false); ======= const [mobileMenuOpen,setMobileMenuOpen] = useState(false); const [searchQuery,setSearchQuery] = useState(''); const [servicesDropdownOpen,setServicesDropdownOpen] = useState(false); >>>>>>> origin/merge-pr-11195 <<<<<<< HEAD const nav = [ { name: 'Home',to: '/' },{ name: 'Services',to: '/services' },{ name: 'Solutions',to: '/solutions' },{ name: 'Resources',to: '/resources' },{ name: 'Contact',to: '/contact' } ======= const handleSearch = (e: React.FormEvent) => { e.preventDefault(); if (searchQuery.trim()) { window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`} }; <<<<<<< HEAD const navigation = [ { name: 'Home',href: '/',current: true },{ name: 'Services',href: '/services',current: false,hasDropdown: true },{ name: 'Solutions',href: '/solutions',current: false,hasDropdown: true },{ name: 'Resources',href: '/resources',current: false,hasDropdown: true },{ name: 'About',href: '/about',current: false },{ name: 'Contact',href: '/contact',current: false },]; const featuredServicesShowcase = { title: 'Innovative Services 2032',href: '/innovative-services-showcase-2032',icon: Rocket,color: 'from-indigo-500 to-purple-600',description: 'Cutting-edge AI & Micro SAAS Solutions',featured: true }; const servicesCategories = [ { title: 'AI & Machine Learning',icon: Brain,color: 'from-zion-cyan to-zion-purple',dropdown: [ { name: 'Machine Learning',href: '/ai-solutions/machine-learning',icon: Brain,color: 'from-zion-cyan to-zion-purple' },{ name: 'Computer Vision',href: '/ai-solutions/computer-vision',icon: Eye,color: 'from-zion-purple to-zion-pink' },{ name: 'NLP & Chatbots',href: '/ai-solutions/nlp-chatbots',icon: MessageCircle,color: 'from-zion-green to-zion-cyan' },{ name: 'Predictive Analytics',href: '/ai-solutions/predictive-analytics',icon: TrendingUp,color: 'from-zion-blue to-zion-green' },{ name: 'AI Consulting',href: '/ai-solutions/consulting',icon: Users,color: 'from-zion-pink to-zion-purple' },{ name: 'Custom AI Models',href: '/ai-solutions/custom-models',icon: Code,color: 'from-zion-orange to-zion-purple' } ] },{ name: 'Innovation Lab',href: '/innovation-lab',icon: Sparkles,color: 'from-zion-purple to-zion-pink',dropdown: [ { name: 'Research & Development',href: '/innovation-lab/research',icon: Sparkles,color: 'from-zion-purple to-zion-pink' },{ name: 'Emerging Tech',href: '/innovation-lab/emerging-tech',icon: Rocket,color: 'from-zion-purple to-zion-cyan' },{ name: 'Prototyping',href: '/innovation-lab/prototyping',icon: Code,color: 'from-zion-green to-zion-cyan' },{ name: 'Innovation Consulting',href: '/innovation-lab/consulting',icon: Users,color: 'from-zion-pink to-zion-purple' },{ name: 'Tech Partnerships',href: '/innovation-lab/partnerships',icon: Handshake,color: 'from-zion-blue to-zion-green' } ] } ======= const navigationItems = [ { name: 'Services',href: '/services',icon: Zap,color: 'from-cyan-500 to-blue-500',dropdown: [ { name: 'AI & Analytics',href: '/services/ai-analytics',icon: Brain,color: 'from-cyan-500 to-purple-500' },{ name: 'Cybersecurity',href: '/services/cybersecurity',icon: Shield,color: 'from-purple-500 to-red-500' },{ name: 'Cloud & DevOps',href: '/services/cloud-devops',icon: Cloud,color: 'from-blue-500 to-cyan-500' },{ name: 'IoT & Edge',href: '/services/iot-edge',icon: Cpu,color: 'from-green-500 to-cyan-500' },{ name: 'Quantum Computing',href: '/services/quantum-computing',icon: Rocket,color: 'from-purple-500 to-cyan-500' },{ name: 'Blockchain',href: '/services/blockchain',icon: Lock,color: 'from-orange-500 to-purple-500' },{ name: 'Digital Twin',href: '/services/digital-twin',icon: Globe,color: 'from-blue-500 to-purple-500' },{ name: 'Sustainability',href: '/services/sustainability',icon: Heart,color: 'from-green-500 to-blue-500' } ] },{ name: 'Micro SAAS',href: '/micro-saas-services',icon: Code,color: 'from-purple-500 to-pink-500',dropdown: [ { name: 'AI Business Intelligence',href: '/micro-saas/ai-business-intelligence',icon: Brain,color: 'from-cyan-500 to-blue-500' },{ name: 'Customer Experience',href: '/micro-saas/customer-experience',icon: Users,color: 'from-purple-500 to-pink-500' },{ name: 'Supply Chain',href: '/micro-saas/supply-chain',icon: Network,color: 'from-green-500 to-cyan-500' },{ name: 'Cybersecurity',href: '/micro-saas/cybersecurity',icon: Shield,color: 'from-purple-500 to-red-500' },{ name: 'IoT Edge Computing',href: '/micro-saas/iot-edge',icon: Cpu,color: 'from-green-500 to-cyan-500' } ] },{ name: 'About',href: '/about',icon: Users,color: 'from-blue-500 to-purple-500' },{ name: 'Blog',href: '/blog',icon: Globe,color: 'from-green-500 to-blue-500' },{ name: 'Contact',href: '/contact',icon: Heart,color: 'from-pink-500 to-red-500' } >>>>>>> origin/merge-pr-11195 ]; setServicesDropdownOpen(true); setSolutionsDropdownOpen(false); setCompanyDropdownOpen(false); setResourcesDropdownOpen(false)} else if(nav.name === 'Solutions') { <<<<<<< HEAD setSolutionsDropdownOpen(true); setServicesDropdownOpen(false); setCompanyDropdownOpen(false); setResourcesDropdownOpen(false)} else if(nav.name === 'Pricing') { setSolutionsDropdownOpen(true); setServicesDropdownOpen(false); setCompanyDropdownOpen(false); setResourcesDropdownOpen(false)} else if(nav.name === 'Company') { setCompanyDropdownOpen(true); setServicesDropdownOpen(false); setSolutionsDropdownOpen(false); setResourcesDropdownOpen(false)} else if(nav.name === 'Resources') { setResourcesDropdownOpen(true); setServicesDropdownOpen(false); setSolutionsDropdownOpen(false); setCompanyDropdownOpen(false)} } else { setActiveNav(null); setServicesDropdownOpen(false); setSolutionsDropdownOpen(false); setCompanyDropdownOpen(false); setResourcesDropdownOpen(false)} }; const closeAllDropdowns = (...args: unknown[]): unknown => { setServicesDropdownOpen(false); setSolutionsDropdownOpen(false); setCompanyDropdownOpen(false); setResourcesDropdownOpen(false); setActiveNav(null)}; return () <>` <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${ scrolled ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10' : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20' }`}> <div className="container-responsive">" <div className="flex h-20 items-center justify-between"> {}" <div className="flex items-center">" <Link to="/" className="flex-shrink-0 group">" <div className="flex items-center space-x-3">" <div className="relative">" <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">" <Zap className="w-6 h-6 text-white" /> </div>" <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div> </div>" <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300"> Zion Tech Group </h1> </div> <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Zion Tech Group </span> </Link> </div> {} <nav className="hidden lg:flex items-center space-x-8"> {navigation.map((item) => (" <div key={item.name} className="relative"> {item.hasDropdown ? (" <div className="relative"> <button onClick={() => { <AnimatePresence> {activeDropdown === 'services' && ( <motion.div initial={{ opacity: 0,y: -10 }} animate={{ opacity: 1,y: 0 }} exit={{ opacity: 0,y: -10 }} transition={{ duration: 0.2 }} className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md" > <div className="p-4"> <div className="grid grid-cols-1 gap-2"> {services.map((service) => ( <Link key={service.name} to={service.href} onClick={() => setActiveDropdown(null)} className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group" > <div className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}> <service.icon className="w-5 h-5 text-white" /> </div> <div> <div className="font-medium text-white group-hover:text-zion-cyan transition-colors"> {service.name} </div> <div className="text-sm text-zion-slate-light"> {service.description} </div> </div> </Link> ))} </div> </div> </motion.div> )} </AnimatePresence> </div> {} <div className="relative dropdown-container"> <button onClick={() => toggleDropdown('solutions')} className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors" aria-expanded={activeDropdown === 'solutions'} aria-haspopup="true" > Solutions <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} /> </button> <AnimatePresence> {activeDropdown === 'solutions' && ( <motion.div initial={{ opacity: 0,y: -10 }} animate={{ opacity: 1,y: 0 }} exit={{ opacity: 0,y: -10 }} transition={{ duration: 0.2 }} className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md" > <div className="p-4"> <div className="grid grid-cols-1 gap-2"> {solutions.map((solution) => ( <Link key={solution.name} to={solution.href} onClick={() => setActiveDropdown(null)} className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group" > <div className={`w-10 h-10 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}> <solution.icon className="w-5 h-5 text-white" /> </div> <div> <div className="font-medium text-white group-hover:text-zion-cyan transition-colors"> {solution.name} </div> <div className="text-sm text-zion-slate-light"> {solution.description} </div> </div> </Link> ))} </div> </div> </motion.div> )} </AnimatePresence> </div> {} <div className="relative dropdown-container"> <button onClick={() => toggleDropdown('resources')} className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors" aria-expanded={activeDropdown === 'resources'} aria-haspopup="true" > Resources <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} /> </button> <AnimatePresence> {activeDropdown === 'resources' && ( <motion.div initial={{ opacity: 0,y: -10 }} animate={{ opacity: 1,y: 0 }} exit={{ opacity: 0,y: -10 }} transition={{ duration: 0.2 }} className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md" > <div className="p-4"> <div className="grid grid-cols-1 gap-2"> {resources.map((resource) => ( <Link key={resource.name} to={resource.href} onClick={() => setActiveDropdown(null)} className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group" > <resource.icon className="w-5 h-5 text-zion-cyan mr-3 group-hover:scale-110 transition-transform" /> <span className="text-white group-hover:text-zion-cyan transition-colors"> {resource.name} </span> </Link> ))} </div> </div> </motion.div> )} </AnimatePresence> </div> {} <div className="relative dropdown-container"> <button onClick={() => toggleDropdown('company')} className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors" aria-expanded={activeDropdown === 'company'} aria-haspopup="true" > Company <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} /> </button> <AnimatePresence> {activeDropdown === 'company' && ( <motion.div initial={{ opacity: 0,y: -10 }} animate={{ opacity: 1,y: 0 }} exit={{ opacity: 0,y: -10 }} transition={{ duration: 0.2 }} className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md" > <div className="p-4"> <div className="grid grid-cols-1 gap-2"> {company.map((item) => ( <Link key={item.name} to={item.href} onClick={() => setActiveDropdown(null)} className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group" > <item.icon className="w-5 h-5 text-zion-cyan mr-3 group-hover:scale-110 transition-transform" /> <span className="text-white group-hover:text-zion-cyan transition-colors"> {item.name} </span> </Link> ))} </div> </div> </motion.div> )} </AnimatePresence> </div> </nav> {} <div className="flex items-center space-x-4"> {} <div className="relative hidden md:block"> <form onSubmit={handleSearch} className="relative"> <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onFocus={() => setSearchFocused(true)} onBlur={() => setSearchFocused(false)} className={`w-64 px-4 py-2 pl-10 bg-zion-slate/20 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan transition-all duration-200 ${ searchFocused ? 'w-80' : '' }`} /> <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" /> </form> </div> {} {user ? ( <div className="relative dropdown-container"> <button onClick={() => toggleDropdown('user')} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-zion-cyan/10 transition-colors" aria-expanded={activeDropdown === 'user'} aria-haspopup="true" ======= return ( <header className="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex justify-between items-center h-16"> {} <div className="flex-shrink-0"> <Link to="/" className="flex items-center space-x-2"> <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center"> <Zap className="w-5 h-5 text-white" /> </div> <span className="text-xl font-bold text-gray-900 dark:text-white"> Zion Tech Group </span> </Link> </div> {} <nav className="hidden md:flex space-x-8"> {navigationItems.map((item) => ( <div key={item.name} className="relative group"> <Link to={item.href} className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200" >>>>>>> origin/merge-pr-11195 > <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center"> <User className="w-4 h-4 text-white" /> </div> <span className="text-white text-sm hidden lg:block">{user.name}</span> <ChevronDown className="w-4 h-4 text-zion-slate-light" /> </button> <AnimatePresence> {activeDropdown === 'user' && ( <motion.div initial={{ opacity: 0,y: -10 }} animate={{ opacity: 1,y: 0 }} exit={{ opacity: 0,y: -10 }} transition={{ duration: 0.2 }} className="absolute top-full right-0 mt-2 w-48 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md" > <div className="p-2"> <Link to="/dashboard" onClick={() => setActiveDropdown(null)} className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan" > <PanelLeft className="w-4 h-4 mr-3" /> Dashboard </Link> <Link to="/profile" onClick={() => setActiveDropdown(null)} className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan" > <User className="w-4 h-4 mr-3" /> Profile </Link> <Link to="/settings" onClick={() => setActiveDropdown(null)} className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan" > <Settings className="w-4 h-4 mr-3" /> Settings </Link> <hr className="border-zion-slate/20 my-2" /> <button onClick={() => { logout(); setActiveDropdown(null)}} className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan" > <LogOut className="w-4 h-4 mr-3" /> Logout </button> </div> </motion.div> )} </AnimatePresence> </div> ))} </nav> {} <div className="flex items-center space-x-4"> {} <form onSubmit={handleSearch} className="hidden md:flex relative"> const navigation = [ { name: 'Home',href: '/',current: true },{ name: 'About',href: '/about',current: false },{ name: 'Contact',href: '/contact',current: false },]; const services = [ { name: 'AI Solutions',href: '/services/ai',description: 'Machine Learning & NLP' },{ name: 'Tech Talent',href: '/talent',description: 'Expert Developers & Engineers' },{ name: 'Equipment',href: '/equipment',description: 'Infrastructure & Hardware' },{ name: 'Consulting',href: '/consulting',description: 'Digital Transformation' },{ name: 'Cybersecurity',href: '/services/cybersecurity',description: 'Security & Compliance' },{ name: 'Cloud Services',href: '/services/cloud',description: 'DevOps & Infrastructure' },>>>>>>> origin/merge-pr-10615 ]; >>>>>>> origin/main return ( <header className="border-b border-gray-200 bg-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"> <Link to="/" className="font-bold text-gray-900">Zion Tech Group</Link> <nav className="hidden md:flex items-center gap-6"> {nav.map(item => ( <Link key={item.to} to={item.to} className={({ isActive }) => isActive ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:text-gray-900'}> {item.name} </Link> ))} </nav> <button className="md:hidden p-2" aria-label="Toggle menu" onClick={() => setMobileOpen(v => !v)}> {mobileOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>} </button> </div> {mobileOpen && ( <div className="md:hidden border-t border-gray-200 bg-white"> <nav className="px-4 py-3 space-y-2"> {nav.map(item => ( <Link key={item.to} to={item.to} className="block text-gray-700" onClick={() => setMobileOpen(false)}> {item.name} </Link> ))} </nav> </div> {} <button onClick={toggleMenu} className="lg:hidden p-2 text-gray-700 hover:text-cyan-600 transition-colors duration-300" > {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />} </button> </div> {} {isMenuOpen && ( <motion.div initial={{ opacity: 0,height: 0 }} animate={{ opacity: 1,height: 'auto' }} exit={{ opacity: 0,height: 0 }} className="lg:hidden border-t border-gray-200/50 py-4" > <<<<<<< HEAD const [scrolled,setScrolled] = useState<any>(false); const [isSearching,setIsSearching] = useState<any>(false); ======= useEffect(() => { const handleScroll = (props: any) => { setScrolled(window.scrollY > 10)}; window.addEventListener('scroll',handleScroll); return () => window.removeEventListener('scroll',handleScroll)},[]); const handleSearch = async (e: React.FormEvent) => { e.preventDefault(); if (searchQuery.trim()) { { name: 'AI Business Intelligence',href: '/services/ai-business-intelligence',icon: Brain,description: 'Machine Learning & Data Science',featured: true,color: 'from-purple-500 to-cyan-500' },{ name: 'AI Healthcare Analytics',href: '/services/ai-healthcare-analytics-platform',icon: Heart,description: 'Medical AI & Diagnostics',featured: true,color: 'from-red-500 to-pink-500' },{ name: 'AI Cybersecurity',href: '/services/ai-cybersecurity-threat-detection',icon: Shield,description: 'AI-Powered Security',featured: true,color: 'from-green-500 to-blue-500' },{ name: 'Quantum Computing',href: '/services/quantum-computing',icon: Atom,description: 'Quantum AI & Optimization',featured: true,color: 'from-purple-500 to-pink-500' },{ name: 'IoT Edge Computing',href: '/services/iot-edge',icon: Cpu,description: 'IoT & Real-time Processing',featured: true,color: 'from-blue-500 to-cyan-500' },{ name: 'Digital Twin Platform',href: '/services/digital-twin',icon: Globe,description: 'Virtual Replicas & Simulation',featured: true,color: 'from-green-500 to-emerald-500' },{ name: 'Cloud DevOps',href: '/services/cloud-devops',icon: Cloud,description: 'DevOps & Infrastructure',featured: true,color: 'from-blue-500 to-cyan-500' },{ name: 'Micro SaaS Products',href: '/services/micro-saas',icon: ShoppingCart,description: 'AI automations with transparent pricing',featured: true,color: 'from-orange-500 to-red-500' },{ name: 'Data Analytics',href: '/services/data-analytics',icon: BarChart3,description: 'Business Intelligence & Analytics',featured: false,color: 'from-blue-500 to-indigo-500' },{ name: 'IT Infrastructure',href: '/services/it-infrastructure',icon: Server,description: 'Enterprise IT Solutions',featured: false,color: 'from-gray-500 to-slate-500' },{ name: 'Green IT Solutions',href: '/services/green-it',icon: Leaf,description: 'Sustainable Technology',featured: false,color: 'from-green-500 to-emerald-500' },{ name: 'Space Technology',href: '/services/space-tech',icon: Satellite,description: 'Aerospace & Space Tech',featured: false,color: 'from-indigo-500 to-purple-500' } ]; const solutions = [ { name: 'Healthcare Solutions',href: '/solutions/healthcare',icon: Heart,description: 'Digital health transformation',featured: true },{ name: 'Financial Solutions',href: '/solutions/financial',icon: TrendingUp,description: 'Fintech innovation & compliance',featured: true },{ name: 'Manufacturing Solutions',href: '/solutions#manufacturing',icon: Building,description: 'Smart manufacturing & automation',featured: true },{ name: 'Retail Solutions',href: '/solutions/retail',icon: ShoppingCart,description: 'E-commerce & retail innovation',featured: true },{ name: 'Education Solutions',href: '/solutions/education',icon: BookOpen,description: 'EdTech & learning platforms',featured: true },{ name: 'Legal Tech Solutions',href: '/solutions/legal-tech',icon: Scale,description: 'Legal tech & compliance',featured: true },{ name: 'Research & Development',href: '/research-development',icon: Code,description: 'Innovation & R&D support',featured: true },{ name: 'Government Solutions',href: '/solutions#government',icon: Building2,description: 'Public sector digital transformation',featured: false },{ name: 'Education Solutions',href: '/solutions#education',icon: GraduationCap,description: 'EdTech & learning platforms',featured: false } ]; const resources = [ { name: 'Blog & Insights',href: '/blog',icon: BookOpen,description: 'Latest industry trends and insights',featured: true },{ name: 'Case Studies',href: '/case-studies',icon: Target,description: 'Real-world success stories',featured: true },{ name: 'White Papers',href: '/white-papers',icon: FileText,description: 'In-depth research and analysis',featured: true },{ name: 'Webinars',href: '/webinars',icon: Users,description: 'Expert-led learning sessions',featured: true },{ name: 'Documentation',href: '/docs',icon: Code,description: 'Technical guides and APIs',featured: true },{ name: 'FAQ & Support',href: '/faq',icon: HelpCircle,description: 'Get help and answers',featured: true },{ name: 'Pricing Guide',href: '/pricing',icon: DollarSign,description: 'Complete pricing information',featured: true },{ name: 'Training & Certification',href: '/training',icon: BookOpen,description: 'Professional development',featured: true },{ name: 'Developer Portal',href: '/developers',icon: Code,description: 'API documentation & tools',featured: false },{ name: 'Community Forum',href: '/community',icon: Users,description: 'Connect with experts',featured: false } ]; const quickLinks = [ <nav className="space-y-4"> {navigationItems.map((item) => ( <div key={item.name}> <button onClick={() => item.dropdown ? handleDropdownToggle(item.name) : null} className="flex items-center justify-between w-full text-left text-gray-700 hover:text-cyan-600 transition-colors duration-300 font-medium py-2" > <div className="flex items-center space-x-2"> <item.icon className="w-4 h-4" /> <span>{item.name}</span> </div> {item.dropdown && ( <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${ activeDropdown === item.name ? 'rotate-180' : '' }`} /> )} </button> {item.dropdown && activeDropdown === item.name && ( <motion.div initial={{ opacity: 0,height: 0 }} animate={{ opacity: 1,height: 'auto' }} exit={{ opacity: 0,height: 0 }} className="ml-6 space-y-2" > {item.dropdown.map((subItem) => ( <Link key={subItem.name} to={subItem.href} className="block text-sm text-gray-600 hover:text-cyan-600 transition-colors duration-300 py-1" onClick={() => { setActiveDropdown(null); setIsMenuOpen(false)}} > {subItem.name} </Link> ))} </motion.div> )} </div> ))} </nav> {} <div className="hidden lg:flex items-center space-x-4"> <form onSubmit={handleSearch} className="relative"> <input type="text" placeholder="Search services..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-64 px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200" /> <button type="submit" disabled={isSearching} className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-slate-400 hover:text-cyan-400 transition-colors duration-200" > {isSearching ? ( <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div> ) : ( <Search className="w-5 h-5" /> )} </button> </form> {} <div className="flex items-center space-x-2"> <Link to="/request-quote" className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium" > Get Quote </Link> <ThemeToggle /> </div> </div> {} <div className="lg:hidden"> <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-300 hover:text-cyan-400 transition-colors duration-200" > {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />} </button> </div> </div> </div> {} {mobileMenuOpen && ( <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/20"> <div className="container-responsive py-4"> <div className="space-y-4"> {} <form onSubmit={handleSearch} className="relative"> <input type="text" placeholder="Search services..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent" /> <button type="submit" disabled={isSearching} className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-slate-400 hover:text-cyan-400" > {isSearching ? ( <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div> ) : ( <Search className="w-5 h-5" /> )} </button> </form> {} <div className="space-y-2"> {navigation.map((item) => ( <div key={item.name}> {item.hasDropdown ? ( <div> <button onClick={() => { if (item.name === 'Services') { setServicesDropdownOpen(!servicesDropdownOpen); setSolutionsDropdownOpen(false); setResourcesDropdownOpen(false)} else if (item.name === 'Solutions') { setSolutionsDropdownOpen(!solutionsDropdownOpen); setServicesDropdownOpen(false); setResourcesDropdownOpen(false)} else if (item.name === 'Resources') { setResourcesDropdownOpen(!resourcesDropdownOpen); setServicesDropdownOpen(false); setSolutionsDropdownOpen(false)} }} className="w-full flex items-center justify-between px-4 py-3 text-left text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200" > {item.name} <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${ (item.name === 'Services' && servicesDropdownOpen) || (item.name === 'Solutions' && solutionsDropdownOpen) || (item.name === 'Resources' && resourcesDropdownOpen) ? 'rotate-180' : '' }`} /> </button> {} {item.name === 'Services' && servicesDropdownOpen && ( <div className="ml-4 mt-2 space-y-2"> {services.map((service) => ( <Link key={service.name} to={service.href} className="block px-4 py-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/30 rounded transition-all duration-200" onClick={() => setMobileMenuOpen(false)} > {service.name} </Link> ))} </div> )} {} {item.name === 'Solutions' && solutionsDropdownOpen && ( <div className="ml-4 mt-2 space-y-2"> {solutions.map((solution) => ( <Link key={solution.name} to={solution.href} className="block px-4 py-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/30 rounded transition-all duration-200" onClick={() => setMobileMenuOpen(false)} > {solution.name} </Link> ))} </div> )} {} {item.name === 'Resources' && resourcesDropdownOpen && ( <div className="ml-4 mt-2 space-y-2"> {resources.map((resource) => ( <Link key={resource.name} to={resource.href} className="block px-4 py-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/30 rounded transition-all duration-200" onClick={() => setMobileMenuOpen(false)} > {resource.name} </Link> ))} </div> )} </div> ) : ( <Link to={item.href} className="block px-4 py-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200" onClick={() => setMobileMenuOpen(false)} > {item.name} <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${ (item.name === 'Services' && servicesDropdownOpen) || (item.name === 'Solutions' && solutionsDropdownOpen) || (item.name === 'Resources' && resourcesDropdownOpen) ? 'rotate-180' : '' }`} /> </button> {} {item.name === 'Services' && servicesDropdownOpen && ( <div className="ml-4 mt-2 space-y-2"> {services.slice(0,6).map((service) => ( <Link key={service.name} to={service.href} className="block text-slate-400 hover:text-cyan-400 py-1 transition-colors" onClick={() => setMobileMenuOpen(false)} > {service.name} </Link> ))} <Link to="/services" className="block text-cyan-400 hover:text-cyan-300 py-1 font-medium" onClick={() => setMobileMenuOpen(false)} > View All Services → </Link> </div> )} {} <div className="pt-4 border-t border-slate-700"> <div className="space-y-2"> {quickLinks.map((link) => ( <Link key={link.name} to={link.href} className="flex items-center px-4 py-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/30 rounded transition-all duration-200" onClick={() => setMobileMenuOpen(false)} > <link .icon className="w-4 h-4 mr-3" /> {link.name} </Link> ))} </div> <div className="mt-4 pt-4 border-t border-slate-700"> <Link to="/request-quote" className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium" onClick={() => setMobileMenuOpen(false)} > Get Quote </Link> </div> </div> </div> </div> </div> )} </header> </> ======= )} </header> )} import { Link } from 'react-router-dom'; export function AppHeader() { return ( <header className="bg-white border-b border-gray-200 sticky top-0 z-50"> <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between"> <Link to="/" className="text-lg font-bold">Zion Tech Group</Link> <nav className="hidden md:flex items-center space-x-6"> <Link to="/" className="text-gray-700 hover:text-cyan-600">Home</Link> <Link to="/services" className="text-gray-700 hover:text-cyan-600">Services</Link> <Link to="/about" className="text-gray-700 hover:text-cyan-600">About</Link> <Link to="/contact" className="text-gray-700 hover:text-cyan-600">Contact</Link> </nav> </div> </header> )}
>>>>>>> origin/automation-improvements
=======
import React, { useState } from 'react';
import { useMessaging } from '@/context/MessagingContext';
import Link from 'next/link';
import { ResponsiveNavigation } from '@/components/navigation/ResponsiveNavigation';
import { Logo } from '@/components/header/Logo';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react'
import { MobileMenu } from '@/components/header/MobileMenu';
import { useIsMobile } from '@/hooks/use-mobile';
import { MobileBottomNav } from '@/components/header/MobileBottomNav';
import { PointsBadge } from '@/components/loyalty/PointsBadge';
import { LoginModal } from '@/components/auth/LoginModal';
import { useAuth } from '@/hooks/useAuth';
import { UserMenu } from '@/components/header/UserMenu';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import { cn } from '@/lib/utils'; // Import cn utility
import { useRouter } from 'next/router';

export function AppHeader() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const { user } = useAuth();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const router = useRouter();
  const showTagline = router.pathname === '/';

  // Messaging context (unread message count)
  const { unreadCount } = useMessaging();

  const openLoginModal = (returnToPath?: string) => {
    // The actual returnToPath is set in the URL by the child components (ResponsiveNavigation, MobileMenu)
    // using router.push with shallow:true before this function is called.
    // This function's main job is just to open the modal.
    // If a returnToPath is passed, we could potentially use it for other logic here if needed in the future.
    setLoginOpen(true);
  };
  
  return (
    <>
      <header
        style={{ "--nav-height": "64px" } as React.CSSProperties}
        className={cn(
          "sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md text-foreground",
          { "bg-red-500": mobileMenuOpen }
        )}
      >
        <div className="container flex h-16 items-center px-4 sm:px-6">
          <Logo />
          {showTagline && (
            <span className="ml-4 hidden text-sm text-muted-foreground md:inline">
              {t('home.header_tagline')}
            </span>
          )}
          <div className="ml-6 flex-1 hidden md:block">
            <nav role="navigation" aria-label="Main navigation">
              <ResponsiveNavigation openLoginModal={openLoginModal} />
            </nav>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden ml-auto mr-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground/70 hover:text-foreground hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-expanded={mobileMenuOpen}
              aria-label={t('general.toggle_mobile_menu')}
            >
              <span className="sr-only">{t('general.open_main_menu')}</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          <PointsBadge />
          {!isLoggedIn && (
            <div className="ml-4 relative z-10 flex items-center">
              <Link
                href="/auth/login"
                className="text-sm font-medium text-foreground/70 hover:text-foreground"
                aria-label={t('auth.login')}
                data-testid="login-link"
                onClick={(e) => {
                  e.preventDefault();
                  // For the main login link, we might not have a specific returnTo beyond current page,
                  // or we could default to dashboard.
                  // For consistency with how sub-menus now set it:
                  router.push({ pathname: '/auth/login', query: { returnTo: router.asPath } }, undefined, { shallow: true });
                  openLoginModal(router.asPath);
                }}
              >
                {t('auth.login')}
              </Link>
              <Link
                href="/signup"
                className="ml-2 text-sm font-medium text-foreground/70 hover:text-foreground"
                aria-label={t('auth.signup')}
                data-testid="signup-nav-link"
              >
                {t('auth.signup')}
              </Link>
            </div>
          )}
          {/* User avatar menu */}
          {isLoggedIn && (
            <div className="ml-4">
              <UserMenu />
            </div>
          )}
        </div>
      </header>
      
      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-60 pt-16">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative bg-background border-t border-border h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileMenu 
              unreadCount={unreadCount} 
              onClose={() => setMobileMenuOpen(false)}
              openLoginModal={openLoginModal}
            />
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
  );
}
>>>>>>> origin/automation/changelog
