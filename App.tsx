import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './src/pages/Home';
import UltimateTechShowcase2026 from './src/pages/UltimateTechShowcase2026';
import './src/index.css';

export default function App(): JSX.Element {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/UltimateTechShowcase2026" element={<UltimateTechShowcase2026 />} />
            <Route path="*" element={
              <main className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
                <p className="text-xl text-gray-600">The page you're looking for doesn't exist.</p>
              </main>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}