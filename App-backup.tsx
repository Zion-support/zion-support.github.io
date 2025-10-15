import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Navigation from './app/components/Navigation';
import Sidebar from './app/components/Sidebar';
import Footer from './app/components/Footer';
import ErrorBoundary from './app/components/ErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';

const App = () => {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <PerformanceMonitor>
          <div className="min-h-screen bg-gray-50">
            <Navigation />
            <main className="flex">
              <Sidebar />
              <div className="flex-1 p-6">
                <h1 className="text-2xl font-bold mb-4">App Backup</h1>
                <p>This is a backup version of the app.</p>
              </div>
            </main>
            <Footer />
          </div>
        </PerformanceMonitor>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;