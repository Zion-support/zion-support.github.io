import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, User, Bell, ChevronDown, 
  Brain, Cpu, Database, Network, Shield, Zap, 
  Rocket, Atom, Globe, Cloud, Lock, Eye, Building, Store, Factory, Users, Briefcase, Handshake, FileText, BookOpen, BarChart3, Video, Phone, HelpCircle, MessageSquare, DollarSign
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  // Navigation items with categories
  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      children: [
        { name: 'AI Solutions', href: '/services/ai', icon: Brain, description: 'Advanced AI & Machine Learning' },
        { name: 'Quantum Computing', href: '/services/quantum', icon: Atom, description: 'Quantum AI & Neural Networks' },
        { name: 'Blockchain & DeFi', href: '/services/blockchain', icon: Shield, description: 'Enterprise Blockchain Solutions' },
        { name: 'IoT & Edge Computing', href: '/services/iot', icon: Network, description: 'Smart IoT Platforms' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Lock, description: 'Advanced Security Solutions' },
        { name: 'Cloud & DevOps', href: '/services/cloud', icon: Cloud, description: 'Cloud Infrastructure & Automation' },
        { name: 'Robotics & Automation', href: '/services/robotics', icon: Cpu, description: 'Industrial Automation' },
        { name: 'AR/VR & Digital Twin', href: '/services/ar-vr', icon: Eye, description: 'Immersive Technologies' },
        { name: 'Space Technology', href: '/services/space', icon: Rocket, description: 'Satellite & Space Operations' },
        { name: 'Climate Intelligence', href: '/services/climate', icon: Globe, description: 'AI-Powered Climate Solutions' }
      ]
    },
    { name: 'Innovations', href: '/innovations', children: [
      { name: '2027 Services', href: '/innovative-services-showcase-2027', icon: Zap, description: 'Cutting-edge Innovations' },
      { name: 'Emerging Tech', href: '/emerging-tech', icon: Rocket, description: 'Future Technologies' },
      { name: 'Research & Development', href: '/research', icon: Brain, description: 'AI Research & Innovation' }
    ]},
    { name: 'Solutions', href: '/solutions', children: [
      { name: 'Enterprise Solutions', href: '/enterprise', icon: Building, description: 'Large-scale Deployments' },
      { name: 'SMB Solutions', href: '/smb', icon: Store, description: 'Small Business Solutions' },
      { name: 'Industry Solutions', href: '/industries', icon: Factory, description: 'Industry-specific Solutions' }
    ]},
    { name: 'Company', href: '/about', children: [
      { name: 'About Us', href: '/about', icon: Users, description: 'Our Story & Mission' },
      { name: 'Team', href: '/team', icon: Users, description: 'Expert Team' },
      { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join Our Team' },
      { name: 'Partners', href: '/partners', icon: Handshake, description: 'Strategic Partnerships' }
    ]},
    { name: 'Resources', href: '/resources', children: [
      { name: 'Blog', href: '/blog', icon: FileText, description: 'Latest Insights' },
      { name: 'Documentation', href: '/docs', icon: BookOpen, description: 'Technical Docs' },
      { name: 'Case Studies', href: '/case-studies', icon: BarChart3, description: 'Success Stories' },
      { name: 'Webinars', href: '/webinars', icon: Video, description: 'Educational Content' }
    ]},
    { name: 'Support', href: '/support', children: [
      { name: 'Contact', href: '/contact', icon: Phone, description: 'Get in Touch' },
      { name: 'Help Center', href: '/help', icon: HelpCircle, description: 'Support Resources' },
      { name: 'FAQ', href: '/faq', icon: MessageSquare, description: 'Common Questions' },
      { name: 'Request Quote', href: '/request-quote', icon: DollarSign, description: 'Get Pricing' }
    ]}
  ];

  // Handle scroll effect
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
      // Navigate to search results
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-zion-slate-dark/95 backdrop-blur-md border-b border-zion-cyan/20 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container-responsive">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-6 h-6 text-black" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-zion-slate-light">Innovation • Technology • Future</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1 ${
                      isActive(item.href)
                        ? 'text-zion-cyan bg-zion-cyan/10'
                        : 'text-zion-slate-light hover:text-white hover:bg-zion-slate/20'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.children && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.children && (
                    <div className="absolute top-full left-0 mt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                      <div className="bg-zion-slate-dark/95 backdrop-blur-md rounded-xl border border-zion-cyan/20 shadow-2xl p-4">
                        <div className="grid grid-cols-1 gap-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-zion-slate/20 transition-colors duration-200 group"
                            >
                              <div className="flex-shrink-0 w-8 h-8 bg-zion-cyan/20 rounded-lg flex items-center justify-center group-hover:bg-zion-cyan/30 transition-colors">
                                <child.icon className="w-4 h-4 text-zion-cyan" />
                              </div>
                              <div>
                                <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">
                                  {child.name}
                                </div>
                                <div className="text-sm text-zion-slate-light">
                                  {child.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-6">
              <form onSubmit={handleSearch} className="relative w-full">
                <input
                  type="text"
                  placeholder="Search services, technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zion-slate/20 border border-zion-cyan/20 rounded-lg px-4 py-2 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-200"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-zion-cyan transition-colors"
                >
                  <Search className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="relative p-2 text-zion-slate-light hover:text-white hover:bg-zion-slate/20 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-zion-cyan rounded-full"></span>
              </button>

              {/* User Menu */}
              {user ? (
                <div className="relative group">
                  <button className="flex items-center space-x-2 p-2 text-zion-slate-light hover:text-white hover:bg-zion-slate/20 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-black" />
                    </div>
                    <span className="hidden sm:block text-sm font-medium">{user.name}</span>
                  </button>
                  
                  {/* User Dropdown */}
                  <div className="absolute top-full right-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                    <div className="bg-zion-slate-dark/95 backdrop-blur-md rounded-xl border border-zion-cyan/20 shadow-2xl p-2">
                      <Link to="/profile" className="block px-3 py-2 text-sm text-white hover:bg-zion-slate/20 rounded-lg transition-colors">
                        Profile
                      </Link>
                      <Link to="/dashboard" className="block px-3 py-2 text-sm text-white hover:bg-zion-slate/20 rounded-lg transition-colors">
                        Dashboard
                      </Link>
                      <button
                        onClick={logout}
                        className="block w-full text-left px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Link
                    to="/login"
                    className="px-4 py-2 text-zion-cyan hover:text-white hover:bg-zion-cyan/10 rounded-lg transition-colors duration-200"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/contact"
                    className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-black font-medium rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started
                  </Link>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-zion-slate-light hover:text-white hover:bg-zion-slate/20 rounded-lg transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-zion-slate-dark/95 backdrop-blur-md border-t border-zion-cyan/20"
            >
              <div className="container-responsive py-4">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services, technologies..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-zion-slate/20 border border-zion-cyan/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    />
                  </div>
                </form>

                {/* Mobile Navigation */}
                <nav className="space-y-2">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      <Link
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          isActive(item.href)
                            ? 'text-zion-cyan bg-zion-cyan/10'
                            : 'text-zion-slate-light hover:text-white hover:bg-zion-slate/20'
                        }`}
                      >
                        {item.name}
                      </Link>
                      
                      {/* Mobile Submenu */}
                      {item.children && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block px-3 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-zion-slate/20 rounded-lg transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="mt-6 pt-4 border-t border-zion-cyan/20">
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-black font-medium rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300"
                  >
                    Contact Our Team
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
