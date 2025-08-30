import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { 
  X, 
  Menu, 
  ChevronDown, 
  Home,
  Zap,
  Target,
  Users,
  FileText,
  Phone,
  Search,
  User,
  Settings,
  Bell,
  Globe,
  Brain,
  Shield,
  Cpu,
  Rocket,
  Atom,
  Activity,
  BarChart3,
  Building,
  Briefcase,
  Newspaper,
  Network
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
  dropdown?: NavigationItem[];
}

export function EnhancedMobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const location = useLocation();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const navigation: NavigationItem[] = [
    {
      name: 'Home',
      href: '/',
      icon: Home
    },
    {
      name: 'Services',
      href: '/services',
      icon: Zap,
      dropdown: [
        { name: 'AI Solutions', href: '/services/ai-solutions', icon: Brain },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cpu },
        { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Rocket },
        { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3 },
        { name: 'IoT & Edge Computing', href: '/services/iot-edge-computing', icon: Activity },
        { name: 'Space Technology', href: '/services/space-technology', icon: Rocket }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Target,
      dropdown: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building },
        { name: 'AI Business Intelligence', href: '/solutions/ai-business-intelligence', icon: Brain },
        { name: 'Quantum AI Platform', href: '/solutions/quantum-ai-platform', icon: Atom },
        { name: 'Digital Twin Solutions', href: '/solutions/digital-twin', icon: Activity },
        { name: 'Zero Trust Security', href: '/solutions/zero-trust-security', icon: Shield }
      ]
    },
    {
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
        { name: 'Support', href: '/support', icon: FileText },
        { name: 'Training', href: '/training', icon: FileText }
      ]
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Phone
    }
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setIsSearchOpen(false);
  }, [location.pathname]);

  // Focus search input when search is opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Handle swipe gestures
  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 100;
    if (Math.abs(info.offset.x) > swipeThreshold) {
      if (info.offset.x > 0) {
        // Swipe right - close menu
        setIsOpen(false);
        setSwipeDirection('right');
      } else {
        // Swipe left - open menu
        setIsOpen(true);
        setSwipeDirection('left');
      }
    }
    
    // Reset swipe direction after animation
    setTimeout(() => setSwipeDirection(null), 300);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-3 bg-black/80 backdrop-blur-md rounded-full border border-white/20 text-white hover:text-cyan-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.div>
      </button>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Navigation Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900/95 backdrop-blur-xl border-l border-white/10 z-50 lg:hidden overflow-hidden"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-bold text-white">Zion Tech</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white hover:text-cyan-400 transition-colors rounded-lg hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search Bar */}
              <div className="p-4 border-b border-white/10">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="w-full flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
                >
                  <Search className="w-5 h-5" />
                  <span>Search services, solutions...</span>
                </button>
                
                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-3"
                    >
                      <form onSubmit={handleSearch}>
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            ref={searchInputRef}
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          />
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto py-4">
                <nav className="space-y-2 px-4">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <div>
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                              isActive(item.href) 
                                ? 'bg-cyan-500/20 text-cyan-400' 
                                : 'text-white hover:bg-white/10'
                            }`}
                            aria-expanded={activeDropdown === item.name}
                          >
                            <div className="flex items-center space-x-3">
                              <item.icon className="w-5 h-5" />
                              <span className="font-medium">{item.name}</span>
                            </div>
                            <motion.div
                              animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown className="w-4 h-4" />
                            </motion.div>
                          </button>
                          
                          <AnimatePresence>
                            {activeDropdown === item.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="ml-6 mt-2 space-y-1"
                              >
                                {item.dropdown.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.href}
                                    className="flex items-center space-x-3 p-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <subItem.icon className="w-4 h-4" />
                                    <span className="text-sm">{subItem.name}</span>
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                            isActive(item.href) 
                              ? 'bg-cyan-500/20 text-cyan-400' 
                              : 'text-white hover:bg-white/10'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Footer Actions */}
              <div className="p-4 border-t border-white/10 space-y-3">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
                
                <div className="flex space-x-2">
                  <button className="flex-1 p-3 bg-gray-800/50 text-white rounded-lg hover:bg-gray-800 transition-colors">
                    <User className="w-5 h-5 mx-auto" />
                  </button>
                  <button className="flex-1 p-3 bg-gray-800/50 text-white rounded-lg hover:bg-gray-800 transition-colors">
                    <Settings className="w-5 h-5 mx-auto" />
                  </button>
                  <button className="flex-1 p-3 bg-gray-800/50 text-white rounded-lg hover:bg-gray-800 transition-colors">
                    <Bell className="w-5 h-5 mx-auto" />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
