import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/index'));
const AboutPage = lazy(() => import('./pages/about'));
const ContactPage = lazy(() => import('./pages/contact'));
const ServicesPage = lazy(() => import('./pages/services'));
const SolutionsPage = lazy(() => import('./pages/solutions'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4"></div>
      <p className="text-gray-400">Loading...</p>
    </div>
  </div>
);

// Simple Header component
const Header = () => (
  <header className="bg-zion-slate-dark text-white p-4 shadow-lg">
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Zion Tech Group</h1>
      <nav className="mt-2">
        <a href="/" className="mr-4 hover:text-cyan-400">Home</a>
        <a href="/about" className="mr-4 hover:text-cyan-400">About</a>
        <a href="/services" className="mr-4 hover:text-cyan-400">Services</a>
        <a href="/contact" className="hover:text-cyan-400">Contact</a>
      </nav>
    </div>
  </header>
);

// Simple Footer component
const Footer = () => (
  <footer className="bg-zion-slate-dark text-white p-4 mt-auto">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App; 