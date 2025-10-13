#!/bin/bash

# Create FuturisticCard component
echo "Creating FuturisticCard.tsx..."
cat > /workspace/app/components/FuturisticCard.tsx << 'CARD_EOF'
import React from 'react';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ 
  children, 
  className = '', 
  hover = true 
}) => {
  const baseClasses = 'bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-300';
  const hoverClasses = hover ? 'hover:bg-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10' : '';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export default FuturisticCard;
CARD_EOF

# Create ResponsiveContainer component
echo "Creating ResponsiveContainer.tsx..."
cat > /workspace/app/components/ResponsiveContainer.tsx << 'CONTAINER_EOF'
import React from 'react';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default ResponsiveContainer;
CONTAINER_EOF

# Create ResponsiveGrid component
echo "Creating ResponsiveGrid.tsx..."
cat > /workspace/app/components/ResponsiveGrid.tsx << 'GRID_EOF'
import React from 'react';

interface ResponsiveGridProps {
  children: React.ReactNode;
  cols?: number;
  gap?: number;
  className?: string;
}

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({ 
  children, 
  cols = 3,
  gap = 6,
  className = '' 
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
    6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'
  };
  
  const gapClasses = {
    2: 'gap-2',
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8'
  };

  return (
    <div className={`grid ${gridCols[cols as keyof typeof gridCols]} ${gapClasses[gap as keyof typeof gapClasses]} ${className}`}>
      {children}
    </div>
  );
};

export default ResponsiveGrid;
CONTAINER_EOF

# Create ResponsiveText component
echo "Creating ResponsiveText.tsx..."
cat > /workspace/app/components/ResponsiveText.tsx << 'TEXT_EOF'
import React from 'react';

interface ResponsiveTextProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'white' | 'gray' | 'cyan' | 'purple' | 'pink';
  className?: string;
}

const ResponsiveText: React.FC<ResponsiveTextProps> = ({ 
  children, 
  size = 'md',
  weight = 'normal',
  color = 'white',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl'
  };
  
  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  };
  
  const colorClasses = {
    white: 'text-white',
    gray: 'text-gray-300',
    cyan: 'text-cyan-400',
    purple: 'text-purple-400',
    pink: 'text-pink-400'
  };

  return (
    <span className={`${sizeClasses[size]} ${weightClasses[weight]} ${colorClasses[color]} ${className}`}>
      {children}
    </span>
  );
};

export default ResponsiveText;
TEXT_EOF

# Create FuturisticText component
echo "Creating FuturisticText.tsx..."
cat > /workspace/app/components/FuturisticText.tsx << 'FUTURISTIC_TEXT_EOF'
import React from 'react';

interface FuturisticTextProps {
  children: React.ReactNode;
  variant?: 'gradient' | 'glow' | 'neon' | 'default';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  className?: string;
}

