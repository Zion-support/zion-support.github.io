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
  MapPin,
  Search,
  Bell,
  User,
  Settings,
  Zap,
  Atom,
  Eye,
  Activity,
  Building,
  Target,
  TrendingUp,
  Briefcase,
  Newspaper
} from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    {
      name: 'Services',
      href: '/services',
      icon: Zap,
      dropdown: [
        { name: 'AI Solutions', href: '/services/ai-solutions', icon: Brain, description: 'Transform your business with cutting-edge AI' },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom, description: 'Harness quantum mechanics for unprecedented capabilities' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Protect your digital assets with AI-powered security' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cpu, description: 'Modernize your infrastructure and processes' },
        { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Rocket, description: 'Navigate the digital age with confidence' },
        { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3, description: 'Turn data into actionable insights' },
        { name: 'IoT & Edge Computing', href: '/services/iot-edge-computing', icon: Activity, description: 'Connect and compute at the edge' },
        { name: 'Space Technology', href: '/services/space-technology', icon: Rocket, description: 'Pioneering innovations in space exploration' },
        { name: 'Comprehensive Portfolio', href: '/comprehensive-services', icon: Globe, description: 'Full-spectrum technology solutions' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Target,
      dropdown: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building, description: 'Scalable solutions for large organizations' },
        { name: 'AI Business Intelligence', href: '/solutions/ai-business-intelligence', icon: Brain, description: 'Intelligent insights for better decisions' },
        { name: 'Quantum AI Platform', href: '/solutions/quantum-ai-platform', icon: Atom, description: 'Next-generation AI powered by quantum computing' },
        { name: 'Digital Twin Solutions', href: '/solutions/digital-twin', icon: Eye, description: 'Virtual replicas for real-world optimization' },
        { name: 'Zero Trust Security', href: '/solutions/zero-trust-security', icon: Shield, description: 'Never trust, always verify security model' }
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: Users,
      dropdown: [
        { name: 'Our Story', href: '/about/story', icon: FileText, description: 'Learn about our journey and mission' },
        { name: 'Team', href: '/about/team', icon: Users, description: 'Meet our expert team of innovators' },
        { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join our team and shape the future' },
        { name: 'Partners', href: '/partners', icon: Network, description: 'Strategic partnerships for success' },
        { name: 'Press', href: '/press', icon: Newspaper, description: 'Latest news and media coverage' }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: FileText,
      dropdown: [
        { name: 'Blog', href: '/blog', icon: Newspaper, description: 'Insights and thought leadership' },
        { name: 'Case Studies', href: '/case-studies', icon: FileText, description: 'Real-world success stories' },
        { name: 'Research & Development', href: '/research-development', icon: Activity, description: 'Cutting-edge research and innovation' },
        { name: 'Documentation', href: '/docs', icon: FileText, description: 'Comprehensive technical documentation' },
        { name: 'API Reference', href: '/api', icon: Cpu, description: 'Developer tools and APIs' },
        { name: 'Sitemap', href: '/sitemap', icon: FileText, description: 'Site navigation guide' },
        { name: 'Support', href: '/support', icon: FileText, description: 'Get help when you need it' },
        { name: 'Training', href: '/training', icon: FileText, description: 'Learn from our experts' },
        { name: 'Helpdesk', href: '/help', icon: FileText, description: '24/7 technical support' }
      ]
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Phone
    }
  ];

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

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md border-b border-white/10 shadow-lg' 
        : 'bg-black/80 backdrop-blur-sm'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded-lg p-2" 
            aria-label="Zion Tech Group Home"
          >
            <motion.div 
              className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Zap className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-xl font-bold">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 text-white hover:text-cyan-400 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded-lg p-2"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    onFocus={() => setActiveDropdown(item.name)}
                    onBlur={() => setActiveDropdown(null)}
                    onKeyDown={(e) => handleKeyDown(e, () => setActiveDropdown(activeDropdown === item.name ? null : item.name))}
                    tabIndex={0}
                    role="button"
                    aria-expanded={activeDropdown === item.name}
                    aria-haspopup="true"
                    aria-label={`${item.name} menu`}
                  >
                    <span className={isActive(item.href) ? 'text-cyan-400' : ''}>
                      {item.name}
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-white hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded-lg p-2 ${
                      isActive(item.href) ? 'text-cyan-400' : ''
                    }`}
                    aria-label={`Navigate to ${item.name}`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Enhanced Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div 
                    className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-xl shadow-2xl"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="py-3">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="group flex items-start space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset rounded-lg mx-2"
                          aria-label={`Navigate to ${subItem.name}`}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <subItem.icon className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium">{subItem.name}</div>
                            {subItem.description && (
                              <div className="text-sm text-gray-400 mt-1 leading-relaxed">
                                {subItem.description}
                              </div>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              className="text-white hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded-lg p-2"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search website"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black shadow-lg hover:shadow-xl transform hover:scale-105"
              aria-label="Get started with Zion Tech Group"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded-lg p-2"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Enhanced Search Bar */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700"
          >
            <form onSubmit={handleSearch} className="px-4 py-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services, solutions, and more..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                  aria-label="Search website"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1.5 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                  aria-label="Submit search"
                >
                  Search
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700 max-h-[80vh] overflow-y-auto"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full text-left text-white hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset rounded-lg p-3 hover:bg-gray-800/50"
                        aria-expanded={activeDropdown === item.name}
                        aria-label={`Toggle ${item.name} submenu`}
                      >
                        <span className="flex items-center space-x-3">
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.name}</span>
                        </span>
                        <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === item.name && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-6 mt-3 space-y-2 border-l-2 border-gray-700 pl-4"
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-start space-x-3 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset"
                              aria-label={`Navigate to ${subItem.name}`}
                            >
                              <subItem.icon className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="font-medium">{subItem.name}</div>
                                {subItem.description && (
                                  <div className="text-sm text-gray-400 mt-1">
                                    {subItem.description}
                                  </div>
                                )}
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center space-x-3 text-white hover:text-cyan-400 transition-colors p-3 rounded-lg hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset"
                      aria-label={`Navigate to ${item.name}`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Enhanced Mobile CTA */}
              <div className="pt-6 border-t border-gray-700 space-y-3">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg"
                  aria-label="Get started with Zion Tech Group"
                >
                  Get Started
                </Link>
                <Link
                  to="/request-quote"
                  className="block w-full text-center bg-transparent text-cyan-400 border-2 border-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  aria-label="Request a custom quote"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}