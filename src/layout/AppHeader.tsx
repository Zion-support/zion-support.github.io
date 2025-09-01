import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Search, 
  User, 
  Bell, 
  ChevronDown,
  Brain,
  Shield,
  Cloud,
  Zap,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  BarChart3,
  FileImage,
  TrendingUp,
  MessageCircle,
  Video,
  FileText,
  Heart,
  PanelLeft,
  FlaskConical
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
=======
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Cloud, Shield, Code, Rocket } from 'lucide-react';
export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
=======
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return : unknown window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };
  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Services', href: '/services', current: false },
    { name: 'Contact', href: '/contact', current: false },
    { name: 'Schedule Demo', href: '/schedule-demo', current: false, featured: true },
  ];
  const services = [
    { 
      name: 'AI Solutions', 
      href: '/services/ai', 
      description: 'Machine Learning & NLP',
      icon: Brain,
      color: 'from-zion-cyan to-zion-purple'
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Rocket,
      dropdown: [
        { name: 'AI & Machine Learning', href: '/solutions#ai-ml' },
        { name: 'Cybersecurity', href: '/solutions#cybersecurity' },
        { name: 'Cloud Computing', href: '/solutions#cloud-computing' },
        { name: 'Data Analytics', href: '/solutions#data-analytics' },
        { name: 'IoT & Edge', href: '/solutions#iot-edge' },
        { name: 'Digital Transformation', href: '/solutions#digital-transformation' }
      ]
    },
    {
      name: 'Research',
      href: '/research-development',
      icon: FlaskConical,
      dropdown: [
        { name: 'Research Areas', href: '/research-development#research-areas' },
        { name: 'Active Projects', href: '/research-development#active-projects' },
        { name: 'Publications', href: '/research-development#publications' },
        { name: 'Patents', href: '/research-development#patents' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Events', href: '/events' }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas',
      icon: Code,
      color: 'from-zion-blue to-zion-cyan'
    },
    { 
      name: 'Equipment', 
      href: '/equipment', 
      description: 'Infrastructure & Hardware',
      icon: Cloud,
      color: 'from-zion-purple to-zion-blue'
    },
    { 
      name: 'Consulting', 
      href: '/consulting', 
      description: 'Digital Transformation',
      icon: Rocket,
      color: 'from-zion-cyan to-zion-green'
    },
    { 
      name: 'Cybersecurity', 
      href: '/services/cybersecurity', 
      description: 'Security & Compliance',
      icon: Shield,
      color: 'from-zion-red to-zion-purple'
    },
    { 
      name: 'Cloud Services', 
      href: '/services/cloud', 
      description: 'DevOps & Infrastructure',
      icon: Cloud,
      color: 'from-zion-blue to-zion-cyan'
    },
  ];
  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10' 
          : 'bg-zion-slate-dark/80 backdrop-blur-md border-b border-zion-cyan/10'
      }`}>
        <div className="container-responsive">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 group">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center neon-glow group-hover:neon-glow-purple transition-all duration-300">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    Zion Tech Group
                  </h1>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </Link>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex ml-8 space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-zion-slate-light hover:text-zion-cyan px-3 py-2 text-sm font-medium transition-all duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="flex items-center text-zion-slate-light hover:text-zion-cyan px-3 py-2 text-sm font-medium transition-all duration-300 relative group"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple transition-all duration-300 group-hover:w-full"></span>
                </button>
                {servicesDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-96 bg-zion-slate-dark/95 border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-xl"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-1 gap-3">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="flex items-center p-4 rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 group border border-transparent hover:border-zion-cyan/20"
                          >
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                              <service.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="text-white font-medium group-hover:text-zion-cyan transition-colors">
                                {service.name}
                              </div>
                              <div className="text-sm text-zion-slate-light">
                                {service.description}
                              </div>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <ChevronDown className="w-4 h-4 text-zion-cyan rotate-[-90deg]" />
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-6 pt-6 border-t border-zion-cyan/20">
                        <Link
                          to="/services"
                          className="block text-center text-zion-cyan hover:text-zion-cyan-light text-sm font-medium transition-colors py-3 px-4 rounded-lg hover:bg-zion-cyan/10 border border-zion-cyan/30 hover:border-zion-cyan/50"
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
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 pl-10 bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-cyan/50 focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-cyan" />
              </form>
              {/* Notifications */}
              <button className="relative p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-zion-cyan rounded-full"></span>
              </button>
              {/* User Menu */}
              <button className="flex items-center space-x-2 p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                <User className="w-5 h-5" />
                <span className="text-sm font-medium">Account</span>
              </button>
              {/* CTA Button */}
              <Link
                to="/contact"
                className="btn-futuristic text-sm px-6 py-2"
              >
                Get Started
              </Link>
            </div>
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
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
          <div className="lg:hidden bg-zion-slate-dark/95 backdrop-blur-xl border-t border-zion-cyan/20">
            <div className="container-responsive py-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-6">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-10 bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-cyan/50 focus:border-zion-cyan focus:outline-none transition-all duration-300"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-cyan" />
              </form>
              {/* Mobile Navigation */}
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-zion-slate-light hover:text-zion-cyan py-2 text-base font-medium transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              {/* Mobile Services */}
              <div className="mt-6 pt-6 border-t border-zion-cyan/20">
                <h3 className="text-zion-cyan font-medium mb-4">Services</h3>
                <div className="grid grid-cols-1 gap-3">
                  {services.slice(0, 4).map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center p-3 rounded-lg hover:bg-zion-cyan/10 transition-all duration-300"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mr-3`}>
                        <service.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-medium text-sm">{service.name}</div>
                        <div className="text-zion-slate-light text-xs">{service.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center text-zion-cyan hover:text-zion-cyan-light text-sm font-medium transition-colors py-3 px-4 rounded-lg hover:bg-zion-cyan/10 border border-zion-cyan/30 hover:border-zion-cyan/50 mt-4"
                >
                  View All Services →
                </Link>
              </div>
              {/* Mobile CTA */}
              <div className="mt-6 pt-6 border-t border-zion-cyan/20">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-futuristic w-full text-center"
                >
                  Get Started
                </Link>
              </div>
            )}

            {activeDropdown === 'Resources' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {resources.map((resource) => (
                  <Link
                    key={resource.name}
                    to={resource.href}
                    className="group p-4 rounded-lg hover:bg-slate-700/50 transition-all duration-200"
                    onClick={closeAllDropdowns}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <resource.icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300">
                        {resource.name}
                      </h3>
                    </div>
                    <p className="text-slate-300 text-sm">{resource.description}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Mobile Search */}
            <div className="px-3 py-2">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services, solutions..."
                  className="w-full bg-slate-800/50 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="absolute right-2 top-2.5 bg-cyan-500 hover:bg-cyan-600 text-white p-1 rounded-md transition-colors duration-200 disabled:opacity-50"
                >
                  {isSearching ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </form>
            </div>

            {/* Mobile Navigation */}
            {navigation.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => {
                        if (activeDropdown === item.name) {
                          setActiveDropdown(null);
                        } else {
                          setActiveDropdown(item.name);
                        }
                      }}
                      className="w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-4 space-y-1">
                        {item.name === 'Services' && services.slice(0, 6).map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-md"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                        {item.name === 'Solutions' && solutions.map((solution) => (
                          <Link
                            key={solution.name}
                            to={solution.href}
                            className="block px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-md"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {solution.name}
                          </Link>
                        ))}
                        {item.name === 'Resources' && resources.map((resource) => (
                          <Link
                            key={resource.name}
                            to={resource.href}
                            className="block px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-md"
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
                    className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="px-3 py-2">
              <Link
                to="/contact"
                className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
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
