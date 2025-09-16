import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './src/index.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary technology solutions and insights for the future
            </p>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;