import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const EnhancedServices = lazy(() => import('./pages/EnhancedServices'));
const MicroSaasShowcase = lazy(() => import('./pages/MicroSaasShowcase'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-900">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
  </div>
);

// 404 Not Found component
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-cyan-500 mb-4">404</h1>
      <p className="text-xl mb-8">Page not found</p>
      <a href="/" className="text-cyan-400 hover:text-cyan-300 underline">
        Go back home
      </a>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900">
        <AppHeader />
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/enhanced-services" element={<EnhancedServices />} />
              <Route path="/micro-saas-showcase" element={<MicroSaasShowcase />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;