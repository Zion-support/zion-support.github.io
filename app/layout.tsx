import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import Analytics from './components/Analytics';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <HelmetProvider>
      <Router>
        <ErrorBoundary>
          <PerformanceOptimizer>
            <SEOOptimizer>
              <Analytics>
                <div className="min-h-screen bg-slate-900 text-white">
                  <Navigation />
                  <main>
                    {children}
                  </main>
                  <Footer />
                </div>
              </Analytics>
            </SEOOptimizer>
          </PerformanceOptimizer>
        </ErrorBoundary>
      </Router>
    </HelmetProvider>
  );
};

export default Layout;