'use client';

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './src/globals.css';

// Lazy load pages
const HomePage = React.lazy(() => import('./app/page'));

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;