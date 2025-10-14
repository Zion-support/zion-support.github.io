import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import Navigation from './app/components/Navigation';
import SEO from './app/components/SEO';
import LoadingSpinner from './app/components/LoadingSpinner';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';

// Lazy load main pages for better code splitting
const HomePage = React.lazy(() => import('./app/page'));
const AboutPage = React.lazy(() => import('./app/about/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));

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
        <Route path="/micro-saas" element={<MicroSaasPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<DynamicPageLoader pagePath={location.pathname} />} />
      </Routes>
    </Suspense>
  );
};

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
    return <LoadingSpinner size="lg" text="Loading application..." className="min-h-screen" />;
  }

  return (
    <div>
      <HelmetProvider>
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
      </HelmetProvider>
    </div>
  );
};

export default App;