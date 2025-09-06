import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ServicesPage from './pages/Services';
import PricingPage from './pages/Pricing';

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Sidebar />
          <main className="flex-1 lg:ml-80">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
=======

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Zion Tech Group</h1>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Welcome to Zion Tech Group
              </h2>
              <p className="text-lg text-gray-600">
                Leading technology solutions in AI, cybersecurity, cloud, and digital transformation.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
  );
}