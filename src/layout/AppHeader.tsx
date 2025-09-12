import { ArrowRight, Atom, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, DollarSign, FileText, Globe, HeartHandshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, PenTool, Phone, Rocket, Scale, Search, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap, MessageSquare, BarChart3, Smartphone, Database, Network, Clock, Key, Globe2, ShieldCheck, Car, Home, Factory, City, CheckCircle, ArrowUpRight, Play, MailIcon, Gauge, GitFork, Award, Truck, Server, Eye } from 'lucide-react';
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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setSolutionsDropdownOpen(false);
    setResourcesDropdownOpen(false);
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      try {
        // Simulate search delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      } finally {
        setIsSearching(false);
      }
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    if (dropdown === 'services') {
      setServicesDropdownOpen(!servicesDropdownOpen);
      setSolutionsDropdownOpen(false);
      setResourcesDropdownOpen(false);
    } else if (dropdown === 'solutions') {
      setSolutionsDropdownOpen(!solutionsDropdownOpen);
      setServicesDropdownOpen(false);
      setResourcesDropdownOpen(false);
    } else if (dropdown === 'resources') {
      setResourcesDropdownOpen(!resourcesDropdownOpen);
      setServicesDropdownOpen(false);
      setSolutionsDropdownOpen(false);
    }
  };

  const closeAllDropdowns = () => {
    setServicesDropdownOpen(false);
    setSolutionsDropdownOpen(false);
    setResourcesDropdownOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-zion-slate-dark/95 backdrop-blur-md shadow-lg border-b border-zion-slate-light/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-cyan rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-cyan rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                  Zion Tech Group
                </div>
                <div className="text-xs text-zion-slate-light group-hover:text-zion-cyan/70 transition-colors">
                  Revolutionary AI Solutions
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors py-2 px-3 rounded-lg hover:bg-zion-slate-light/10"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-slate-light/20 rounded-xl shadow-2xl backdrop-blur-sm"
                >
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <h4 className="text-zion-cyan font-semibold text-sm uppercase tracking-wide">AI Solutions</h4>
                        <div className="space-y-2">
                          <Link to="/services/ai-business-intelligence" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Business Intelligence</Link>
                          <Link to="/services/ai-content-creation" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Content Creation</Link>
                          <Link to="/services/ai-cybersecurity" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Cybersecurity</Link>
                          <Link to="/services/ai-healthcare-platform" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Healthcare Platform</Link>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-zion-cyan font-semibold text-sm uppercase tracking-wide">Emerging Tech</h4>
                        <div className="space-y-2">
                          <Link to="/services/quantum-computing" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Quantum Computing</Link>
                          <Link to="/services/iot-edge-computing" className="block text-zion-slate-light hover:text-white transition-colors text-sm">IoT & Edge Computing</Link>
                          <Link to="/services/blockchain-solutions" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Blockchain</Link>
                          <Link to="/services/ai-supply-chain-optimization" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Supply Chain AI</Link>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-zion-slate-light/20">
                      <Link to="/services" className="flex items-center justify-center space-x-2 text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium">
                        <span>View All Services</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('solutions')}
                onMouseEnter={() => setSolutionsDropdownOpen(true)}
                className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors py-2 px-3 rounded-lg hover:bg-zion-slate-light/10"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${solutionsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {solutionsDropdownOpen && (
                <div
                  onMouseLeave={() => setSolutionsDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-slate-light/20 rounded-xl shadow-2xl backdrop-blur-sm"
                >
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <h4 className="text-zion-cyan font-semibold text-sm uppercase tracking-wide">Industry</h4>
                        <div className="space-y-2">
                          <Link to="/solutions/healthcare" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Healthcare</Link>
                          <Link to="/solutions/finance" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Finance</Link>
                          <Link to="/solutions/manufacturing" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Manufacturing</Link>
                          <Link to="/solutions/retail" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Retail</Link>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-zion-cyan font-semibold text-sm uppercase tracking-wide">Technology</h4>
                        <div className="space-y-2">
                          <Link to="/solutions/cloud-migration" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Cloud Migration</Link>
                          <Link to="/solutions/digital-transformation" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Digital Transformation</Link>
                          <Link to="/solutions/data-analytics" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Data Analytics</Link>
                          <Link to="/solutions/cybersecurity" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Cybersecurity</Link>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-zion-slate-light/20">
                      <Link to="/solutions" className="flex items-center justify-center space-x-2 text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium">
                        <span>View All Solutions</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('resources')}
                onMouseEnter={() => setResourcesDropdownOpen(true)}
                className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors py-2 px-3 rounded-lg hover:bg-zion-slate-light/10"
              >
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${resourcesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {resourcesDropdownOpen && (
                <div
                  onMouseLeave={() => setResourcesDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-slate-light/20 rounded-xl shadow-2xl backdrop-blur-sm"
                >
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <h4 className="text-zion-cyan font-semibold text-sm uppercase tracking-wide">Learn</h4>
                        <div className="space-y-2">
                          <Link to="/blog" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Blog</Link>
                          <Link to="/white-papers" className="block text-zion-slate-light hover:text-white transition-colors text-sm">White Papers</Link>
                          <Link to="/case-studies" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Case Studies</Link>
                          <Link to="/documentation" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Documentation</Link>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-zion-cyan font-semibold text-sm uppercase tracking-wide">Connect</h4>
                        <div className="space-y-2">
                          <Link to="/events" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Events</Link>
                          <Link to="/webinars" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Webinars</Link>
                          <Link to="/community" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Community</Link>
                          <Link to="/support" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Support</Link>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-zion-slate-light/20">
                      <Link to="/resources" className="flex items-center justify-center space-x-2 text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium">
                        <span>View All Resources</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other Navigation Links */}
            <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors py-2 px-3 rounded-lg hover:bg-zion-slate-light/10">
              About
            </Link>
            <Link to="/pricing" className="text-zion-slate-light hover:text-zion-cyan transition-colors py-2 px-3 rounded-lg hover:bg-zion-slate-light/10">
              Pricing
            </Link>
            <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors py-2 px-3 rounded-lg hover:bg-zion-slate-light/10">
              Contact
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                disabled={isSearching}
                className="ml-2 px-4 py-2 bg-zion-cyan hover:bg-zion-cyan-light disabled:bg-zion-slate-light/30 text-zion-slate-dark font-medium rounded-lg transition-colors disabled:cursor-not-allowed"
              >
                {isSearching ? 'Searching...' : 'Search'}
              </button>
            </form>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* CTA Button */}
            <Link
              to="/request-quote"
              className="hidden md:inline-flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zion-slate-dark border-t border-zion-slate-light/20">
          <div className="px-4 py-6 space-y-6">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                disabled={isSearching}
                className="w-full px-4 py-3 bg-zion-cyan hover:bg-zion-cyan-light disabled:bg-zion-slate-light/30 text-zion-slate-dark font-medium rounded-lg transition-colors disabled:cursor-not-allowed"
              >
                {isSearching ? 'Searching...' : 'Search'}
              </button>
            </form>

            {/* Mobile Navigation */}
            <nav className="space-y-4">
              <div>
                <button
                  onClick={() => toggleDropdown('services')}
                  className="flex items-center justify-between w-full text-left text-zion-slate-light hover:text-zion-cyan transition-colors py-3 px-4 rounded-lg hover:bg-zion-slate-light/10"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link to="/services/ai-business-intelligence" className="block text-zion-slate-light hover:text-white transition-colors py-2">AI Business Intelligence</Link>
                    <Link to="/services/ai-content-creation" className="block text-zion-slate-light hover:text-white transition-colors py-2">AI Content Creation</Link>
                    <Link to="/services/ai-cybersecurity" className="block text-zion-slate-light hover:text-white transition-colors py-2">AI Cybersecurity</Link>
                    <Link to="/services/quantum-computing" className="block text-zion-slate-light hover:text-white transition-colors py-2">Quantum Computing</Link>
                    <Link to="/services" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors py-2 font-medium">View All Services</Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleDropdown('solutions')}
                  className="flex items-center justify-between w-full text-left text-zion-slate-light hover:text-zion-cyan transition-colors py-3 px-4 rounded-lg hover:bg-zion-slate-light/10"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${solutionsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {solutionsDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link to="/solutions/healthcare" className="block text-zion-slate-light hover:text-white transition-colors py-2">Healthcare</Link>
                    <Link to="/solutions/finance" className="block text-zion-slate-light hover:text-white transition-colors py-2">Finance</Link>
                    <Link to="/solutions/manufacturing" className="block text-zion-slate-light hover:text-white transition-colors py-2">Manufacturing</Link>
                    <Link to="/solutions" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors py-2 font-medium">View All Solutions</Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleDropdown('resources')}
                  className="flex items-center justify-between w-full text-left text-zion-slate-light hover:text-zion-cyan transition-colors py-3 px-4 rounded-lg hover:bg-zion-slate-light/10"
                >
                  <span>Resources</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${resourcesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {resourcesDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link to="/blog" className="block text-zion-slate-light hover:text-white transition-colors py-2">Blog</Link>
                    <Link to="/case-studies" className="block text-zion-slate-light hover:text-white transition-colors py-2">Case Studies</Link>
                    <Link to="/white-papers" className="block text-zion-slate-light hover:text-white transition-colors py-2">White Papers</Link>
                    <Link to="/resources" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors py-2 font-medium">View All Resources</Link>
                  </div>
                )}
              </div>

              <Link to="/about" className="block text-zion-slate-light hover:text-zion-cyan transition-colors py-3 px-4 rounded-lg hover:bg-zion-slate-light/10">
                About
              </Link>
              <Link to="/pricing" className="block text-zion-slate-light hover:text-zion-cyan transition-colors py-3 px-4 rounded-lg hover:bg-zion-slate-light/10">
                Pricing
              </Link>
              <Link to="/contact" className="block text-zion-slate-light hover:text-zion-cyan transition-colors py-3 px-4 rounded-lg hover:bg-zion-slate-light/10">
                Contact
              </Link>
            </nav>

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-zion-slate-light/20">
              <Link
                to="/request-quote"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white font-medium rounded-lg transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}