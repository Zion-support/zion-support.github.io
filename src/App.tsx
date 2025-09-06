import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import ToastContainer from './components/ToastContainer';
import { ThemeProvider } from './components/ThemeProvider';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTopButton';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
=======

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
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;