'use client';

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './app/components/ErrorBoundary';

// Minimal components
const HomePage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-white mb-6">Zion Tech Group</h1>
      <p className="text-xl text-cyan-400 mb-8">Advanced AI and IT Solutions</p>
      <p className="text-gray-300 max-w-4xl mx-auto">
        Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
      </p>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-white mb-6">About Us</h1>
      <p className="text-xl text-cyan-400 mb-8">Innovation in Technology</p>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
      <p className="text-xl text-cyan-400 mb-8">Get in Touch</p>
    </div>
  </div>
);

const ServicesPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
      <p className="text-xl text-cyan-400 mb-8">AI and IT Solutions</p>
    </div>
  </div>
);

const App = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen">
            <Suspense fallback={<div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
              </Routes>
            </Suspense>
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

App.displayName = 'App';
export default App;
