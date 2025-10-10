import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Simple loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
  </div>
);

// Simple error boundary
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-500 mb-4">Something went wrong</h1>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Simple home page
const HomePage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-6xl font-bold text-center mb-8">
        Zion Tech Group
      </h1>
      <p className="text-xl text-center mb-8 max-w-3xl mx-auto">
        Leading provider of AI-powered enterprise solutions, quantum computing, 
        autonomous systems, and digital transformation services.
      </p>
      <div className="text-center">
        <button className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  </div>
);

// Simple navigation
const Navigation = () => (
  <nav className="bg-black bg-opacity-50 backdrop-blur-sm fixed w-full top-0 z-50">
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-white">
          Zion Tech Group
        </div>
        <div className="space-x-6">
          <a href="/" className="text-white hover:text-blue-400 transition-colors">Home</a>
          <a href="/about" className="text-white hover:text-blue-400 transition-colors">About</a>
          <a href="/contact" className="text-white hover:text-blue-400 transition-colors">Contact</a>
        </div>
      </div>
    </div>
  </nav>
);

// Simple footer
const Footer = () => (
  <footer className="bg-black bg-opacity-50 backdrop-blur-sm mt-auto">
    <div className="container mx-auto px-4 py-8">
      <div className="text-center text-white">
        <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// Main App component
const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <ErrorBoundary>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </ErrorBoundary>
      </Router>
    </HelmetProvider>
  );
};

export default App;
