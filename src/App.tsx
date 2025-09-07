import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
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

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <BackToTopButton />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;