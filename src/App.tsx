import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

// Simple Home component
const Home = () => (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Zion Tech Group</h1>
      <p className="text-xl mb-8">Innovative AI, Cloud & Micro SaaS Solutions</p>
      <div className="space-x-4">
        <a href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
          Our Services
        </a>
        <a href="/contact" className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg">
          Contact Us
        </a>
      </div>
    </div>
  </div>
);

// Simple About component
const About = () => (
  <div className="min-h-screen bg-gray-900 text-white p-8">
    <h1 className="text-4xl font-bold mb-4">About Zion Tech Group</h1>
    <p className="text-xl">Leading technology solutions provider helping businesses transform their digital presence.</p>
  </div>
);

// Simple Services component
const Services = () => (
  <div className="min-h-screen bg-gray-900 text-white p-8">
    <h1 className="text-4xl font-bold mb-4">Our Services</h1>
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">AI Development</h3>
        <p>Cutting-edge AI solutions for your business.</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Cloud Services</h3>
        <p>Scalable and secure cloud infrastructure.</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Micro SaaS</h3>
        <p>Innovative software solutions with minimal overhead.</p>
      </div>
    </div>
  </div>
);

// Simple Contact component
const Contact = () => (
  <div className="min-h-screen bg-gray-900 text-white p-8">
    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
    <div className="max-w-2xl">
      <p className="text-xl mb-6">Get in touch with our team for your technology needs.</p>
      <div className="space-y-4">
        <p><strong>Phone:</strong> +1 302 464 0950</p>
        <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
        <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </div>
  </div>
);

// Simple 404 component
const NotFound = () => (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">The page you're looking for doesn't exist.</p>
      <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
        Go Home
      </a>
    </div>
  </div>
);

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;