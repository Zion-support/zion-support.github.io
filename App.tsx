import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import Navigation from './app/components/Navigation';
<<<<<<< HEAD
import PerformanceOptimizer from './app/components/PerformanceOptimizer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import ErrorBoundary from './app/components/ErrorBoundary';

// Pages
import HomePage from './app/page';
import AboutPage from './app/pages/AboutPage';
import ServicesPage from './app/pages/ServicesPage';
import ContactPage from './app/pages/ContactPage';
=======
import SEO from './app/components/SEO';
import LoadingSpinner from './app/components/LoadingSpinner';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';

// Lazy load main pages for better code splitting
const HomePage = React.lazy(() => import('./app/page'));
const AboutPage = React.lazy(() => import('./app/about/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));

// Dynamic page loader for all other pages
const DynamicPageLoader: React.FC<{ pagePath: string }> = ({ pagePath }) => {
  const PageComponent = React.useMemo(() => {
    try {
      // Convert path to component path
      const componentPath = pagePath === '/' ? './app/page' : `./app/${pagePath.replace(/^\//, '').replace(/\//g, '/')}/page`;
      return React.lazy(() => import(componentPath));
    } catch (error) {
      console.error('Error loading page:', error);
      // Fallback to 404 page
      return React.lazy(() => import('./app/404/page'));
    }
  }, [pagePath]);

  return (
    <Suspense fallback={<LoadingSpinner size="lg" text="Loading page..." className="min-h-screen" />}>
      <PageComponent />
    </Suspense>
  );
};

// Main router component - removed as it's not used

// Router content component that has access to location
const RouterContent: React.FC = () => {
  const location = useLocation();
  
  return (
    <Suspense fallback={<LoadingSpinner size="lg" text="Loading application..." className="min-h-screen" />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<DynamicPageLoader pagePath={location.pathname} />} />
      </Routes>
    </Suspense>
  );
};
>>>>>>> e147079fabc5ed4c39aa0de061f6683aa394ec59

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
<<<<<<< HEAD
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500 mx-auto"></div>
          <p className="text-white mt-4 text-lg">Loading...</p>
        </div>
      </div>
    );
=======
    return <LoadingSpinner size="lg" text="Loading application..." className="min-h-screen" />;
>>>>>>> e147079fabc5ed4c39aa0de061f6683aa394ec59
  }

  return (
    <ErrorBoundary>
      <HelmetProvider>
<<<<<<< HEAD
        <PerformanceOptimizer>
          <AccessibilityEnhancer>
            <Router>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <Navigation />
                <main className="relative z-10" id="main-content" role="main">
                  <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
                    <div className="text-white text-xl">Loading...</div>
                  </div>}>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/services" element={<ServicesPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                  </Suspense>
                </main>
                <Footer />
              </div>
            </Router>
          </AccessibilityEnhancer>
        </PerformanceOptimizer>
=======
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <AccessibilityEnhancer />
            <SEO 
              title="Zion Tech Group - Advanced AI & IT Solutions"
              description="Leading provider of AI, IT, and 5G solutions. Transform your business with cutting-edge technology, micro SAAS services, and innovative digital solutions."
              keywords="AI solutions, IT services, 5G technology, micro SAAS, cloud computing, cybersecurity, business automation"
            />
            <Header />
            <Navigation />
            <main className="relative z-10 pt-20" id="main-content" role="main">
              <RouterContent />
            </main>
            <Footer />
          </div>
        </Router>
>>>>>>> e147079fabc5ed4c39aa0de061f6683aa394ec59
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;