<<<<<<< HEAD
import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
=======
import React, { useState, useCallback, useEffect } from 'react';
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
import { 
  Plus, 
  MessageCircle, 
  Phone, 
  Mail, 
<<<<<<< HEAD
  HelpCircle, 
  Settings, 
=======
  MapPin, 
  ArrowUp,
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  X,
  ChevronUp,
  ChevronDown,
  Star,
  Heart,
  Share2,
  Download,
<<<<<<< HEAD
  Bookmark,
  Calendar,
  MapPin
=======
  Printer
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
} from 'lucide-react';
interface FloatingAction {
  id: string;
  icon: React.ComponentType<any>;
  label: string;
  action: () => void;
  color: string;
  priority?: 'high' | 'medium' | 'low';
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
interface FloatingActionButtonProps {
  enabled: boolean;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  theme?: 'light' | 'dark' | 'auto';
  showLabels?: boolean;
  actions?: FloatingAction[];
  onAction?: (actionId: string) => void;
}
<<<<<<< HEAD

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  enabled = true,
=======
const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  actions = [],
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  position = 'bottom-right',
  theme = 'auto',
  showLabels = true,
  actions = [],
  onAction
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
<<<<<<< HEAD
  const [isHovered, setIsHovered] = useState(false);

  // Default actions if none provided
  const defaultActions: FloatingAction[] = [
    {
      id: 'contact',
      icon: MessageCircle,
      label: 'Contact Us',
      action: () => window.location.href = '/contact',
      color: 'from-blue-500 to-cyan-500',
      priority: 'high'
    },
    {
      id: 'phone',
      icon: Phone,
      label: 'Call Now',
      action: () => window.location.href = 'tel:+13024640950',
      color: 'from-green-500 to-emerald-500',
      priority: 'high'
    },
    {
      id: 'email',
      icon: Mail,
      label: 'Send Email',
      action: () => window.location.href = 'mailto:kleber@ziontechgroup.com',
      color: 'from-purple-500 to-pink-500',
      priority: 'medium'
    },
    {
      id: 'help',
      icon: HelpCircle,
      label: 'Get Help',
      action: () => window.location.href = '/support',
      color: 'from-orange-500 to-red-500',
      priority: 'medium'
    },
    {
      id: 'services',
      icon: Star,
      label: 'Our Services',
      action: () => window.location.href = '/services',
      color: 'from-yellow-500 to-orange-500',
      priority: 'low'
    },
    {
      id: 'about',
      icon: Heart,
      label: 'About Us',
      action: () => window.location.href = '/about',
      color: 'from-pink-500 to-rose-500',
      priority: 'low'
    }
  ];

  const finalActions = actions.length > 0 ? actions : defaultActions;

