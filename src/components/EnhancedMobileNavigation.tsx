import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
import { motion, AnimatePresence } from 'framer - motion';


  Menu, 
  X, 
  ChevronDown, 
  ChevronRight,
  Home,
  Briefcase,
  Users,
  FileText,
  Phone,
  Settings,
  LogIn,
  User,
  Search,
  Globe,
  Zap,
  Shield,
  Brain,
  TrendingUp,
  Cloud,
  Database
} from 'lucide-react';

interface NavigationItem {


  label: string;
  path: string;
  icon: React.ComponentType<any>;
  children?: NavigationItem[];
}

export default function EnhancedMobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const navigationItems: NavigationItem[] = [
    {
      label: 'Home',
      path: '/',
      icon: Home
    },
    {
      label: 'Services',
      path: '/services',
      icon: Briefcase,
      children: [
        { label: 'AI Solutions', path: '/ai-services', icon: Brain },
        { label: 'Cloud & DevOps', path: '/services/cloud-devops', icon: Cloud },
        { label: 'Cybersecurity', path: '/services/ai-cybersecurity-suite', icon: Shield },
        { label: 'Data Analytics', path: '/services/data-analytics', icon: TrendingUp },
        { label: 'IoT & Edge', path: '/services/edge-computing-platform', icon: Zap },
        { label: 'Blockchain', path: '/services/blockchain-enterprise-solutions', icon: Database }
      ]
    },
    {
      label: 'About',
      path: '/about',
      icon: Users
    },
    {
      label: 'Blog',
      path: '/blog',
      icon: FileText
    },
    {
      label: 'Contact',
      path: '/contact',
      icon: Phone
    }
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleSubmenu = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search page or implement search functionality
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        aria-label="Open mobile menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-slate-900 to-slate-800 border-l border-slate-700/50 z-50 lg:hidden overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Z</span>
                  </div>
                  <span className="text-white font-semibold">Zion Tech</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
                  aria-label="Close mobile menu"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>;

              {/* Search Bar */}
              <div className="p-6 border-b border-slate-700/50">
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  />
                </form>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto py-6">
                <nav className="space-y-2 px-6">
                  {navigationItems.map((item) => (
                    <div key={item.label}>
                      {item.children ? (
                        <div>
                          <button
                            onClick={() => toggleSubmenu(item.label)}
                            className="w-full flex items-center justify-between p-4 rounded-xl text-left text-white hover:bg-white/10 transition-all duration-300 group"
                          >
                            <div className="flex items-center space-x-3">
                              <item.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                              <span className="font-medium">{item.label}</span>
                            </div>
                            <motion.div
                              animate={{ rotate: activeSubmenu === item.label ? 90 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronRight className="w-4 h-4 text-slate-400" />
                            </motion.div>
                          </button>
                          
                          <AnimatePresence>
                            {activeSubmenu === item.label && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="ml-8 space-y-1">
                                  {item.children.map((child) => (
                                    <Link
                                      key={child.path}
                                      to={child.path}
                                      className="flex items-center space-x-3 p-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-300 group"
                                    >
                                      <child.icon className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                                      <span className="text-sm">{child.label}</span>
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          className="flex items-center space-x-3 p-4 rounded-xl text-white hover:bg-white/10 transition-all duration-300 group"
                        >
                          <item.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                          <span className="font-medium">{item.label}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Footer Actions */}
              <div className="p-6 border-t border-slate-700/50 space-y-3">
                <Link
                  to="/login"
                  className="flex items-center justify-center w-full p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Sign In
                </Link>
                
                <Link
                  to="/contact"
                  className="flex items-center justify-center w-full p-3 border border-cyan-500/50 text-cyan-400 rounded-xl font-medium hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Get Support
                </Link>
              </div>

              {/* Quick Actions */}
              <div className="p-6 bg-slate-800/50">
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    to="/pricing"
                    className="p-3 bg-white/5 rounded-lg text-center text-sm text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                  >
                    Pricing
                  </Link>
                  <Link
                    to="/about"
                    className="p-3 bg-white/5 rounded-lg text-center text-sm text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                  >
                    About Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}