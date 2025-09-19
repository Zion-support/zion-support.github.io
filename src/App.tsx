import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { trackPageView, trackButtonClick, trackFeatureInteraction } from './utils/analytics';
import LoadingSpinner from './components/LoadingSpinner';
import ThemeToggle from './components/ThemeToggle';
import Toast from './components/Toast';
import PerformanceMetrics from './components/PerformanceMetrics';
import ErrorBoundary from './components/ErrorBoundary';
import { useToast } from './hooks/useToast';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', 
    typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false
  );
  const [animatedCounts, setAnimatedCounts] = useState({
    projects: 0,
    clients: 0,
    years: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isOnline, setIsOnline] = useState(typeof window !== 'undefined' && typeof window.navigator !== 'undefined' ? window.navigator.onLine : true);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const { toasts, showSuccess, showInfo, showWarning } = useToast();

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Apply dark mode to document
  useEffect(() => {
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

  // Animate counters on component mount with intersection observer
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

    // Use requestIdleCallback for better performance
    const scheduleAnimation = () => {
      if ('requestIdleCallback' in window) {
        // eslint-disable-next-line no-unused-vars
        (window as Window & { requestIdleCallback: (callback: () => void) => void }).requestIdleCallback(() => {
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
        });
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
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
        }, 100);
      }
    };

    // Simulate loading time for better UX
    const loadingTimer = setTimeout(scheduleAnimation, 1000);

    return () => clearTimeout(loadingTimer);
  }, []);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev: boolean) => {
      const newMode = !prev;
      trackButtonClick('theme_toggle', newMode ? 'dark' : 'light');
      showInfo(`Switched to ${newMode ? 'dark' : 'light'} mode`);
      return newMode;
    });
  }, [showInfo, setDarkMode]);

  // Track page view on mount
  useEffect(() => {
    trackPageView('home');
    
    // Track performance metrics
    if (typeof window !== 'undefined' && 'performance' in window) {
      const perfData = {
        loadTime: performance.timing.loadEventEnd - performance.timing.navigationStart,
        domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
        firstPaint: performance.getEntriesByType('paint').find(entry => entry.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: performance.getEntriesByType('paint').find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
      };
      
      // Performance metrics collected
      trackFeatureInteraction('performance_metrics', perfData);
    }
  }, []);

  // Add keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey) {
        switch (event.key) {
          case 'k':
            event.preventDefault();
            toggleDarkMode();
            break;
          case 'r':
            event.preventDefault();
            window.location.reload();
            break;
          case 'h':
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            break;
          case 'l':
            event.preventDefault();
            document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [toggleDarkMode]);

  // Register service worker for PWA capabilities
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in window.navigator) {
      // Use requestIdleCallback for non-critical service worker registration
      const registerSW = () => {
        window.navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            // Service Worker registered successfully
            trackFeatureInteraction('service_worker_registered', { scope: registration.scope });
          })
          .catch((error) => {
            // Service Worker registration failed
            trackFeatureInteraction('service_worker_failed', { error: error.message });
          });
      };

      if ('requestIdleCallback' in window) {
        // eslint-disable-next-line no-unused-vars
        (window as Window & { requestIdleCallback: (callback: () => void) => void }).requestIdleCallback(registerSW);
      } else {
        setTimeout(registerSW, 2000);
      }
    }
  }, []);

  // Handle scroll to top button with throttling for performance
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowScrollToTop(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const features = useMemo(() => [
    {
      title: "AI Solutions",
      description: "Advanced artificial intelligence services including machine learning, natural language processing, and computer vision.",
      icon: "🤖",
      color: "#6366f1",
      features: ["Machine Learning", "NLP", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "Blockchain Technology",
      description: "Secure and decentralized solutions for modern businesses with smart contracts and DeFi platforms.",
      icon: "⛓️",
      color: "#10b981",
      features: ["Smart Contracts", "DeFi", "NFTs", "Cryptocurrency"]
    },
    {
      title: "IT Services",
      description: "Comprehensive IT infrastructure management, cloud solutions, and digital transformation services.",
      icon: "💻",
      color: "#f59e0b",
      features: ["Cloud Migration", "DevOps", "Cybersecurity", "Infrastructure"]
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum computing solutions for complex problem-solving and optimization.",
      icon: "⚛️",
      color: "#8b5cf6",
      features: ["Quantum Algorithms", "Optimization", "Simulation", "Cryptography"]
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
    <ErrorBoundary>
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
        <p className="subtitle">Welcome to our innovative technology solutions - Empowering the future with cutting-edge AI, blockchain, and quantum technologies</p>
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
              <div className="feature-tags">
                {feature.features.map((tag, index) => (
                  <span key={index} className="feature-tag">
                    {tag}
                  </span>
                ))}
              </div>
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
      
      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1000,
            background: '#6366f1',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            cursor: 'pointer',
            fontSize: '20px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            transition: 'all 0.3s ease'
          }}
        >
          ↑
        </button>
      )}
      
      {/* Performance Metrics (Development Only) */}
      <PerformanceMetrics show={process.env.NODE_ENV === 'development'} />
      </div>
    </ErrorBoundary>
  );
}

export default App;