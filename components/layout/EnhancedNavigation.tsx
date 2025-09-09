import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  ChevronDown, 
  Phone, 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube,
  Home,
  Briefcase,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Target,
  Building,
  Users,
  BookOpen,
  FileText,
  Video,
  Code,
  Sparkles,
  Zap,
  Star,
  Award,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Define Node type for DOM event handling
type Node = HTMLElement | null;

interface NavigationItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  featured?: boolean;
  neonColor?: string;
  category?: string;
}

// Enhanced navigation items with better organization and accessibility
const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: <Home className="w-4 h-4" />,
    neonColor: 'shadow-cyan-400/50',
    description: 'Return to homepage'
  },
  {
    label: 'Services',
    href: '/services',
    icon: <Briefcase className="w-4 h-4" />,
    description: 'Explore our comprehensive technology solutions',
    badge: 'New',
    neonColor: 'shadow-blue-400/50',
    children: [
      {
        label: 'AI & Machine Learning',
        href: '/services?category=ai-ml',
        icon: <Brain className="w-4 h-4" />,
        description: 'Advanced AI solutions for enterprise',
        featured: true,
        neonColor: 'shadow-purple-400/50',
        category: 'AI Services'
      },
      {
        label: 'Quantum Computing',
        href: '/services?category=quantum',
        icon: <Atom className="w-4 h-4" />,
        description: 'Next-generation quantum solutions',
        featured: true,
        neonColor: 'shadow-blue-400/50',
        category: 'Quantum Technology'
      },
      {
        label: 'Space Technology',
        href: '/services?category=space-tech',
        icon: <Rocket className="w-4 h-4" />,
        description: 'Innovative space tech applications',
        featured: true,
        neonColor: 'shadow-pink-400/50',
        category: 'Space Technology'
      },
      {
        label: 'Cybersecurity',
        href: '/services?category=cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        description: 'Advanced security solutions',
        featured: true,
        neonColor: 'shadow-red-400/50',
        category: 'Security'
      },
      {
        label: 'Cloud & DevOps',
        href: '/services?category=cloud-devops',
        icon: <Cloud className="w-4 h-4" />,
        description: 'Cloud infrastructure and automation',
        neonColor: 'shadow-green-400/50',
        category: 'Infrastructure'
      },
      {
        label: 'Business Solutions',
        href: '/services?category=business',
        icon: <Target className="w-4 h-4" />,
        description: 'Business optimization and automation',
        neonColor: 'shadow-emerald-400/50',
        category: 'Business'
      }
    ]
  },
  {
    label: 'About',
    href: '/about',
    icon: <Building className="w-4 h-4" />,
    description: 'Learn about our company and mission',
    children: [
      {
        label: 'Our Story',
        href: '/about#story',
        icon: <BookOpen className="w-4 h-4" />,
        description: 'Company history and vision'
      },
      {
        label: 'Team',
        href: '/team',
        icon: <Users className="w-4 h-4" />,
        description: 'Meet our expert team'
      },
      {
        label: 'Careers',
        href: '/careers',
        icon: <Award className="w-4 h-4" />,
        description: 'Join our team'
      }
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: <FileText className="w-4 h-4" />,
    description: 'Educational content and tools',
    children: [
      {
        label: 'Blog',
        href: '/blog',
        icon: <BookOpen className="w-4 h-4" />,
        description: 'Latest insights and updates'
      },
      {
        label: 'Documentation',
        href: '/docs',
        icon: <Code className="w-4 h-4" />,
        description: 'Technical documentation'
      },
      {
        label: 'Webinars',
        href: '/webinars',
        icon: <Video className="w-4 h-4" />,
        description: 'Educational webinars'
      },
      {
        label: 'White Papers',
        href: '/white-papers',
        icon: <FileText className="w-4 h-4" />,
        description: 'In-depth research papers'
      },
      {
        label: 'Case Studies',
        href: '/case-studies',
        icon: <FileText className="w-4 h-4" />,
        description: 'Success stories and implementations'
      },
      {
        label: 'Training',
        href: '/training',
        icon: <Award className="w-4 h-4" />,
        description: 'Professional development courses'
      }
    ]
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: <Phone className="w-4 h-4" />,
    description: 'Get in touch with our team'
  }
];

=======
interface EnhancedNavigationProps {
  className?: string;
}

