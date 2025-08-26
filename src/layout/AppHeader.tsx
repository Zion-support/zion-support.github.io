import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Phone, Mail, MapPin, Globe, Brain, Shield, Cpu, Network, Smartphone, BarChart3, Heart, Zap, Leaf, Scale } from 'lucide-react';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const services = [
    { 
      name: 'AI & Analytics', 
      href: '/innovative-services-2026', 
      description: 'Machine Learning & Business Intelligence',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Cybersecurity', 
      href: '/services/cybersecurity', 
      description: 'Security & Compliance Solutions',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    { 
      name: 'DevOps & Infrastructure', 
      href: '/services/devops', 
      description: 'Cloud & Automation',
      icon: Cpu,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Blockchain & Supply Chain', 
      href: '/services/blockchain', 
      description: 'Transparency & Traceability',
      icon: Network,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      name: 'IoT & Smart Cities', 
      href: '/services/iot', 
      description: 'Connected Infrastructure',
      icon: Smartphone,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'AI & Legal Tech', 
      href: '/services/legal-tech', 
      description: 'Document Analysis & Compliance',
      icon: Scale,
      color: 'from-teal-500 to-cyan-500'
    },
    { 
      name: 'AI & FinTech', 
      href: '/services/fintech', 
      description: 'Financial Technology Solutions',
      icon: BarChart3,
      color: 'from-emerald-500 to-green-500'
    },
    { 
      name: 'AI & Healthcare', 
      href: '/services/healthcare', 
      description: 'Medical Diagnostics & Analytics',
      icon: Heart,
      color: 'from-rose-500 to-pink-500'
    },
    { 
      name: 'Edge AI Computing', 
      href: '/services/edge-ai', 
      description: 'Distributed AI Processing',
      icon: Zap,
      color: 'from-amber-500 to-yellow-500'
    },
    { 
      name: 'Clean Energy & Sustainability', 
      href: '/services/clean-energy', 
      description: 'Renewable Energy Management',
      icon: Leaf,
      color: 'from-lime-500 to-green-500'
    },
    { 
      name: 'Quantum Computing', 
      href: '/services/quantum', 
      description: 'Next-Gen Computing Power',
      icon: Cpu,
      color: 'from-violet-500 to-purple-500'
    },
    { 
      name: 'Tech Talent', 
      href: '/talent', 
      description: 'Expert Developers & Engineers',
      icon: User,
      color: 'from-blue-500 to-cyan-500'
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-700/20 bg-slate-900/95 backdrop-blur-xl">
        {/* Top Contact Bar */}
        <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border-b border-slate-700/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between py-2 text-sm">
              <div className="flex items-center space-x-6 text-cyan-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://ziontechgroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  <span>Visit Website</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container flex h-16 items-center px-4 sm:px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent neon-text">
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
                className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
                className="flex items-center text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              >
                Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              {servicesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-[800px] bg-slate-800/95 border border-slate-700/50 rounded-2xl shadow-2xl backdrop-blur-xl"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="flex items-center p-4 rounded-xl hover:bg-slate-700/50 transition-all duration-300 group hover:scale-105"
                        >
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                            <service.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                              {service.name}
                            </div>
                            <div className="text-sm text-gray-400">
                              {service.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-slate-700/50">
                      <Link
                        to="/innovative-services-2026"
                        className="block text-center text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors py-3 px-6 bg-slate-700/30 rounded-xl hover:bg-slate-700/50"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services, features, or industries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              />
            </form>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="p-2 text-slate-300 hover:text-cyan-400 transition-colors duration-200 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Menu */}
            <button className="p-2 text-slate-300 hover:text-cyan-400 transition-colors duration-200">
              <User className="w-5 h-5" />
            </button>

            {/* Contact CTA */}
            <a
              href="tel:+13024640950"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 neon-glow"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-cyan-400 transition-colors duration-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800/95 border-t border-slate-700/50 backdrop-blur-xl">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </form>

              {/* Mobile Navigation */}
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50 rounded-lg transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Services */}
              <div className="border-t border-slate-700/50 pt-4">
                <div className="text-sm font-semibold text-slate-400 mb-3 px-4">Services</div>
                <div className="grid grid-cols-1 gap-2">
                  {services.slice(0, 6).map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mr-3`}>
                        <service.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </div>
                        <div className="text-xs text-gray-400">
                          {service.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                  <Link
                    to="/innovative-services-2026"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors py-3"
                  >
                    View All Services →
                  </Link>
                </div>
              </div>

              {/* Mobile Contact */}
              <div className="border-t border-slate-700/50 pt-4 space-y-3">
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-medium"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-slate-700/50 text-white rounded-xl font-medium border border-slate-600/50"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
