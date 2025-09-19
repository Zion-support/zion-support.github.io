import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { trackPageView, trackButtonClick, trackFeatureInteraction } from './utils/analytics';
import LoadingSpinner from './components/LoadingSpinner';
import ThemeToggle from './components/ThemeToggle';
import Toast from './components/Toast';
import PerformanceMetrics from './components/PerformanceMetrics';
import { useToast } from './hooks/useToast';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved theme preference or default to system preference
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) return JSON.parse(saved);
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [animatedCounts, setAnimatedCounts] = useState({
    projects: 0,
    clients: 0,
    years: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isOnline, setIsOnline] = useState(typeof window !== 'undefined' && typeof window.navigator !== 'undefined' ? window.navigator.onLine : true);
  const { toasts, showSuccess, showInfo, showWarning } = useToast();

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Persist dark mode preference
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  // Handle online/offline status
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      showSuccess('Connection restored!');
    };
    const handleOffline = () => {
      setIsOnline(false);
      showWarning('You are now offline. Some features may be limited.');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [showSuccess, showWarning]);

  // Animate counters on component mount
  useEffect(() => {
    const animateCount = (key: keyof typeof animatedCounts, target: number) => {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, duration / steps);
    };

    // Simulate loading time for better UX
    const loadingTimer = setTimeout(() => {
      try {
        setIsLoading(false);
        animateCount('projects', 150);
        animateCount('clients', 500);
        animateCount('years', 10);
      } catch (err) {
        setError('Failed to load application data');
        // eslint-disable-next-line no-console
        console.error('Loading error:', err);
      }
    }, 1000);

    return () => clearTimeout(loadingTimer);
  }, []);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev: boolean) => {
      const newMode = !prev;
      trackButtonClick('theme_toggle', newMode ? 'dark' : 'light');
      showInfo(`Switched to ${newMode ? 'dark' : 'light'} mode`);
      return newMode;
    });
  }, [showInfo]);

  // Track page view on mount
  useEffect(() => {
    trackPageView('home');
  }, []);

  const features = useMemo(() => [
    {
      title: "AI Solutions",
      description: "Advanced artificial intelligence services including machine learning, natural language processing, and computer vision.",
      icon: "🤖",
      color: "#6366f1"
    },
    {
      title: "Blockchain Technology",
      description: "Secure and decentralized solutions for modern businesses with smart contracts and DeFi platforms.",
      icon: "⛓️",
      color: "#10b981"
    },
    {
      title: "IT Services",
      description: "Comprehensive IT infrastructure management, cloud solutions, and digital transformation services.",
      icon: "💻",
      color: "#f59e0b"
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum computing solutions for complex problem-solving and optimization.",
      icon: "⚛️",
      color: "#8b5cf6"
    }
  ], []);

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
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Helmet>
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
            darkMode={darkMode} 
            onToggle={toggleDarkMode}
            className="mr-4"
          />
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
      </header>
      
      {/* Toast Notifications */}
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
      
      {/* Performance Metrics (Development Only) */}
      <PerformanceMetrics show={process.env.NODE_ENV === 'development'} />
    </div>
  );
}

export default App;