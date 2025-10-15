import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <HelmetProvider>
      <Router>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <div className="min-h-screen bg-slate-900 text-white">
            <Navigation />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </div>
        </ErrorBoundary>
      </Router>
    </HelmetProvider>
  );
};

export default RootLayout;