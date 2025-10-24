'use client';

import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';

// Pages
import HomePage from './page';
import AboutPage from './about/page';
import ContactPage from './contact/page';

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <EnhancedErrorBoundary>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  {/* Add more routes as needed */}
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </EnhancedErrorBoundary>
    </HelmetProvider>
  );
};

export default App;