import { ArrowRight, Atom, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, DollarSign, FileText, Globe, HeartHandshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, PenTool, Phone, Rocket, Scale, Search, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap, BarChart3 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';

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

  // Enhanced services organization
  const services = [
    {
      name: 'AI & Business Intelligence',
      href: '/services#ai-business-intelligence',
      icon: Brain,
      description: 'AI-powered analytics and insights',
      featured: true,
      color: 'from-purple-500 to-pink-500',
      subServices: [
        { name: 'AI Business Intelligence Platform', href: '/services/ai-business-intelligence', price: '$2,999' },
        { name: 'AI Content Creation Studio', href: '/services/ai-content-creation', price: '$1,999' },
        { name: 'AI Customer Support Automation', href: '/services/ai-customer-support-automation', price: '$2,499' }
      ]
    },
    {
      name: 'AI & Healthcare',
      href: '/services#ai-healthcare',
      icon: Heart,
      description: 'Medical AI & diagnostics',
      featured: true,
      color: 'from-red-500 to-pink-500',
      subServices: [
        { name: 'AI Healthcare Analytics Platform', href: '/services/ai-healthcare-analytics', price: '$4,999' },
        { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform', price: '$3,999' }
      ]
    },
    {
      name: 'AI & Legal Tech',
      href: '/services#ai-legal',
      icon: Scale,
      description: 'Legal document analysis & automation',
      featured: true,
      color: 'from-blue-500 to-indigo-500',
      subServices: [
        { name: 'AI Legal Document Analysis', href: '/services/ai-legal-document-analysis', price: '$3,499' }
      ]
    },
    {
      name: 'AI & FinTech',
      href: '/services#ai-fintech',
      icon: DollarSign,
      description: 'Financial AI & trading',
      featured: true,
      color: 'from-emerald-500 to-green-500',
      subServices: [
        { name: 'AI Financial Trading Platform', href: '/services/ai-financial-trading', price: '$5,999' }
      ]
    },
    {
      name: 'AI & Operations',
      href: '/services#ai-operations',
      icon: Target,
      description: 'Supply chain & operations AI',
      featured: true,
      color: 'from-gray-500 to-slate-500',
      subServices: [
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', price: '$3,999' }
      ]
    },
    {
      name: 'Quantum Computing',
      href: '/services#quantum',
      icon: Atom,
      description: 'Quantum AI & optimization',
      featured: true,
      color: 'from-purple-500 to-violet-500',
      subServices: [
        { name: 'Quantum Computing Solutions', href: '/services/quantum-computing', price: '$7,999' }
      ]
    },
    {
      name: 'IoT & Edge Computing',
      href: '/services#iot',
      icon: Cpu,
      description: 'IoT & real-time processing',
      featured: true,
      color: 'from-teal-500 to-cyan-500',
      subServices: [
        { name: 'IoT Edge Computing Platform', href: '/services/iot-edge-computing', price: '$3,499' }
      ]
    },
    {
      name: 'Blockchain & Web3',
      href: '/services#blockchain',
      icon: Globe,
      description: 'Decentralized solutions',
      featured: true,
      color: 'from-yellow-500 to-orange-500',
      subServices: [
        { name: 'Blockchain & Web3 Solutions', href: '/services/blockchain-web3', price: '$4,499' }
      ]
    },
    {
      name: 'Cybersecurity',
      href: '/services#cybersecurity',
      icon: Shield,
      description: 'AI-powered security',
      featured: true,
      color: 'from-red-500 to-orange-500',
      subServices: [
        { name: 'Cybersecurity & Zero Trust Platform', href: '/services/cybersecurity', price: '$3,999' }
      ]
    },
    {
      name: 'Digital Twin',
      href: '/services#digital-twin',
      icon: Cloud,
      description: 'Virtual asset monitoring',
      featured: true,
      color: 'from-blue-500 to-indigo-500',
      subServices: [
        { name: 'Digital Twin Platform', href: '/services/digital-twin', price: '$5,499' }
      ]
    },
    {
      name: 'Space Technology',
      href: '/services#space-tech',
      icon: Rocket,
      description: 'Satellite & space solutions',
      featured: true,
      color: 'from-indigo-500 to-purple-500',
      subServices: [
        { name: 'Space Technology Solutions', href: '/services/space-tech', price: '$8,999' }
      ]
    },
    {
      name: 'Sustainable Technology',
      href: '/services#sustainable',
      icon: Leaf,
      description: 'Green tech & sustainability',
      featured: true,
      color: 'from-green-500 to-teal-500',
      subServices: [
        { name: 'Sustainable Technology Platform', href: '/services/sustainable-technology', price: '$2,999' }
      ]
    }
  ];

  const solutions = [
    {
      name: 'Micro SAAS Solutions',
      href: '/innovative-micro-saas-services-2025',
      icon: Rocket,
      description: 'Complete micro SAAS platforms',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'AI-Powered Solutions',
      href: '/services#ai-solutions',
      icon: Brain,
      description: 'Intelligent automation & insights',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'Cloud & DevOps',
      href: '/services/cloud-devops',
      icon: Cloud,
      description: 'Scalable infrastructure solutions',
      featured: true,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Data Analytics',
      href: '/services/data-analytics',
      icon: BarChart3,
      description: 'Advanced data insights',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'IT Infrastructure',
      href: '/services/it-infrastructure',
      icon: Building2,
      description: 'Enterprise infrastructure',
      featured: true,
      color: 'from-slate-500 to-gray-500'
    }
  ];

  const resources = [
    {
      name: 'Revolutionary Services 2030',
      href: '/revolutionary-services-2030',
      icon: Rocket,
      description: 'Future-ready solutions',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Innovative Services 2025',
      href: '/innovative-services-2025',
      icon: Star,
      description: 'Latest innovations',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'Pricing Guides',
      href: '/pricing',
      icon: DollarSign,
      description: 'Transparent pricing',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Case Studies',
      href: '/case-studies',
      icon: FileText,
      description: 'Success stories',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'White Papers',
      href: '/white-papers',
      icon: BookOpen,
      description: 'Industry insights',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Webinars',
      href: '/webinars',
      icon: MessageCircle,
      description: 'Expert knowledge',
      featured: true,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Rocket className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl lg:text-2xl font-bold text-white">Zion Tech Group</span>
                <div className="text-xs lg:text-sm text-purple-300">Innovation 2030</div>
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
                        if (item.name === 'Services') setServicesDropdownOpen(!servicesDropdownOpen);
                        if (item.name === 'Solutions') setSolutionsDropdownOpen(!solutionsDropdownOpen);
                        if (item.name === 'Resources') setResourcesDropdownOpen(!resourcesDropdownOpen);
                      }}
                      className="flex items-center space-x-1 text-white hover:text-purple-300 transition-colors py-2"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {/* Services Dropdown */}
                    {item.name === 'Services' && servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-screen max-w-6xl transform -translate-x-1/4">
                        <div className="bg-slate-900/95 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
                          <div className="grid grid-cols-3 gap-6">
                            {services.map((service) => (
                              <div key={service.name} className="group">
                                <Link
                                  to={service.href}
                                  className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
                                  onClick={() => setServicesDropdownOpen(false)}
                                >
                                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0`}>
                                    <service.icon className="w-5 h-5 text-white" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                                      {service.name}
                                    </h3>
                                    <p className="text-xs text-gray-400 mt-1">{service.description}</p>
                                    {service.subServices && (
                                      <div className="mt-2 space-y-1">
                                        {service.subServices.slice(0, 2).map((sub) => (
                                          <div key={sub.name} className="flex items-center justify-between text-xs">
                                            <span className="text-gray-300">{sub.name}</span>
                                            <span className="text-purple-400 font-medium">{sub.price}</span>
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                </Link>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6 pt-6 border-t border-white/10">
                            <Link
                              to="/innovative-micro-saas-services-2025"
                              className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                              onClick={() => setServicesDropdownOpen(false)}
                            >
                              <span>View All Services</span>
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Solutions Dropdown */}
                    {item.name === 'Solutions' && solutionsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 transform -translate-x-1/2">
                        <div className="bg-slate-900/95 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
                          <div className="space-y-4">
                            {solutions.map((solution) => (
                              <Link
                                key={solution.name}
                                to={solution.href}
                                className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
                                onClick={() => setSolutionsDropdownOpen(false)}
                              >
                                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center flex-shrink-0`}>
                                  <solution.icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-sm font-semibold text-white">{solution.name}</h3>
                                  <p className="text-xs text-gray-400 mt-1">{solution.description}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Resources Dropdown */}
                    {item.name === 'Resources' && resourcesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 transform -translate-x-1/2">
                        <div className="bg-slate-900/95 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
                          <div className="space-y-4">
                            {resources.map((resource) => (
                              <Link
                                key={resource.name}
                                to={resource.href}
                                className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
                                onClick={() => setResourcesDropdownOpen(false)}
                              >
                                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${resource.color} flex items-center justify-center flex-shrink-0`}>
                                  <resource.icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-sm font-semibold text-white">{resource.name}</h3>
                                  <p className="text-xs text-gray-400 mt-1">{resource.description}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-white hover:text-purple-300 transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side - Search, Contact, Mobile menu */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:block relative">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
              </form>
            </div>

            {/* Contact Button */}
            <div className="hidden md:flex items-center space-x-2">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all duration-300 text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </form>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  
                  {/* Mobile Services Submenu */}
                  {item.name === 'Services' && (
                    <div className="ml-4 mt-2 space-y-2">
                      {services.slice(0, 6).map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                      <Link
                        to="/innovative-micro-saas-services-2025"
                        className="block px-4 py-2 text-purple-400 hover:text-purple-300 hover:bg-white/5 rounded-lg transition-colors text-sm font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        View All Services →
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Contact */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-center justify-center font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>Call +1 302 464 0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center space-x-3 px-4 py-3 bg-white/10 text-white rounded-lg text-center justify-center font-medium"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close dropdowns */}
      {(servicesDropdownOpen || solutionsDropdownOpen || resourcesDropdownOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setServicesDropdownOpen(false);
            setSolutionsDropdownOpen(false);
            setResourcesDropdownOpen(false);
          }}
        />
      )}
    </header>
  );
}
