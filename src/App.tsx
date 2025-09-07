import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
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