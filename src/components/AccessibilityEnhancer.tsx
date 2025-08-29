import React, { useEffect, useCallback, useRef, useState } from 'react';

interface AccessibilityMetrics {
  contrastRatio: number;
  focusableElements: number;
  headingStructure: boolean;
  altTextCoverage: number;
  ariaLabels: number;
  keyboardNavigation: boolean;
}

interface AccessibilityEnhancerProps {
  enableMonitoring?: boolean;
  enableEnhancements?: boolean;
  showAccessibilityPanel?: boolean;
  logMetrics?: boolean;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableMonitoring = true,
  enableEnhancements = true,
  showAccessibilityPanel = false,
  logMetrics = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<AccessibilityMetrics>({
    contrastRatio: 0,
    focusableElements: 0,
    headingStructure: false,
    altTextCoverage: 0,
    ariaLabels: 0,
    keyboardNavigation: false
  });

  const metricsRef = useRef<AccessibilityMetrics>(metrics);
  const focusTrapRef = useRef<HTMLDivElement>(null);

  // Enhanced keyboard navigation
  const enhanceKeyboardNavigation = useCallback(() => {
    if (!enableEnhancements) return;

    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add main content ID
    const mainContent = document.querySelector('main');
    if (mainContent && !mainContent.id) {
      mainContent.id = 'main-content';
    }

    // Enhanced focus management
    const focusableElements = document.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    let currentFocusIndex = 0;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        
        if (e.shiftKey) {
          currentFocusIndex = currentFocusIndex > 0 ? currentFocusIndex - 1 : focusableElements.length - 1;
        } else {
          currentFocusIndex = currentFocusIndex < focusableElements.length - 1 ? currentFocusIndex + 1 : 0;
        }

        (focusableElements[currentFocusIndex] as HTMLElement).focus();
      }
    };

