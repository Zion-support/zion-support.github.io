import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Lazy load pages for better performance
// const Home = lazy(() => import('./pages/Home'));
// const About = lazy(() => import('./pages/About'));
// const Services = lazy(() => import('./pages/Services'));
// const Blog = lazy(() => import('./pages/Blog'));
// const Contact = lazy(() => import('./pages/Contact'));
// const Team = lazy(() => import('./pages/Team'));
// const Privacy = lazy(() => import('./pages/Privacy'));
// const Terms = lazy(() => import('./pages/Terms'));

function App() {
  useEffect(() => {
    // Initialize basic optimizations
    //     console.log('App initialized successfully');

    // Cleanup on unmount
    return () => {
      //       console.log('App cleanup');
    };
  }, []);

  return (
    <ErrorBoundary>
      <div>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/team" element={<Team />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </ErrorBoundary>
  );
}

// Simple Error Boundary
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    //     console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
              <button
                onClick={() => this.setState({ hasError: false })}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Try again
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default App;
