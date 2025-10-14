import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import Navigation from './app/components/Navigation';

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
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"><div className="text-white text-xl">Loading page...</div></div>}>
      <PageComponent />
    </Suspense>
  );
};


// Router content component that has access to location
const RouterContent: React.FC = () => {
  const location = useLocation();
  
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center">
          <div className="cyber-loading mx-auto mb-4"></div>
          <div className="text-white text-xl">Loading application...</div>
        </div>
      </div>
    }>
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
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-white text-xl">Loading application...</div>
      </div>
    );
  }

  return (
    <div>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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