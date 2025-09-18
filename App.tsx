import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ScrollToTop from './src/ScrollToTop';
import Header from './src/Header';
import Footer from './src/Footer';
import UltimateTechBreakthrough2026 from './src/pages/UltimateTechBreakthrough2026';
import './src/index.css';

export default function App(): JSX.Element {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-8">Welcome to Zion Tech Group</h1>
                <p className="text-lg text-center text-gray-600 mb-4">
                  Your trusted partner in AI and technology solutions.
                </p>
                <div className="text-center">
                  <Link className="text-blue-600 underline" to="/pages/UltimateTechBreakthrough2026">
                    Go to UltimateTechBreakthrough2026
                  </Link>
                </div>
              </div>
            } />
            <Route path="/pages/UltimateTechBreakthrough2026" element={<UltimateTechBreakthrough2026 />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
