import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppHeader } from './layout/AppHeader.jsx';
import { Footer } from './components/Footer.jsx';
import { ChatAssistant } from './components/ChatAssistant.jsx';
import { SEOHead } from './components/SEOHead.jsx';
import { AccessibilityProvider, AccessibilityToolbar } from './components/AccessibilityProvider.jsx';
import { PerformanceMonitor } from './components/PerformanceMonitor.jsx';
import { registerServiceWorker, monitorNetworkStatus, monitorPerformance } from './utils/serviceWorkerRegistration.js';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home.jsx'));
const About = React.lazy(() => import('./pages/About.jsx'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage.jsx'));
const Contact = React.lazy(() => import('./pages/Contact.jsx'));
const Login = React.lazy(() => import('./pages/Login.jsx'));

const LoadingSpinner = () => (
  <div className="min-h-screen bg-futuristic flex items-center justify-center" role="status" aria-label="Loading page content">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-zion-cyan text-lg">Loading...</p>
    </div>
  </div>
);

function App() {
  useEffect(() => {
    // Register service worker
    registerServiceWorker();
    
    // Monitor network status
    monitorNetworkStatus();
    
    // Monitor performance
    monitorPerformance();
    
    // Request notification permission
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  return (
    <HelmetProvider>
      <AccessibilityProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
            <SEOHead />
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>
            <AppHeader />
            <main id="main-content" className="flex-1" role="main" tabIndex="-1">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <ChatAssistant />
            <AccessibilityToolbar />
            <PerformanceMonitor />
          </div>
        </Router>
      </AccessibilityProvider>
    </HelmetProvider>
  );
}

export default App;