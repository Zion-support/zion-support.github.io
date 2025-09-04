<<<<<<< HEAD
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ErrorBoundary from './utils/errorBoundary';
import './index.css';
import ServicesPage from './components/ServicesPage';

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Layout>
          <header className="App-header">
            <nav style={{ marginTop: 12 }}>
              <Link to="/" style={{ marginRight: 12 }}>Home</Link>
              <Link to="/services">Services</Link>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </Layout>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
=======
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { EnhancedFuturisticFooter as Footer } from './components/EnhancedFuturisticFooter';
import { ErrorBoundary } from './components/ErrorBoundary';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/index'));
const Services = React.lazy(() => import('./pages/services'));
const Contact = React.lazy(() => import('./pages/contact'));

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        <AppHeader />
        <main className="flex-1">
          <Suspense fallback={
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
                <p className="text-gray-400">Loading...</p>
              </div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services/*" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
>>>>>>> pr-11559
