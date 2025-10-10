'use client';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Simple components for basic functionality
const Navigation = () => (
  <nav className="bg-slate-900 p-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold text-white">Zion Tech Group</h1>
      <div className="space-x-4">
        <a href="/" className="text-white hover:text-blue-400">Home</a>
        <a href="/about" className="text-white hover:text-blue-400">About</a>
        <a href="/services" className="text-white hover:text-blue-400">Services</a>
        <a href="/contact" className="text-white hover:text-blue-400">Contact</a>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-slate-900 p-8 text-center text-white">
    <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
  </footer>
);

const HomePage = () => (
  <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="container mx-auto px-4 py-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          Advanced AI and IT Solutions
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Transform your business with cutting-edge AI technology and expert IT solutions. 
          Achieve 300% ROI with our proven methodologies.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </main>
);

const AboutPage = () => (
  <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-white mb-8">About Us</h1>
      <p className="text-lg text-gray-300 max-w-3xl">
        Zion Tech Group is a leading provider of AI-powered enterprise solutions, 
        quantum computing, autonomous systems, and digital transformation services.
      </p>
    </div>
  </main>
);

const ServicesPage = () => (
  <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-white mb-8">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">AI Solutions</h3>
          <p className="text-gray-300">Advanced artificial intelligence solutions for your business needs.</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">IT Services</h3>
          <p className="text-gray-300">Comprehensive IT infrastructure and support services.</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">Digital Transformation</h3>
          <p className="text-gray-300">Transform your business with modern digital solutions.</p>
        </div>
      </div>
    </div>
  </main>
);

const ContactPage = () => (
  <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
      <div className="max-w-2xl">
        <form className="space-y-6">
          <div>
            <label className="block text-white mb-2">Name</label>
            <input type="text" className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white" />
          </div>
          <div>
            <label className="block text-white mb-2">Email</label>
            <input type="email" className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white" />
          </div>
          <div>
            <label className="block text-white mb-2">Message</label>
            <textarea rows={4} className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </main>
);

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
