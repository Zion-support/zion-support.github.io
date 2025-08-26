import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Shield, Cloud, Brain, Code, Database, Globe, Smartphone, Cpu, Lock } from 'lucide-react';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'About', href: '/about', current: location.pathname === '/about' },
    { name: 'Services', href: '/services', current: location.pathname === '/services' },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
  ];

  const services = [
    { 
      name: 'AI & Machine Learning', 
      href: '/services/ai', 
      description: 'Advanced AI Solutions & ML Models',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Cybersecurity', 
      href: '/services/cybersecurity', 
      description: 'Threat Detection & Security',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    { 
      name: 'Cloud Services', 
      href: '/services/cloud', 
      description: 'DevOps & Infrastructure',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Web Development', 
      href: '/services/web', 
      description: 'Modern Web Applications',
      icon: Code,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Data Analytics', 
      href: '/services/analytics', 
      description: 'Business Intelligence',
      icon: Database,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'Mobile Apps', 
      href: '/services/mobile', 
      description: 'iOS & Android Development',
      icon: Smartphone,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      name: 'IoT Solutions', 
      href: '/services/iot', 
      description: 'Connected Devices & Edge Computing',
      icon: Cpu,
      color: 'from-teal-500 to-blue-500'
    },
    { 
      name: 'Digital Transformation', 
      href: '/services/consulting', 
      description: 'Strategic IT Consulting',
      icon: Zap,
      color: 'from-pink-500 to-red-500'
    },
  ];

  const microSaasServices = [
    { name: 'AI Content Generator', href: '/services/ai-content', price: '$29/month' },
    { name: 'Smart Analytics Dashboard', href: '/services/analytics-dashboard', price: '$99/month' },
    { name: 'Automated Marketing Suite', href: '/services/marketing-suite', price: '$49/month' },
    { name: 'Project Management Pro', href: '/services/project-management', price: '$39/month' },
    { name: 'Customer Support AI', href: '/services/support-ai', price: '$79/month' },
    { name: 'Financial Planning Tool', href: '/services/financial-tool', price: '$59/month' },
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
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link relative ${
                  item.current ? 'text-zion-cyan' : 'text-slate-300 hover:text-zion-cyan'
                }`}
              >
                {item.name}
                {item.current && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full"></div>
                )}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative">
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
              className="p-2 text-gray-400 hover:text-zion-cyan transition-colors duration-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-800/95 border-t border-slate-700/50 neon-card">
            <div className="container-responsive py-4">
              <div className="space-y-4">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 focus:outline-none"
                  />
                </form>

                {/* Mobile Navigation Links */}
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-colors duration-200 ${
                        item.current 
                          ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30' 
                          : 'text-gray-300 hover:bg-slate-700/50 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Services */}
                <div className="border-t border-slate-700/50 pt-4">
                  <h3 className="px-4 text-sm font-semibold text-zion-cyan mb-3">Services</h3>
                  <div className="space-y-2">
                    {services.slice(0, 6).map((service) => {
                      const IconComponent = service.icon;
                      return (
                        <Link
                          key={service.name}
                          to={service.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-700/50 hover:text-white transition-colors duration-200"
                        >
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mr-3`}>
                            <IconComponent className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-medium">{service.name}</div>
                            <div className="text-sm text-gray-400">{service.description}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-4 px-4">
                    <Link
                      to="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-center text-zion-cyan hover:text-zion-cyan-light text-sm font-medium transition-colors py-3 rounded-lg hover:bg-slate-700/30"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>

                {/* Mobile Actions */}
                <div className="border-t border-slate-700/50 pt-4 px-4">
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center btn-primary py-3"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
