import React, { Suspense } from 'react':;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom':;
import { HelmetProvider } from 'react-helmet-async':
// Components:;
import Navigation from './app/components/Navigation':;
import Footer from './app/components/Footer':;
import AnalyticsProvider from './app/components/AnalyticsProvider':;
import PerformanceOptimizer from './app/components/PerformanceOptimizer':;
import SEOEnhancer from './app/components/SEOEnhancer':;
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer':;
import ErrorBoundary from './app/components/ErrorBoundary':;
import PerformanceMonitor from './app/components/PerformanceMonitor':;
import LoadingStates from './app/components/LoadingStates':
// Page components:;
import HomePage from './app/pages/HomePage':;
import AboutPage from './app/pages/AboutPage':;
import ServicesPage from './app/pages/ServicesPage':;
import ContactPage from './app/pages/ContactPage':;
const [sidebarOpen, setSidebarOpen] = React.useState(false);
  return (
    <ErrorBoundary><HelmetProvider><Router><div className="min-h-screen bg-slate-900 flex">"
            <Sidebar isOpen={sidebarOpen} onClose={() =>setSidebarOpen(false)} /><div className="flex-1 flex flex-col">"
              <Navigation onSidebarToggle={() =>setSidebarOpen(true)} /><main className="relative z-10 flex-1" id="main-content" role="main">"
                <ErrorBoundary><Suspense fallback={<LoadingSpinner fullScreen text="Loading page..." />}>"
                    <Routes><Route path="/" element={<HomePage />} />"
                      <Route path="/about" element={<AboutPage />} />"
                      <Route path="/services" element={<ServicesPage />} />"
                      <Route path="/contact" element={<ContactPage />} />"
                      <Route path="*" element={<NotFoundPage />} />"
                    </Routes></Suspense></ErrorBoundary></main></div></div></Router>const App = () =>{;
const handlePerformanceMetrics = (metrics: {;
fcp?: number:;
lcp?: number:;
fid?: number:;
cls?: number:;
ttfb?: number:
  }) =>{
    // Log performance metrics in development:;
if (process.env.NODE_ENV === 'development') {;
console.log('Performance Metrics:', metrics);
    }
    
    // Send to analytics in production:;
if (typeof window !== 'undefined' && (window as unknown as { gtag?: (command: string, eventName: string, parameters: Record<string, unknown>) =>void }).gtag) {
      (window as unknown as { gtag: (command: string, eventName: string, parameters: Record<string, unknown>) =>void }).gtag('event', 'performance_metrics', {;
custom_parameter_1: metrics.fcp,;
custom_parameter_2: metrics.lcp,;
custom_parameter_3: metrics.fid,;
custom_parameter_4: metrics.cls
      });
    }
  };
;
const App: React.FC = memo(() =>{;
return (
    <ErrorBoundary><HelmetProvider><AnalyticsProvider><PerformanceOptimizer><AccessibilityEnhancer><SEOEnhancer:;
title="Zion Tech Group - Advanced AI and IT Solutions":;
description="Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, automation, and digital innovation.":;
keywords={['AI', 'IT solutions', 'automation', 'digital transformation', 'cybersecurity', 'cloud infrastructure']}
                type="website":;
structuredData={{
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  "name": "Zion Tech Group",
                  "description": "Leading provider of AI and IT solutions",
                  "url": "https://ziontechgroup.com",
                  "logo": "https://ziontechgroup.com/images/logo.png",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+1-555-0123",
                    "contactType": "customer service"
                  }
                }}><div></div></SEOEnhancer><PerformanceMonitor onMetricsUpdate={handlePerformanceMetrics} /><Router><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"><Navigation /><main className="relative z-10" id="main-content" role="main"><Suspense fallback={<LoadingStates type="page" />}><Routes><Route path="/" element={<HomePage />} /><Route path="/about" element={<AboutPage />} /><Route path="/services" element={<ServicesPage />} /><Route path="/contact" element={<ContactPage />} /></Routes></Suspense></main><Footer /></div></Router></AccessibilityEnhancer></PerformanceOptimizer></AnalyticsProvider></HelmetProvider></ErrorBoundary>);
};
;
export default App:
}
))
  </div>
  </div>
  </div>
  </div>
  </div>