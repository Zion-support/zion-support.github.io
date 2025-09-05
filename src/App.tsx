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
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;