const EnhancedNavigation: React.FC<EnhancedNavigationProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  
  const router = useRouter();
  const navRef = useRef<HTMLElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI & Machine Learning', href: '/services?category=ai-ml' },
        { name: 'Quantum Computing', href: '/services?category=quantum' },
        { name: 'Space Technology', href: '/services?category=space' },
        { name: 'Biotech & Healthcare', href: '/services?category=biotech' },
        { name: 'Financial Services', href: '/services?category=finance' },
        { name: 'Cybersecurity', href: '/services?category=security' },
        { name: 'Edge Computing', href: '/services?category=edge' },
        { name: 'Blockchain', href: '/services?category=blockchain' },
        { name: 'View All Services', href: '/services' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Enterprise Solutions', href: '/solutions?type=enterprise' },
        { name: 'Startup Solutions', href: '/solutions?type=startup' },
        { name: 'Government Solutions', href: '/solutions?type=government' },
        { name: 'Healthcare Solutions', href: '/solutions?type=healthcare' },
        { name: 'Financial Solutions', href: '/solutions?type=financial' }
      ]
    },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Resources', href: '/resources' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Optimized event handlers
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleDropdown = useCallback((label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  }, [activeDropdown]);

  const closeDropdown = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  }, [searchQuery, router]);

  const toggleSearch = useCallback(() => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchQuery('');
    }
  }, [isSearchOpen]);

  // Get animation props based on user preference
  const getAnimationProps = (animationType: keyof typeof navigationAnimations) => {
    if (isReducedMotion) {
      return { initial: {}, animate: {}, exit: {}, transition: {} };
    }
    return navigationAnimations[animationType];
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
        : 'bg-transparent'
    } ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  Zion Tech Group
                </div>
                <div className="text-xs text-cyan-400">Revolutionary Technology</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    onMouseEnter={() => !isReducedMotion && setActiveDropdown(item.label)}
                    onMouseLeave={() => !isReducedMotion && setActiveDropdown(null)}
                    className="flex items-center space-x-1 px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-200 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-black"
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                    aria-label={`${item.label} menu`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-200 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-black"
                    aria-label={item.description || item.label}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.label && (
                  <motion.div
                    {...getAnimationProps('slideDown')}
                    className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
                    onMouseEnter={() => !isReducedMotion && setActiveDropdown(item.label)}
                    onMouseLeave={() => !isReducedMotion && setActiveDropdown(null)}
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/10 transition-colors duration-200 group"
                            onClick={closeDropdown}
                            aria-label={child.description || child.label}
                          >
                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                              {child.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2">
                                <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                                  {child.label}
                                </p>
                                {child.badge && (
                                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400">
                                    {child.badge}
                                  </span>
                                )}
                                {child.featured && (
                                  <Star className="w-3 h-3 text-yellow-400" />
                                )}
                              </div>
                              {child.description && (
                                <p className="text-xs text-gray-400 mt-1">
                                  {child.description}
                                </p>
                              )}
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {/* Search */}
            <button
              onClick={toggleSearch}
              className="p-2 text-white hover:text-cyan-400 transition-colors duration-200 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Open search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Contact us"
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </Link>
              <Link
                href="/pricing"
                className="px-4 py-2 text-sm font-medium text-gray-300 border border-gray-600 rounded-lg hover:text-white hover:border-gray-500 transition-colors duration-200"
              >
                Pricing
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            {...getAnimationProps('fadeIn')}
            className="absolute inset-0 bg-black/95 backdrop-blur-md z-50"
          >
            <div className="max-w-2xl mx-auto px-4 pt-20">
              <form onSubmit={handleSearch} className="relative">
                <input
                  ref={searchRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for services, solutions, or insights..."
                  className="w-full px-6 py-4 text-white bg-white/10 border border-white/20 rounded-2xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                  aria-label="Search query"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 p-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  aria-label="Submit search"
                >
                  <Search className="w-6 h-6" />
                </button>
              </form>
              <button
                onClick={toggleSearch}
                className="absolute top-4 right-4 p-2 text-white hover:text-cyan-400 transition-colors"
                aria-label="Close search"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full px-4 py-3 text-white bg-white/10 border border-white/20 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  aria-label="Search query"
                />
              </div>

              {/* Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                  >
                    {item.name}
                  </Link>
                  
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="ml-4 space-y-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 py-1 text-sm"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20">
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4" />
                    <span>{contactInfo.website}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </div>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center px-6 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>

              {/* Mobile Navigation Items */}
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className="w-full flex items-center justify-between px-4 py-3 text-white hover:text-cyan-400 transition-colors rounded-lg hover:bg-white/10"
                          aria-expanded={activeDropdown === item.label}
                        >
                          <span className="flex items-center space-x-3">
                            {item.icon}
                            <span>{item.label}</span>
                          </span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        {activeDropdown === item.label && (
                          <motion.div
                            {...getAnimationProps('fadeIn')}
                            className="ml-8 mt-2 space-y-1"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="block px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-white/10"
                                onClick={() => {
                                  setIsOpen(false);
                                  setActiveDropdown(null);
                                }}
                                aria-label={child.description || child.label}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center space-x-3 px-4 py-3 text-white hover:text-cyan-400 transition-colors rounded-lg hover:bg-white/10"
                        onClick={() => setIsOpen(false)}
                        aria-label={item.description || item.label}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-white/20">
                <Link
                  href="/contact"
                  className="block w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-center rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                  aria-label="Contact us"
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile Social Links */}
              <div className="pt-4 border-t border-white/20">
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-white hover:text-cyan-400 transition-colors rounded-lg hover:bg-white/10"
                      aria-label={social.description}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default EnhancedNavigation;