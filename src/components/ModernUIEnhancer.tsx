import React, { useEffect, useState, useRef } from 'react.ts';
import { motion, AnimatePresence, useScroll, useTransform  } from 'framer-motion.ts';


interface UISettings {
  glassmorphism: boolean;
  particleEffects: boolean;
  smoothScrolling: boolean;
  enhancedAnimations: boolean;
  modernShadows: boolean;
  colorThemes: boolean;
  depthLayers: boolean;
}

export const ModernUIEnhancer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<UISettings>({
    glassmorphism: true,
    particleEffects: true,
    smoothScrolling: true,
    enhancedAnimations: true,
    modernShadows: true,
    colorThemes: true,
    depthLayers: true
  });
  
  const [activeTheme, setActiveTheme] = useState('default');
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; vx: number; vy: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);

  useEffect(() => {
    // Initialize UI enhancements
    initializeUIEnhancements();
    
    // Setup particle system
    if (settings.particleEffects) {
      setupParticleSystem();
    }
    
    // Setup smooth scrolling
    if (settings.smoothScrolling) {
      setupSmoothScrolling();
    }
    
    // Apply initial settings
    applyUISettings();
    
    return () => {
      cleanupUIEnhancements();
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

      {/* Device Type Indicator */}
      {enableResponsiveDesign && (<motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="fixed top-6 left-6 z-50 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2 text-sm">
            {deviceType === 'desktop' && <Monitor className="w-4 h-4 text-blue-500"/>}
            {deviceType === 'tablet' && <Tablet className="w-4 h-4 text-green-500"/>}
            {deviceType === 'mobile' && <Smartphone className="w-4 h-4 text-purple-500"/>}
            <span className="text-gray-700 dark:text-gray-300 capitalize">{deviceType}</span>
          </div>
        </motion.div>)}

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollToTop && (<motion.button ref={scrollToTopRef} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={scrollToTop} className="fixed bottom-6 left-6 z-50 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300" title="Scroll to top">
            <ArrowUp className="w-5 h-5"/>
          </motion.button>)}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setIsVisible(!isVisible)} className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300" title="UI Enhancements">
        <Palette className="w-5 h-5"/>
      </motion.button>

      {/* UI Enhancement Panel */}
      <AnimatePresence>
        {isVisible && (<motion.div initial={{ opacity: 0, y: 100, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 100, scale: 0.8 }} transition={{ type: "spring", damping: 25, stiffness: 300 }} className="fixed bottom-24 right-6 z-50 w-80 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5"/>
                  <h3 className="font-semibold">UI Enhancements</h3>
                </div>
                <button onClick={() => setIsVisible(false)} className="text-white hover:text-gray-200 transition-colors">
                  ×
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              {/* Animation Controls */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">Animations</h4>
                <div className="grid grid-cols-2 gap-2">
                  <button className="p-2 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded text-sm hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors">
                    Fade In
                  </button>
                  <button className="p-2 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded text-sm hover:bg-green-200 dark:hover:bg-green-900/40 transition-colors">
                    Slide In
                  </button>
                  <button className="p-2 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded text-sm hover:bg-purple-200 dark:hover:bg-purple-900/40 transition-colors">
                    Scale In
                  </button>
                  <button className="p-2 bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 rounded text-sm hover:bg-orange-200 dark:hover:bg-orange-900/40 transition-colors">
                    Bounce In
                  </button>
                </div>
              </div>

              {/* Visual Effects */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">Visual Effects</h4>
                <div className="grid grid-cols-2 gap-2">
                  <button className="p-2 bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded text-sm hover:bg-indigo-200 dark:hover:bg-indigo-900/40 transition-colors">
                    Glass Effect
                  </button>
                  <button className="p-2 bg-pink-100 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 rounded text-sm hover:bg-pink-200 dark:hover:bg-pink-900/40 transition-colors">
                    Gradient Text
                  </button>
                  <button className="p-2 bg-teal-100 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 rounded text-sm hover:bg-teal-200 dark:hover:bg-teal-900/40 transition-colors">
                    Hover Lift
                  </button>
                  <button className="p-2 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 rounded text-sm hover:bg-yellow-200 dark:hover:bg-yellow-900/40 transition-colors">
                    Glow Effect
                  </button>
                </div>
              </div>

              {/* Performance Info */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">Performance</h4>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Animations Enabled</div>
                  <div className="text-lg font-semibold text-green-600">{enableAnimations ? 'Yes' : 'No'}</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Scroll Effects</div>
                  <div className="text-lg font-semibold text-blue-600">{enableScrollEffects ? 'Yes' : 'No'}</div>
                </div>
              </div>
            </div>
          </motion.div>)}
      </AnimatePresence>

      {/* Floating Particles */}
      {settings.particleEffects && (
        <div className="fixed inset-0 pointer-events-none z-40">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60"
              style={{
                left: particle.x,
                top: particle.y,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}

      {/* Floating UI Elements */}
      {settings.depthLayers && (
        <div className="fixed top-20 right-20 pointer-events-none z-30">
          <motion.div
            className="w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20 floating-element"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      )}
    </
  );
};>