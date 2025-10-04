import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import AdvancedErrorBoundary from './components/AdvancedErrorBoundary';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <HelmetProvider>
      <AdvancedErrorBoundary>
        <html lang="en" className="dark">
          <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#1e293b" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link 
              href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
              rel="stylesheet" 
            />
          </head>
          <body className="font-inter antialiased bg-slate-900 text-white">
            {children}
          </body>
        </html>
      </AdvancedErrorBoundary>
    </HelmetProvider>
  );
};

export default RootLayout;