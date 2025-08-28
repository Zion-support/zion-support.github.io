import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, Code, Truck, Building, ShoppingCart, BookOpen, MessageCircle, HelpCircle, Phone, Mail, MapPin, Star, Award, Target, TrendingUp, Lightbulb, Atom, Leaf, Eye, Scale, Building2, Car, Home, Factory, City, ArrowRight, FileText, DollarSign, Handshake, Settings } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate search
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      } finally {
        setIsSearching(false);
      }
    }
  };

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Services', href: '/services', current: false, hasDropdown: true },
    { name: 'Solutions', href: '/solutions', current: false, hasDropdown: true },
    { name: 'Resources', href: '/resources', current: false, hasDropdown: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const services = [
    { 
      name: 'AI & Analytics', 
      href: '/services#ai-business-intelligence', 
      icon: Brain, 
      description: 'Machine Learning & Data Science',
      featured: true,
      color: 'from-purple-500 to-cyan-500'
    },
    { 
      name: 'AI & Legal Tech', 
      href: '/services#ai-legal-tech', 
      icon: Scale, 
      description: 'Document Analysis & Compliance',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'AI & Healthcare', 
      href: '/services#ai-healthcare', 
      icon: Heart, 
      description: 'Medical AI & Diagnostics',
      featured: true,
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'AI & Research', 
      href: '/services#ai-research', 
      icon: Eye, 
      description: 'Scientific Research & Discovery',
      featured: true,
      color: 'from-purple-500 to-violet-500'
    },
    { 
      name: 'AI & Green Tech', 
      href: '/services#ai-green-tech', 
      icon: Leaf, 
      description: 'Sustainability Solutions',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'AI & Metaverse', 
      href: '/services#ai-metaverse', 
      icon: Globe, 
      description: 'Virtual Reality & Gaming',
      featured: true,
      color: 'from-purple-500 to-indigo-500'
    },
    { 
      name: 'AI & Blockchain', 
      href: '/services#blockchain-web3', 
      icon: Lock, 
      description: 'DeFi & Smart Contracts',
      featured: true,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      name: 'AI & Space Tech', 
      href: '/services#space-technology', 
      icon: Rocket, 
      description: 'Satellite & Space Operations',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'AI & Operations', 
      href: '/services#ai-operations', 
      icon: Settings, 
      description: 'Business Process Automation',
      featured: true,
      color: 'from-gray-500 to-slate-500'
    },
    { 
      name: 'AI & Development', 
      href: '/services#ai-development', 
      icon: Code, 
      description: 'Code Assistance & Testing',
      featured: true,
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      name: 'AI & Education', 
      href: '/services#ai-education', 
      icon: BookOpen, 
      description: 'Learning & Training Platforms',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'AI & Entertainment', 
      href: '/services#ai-entertainment', 
      icon: Star, 
      description: 'Content Creation & Gaming',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const solutions = [
    { 
      name: 'Micro SAAS', 
      href: '/services/micro-saas', 
      icon: Building, 
      description: 'Scalable Business Solutions',
      featured: true,
      color: 'from-emerald-500 to-green-500'
    },
    { 
      name: 'Cloud & DevOps', 
      href: '/services/cloud-devops', 
      icon: Cloud, 
      description: 'Infrastructure & Automation',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Cybersecurity', 
      href: '/services#cybersecurity', 
      icon: Shield, 
      description: 'Advanced Security Solutions',
      featured: true,
      color: 'from-red-500 to-orange-500'
    },
    { 
      name: 'Digital Twin', 
      href: '/services/digital-twin', 
      icon: Eye, 
      description: 'Virtual Replicas & Simulation',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'IoT & Edge', 
      href: '/services/iot-edge-computing', 
      icon: Cpu, 
      description: 'Connected Devices & Computing',
      featured: true,
      color: 'from-teal-500 to-cyan-500'
    },
    { 
      name: 'Quantum Computing', 
      href: '/services#quantum-computing', 
      icon: Atom, 
      description: 'Next-Generation Computing',
      featured: true,
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const resources = [
    { 
      name: 'Pricing Guide 2027', 
      href: '/pricing-guide-2027', 
      icon: DollarSign, 
      description: 'Comprehensive Pricing Information',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Pricing Guide 2030', 
      href: '/pricing-guide-2030', 
      icon: TrendingUp, 
      description: 'Future Pricing & Trends',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'Blog', 
      href: '/blog', 
      icon: FileText, 
      description: 'Latest Insights & Updates',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'FAQ', 
      href: '/faq', 
      icon: HelpCircle, 
      description: 'Frequently Asked Questions',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'Request Quote', 
      href: '/request-quote', 
      icon: MessageCircle, 
      description: 'Get Custom Pricing',
      featured: true,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:bg-gray-900/95 dark:border-gray-700' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <button
                    className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200"
                    onClick={() => {
                      if (item.name === 'Services') setServicesDropdownOpen(!servicesDropdownOpen);
                      if (item.name === 'Solutions') setSolutionsDropdownOpen(!solutionsDropdownOpen);
                      if (item.name === 'Resources') setResourcesDropdownOpen(!resourcesDropdownOpen);
                    }}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  
                  {/* Services Dropdown */}
                  {item.name === 'Services' && servicesDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-screen max-w-6xl transform -translate-x-1/2 left-1/2">
                      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6">
                        <div className="grid grid-cols-3 gap-6">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="group block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                              onClick={() => setServicesDropdownOpen(false)}
                            >
                              <div className="flex items-start space-x-3">
                                <div className={`p-2 rounded-lg bg-gradient-to-r ${service.color}`}>
                                  <service.icon className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                    {service.name}
                                  </h3>
                                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    {service.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                          <Link
                            to="/services"
                            className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            View All Services
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Solutions Dropdown */}
                  {item.name === 'Solutions' && solutionsDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-screen max-w-4xl transform -translate-x-1/2 left-1/2">
                      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6">
                        <div className="grid grid-cols-2 gap-6">
                          {solutions.map((solution) => (
                            <Link
                              key={solution.name}
                              to={solution.href}
                              className="group block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                              onClick={() => setSolutionsDropdownOpen(false)}
                            >
                              <div className="flex items-start space-x-3">
                                <div className={`p-2 rounded-lg bg-gradient-to-r ${solution.color}`}>
                                  <solution.icon className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                    {solution.name}
                                  </h3>
                                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    {solution.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Resources Dropdown */}
                  {item.name === 'Resources' && resourcesDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-screen max-w-4xl transform -translate-x-1/2 left-1/2">
                      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6">
                        <div className="grid grid-cols-2 gap-6">
                          {resources.map((resource) => (
                            <Link
                              key={resource.name}
                              to={resource.href}
                              className="group block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                              onClick={() => setResourcesDropdownOpen(false)}
                            >
                              <div className="flex items-start space-x-3">
                                <div className={`p-2 rounded-lg bg-gradient-to-r ${resource.color}`}>
                                  <resource.icon className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                    {resource.name}
                                  </h3>
                                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    {resource.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 pl-10 text-sm bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              {isSearching && (
                <div className="absolute right-3 top-2.5">
                  <ZionLoadingSpinner size="sm" />
                </div>
              )}
            </form>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Contact Info */}
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+1 302 464 0950</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-2"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="px-3 pb-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 text-sm bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </form>

            {/* Mobile Navigation */}
            {navigation.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div className="space-y-2">
                    <div className="px-3 py-2 text-base font-medium text-gray-900 dark:text-white">
                      {item.name}
                    </div>
                    {item.name === 'Services' && (
                      <div className="pl-6 space-y-2">
                        {services.slice(0, 6).map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                        <Link
                          to="/services"
                          className="block px-3 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          View All Services →
                        </Link>
                      </div>
                    )}
                    {item.name === 'Solutions' && (
                      <div className="pl-6 space-y-2">
                        {solutions.map((solution) => (
                          <Link
                            key={solution.name}
                            to={solution.href}
                            className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {solution.name}
                          </Link>
                        ))}
                      </div>
                    )}
                    {item.name === 'Resources' && (
                      <div className="pl-6 space-y-2">
                        {resources.map((resource) => (
                          <Link
                            key={resource.name}
                            to={resource.href}
                            className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
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
                    className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Contact Info */}
            <div className="px-3 py-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mt-2">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
