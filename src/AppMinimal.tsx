import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './App.css';

// Lazy load components for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Loading component
const LoadingSpinner = () => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
    <p>Loading...</p>
  </div>
);

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      // In production, send to error tracking service
      // Example: Sentry.captureException(error, { extra: errorInfo });
    } else {
      // In development, log to console
      // eslint-disable-next-line no-console
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function AppMinimal() {
  return (
    <ErrorBoundary>
      <Helmet>
        <title>Zion Tech Group - Advanced Technology Solutions</title>
        <meta 
          name="description" 
          content="Leading provider of AI, blockchain, cloud computing, and cybersecurity solutions for modern businesses." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Zion Tech Group" />
        <meta property="og:description" content="Advanced Technology Solutions" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://zion.app" />
      </Helmet>
      
      <div className="app">
        <header className="app-header">
          <nav className="main-navigation">
            <div className="nav-brand">
              <h1>Zion Tech Group</h1>
            </div>
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </header>

        <main className="app-main">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>

        <footer className="app-footer">
          <div className="footer-content">
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
            <div className="footer-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
}
