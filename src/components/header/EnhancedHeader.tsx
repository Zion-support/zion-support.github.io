import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  User, 
  Bell, 
  ChevronDown,
  Brain,
  Rocket,
  Cpu,
  Shield,
  Leaf,
  Satellite,
  Globe,
  Zap,
  Star,
  TrendingUp
} from 'lucide-react';

export function EnhancedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
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
      window.location.href = `/all-services-2027?search=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { 
      name: 'Services', 
      href: '#', 
      current: location.pathname.includes('/services') || location.pathname.includes('/pricing'),
      children: [
        { name: 'All Services 2027', href: '/all-services-2027', icon: <Globe className="h-4 w-4" /> },
        { name: 'Innovative Services', href: '/ultimate-innovative-services-2027', icon: <Star className="h-4 w-4" /> },
        { name: 'Pricing', href: '/ultimate-pricing-2027', icon: <TrendingUp className="h-4 w-4" /> },
        { name: 'AI & Automation', href: '/all-services-2027?category=AI%20%26%20Automation', icon: <Brain className="h-4 w-4" /> },
        { name: 'Emerging Tech', href: '/all-services-2027?category=Emerging%20Tech', icon: <Rocket className="h-4 w-4" /> },
        { name: 'IT Services', href: '/all-services-2027?category=IT%20Services', icon: <Cpu className="h-4 w-4" /> },
        { name: 'Security & Compliance', href: '/all-services-2027?category=Security%20%26%20Compliance', icon: <Shield className="h-4 w-4" /> },
        { name: 'Green Tech', href: '/all-services-2027?category=Green%20Tech', icon: <Leaf className="h-4 w-4" /> },
        { name: 'Space Technology', href: '/all-services-2027?category=Space%20Technology', icon: <Satellite className="h-4 w-4" /> }
      ]
    },
    { name: 'About', href: '/about', current: location.pathname === '/about' },
    { name: 'Blog', href: '/blog', current: location.pathname === '/blog' },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' }
  ];

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-zion-slate-dark/95 backdrop-blur-md border-b border-zion-purple/20 shadow-2xl shadow-zion-purple/20' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-zion-slate-light">Innovation 2027</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.children ? (
                    <div className="relative">
                      <button className="flex items-center space-x-1 text-white hover:text-zion-cyan transition-colors duration-300 py-2">
                        <span className={item.current ? 'text-zion-cyan' : ''}>{item.name}</span>
                        <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark/95 backdrop-blur-md border border-zion-purple/20 rounded-xl shadow-2xl shadow-zion-purple/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                        <div className="p-4">
                          <div className="grid grid-cols-1 gap-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                to={child.href}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-purple/20 transition-colors duration-300 group/item"
                              >
                                <div className="text-zion-cyan group-hover/item:text-zion-cyan-light transition-colors duration-300">
                                  {child.icon}
                                </div>
                                <span className="text-white group-hover/item:text-zion-cyan-light transition-colors duration-300">
                                  {child.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`text-white hover:text-zion-cyan transition-colors duration-300 py-2 ${
                        item.current ? 'text-zion-cyan' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Search and Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search Bar */}
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-zion-blue-light/20 border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </form>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3">
                <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  <Bell className="h-5 w-5" />
                </button>
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-lg font-medium hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-zion-cyan transition-colors duration-300"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-zion-slate-dark/95 backdrop-blur-md border-b border-zion-purple/20"
          >
            <div className="container mx-auto px-4 py-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  />
                </div>
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <div className="space-y-2">
                        <div className="text-zion-cyan font-medium text-sm uppercase tracking-wider">
                          {item.name}
                        </div>
                        <div className="pl-4 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-purple/20 transition-colors duration-300 text-white"
                            >
                              <div className="text-zion-cyan">
                                {child.icon}
                              </div>
                              <span>{child.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block p-3 rounded-lg transition-colors duration-300 ${
                          item.current 
                            ? 'bg-zion-cyan/20 text-zion-cyan' 
                            : 'text-white hover:bg-zion-purple/20'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="mt-8 pt-6 border-t border-zion-purple/20">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-center py-3 px-6 rounded-lg font-medium hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}