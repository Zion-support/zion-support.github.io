import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Header from './app/components/Header';
import Footer from './app/components/Footer';

// Pages
import HomePage from './app/page';
import AboutPage from './app/about/page';
import ServicesPage from './app/services/page';
import ContactPage from './app/contact/page';
import AIAnalyticsDashboardPro from './app/ai-analytics-dashboard-pro/page';
import AICodeAssistantPro from './app/ai-code-assistant-pro/page';
import FiveGImplementation from './app/5g-implementation/page';

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
            <main className="relative z-10 pt-20" id="main-content" role="main">
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
                  <Route path="/ai-analytics-dashboard-pro" element={<AIAnalyticsDashboardPro />} />
                  <Route path="/ai-code-assistant-pro" element={<AICodeAssistantPro />} />
                  <Route path="/5g-implementation" element={<FiveGImplementation />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </div>
  );
};

export default App;