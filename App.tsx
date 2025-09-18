import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './src/ScrollToTop';
import Header from './src/Header';
import Footer from './src/Footer';
import './src/index.css';

export default function App(): JSX.Element {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
              <main className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                  Welcome to Zion Tech Group
                </h1>
                <p className="text-center text-gray-600 text-lg">
                  Revolutionary technology solutions for the future
                </p>
              </main>
            </div>
          } />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}