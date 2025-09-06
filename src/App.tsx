import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import ErrorBoundary from './components/ErrorBoundary';
>>>>>>> 3318f2d5c61f28687a5ae16b4f86d7fc33cf285c
=======
import Button from './components/Button';
import Card from './components/Card';
import ServiceCard from './components/ServiceCard';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import ToastContainer from './components/ToastContainer';
import { ThemeProvider } from './components/ThemeProvider';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import SEO from './components/SEO';
import Analytics from './components/Analytics';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
import Header from './components/Header';
import Footer from './components/Footer';
import ToastContainer from './components/ToastContainer';
import { ThemeProvider } from './components/ThemeProvider';
import ScrollToTop from './components/ScrollToTop';
<<<<<<< HEAD
import { BackToTopButton } from './components/BackToTopButton';

// Simple Home component
const Home = () => (
  <div className="hero">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-4">
        Zion Tech Group
      </h1>
      <p className="text-xl text-blue-100 mb-8">
        AI, Micro SaaS, and IT Services
      </p>
      <p className="text-gray-300 mb-8">
        Leading technology solutions in AI, cybersecurity, cloud, and digital transformation.
      </p>
      <div className="cta-buttons">
        <button className="btn-primary">
          Get Started
        </button>
        <button className="btn-secondary">
          Learn More
        </button>
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
>>>>>>> 3318f2d5c61f28687a5ae16b4f86d7fc33cf285c
=======
>>>>>>> 566d12e4e87c285827c8c1f36f24d2818c9f5bb8
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Router>
<<<<<<< HEAD
=======
          <SEO />
          <Analytics />
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pricing" element={<Pricing />} />
<<<<<<< HEAD
                <Route path="*" element={<Home />} />
              </Routes>
            </main>
            <Footer />
            <BackToTop />
            <ToastContainer />
=======
              </Routes>
            </main>
            <Footer />
            <ToastContainer />
            <BackToTop />
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
          </div>
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;