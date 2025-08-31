import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
import { MainNavigation } from './header/MainNavigation';
import { 
  Menu, 
  X, 
  Zap, 
  Phone, 
  Mail, 
=======
import {
  Menu,
  X,
  ChevronDown,
  Brain,
  Shield,
  Cpu,
  Heart,
  Rocket,
  Sparkles,
  BarChart3,
  Network,
  Globe,
  Users,
  FileText,
  Phone,
  Mail,
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  MapPin,
  ChevronDown,
  Globe,
  Search,
  Bell
} from 'lucide-react';
<<<<<<< HEAD
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
=======
interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
<<<<<<< HEAD

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  const navigation = [
    {
      name: 'Services',
      href: '/services',
      dropdown: true,
      items: [
        { name: 'AI & Machine Learning', href: '/services#ai-ml' },
        { name: 'Quantum Computing', href: '/services#quantum' },
        { name: 'AI Cybersecurity', href: '/services#cybersecurity' },
        { name: 'AI Healthcare', href: '/services#healthcare' },
        { name: 'AI Financial Trading', href: '/services#financial' },
        { name: 'AI Supply Chain', href: '/services#supply-chain' },
        { name: 'AI Marketing & SEO', href: '/services#marketing' },
        { name: 'AI Project Management', href: '/services#project-management' },
        { name: 'AI DevOps & Infrastructure', href: '/services#devops' },
        { name: 'AI IoT & Edge Computing', href: '/services#iot-edge' },
        { name: 'Space Technology', href: '/services#space-tech' },
        { name: 'Micro SAAS Solutions', href: '/services#micro-saas' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
        { name: 'Data & Analytics', href: '/services/ai-business-intelligence' },
        { name: 'Digital Transformation', href: '/digital-transformation' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: 'Emerging Technologies', href: '/emerging-tech' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      dropdown: true,
      items: [
        { name: 'Healthcare', href: '/solutions/healthcare' },
        { name: 'Financial Services', href: '/financial-solutions' },
        { name: 'Manufacturing', href: '/manufacturing-solutions' },
        { name: 'Enterprise', href: '/enterprise' },
        { name: 'Industry Solutions', href: '/industry-solutions' },
        { name: 'Cloud Solutions', href: '/cloud-solutions' }
      ]
    },
    {
<<<<<<< HEAD
      title: 'Company',
      items: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/about/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'News', href: '/news' },
        { name: 'Contact', href: '/contact' }
=======
      name: 'About',
      href: '/about',
      icon: Users,
      dropdown: [
        { name: 'Our Story', href: '/about/story', icon: FileText },
        { name: 'Team', href: '/about/team', icon: Users },
        { name: 'Careers', href: '/careers', icon: Briefcase },
        { name: 'Partners', href: '/partners', icon: Network },
        { name: 'Press', href: '/press', icon: Newspaper }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: FileText,
      dropdown: [
        { name: 'Blog', href: '/blog', icon: Newspaper },
        { name: 'Case Studies', href: '/case-studies', icon: FileText },
        { name: 'Research & Development', href: '/research-development', icon: Activity },
        { name: 'Documentation', href: '/docs', icon: FileText },
        { name: 'API Reference', href: '/api', icon: Cpu },
        { name: 'Sitemap', href: '/sitemap', icon: FileText },
        { name: 'Support', href: '/support', icon: FileText },
        { name: 'Training', href: '/training', icon: FileText },
        { name: 'Helpdesk', href: '/help', icon: FileText }
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Blog', href: '/blog' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Training', href: '/training' },
        { name: 'Research & Development', href: '/research-development' }
      ]
    }
  ];
<<<<<<< HEAD

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg' 
          : 'bg-transparent'
      } ${className || ''}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
=======
  const isActive = (href: string) => location.pathname === href;
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-cyan-400 font-rajdhani tracking-wider">
                Innovation Group
              </p>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
<<<<<<< HEAD
            <MainNavigation />
          </div>

          {/* Right Side Actions */}
=======
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 text-white hover:text-cyan-400 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    onFocus={() => setActiveDropdown(item.name)}
                    onBlur={() => setActiveDropdown(null)}
                    tabIndex={0}
                    role="button"
                    aria-expanded={activeDropdown === item.name}
                    aria-haspopup="true"
                  >
                    <span className={isActive(item.href) ? 'text-cyan-400' : ''}>
                      {item.name}
                    </span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-white hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded ${
                      isActive(item.href) ? 'text-cyan-400' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div 
                    className="absolute top-full left-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-lg shadow-xl"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="py-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset"
                        >
                          <subItem.icon className="w-4 h-4" />
                          <span>{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
          {/* Right side actions */}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search Button */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle size="sm" />

            {/* CTA Buttons */}
            <Link
              to="/contact"
              className="px-6 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
<<<<<<< HEAD
              Get Quote
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

=======
              Get Started
            </Link>
          </div>
          {/* Mobile menu button */}
          <button
            onClick={onMenuClick || (() => setIsOpen(!isOpen))}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded p-2"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
      {/* Search Bar */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50"
          >
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for services, solutions, or resources..."
                  className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  autoFocus
                />
                <button
                  onClick={() => setShowSearch(false)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {/* Mobile Navigation Items */}
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 mt-2 space-y-2"
                          >
                            {item.items?.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="block px-3 py-2 text-gray-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
<<<<<<< HEAD
              
              {/* Mobile Theme Toggle */}
              <div className="pt-4 border-t border-slate-700/50">
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-gray-300 text-sm">Theme</span>
                  <ThemeToggle size="sm" />
                </div>
              </div>
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t border-slate-700/50 space-y-3">
=======
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-700">
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                <Link
                  to="/contact"
                  className="block w-full px-4 py-2 text-center border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
<<<<<<< HEAD
                  Get Quote
                </Link>
                <Link
                  to="/contact"
                  className="block w-full px-4 py-2 text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Start Project
=======
                  Get Started
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
