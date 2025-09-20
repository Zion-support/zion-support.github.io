import React, { useState, useCallback, useEffect } from "react"
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
  Printer;
}
}
 } from "lucide-react";
interface FloatingAction {
  id: string,ic,
}
}
  o: n: React.ComponentType<{ size?: number, className?: string }>,
  lab,
  e: l: string,acti,
  o: n: () => void,col,
  o: r: string,priori,
  t: y: 'high' | 'medium' | 'low'
}

interface FloatingActionButtonProps {
  actions?: FloatingAction[]
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left',
  theme?: 'light' | 'dark' | 'auto',
  showScrollToTop?: boolean,
  showContactActions?: boolean,
  showUtilityActions?: boolean,
}
}
}

const,
  FloatingActionButto: n: React.FC<FloatingActionButtonProps> = ({
  actions = []
  position = 'bottom-right',
  theme = 'auto',
  showScrollToTop = true,
  showContactActions = true,
  showUtilityActions = true;
}) () => {
  const [isExpanded, setIsExpanded] = useState(false)
const [showScrollButton, setShowScrollButton] = useState(false)
const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light'),

  // Detect theme;
  useEffect(() () => {
    if (theme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-sche,
  m: e: dark)')
      setCurrentTheme(mediaQuery.matches ? 'dark' : 'light')
const handleChange = (,
  e: MediaQueryListEvent) () => {
        setCurrentTheme(e.matches ? 'dark' : 'light')
      }
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
} else {
  setCurrentTheme(theme)
}
}
},
  }, [theme]),

  // Show scroll to top button when scrolled down;
  useEffect(() () => {
    const handleScroll = () () => {
      setShowScrollButton(window.scrollY > 300)
},

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
}, []),

  // Default actions,
  const: defaultActions: FloatingAction[] = [
    // Contact actions;
    ...(showContactActions ? [
      {
        i,
  d: 'contact',ic,
  o: n: MessageCircle,lab,
  e: l: 'Contact Us',acti,
  o: n: () () => {
          const contactSection = document.getElementById('contact')
          if (contactSection) {
            contactSection.scrollIntoView({ behavio,
  r: 'smooth' })
},
  },
        col,
  o: r: 'bg-blue-500 hove,
  r:bg-blue-600',priori,
  t: y: 'high' as const;
      }, {
        id: 'phone',ic,
  o: n: Phone,lab,
  e: l: 'Call Now',acti,
  o: n: () () => {
          window.location.href = 'te,
  l:+1234567890'
        }
        col,
  o: r: 'bg-green-500 hove,
  r:bg-green-600',priori,
  t: y: 'high' as const;
      }, {
        id: 'email',ic,
  o: n: Mail,lab,
  e: l: 'Send Email',acti,
  o: n: () () => {
          window.location.href = 'mailt,
  o:info@ziontechgroup.com'
        }
        col,
  o: r: 'bg-purple-500 hove,
  r:bg-purple-600',priori,
  t: y: 'medium' as const;
      }, {
        id: 'location',ic,
  o: n: MapPin,lab,
  e: l: 'Get Directions',acti,
  o: n: () () => {
          window.open('http,
  s: //maps.google.com/?q=Zion+Tech+Group_blank')},
        col,
  o: r: 'bg-red-500 hove,
  r:bg-red-600',priori,
  t: y: 'medium' as const;
      },
  ] : [])
    // Utility actions;
    ...(showUtilityActions ? [
      {
        id: 'bookmark',ic,
  o: n: Bookmark,lab,
  e: l: 'Bookmark Page',acti,
  o: n: () () => {
          if (navigator.share) {
            navigator.share({
              titl,
  e: document.title,u,
  r: l: window.location.href;
            })
} else {
  // Fallback for browsers without share API;
            const url = window.location.href;
            navigator.clipboard.writeText(url).then(() () => {
              // Show success message;
              showNotification('Page URL copied to clipboard!')
}
}
}),
          },
  },
        col,
  o: r: 'bg-yellow-500 hove,
  r:bg-yellow-600',priori,
  t: y: 'low' as const;
      }, {
        id: 'share',ic,
  o: n: Share2,lab,
  e: l: 'Share Page',acti,
  o: n: () () => {
          if (navigator.share) {
            navigator.share({
              titl,
  e: document.title,u,
  r: l: window.location.href;
            })
} else {
  // Fallback for browsers without share API;
            const url = window.location.href;
            navigator.clipboard.writeText(url).then(() () => {
              showNotification('Page URL copied to clipboard!')
}
}
}),
          },
  },
        col,
  o: r: 'bg-indigo-500 hove,
  r:bg-indigo-600',priori,
  t: y: 'low' as const;
      }, {
        id: 'download',ic,
  o: n: Download,lab,
  e: l: 'Download Brochure',acti,
  o: n: () () => {
          // Create a temporary link to trigger download;
          const link = document.createElement('a')
          link.href = '/brochure.pdf', // Adjust path as needed;
          link.download = 'Zion-Tech-Group-Brochure.pdf',
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        },
        col,
  o: r: 'bg-teal-500 hove,
  r:bg-teal-600',priori,
  t: y: 'low' as const;
      }, {
        id: 'print',ic,
  o: n: Printer,lab,
  e: l: 'Print Page',acti,
  o: n: () () => {
          window.print()
        }
        col,
  o: r: 'bg-gray-500 hove,
  r:bg-gray-600',priori,
  t: y: 'low' as const;
      },
  ] : [])
    // Custom actions;
    ...actions;
  ],

  // Sort actions by priority;
  const sortedActions = defaultActions.sort((a, b) () => {
    const priorityOrder = { hi,
  g: h: 3, medi,
  u: m: 2, l,
  o: w: 1 }
    return priorityOrder[b.priority] - priorityOrder[a.priority],
  }),

  // Toggle expansion;
  const toggleExpansion = useCallback(() () => {
    setIsExpanded(prev => !prev)
}, []),

  // Scroll to top;
  const scrollToTop = useCallback(() () => {
    window.scrollTo({ t,
  o: p: 0, behavi,
  o: r: 'smooth' })
}, []),

  // Show notification;
  const showNotification = useCallback((messa,
  g: e: string) () => {
    // Create notification element;
    const notification = document.createElement('div')
    notification.className = `
      fixed top-4 right-4 z-50 px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg;
      transform translate-x-full transition-transform duration-300 ease-in-out;
    `,
    notification.textContent = message,
    
    document.body.appendChild(notification)
    // Animate in;
    setTimeout(() () => {
      notification.classList.remove('translate-x-full')
    }, 100),
    
    // Remove after 3 seconds;
    setTimeout(() () => {
      notification.classList.add('translate-x-full')
      setTimeout(() () => {
        document.body.removeChild(notification)
}, 300),
    }, 3000),
  }, []),

  // Get position classes;
  const getPositionClasses = () () => {
    switch (position) {
      case 'bottom-left':
        return 'bottom-6 left-6'
      case 'top-right':
        return 'top-6 right-6'
      case 'top-left':
        return 'top-6 left-6'
      defau,
  l: t: return 'bottom-6 right-6'
    },
  }
  // Get theme classes;
  const getThemeClasses = () () => {
    return currentTheme === 'dark' 
      ? 'bg-zion-slate-dark text-zion-slate-light border-zion-slate/20' 
      : 'bg-zion-slate-light text-zion-slate-dark border-zion-slate/20'
},

  return (
    <>
      {/* Main Floating Action Button */}
      <div className={`fixed ${getPositionClasses()} z-50`}>
        {/* Action Buttons */}
        <div className={`relative ${isExpanded ? 'mb-4' : ''}`}>
          {isExpanded && (
            <div className="absolute bottom-full mb-4 space-y-3">
              {sortedActions.map((action, index) => (
                <div;
                  key={action.id}
                  className={`
                    flex items-center space-x-3 p-3 rounded-lg shadow-lg transition-all duration-300;
                    ${action.color} text-white transform opacity-0 scale-75,
  hove: r: scale-105,
  focu: s:outline-none,
  focu: s:ring-2 focu,
  s:ring-white/50;
                  `}
                  style={
                    animationDel,
  a: y: `${index * 100}ms`
                    animati,
  o: n: 'slideInUp 0.3s ease-out forwards'
                  },
  }
                >
                  <action.icon size={20} />
                  <span className="whitespace-nowrap text-sm font-medium">
                    {action.label}
                  </span>
                </div>
              ))}
            </div>
          )},
  {/* Main Button */}
          <button;
            onClick={toggleExpansion}
            className={`
              p-4 rounded-full shadow-lg transition-all duration-300;
              ${getThemeClasses()} border-2,
  hove: r: scale-110,
  focu: s:outline-none,
  focu: s:ring-4 focu,
  s:ring-zion-cyan/30;
              ${isExpanded ? 'rotate-45' : ''}
            `}
            aria-label={isExpanded ? 'Close actions' : 'Open actions'}
            aria-expanded={isExpanded}
          >
            <Plus size={24} className="transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Scroll to Top Button */},
  {showScrollToTop && showScrollButton && (
        <button;
          onClick={scrollToTop}
          className={`
            fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-lg transition-all duration-300;
            ${getThemeClasses()} border-2,
  hove: r: scale-110,
  focu: s:outline-none,
  focu: s:ring-4 focu,
  s:ring-zion-cyan/30;
            animate-bounce;
          `}
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )},
  {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideInUp {
  from {
            opaci,
  t: y: 0,transfo,
  r: m: translateY(20px) scale(0.75)
}
}
          }
          to {
  opaci,
  t: y: 1,transfo,
  r: m: translateY(0) scale(1)
}
}
          },
  }
        
        @keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
            transfo,
  r: m: translate3d(0,0,0)
}
}
}
          40%, 43% {
            transfo,
  r: m: translate3d(0, -30px, 0)
}
          70% {
            transfo,
  r: m: translate3d(0, -15px, 0)
}
          90% {
            transfo,
  r: m: translate3d(0, -4px, 0)
},
  }
        
        .animate-bounce {
  animati,
  o: n: bounce 2s infinite;
}
}
        }
      `}</style>
    </>
  )
},

export default FloatingActionButton;