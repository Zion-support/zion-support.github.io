<<<<<<< HEAD
=======
<<<<<<< HEADimport React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown } from 'lucide-react';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
<<<<<<< HEAD  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

<<<<<<< HEAD
  // Organized Services Categories
  const servicesCategories = [{
      title: 'AI & Machine Learning',
=======
<<<<<<< HEAD  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      icon: Zap,
      color: 'from-zion-cyan to-zion-blue',
      dropdown: [
        { name: 'AI & Analytics', href: '/services/ai-analytics', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, color: 'from-zion-blue to-zion-cyan' },
        { name: 'IoT & Edge', href: '/services/iot-edge', icon: Cpu, color: 'from-zion-green to-zion-cyan' },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Rocket, color: 'from-zion-purple to-zion-cyan' },
        { name: 'Blockchain', href: '/services/blockchain', icon: Lock, color: 'from-zion-orange to-zion-purple' },
        { name: 'Digital Twin', href: '/services/digital-twin', icon: Globe, color: 'from-zion-blue to-zion-purple' },
        { name: 'Sustainability', href: '/services/sustainability', icon: Heart, color: 'from-zion-green to-zion-blue' }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas-services',
      icon: Code,
      color: 'from-zion-purple to-zion-pink',
      dropdown: [
        { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence', icon: Brain, color: 'from-zion-cyan to-zion-blue' },
        { name: 'Customer Experience', href: '/micro-saas/customer-experience', icon: Users, color: 'from-zion-purple to-zion-pink' },
        { name: 'Quantum Computing', href: '/micro-saas/quantum-computing', icon: Rocket, color: 'from-zion-purple to-zion-cyan' },
        { name: 'Supply Chain', href: '/micro-saas/supply-chain', icon: Network, color: 'from-zion-green to-zion-cyan' },
        { name: 'Cybersecurity', href: '/micro-saas/cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red' },
        { name: 'IoT Edge Computing', href: '/micro-saas/iot-edge', icon: Cpu, color: 'from-zion-green to-zion-cyan' },
        { name: 'Content Creation', href: '/micro-saas/content-creation', icon: FileText, color: 'from-zion-orange to-zion-purple' },
        { name: 'HR Platform', href: '/micro-saas/hr-platform', icon: Users, color: 'from-zion-pink to-zion-purple' }
      ]
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: Network,
      color: 'from-zion-blue to-zion-cyan',
      dropdown: [
        { name: 'Infrastructure', href: '/it-services/infrastructure', icon: Network, color: 'from-zion-blue to-zion-cyan' },
        { name: 'Cloud Migration', href: '/it-services/cloud-migration', icon: Cloud, color: 'from-zion-blue to-zion-purple' },
        { name: 'DevOps', href: '/it-services/devops', icon: Code, color: 'from-zion-green to-zion-cyan' },
        { name: 'Data Center', href: '/it-services/data-center', icon: Database, color: 'from-zion-blue to-zion-green' },
        { name: 'Network Security', href: '/it-services/network-security', icon: Shield, color: 'from-zion-purple to-zion-red' },
        { name: '24/7 Support', href: '/it-services/support', icon: MessageCircle, color: 'from-zion-green to-zion-blue' }
      ]
    },
    {
      name: 'AI Solutions',
      href: '/ai-solutions',
>>>>>>> main
      icon: Brain,
      color: 'from-zion-cyan to-zion-purple',
      dropdown: [
        { name: 'Machine Learning', href: '/ai-solutions/machine-learning', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
        { name: 'Computer Vision', href: '/ai-solutions/computer-vision', icon: Eye, color: 'from-zion-purple to-zion-pink' },
        { name: 'NLP & Chatbots', href: '/ai-solutions/nlp-chatbots', icon: MessageCircle, color: 'from-zion-green to-zion-cyan' },
        { name: 'Predictive Analytics', href: '/ai-solutions/predictive-analytics', icon: TrendingUp, color: 'from-zion-blue to-zion-green' },
        { name: 'AI Consulting', href: '/ai-solutions/consulting', icon: Users, color: 'from-zion-pink to-zion-purple' },
        { name: 'Custom AI Models', href: '/ai-solutions/custom-models', icon: Code, color: 'from-zion-orange to-zion-purple' }
      ]
    },
    {
      name: 'Innovation Lab',
      href: '/innovation-lab',
      icon: Sparkles,
      color: 'from-zion-purple to-zion-pink',
      dropdown: [
        { name: 'Research & Development', href: '/innovation-lab/research', icon: Sparkles, color: 'from-zion-purple to-zion-pink' },
        { name: 'Emerging Tech', href: '/innovation-lab/emerging-tech', icon: Rocket, color: 'from-zion-purple to-zion-cyan' },
        { name: 'Prototyping', href: '/innovation-lab/prototyping', icon: Code, color: 'from-zion-green to-zion-cyan' },
        { name: 'Innovation Consulting', href: '/innovation-lab/consulting', icon: Users, color: 'from-zion-pink to-zion-purple' },
        { name: 'Tech Partnerships', href: '/innovation-lab/partnerships', icon: Handshake, color: 'from-zion-blue to-zion-green' }
      ]
    }
  ];
<<<<<<< HEAD
        setServicesDropdownOpen(true);
        setSolutionsDropdownOpen(false);
        setCompanyDropdownOpen(false);
        setResourcesDropdownOpen(false)} else if(nav.name === 'Solutions') {

        setSolutionsDropdownOpen(true);
        setServicesDropdownOpen(false);
        setCompanyDropdownOpen(false);
        setResourcesDropdownOpen(false)} else if(nav.name === 'Pricing') {
        // Use the same dropdown state as solutions for pricing
        setSolutionsDropdownOpen(true);
        setServicesDropdownOpen(false);
        setCompanyDropdownOpen(false);
        setResourcesDropdownOpen(false)} else if(nav.name === 'Company') {

        setCompanyDropdownOpen(true);
        setServicesDropdownOpen(false);
        setSolutionsDropdownOpen(false);
        setResourcesDropdownOpen(false)} else if(nav.name === 'Resources') {
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

  const closeAllDropdowns = (...args: unknown[]): unknown => {
    setServicesDropdownOpen(false);    setSolutionsDropdownOpen(false);
    setCompanyDropdownOpen(false);
    setResourcesDropdownOpen(false);
    setActiveNav(null)};

  return ()
    <>`
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${        scrolled
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10'
          : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20'      }`}>
        <div className="container-responsive">"
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}"
            <div className="flex items-center">"
              <Link to="/" className="flex-shrink-0 group">"
                <div className="flex items-center space-x-3">"
                  <div className="relative">"
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">"
                      <Zap className="w-6 h-6 text-white"  />
                    </div>"                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>"
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    Zion Tech Group
                  </h1>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => ("
                <div key={item.name} className="relative">
                  {item.hasDropdown ? ("
                    <div className="relative">
                      <button
                        onClick={() => {
=======

  const quickActions = [
    { name: 'Get Quote', href: '/contact', icon: MessageCircle, color: 'from-zion-cyan to-zion-blue' },
    { name: 'Book Demo', href: '/demo', icon: Video, color: 'from-zion-purple to-zion-pink' },
    { name: 'Support', href: '/support', icon: MessageCircle, color: 'from-zion-green to-zion-cyan' }
  ];
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-zion-slate-dark/95 backdrop-blur-md border-b border-zion-cyan/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  item.current
                    ? 'text-zion-cyan bg-zion-cyan/10'
                    : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors"
                aria-expanded={activeDropdown === 'services'}
                aria-haspopup="true"
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
>>>>>>> main

              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md"
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group"
                          >
                            <div className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>
                              <service.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">
                                {service.name}
                              </div>
                              <div className="text-sm text-zion-slate-light">
                                {service.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown('solutions')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors"
                aria-expanded={activeDropdown === 'solutions'}
                aria-haspopup="true"
              >
                Solutions
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'solutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md"
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {solutions.map((solution) => (
                          <Link
                            key={solution.name}
                            to={solution.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group"
                          >
                            <div className={`w-10 h-10 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>
                              <solution.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">
                                {solution.name}
                              </div>
                              <div className="text-sm text-zion-slate-light">
                                {solution.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown('resources')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors"
                aria-expanded={activeDropdown === 'resources'}
                aria-haspopup="true"
              >
                Resources
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'resources' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md"
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {resources.map((resource) => (
                          <Link
                            key={resource.name}
                            to={resource.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group"
                          >
                            <resource.icon className="w-5 h-5 text-zion-cyan mr-3 group-hover:scale-110 transition-transform" />
                            <span className="text-white group-hover:text-zion-cyan transition-colors">
                              {resource.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown('company')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors"
                aria-expanded={activeDropdown === 'company'}
                aria-haspopup="true"
              >
                Company
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'company' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md"
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {company.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group"
                          >
                            <item.icon className="w-5 h-5 text-zion-cyan mr-3 group-hover:scale-110 transition-transform" />
                            <span className="text-white group-hover:text-zion-cyan transition-colors">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right side - Search, User, Mobile menu */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden md:block">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className={`w-64 px-4 py-2 pl-10 bg-zion-slate/20 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan transition-all duration-200 ${
                    searchFocused ? 'w-80' : ''
                  }`}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
              </form>
            </div>

            {/* User Menu */}
            {user ? (
              <div className="relative dropdown-container">
                <button
                  onClick={() => toggleDropdown('user')}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-zion-cyan/10 transition-colors"
                  aria-expanded={activeDropdown === 'user'}
                  aria-haspopup="true"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white text-sm hidden lg:block">{user.name}</span>
                  <ChevronDown className="w-4 h-4 text-zion-slate-light" />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'user' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md"
                    >
                      <div className="p-2">
                        <Link
                          to="/dashboard"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan"
                        >
                          <PanelLeft className="w-4 h-4 mr-3" />
                          Dashboard
                        </Link>
                        <Link
                          to="/profile"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan"
                        >
                          <User className="w-4 h-4 mr-3" />
                          Profile
                        </Link>
                        <Link
                          to="/settings"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan"
                        >
                          <Settings className="w-4 h-4 mr-3" />
                          Settings
                        </Link>
                        <hr className="border-zion-slate/20 my-2" />
                        <button
                          onClick={() => {
                            logout();
                            setActiveDropdown(null);
                          }}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan"
                        >
                          <LogOut className="w-4 h-4 mr-3" />
                          Logout
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:flex relative">  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const services = [
    { name: 'AI Solutions', href: '/services/ai', description: 'Machine Learning & NLP' },
    { name: 'Tech Talent', href: '/talent', description: 'Expert Developers & Engineers' },
    { name: 'Equipment', href: '/equipment', description: 'Infrastructure & Hardware' },
    { name: 'Consulting', href: '/consulting', description: 'Digital Transformation' },
    { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Security & Compliance' },
    { name: 'Cloud Services', href: '/services/cloud', description: 'DevOps & Infrastructure' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-700/20 bg-slate-900/95 backdrop-blur-md">
        <div className="container flex h-16 items-center px-4 sm:px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex ml-8 space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
                className="flex items-center text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 border border-slate-700/50 rounded-lg shadow-xl backdrop-blur-md"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                        >
                          <div className="flex-1">
                            <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                              {service.name}
                            </div>
                            <div className="text-sm text-gray-400">
                              {service.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-700/50">
                      <Link
                        to="/services"
                        className="block text-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex ml-6 flex-1 max-w-md">
            <form onSubmit={handleSearch} className="relative w-full">
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Search className="h-4 h-4" />
              <div className="hidden md:flex items-center space-x-3">
                <Link
                  to="/login"
                  className="px-4 py-2 text-zion-cyan border border-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            )}
          {/* Right side actions */}
          <div className="ml-6 flex items-center space-x-4">
            {/* Notifications */}
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
              <Bell className="h-5 w-5" />
            </button>

            {/* User menu */}
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
              <User className="h-5 w-5" />
            </button>
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-zinc-400" />              className="md:hidden p-2 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-zion-slate-dark border-t border-zion-cyan/20"
          >
            <div className="container mx-auto px-6 py-6">              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 bg-zion-slate/20 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
              </form>

              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={closeMobileMenu}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      item.current
                        ? 'text-zion-cyan bg-zion-cyan/10'
                        : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Mobile Quick Actions */}
              <div className="mt-6 pt-6 border-t border-zinc-800/50">
                <div className="grid grid-cols-1 gap-3">
                  {quickActions.map((action) => (
                    <Link
                      key={action.name}
                      to={action.href}
                      className="btn-futuristic text-center"
                    >
                      {action.name}        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 border-t border-slate-700/20">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-slate-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-slate-400 text-sm font-medium mb-2">Services</div>
                <div className="space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              </div>

              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">
                  Services
                </div>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Solutions */}
              <div className="space-y-2">
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">
                  Solutions
                </div>
                {solutions.map((solution) => (
                  <Link
                    key={solution.name}
                    to={solution.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    {solution.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Resources */}
              <div className="space-y-2">
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">
                  Resources
                </div>
                {resources.map((resource) => (
                  <Link
                    key={resource.name}
                    to={resource.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    {resource.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Company */}
              <div className="space-y-2">
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">
                  Company
                </div>
                {company.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Auth */}
              {!user ? (
                <div className="pt-4 border-t border-zion-slate/20">
                  <div className="space-y-3">
                    <Link
                      to="/login"
                      onClick={closeMobileMenu}
                      className="block w-full px-4 py-2 text-center text-zion-cyan border border-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      onClick={closeMobileMenu}
                      className="block w-full px-4 py-2 text-center bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="pt-4 border-t border-zion-slate/20">
                  <div className="space-y-3">
                    <Link
                      to="/dashboard"
                      onClick={closeMobileMenu}
                      className="block w-full px-4 py-2 text-center bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        closeMobileMenu();
                      }}
                      className="block w-full px-4 py-2 text-center text-zion-cyan border border-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>  );
}
>>>>>>> main