const FuturisticText: React.FC<FuturisticTextProps> = ({ 
  children, 
  variant = 'gradient',
  size = 'md',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl'
  };
  
  const variantClasses = {
    gradient: 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400',
    glow: 'text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]',
    neon: 'text-cyan-400 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)] drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]',
    default: 'text-white'
  };

  return (
    <span className={`${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default FuturisticText;
FUTURISTIC_TEXT_EOF

# Create WebVitalsTracker component
echo "Creating WebVitalsTracker.tsx..."
cat > /workspace/app/components/WebVitalsTracker.tsx << 'VITALS_TRACKER_EOF'
import React, { useEffect } from 'react';

interface WebVitalsData {
  name: string;
  value: number;
  delta: number;
  id: string;
}

const WebVitalsTracker: React.FC = () => {
  useEffect(() => {
    const sendToAnalytics = (metric: WebVitalsData) => {
      // Send to Google Analytics or other analytics service
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: metric.name,
          value: Math.round(metric.value),
          non_interaction: true,
        });
      }
      
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Web Vital:', metric.name, metric.value);
      }
    };

    // Track Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // LCP
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        sendToAnalytics({
          name: 'LCP',
          value: lastEntry.startTime,
          delta: lastEntry.startTime,
          id: lastEntry.id
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          sendToAnalytics({
            name: 'FID',
            value: entry.processingStart - entry.startTime,
            delta: entry.processingStart - entry.startTime,
            id: entry.id
          });
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        sendToAnalytics({
          name: 'CLS',
          value: clsValue,
          delta: clsValue,
          id: 'cls'
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  return null; // This component doesn't render anything
};

export default WebVitalsTracker;
VITALS_TRACKER_EOF

# Create AnalyticsProvider component
echo "Creating AnalyticsProvider.tsx..."
cat > /workspace/app/components/AnalyticsProvider.tsx << 'ANALYTICS_EOF'
import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string, properties?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', eventName, properties);
    }
    
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', eventName, properties);
    }
  };

  const trackPageView = (pageName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href,
        ...properties
      });
    }
    
    if (process.env.NODE_ENV === 'development') {
      console.log('Page View:', pageName, properties);
    }
  };

  useEffect(() => {
    // Initialize analytics
    if (typeof window !== 'undefined') {
      // Google Analytics initialization
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`;
      document.head.appendChild(script);

      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      (window as any).gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    }
  }, []);

  return (
    <AnalyticsContext.Provider value={{ trackEvent, trackPageView }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

export default AnalyticsProvider;
ANALYTICS_EOF

# Create EnhancedAccessibility component
echo "Creating EnhancedAccessibility.tsx..."
cat > /workspace/app/components/EnhancedAccessibility.tsx << 'ACCESS_ENHANCED_EOF'
import React, { useEffect } from 'react';

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
  useEffect(() => {
    // Add accessibility enhancements
    const addSkipLinks = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    const addAriaLabels = () => {
      // Add aria-labels to buttons without text
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      buttons.forEach((button, index) => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', `Button ${index + 1}`);
        }
      });
    };

    const addFocusManagement = () => {
      // Ensure focus is visible
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });

      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });
    };

    addSkipLinks();
    addAriaLabels();
    addFocusManagement();

    return () => {
      // Cleanup
      const skipLink = document.querySelector('a[href="#main-content"]');
      if (skipLink) {
        skipLink.remove();
      }
    };
  }, []);

  return <>{children}</>;
};

export default EnhancedAccessibility;
ACCESS_ENHANCED_EOF

# Create EnhancedErrorBoundary component
echo "Creating EnhancedErrorBoundary.tsx..."
cat > /workspace/app/components/EnhancedErrorBoundary.tsx << 'ERROR_BOUNDARY_EOF'
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="text-center p-8 max-w-md mx-auto">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button
              onClick={this.handleReload}
              className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Reload Page
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-gray-400 cursor-pointer">Error Details</summary>
                <pre className="mt-2 text-xs text-gray-500 bg-black/20 p-4 rounded overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;
ERROR_BOUNDARY_EOF

# Create LoadingPageEnhanced component
echo "Creating LoadingPageEnhanced.tsx..."
cat > /workspace/app/components/LoadingPageEnhanced.tsx << 'LOADING_ENHANCED_EOF'
import React from 'react';
import { Loader2, Brain, Sparkles } from 'lucide-react';

const LoadingPageEnhanced: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
            <Brain className="w-10 h-10 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full flex items-center justify-center animate-bounce">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
        </div>
        <Loader2 className="w-8 h-8 text-cyan-400 animate-spin mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-white mb-2">Loading Zion Tech Group</h2>
        <p className="text-gray-300">Preparing your experience...</p>
      </div>
    </div>
  );
};

export default LoadingPageEnhanced;
LOADING_ENHANCED_EOF

# Create PerformanceOptimizer component
echo "Creating PerformanceOptimizer.tsx..."
cat > /workspace/app/components/PerformanceOptimizer.tsx << 'PERF_OPTIMIZER_EOF'
import React, { useEffect } from 'react';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.svg'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    };

    // Defer non-critical scripts
    const deferNonCriticalScripts = () => {
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach(script => {
        script.defer = true;
      });
    };

    preloadCriticalResources();
    optimizeImages();
    deferNonCriticalScripts();

    // Cleanup
    return () => {
      // Remove any added elements
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;
PERF_OPTIMIZER_EOF

echo "All missing components created!"
