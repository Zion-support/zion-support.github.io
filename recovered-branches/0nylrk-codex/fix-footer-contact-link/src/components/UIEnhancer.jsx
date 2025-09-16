<<<<<<< HEAD
import React from 'react';
=======
import React, { useState, useEffect } from 'react';

export const UIEnhancer = ({ showFloatingActions = true, enableParticles = true, enableScrollEffects = true }) => {
    const [theme, setTheme] = useState('dark');
    const [isParticleMode, setIsParticleMode] = useState(enableParticles);
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const [deviceType, setDeviceType] = useState('desktop');
    useEffect(() => {
        // Detect device type
        const detectDevice = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setDeviceType('mobile');
            }
            else if (width < 1024) {
                setDeviceType('tablet');
            }
            else {
                setDeviceType('desktop');
            }
        };
        detectDevice();
        window.addEventListener('resize', detectDevice);
        // Load saved theme
        const savedTheme = localStorage.getItem('ui-theme');
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
    const applyTheme = (newTheme) => {
        const root = document.documentElement;
        if (newTheme === 'auto') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            root.classList.toggle('dark', prefersDark);
            root.classList.toggle('light', !prefersDark);
        }
        else {
            root.classList.remove('light', 'dark');
            root.classList.add(newTheme);
        }
        localStorage.setItem('ui-theme', newTheme);
    };
    const handleThemeChange = (newTheme) => {
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
    return (<>
      {/* Floating Action Buttons */}
      {showFloatingActions && (<div className="fixed bottom-4 right-4 z-40 space-y-3">
          {/* Theme Toggle */}
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => handleThemeChange(theme === 'dark' ? 'light' : 'dark')} className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-gray-200 dark:border-slate-700 flex items-center justify-center transition-all duration-300 hover:shadow-xl" title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? (<svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"/>
              </svg>) : (<svg className="w-6 h-6 text-slate-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
              </svg>)}
          </motion.button>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const UIEnhancer: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UIEnhancer</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default UIEnhancer;