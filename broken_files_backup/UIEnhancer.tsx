import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
interface UIEnhancerProps {
  showFloatingActions?: boolean;
  enableParticles?: boolean;
  enableScrollEffects?: boolean;
}
export const UIEnhancer: React.FC<UIEnhancerProps> = ({
  showFloatingActions = true,
  enableParticles = true,
  enableScrollEffects = true
}) => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('dark');
  const [isParticleMode, setIsParticleMode] = useState(enableParticles);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [deviceType, setDeviceType] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  useEffect(() => {
    // Detect device type
    const detectDevice = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDeviceType('mobile');
      } else if (width < 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };
    detectDevice();
    window.addEventListener('resize', detectDevice);
    // Load saved theme
    const savedTheme = localStorage.getItem('ui-theme') as 'light' | 'dark' | 'auto';
    if (savedTheme) {
      setTheme(savedTheme);
    }
    // Apply theme
    applyTheme(savedTheme || 'dark');
    // Scroll to top visibility
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };
    if (enableScrollEffects) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      window.removeEventListener('resize', detectDevice);
      if (enableScrollEffects) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [enableScrollEffects]);
  const applyTheme = (newTheme: 'light' | 'dark' | 'auto') => {
    const root = document.documentElement;
    if (newTheme === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.toggle('dark', prefersDark);
      root.classList.toggle('light', !prefersDark);
    } else {
      root.classList.remove('light', 'dark');
      root.classList.add(newTheme);
    }
    localStorage.setItem('ui-theme', newTheme);
  };
  const handleThemeChange = (newTheme: 'light' | 'dark' | 'auto') => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const toggleParticleMode = () => {
    setIsParticleMode(!isParticleMode);
  };
  return (
    <>
      {/* Floating Action Buttons */}
      {showFloatingActions && (
        <div className="fixed bottom-4 right-4 z-40 space-y-3">
          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleThemeChange(theme === 'dark' ? 'light' : 'dark')}
            className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-gray-200 dark:border-slate-700 flex items-center justify-center transition-all duration-300 hover:shadow-xl"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? (
              <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-slate-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </motion.button>
          {/* Particle Mode Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleParticleMode}
            className={`w-12 h-12 rounded-full shadow-lg border flex items-center justify-center transition-all duration-300 hover:shadow-xl ${
              isParticleMode
                ? 'bg-purple-500 text-white border-purple-600'
                : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-slate-700'
            }`}
            title={`${isParticleMode ? 'Disable' : 'Enable'} particle mode`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </motion.button>
          {/* Device Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg flex items-center justify-center text-white text-xs font-bold"
            title={`Current device: ${deviceType}`}
          >
            {deviceType === 'mobile' ? '📱' : deviceType === 'tablet' ? '📱' : '💻'}
          </motion.div>
        </div>
      )}
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollToTop && enableScrollEffects && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-4 left-20 z-40 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110"
            title="Scroll to top"
          >
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
      {/* Particle Background */}
      {isParticleMode && (
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: 0
                }}
                animate={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        </div>
      )}
      {/* Theme Auto Mode Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleThemeChange('auto')}
        className={`fixed top-4 left-4 z-40 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
          theme === 'auto'
            ? 'bg-blue-600 text-white shadow-lg'
            : 'bg-white/10 dark:bg-slate-800/50 text-gray-600 dark:text-gray-400 hover:bg-white/20 dark:hover:bg-slate-700/50'
        }`}
        title="Auto theme (follows system preference)"
      >
        <span className="flex items-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <span>Auto</span>
        </span>
      </motion.button>
      {/* UI Enhancement Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-4 right-20 z-40 bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 border border-white/20 dark:border-slate-700/50"
      >
        <div className="flex items-center space-x-3 text-sm text-white">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>UI Enhanced</span>
          </div>
          <div className="text-xs text-white/70">
            {theme} • {deviceType}
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default UIEnhancer;