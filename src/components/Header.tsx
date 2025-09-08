import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu,
  X,
  ChevronDown,
  Brain,
  Shield,
  Cpu,
  Database,
  Network,
  Globe,
  Users,
  FileText,
  Phone,
  Mail,
  MapPin,
  Search,
  Bell,
  Brain,
  Shield,
  Cloud,
  Cpu,
  Zap,
  Building,
  Users,
  Briefcase,
  Newspaper,
  DollarSign
} from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const navigation = [
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'AI Solutions', href: '/services/ai-solutions', icon: Brain },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: BarChart3 },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', icon: Users },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', icon: TrendingUp },
        { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform', icon: Heart },
        { name: 'AI Project Management', href: '/services/ai-project-management', icon: Target },
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', icon: Shield },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cpu },
        { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Rocket },
        { name: 'IoT & Edge Computing', href: '/services/iot-edge-computing', icon: Activity },
        { name: 'Space Technology', href: '/services/space-technology', icon: Rocket },
        { name: 'Comprehensive Portfolio', href: '/comprehensive-services', icon: Globe },
        { name: 'Revolutionary Services', href: '/revolutionary-services', icon: Sparkles },
        { name: 'New Services 2025', href: '/new-services-2025', icon: Star },
        { name: 'Pricing', href: '/pricing', icon: DollarSign }
      ]
    },
    {
      title: 'Solutions',
      items: [
        { name: 'Healthcare', href: '/solutions/healthcare' },
        { name: 'Financial Services', href: '/solutions/financial' },
        { name: 'Manufacturing', href: '/solutions/manufacturing' },
        { name: 'Education', href: '/solutions/education' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      dropdown: true,
      icon: Target,
      items: [
        { name: 'Healthcare Solutions', href: '/solutions/healthcare' },
        { name: 'Financial Solutions', href: '/solutions/financial' },
        { name: 'Manufacturing Solutions', href: '/solutions/manufacturing' },
        { name: 'Government Solutions', href: '/solutions/government' },
        { name: 'Retail Solutions', href: '/solutions/retail' },
        { name: 'Education Solutions', href: '/solutions/education' },
        { name: 'Startup Solutions', href: '/solutions/startup' },
        { name: 'Enterprise Solutions', href: '/enterprise' }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      dropdown: true,
      items: [
        { name: 'About Us', href: '/about' },
        { name: 'Leadership', href: '/leadership' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      dropdown: true,
      items: [
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Training', href: '/training' },
        { name: 'Research & Development', href: '/research-development' }
      ]
    },
    {
      name: 'Support',
      href: '/help',
      dropdown: true,
      icon: HelpCircle,
      items: [
        { name: 'Help Center', href: '/help' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Contact Support', href: '/contact' },
        { name: 'Training', href: '/training' },
        { name: 'Tutorials', href: '/tutorials' }
      ]
    },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Contact', href: '/contact', icon: MessageCircle }
  ];

  const isActive = (href) => location.pathname === href;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Simple Theme Toggle Component
  const ThemeToggle = ({ size = "md" }) => {
    const [isDark, setIsDark] = useState(true);
    const sizeClasses = {
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-12 h-12"
    };
    
    return (
      <button
        onClick={() => setIsDark(!isDark)}
        className={`${sizeClasses[size]} p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200`}
        title="Toggle theme"
      >
        {isDark ? <Eye className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
      </button>
    );
  };

  // Main Navigation Component
  const MainNavigation = () => (
    <nav className="flex items-center space-x-8">
      {navigation.map((item) => (
        <div key={item.name} className="relative">
          {item.dropdown ? (
            <div>
              <button
                onClick={() => toggleDropdown(item.name)}
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <span>{item.name}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === item.name ? 'rotate-180' : ''
                }`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-50"
                  >
                    <div className="p-2">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link
              to={item.href}
              className={`text-gray-300 hover:text-white transition-colors duration-200 ${
                isActive(item.href) ? 'text-cyan-400' : ''
              }`}
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-cyan-400 tracking-wider">
                Innovation Group
              </p>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              ZION
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 group"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    
                    {/* Mega Menu for Services */}
                    {item.name === 'Services' && (
                      <div className="absolute top-full left-0 w-screen max-w-6xl bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="p-6">
                          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                            {item.items.map((category) => (
                              <div key={category.category} className="space-y-4">
                                <div className="flex items-center space-x-2 text-cyan-400">
                                  <category.icon className="w-5 h-5" />
                                  <h3 className="font-semibold text-white">{category.category}</h3>
                                </div>
                                <div className="space-y-2">
                                  {category.services.map((service) => (
                                    <Link
                                      key={service.name}
                                      to={service.href}
                                      className="block text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded px-2 py-1 transition-colors duration-200"
                                    >
                                      {service.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Regular Dropdown for other items */}
                    {item.name !== 'Services' && (
                      <div className="absolute top-full left-0 w-64 bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="p-4 space-y-2">
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors duration-200"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-300 hover:text-white transition-colors"
            >
              {currentTheme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Contact Info */}
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <a 
                href="tel:+13024640950" 
                className="flex items-center space-x-2 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">+1 (302) 464-0950</span>
              </a>
              <a 
                href="mailto:info@ziontechgroup.com" 
                className="flex items-center space-x-2 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden xl:inline">info@ziontechgroup.com</span>
              </a>
            </div>
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
              aria-label="Toggle search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="py-4"
            >
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services, solutions, or resources..."
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50 max-h-screen overflow-y-auto"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full text-left text-white hover:text-cyan-400 transition-colors py-2"
                      >
                        <div className="flex items-center space-x-2">
                          <item.icon className="w-4 h-4" />
                          <span>{item.name}</span>
                        </div>
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
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>

              {/* Mobile Contact Info */}
              <div className="mt-8 pt-6 border-t border-slate-700/50">
                <div className="space-y-4">
                  <a 
                    href="tel:+13024640950" 
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+1 (302) 464-0950</span>
                  </a>
                  <a 
                    href="mailto:info@ziontechgroup.com" 
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>info@ziontechgroup.com</span>
                  </a>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5" />
                    <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Get Started Today
                  </Link>
                </div>
              ))}
              
              {/* Mobile Navigation Links */}
              <div className="space-y-4">
                <Link
                  to="/"
                  className="block text-white hover:text-zion-cyan transition-colors text-lg font-medium"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                
                <div className="space-y-2">
                  <h3 className="text-zion-cyan font-semibold text-sm uppercase tracking-wider">Services</h3>
                  <div className="pl-4 space-y-2">
                    <Link
                      to="/ai-services"
                      className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                      onClick={closeMobileMenu}
                    >
                      AI Services
                    </Link>
                    <Link
                      to="/it-services"
                      className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                      onClick={closeMobileMenu}
                    >
                      IT Services
                    </Link>
                    <Link
                      to="/micro-saas"
                      className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Micro SAAS
                    </Link>
                    <Link
                      to="/cloud-devops"
                      className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Cloud & DevOps
                    </Link>
                    <Link
                      to="/cybersecurity"
                      className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Cybersecurity
                    </Link>
                    <Link
                      to="/quantum-computing"
                      className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Quantum Computing
                    </Link>
                    <Link
                      to="/blockchain"
                      className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Blockchain
                    </Link>
                    <Link
                      to="/digital-transformation"
                      className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Digital Transformation
                    </Link>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-zion-cyan font-semibold text-sm uppercase tracking-wider">Solutions</h3>
                  <div className="pl-4 space-y-2">
                    <Link
                      to="/enterprise"
                      className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Enterprise
                    </Link>
                    <Link
                      to="/healthcare"
                      className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Healthcare
                    </Link>
                    <Link
                      to="/financial"
                      className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Financial
                    </Link>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-zion-cyan font-semibold text-sm uppercase tracking-wider">Company</h3>
                  <div className="pl-4 space-y-2">
                    <Link
                      to="/about"
                      className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                      onClick={closeMobileMenu}
                    >
                      About Us
                    </Link>
                    <Link
                      to="/contact"
                      className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Contact
                    </Link>
                    <Link
                      to="/careers"
                      className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Careers
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-700">
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center px-4 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
