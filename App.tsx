import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app/styles/futuristic.css';
import './app/styles/futuristic-enhanced.css';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import HomePage from './app/page';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center"><h1 className="text-4xl font-bold text-white">About Page</h1></div>} />
          <Route path="/contact" element={<div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center"><h1 className="text-4xl font-bold text-white">Contact Page</h1></div>} />
          <Route path="/services" element={<div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center"><h1 className="text-4xl font-bold text-white">Services Page</h1></div>} />
          <Route path="*" element={<div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center"><h1 className="text-4xl font-bold text-white">Page Not Found</h1></div>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;