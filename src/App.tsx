import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Simple components
const Home = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-6xl font-bold mb-8 text-center">
        Zion Tech Group
      </h1>
      <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto">
        Leading AI & Technology Solutions
      </p>
      <div className="mt-12 text-center">
        <a 
          href="/contact" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
        >
          Get Started
        </a>
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xl text-gray-300 mb-8">
          Ready to transform your business with cutting-edge AI solutions?
        </p>
        <div className="space-y-4">
          <p>📞 +1 302 464 0950</p>
          <p>✉️ kleber@ziontechgroup.com</p>
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
