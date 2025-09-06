<<<<<<< HEAD
<<<<<<< HEAD
import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Sidebar from './components/Sidebar';
import { PerformanceMonitor } from './components/PerformanceMonitor';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-cyan-400 text-lg font-medium">Loading Zion Tech Group...</p>
    </div>
  </div>
);

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/layout/Sidebar';
import ErrorBoundary from './components/ErrorBoundary';
// Import pages
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ServicesPage from './pages/Services';
import PricingPage from './pages/Pricing';
export default function App() {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
          <Header />
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          
          <main className="pt-20">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
          <PerformanceMonitor />
        </div>
      </Router>
    </ErrorBoundary>
  );
<<<<<<< HEAD
};

export default App;
=======
export default function App() {;
  return (;
    <ErrorBoundary>;
      <Router>;
        <div className="min-h-screen bg-gray-50">;
          <Header />;
          <Sidebar />;
          <main className="flex-1 lg: ml-80">, <Routes>,
              <Route path="/" element={<HomePage />} />;
              <Route path="/about" element={<AboutPage />} />;
              <Route path="/contact" element={<ContactPage />} />;
              <Route path="/services" element={<ServicesPage />} />;
              <Route path="/pricing" element={<PricingPage />} />;
            </Routes>;
          </main>;
          <Footer />;
        </div>;
      </Router>;
    </ErrorBoundary>;
  );
import React from 'react',
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom',
import { Header } from './components/Header',
import { Footer } from './components/layout/Footer',
import { Sidebar } from './components/layout/Sidebar',
import { ErrorBoundary } from './components/ErrorBoundary',
,
// Import pages,
import HomePage from '../pages/index',
import AboutPage from '../pages/about',
import ContactPage from '../pages/contact',
import ServicesPage from '../pages/services',
import PricingPage from '../pages/pricing',
,
export default function App() {,
  return (,
    <ErrorBoundary>,
      <Router>,
        <div className="min-h-screen bg-gray-50">,
          <Header />,
          <Sidebar />,
          <main className="flex-1 lg: ml-80">,
            <Routes>,
              <Route path="/" element={<HomePage />} />,
              <Route path="/about" element={<AboutPage />} />,
              <Route path="/contact" element={<ContactPage />} />,
              <Route path="/services" element={<ServicesPage />} />,
              <Route path="/pricing" element={<PricingPage />} />,
            </Routes>,
          </main>,
          <Footer />,
        </div>,
      </Router>,
    </ErrorBoundary>,
  ),
};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
