import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import available pages
import About from '../pages/About';
import AIServices from '../pages/AIServices';

// Simple Home component
const Home = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to Zion Tech Group
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Leading provider of AI, quantum computing, and cybersecurity solutions. 
          Transform your business with cutting-edge technology.
        </p>
        <div className="space-x-4">
          <a 
            href="/about" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            Learn More
          </a>
          <a 
            href="/contact" 
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </div>
);

// Simple Services component
const Services = () => (
  <div className="min-h-screen bg-white">
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="card">
          <h3 className="text-xl font-semibold mb-4">AI Solutions</h3>
          <p className="text-gray-600">Advanced artificial intelligence solutions for your business needs.</p>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold mb-4">Quantum Computing</h3>
          <p className="text-gray-600">Next-generation quantum computing services and consulting.</p>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
          <p className="text-gray-600">Comprehensive cybersecurity solutions to protect your business.</p>
        </div>
      </div>
    </div>
  </div>
);

// Simple Contact component
const Contact = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Contact Us</h1>
      <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
          <div>
            <label className="form-label">Name</label>
            <input type="text" className="form-input" />
          </div>
          <div>
            <label className="form-label">Email</label>
            <input type="email" className="form-input" />
          </div>
          <div>
            <label className="form-label">Message</label>
            <textarea rows={4} className="form-input"></textarea>
          </div>
          <button type="submit" className="btn-primary w-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
);

// Simple Blog component
const Blog = () => (
  <div className="min-h-screen bg-white">
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Blog</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-600 text-center">Blog posts coming soon...</p>
      </div>
    </div>
  </div>
);

// Simple NotFound component
const NotFound = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page not found</p>
      <a href="/" className="btn-primary">
        Go Home
      </a>
    </div>
  </div>
);

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* Main Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/ai-services" element={<AIServices />} />

      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;