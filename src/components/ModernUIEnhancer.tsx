import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModernUIEnhancerProps {
  enabled?: boolean;
  enableDarkMode?: boolean;
  enableAnimations?: boolean;
  enableGlassmorphism?: boolean;
  enableGradients?: boolean;
  enableShadows?: boolean;
  enableHoverEffects?: boolean;
  enableSmoothScrolling?: boolean;
  enableParallax?: boolean;
  enableCursorEffects?: boolean;
  enableLoadingStates?: boolean;
  enableMicroInteractions?: boolean;
}

interface UITheme {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
}

export const ModernUIEnhancer: React.FC<ModernUIEnhancerProps> = ({
  enabled = true,
  enableDarkMode = true,
  enableAnimations = true,
  enableGlassmorphism = true,
  enableGradients = true,
  enableShadows = true,
  enableHoverEffects = true,
  enableSmoothScrolling = true,
  enableParallax = true,
  enableCursorEffects = true,
  enableLoadingStates = true,
  enableMicroInteractions = true
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<UITheme>({
    name: 'default',
    primary: '#3B82F6',
    secondary: '#8B5CF6',
    accent: '#10B981',
    background: '#FFFFFF',
    surface: '#F8FAFC',
    text: '#1F2937',
    textSecondary: '#6B7280'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const cursorRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Initialize UI enhancements
  useEffect(() => {
    if (!enabled) return;

    // Load saved theme preference
    const savedTheme = localStorage.getItem('zion-ui-theme');
    if (savedTheme) {
      try {
        const parsed = JSON.parse(savedTheme);
        setCurrentTheme(parsed);
        if (parsed.name === 'dark') {
          setIsDarkMode(true);
        }
      } catch (error) {
        console.warn('Failed to parse saved theme:', error);
      }
    }

    // Check system preference
    if (enableDarkMode) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDarkMode(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [enabled, enableDarkMode]);

  // Apply theme changes
  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    const body = document.body;

    // Apply theme colors
    root.style.setProperty('--color-primary', currentTheme.primary);
    root.style.setProperty('--color-secondary', currentTheme.secondary);
    root.style.setProperty('--color-accent', currentTheme.accent);
    root.style.setProperty('--color-background', currentTheme.background);
    root.style.setProperty('--color-surface', currentTheme.surface);
    root.style.setProperty('--color-text', currentTheme.text);
    root.style.setProperty('--color-text-secondary', currentTheme.textSecondary);

    // Apply dark mode
    if (isDarkMode) {
      body.classList.add('dark');
      root.style.setProperty('--color-background', '#0F172A');
      root.style.setProperty('--color-surface', '#1E293B');
      root.style.setProperty('--color-text', '#F8FAFC');
      root.style.setProperty('--color-text-secondary', '#94A3B8');
    } else {
      body.classList.remove('dark');
    }

    // Save theme preference
    localStorage.setItem('zion-ui-theme', JSON.stringify(currentTheme));
  }, [enabled, currentTheme, isDarkMode]);

  // Setup smooth scrolling
  useEffect(() => {
    if (!enabled || !enableSmoothScrolling) return;

    const html = document.documentElement;
    html.style.scrollBehavior = 'smooth';

    return () => {
      html.style.scrollBehavior = 'auto';
    };
  }, [enabled, enableSmoothScrolling]);

  // Setup scroll progress tracking
  useEffect(() => {
    if (!enabled || !enableParallax) return;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enabled, enableParallax]);

  // Setup cursor effects
  useEffect(() => {
    if (!enabled || !enableCursorEffects) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enabled, enableCursorEffects]);

  // Setup loading states
  useEffect(() => {
    if (!enabled || !enableLoadingStates) return;

    const handleRouteChange = () => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 500);
    };

    // Listen for route changes (you might need to adapt this based on your routing setup)
    window.addEventListener('popstate', handleRouteChange);
    
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, [enabled, enableLoadingStates]);

  // Setup micro-interactions
  useEffect(() => {
    if (!enabled || !enableMicroInteractions) return;

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [role="button"]');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        element.classList.add('micro-interaction-hover');
      });
      
      element.addEventListener('mouseleave', () => {
        element.classList.remove('micro-interaction-hover');
      });
    });

    return () => {
      interactiveElements.forEach(element => {
        element.classList.remove('micro-interaction-hover');
      });
    };
  }, [enabled, enableMicroInteractions]);

  // Toggle dark mode
  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, []);

  // Change theme
  const changeTheme = useCallback((themeName: string) => {
    const themes: Record<string, UITheme> = {
      default: {
        name: 'default',
        primary: '#3B82F6',
        secondary: '#8B5CF6',
        accent: '#10B981',
        background: '#FFFFFF',
        surface: '#F8FAFC',
        text: '#1F2937',
        textSecondary: '#6B7280'
      },
      ocean: {
        name: 'ocean',
        primary: '#0EA5E9',
        secondary: '#6366F1',
        accent: '#06B6D4',
        background: '#F0F9FF',
        surface: '#E0F2FE',
        text: '#0C4A6E',
        textSecondary: '#0369A1'
      },
      sunset: {
        name: 'sunset',
        primary: '#F59E0B',
        secondary: '#EF4444',
        accent: '#F97316',
        background: '#FFFBEB',
        surface: '#FEF3C7',
        text: '#92400E',
        textSecondary: '#B45309'
      },
      forest: {
        name: 'forest',
        primary: '#059669',
        secondary: '#10B981',
        accent: '#34D399',
        background: '#ECFDF5',
        surface: '#D1FAE5',
        text: '#064E3B',
        textSecondary: '#065F46'
      }
    };

    if (themes[themeName]) {
      setCurrentTheme(themes[themeName]);
    }
  }, []);

  // Add CSS variables and styles
  useEffect(() => {
    if (!enabled) return;

    const style = document.createElement('style');
    style.textContent = `
      :root {
        --color-primary: ${currentTheme.primary};
        --color-secondary: ${currentTheme.secondary};
        --color-accent: ${currentTheme.accent};
        --color-background: ${currentTheme.background};
        --color-surface: ${currentTheme.surface};
        --color-text: ${currentTheme.text};
        --color-text-secondary: ${currentTheme.textSecondary};
        
        --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        
        --border-radius: 0.5rem;
        --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .dark {
        --color-background: #0F172A;
        --color-surface: #1E293B;
        --color-text: #F8FAFC;
        --color-text-secondary: #94A3B8;
      }

      ${enableGlassmorphism ? `
        .glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .dark .glass {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      ` : ''}

      ${enableGradients ? `
        .gradient-primary {
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
        }
        
        .gradient-accent {
          background: linear-gradient(135deg, var(--color-accent), var(--color-primary));
        }
        
        .gradient-surface {
          background: linear-gradient(135deg, var(--color-surface), var(--color-background));
        }
      ` : ''}

      ${enableShadows ? `
        .shadow-elevated {
          box-shadow: var(--shadow-lg);
          transition: var(--transition);
        }
        
        .shadow-elevated:hover {
          box-shadow: var(--shadow-xl);
          transform: translateY(-2px);
        }
      ` : ''}

      ${enableHoverEffects ? `
        .hover-lift {
          transition: var(--transition);
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }
        
        .hover-scale {
          transition: var(--transition);
        }
        
        .hover-scale:hover {
          transform: scale(1.05);
        }
      ` : ''}

      ${enableMicroInteractions ? `
        .micro-interaction-hover {
          transform: scale(1.02);
          transition: var(--transition);
        }
        
        .ripple {
          position: relative;
          overflow: hidden;
        }
        
        .ripple::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s linear;
        }
        
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      ` : ''}

      ${enableAnimations ? `
        .fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        
        .slide-up {
          animation: slideUp 0.6s ease-out;
        }
        
        .slide-down {
          animation: slideDown 0.6s ease-out;
        }
        
        .bounce-in {
          animation: bounceIn 0.6s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes bounceIn {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }
      ` : ''}

      .loading-spinner {
        width: 40px;
        height: 40px;
        border: 4px solid var(--color-surface);
        border-top: 4px solid var(--color-primary);
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;

    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, [enabled, currentTheme, enableGlassmorphism, enableGradients, enableShadows, enableHoverEffects, enableMicroInteractions, enableAnimations]);

  if (!enabled) return null;

  return (
    <>
      {/* Custom Cursor */}
      {enableCursorEffects && (
        <motion.div
          ref={cursorRef}
          className="fixed pointer-events-none z-[9999] mix-blend-difference"
          animate={{
            x: cursorPosition.x - 16,
            y: cursorPosition.y - 16,
            scale: isHovering ? 1.5 : 1,
            opacity: isHovering ? 0.8 : 0.6
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        >
          <div className="w-8 h-8 bg-white rounded-full shadow-lg" />
        </motion.div>
      )}

      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-[9998] flex items-center justify-center"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-xl">
              <div className="loading-spinner mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-400 text-center">Loading...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      {enableParallax && (
        <motion.div
          className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-[9997]"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      )}

      {/* Theme Switcher */}
      <div className="fixed top-4 left-4 z-[9996]">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 space-y-3">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Theme</h3>
          
          {/* Dark Mode Toggle */}
          {enableDarkMode && (
            <button
              onClick={toggleDarkMode}
              className={`w-full px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isDarkMode
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              {isDarkMode ? '🌙 Dark' : '☀️ Light'}
            </button>
          )}

          {/* Theme Presets */}
          <div className="space-y-2">
            <button
              onClick={() => changeTheme('default')}
              className="w-full px-3 py-2 rounded-md text-sm font-medium bg-blue-100 text-blue-900 hover:bg-blue-200 transition-colors"
            >
              Default
            </button>
            <button
              onClick={() => changeTheme('ocean')}
              className="w-full px-3 py-2 rounded-md text-sm font-medium bg-cyan-100 text-cyan-900 hover:bg-cyan-200 transition-colors"
            >
              Ocean
            </button>
            <button
              onClick={() => changeTheme('sunset')}
              className="w-full px-3 py-2 rounded-md text-sm font-medium bg-orange-100 text-orange-900 hover:bg-orange-200 transition-colors"
            >
              Sunset
            </button>
            <button
              onClick={() => changeTheme('forest')}
              className="w-full px-3 py-2 rounded-md text-sm font-medium bg-green-100 text-green-900 hover:bg-green-200 transition-colors"
            >
              Forest
            </button>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full p-4 shadow-lg z-[9996] hover:shadow-xl transition-shadow"
        onClick={() => {
          // Add your action here
          console.log('FAB clicked!');
        }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </motion.button>

      {/* CSS Classes for Components - moved to global styles */}
    </>
  );
};
