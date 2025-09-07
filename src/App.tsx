<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from 'react';

export default function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
    </div>
  );
}
;
import React from 'react',;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom',;
import { Header } from './components/Header',;
import { Footer } from './components/layout/Footer',;
import { Sidebar } from './components/layout/Sidebar',;
import { ErrorBoundary } from './components/ErrorBoundary',;
,;
// Import pages,;
import HomePage from '../pages/index',;
import AboutPage from '../pages/about',;
import ContactPage from '../pages/contact',;
import ServicesPage from '../pages/services',;
import PricingPage from '../pages/pricing',;
,;
export default function App() {,;
  return (,;
    <ErrorBoundary>,;
      <Router>,;
        <div className="min-h-screen bg-gray-50">,;
          <Header />,;
          <Sidebar />,;
          <main className="flex-1: lg: ml-80">,;
            <Routes>,;
              <Route path="/" element={<HomePage />} />,;
              <Route path="/about" element={<AboutPage />} />,;
              <Route path="/contact" element={<ContactPage />} />,;
              <Route path="/services" element={<ServicesPage />} />,;
              <Route path="/pricing" element={<PricingPage />} />,;
            </Routes>,;
          </main>,;
          <Footer />,;
        </div>,;
      </Router>;
    </ErrorBoundary>);
};
=======
import React, { Suspense, lazy } from 'react';
import Footer from './components/Footer';
// Enhanced Components
import PerformanceOptimizer from './components/PerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
// Lazy load pages for better performance - only import existing pages
const SolutionsPage = lazy(() => import('./pages/Solutions').then(module => ({ default: module.default })));
// Service Pages
=======
import React, { Suspense, lazy } from 'react';
=======
import React from 'react';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import ErrorBoundary from './components/ErrorBoundary';
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
import Header from './components/Header';
import Footer from './components/Footer';
import ToastContainer from './components/ToastContainer';
import { ThemeProvider } from './components/ThemeProvider';
import ScrollToTop from './components/ScrollToTop';
<<<<<<< HEAD
=======
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { BackToTopButton } from './components/BackToTopButton';

// Enhanced Home component
const Home = () => (
  <div className="hero">
    <div className="text-center max-w-4xl mx-auto px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
        Zion Tech Group
      </h1>
      <p className="text-2xl md:text-3xl text-blue-100 mb-6 font-light">
        AI, Micro SaaS, and IT Services
      </p>
      <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
        Leading technology solutions in AI, cybersecurity, cloud infrastructure, and digital transformation. 
        Empowering businesses with cutting-edge technology and innovative solutions.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button className="btn-primary text-lg px-8 py-4 hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105">
          Get Started
        </button>
        <button className="btn-secondary text-lg px-8 py-4 hover:bg-blue-600 hover:text-white transition-colors duration-300 transform hover:scale-105">
          Learn More
        </button>
      </div>
      
      {/* Features Section */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-slate-800/50 rounded-lg backdrop-blur-sm">
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🤖</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">AI Solutions</h3>
          <p className="text-gray-300">Advanced artificial intelligence and machine learning solutions to automate and optimize your business processes.</p>
        </div>
        
        <div className="text-center p-6 bg-slate-800/50 rounded-lg backdrop-blur-sm">
          <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">☁️</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Cloud Services</h3>
          <p className="text-gray-300">Scalable cloud infrastructure and migration services to modernize your IT environment.</p>
        </div>
        
        <div className="text-center p-6 bg-slate-800/50 rounded-lg backdrop-blur-sm">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🔒</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Cybersecurity</h3>
          <p className="text-gray-300">Comprehensive security solutions to protect your digital assets and ensure compliance.</p>
        </div>
      </div>
    </div>
  </div>
);
<<<<<<< HEAD
=======
import BackToTop from './components/BackToTopButton';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

function App() {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pricing" element={<Pricing />} />
              </Routes>
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    <ThemeProvider>
      <ErrorBoundary>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
<<<<<<< HEAD
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Zion Tech Group
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    AI, Micro SaaS, and IT Services
                  </p>
                  <p className="text-gray-500">
                    This is a Vite-based React application. The main pages are handled by Next.js in the app directory.
                  </p>
                </div>
              </div>
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
            </main>
            <Footer />
            <BackToTopButton />
=======
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </main>
            <Footer />
            <BackToTop />
            <ToastContainer />
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
          </div>
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
<<<<<<< HEAD
=======
    <Router>
      <div className="min-h-screen flex flex-col">
=======
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
<<<<<<< HEAD
      </div>
    </Router>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
        <Footer />
        <BackToTopButton />
        <ScrollToTop />
      </div>
    </Router>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  );
}
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default App;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export default App;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
export default App;
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
export default App;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
