import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Users, 
  Rocket, 
  Brain,
  Cloud,
  Shield,
  Zap,
  Star,
  Heart,
  Share2,
  Download,
  Upload,
  Settings,
  HelpCircle,
  X,
  ChevronUp,
  ChevronDown
} from 'lucide-react';

interface FloatingActionButtonProps {
  enabled?: boolean;
  showLabels?: boolean;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}

interface ActionItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  action: () => void;
  color: string;
  category: 'primary' | 'secondary' | 'utility';
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  enabled = true,
  showLabels = true,
  position = 'bottom-right'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'primary' | 'secondary' | 'utility'>('primary');
  const [isVisible, setIsVisible] = useState(false);
  const fabRef = useRef<HTMLDivElement>(null);

  // Define action items
  const actionItems: ActionItem[] = [
    // Primary actions
    {
      id: 'contact',
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'Contact Us',
      action: () => window.location.href = '/contact',
      color: 'bg-blue-600 hover:bg-blue-700',
      category: 'primary'
    },
    {
      id: 'phone',
      icon: <Phone className="w-5 h-5" />,
      label: 'Call Now',
      action: () => window.open('tel:+13024640950'),
      color: 'bg-green-600 hover:bg-green-700',
      category: 'primary'
    },
    {
      id: 'email',
      icon: <Mail className="w-5 h-5" />,
      label: 'Send Email',
      action: () => window.open('mailto:kleber@ziontechgroup.com'),
      color: 'bg-purple-600 hover:bg-purple-700',
      category: 'primary'
    },
    {
      id: 'location',
      icon: <MapPin className="w-5 h-5" />,
      label: 'Visit Us',
      action: () => window.open('https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'),
      color: 'bg-red-600 hover:bg-red-700',
      category: 'primary'
    },

    // Secondary actions
    {
      id: 'services',
      icon: <Rocket className="w-5 h-5" />,
      label: 'Our Services',
      action: () => window.location.href = '/services',
      color: 'bg-indigo-600 hover:bg-indigo-700',
      category: 'secondary'
    },
    {
      id: 'ai-solutions',
      icon: <Brain className="w-5 h-5" />,
      label: 'AI Solutions',
      action: () => window.location.href = '/ai-services',
      color: 'bg-pink-600 hover:bg-pink-700',
      category: 'secondary'
    },
    {
      id: 'cloud-services',
      icon: <Cloud className="w-5 h-5" />,
      label: 'Cloud Services',
      action: () => window.location.href = '/cloud-devops',
      color: 'bg-cyan-600 hover:bg-cyan-700',
      category: 'secondary'
    },
    {
      id: 'security',
      icon: <Shield className="w-5 h-5" />,
      label: 'Cybersecurity',
      action: () => window.location.href = '/cybersecurity',
      color: 'bg-orange-600 hover:bg-orange-700',
      category: 'secondary'
    },

    // Utility actions
    {
      id: 'documentation',
      icon: <BookOpen className="w-5 h-5" />,
      label: 'Documentation',
      action: () => window.location.href = '/documentation',
      color: 'bg-gray-600 hover:bg-gray-700',
      category: 'utility'
    },
    {
      id: 'support',
      icon: <HelpCircle className="w-5 h-5" />,
      label: 'Get Support',
      action: () => window.location.href = '/support',
      color: 'bg-teal-600 hover:bg-teal-700',
      category: 'utility'
    },
    {
      id: 'team',
      icon: <Users className="w-5 h-5" />,
      label: 'Our Team',
      action: () => window.location.href = '/team',
      color: 'bg-emerald-600 hover:bg-emerald-700',
      category: 'utility'
    },
    {
      id: 'careers',
      icon: <Star className="w-5 h-5" />,
      label: 'Careers',
      action: () => window.location.href = '/careers',
      color: 'bg-yellow-600 hover:bg-yellow-700',
      category: 'utility'
    }
  ];

  // Filter actions by category
  const getActionsByCategory = (category: 'primary' | 'secondary' | 'utility') => {
    return actionItems.filter(item => item.category === category);
  };

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (fabRef.current && !fabRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Show FAB after delay
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll to show/hide FAB
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide FAB
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show FAB
        setIsVisible(true);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get position classes
  const getPositionClasses = () => {
    switch (position) {
      case 'bottom-left':
        return 'bottom-4 left-4';
      case 'top-right':
        return 'top-4 right-4';
      case 'top-left':
        return 'top-4 left-4';
      default:
        return 'bottom-4 right-4';
    }
  };

  if (!enabled || !isVisible) return null;

  return (
    <div ref={fabRef} className={`fixed z-50 ${getPositionClasses()}`}>
      {/* Category Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="mb-4 flex space-x-2"
          >
            {(['primary', 'secondary', 'utility'] as const).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mb-4 space-y-2"
          >
            {getActionsByCategory(activeCategory).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-2"
              >
                <button
                  onClick={item.action}
                  className={`${item.color} text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300`}
                  aria-label={item.label}
                  title={item.label}
                >
                  {item.icon}
                </button>
                {showLabels && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) {
            setIsExpanded(false);
            setActiveCategory('primary');
          }
        }}
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
        aria-label={isOpen ? 'Close quick actions' : 'Open quick actions'}
        title={isOpen ? 'Close quick actions' : 'Quick actions'}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="plus"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Plus className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Expand/Collapse Button */}
      <AnimatePresence>
        {isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-gray-300"
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
            title={isExpanded ? 'Collapse' : 'Expand'}
          >
            <AnimatePresence mode="wait">
              {isExpanded ? (
                <motion.div
                  key="collapse"
                  initial={{ rotate: 180 }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronUp className="w-4 h-4" />
                </motion.div>
              ) : (
                <motion.div
                  key="expand"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Additional Actions (when expanded) */}
      <AnimatePresence>
        {isOpen && isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-4 space-y-2"
          >
            <div className="flex items-center space-x-2">
              <button
                onClick={() => window.open('https://www.linkedin.com/company/zion-tech-group', '_blank')}
                className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
                aria-label="Follow us on LinkedIn"
                title="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
              {showLabels && (
                <span className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium">
                  Follow on LinkedIn
                </span>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => window.open('https://twitter.com/ziontechgroup', '_blank')}
                className="bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-sky-300"
                aria-label="Follow us on Twitter"
                title="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
              {showLabels && (
                <span className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium">
                  Follow on Twitter
                </span>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => window.open('https://www.facebook.com/ziontechgroup', '_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
                aria-label="Like us on Facebook"
                title="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              {showLabels && (
                <span className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium">
                  Like on Facebook
                </span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
