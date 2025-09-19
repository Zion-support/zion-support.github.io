import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
import LoadingSpinner from './components/LoadingSpinner';
import ThemeToggle from './components/ThemeToggle';
import PerformanceMetrics from './components/PerformanceMetrics';

// Custom hooks
const useLocalStorage = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  return [storedValue, setValue];
};

const useToast = () => {
  const [toasts, setToasts] = useState<any[]>([]);

  const showSuccess = (message: string) => {
    setToasts(prev => [...prev, { id: Date.now(), type: 'success', message }]);
  };

  const showInfo = (message: string) => {
    setToasts(prev => [...prev, { id: Date.now(), type: 'info', message }]);
  };

  const showWarning = (message: string) => {
    setToasts(prev => [...prev, { id: Date.now(), type: 'warning', message }]);
  };

  return { toasts, showSuccess, showInfo, showWarning };
};

// Analytics functions
const trackButtonClick = (buttonName: string) => {
  console.log('Button clicked:', buttonName);
};

const trackPageView = (pageName: string) => {
  console.log('Page viewed:', pageName);
};

const trackFeatureInteraction = (featureName: string) => {
  console.log('Feature interaction:', featureName);
};

function App() {
<<<<<<< HEAD
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
      window.navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          // Service Worker registered successfully
          trackFeatureInteraction('service_worker_registered', { scope: registration.scope });
        })
        .catch((error) => {
          // Service Worker registration failed
          trackFeatureInteraction('service_worker_failed', { error: error.message });
        });
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

  const services = useMemo(() => [
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

  const features = [
    { name: 'Fast Performance', description: 'Optimized for speed' },
    { name: 'Secure', description: 'Enterprise-grade security' },
    { name: 'Scalable', description: 'Grows with your business' }
  ];

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
      </div>
    </ErrorBoundary>
  );
}

export default App;
=======
  return (
    <div className="App">
      <header className="App-header">
        <h1>Zion Tech Group</h1>
        <p>Leading technology solutions provider</p>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h2>Welcome to Zion Tech Group</h2>
                <p>
                  Specializing in AI, cybersecurity, cloud infrastructure, and digital
                  transformation services.
                </p>
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
>>>>>>> origin/temp-merge-11532
