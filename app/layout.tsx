import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import CookieConsent from './components/CookieConsent';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <EnhancedErrorBoundary>
          <div className="min-h-screen bg-gray-900">
            {children}
            <CookieConsent />
          </div>
        </EnhancedErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  );
}