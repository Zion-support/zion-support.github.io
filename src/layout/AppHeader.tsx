import React from 'react';

import { Link, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';


  const handleDropdownToggle = (props: any) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

=======
export function AppHeader() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const nav = [
    { name: 'Home', to: '/' },
    { name: 'Services', to: '/services' },
    { name: 'Solutions', to: '/solutions' },
    { name: 'Resources', to: '/resources' },
    { name: 'Contact', to: '/contact' }
  ];

>>>>>>> origin/main
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-gray-900">Zion Tech Group</Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map(item => (
            <Link key={item.to} to={item.to} className={({ isActive }) => isActive ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:text-gray-900'}>
              {item.name}
            </Link>
          ))}
        </nav>
        <button className="md:hidden p-2" aria-label="Toggle menu" onClick={() => setMobileOpen(v => !v)}>
          {mobileOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-3 space-y-2">
            {nav.map(item => (
              <Link key={item.to} to={item.to} className="block text-gray-700" onClick={() => setMobileOpen(false)}>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>


          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-cyan-600 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200/50 py-4"
          >

<<<<<<< HEAD
  const [scrolled, setScrolled] = useState<any>(false);
  const [isSearching, setIsSearching] = useState<any>(false);
=======

  useEffect(() => {
    const handleScroll = (props: any) => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {

    { 
      name: 'AI Business Intelligence', 
      href: '/services/ai-business-intelligence', 
      icon: Brain, 
      description: 'Machine Learning & Data Science',
      featured: true,
      color: 'from-purple-500 to-cyan-500'
    },
    { 
      name: 'AI Healthcare Analytics', 
      href: '/services/ai-healthcare-analytics-platform', 
      icon: Heart, 
      description: 'Medical AI & Diagnostics',
      featured: true,
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'AI Cybersecurity', 
      href: '/services/ai-cybersecurity-threat-detection', 
      icon: Shield, 
      description: 'AI-Powered Security',
      featured: true,
      color: 'from-green-500 to-blue-500'
    },
    { 
      name: 'Quantum Computing', 
      href: '/services/quantum-computing', 
      icon: Atom, 
      description: 'Quantum AI & Optimization',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'IoT Edge Computing', 
      href: '/services/iot-edge', 
      icon: Cpu, 
      description: 'IoT & Real-time Processing',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Digital Twin Platform', 
      href: '/services/digital-twin', 
      icon: Globe, 
      description: 'Virtual Replicas & Simulation',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Cloud DevOps', 
      href: '/services/cloud-devops', 
      icon: Cloud, 
      description: 'DevOps & Infrastructure',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Micro SaaS Products', 
      href: '/services/micro-saas', 
      icon: ShoppingCart, 
      description: 'AI automations with transparent pricing',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'Data Analytics', 
      href: '/services/data-analytics', 
      icon: BarChart3, 
      description: 'Business Intelligence & Analytics',
      featured: false,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'IT Infrastructure', 
      href: '/services/it-infrastructure', 
      icon: Server, 
      description: 'Enterprise IT Solutions',
      featured: false,
      color: 'from-gray-500 to-slate-500'
    },
    { 
      name: 'Green IT Solutions', 
      href: '/services/green-it', 
      icon: Leaf, 
      description: 'Sustainable Technology',
      featured: false,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Space Technology', 
      href: '/services/space-tech', 
      icon: Satellite, 
      description: 'Aerospace & Space Tech',
      featured: false,
      color: 'from-indigo-500 to-purple-500'
    }
  ];
  const solutions = [
    {
      name: 'Healthcare Solutions',
      href: '/solutions/healthcare',
      icon: Heart,
      description: 'Digital health transformation',
      featured: true
    },
    {
      name: 'Financial Solutions',
      href: '/solutions/financial',
      icon: TrendingUp,
      description: 'Fintech innovation & compliance',
      featured: true
    },
    {
      name: 'Manufacturing Solutions',
      href: '/solutions#manufacturing',
      icon: Building,
      description: 'Smart manufacturing & automation',
      featured: true
    },
    {
      name: 'Retail Solutions',
      href: '/solutions/retail',
      icon: ShoppingCart,
      description: 'E-commerce & retail innovation',
      featured: true
    },
    {
      name: 'Education Solutions',
      href: '/solutions/education',
      icon: BookOpen,
      description: 'EdTech & learning platforms',
      featured: true
    },
    {
      name: 'Legal Tech Solutions',
      href: '/solutions/legal-tech',
      icon: Scale,
      description: 'Legal tech & compliance',
      featured: true
    },
    {
      name: 'Research & Development',
      href: '/research-development',
      icon: Code,
      description: 'Innovation & R&D support',
      featured: true
    },
    {
      name: 'Government Solutions',
      href: '/solutions#government',
      icon: Building2,
      description: 'Public sector digital transformation',
      featured: false
    },
    {
      name: 'Education Solutions',
      href: '/solutions#education',
      icon: GraduationCap,
      description: 'EdTech & learning platforms',
      featured: false
    }
  ];
  const resources = [
    {
      name: 'Blog & Insights',
      href: '/blog',
      icon: BookOpen,
      description: 'Latest industry trends and insights',
      featured: true
    },
    {
      name: 'Case Studies',
      href: '/case-studies',
      icon: Target,
      description: 'Real-world success stories',
      featured: true
    },
    {
      name: 'White Papers',
      href: '/white-papers',
      icon: FileText,
      description: 'In-depth research and analysis',
      featured: true
    },
    {
      name: 'Webinars',
      href: '/webinars',
      icon: Users,
      description: 'Expert-led learning sessions',
      featured: true
    },
    {
      name: 'Documentation',
      href: '/docs',
      icon: Code,
      description: 'Technical guides and APIs',
      featured: true
    },
    {
      name: 'FAQ & Support',
      href: '/faq',
      icon: HelpCircle,
      description: 'Get help and answers',
      featured: true
    },
    {
      name: 'Pricing Guide',
      href: '/pricing',
      icon: DollarSign,
      description: 'Complete pricing information',
      featured: true
    },
    {
      name: 'Training & Certification',
      href: '/training',
      icon: BookOpen,
      description: 'Professional development',
      featured: true
    },
    {
      name: 'Developer Portal',
      href: '/developers',
      icon: Code,
      description: 'API documentation & tools',
      featured: false
    },
    {
      name: 'Community Forum',
      href: '/community',
      icon: Users,
      description: 'Connect with experts',
      featured: false
    }
  ];

  const quickLinks = [

            <nav className="space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => item.dropdown ? handleDropdownToggle(item.name) : null}
                    className="flex items-center justify-between w-full text-left text-gray-700 hover:text-cyan-600 transition-colors duration-300 font-medium py-2"
                  >
                    <div className="flex items-center space-x-2">
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </div>
                    {item.dropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </button>

                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-6 space-y-2"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block text-sm text-gray-600 hover:text-cyan-600 transition-colors duration-300 py-1"
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsMenuOpen(false);
                          }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="hidden lg:flex items-center space-x-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  {isSearching ? (
                    <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Search className="w-5 h-5" />
                  )}
                </button>
              </form>

              {/* Quick Actions */}
              <div className="flex items-center space-x-2">
                <Link
                  to="/request-quote"
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium"
                >
                  Get Quote
                </Link>
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-cyan-400 transition-colors duration-200"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/20">
            <div className="container-responsive py-4">
              <div className="space-y-4">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    disabled={isSearching}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-slate-400 hover:text-cyan-400"
                  >
                    {isSearching ? (
                      <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Search className="w-5 h-5" />
                    )}
                  </button>
                </form>

                {/* Mobile Navigation Links */}
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div>
                          <button
                            onClick={() => {
                              if (item.name === 'Services') {
                                setServicesDropdownOpen(!servicesDropdownOpen);
                                setSolutionsDropdownOpen(false);
                                setResourcesDropdownOpen(false);
                              } else if (item.name === 'Solutions') {
                                setSolutionsDropdownOpen(!solutionsDropdownOpen);
                                setServicesDropdownOpen(false);
                                setResourcesDropdownOpen(false);
                              } else if (item.name === 'Resources') {
                                setResourcesDropdownOpen(!resourcesDropdownOpen);
                                setServicesDropdownOpen(false);
                                setSolutionsDropdownOpen(false);
                              }
                            }}
                            className="w-full flex items-center justify-between px-4 py-3 text-left text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
                          >
                            {item.name}
                            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                              (item.name === 'Services' && servicesDropdownOpen) ||
                              (item.name === 'Solutions' && solutionsDropdownOpen) ||
                              (item.name === 'Resources' && resourcesDropdownOpen)
                                ? 'rotate-180' : ''
                            }`} />
                          </button>
                          
                          {/* Mobile Services Dropdown */}
                          {item.name === 'Services' && servicesDropdownOpen && (
                            <div className="ml-4 mt-2 space-y-2">
                              {services.map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.href}
                                  className="block px-4 py-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/30 rounded transition-all duration-200"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          )}

                          {/* Mobile Solutions Dropdown */}
                          {item.name === 'Solutions' && solutionsDropdownOpen && (
                            <div className="ml-4 mt-2 space-y-2">
                              {solutions.map((solution) => (
                                <Link
                                  key={solution.name}
                                  to={solution.href}
                                  className="block px-4 py-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/30 rounded transition-all duration-200"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {solution.name}
                                </Link>
                              ))}
                            </div>
                          )}

                          {/* Mobile Resources Dropdown */}
                          {item.name === 'Resources' && resourcesDropdownOpen && (
                            <div className="ml-4 mt-2 space-y-2">
                              {resources.map((resource) => (
                                <Link
                                  key={resource.name}
                                  to={resource.href}
                                  className="block px-4 py-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/30 rounded transition-all duration-200"
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
                          className="block px-4 py-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                          <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                            (item.name === 'Services' && servicesDropdownOpen) ||
                            (item.name === 'Solutions' && solutionsDropdownOpen) ||
                            (item.name === 'Resources' && resourcesDropdownOpen)
                              ? 'rotate-180' : ''
                          }`} />
                        </button>

                        {/* Mobile Services Dropdown */}
                        {item.name === 'Services' && servicesDropdownOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {services.slice(0, 6).map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="block text-slate-400 hover:text-cyan-400 py-1 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {service.name}
                              </Link>
                            ))}
                            <Link
                              to="/services"
                              className="block text-cyan-400 hover:text-cyan-300 py-1 font-medium"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              View All Services →
                            </Link>
                          </div>
                        )}

                {/* Mobile Quick Actions */}
                <div className="pt-4 border-t border-slate-700">
                  <div className="space-y-2">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="flex items-center px-4 py-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/30 rounded transition-all duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <link .icon className="w-4 h-4 mr-3"  />
                        {link.name}
                      </Link>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-slate-700">
                    <Link
                      to="/request-quote"
                      className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
=======
      )}
    </header>
  );
}


import { Link } from 'react-router-dom';

export function AppHeader() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold">Zion Tech Group</Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-cyan-600">Home</Link>
          <Link to="/services" className="text-gray-700 hover:text-cyan-600">Services</Link>
          <Link to="/about" className="text-gray-700 hover:text-cyan-600">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-cyan-600">Contact</Link>
        </nav>
      </div>
    </header>
  );
}


