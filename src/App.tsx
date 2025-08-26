import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ToastContainer } from './components/Toast';
import { ToastProps } from './components/Toast';
import { PerformanceMonitor } from './components/PerformanceMonitor';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Services = React.lazy(() => import('./pages/Services'));
const InnovativeServicesShowcase2026 = React.lazy(() => import('./pages/InnovativeServicesShowcase2026'));
const ServicesOverview2026 = React.lazy(() => import('./pages/ServicesOverview2026'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center space-y-4">
      <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="text-cyan-500 text-lg font-medium">Loading Zion...</p>
      <p className="text-gray-400 text-sm">Preparing your AI marketplace experience</p>
    </div>
  </div>
);

function App() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (toast: Omit<ToastProps, 'id'>) => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { ...toast, id }]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <AppHeader />
          
          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/innovative-services-2026" element={<InnovativeServicesShowcase2026 />} />
                <Route path="/services-overview-2026" element={<ServicesOverview2026 />} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
          
          <ToastContainer toasts={toasts} onClose={removeToast} />
          <PerformanceMonitor />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;