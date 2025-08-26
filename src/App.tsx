import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Only import working components
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Loading Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
    <div className="text-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <div className="text-cyan-500 text-lg font-semibold">Loading...</div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes here as we fix components */}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;