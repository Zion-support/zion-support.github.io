<<<<<<< HEAD
import React from 'react';
=======
import React, { useEffect, useState, useRef } from 'react';

import { Sparkles, ArrowUp, Palette, Sun, Moon, Monitor, Smartphone, Tablet } from 'lucide-react';
export const ModernUIEnhancer = ({ enableAnimations = true, enableParticles = true, enableScrollEffects = true, enableThemeToggle = true, enableResponsiveDesign = true, }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentTheme, setCurrentTheme] = useState('auto');
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const [deviceType, setDeviceType] = useState('desktop');
    const scrollToTopRef = useRef(null);
    // Detect device type
    useEffect(() => {
        const updateDeviceType = () => {
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
        updateDeviceType();
        window.addEventListener('resize', updateDeviceType);
        return () => window.removeEventListener('resize', updateDeviceType);
    }, []);
    // Scroll effects
    useEffect(() => {
        if (!enableScrollEffects)
            return;
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
    const applyTheme = (theme) => {
        const root = document.documentElement;
        if (theme === 'auto') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            root.classList.toggle('dark', prefersDark);
        }
        else {
            root.classList.toggle('dark', theme === 'dark');
        }
        localStorage.setItem('theme', theme);
    };
    const toggleTheme = () => {
        const themes = ['light', 'dark', 'auto'];
        const currentIndex = themes.indexOf(currentTheme);
        const nextTheme = themes[(currentIndex + 1) % themes.length];
        setCurrentTheme(nextTheme);
        applyTheme(nextTheme);
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    // Add CSS animations to the document
    useEffect(() => {
        if (!enableAnimations)
            return;
        const style = document.createElement('style');
        style.textContent = `
      .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      
      .fade-in-visible {
        opacity: 1;
        transform: translateY(0);
      }
      
      .slide-in-left {
        opacity: 0;
        transform: translateX(-50px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      
      .slide-in-left-visible {
        opacity: 1;
        transform: translateX(0);
      }
      
      .slide-in-right {
        opacity: 0;
        transform: translateX(50px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      
      .slide-in-right-visible {
        opacity: 1;
        transform: translateX(0);
      }
      
      .scale-in {
        opacity: 0;
        transform: scale(0.8);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      
      .scale-in-visible {
        opacity: 1;
        transform: scale(1);
      }
      
      .bounce-in {
        animation: bounceIn 0.8s ease-out;
      }
      
      @keyframes bounceIn {
        0% {
          opacity: 0;
          transform: scale(0.3);
        }
        50% {
          opacity: 1;
          transform: scale(1.05);
        }
        70% {
          transform: scale(0.9);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }
      
      .floating {
        animation: floating 3s ease-in-out infinite;
      }
      
      @keyframes floating {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
      }
      
      .glow {
        animation: glow 2s ease-in-out infinite alternate;
      }
      
      @keyframes glow {
        from {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }
        to {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.8);
        }
      }
      
      .gradient-text {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      .glass-effect {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      
      .glass-effect-dark {
        background: rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .hover-lift {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      
      .hover-lift:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      }
      
      .text-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      }
      
      .text-shadow-light {
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
      }
    `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, [enableAnimations]);
    // Add intersection observer for scroll animations
    useEffect(() => {
        if (!enableScrollEffects)
            return;
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const animationType = element.getAttribute('data-animation');
                    if (animationType) {
                        element.classList.add(`${animationType}-visible`);
                    }
                }
            });
        }, observerOptions);
        const animatedElements = document.querySelectorAll('[data-animation]');
        animatedElements.forEach((element) => {
            observer.observe(element);
        });
        return () => {
            animatedElements.forEach((element) => {
                observer.unobserve(element);
            });
        };
    }, [enableScrollEffects]);
    return (<>
      {/* Theme Toggle Button */}
      {enableThemeToggle && (<motion.button initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={toggleTheme} className="fixed top-6 right-6 z-50 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700" title={`Current theme: ${currentTheme}`}>
          <AnimatePresence mode="wait">
            {currentTheme === 'light' && (<motion.div key="light" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.3 }}>
                <Sun className="w-5 h-5 text-yellow-500"/>
              </motion.div>)}
            {currentTheme === 'dark' && (<motion.div key="dark" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.3 }}>
                <Moon className="w-5 h-5 text-blue-400"/>
              </motion.div>)}
            {currentTheme === 'auto' && (<motion.div key="auto" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.3 }}>
                <Monitor className="w-5 h-5 text-gray-600 dark:text-gray-400"/>
              </motion.div>)}
          </AnimatePresence>
        </motion.button>)}
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const ModernUIEnhancer: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">ModernUIEnhancer</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default ModernUIEnhancer;