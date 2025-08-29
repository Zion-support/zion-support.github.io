import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface ModernUIEnhancerProps {
  children: React.ReactNode;
  enableAnimations?: boolean;
  enableInteractions?: boolean;
  enableThemes?: boolean;
}

export const ModernUIEnhancer: React.FC<ModernUIEnhancerProps> = ({
  children,
  enableAnimations = true,
  enableInteractions = true,
  enableThemes = true
}) => {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | 'auto'>('auto');
  const [isAnimationsEnabled, setIsAnimationsEnabled] = useState(enableAnimations);
  const [isInteractionsEnabled, setIsInteractionsEnabled] = useState(enableInteractions);
  const [showSettings, setShowSettings] = useState(false);

  // Motion values for interactive elements
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  // Spring animations for smooth transitions
  const springConfig = { damping: 20, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  // Theme management
  useEffect(() => {
    const savedTheme = localStorage.getItem('zion-theme');
    if (savedTheme) {
      setCurrentTheme(savedTheme as 'light' | 'dark' | 'auto');
    } else {
      // Auto-detect system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setCurrentTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  // Apply theme
  useEffect(() => {
    const root = document.documentElement;
    
    switch (currentTheme) {
      case 'dark':
        root.classList.add('dark');
        root.classList.remove('light');
        break;
      case 'light':
        root.classList.add('light');
        root.classList.remove('dark');
        break;
      case 'auto':
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        root.classList.toggle('dark', prefersDark);
        root.classList.toggle('light', !prefersDark);
        break;
    }

    localStorage.setItem('zion-theme', currentTheme);
  }, [currentTheme]);

  // Mouse tracking for 3D effects
  useEffect(() => {
    if (!isInteractionsEnabled) return;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position relative to center
      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isInteractionsEnabled, mouseX, mouseY]);

  // Enhanced scroll animations
  useEffect(() => {
    if (!isAnimationsEnabled) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all elements with data-animate attribute
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [isAnimationsEnabled]);

  // Enhanced focus management
  useEffect(() => {
    if (!isInteractionsEnabled) return;

    const handleFocus = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      target.classList.add('focused');
      
      // Add ripple effect
      if (target.classList.contains('btn-modern')) {
        createRippleEffect(target, event);
      }
    };

    const handleBlur = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      target.classList.remove('focused');
    };

    document.addEventListener('focusin', handleFocus);
    document.addEventListener('focusout', handleBlur);

    return () => {
      document.removeEventListener('focusin', handleFocus);
      document.removeEventListener('focusout', handleBlur);
    };
  }, [isInteractionsEnabled]);

  // Ripple effect for buttons
  const createRippleEffect = useCallback((element: HTMLElement, event: FocusEvent) => {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = (event as any).clientX - rect.left - size / 2;
    const y = (event as any).clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    element.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }, []);

  // Toggle settings panel
  const toggleSettings = useCallback(() => {
    setShowSettings(!showSettings);
  }, [showSettings]);

  // Apply modern CSS variables
  useEffect(() => {
    const root = document.documentElement;
    
    // Modern color palette
    const colors = {
      primary: '#06b6d4',
      primaryDark: '#0891b2',
      secondary: '#8b5cf6',
      accent: '#f59e0b',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6'
    };

    // Apply colors as CSS variables
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    // Modern spacing scale
    const spacing = [0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32];
    spacing.forEach((value, index) => {
      root.style.setProperty(`--spacing-${index}`, `${value}rem`);
    });

    // Modern shadows
    const shadows = {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)'
    };

    Object.entries(shadows).forEach(([key, value]) => {
      root.style.setProperty(`--shadow-${key}`, value);
    });
  }, []);

  return (
    <>
      {children}
      
      {/* Modern UI Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl p-6 z-50 min-w-[320px] backdrop-blur-sm"
          >
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Modern UI Settings
            </h2>
            
            <div className="space-y-4">
              {/* Theme Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Theme
                </label>
                <select
                  value={currentTheme}
                  onChange={(e) => setCurrentTheme(e.target.value as 'light' | 'dark' | 'auto')}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="auto">Auto (System)</option>
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>

              {/* Animation Toggle */}
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={isAnimationsEnabled}
                  onChange={(e) => setIsAnimationsEnabled(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-900 dark:text-white">Enable Animations</span>
              </label>

              {/* Interaction Toggle */}
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={isInteractionsEnabled}
                  onChange={(e) => setIsInteractionsEnabled(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-900 dark:text-white">Enable Interactions</span>
              </label>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => document.documentElement.classList.toggle('high-contrast')}
                  className="px-3 py-2 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Toggle Contrast
                </button>
                <button
                  onClick={() => document.documentElement.classList.toggle('reduced-motion')}
                  className="px-3 py-2 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Reduce Motion
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modern UI Toggle Button */}
      <button
        onClick={toggleSettings}
        className="fixed top-4 right-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg z-50 hover:shadow-xl transition-all duration-200 hover:scale-105"
        aria-label="Modern UI Settings"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      </button>

      {/* Modern CSS Styles */}
      <style jsx global>{`
        /* Modern button styles */
        .btn-modern {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          border: none;
          border-radius: 0.75rem;
          padding: 0.75rem 1.5rem;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: var(--shadow-md);
        }

        .btn-modern:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .btn-modern:active {
          transform: translateY(0);
        }

        /* Ripple effect */
        .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: scale(0);
          animation: ripple-animation 0.6s linear;
          pointer-events: none;
        }

        @keyframes ripple-animation {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }

        /* Focus styles */
        .focused {
          outline: 2px solid var(--color-primary);
          outline-offset: 2px;
        }

        /* Animation classes */
        [data-animate] {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        [data-animate].animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Modern card styles */
        .card-modern {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: var(--shadow-lg);
          transition: all 0.3s ease;
        }

        .card-modern:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-2xl);
        }

        /* Glass morphism effect */
        .glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 1rem;
        }

        /* Modern gradients */
        .gradient-primary {
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
        }

        .gradient-accent {
          background: linear-gradient(135deg, var(--color-accent), var(--color-warning));
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }

        ::-webkit-scrollbar-thumb {
          background: var(--color-primary);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: var(--color-primaryDark);
        }

        /* High contrast mode */
        .high-contrast {
          --color-primary: #ffff00 !important;
          --color-secondary: #00ffff !important;
          --color-accent: #ff00ff !important;
        }

        /* Reduced motion */
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        /* Dark theme enhancements */
        .dark {
          color-scheme: dark;
        }

        .dark .card-modern {
          background: rgba(0, 0, 0, 0.3);
          border-color: rgba(255, 255, 255, 0.1);
        }

        /* Light theme enhancements */
        .light .card-modern {
          background: rgba(255, 255, 255, 0.8);
          border-color: rgba(0, 0, 0, 0.1);
        }

        /* Responsive design utilities */
        @media (max-width: 768px) {
          .card-modern {
            padding: 1rem;
            border-radius: 0.75rem;
          }
        }

        /* Print styles */
        @media print {
          .btn-modern,
          .card-modern {
            box-shadow: none;
            border: 1px solid #000;
          }
        }
      `}</style>
    </>
  );
};

// Modern UI Components
export const ModernButton: React.FC<{
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}> = ({ children, onClick, variant = 'primary', size = 'md', disabled, className }) => {
  const baseClasses = 'btn-modern font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'gradient-primary text-white focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    accent: 'gradient-accent text-white focus:ring-yellow-500',
    outline: 'bg-transparent border-2 border-current text-current hover:bg-current hover:text-white'
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className || ''}`}
    >
      {children}
    </button>
  );
};

export const ModernCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}> = ({ children, className, hover = true, glass = false }) => {
  const baseClasses = 'card-modern';
  const hoverClasses = hover ? 'hover:transform hover:-translate-y-1' : '';
  const glassClasses = glass ? 'glass' : '';

  return (
    <div className={`${baseClasses} ${hoverClasses} ${glassClasses} ${className || ''}`}>
      {children}
    </div>
  );
};

// Modern UI Hooks
export const useModernUI = () => {
  const [isAnimationsEnabled, setIsAnimationsEnabled] = useState(true);
  const [isInteractionsEnabled, setIsInteractionsEnabled] = useState(true);

  const toggleAnimations = useCallback(() => {
    setIsAnimationsEnabled(!isAnimationsEnabled);
  }, [isAnimationsEnabled]);

  const toggleInteractions = useCallback(() => {
    setIsInteractionsEnabled(!isInteractionsEnabled);
  }, [isInteractionsEnabled]);

  return {
    isAnimationsEnabled,
    isInteractionsEnabled,
    toggleAnimations,
    toggleInteractions
  };
};