<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Button from './components/Button';
import Card from './components/Card';
import ServiceCard from './components/ServiceCard';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import Toast from './components/Toast';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
>>>>>>> af5d3bb5a25353b863602b6ccb4c281c2ad784b9

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
<<<<<<< HEAD
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
=======
          <title>Zion Tech Group - Innovative Technology Solutions</title>
          <meta name="description" content="Leading provider of AI, blockchain, IT services, and quantum computing solutions. Transform your business with cutting-edge technology." />
          <meta name="keywords" content="AI solutions, blockchain technology, IT services, quantum computing, digital transformation" />
        <meta property="og:title" content="Zion Tech Group - Innovative Technology Solutions" />
        <meta property="og:description" content="Leading provider of AI, blockchain, IT services, and quantum computing solutions." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Innovative Technology Solutions" />
        <meta name="twitter:description" content="Leading provider of AI, blockchain, IT services, and quantum computing solutions." />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>
      {!isOnline && (
        <div className="offline-banner" role="alert" aria-live="polite">
          <span>⚠️ You&apos;re currently offline. Some features may be limited.</span>
        </div>
      )}
      <header className="App-header">
        <div className="header-controls">
          <ThemeToggle 
>>>>>>> af5d3bb5a25353b863602b6ccb4c281c2ad784b9
            darkMode={darkMode} 
            onToggleDarkMode={toggleDarkMode}
            onButtonClick={handleButtonClick}
          />
<<<<<<< HEAD
          
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
=======
          <div className="current-time" role="timer" aria-live="polite">
            {currentTime.toLocaleTimeString()}
          </div>
        </div>
        <h1 className="main-title">
          <span className="title-highlight">Zion Tech Group</span>
        </h1>
        <p className="subtitle">Welcome to our innovative technology solutions</p>
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-number">{animatedCounts.projects}+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{animatedCounts.clients}+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{animatedCounts.years}+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>
      </header>
      
      <div className="features">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="feature-card"
            style={{ '--card-color': feature.color } as React.CSSProperties}
          >
            <div className="feature-icon" role="img" aria-label={`${feature.title} icon`}>
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <button 
              className="learn-more-btn"
              onClick={() => {
                trackFeatureInteraction(feature.title, 'learn_more_clicked');
              }}
              aria-label={`Learn more about ${feature.title}`}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
      
      <div className="cta-section">
        <h2>Ready to Transform Your Business?</h2>
        <p>Get started with our cutting-edge technology solutions today.</p>
        <div className="cta-buttons">
          <button 
            className="btn-primary"
            onClick={() => trackButtonClick('get_started', 'cta_section')}
          >
            Get Started
          </button>
          <button 
            className="btn-secondary"
            onClick={() => trackButtonClick('contact_us', 'cta_section')}
          >
            Contact Us
          </button>
        </div>
      </div>
      {/* Toast Notifications */}
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
      
      {/* Performance Metrics (Development Only) */}
      <PerformanceMetrics show={process.env.NODE_ENV === 'development'} />
>>>>>>> af5d3bb5a25353b863602b6ccb4c281c2ad784b9
      </div>
    </ErrorBoundary>
  );
}

export default App;