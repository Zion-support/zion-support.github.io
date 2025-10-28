const fs = require('fs');
const path = require('path');

// List of all remaining problematic files to fix
const problematicFiles = [
  'app/components/PerformanceOptimizer.tsx',
  'app/components/SEOOptimization.tsx',
  'app/components/SecurityEnhancement.tsx',
  'app/components/accessibility/AccessibilityControls.tsx',
  'app/components/accessibility/AccessibilityUtils.ts'
];

problematicFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  
  // Create simple, working versions of these components
  let content = '';
  
  if (file.includes('PerformanceOptimizer')) {
    content = `'use client';

import React, { memo, useCallback, useEffect } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = memo(({ 
  enableImageOptimization = true,
  enableLazyLoading = true
}) => {
  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined' || !enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });
  }, [enableImageOptimization]);

  const setupLazyLoading = useCallback(() => {
    if (typeof window === 'undefined' || !enableLazyLoading) return;

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach((img) => {
      imageObserver.observe(img);
    });
  }, [enableLazyLoading]);

  useEffect(() => {
    optimizeImages();
    setupLazyLoading();
  }, [optimizeImages, setupLazyLoading]);

  return null;
});

PerformanceOptimizer.displayName = 'PerformanceOptimizer';

export default PerformanceOptimizer;`;
  } else if (file.includes('SEOOptimization')) {
    content = `'use client';

import React, { memo, useCallback, useEffect } from 'react';

interface SEOOptimizationProps {
  enableImageOptimization?: boolean;
  enableMetaOptimization?: boolean;
}

const SEOOptimization: React.FC<SEOOptimizationProps> = memo(({ 
  enableImageOptimization = true,
  enableMetaOptimization = true
}) => {
  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined' || !enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.alt) {
        img.alt = img.src.split('/').pop()?.split('.')[0] || 'Image';
      }
    });
  }, [enableImageOptimization]);

  const optimizeMetaTags = useCallback(() => {
    if (typeof window === 'undefined' || !enableMetaOptimization) return;

    // Add meta description if missing
    if (!document.querySelector('meta[name="description"]')) {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional technology services by Zion Tech Group';
      document.head.appendChild(meta);
    }
  }, [enableMetaOptimization]);

  useEffect(() => {
    optimizeImages();
    optimizeMetaTags();
  }, [optimizeImages, optimizeMetaTags]);

  return null;
});

SEOOptimization.displayName = 'SEOOptimization';

export default SEOOptimization;`;
  } else if (file.includes('SecurityEnhancement')) {
    content = `'use client';

import React, { memo, useCallback, useEffect } from 'react';

interface SecurityEnhancementProps {
  enableCSP?: boolean;
  enableIntegrityChecks?: boolean;
}

const SecurityEnhancement: React.FC<SecurityEnhancementProps> = memo(({ 
  enableCSP = true,
  enableIntegrityChecks = true
}) => {
  const addCSP = useCallback(() => {
    if (typeof window === 'undefined' || !enableCSP) return;

    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'";
    document.head.appendChild(meta);
  }, [enableCSP]);

  const checkIntegrity = useCallback(() => {
    if (typeof window === 'undefined' || !enableIntegrityChecks) return;

    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach((script) => {
      const src = script.getAttribute('src');
      if (src && !src.startsWith(window.location.origin) && !script.hasAttribute('integrity')) {
        console.warn('External script without integrity check:', src);
      }
    });
  }, [enableIntegrityChecks]);

  useEffect(() => {
    addCSP();
    checkIntegrity();
  }, [addCSP, checkIntegrity]);

  return null;
});

SecurityEnhancement.displayName = 'SecurityEnhancement';

export default SecurityEnhancement;`;
  } else if (file.includes('AccessibilityControls')) {
    content = `'use client';

import React, { memo } from 'react';

interface AccessibilityControlsProps {
  isHighContrast: boolean;
  fontSize: string;
  reducedMotion: boolean;
  onHighContrastToggle: () => void;
  onFontSizeChange: (size: string) => void;
  onReducedMotionToggle: () => void;
}

const AccessibilityControls: React.FC<AccessibilityControlsProps> = memo(({
  isHighContrast,
  fontSize,
  reducedMotion,
  onHighContrastToggle,
  onFontSizeChange,
  onReducedMotionToggle
}) => {
  return (
    <div className="accessibility-controls fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg z-50">
      <h3 className="text-lg font-semibold mb-4">Accessibility Controls</h3>
      
      <div className="space-y-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isHighContrast}
            onChange={onHighContrastToggle}
            className="rounded"
          />
          <span>High Contrast</span>
        </label>
        
        <div>
          <label className="block text-sm font-medium mb-2">Font Size</label>
          <select
            value={fontSize}
            onChange={(e) => onFontSizeChange(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="small">Small</option>
            <option value="normal">Normal</option>
            <option value="large">Large</option>
            <option value="xl">Extra Large</option>
          </select>
        </div>
        
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={reducedMotion}
            onChange={onReducedMotionToggle}
            className="rounded"
          />
          <span>Reduce Motion</span>
        </label>
      </div>
    </div>
  );
});

AccessibilityControls.displayName = 'AccessibilityControls';

export default AccessibilityControls;`;
  } else if (file.includes('AccessibilityUtils')) {
    content = `// Accessibility utility functions

export const addFocusIndicators = () => {
  if (typeof window === 'undefined') return;
  
  const style = document.createElement('style');
  style.textContent = \`
    *:focus {
      outline: 2px solid #4f46e5;
      outline-offset: 2px;
    }
  \`;
  document.head.appendChild(style);
};

export const improveKeyboardNavigation = () => {
  if (typeof window === 'undefined') return;
  
  // Add keyboard navigation improvements
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  });
  
  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
  });
};

export const addSkipLinks = () => {
  if (typeof window === 'undefined') return;
  
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white p-2 rounded';
  document.body.insertBefore(skipLink, document.body.firstChild);
};

export const announceToScreenReader = (message: string) => {
  if (typeof window === 'undefined') return;
  
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

export const getContrastRatio = (color1: string, color2: string): number => {
  const getLuminance = (color: string): number => {
    const rgb = color.match(/\\d+/g);
    if (!rgb) return 0;
    const [r, g, b] = rgb.map(Number);
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  };
  
  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
};`;
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed ' + file);
});

console.log('All remaining components fixed');