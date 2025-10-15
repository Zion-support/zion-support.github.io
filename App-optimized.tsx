import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Core components - keep these synchronous for critical path
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import ErrorBoundary from './app/components/ErrorBoundary';


const App = () => {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Navigation />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={
                  <div className="p-6">
                    <h1 className="text-2xl font-bold mb-4">Optimized App</h1>
                    <p>This is an optimized version of the app.</p>
                  </div>
                } />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;