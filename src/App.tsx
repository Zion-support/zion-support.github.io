<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Simple Home component
const Home = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          Zion Tech Group
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Leading AI & Technology Solutions
        </p>
        <div className="space-y-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">AI Services</h2>
            <p className="text-gray-300">
              Transform your business with cutting-edge AI solutions
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">IT Services</h2>
            <p className="text-gray-300">
              Comprehensive IT infrastructure and support
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Micro SaaS</h2>
            <p className="text-gray-300">
              Innovative software solutions for modern businesses
            </p>
          </div>
=======
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/layout/Sidebar'
import ErrorBoundary from './components/ErrorBoundary'
// Import pages
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import ServicesPage from './pages/Services'
import PricingPage from './pages/Pricing'
export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Sidebar />
          <main className="flex-1 lg:ml-80">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
            </Routes>
          </main>
          <Footer />
>>>>>>> origin/main
        </div>
      </Router>
    </ErrorBoundary>
  )
}
<<<<<<< HEAD

export default App;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 03f1818a747ef77bbf37ae59cfaf28d591236f31
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
<<<<<<< HEAD
export default function App() {; return (; <ErrorBoundary>; <Router>; <div className = "min-h-screen bg-gray-50">; <Header />; <Sidebar />; <main className = "flex-1 lg: ml-80">, <Routes>, <Route path = "/" element = {<HomePage />} />; <Route path = "/about" element = {<AboutPage />} />; <Route path = "/contact" element = {<ContactPage />} />; <Route path = "/services" element = {<ServicesPage />} />; <Route path = "/pricing" element = {<PricingPage />} />; </Routes>; </main>; <Footer />; </div>; </Router>; </ErrorBoundary>; )};
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
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-8ee2
};
>>>>>>> 03f1818a747ef77bbf37ae59cfaf28d591236f31
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> origin/main
