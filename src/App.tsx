import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-white">Zion Tech Group</h1>
          </div>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={
              <div className="container mx-auto px-4 py-16">
                <div className="text-center">
                  <h1 className="text-6xl font-bold text-white mb-8">
                    Leading AI, Quantum Computing & Cybersecurity Solutions
                  </h1>
                  <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                    Transform your business with cutting-edge AI, quantum computing, and cybersecurity solutions. 
                    Interactive AI calculator, enterprise case studies, and personalized recommendations.
                  </p>
                  <div className="space-x-4">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg">
                      Get Started
                    </button>
                    <button className="border border-white/30 hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg text-lg">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            } />
            
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                  <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
                  <a href="/" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                    Go Home
                  </a>
                </div>
              </div>
            } />
          </Routes>
        </main>
        
        <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 mt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center text-gray-300">
              <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;