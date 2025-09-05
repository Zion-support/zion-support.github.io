import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

// Simple components for now
const Home = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold text-center mb-8">Welcome to Zion Tech Group</h1>
    <p className="text-lg text-center text-gray-600 mb-8">
      Cutting-Edge Technology Solutions & AI Services
    </p>
    <div className="text-center">
      <a href="/services" className="btn">Explore Our Services</a>
    </div>
  </div>
);

const About = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold mb-8">About Zion Tech Group</h1>
    <p className="text-lg text-gray-600">
      We are a leading provider of AI-powered solutions and technology consulting services.
    </p>
  </div>
);

const Contact = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
    <div className="max-w-md mx-auto">
      <p className="text-lg text-gray-600 mb-4">
        Get in touch with our team for your technology needs.
      </p>
      <p className="text-gray-600">
        Email: kleber@ziontechgroup.com<br />
        Phone: +1-302-464-0950
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold mb-8">Our Services</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="card">
        <h3 className="text-xl font-semibold mb-4">AI Services</h3>
        <p className="text-gray-600">Advanced AI solutions for modern businesses</p>
      </div>
      <div className="card">
        <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
        <p className="text-gray-600">Comprehensive security solutions</p>
      </div>
      <div className="card">
        <h3 className="text-xl font-semibold mb-4">Cloud Solutions</h3>
        <p className="text-gray-600">Scalable cloud infrastructure</p>
      </div>
    </div>
  </div>
);

const NotFoundPage = () => (
  <div className="container mx-auto px-4 py-8 text-center">
    <h1 className="text-4xl font-bold mb-8">404 - Page Not Found</h1>
    <p className="text-lg text-gray-600 mb-8">
      The page you're looking for doesn't exist.
    </p>
    <a href="/" className="btn">Go Home</a>
  </div>
);

// Lazy load pages for better performance
const SolutionsPage = lazy(() => 
  Promise.resolve({ 
    default: () => (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Solutions</h1>
        <p className="text-lg text-gray-600">
          Discover our comprehensive technology solutions.
        </p>
      </div>
    )
  })
);

function App() {
  return (
    <ErrorBoundary fallback={<div className="text-center py-8">Something went wrong</div>}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <header className="bg-white shadow-sm">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <a href="/" className="text-2xl font-bold text-blue-600">
                  Zion Tech Group
                </a>
                <div className="space-x-6">
                  <a href="/services" className="text-gray-600 hover:text-blue-600">Services</a>
                  <a href="/solutions" className="text-gray-600 hover:text-blue-600">Solutions</a>
                  <a href="/about" className="text-gray-600 hover:text-blue-600">About</a>
                  <a href="/contact" className="text-gray-600 hover:text-blue-600">Contact</a>
                </div>
              </div>
            </nav>
          </header>
          
          <main className="flex-1">
            <Suspense fallback={
              <div className="flex justify-center items-center py-20">
                <div className="loading-spinner"></div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/solutions" element={<SolutionsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>
          
          <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 text-center">
              <p>&copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;