    document.addEventListener('keydown', handleTabKey);

    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [enableEnhancements]);

  // Enhanced ARIA labels and roles
  const enhanceARIA = useCallback(() => {
    if (!enableEnhancements) return;

    // Add missing ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach((button, index) => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', `Button ${index + 1}`);
      }
    });

    // Add missing ARIA labels to form inputs
    const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby]):not([placeholder])');
    inputs.forEach((input, index) => {
      const label = input.closest('label');
      if (!label) {
        input.setAttribute('aria-label', `Input ${index + 1}`);
      }
    });

    // Add role attributes where missing
    const navs = document.querySelectorAll('nav:not([role])');
    navs.forEach(nav => nav.setAttribute('role', 'navigation'));

    const mains = document.querySelectorAll('main:not([role])');
    mains.forEach(main => main.setAttribute('role', 'main'));

    const footers = document.querySelectorAll('footer:not([role])');
    footers.forEach(footer => footer.setAttribute('role', 'contentinfo'));

    // Add landmark roles
    const headers = document.querySelectorAll('header:not([role])');
    headers.forEach(header => header.setAttribute('role', 'banner'));

    const asides = document.querySelectorAll('aside:not([role])');
    asides.forEach(aside => aside.setAttribute('role', 'complementary'));
  }, [enableEnhancements]);

  // Enhanced color contrast
  const enhanceColorContrast = useCallback(() => {
    if (!enableEnhancements) return;

    // Add high contrast mode toggle
    const contrastToggle = document.createElement('button');
    contrastToggle.textContent = 'High Contrast';
    contrastToggle.className = 'fixed top-4 right-4 z-50 bg-yellow-600 text-black px-3 py-2 rounded text-sm font-medium';
    contrastToggle.setAttribute('aria-label', 'Toggle high contrast mode');
    
    let highContrast = false;
    
    contrastToggle.addEventListener('click', () => {
      highContrast = !highContrast;
      document.documentElement.classList.toggle('high-contrast', highContrast);
      contrastToggle.textContent = highContrast ? 'Normal Contrast' : 'High Contrast';
    });

    document.body.appendChild(contrastToggle);

    // Add focus visible styles
    const style = document.createElement('style');
    style.textContent = `
      .focus-visible:focus {
        outline: 3px solid #22ddd2 !important;
        outline-offset: 2px !important;
      }
      
      .high-contrast {
        --zion-cyan: #00ffff !important;
        --zion-purple: #ff00ff !important;
        --zion-blue: #0080ff !important;
        --zion-slate: #ffffff !important;
        --zion-slate-dark: #000000 !important;
      }
      
      .high-contrast * {
        background-color: var(--zion-slate-dark) !important;
        color: var(--zion-slate) !important;
        border-color: var(--zion-cyan) !important;
      }
      
      .high-contrast .btn-futuristic {
        background: var(--zion-cyan) !important;
        color: var(--zion-slate-dark) !important;
        border: 2px solid var(--zion-slate) !important;
      }
    `;
    document.head.appendChild(style);
  }, [enableEnhancements]);

  // Enhanced screen reader support
  const enhanceScreenReaderSupport = useCallback(() => {
    if (!enableEnhancements) return;

    // Add live regions for dynamic content
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);

    // Announce page changes
    const announcePageChange = (title: string) => {
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.textContent = `Page loaded: ${title}`;
      }
    };

    // Monitor route changes
    const observer = new MutationObserver(() => {
      const title = document.title;
      if (title) {
        announcePageChange(title);
      }
    });

    observer.observe(document.head, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, [enableEnhancements]);

  // Monitor accessibility metrics
  const monitorAccessibility = useCallback(() => {
    if (!enableMonitoring) return;

    const calculateMetrics = (): AccessibilityMetrics => {
      // Calculate contrast ratio (simplified)
      const contrastRatio = 4.5; // Placeholder - would need actual calculation

      // Count focusable elements
      const focusableElements = document.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      ).length;

      // Check heading structure
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let headingStructure = true;
      let previousLevel = 0;
      
      headings.forEach(heading => {
        const level = parseInt(heading.tagName.charAt(1));
        if (level > previousLevel + 1) {
          headingStructure = false;
        }
        previousLevel = level;
      });

      // Check alt text coverage
      const images = document.querySelectorAll('img');
      const imagesWithAlt = document.querySelectorAll('img[alt]:not([alt=""])');
      const altTextCoverage = images.length > 0 ? (imagesWithAlt.length / images.length) * 100 : 100;

      // Count ARIA labels
      const ariaLabels = document.querySelectorAll('[aria-label], [aria-labelledby]').length;

      // Check keyboard navigation
      const keyboardNavigation = document.querySelectorAll('a[href], button, input, select, textarea').length > 0;

      return {
        contrastRatio,
        focusableElements,
        headingStructure,
        altTextCoverage,
        ariaLabels,
        keyboardNavigation
      };
    };

    // Update metrics periodically
    const updateMetrics = () => {
      const newMetrics = calculateMetrics();
      setMetrics(newMetrics);
      metricsRef.current = newMetrics;
      
      if (logMetrics) {
        console.log('Accessibility Metrics:', newMetrics);
      }
    };

    // Initial calculation
    updateMetrics();

    // Update on DOM changes
    const observer = new MutationObserver(updateMetrics);
    observer.observe(document.body, { childList: true, subtree: true });

    // Periodic updates
    const interval = setInterval(updateMetrics, 5000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, [enableMonitoring, logMetrics]);

  // Toggle accessibility panel
  const toggleAccessibilityPanel = () => setIsVisible(!isVisible);

  // Get accessibility score
  const getAccessibilityScore = useCallback((): number => {
    let score = 100;
    
    if (metrics.contrastRatio < 4.5) score -= 20;
    if (!metrics.headingStructure) score -= 15;
    if (metrics.altTextCoverage < 90) score -= 15;
    if (metrics.ariaLabels < 5) score -= 10;
    if (!metrics.keyboardNavigation) score -= 10;
    
    return Math.max(0, score);
  }, [metrics]);

  // Get accessibility grade
  const getAccessibilityGrade = useCallback((score: number): { grade: string; color: string } => {
    if (score >= 90) return { grade: 'A', color: 'text-green-400' };
    if (score >= 80) return { grade: 'B', color: 'text-yellow-400' };
    if (score >= 70) return { grade: 'C', color: 'text-orange-400' };
    if (score >= 60) return { grade: 'D', color: 'text-red-400' };
    return { grade: 'F', color: 'text-red-600' };
  }, []);

  useEffect(() => {
    // Initialize enhancements
    const cleanupFunctions = [
      enhanceKeyboardNavigation(),
      enhanceARIA(),
      enhanceColorContrast(),
      enhanceScreenReaderSupport(),
      monitorAccessibility()
    ].filter(Boolean);

    return () => {
      cleanupFunctions.forEach(cleanup => {
        if (typeof cleanup === 'function') cleanup();
      });
    };
  }, [
    enhanceKeyboardNavigation,
    enhanceARIA,
    enhanceColorContrast,
    enhanceScreenReaderSupport,
    monitorAccessibility
  ]);

  // Expose metrics for external monitoring
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).zionAccessibilityMetrics = metricsRef.current;
    }
  }, []);

  if (!showAccessibilityPanel) return null;

  const score = getAccessibilityScore();
  const { grade, color } = getAccessibilityGrade(score);

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={toggleAccessibilityPanel}
        className="fixed bottom-6 left-6 z-50 p-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
        title="Accessibility Monitor"
        aria-label="Toggle accessibility panel"
      >
        <span className="text-lg">♿</span>
      </button>

      {/* Accessibility Panel */}
      {isVisible && (
        <div className="fixed bottom-6 left-20 z-40 w-80 bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-lg shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-700">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">♿</span>
              <h3 className="text-white font-semibold">Accessibility Monitor</h3>
            </div>
            <button
              onClick={toggleAccessibilityPanel}
              className="p-1 text-slate-400 hover:text-white transition-colors"
              title="Close"
              aria-label="Close accessibility panel"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
            {/* Accessibility Score */}
            <div className="text-center p-4 bg-slate-800/50 rounded-lg">
              <div className="text-3xl font-bold text-white mb-2">{score}</div>
              <div className={`text-2xl font-bold ${color} mb-2`}>{grade}</div>
              <div className="text-slate-400 text-sm">Accessibility Score</div>
            </div>

            {/* Metrics */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold">Accessibility Metrics</h4>
              
              <div className="grid grid-cols-2 gap-3">
                <MetricCard
                  label="Contrast"
                  value={metrics.contrastRatio}
                  unit=":1"
                  good={metrics.contrastRatio >= 4.5}
                  description="Color Contrast Ratio"
                />
                <MetricCard
                  label="Focusable"
                  value={metrics.focusableElements}
                  unit=""
                  good={metrics.focusableElements > 0}
                  description="Focusable Elements"
                />
                <MetricCard
                  label="Headings"
                  value={metrics.headingStructure ? 100 : 0}
                  unit="%"
                  good={metrics.headingStructure}
                  description="Heading Structure"
                />
                <MetricCard
                  label="Alt Text"
                  value={metrics.altTextCoverage}
                  unit="%"
                  good={metrics.altTextCoverage >= 90}
                  description="Image Alt Text"
                />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2">
              <h4 className="text-white font-semibold">Quick Actions</h4>
              <button
                onClick={() => document.documentElement.classList.toggle('high-contrast')}
                className="w-full px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded transition-colors"
              >
                Toggle High Contrast
              </button>
              <button
                onClick={() => document.querySelector('main')?.focus()}
                className="w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors"
              >
                Focus Main Content
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Metric Card Component
interface MetricCardProps {
  label: string;
  value: number;
  unit: string;
  good: boolean;
  description: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value, unit, good, description }) => (
  <div className="bg-slate-800/50 p-3 rounded-lg">
    <div className="flex items-center justify-between mb-1">
      <span className="text-xs text-slate-400">{label}</span>
      <div className={`w-2 h-2 rounded-full ${good ? 'bg-green-400' : 'bg-red-400'}`} />
    </div>
    <div className="text-lg font-semibold text-white">
      {value.toFixed(1)}{unit}
    </div>
    <div className="text-xs text-slate-500">{description}</div>
  </div>
);
