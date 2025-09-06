<<<<<<< HEAD
=======
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import PerformanceMonitor from './components/PerformanceMonitor';
import ErrorBoundary from './components/ErrorBoundary';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


<<<<<<< HEAD
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
          <Header />
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          
          <main className="pt-20">
            <Suspense fallback={<LoadingSpinner />}>
=======
export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <PerformanceMonitor />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<Loading fullScreen text="Loading page..." />}>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
<<<<<<< HEAD
          
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
          <Footer />
          <PerformanceMonitor />
        </div>
      </Router>
    </ErrorBoundary>
  );
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
