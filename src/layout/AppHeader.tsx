import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Phone, Mail, MapPin, Globe, Brain, Shield, Cpu, Network, Smartphone, BarChart3, Heart, Zap, Leaf, Scale } from 'lucide-react';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6 mb-2 sm:mb-0">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-cyan-400" />
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white sticky top-0 z-50 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">Z</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-2xl font-bold neon-text">Zion Tech Group</h1>
                  <p className="text-xs text-slate-400">Innovation • Intelligence • Impact</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 font-medium hover:underline">
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-slate-300 hover:text-cyan-400 transition-colors duration-200 font-medium hover:underline">
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Services Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-700/50 transition-all duration-200"
                        >
                          <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <service.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200">
                              {service.name}
                            </div>
                            <div className="text-sm text-slate-400 mt-1">
                              {service.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/about" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 font-medium hover:underline">
                About
              </Link>
              
              <Link to="/contact" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 font-medium hover:underline">
                Contact
              </Link>

              <Link to="/innovative-services-2026" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 font-medium hover:underline">
                Innovative Services
              </Link>

              {/* Contact Us Button */}
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 w-64"
                />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors duration-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                <Link to="/" className="block py-3 px-4 text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50 rounded-lg transition-all duration-200">
                  Home
                </Link>
                
                <div className="py-3 px-4">
                  <div className="text-slate-400 text-sm font-medium mb-2">Services</div>
                  <div className="space-y-2 ml-4">
                    {services.slice(0, 6).map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="block py-2 text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      to="/innovative-services-2026"
                      className="block py-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>

                <Link to="/about" className="block py-3 px-4 text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50 rounded-lg transition-all duration-200">
                  About
                </Link>
                
                <Link to="/contact" className="block py-3 px-4 text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50 rounded-lg transition-all duration-200">
                  Contact
                </Link>
              </div>

              {/* Mobile Contact Buttons */}
              <div className="pt-4 border-t border-slate-700/50 space-y-3">
                <button className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Contact Us
                </button>
                <div className="text-center text-sm text-slate-400">
                  <div>+1 302 464 0950</div>
                  <div>kleber@ziontechgroup.com</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
