import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Search, Phone, ChevronDown, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '../components/ThemeToggle';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const mainNavigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Services', href: '/services', current: false, hasDropdown: true },
    { name: 'Solutions', href: '/solutions', current: false, hasDropdown: true },
    { name: 'Pricing', href: '/pricing', current: false },
    { name: 'Company', href: '/about', current: false, hasDropdown: true },
    { name: 'Support', href: '/help', current: false, hasDropdown: true },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const servicesCategories = [
    {
      name: 'Core Services',
      services: [
        { name: 'Services Overview', href: '/services-overview', description: 'Complete service portfolio' },
        { name: 'AI Services', href: '/ai-services', description: 'AI-powered solutions' },
        { name: 'IT Services', href: '/it-services', description: 'Enterprise IT solutions' },
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'Infrastructure & Automation' }
      ]
    },
    {
      name: 'AI & Analytics',
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Machine Learning & Data Science' },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Business intelligence' },
        { name: 'Digital Twin', href: '/services/digital-twin', description: 'Simulation & Monitoring' }
      ]
    },
    {
      name: 'Specialized Solutions',
      services: [
        { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Security & Compliance' },
        { name: 'Micro SaaS', href: '/micro-saas', description: 'Scalable software solutions' },
        { name: 'Research & Development', href: '/research-development', description: 'Innovation & R&D' }
      ]
    }
  ];

  const companyCategories = [
    {
      name: 'About Us',
      items: [
        { name: 'About Us', href: '/about', description: 'Our story and mission' },
        { name: 'Team', href: '/team', description: 'Meet our experts' },
        { name: 'Careers', href: '/careers', description: 'Join our team' },
        { name: 'Partners', href: '/partners', description: 'Strategic partnerships' }
      ]
    },
    {
      name: 'Resources',
      items: [
        { name: 'Blog', href: '/blog', description: 'Latest insights and news' },
        { name: 'News', href: '/news', description: 'Company and industry news' },
        { name: 'Events', href: '/events', description: 'Upcoming events and webinars' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories' }
      ]
    }
  ];

  const supportCategories = [
    {
      name: 'Help & Support',
      items: [
        { name: 'Help Center', href: '/help', description: 'Find answers to questions' },
        { name: 'Support Portal', href: '/support', description: 'Technical assistance' },
        { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
        { name: 'Contact Support', href: '/contact', description: 'Get in touch' }
      ]
    },
    {
      name: 'Resources',
      items: [
        { name: 'Documentation', href: '/documentation', description: 'Technical guides' },
        { name: 'Training', href: '/training', description: 'Learning resources' },
        { name: 'Webinars', href: '/webinars', description: 'Educational sessions' },
        { name: 'Community', href: '/community', description: 'User community' }
      ]
    }
  ];

  return (
    <>
      <header 
        role="banner" 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10' 
            : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 group">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    Zion Tech Group
                  </h1>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
              {mainNavigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <button
                      onClick={() => toggleDropdown(item.name.toLowerCase())}
                      className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors py-2"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name.toLowerCase() ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-slate-300 hover:text-white transition-colors py-2"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="hidden md:block relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-48 xl:w-64 pl-10 pr-4 py-2 rounded-lg bg-slate-800/70 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400 text-sm"
                />
              </form>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Contact Info */}
              <div className="hidden lg:flex items-center gap-3 xl:gap-4 text-sm text-slate-300">
                <a href="tel:+13024640950" className="flex items-center space-x-1 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </a>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Services Dropdown */}
        <AnimatePresence>
          {activeDropdown === 'services' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20"
            >
              <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {servicesCategories.map((category) => (
                    <div key={category.name} className="space-y-4">
                      <h3 className="font-semibold text-white text-lg">{category.name}</h3>
                      <div className="space-y-2">
                        {category.services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                          >
                            <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                              {service.name}
                            </div>
                            <div className="text-sm text-slate-400">
                              {service.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Company Dropdown */}
        <AnimatePresence>
          {activeDropdown === 'company' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20"
            >
              <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {companyCategories.map((category) => (
                    <div key={category.name} className="space-y-4">
                      <h3 className="font-semibold text-white text-lg">{category.name}</h3>
                      <div className="space-y-2">
                        {category.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                          >
                            <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                              {item.name}
                            </div>
                            <div className="text-sm text-slate-400">
                              {item.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Support Dropdown */}
        <AnimatePresence>
          {activeDropdown === 'support' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20"
            >
              <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {supportCategories.map((category) => (
                    <div key={category.name} className="space-y-4">
                      <h3 className="font-semibold text-white text-lg">{category.name}</h3>
                      <div className="space-y-2">
                        {category.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                          >
                            <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                              {item.name}
                            </div>
                            <div className="text-sm text-slate-400">
                              {item.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20"
          >
            <div className="container mx-auto px-4 py-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-800/70 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
                />
              </form>

              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                {mainNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={closeMobileMenu}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      item.current
                        ? 'text-cyan-400 bg-cyan-400/10'
                        : 'text-slate-300 hover:text-cyan-400 hover:bg-cyan-400/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Contact */}
              <div className="mt-6 pt-6 border-t border-slate-700/50">
                <a 
                  href="tel:+13024640950" 
                  className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}