import React from 'react';
import './src/index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Zion Tech Group</h1>
          <p className="text-xl opacity-90">Revolutionary technology solutions for the future</p>
          <div className="mt-8">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
