import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import PerformanceMetrics from './components/PerformanceMetrics';
import Toast from './components/Toast';

// Pages
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// Hooks
import { useToast } from './hooks/useToast';

// Analytics
import { trackPageView, trackButtonClick } from './utils/analytics';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const { toasts, addToast, removeToast } = useToast();

  // Initialize app
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Load saved theme preference
        const savedTheme = localStorage.getItem('darkMode');
        if (savedTheme !== null) {
          setDarkMode(JSON.parse(savedTheme));
        }

        // Simulate loading time
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setIsLoading(false);
        
        // Track initial page view
        trackPageView(window.location.pathname);
      } catch (err) {
        console.error('App initialization error:', err);
        setError('Failed to initialize application');
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  // Handle online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Handle theme toggle
  const toggleDarkMode = useCallback(() => {
    setDarkMode(prev => {
      const newMode = !prev;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  }, []);

  // Handle button clicks
  const handleButtonClick = useCallback((action: string, location: string) => {
    trackButtonClick(action, location);
  }, []);

  // Error boundary fallback
  if (error) {
    return (
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <Helmet>
          <title>Error - Zion Tech Group</title>
          <meta name="description" content="An error occurred while loading the application" />
        </Helmet>
        <div className="error-screen">
          <div className="error-icon">⚠️</div>
          <h2>Something went wrong</h2>
          <p>{error}</p>
          <button 
            className="btn-primary" 
            onClick={() => window.location.reload()}
            aria-label="Reload page"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Loading screen
  if (isLoading) {
    return (
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <Helmet>
          <title>Loading - Zion Tech Group</title>
          <meta name="description" content="Loading innovative technology solutions" />
        </Helmet>
        <div className="loading-screen">
          <LoadingSpinner size="large" text="Loading Zion Tech Group..." />
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <Helmet>
          <title>Zion Tech Group - Revolutionary Technology Solutions</title>
          <meta name="description" content="Leading provider of AI, quantum computing, and next-generation technology solutions" />
          <meta name="keywords" content="AI, quantum computing, technology, innovation, software development" />
        </Helmet>

        {/* Offline Banner */}
        {!isOnline && (
          <div className="offline-banner" role="alert" aria-live="polite">
            <span>⚠️ You're currently offline. Some features may be limited.</span>
          </div>
        )}

        <Router>
          <Header 
            darkMode={darkMode} 
            onToggleDarkMode={toggleDarkMode}
            onButtonClick={handleButtonClick}
          />
          
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home onButtonClick={handleButtonClick} />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact onButtonClick={handleButtonClick} />} />
            </Routes>
          </main>

          <Footer />
        </Router>

        {/* Toast Notifications */}
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onClose={() => removeToast(toast.id)} />
        ))}

        {/* Performance Metrics (Development Only) */}
        <PerformanceMetrics show={process.env.NODE_ENV === 'development'} />
      </div>
    </ErrorBoundary>
  );
}

export default App;