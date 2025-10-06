import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

// Import components
import ErrorBoundary from './components/ErrorBoundary';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import LoadingSpinner from './components/LoadingSpinner';

// Import page components
import HomePage from '../app/page';
import AboutPage from '../app/about/page';
import ContactPage from '../app/contact/page';
import ServicesPage from '../app/services/page';
import TeamPage from '../app/team/page';
import PrivacyPage from '../app/privacy/page';
import TermsPage from '../app/terms/page';
import EnterprisePage from '../app/enterprise/page';

function App() {
  useEffect(() => {
    // Initialize app
    console.log('App initialized successfully');
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="App">
            <SEOOptimizer>
              <AccessibilityEnhancer>
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/team" element={<TeamPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/enterprise" element={<EnterprisePage />} />
                    {/* Fallback route */}
                    <Route path="*" element={<HomePage />} />
                  </Routes>
                </Suspense>
              </AccessibilityEnhancer>
            </SEOOptimizer>
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;