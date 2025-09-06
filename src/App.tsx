import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Sidebar from './components/Sidebar';
import { PerformanceMonitor } from './components/PerformanceMonitor';

// Lazy load only essential pages
const Home = lazy(() => import('./pages/Home'));

// Loading Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-cyan-400 text-lg font-medium">Loading Zion Tech Group...</p>
    </div>
  </div>
);

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        <Header />
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="pt-20">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
        <PerformanceMonitor />
      </div>
    </Router>
  );
};

export default App;