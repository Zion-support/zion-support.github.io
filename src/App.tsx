import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/ThemeProvider';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

// Create QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Simple Home component
const Home = () => (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Zion Tech Group</h1>
      <p className="text-xl mb-8">Innovating Tomorrow</p>
      <div className="space-y-4">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">AI & Machine Learning</h2>
          <p className="text-gray-300">Advanced AI solutions for business automation and intelligence</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Cybersecurity</h2>
          <p className="text-gray-300">Comprehensive security solutions to protect your business</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Cloud Computing</h2>
          <p className="text-gray-300">Scalable cloud infrastructure and migration services</p>
        </div>
      </div>
    </div>
  </div>
);

// Simple About component
const About = () => (
  <div className="min-h-screen bg-gray-900 text-white p-8">
    <h1 className="text-4xl font-bold mb-8">About Zion Tech Group</h1>
    <div className="max-w-4xl mx-auto">
      <p className="text-xl mb-6">
        We are a leading technology company specializing in AI, cybersecurity, and cloud solutions.
      </p>
      <p className="text-lg text-gray-300">
        Our mission is to help businesses leverage cutting-edge technology to achieve their goals.
      </p>
    </div>
  </div>
);

// Simple Services component
const Services = () => (
  <div className="min-h-screen bg-gray-900 text-white p-8">
    <h1 className="text-4xl font-bold mb-8">Our Services</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">AI Development</h3>
        <p className="text-gray-300">Custom AI solutions for your business needs</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
        <p className="text-gray-300">Protect your business from cyber threats</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Cloud Migration</h3>
        <p className="text-gray-300">Move your infrastructure to the cloud</p>
      </div>
    </div>
  </div>
);

// Simple Contact component
const Contact = () => (
  <div className="min-h-screen bg-gray-900 text-white p-8">
    <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
    <div className="max-w-2xl mx-auto">
      <p className="text-xl mb-6">Get in touch with our team</p>
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
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Page not found</p>
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
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Router>
          </HelmetProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;