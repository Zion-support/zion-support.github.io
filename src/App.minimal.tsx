import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <Header />
        
        <main className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Revolutionary technology solutions for the future
            </p>
          </div>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;