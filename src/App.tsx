import React, { Suspense, memo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './styles/futuristic.css';
import Navigation from '../app/components/Navigation';
import Footer from '../app/components/Footer';
import HomePage from '../app/page';

// Simple App component for now
const App: React.FC = memo(() => {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white overflow-x-hidden">
          <Navigation />
          <main className="w-full">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
});

App.displayName = 'App';

export default App;