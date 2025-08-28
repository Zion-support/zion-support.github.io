import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  MessageCircle, 
  Phone, 
  Mail, 
  ArrowUp, 
  Settings, 
  HelpCircle,
  X,
  ChevronUp,
  ChevronDown
} from 'lucide-react';

interface FloatingAction {
  id: string;
  icon: React.ComponentType<any>;
  label: string;
  action: () => void;
  color: string;
  bgColor: string;
  hoverBgColor: string;
}

interface FloatingActionButtonProps {
  actions?: FloatingAction[];
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  showScrollToTop?: boolean;
  showSettings?: boolean;
  showHelp?: boolean;
  onScrollToTop?: () => void;
  onSettings?: () => void;
  onHelp?: () => void;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  actions = [],
  position = 'bottom-right',
  showScrollToTop = true,
  showSettings = true,
  showHelp = true,
  onScrollToTop,
  onSettings,
  onHelp
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Default actions
  const defaultActions: FloatingAction[] = [
    {
      id: 'contact',
      icon: MessageCircle,
      label: 'Contact Us',
      action: () => window.location.href = '/contact',
      color: 'text-white',
      bgColor: 'bg-blue-600',
      hoverBgColor: 'hover:bg-blue-700'
    },
    {
      id: 'phone',
      icon: Phone,
      label: 'Call Now',
      action: () => window.location.href = 'tel:+13024640950',
      color: 'text-white',
      bgColor: 'bg-green-600',
      hoverBgColor: 'hover:bg-green-700'
    },
    {
      id: 'email',
      icon: Mail,
      label: 'Send Email',
      action: () => window.location.href = 'mailto:kleber@ziontechgroup.com',
      color: 'text-white',
      bgColor: 'bg-purple-600',
      hoverBgColor: 'hover:bg-purple-700'
    }
  ];

  // Merge custom actions with defaults
  const allActions = [...actions, ...defaultActions];

  // Position classes
  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6'
  };

  // Scroll to top functionality
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    if (onScrollToTop) {
      onScrollToTop();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSettings = () => {
    if (onSettings) {
      onSettings();
    }
    setIsOpen(false);
  };

  const handleHelp = () => {
    if (onHelp) {
      onHelp();
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Main Floating Action Button */}
      <div className={`fixed ${positionClasses[position]} z-50`}>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
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

        {/* Action Buttons */}
        <AnimatePresence>
          {isOpen && (
            <div className="absolute bottom-16 right-0 space-y-3">
              {allActions.map((action, index) => (
                <motion.div
                  key={action.id}
                  initial={{ scale: 0, opacity: 0, x: 20 }}
                  animate={{ scale: 1, opacity: 1, x: 0 }}
                  exit={{ scale: 0, opacity: 0, x: 20 }}
                  transition={{ 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                  className="flex items-center space-x-3"
                >
                  {/* Action Button */}
                  <motion.button
                    onClick={action.action}
                    className={`w-12 h-12 ${action.bgColor} ${action.color} rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${action.hoverBgColor}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <action.icon className="w-5 h-5" />
                  </motion.button>
                  
                  {/* Label */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.1 }}
                    className="bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg whitespace-nowrap"
                  >
                    {action.label}
                  </motion.div>
                </motion.div>
              ))}

              {/* Settings Button */}
              {showSettings && (
                <motion.div
                  initial={{ scale: 0, opacity: 0, x: 20 }}
                  animate={{ scale: 1, opacity: 1, x: 0 }}
                  exit={{ scale: 0, opacity: 0, x: 20 }}
                  transition={{ 
                    delay: allActions.length * 0.1 + 0.1,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                  className="flex items-center space-x-3"
                >
                  <motion.button
                    onClick={handleSettings}
                    className="w-12 h-12 bg-gray-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:bg-gray-700"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Settings className="w-5 h-5" />
                  </motion.button>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: allActions.length * 0.1 + 0.2 }}
                    className="bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg whitespace-nowrap"
                  >
                    Settings
                  </motion.div>
                </motion.div>
              )}

              {/* Help Button */}
              {showHelp && (
                <motion.div
                  initial={{ scale: 0, opacity: 0, x: 20 }}
                  animate={{ scale: 1, opacity: 1, x: 0 }}
                  exit={{ scale: 0, opacity: 0, x: 20 }}
                  transition={{ 
                    delay: (allActions.length + (showSettings ? 1 : 0)) * 0.1 + 0.1,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                  className="flex items-center space-x-3"
                >
                  <motion.button
                    onClick={handleHelp}
                    className="w-12 h-12 bg-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:bg-orange-700"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <HelpCircle className="w-5 h-5" />
                  </motion.button>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (allActions.length + (showSettings ? 1 : 0)) * 0.1 + 0.2 }}
                    className="bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg whitespace-nowrap"
                  >
                    Help
                  </motion.div>
                </motion.div>
              )}
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll to Top Button */}
      {showScrollToTop && isScrolled && (
        <motion.button
          onClick={handleScrollToTop}
          className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}
    </>
  );
};
