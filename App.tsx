import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import React, { Suspense } from 'react';

// Lazy load pages
const HomePage = lazy(() => import('./app/page'));
const AISolutionsPage = lazy(() => import('./app/ai-solutions/page'));
const ITSolutionsPage = lazy(() => import('./app/it-solutions/page'));
const MicroSaaSSolutionsPage = lazy(() => import('./app/micro-saas-solutions/page'));
const AIBusinessIntelligenceProPage = lazy(() => import('./app/ai-business-intelligence-pro/page'));
const AICybersecuritySuiteProPage = lazy(() => import('./app/ai-cybersecurity-suite-pro/page'));

// Simple loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-white text-xl">Loading...</div>
  </div>
);

// Simple error boundary
interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to monitoring service in production
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <div className="text-white text-xl">Something went wrong.</div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  useEffect(() => {
// Performance monitoring
if (typeof window !== 'undefined') {
  // Monitor Core Web Vitals
  import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB }) => {
    onCLS((metric) => {
      if (process.env.NODE_ENV === 'development') {
        console.warn('CLS:', metric);
      }
    });
    onFCP((metric) => {
      if (process.env.NODE_ENV === 'development') {
        console.warn('FCP:', metric);
      }
    });
    onLCP((metric) => {
      if (process.env.NODE_ENV === 'development') {
        console.warn('LCP:', metric);
      }
    });
    onTTFB((metric) => {
      if (process.env.NODE_ENV === 'development') {
        console.warn('TTFB:', metric);
      }
    });
  });

  // Monitor bundle size
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'navigation') {
        if (process.env.NODE_ENV === 'development') {
          console.warn('Page load time:', (entry as PerformanceNavigationTiming).loadEventEnd - (entry as PerformanceNavigationTiming).loadEventStart, 'ms');
        }
      }
    }
  });
  observer.observe({ entryTypes: ['navigation'] });
}

    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      console.warn('Zion Tech Group App initialized');
    }
  }, []);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ai-solutions" element={<AISolutionsPage />} />
                <Route path="/it-solutions" element={<ITSolutionsPage />} />
                <Route path="/micro-saas-solutions" element={<MicroSaaSSolutionsPage />} />
                <Route path="/ai-business-intelligence-pro" element={<AIBusinessIntelligenceProPage />} />
                <Route path="/ai-cybersecurity-suite-pro" element={<AICybersecuritySuiteProPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Suspense>
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;