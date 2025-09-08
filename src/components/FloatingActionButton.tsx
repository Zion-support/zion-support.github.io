import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Calendar,
  FileText,
  Download,
  Share2,
  Settings,
  HelpCircle,
  Star,
  Heart,
  Bookmark,
  Search,
  Zap,
  Target,
  Rocket,
  Atom,
  Cloud,
  Database,
  Workflow,
  Lock,
  BarChart3,
  Code,
  Server,
  Chip,
  ShieldCheck,
  Globe2,
  Bot,
  Eye,
  Sparkles,
  DollarSign,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  Users,
  Users2,
  Settings as SettingsIcon
} from 'lucide-react';

interface FloatingAction {
  id: string;
  name: string;
  description: string;
  icon: any;
  color: string;
  action: () => void;
  category: 'communication' | 'navigation' | 'tools' | 'social' | 'custom';
}

interface FloatingActionButtonProps {
  enabled?: boolean;
  showLabels?: boolean;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  theme?: 'light' | 'dark' | 'auto';
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  enabled = true,
  showLabels = true,
  position = 'bottom-right',
  theme = 'auto'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAction, setActiveAction] = useState<string | null>(null);
  const [hoveredAction, setHoveredAction] = useState<string | null>(null);
  const fabRef = useRef<HTMLDivElement>(null);

  // Default floating actions
  const defaultActions: FloatingAction[] = [
    {
      id: 'contact',
      name: 'Contact Us',
      description: 'Get in touch with our team',
      icon: MessageCircle,
      color: 'from-blue-500 to-blue-600',
      action: () => {
        window.location.href = '/contact';
      },
      category: 'communication'
    },
    {
      id: 'phone',
      name: 'Call Now',
      description: 'Call us directly',
      icon: Phone,
      color: 'from-green-500 to-green-600',
      action: () => {
        window.location.href = 'tel:+13024640950';
      },
      category: 'communication'
    },
    {
      id: 'email',
      name: 'Send Email',
      description: 'Send us an email',
      icon: Mail,
      color: 'from-purple-500 to-purple-600',
      action: () => {
        window.location.href = 'mailto:kleber@ziontechgroup.com';
      },
      category: 'communication'
    },
    {
      id: 'location',
      name: 'Visit Us',
      description: 'Find our location',
      icon: MapPin,
      color: 'from-red-500 to-red-600',
      action: () => {
        window.open('https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709', '_blank');
      },
      category: 'navigation'
    },
    {
      id: 'schedule',
      name: 'Schedule Demo',
      description: 'Book a demo session',
      icon: Calendar,
      color: 'from-orange-500 to-orange-600',
      action: () => {
        window.location.href = '/demo';
      },
      category: 'tools'
    },
    {
      id: 'quote',
      name: 'Get Quote',
      description: 'Request a custom quote',
      icon: DollarSign,
      color: 'from-yellow-500 to-yellow-600',
      action: () => {
        window.location.href = '/quote';
      },
      category: 'tools'
    },
    {
      id: 'download',
      name: 'Download Brochure',
      description: 'Get our company brochure',
      icon: Download,
      color: 'from-indigo-500 to-indigo-600',
      action: () => {
        // Simulate download
        const link = document.createElement('a');
        link.href = '/brochure.pdf';
        link.download = 'Zion-Tech-Group-Brochure.pdf';
        link.click();
      },
      category: 'tools'
    },
    {
      id: 'share',
      name: 'Share Page',
      description: 'Share this page',
      icon: Share2,
      color: 'from-pink-500 to-pink-600',
      action: () => {
        if (navigator.share) {
          navigator.share({
            title: 'Zion Tech Group',
            url: window.location.href
          });
        } else {
          // Fallback to copying URL
          navigator.clipboard.writeText(window.location.href);
          // Show success message
          setActiveAction('share');
          setTimeout(() => setActiveAction(null), 2000);
        }
      },
      category: 'social'
    }
  ];

  // Handle action click
  const handleActionClick = (action: FloatingAction) => {
    setActiveAction(action.id);
    action.action();
    
    // Close the FAB after action
    setTimeout(() => {
      setIsOpen(false);
      setActiveAction(null);
    }, 500);
  };

  // Close FAB when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (fabRef.current && !fabRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Get position classes
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

  // Get theme classes
  const getThemeClasses = () => {
    switch (theme) {
      case 'light':
        return 'bg-white text-gray-900 shadow-lg border border-gray-200';
      case 'dark':
        return 'bg-gray-900 text-white shadow-2xl border border-gray-700';
      default:
        return 'bg-black/80 backdrop-blur-xl text-white border border-white/10';
    }
  };

  if (!enabled) return null;

  return (
    <div ref={fabRef} className={`fixed z-50 ${getPositionClasses()}`}>
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group ${getThemeClasses()}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? 'Close actions' : 'Open actions'}
        aria-expanded={isOpen}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Plus className="w-8 h-8" />
        </motion.div>

      {/* Action Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full right-0 mb-4 p-2 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl min-w-64"
          >
            {/* Header */}
            <div className="px-3 py-2 border-b border-white/10 mb-2">
              <h3 className="text-sm font-semibold text-white">Quick Actions</h3>
              <p className="text-xs text-gray-400">Access common features quickly</p>
            </div>

            {/* Actions Grid */}
            <div className="grid grid-cols-1 gap-2">
              {defaultActions.map((action, index) => (
                <motion.button
                  key={action.id}
                  onClick={() => handleActionClick(action)}
                  onMouseEnter={() => setHoveredAction(action.id)}
                  onMouseLeave={() => setHoveredAction(null)}
                  className={`p-3 rounded-lg transition-all duration-200 text-left group ${
                    activeAction === action.id
                      ? 'bg-green-500/20 border border-green-500/30'
                      : hoveredAction === action.id
                      ? 'bg-white/10 border border-white/20'
                      : 'bg-white/5 border border-transparent hover:bg-white/10'
                  }`}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                      <action.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                        {action.name}
                      </div>
                      {showLabels && (
                        <div className="text-xs text-gray-400 mt-1 line-clamp-2">
                          {action.description}
                        </div>
                      )}
                    </div>
                    {activeAction === action.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                      >
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Footer */}
            <div className="px-3 py-2 border-t border-white/10 mt-2">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>Press ESC to close</span>
                <span className="flex items-center space-x-1">
                  <Zap className="w-3 h-3" />
                  <span>Quick Access</span>
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Indicator */}
      <AnimatePresence>
        {activeAction && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
          >
            <div className="w-3 h-3 bg-white rounded-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingActionButton;
