import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  MessageCircle, 
  Phone, 
  Mail, 
  HelpCircle, 
  Settings, 
  X,
  ChevronUp,
  ChevronDown,
  Star,
  Heart,
  Share2,
  Download,
  Bookmark,
  Calendar,
  MapPin
} from 'lucide-react';

interface FloatingAction {
  id: string;
  icon: React.ComponentType<any>;
  label: string;
  action: () => void;
  color: string;
  priority?: 'high' | 'medium' | 'low';
}

interface FloatingActionButtonProps {
  enabled: boolean;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  theme?: 'light' | 'dark' | 'auto';
  showLabels?: boolean;
  actions?: FloatingAction[];
  onAction?: (actionId: string) => void;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  enabled = true,
  position = 'bottom-right',
  theme = 'auto',
  showLabels = true,
  actions = [],
  onAction
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
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

  // Theme classes
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

  return (
    <div className={`fixed z-50 ${getPositionClasses()}`}>
      {/* Main Floating Action Button */}
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
        >
          <span className="text-xs text-white font-bold">
            {finalActions.filter(action => action.priority === 'high').length}
          </span>
        </motion.div>
      )}

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
