import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Home, 
  Users, 
  Briefcase, 
  Phone, 
  FileText,
  Settings,
  Globe,
  Shield,
  Zap,
  Brain,
  Cloud,
  Lock,
  Search,
  User
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
  children?: NavigationItem[];
  description?: string;
}

const navigationItems: NavigationItem[] = [
  {
    name: 'Home',
    href: '/',
    icon: Home,
    description: 'Welcome to Zion Tech Group'
  },
  {
    name: 'About',
    href: '/about',
    icon: Users,
    description: 'Learn about our company'
  },
  {
    name: 'Services',
    href: '/services',
    icon: Briefcase,
    children: [
      {
        name: 'AI Solutions',
        href: '/services/ai',
        icon: Brain,
        description: 'Cutting-edge AI services'
      },
      {
        name: 'Cloud & DevOps',
        href: '/services/cloud',
        icon: Cloud,
        description: 'Cloud infrastructure & automation'
      },
      {
        name: 'Cybersecurity',
        href: '/services/cybersecurity',
        icon: Shield,
        description: 'Advanced security solutions'
      },
      {
        name: 'Digital Transformation',
        href: '/services/transformation',
        icon: Zap,
        description: 'Business transformation services'
      }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: Settings,
    description: 'Industry solutions'
  },
  {
    name: 'Case Studies',
    href: '/case-studies',
    icon: FileText,
    description: 'Success stories'
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: Phone,
    description: 'Get in touch'
  }
];

interface EnhancedMobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnhancedMobileNavigation: React.FC<EnhancedMobileNavigationProps> = ({
  isOpen,
  onClose
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  // Close navigation when route changes
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  // Close navigation when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const toggleExpanded = (itemName: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemName)) {
      newExpanded.delete(itemName);
    } else {
      newExpanded.add(itemName);
    }
    setExpandedItems(newExpanded);
  };

  const filteredItems = navigationItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const navVariants = {
    hidden: { x: '100%' },
    visible: { x: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />

          {/* Navigation Panel */}
          <motion.div
            ref={navRef}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={navVariants}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-purple-600">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">Z</span>
                </div>
                <span className="text-white font-semibold text-lg">Zion Tech</span>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 transition-colors p-2"
                aria-label="Close navigation"
              >
                <X size={24} />
              </button>
            </div>

            {/* Search Bar */}
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search navigation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 overflow-y-auto py-4">
              <nav className="space-y-2">
                {filteredItems.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => toggleExpanded(item.name)}
                          className={`w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors ${
                            expandedItems.has(item.name) ? 'bg-blue-50 border-r-2 border-blue-500' : ''
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <item.icon className="text-gray-600" size={20} />
                            <div>
                              <span className="font-medium text-gray-900">{item.name}</span>
                              {item.description && (
                                <p className="text-sm text-gray-500">{item.description}</p>
                              )}
                            </div>
                          </div>
                          <ChevronDown
                            className={`text-gray-400 transition-transform ${
                              expandedItems.has(item.name) ? 'rotate-180' : ''
                            }`}
                            size={20}
                          />
                        </button>
                        
                        <AnimatePresence>
                          {expandedItems.has(item.name) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden bg-gray-50"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  to={child.href}
                                  className="flex items-center space-x-3 p-4 pl-12 hover:bg-gray-100 transition-colors"
                                >
                                  <child.icon className="text-gray-500" size={18} />
                                  <div>
                                    <span className="font-medium text-gray-700">{child.name}</span>
                                    {child.description && (
                                      <p className="text-sm text-gray-500">{child.description}</p>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="flex items-center space-x-3 p-4 hover:bg-gray-50 transition-colors"
                      >
                        <item.icon className="text-gray-600" size={20} />
                        <div>
                          <span className="font-medium text-gray-900">{item.name}</span>
                          {item.description && (
                            <p className="text-sm text-gray-500">{item.description}</p>
                          )}
                        </div>
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white border border-gray-200">
                <User className="text-gray-600" size={20} />
                <span className="text-sm font-medium text-gray-700">Sign In</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EnhancedMobileNavigation;