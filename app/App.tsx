'use client';

import React, { Suspense, lazy, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));

// Styles
import './globals.css';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <main id="main-content">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                {/* Add more routes as needed */}
              </Routes>
            </Suspense>
          </main>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;