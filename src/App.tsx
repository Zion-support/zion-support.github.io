<<<<<<< HEAD
import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">Zion Tech Group</h1>
      </header>
      
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Zion Tech Group</h1>
        <p className="text-gray-600 mb-6">Your trusted partner in technology solutions.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">AI Services</h2>
            <p className="text-gray-600">Cutting-edge AI solutions for your business needs.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">IT Services</h2>
            <p className="text-gray-600">Comprehensive IT solutions and support.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Cloud Solutions</h2>
            <p className="text-gray-600">Scalable cloud infrastructure and services.</p>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white p-4 mt-auto">
        <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
      </footer>
    </div>
  );
}
=======


import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import PerformanceMonitor from './components/PerformanceMonitor';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Contact = React.lazy(() => import('./pages/Contact'));

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
          <Header />
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          
          <main className="pt-20">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
          <PerformanceMonitor />
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
