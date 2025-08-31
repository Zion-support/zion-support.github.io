import React, { useState, useCallback, useEffect } from 'react';
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
  Printer
} from 'lucide-react';

interface FloatingAction {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  action: () => void;
  color: string;
  priority?: 'high' | 'medium' | 'low';
}

interface FloatingActionButtonProps extends React.PropsWithChildren<{}> {
  enabled?: boolean;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  theme?: 'light' | 'dark' | 'auto';
  showLabels?: boolean;
  actions?: FloatingAction[];
  onAction?: (action: FloatingAction) => void;
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
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('light');

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

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleAction = useCallback((action: FloatingAction) => {
    action.action();
    if (onAction) {
      onAction(action);
    }
    setIsExpanded(false);
  }, [onAction]);

  if (!enabled) return null;

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6'
  };

  const bgColor = currentTheme === 'dark' ? 'bg-slate-800' : 'bg-white';
  const textColor = currentTheme === 'dark' ? 'text-white' : 'text-slate-900';
  const borderColor = currentTheme === 'dark' ? 'border-slate-700' : 'border-slate-200';

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      {/* Main FAB */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`${bgColor} ${textColor} ${borderColor} w-14 h-14 rounded-full border-2 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Plus size={24} />
        </motion.div>
      </motion.button>

      {/* Expanded Actions */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 space-y-2"
          >
            {/* Contact Actions */}
            <motion.button
              onClick={() => handleAction({
                id: 'contact',
                icon: MessageCircle,
                label: 'Contact Us',
                action: () => window.location.href = '/contact',
                color: 'bg-blue-500'
              })}
              className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <MessageCircle size={20} />
            </motion.button>

            {/* Phone Action */}
            <motion.button
              onClick={() => handleAction({
                id: 'phone',
                icon: Phone,
                label: 'Call Us',
                action: () => window.open('tel:+13024640950'),
                color: 'bg-green-500'
              })}
              className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Phone size={20} />
            </motion.button>

            {/* Email Action */}
            <motion.button
              onClick={() => handleAction({
                id: 'email',
                icon: Mail,
                label: 'Email Us',
                action: () => window.open('mailto:kleber@ziontechgroup.com'),
                color: 'bg-purple-500'
              })}
              className="bg-purple-500 text-white p-3 rounded-full shadow-lg hover:bg-purple-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={20} />
            </motion.button>

            {/* Help Action */}
            <motion.button
              onClick={() => handleAction({
                id: 'help',
                icon: HelpCircle,
                label: 'Get Help',
                action: () => window.location.href = '/help',
                color: 'bg-orange-500'
              })}
              className="bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <HelpCircle size={20} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            onClick={scrollToTop}
            className={`${bgColor} ${textColor} ${borderColor} w-12 h-12 rounded-full border-2 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center mt-2`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
