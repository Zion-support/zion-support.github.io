import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import Navigation from './app/components/Navigation';
import PerformanceOptimizer from './app/components/PerformanceOptimizer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import ErrorBoundary from './app/components/ErrorBoundary';

// Pages
import HomePage from './app/page';
import AboutPage from './app/pages/AboutPage';
import ServicesPage from './app/pages/ServicesPage';
import ContactPage from './app/pages/ContactPage';

// Service Pages
import AiAnalyticsDashboardProPage from './app/ai-analytics-dashboard-pro/page';
import AiVoiceAssistantEnterprisePage from './app/ai-voice-assistant-enterprise/page';
import AiCybersecurityPlatformPage from './app/ai-cybersecurity-platform/page';
import AiAccountingAssistantPage from './app/ai-accounting-assistant/page';
import Page5gImplementationPage from './app/5g-implementation/page';
import ItServicesPage from './app/it-services/page';

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
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500 mx-auto"></div>
          <p className="text-white mt-4 text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <HelmetProvider>
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
                      
                      {/* Service Pages */}
                      <Route path="/ai-analytics-dashboard-pro" element={<AiAnalyticsDashboardProPage />} />
                      <Route path="/ai-voice-assistant-enterprise" element={<AiVoiceAssistantEnterprisePage />} />
                      <Route path="/ai-cybersecurity-platform" element={<AiCybersecurityPlatformPage />} />
                      <Route path="/ai-accounting-assistant" element={<AiAccountingAssistantPage />} />
                      <Route path="/5g-implementation" element={<Page5gImplementationPage />} />
                      <Route path="/it-services" element={<ItServicesPage />} />
                    </Routes>
                  </Suspense>
                </main>
                <Footer />
              </div>
            </Router>
          </AccessibilityEnhancer>
        </PerformanceOptimizer>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;