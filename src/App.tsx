import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import ErrorBoundary from './components/ErrorBoundary';
import SEOOptimizer from './components/SEOOptimizer';
import Header from './components/Header';

// Styles
import './index.css';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <SEOOptimizer>
          <Router>
            <div className="App">
              <Header />
              <main id="main-content">
                <Routes>
                  <Route path="/" element={<div>Home Page</div>} />
                  <Route path="/about" element={<div>About Page</div>} />
                  <Route path="/services" element={<div>Services Page</div>} />
                  <Route path="/contact" element={<div>Contact Page</div>} />
                </Routes>
              </main>
            </div>
          </Router>
        </SEOOptimizer>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;