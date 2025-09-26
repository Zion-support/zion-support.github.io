import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './src/index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-8">
              Zion Marketplace
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              The world's first free marketplace dedicated to high-tech and artificial intelligence. 
              Publish, connect, and thrive — all in one place.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                Get Started
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;