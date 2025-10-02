import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900">
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<div className="py-20 px-4"><h1 className="text-4xl font-bold text-center">Services</h1></div>} />
            <Route path="/case-studies" element={<div className="py-20 px-4"><h1 className="text-4xl font-bold text-center">Case Studies</h1></div>} />
            <Route path="/contact" element={<div className="py-20 px-4"><h1 className="text-4xl font-bold text-center">Contact</h1></div>} />
            <Route path="/about" element={<div className="py-20 px-4"><h1 className="text-4xl font-bold text-center">About</h1></div>} />
            <Route path="*" element={<div className="py-20 px-4"><h1 className="text-4xl font-bold text-center">404 - Page Not Found</h1></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;