<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import ToastContainer from './components/ToastContainer';
import { ThemeProvider } from './components/ThemeProvider';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Pricing from './pages/Pricing';

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
import React, { Suspense, lazy } from 'react';
import Footer from './components/Footer';
// Enhanced Components
import PerformanceOptimizer from './components/PerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
// Lazy load pages for better performance - only import existing pages
const SolutionsPage = lazy(() => import('./pages/Solutions').then(module => ({ default: module.default })));
// Service Pages
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Sidebar />
          <main className="flex-1 lg:ml-80">
            <Suspense fallback={<LoadingSpinner />}>
=======
    <ThemeProvider>
      <ErrorBoundary>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pricing" element={<Pricing />} />
              </Routes>
            </main>
            <Footer />
            <ToastContainer />
            <BackToTop />
          </div>
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

<<<<<<< HEAD
export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Zion Tech</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-center mb-8">Welcome to Zion Tech</h2>
        <p className="text-lg text-center text-gray-600 mb-8">
          Your trusted partner for AI and IT solutions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">AI Solutions</h3>
            <p className="text-gray-600">
              Cutting-edge artificial intelligence solutions for your business needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">IT Services</h3>
            <p className="text-gray-600">
              Comprehensive IT services and infrastructure management.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Cloud Solutions</h3>
            <p className="text-gray-600">
              Scalable cloud infrastructure and migration services.
            </p>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Zion Tech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
export default App;
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/layout/Footer';
import { Sidebar } from './components/layout/Sidebar';
import { ErrorBoundary } from './components/ErrorBoundary';
;
// Import pages;
import HomePage from '../pages/index';
import AboutPage from '../pages/about';
import ContactPage from '../pages/contact';
import ServicesPage from '../pages/services';
import PricingPage from '../pages/pricing';
;
export default function App() {; return (; <ErrorBoundary>; <Router>; <div className = "min-h-screen bg-gray-50">; <Header />; <Sidebar />; <main className = "flex-1 lg: ml-80">, <Routes>, <Route path = "/" element = {<HomePage />} />; <Route path = "/about" element = {<AboutPage />} />; <Route path = "/contact" element = {<ContactPage />} />; <Route path = "/services" element = {<ServicesPage />} />; <Route path = "/pricing" element = {<PricingPage />} />; </Routes>; </main>; <Footer />; </div>; </Router>; </ErrorBoundary>; )};
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
