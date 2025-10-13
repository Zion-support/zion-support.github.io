import React, { useState, useCallback, useEffect, Suspense } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Import pages
import HomePage from './app/page';
import AboutPage from './app/about/page';
import ServicesPage from './app/services/page';
import ContactPage from './app/contact/page';
import PricingPage from './app/pricing/page';
import SupportPage from './app/support/page';
import PrivacyPage from './app/privacy/page';
import TermsPage from './app/terms/page';
import TutorialsPage from './app/tutorials/page';
import DemoPage from './app/demo/page';
import BlogPage from './app/blog/page';

// Import components
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import LoadingStates from './app/components/LoadingStates';

// Import contexts
import { AnalyticsProvider } from './app/contexts/AnalyticsContext.tsx';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingStates />;
  }

  return (
    <HelmetProvider>
      <AnalyticsProvider>
        <Router>
          <div className="min-h-screen bg-gray-900 text-white">
            <Navigation />
            <main>
              <Suspense fallback={<LoadingStates />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/support" element={<SupportPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/tutorials" element={<TutorialsPage />} />
                  <Route path="/demo" element={<DemoPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </AnalyticsProvider>
    </HelmetProvider>
  );
};

export default App;