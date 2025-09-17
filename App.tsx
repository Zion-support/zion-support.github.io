import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './src/index.css';

// Simple loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
  </div>
);

// Simple home component
const Home = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          Zion Tech Group
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Leading AI, Quantum Computing & Cybersecurity Solutions
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
          <p className="text-white">
            Transform your business with cutting-edge AI, quantum computing, and cybersecurity solutions. 
            Interactive AI calculator, enterprise case studies, and personalized recommendations.
          </p>
        </div>
      </div>
    </div>
  </div>
);

// Simple App component
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;