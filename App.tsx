import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './src/index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6">Zion Tech Group</h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Leading AI, Quantum Computing & Cybersecurity Solutions
          </p>
          <p className="text-lg opacity-75 max-w-2xl mx-auto">
            Transform your business with cutting-edge AI, quantum computing, and cybersecurity solutions. 
            Interactive AI calculator, enterprise case studies, and personalized recommendations.
          </p>
          <div className="mt-12">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;