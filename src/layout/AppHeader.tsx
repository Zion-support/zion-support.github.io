import { ArrowRight, Atom, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, DollarSign, FileText, Globe, HeartHandshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, PenTool, Phone, Rocket, Scale, Search, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap, BarChart3 } from 'lucide-react';
import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
        setSolutionsDropdownOpen(false);
        setResourcesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'Services', href: '/services', current: location.pathname.startsWith('/services'), hasDropdown: true },
    { name: 'Solutions', href: '/solutions', current: location.pathname.startsWith('/solutions'), hasDropdown: true },
    { name: 'Resources', href: '/resources', current: location.pathname.startsWith('/resources'), hasDropdown: true },
    { name: 'About', href: '/about', current: location.pathname === '/about' },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
  ];

  const services = [
    { 
      name: 'Innovative Micro SAAS 2025', 
      href: '/innovative-micro-saas-services-2025', 
      icon: Rocket, 
      description: 'Cutting-edge AI Services',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'AI Business Intelligence', 
      href: '/services/ai-business-intelligence', 
      icon: Brain, 
      description: 'Machine Learning & Data Science',
      featured: true,
      color: 'from-purple-500 to-cyan-500'
    },
    { 
      name: 'AI Healthcare Platform', 
      href: '/services/ai-healthcare-platform', 
      icon: Heart, 
      description: 'Medical AI & Diagnostics',
      featured: true,
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'AI Content Creation', 
      href: '/services/ai-content-creation', 
      icon: PenTool, 
      description: 'Content Generation & Optimization',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'AI Cybersecurity', 
      href: '/services/ai-cybersecurity', 
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
      href: '/services/iot-edge-computing', 
      icon: Cpu, 
      description: 'IoT & Real-time Processing',
      featured: true,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const solutions = [
    { 
      name: 'Digital Transformation', 
      href: '/solutions/digital-transformation', 
      icon: Rocket, 
      description: 'End-to-end digital transformation',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Cloud Migration', 
      href: '/solutions/cloud-migration', 
      icon: Cloud, 
      description: 'Seamless cloud migration',
      featured: true,
      color: 'from-green-500 to-blue-500'
    },
    { 
      name: 'Data Analytics', 
      href: '/solutions/data-analytics', 
      icon: BarChart3, 
      description: 'Advanced data insights',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const resources = [
    { 
      name: 'Blog & Insights', 
      href: '/blog', 
      icon: BookOpen, 
      description: 'Latest industry insights',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'Case Studies', 
      href: '/case-studies', 
      icon: FileText, 
      description: 'Success stories',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Documentation', 
      href: '/docs', 
      icon: Code, 
      description: 'Technical resources',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const DropdownMenu = ({ items, isOpen, onClose, title }: { 
    items: any[], 
    isOpen: boolean, 
    onClose: () => void, 
    title: string 
  }) => (
    <div className={`absolute top-full left-0 w-80 bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-2xl transition-all duration-300 z-50 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
        <div className="space-y-3">
          {items.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={onClose}
              className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
            >
              <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color} group-hover:scale-110 transition-transform duration-200`}>
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
                  {item.name}
                </p>
                <p className="text-xs text-gray-500 mt-1">{item.description}</p>
              </div>
              {item.featured && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Featured
                </span>
              )}
            </Link>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <Link
            to={title === 'Services' ? '/services' : title === 'Solutions' ? '/solutions' : '/resources'}
            onClick={onClose}
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-purple-600 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200"
          >
            View All {title}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className={`text-xl font-bold transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Zion Tech
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative" ref={dropdownRef}>
                {item.hasDropdown ? (
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
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      item.current
                        ? 'text-purple-600 bg-purple-50'
                        : scrolled
                        ? 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                        : 'text-white hover:text-purple-200 hover:bg-white/10'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      (item.name === 'Services' && servicesDropdownOpen) ||
                      (item.name === 'Solutions' && solutionsDropdownOpen) ||
                      (item.name === 'Resources' && resourcesDropdownOpen)
                        ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      item.current
                        ? 'text-purple-600 bg-purple-50'
                        : scrolled
                        ? 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                        : 'text-white hover:text-purple-200 hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdowns */}
                {item.name === 'Services' && (
                  <DropdownMenu
                    items={services}
                    isOpen={servicesDropdownOpen}
                    onClose={() => setServicesDropdownOpen(false)}
                    title="Services"
                  />
                )}
                {item.name === 'Solutions' && (
                  <DropdownMenu
                    items={solutions}
                    isOpen={solutionsDropdownOpen}
                    onClose={() => setSolutionsDropdownOpen(false)}
                    title="Solutions"
                  />
                )}
                {item.name === 'Resources' && (
                  <DropdownMenu
                    items={resources}
                    isOpen={resourcesDropdownOpen}
                    onClose={() => setResourcesDropdownOpen(false)}
                    title="Resources"
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-64 pl-10 pr-4 py-2 text-sm border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    scrolled 
                      ? 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500' 
                      : 'bg-white/10 border-white/20 text-white placeholder-white/60 backdrop-blur-sm'
                  }`}
                />
              </div>
            </form>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* CTA Button */}
            <Link
              to="/contact"
              className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                scrolled
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-200 ${
                scrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
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

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-300 ${
        mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200/50 px-4 py-6 space-y-4">
          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </form>

          {/* Mobile Navigation Links */}
          <nav className="space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                    item.current
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  {item.name}
                </Link>
                
                {/* Mobile Dropdown Items */}
                {item.hasDropdown && item.name === 'Services' && (
                  <div className="ml-4 mt-2 space-y-2">
                    {services.slice(0, 3).map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="pt-4 border-t border-gray-200">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
