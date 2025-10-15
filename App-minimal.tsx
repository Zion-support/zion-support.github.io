import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Minimal working App component
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Advanced Technology Solutions
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;