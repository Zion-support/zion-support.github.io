import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './index.css';

export default function App(): JSX.Element {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <ScrollToTop />
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={
            <main className="container mx-auto px-4 py-16">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
                <p className="text-xl text-gray-300">Leading the future of technology</p>
              </div>
            </main>
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={
            <main className="container mx-auto px-4 py-16 text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
              <p className="text-xl text-gray-300">The page you're looking for doesn't exist.</p>
            </main>
          } />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}