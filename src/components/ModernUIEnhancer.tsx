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
    };

    // Apply CSS custom properties
    Object.entries(colors).forEach(([key, value]) => {
      if (typeof value === 'string') {
        root.style.setProperty(`--color-${key}`, value);
      } else {
        Object.entries(value).forEach(([shade, colorValue]) => {
          root.style.setProperty(`--color-${key}-${shade}`, colorValue);
        });
      }
    });

    // Apply accent color variations
    root.style.setProperty('--color-primary-light', `${accentColor}20`);
    root.style.setProperty('--color-primary-dark', `${accentColor}80`);
  }, [enabled, accentColor]);

  const enhanceSpacing = useCallback(() => {
    if (!enabled) return;

    const root = document.documentElement;
    
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