<<<<<<< HEAD
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Sparkles,
  Zap,
  Star,
  Palette,
  Eye,
  Layers,
  Settings,
  X
interface UISettings {
  glassmorphism: boolean;
  particleEffects: boolean;
  smoothScrolling: boolean;
  enhancedAnimations: boolean;
  modernShadows: boolean;
  colorThemes: boolean;
  depthLayers: boolean;

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

    // Setup smooth scrolling
    if (settings.smoothScrolling) {
      setupSmoothScrolling();

    // Apply initial settings
    applyUISettings();

    return () => {
      cleanupUIEnhancements();
=======
import React, { useEffect, useCallback, useState } from 'react';

interface ModernUIEnhancerProps {
  enabled?: boolean;
}

export const ModernUIEnhancer: React.FC<ModernUIEnhancerProps> = ({ 
  enabled = true 
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [accentColor, setAccentColor] = useState('#0ea5e9');

  const enhanceTypography = useCallback(() => {
    if (!enabled) return;

    // Add modern font loading
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    fontLink.as = 'style';
    document.head.appendChild(fontLink);

    // Apply modern typography
    const root = document.documentElement;
    root.style.setProperty('--font-family', "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif");
    root.style.setProperty('--font-weight-light', '300');
    root.style.setProperty('--font-weight-normal', '400');
    root.style.setProperty('--font-weight-medium', '500');
    root.style.setProperty('--font-weight-semibold', '600');
    root.style.setProperty('--font-weight-bold', '700');
  }, [enabled]);

  const enhanceColorScheme = useCallback(() => {
    if (!enabled) return;

    const root = document.documentElement;
    
    // Modern color palette
    const colors = {
      primary: accentColor,
      secondary: '#6366f1',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
      neutral: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a'
      }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    };

<<<<<<< HEAD
  useEffect(() => {
    // Apply settings when they change
    applyUISettings();
  }, [settings]);

  const initializeUIEnhancements = () => {
    // Add CSS custom properties
    addCSSVariables();

    // Add glassmorphism styles
    addGlassmorphismStyles();

    // Add modern shadow styles
    addModernShadowStyles();

    // Add depth layer styles
    addDepthLayerStyles();

    // Add color theme styles
    addColorThemeStyles();
  };

  const addCSSVariables = () => {
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --glass-bg: rgba(255, 255, 255, 0.1);
        --glass-border: rgba(255, 255, 255, 0.2);
        --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        --modern-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        --depth-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        --accent-glow: 0 0 20px rgba(6, 182, 212, 0.5);
        --text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      .glass-effect {
        background: var(--glass-bg);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid var(--glass-border);
        box-shadow: var(--glass-shadow);

      .modern-shadow {
        box-shadow: var(--modern-shadow);

      .depth-layer {
        box-shadow: var(--depth-shadow);
        transform: translateZ(0);

      .accent-glow {
        box-shadow: var(--accent-glow);

      .text-shadow {
        text-shadow: var(--text-shadow);

      .smooth-scroll {
        scroll-behavior: smooth;

      .enhanced-animation {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    `;
    document.head.appendChild(style);
  };

  const addGlassmorphismStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
      .glass-card {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 16px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;

      .glass-card:hover {
        background: rgba(255, 255, 255, 0.15);
        border-color: rgba(255, 255, 255, 0.3);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        transform: translateY(-2px);

      .glass-button {
        background: rgba(6, 182, 212, 0.2);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(6, 182, 212, 0.3);
        border-radius: 12px;
        padding: 12px 24px;
        color: white;
        font-weight: 600;
        transition: all 0.3s ease;
        cursor: pointer;

      .glass-button:hover {
        background: rgba(6, 182, 212, 0.3);
        border-color: rgba(6, 182, 212, 0.5);
        box-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
        transform: translateY(-1px);

    `;
    document.head.appendChild(style);
  };

  const addModernShadowStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
      .shadow-elevation-1 {
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

      .shadow-elevation-2 {
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

      .shadow-elevation-3 {
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

      .shadow-elevation-4 {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

      .shadow-elevation-5 {
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);

      .hover-lift {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

      .hover-lift:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);

    `;
    document.head.appendChild(style);
  };

  const addDepthLayerStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
      .depth-1 {
        transform: translateZ(10px);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

      .depth-2 {
        transform: translateZ(20px);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);

      .depth-3 {
        transform: translateZ(30px);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);

      .parallax-layer {
        transform-style: preserve-3d;
        will-change: transform;

      .floating-element {
        animation: float 6s ease-in-out infinite;

      @keyframes float {
        0%, 100% { transform: translateY(0px) translateZ(0); }
        50% { transform: translateY(-10px) translateZ(10px); }

    `;
    document.head.appendChild(style);
  };

  const addColorThemeStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
      .theme-cyber {
        --primary: #00ffff;
        --secondary: #ff00ff;
        --accent: #ffff00;
        --background: #000000;
        --surface: #111111;

      .theme-nature {
        --primary: #4ade80;
        --secondary: #22c55e;
        --accent: #84cc16;
        --background: #f0fdf4;
        --surface: #ffffff;

      .theme-sunset {
        --primary: #f97316;
        --secondary: #ec4899;
        --accent: #f59e0b;
        --background: #fef3c7;
        --surface: #ffffff;

      .theme-ocean {
        --primary: #06b6d4;
        --secondary: #0891b2;
        --accent: #0ea5e9;
        --background: #f0f9ff;
        --surface: #ffffff;

      .theme-dark {
        --primary: #6366f1;
        --secondary: #8b5cf6;
        --accent: #a855f7;
        --background: #0f172a;
        --surface: #1e293b;

    `;
    document.head.appendChild(style);
  };

  const setupParticleSystem = () => {
    // Create floating particles
    const particleCount = 50;
    const newParticles = [];

    for (const i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      });

    setParticles(newParticles);

    // Animate particles
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: particle.x + particle.vx,
        y: particle.y + particle.vy,
        vx: particle.x <= 0 || particle.x >= window.innerWidth ? -particle.vx : particle.vx,
        vy: particle.y <= 0 || particle.y >= window.innerHeight ? -particle.vy : particle.vy
      })));
    };

    const interval = setInterval(animateParticles, 50);

    return () => clearInterval(interval);
  };

  const setupSmoothScrolling = () => {
    // Add smooth scrolling to all anchor links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

      });
=======
    // Apply CSS custom properties
    Object.entries(colors).forEach(([key, value]) => {
      if (typeof value === 'string') {
        root.style.setProperty(`--color-${key}`, value);
      } else {
        Object.entries(value).forEach(([shade, colorValue]) => {
          root.style.setProperty(`--color-${key}-${shade}`, colorValue);
        });
      }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    });

    // Apply accent color variations
    root.style.setProperty('--color-primary-light', `${accentColor}20`);
    root.style.setProperty('--color-primary-dark', `${accentColor}80`);
  }, [enabled, accentColor]);

  const enhanceSpacing = useCallback(() => {
    if (!enabled) return;

    const root = document.documentElement;
<<<<<<< HEAD

    // Apply glassmorphism
    if (settings.glassmorphism) {
      root.classList.add('glassmorphism-enabled');
    } else {
      root.classList.remove('glassmorphism-enabled');

    // Apply enhanced animations
    if (settings.enhancedAnimations) {
      root.classList.add('enhanced-animations');
    } else {
      root.classList.remove('enhanced-animations');

    // Apply modern shadows
    if (settings.modernShadows) {
      root.classList.add('modern-shadows');
    } else {
      root.classList.remove('modern-shadows');

    // Apply depth layers
    if (settings.depthLayers) {
      root.classList.add('depth-layers');
    } else {
      root.classList.remove('depth-layers');

    // Apply color themes
    if (settings.colorThemes) {
      root.classList.add('color-themes');
    } else {
      root.classList.remove('color-themes');

    // Apply active theme
    root.className = root.className.replace(/theme-\w+/g, '');
    root.classList.add(`theme-${activeTheme}`);
  };

  const cleanupUIEnhancements = () => {
    // Remove added styles
    const addedStyles = document.querySelectorAll('style[data-ui-enhancer]');
    addedStyles.forEach(style => style.remove());

    // Remove added classes
=======
    
    // Modern spacing scale (4px base unit)
    const spacing = {
      0: '0px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      12: '48px',
      14: '56px',
      16: '64px',
      20: '80px',
      24: '96px',
      28: '112px',
      32: '128px'
    };

    Object.entries(spacing).forEach(([key, value]) => {
      root.style.setProperty(`--spacing-${key}`, value);
    });
  }, [enabled]);

  const enhanceShadows = useCallback(() => {
    if (!enabled) return;

>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    const root = document.documentElement;
    
    // Modern shadow system
    const shadows = {
      xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)'
    };

    Object.entries(shadows).forEach(([key, value]) => {
      root.style.setProperty(`--shadow-${key}`, value);
    });
  }, [enabled]);

  const enhanceTransitions = useCallback(() => {
    if (!enabled) return;

<<<<<<< HEAD
  return (
    <>
      {/* UI Enhancement Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50 glass-effect"
        aria-label="UI Enhancement settings"
        aria-expanded={isOpen}
        aria-controls="ui-enhancement-panel"

        <Sparkles size={24} />
      </motion.button>

      {/* UI Enhancement Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-2xl p-6 w-80 z-50 border border-white/20 dark:border-gray-700/50 glass-effect"
            role="dialog"
            aria-labelledby="ui-enhancement-title"
            aria-describedby="ui-enhancement-description"

            <div className="flex items-center justify-between mb-4">
              <h2 id="ui-enhancement-title" className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Sparkles size={20} className="text-pink-500" />
                UI Enhancements
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:scale-110 transition-transform"
                aria-label="Close UI enhancement panel"

                <X size={20} />
              </button>
            </div>

            <p id="ui-enhancement-description" className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Customize the visual experience with modern UI effects
            </p>

            <div className="space-y-4">
              {/* Glassmorphism */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layers size={20} className="text-blue-600" />
                  <span className="text-sm font-medium">Glassmorphism</span>
                </div>
                <button
                  onClick={() => toggleSetting('glassmorphism')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.glassmorphism ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  role="switch"
                  aria-checked={settings.glassmorphism}

                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.glassmorphism ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Particle Effects */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star size={20} className="text-yellow-600" />
                  <span className="text-sm font-medium">Particle Effects</span>
                </div>
                <button
                  onClick={() => toggleSetting('particleEffects')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.particleEffects ? 'bg-yellow-600' : 'bg-gray-300'
                  }`}
                  role="switch"
                  aria-checked={settings.particleEffects}

                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.particleEffects ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Enhanced Animations */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap size={20} className="text-green-600" />
                  <span className="text-sm font-medium">Enhanced Animations</span>
                </div>
                <button
                  onClick={() => toggleSetting('enhancedAnimations')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.enhancedAnimations ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                  role="switch"
                  aria-checked={settings.enhancedAnimations}

                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.enhancedAnimations ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Modern Shadows */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye size={20} className="text-purple-600" />
                  <span className="text-sm font-medium">Modern Shadows</span>
                </div>
                <button
                  onClick={() => toggleSetting('modernShadows')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.modernShadows ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                  role="switch"
                  aria-checked={settings.modernShadows}

                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.modernShadows ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Depth Layers */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Settings size={20} className="text-indigo-600" />
                  <span className="text-sm font-medium">Depth Layers</span>
                </div>
                <button
                  onClick={() => toggleSetting('depthLayers')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.depthLayers ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                  role="switch"
                  aria-checked={settings.depthLayers}

                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.depthLayers ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Color Themes */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Palette size={16} className="text-pink-500" />
                Color Themes
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {['default', 'cyber', 'nature', 'sunset', 'ocean', 'dark'].map((theme) => (
                  <button
                    key={theme}
                    onClick={() => changeTheme(theme)}
                    className={`p-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                      activeTheme === theme
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg scale-105'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}

                    {theme.charAt(0).toUpperCase() + theme.slice(1)}
                  </button>
                ))}
              </div>
            </div>
=======
    const root = document.documentElement;
    
    // Modern transition system
    const transitions = {
      fast: '150ms ease-in-out',
      normal: '250ms ease-in-out',
      slow: '350ms ease-in-out',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
    };

    Object.entries(transitions).forEach(([key, value]) => {
      root.style.setProperty(`--transition-${key}`, value);
    });
  }, [enabled]);

  const enhanceBorderRadius = useCallback(() => {
    if (!enabled) return;

    const root = document.documentElement;
    
    // Modern border radius system
    const radius = {
      none: '0px',
      sm: '2px',
      md: '6px',
      lg: '8px',
      xl: '12px',
      '2xl': '16px',
      '3xl': '24px',
      full: '9999px'
    };

    Object.entries(radius).forEach(([key, value]) => {
      root.style.setProperty(`--radius-${key}`, value);
    });
  }, [enabled]);

  const enhanceDarkMode = useCallback(() => {
    if (!enabled) return;

    const root = document.documentElement;
    
    if (isDarkMode) {
      root.classList.add('dark');
      root.style.setProperty('--bg-primary', '#0f172a');
      root.style.setProperty('--bg-secondary', '#1e293b');
      root.style.setProperty('--text-primary', '#f8fafc');
      root.style.setProperty('--text-secondary', '#cbd5e1');
      root.style.setProperty('--border-color', '#334155');
    } else {
      root.classList.remove('dark');
      root.style.setProperty('--bg-primary', '#ffffff');
      root.style.setProperty('--bg-secondary', '#f8fafc');
      root.style.setProperty('--text-primary', '#0f172a');
      root.style.setProperty('--text-secondary', '#475569');
      root.style.setProperty('--border-color', '#e2e8f0');
    }
  }, [enabled, isDarkMode]);

  const enhanceComponents = useCallback(() => {
    if (!enabled) return;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

    // Add modern button styles
    const buttons = document.querySelectorAll('button, .btn, [role="button"]');
    buttons.forEach((button) => {
      if (!button.classList.contains('modern-enhanced')) {
        button.classList.add('modern-enhanced');
        button.style.cssText += `
          border-radius: var(--radius-md);
          transition: var(--transition-normal);
          font-weight: var(--font-weight-medium);
          box-shadow: var(--shadow-sm);
        `;
      }
    });

    // Add modern card styles
    const cards = document.querySelectorAll('.card, [class*="card"], [class*="Card"]');
    cards.forEach((card) => {
      if (!card.classList.contains('modern-enhanced')) {
        card.classList.add('modern-enhanced');
        card.style.cssText += `
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          transition: var(--transition-normal);
          border: 1px solid var(--border-color);
        `;
      }
    });
  }, [enabled]);

<<<<<<< HEAD
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
    </>
  );
};}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}</motion.div></motion.div>}
=======
  useEffect(() => {
    if (!enabled) return;

    enhanceTypography();
    enhanceColorScheme();
    enhanceSpacing();
    enhanceShadows();
    enhanceTransitions();
    enhanceBorderRadius();
    enhanceDarkMode();
    enhanceComponents();
  }, [
    enabled,
    enhanceTypography,
    enhanceColorScheme,
    enhanceSpacing,
    enhanceShadows,
    enhanceTransitions,
    enhanceBorderRadius,
    enhanceDarkMode,
    enhanceComponents
  ]);

  // Don't render anything - this is a utility component
  return null;
};
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