  // Position classes
=======
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');
  // Detect theme
  useEffect(() => {
    if (theme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setCurrentTheme(mediaQuery.matches ? 'dark' : 'light');
      const handleChange = (e: MediaQueryListEvent) => {
        setCurrentTheme(e.matches ? 'dark' : 'light');
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      setCurrentTheme(theme);
    }
  }, [theme]);
  // Show scroll to top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Default actions
  const defaultActions: FloatingAction[] = [
    // Contact actions
    ...(showContactActions ? [
      {
        id: 'contact',
        icon: MessageCircle,
        label: 'Contact Us',
        action: () => {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        },
        color: 'bg-blue-500 hover:bg-blue-600',
        priority: 'high' as const
      },
      {
        id: 'phone',
        icon: Phone,
        label: 'Call Now',
        action: () => {
          window.location.href = 'tel:+1234567890';
        },
        color: 'bg-green-500 hover:bg-green-600',
        priority: 'high' as const
      },
      {
        id: 'email',
        icon: Mail,
        label: 'Send Email',
        action: () => {
          window.location.href = 'mailto:info@ziontechgroup.com';
        },
        color: 'bg-purple-500 hover:bg-purple-600',
        priority: 'medium' as const
      },
      {
        id: 'location',
        icon: MapPin,
        label: 'Get Directions',
        action: () => {
          window.open('https://maps.google.com/?q=Zion+Tech+Group', '_blank');
        },
        color: 'bg-red-500 hover:bg-red-600',
        priority: 'medium' as const
      }
    ] : []),
    // Utility actions
    ...(showUtilityActions ? [
      {
        id: 'bookmark',
        icon: Bookmark,
        label: 'Bookmark Page',
        action: () => {
          if (navigator.share) {
            navigator.share({
              title: document.title,
              url: window.location.href
            });
          } else {
            // Fallback for browsers without share API
            const url = window.location.href;
            navigator.clipboard.writeText(url).then(() => {
              // Show success message
              showNotification('Page URL copied to clipboard!');
            });
          }
        },
        color: 'bg-yellow-500 hover:bg-yellow-600',
        priority: 'low' as const
      },
      {
        id: 'share',
        icon: Share2,
        label: 'Share Page',
        action: () => {
          if (navigator.share) {
            navigator.share({
              title: document.title,
              url: window.location.href
            });
          } else {
            // Fallback for browsers without share API
            const url = window.location.href;
            navigator.clipboard.writeText(url).then(() => {
              showNotification('Page URL copied to clipboard!');
            });
          }
        },
        color: 'bg-indigo-500 hover:bg-indigo-600',
        priority: 'low' as const
      },
      {
        id: 'download',
        icon: Download,
        label: 'Download Brochure',
        action: () => {
          // Create a temporary link to trigger download
          const link = document.createElement('a');
          link.href = '/brochure.pdf'; // Adjust path as needed
          link.download = 'Zion-Tech-Group-Brochure.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        },
        color: 'bg-teal-500 hover:bg-teal-600',
        priority: 'low' as const
      },
      {
        id: 'print',
        icon: Printer,
        label: 'Print Page',
        action: () => {
          window.print();
        },
        color: 'bg-gray-500 hover:bg-gray-600',
        priority: 'low' as const
      }
    ] : []),
    // Custom actions
    ...actions
  ];
  // Sort actions by priority
  const sortedActions = defaultActions.sort((a, b) => {
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    return priorityOrder[b.priority] - priorityOrder[a.priority];
  });
  // Toggle expansion
  const toggleExpansion = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);
  // Scroll to top
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  // Show notification
  const showNotification = useCallback((message: string) => {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `
      fixed top-4 right-4 z-50 px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg
      transform translate-x-full transition-transform duration-300 ease-in-out
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    // Animate in
    setTimeout(() => {
      notification.classList.remove('translate-x-full');
    }, 100);
    // Remove after 3 seconds
    setTimeout(() => {
      notification.classList.add('translate-x-full');
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }, []);
  // Get position classes
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  const getPositionClasses = () => {
    switch (position) {
      case 'bottom-left':
        return 'bottom-6 left-6';
      case 'top-right':
        return 'top-6 right-6';
      case 'top-left':
        return 'top-6 left-6';
      default:
        return 'bottom-6 right-6';
    }
  };
<<<<<<< HEAD

  // Theme classes
=======
  // Get theme classes
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  const getThemeClasses = () => {
    switch (theme) {
      case 'light':
        return 'bg-white text-gray-900 shadow-lg border border-gray-200';
      case 'dark':
        return 'bg-gray-900 text-white shadow-lg border border-gray-700';
      default:
        return 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-lg border border-gray-200 dark:border-gray-700';
    }
  };
<<<<<<< HEAD

  // Handle action click
  const handleActionClick = useCallback((action: FloatingAction) => {
    action.action();
    if (onAction) {
      onAction(action.id);
    }
    setIsExpanded(false);
  }, [onAction]);

  // Handle main button click
  const handleMainButtonClick = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  // Handle hover
  const handleHover = useCallback((hovering: boolean) => {
    setIsHovered(hovering);
  }, []);

  if (!enabled) return null;

=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  return (
    <div className={`fixed z-50 ${getPositionClasses()}`}>
      {/* Main Floating Action Button */}
<<<<<<< HEAD
      <motion.button
        onClick={handleMainButtonClick}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        className={`w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isExpanded ? 'Close actions' : 'Open actions'}
        aria-expanded={isExpanded}
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
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

      {/* Action Buttons */}
      <AnimatePresence>
        {isExpanded && (
          <div className="absolute bottom-16 right-0 space-y-3">
            {finalActions.map((action, index) => (
              <motion.div
                key={action.id}
                initial={{ 
                  opacity: 0, 
                  scale: 0.8, 
                  x: position.includes('right') ? 50 : -50,
                  y: 0
                }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  x: 0,
                  y: 0
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.8, 
                  x: position.includes('right') ? 50 : -50,
                  y: 0
                }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                className="flex items-center space-x-3"
              >
                {/* Action Button */}
                <motion.button
                  onClick={() => handleActionClick(action)}
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${action.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={action.label}
                  onMouseEnter={() => handleHover(true)}
                  onMouseLeave={() => handleHover(false)}
                >
                  <action.icon className="w-5 h-5" />
                </motion.button>

                {/* Label */}
                {showLabels && (
                  <motion.button
                    initial={{ opacity: 0, x: position.includes('right') ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: position.includes('right') ? 20 : -20 }}
                    transition={{ duration: 0.2, delay: index * 0.1 + 0.1 }}
                    className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${getThemeClasses()}`}
                  >
                    {action.label}
                  </motion.button>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Quick Actions Bar (when hovered) */}
      <AnimatePresence>
        {isHovered && !isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-16 right-0 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-2"
          >
            <div className="flex space-x-2">
              {finalActions.slice(0, 3).map((action) => (
                <motion.button
                  key={action.id}
                  onClick={() => handleActionClick(action)}
                  className={`w-10 h-10 rounded-lg bg-gradient-to-r ${action.color} text-white flex items-center justify-center hover:scale-110 transition-transform duration-200`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={action.label}
                >
                  <action.icon className="w-4 h-4" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Priority Indicator */}
      {finalActions.some(action => action.priority === 'high') && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
=======
      <div className={`fixed ${getPositionClasses()} z-50`}>
        {/* Action Buttons */}
        <div className={`relative ${isExpanded ? 'mb-4' : ''}`}>
          {isExpanded && (
            <div className="absolute bottom-full mb-4 space-y-3">
              {sortedActions.map((action, index) => (
                <div
                  key={action.id}
                  className={`
                    flex items-center space-x-3 p-3 rounded-lg shadow-lg transition-all duration-300
                    ${action.color} text-white transform opacity-0 scale-75
                    hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50
                  `}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'slideInUp 0.3s ease-out forwards'
                  }}
                >
                  <action.icon size={20} />
                  <span className="whitespace-nowrap text-sm font-medium">
                    {action.label}
                  </span>
                </div>
              ))}
            </div>
          )}
          {/* Main Button */}
          <button
            onClick={toggleExpansion}
            className={`
              p-4 rounded-full shadow-lg transition-all duration-300
              ${getThemeClasses()} border-2
              hover:scale-110 focus:outline-none focus:ring-4 focus:ring-zion-cyan/30
              ${isExpanded ? 'rotate-45' : ''}
            `}
            aria-label={isExpanded ? 'Close actions' : 'Open actions'}
            aria-expanded={isExpanded}
          >
            <Plus size={24} className="transition-transform duration-300" />
          </button>
        </div>
      </div>
      {/* Scroll to Top Button */}
      {showScrollToTop && showScrollButton && (
        <button
          onClick={scrollToTop}
          className={`
            fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-lg transition-all duration-300
            ${getThemeClasses()} border-2
            hover:scale-110 focus:outline-none focus:ring-4 focus:ring-zion-cyan/30
            animate-bounce
          `}
          aria-label="Scroll to top"
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
        >
          <span className="text-xs text-white font-bold">
            {finalActions.filter(action => action.priority === 'high').length}
          </span>
        </motion.div>
      )}
<<<<<<< HEAD

      {/* Contextual Actions (based on current page) */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="absolute bottom-16 right-0 mt-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => window.location.href = '/pricing'}
                className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Pricing</span>
              </button>
              <button
                onClick={() => window.location.href = '/case-studies'}
                className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <Bookmark className="w-4 h-4" />
                <span>Case Studies</span>
              </button>
              <button
                onClick={() => window.location.href = '/events'}
                className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Events</span>
              </button>
              <button
                onClick={() => window.location.href = '/locations'}
                className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>Locations</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
=======
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.75);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0, -30px, 0);
          }
          70% {
            transform: translate3d(0, -15px, 0);
          }
          90% {
            transform: translate3d(0, -4px, 0);
          }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </>
  );
};
export default FloatingActionButton;
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
