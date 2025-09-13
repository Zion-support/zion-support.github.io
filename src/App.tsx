import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import Footer from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Import pages
import HomePage from './pages/index';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import ServicesPage from './pages/services';
import PricingPage from './pages/pricing';

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <AppHeader />
          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <ChatAssistant />
        </div>
      </Router>
    </ErrorBoundary>
  );
}