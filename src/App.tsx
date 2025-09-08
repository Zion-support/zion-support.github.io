import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-xl mb-8 text-blue-200">
            Innovative IT Solutions & AI Services
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-blue-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-600/30">
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">AI Services</h3>
              <p className="text-blue-200">Advanced artificial intelligence solutions for modern businesses</p>
            </div>
            <div className="bg-blue-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-600/30">
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">IT Solutions</h3>
              <p className="text-blue-200">Comprehensive technology services and infrastructure management</p>
            </div>
            <div className="bg-blue-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-600/30">
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">Innovation</h3>
              <p className="text-blue-200">Cutting-edge technology solutions for the future</p>
            </div>
          </div>
          <div className="mt-12">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;