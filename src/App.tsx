import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { Suspense } from 'react';

// Simple Home component
const Home = () => (
  <div className="min-h-screen bg-gray-900 text-white p-8">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Zion Tech Group</h1>
      <p className="text-xl mb-6">Welcome to Zion Tech Group - Your Premier Technology Solutions Provider</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">AI Services</h2>
          <p className="text-gray-300">Cutting-edge artificial intelligence solutions for your business needs.</p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Micro SaaS</h2>
          <p className="text-gray-300">Scalable micro software-as-a-service solutions.</p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">IT Services</h2>
          <p className="text-gray-300">Comprehensive IT support and consulting services.</p>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
          Get Started
        </button>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Suspense fallback={<div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;