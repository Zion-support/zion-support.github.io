import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUp, Palette, Sun, Moon, Monitor, Smartphone, Tablet } from 'lucide-react';

export const ModernUIEnhancer = ({ 
  enableAnimations = true, 
  enableParticles = true, 
  enableScrollEffects = true, 
  enableThemeToggle = true, 
  enableResponsiveDesign = true 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('auto');
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [deviceType, setDeviceType] = useState('desktop');
  const scrollToTopRef = useRef<HTMLDivElement>(null);

  // Detect device type
  useEffect(() => {
    const updateDeviceType = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDeviceType('mobile');
      } else if (width < 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };
    
    updateDeviceType();
    window.addEventListener('resize', updateDeviceType);
    return () => window.removeEventListener('resize', updateDeviceType);
  }, []);

  // Scroll effects
  useEffect(() => {
    if (!enableScrollEffects) return;
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setShowScrollToTop(scrollTop > 300);
      
      // Parallax effect for background elements
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-parallax') || '0.5');
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
      
      // Fade in elements on scroll
      const fadeElements = document.querySelectorAll('[data-fade-in]');
      fadeElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          element.classList.add('fade-in-visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enableScrollEffects]);

  // Theme management
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'auto';
    setCurrentTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (theme: string) => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else if (theme === 'light') {
      root.classList.remove('dark');
    } else {
      // Auto theme based on system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  };

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
    localStorage.setItem('theme', theme);
    applyTheme(theme);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Particle system
  const renderParticles = () => {
    if (!enableParticles) return null;
    
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-zion-cyan/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      {renderParticles()}
      
      {/* Scroll to top button */}
      {showScrollToTop && (
        <motion.button
          ref={scrollToTopRef}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}

      {/* Theme toggle */}
      {enableThemeToggle && (
        <motion.div
          className="fixed top-6 right-6 z-50"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
            <div className="flex">
              {[
                { key: 'light', icon: Sun, label: 'Light' },
                { key: 'dark', icon: Moon, label: 'Dark' },
                { key: 'auto', icon: Monitor, label: 'Auto' },
              ].map(({ key, icon: Icon, label }) => (
                <button
                  key={key}
                  onClick={() => handleThemeChange(key)}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    currentTheme === key
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white'
                      : 'text-zion-slate-light hover:text-white hover:bg-white/10'
                  }`}
                  title={label}
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Device indicator (development only) */}
      {process.env.NODE_ENV === 'development' && enableResponsiveDesign && (
        <motion.div
          className="fixed top-6 left-6 z-50 bg-black/80 text-white px-3 py-1 rounded-full text-xs font-mono"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {deviceType === 'mobile' && <Smartphone className="w-3 h-3 inline mr-1" />}
          {deviceType === 'tablet' && <Tablet className="w-3 h-3 inline mr-1" />}
          {deviceType === 'desktop' && <Monitor className="w-3 h-3 inline mr-1" />}
          {deviceType}
        </motion.div>
      )}

      {/* Performance indicator */}
      {process.env.NODE_ENV === 'development' && (
        <motion.div
          className="fixed bottom-6 left-6 z-50 bg-black/80 text-white px-3 py-1 rounded-full text-xs font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <Sparkles className="w-3 h-3 inline mr-1" />
          Enhanced UI
        </motion.div>
      )}
    </>
  );
};