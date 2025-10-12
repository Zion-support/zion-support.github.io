import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { AnalyticsProvider } from './components/AnalyticsProvider';
import { ErrorBoundary } from 'react-error-boundary';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import ErrorFallback from './components/ErrorFallback';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AnalyticsProvider>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <div className="min-h-screen bg-gray-50">
              <Header />
              <main className="flex-1">
                <React.Suspense fallback={<Loading />}>
                  {children}
                </React.Suspense>
              </main>
              <Footer />
            </div>
          </ErrorBoundary>
        </AnalyticsProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}