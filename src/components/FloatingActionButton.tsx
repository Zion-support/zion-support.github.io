import React, { useState, useCallback, useEffect } from 'react';
import { 
  Plus, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp,
  X,
  Settings,
  HelpCircle,
  Star,
  Share2,
  Bookmark,
  Download,
  Printer
} from 'lucide-react';

interface FloatingAction {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  action: () => void;
  color: string;
  priority: 'high' | 'medium' | 'low';
}

interface FloatingActionButtonProps {
  actions?: FloatingAction[];
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  theme?: 'light' | 'dark' | 'auto';
  showScrollToTop?: boolean;
  showContactActions?: boolean;
  showUtilityActions?: boolean;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  actions = [],
  position = 'bottom-right',
  theme = 'auto',
  showScrollToTop = true,
  showContactActions = true,
  showUtilityActions = true
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
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
    return currentTheme === 'dark' 
      ? 'bg-zion-slate-dark text-zion-slate-light border-zion-slate/20' 
      : 'bg-zion-slate-light text-zion-slate-dark border-zion-slate/20';
  };

  return (
    <>
      {/* Main Floating Action Button */}
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
        >
          <ArrowUp size={24} />
        </button>
      )}

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