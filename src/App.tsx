import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';

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

=======
import { ThemeProvider } from './components/ThemeProvider';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

>>>>>>> 2f85f7c631584d4804ba7e82450bc38001095d96
// Simple Home component
const Home = () => (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
    <div className="text-center">
<<<<<<< HEAD
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
=======
      <h1 className="text-4xl font-bold mb-4">Welcome to Zion Tech Group</h1>
      <p className="text-xl mb-8">Innovative AI, Cloud & Micro SaaS Solutions</p>
      <div className="space-x-4">
        <a href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
          Our Services
        </a>
        <a href="/contact" className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg">
          Contact Us
        </a>
>>>>>>> 2f85f7c631584d4804ba7e82450bc38001095d96
      </div>
    </div>
  </div>
);

// Simple About component
const About = () => (
  <div className="min-h-screen bg-gray-900 text-white p-8">
<<<<<<< HEAD
    <h1 className="text-4xl font-bold mb-8">About Zion Tech Group</h1>
    <div className="max-w-4xl mx-auto">
      <p className="text-xl mb-6">
        We are a leading technology company specializing in AI, cybersecurity, and cloud solutions.
      </p>
      <p className="text-lg text-gray-300">
        Our mission is to help businesses leverage cutting-edge technology to achieve their goals.
      </p>
    </div>
=======
    <h1 className="text-4xl font-bold mb-4">About Zion Tech Group</h1>
    <p className="text-xl">Leading technology solutions provider helping businesses transform their digital presence.</p>
>>>>>>> 2f85f7c631584d4804ba7e82450bc38001095d96
  </div>
);

// Simple Services component
const Services = () => (
  <div className="min-h-screen bg-gray-900 text-white p-8">
<<<<<<< HEAD
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
=======
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
>>>>>>> 2f85f7c631584d4804ba7e82450bc38001095d96
      </div>
    </div>
  </div>
);

// Simple Contact component
const Contact = () => (
  <div className="min-h-screen bg-gray-900 text-white p-8">
<<<<<<< HEAD
    <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
    <div className="max-w-2xl mx-auto">
      <p className="text-xl mb-6">Get in touch with our team</p>
      <div className="space-y-4">
        <p>Email: contact@ziontechgroup.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Tech Street, Innovation City, IC 12345</p>
=======
    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
    <div className="max-w-2xl">
      <p className="text-xl mb-6">Get in touch with our team for your technology needs.</p>
      <div className="space-y-4">
        <p><strong>Phone:</strong> +1 302 464 0950</p>
        <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
        <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
>>>>>>> 2f85f7c631584d4804ba7e82450bc38001095d96
      </div>
    </div>
  </div>
);

// Simple 404 component
const NotFound = () => (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
    <div className="text-center">
<<<<<<< HEAD
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl">Page not found</p>
=======
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">The page you're looking for doesn't exist.</p>
      <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
        Go Home
      </a>
>>>>>>> 2f85f7c631584d4804ba7e82450bc38001095d96
    </div>
  </div>
);

const App = () => {
  return (
<<<<<<< HEAD
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
=======
    <ErrorBoundary>
      <ThemeProvider>
>>>>>>> 2f85f7c631584d4804ba7e82450bc38001095d96
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
<<<<<<< HEAD
      </HelmetProvider>
    </QueryClientProvider>
=======
      </ThemeProvider>
    </ErrorBoundary>
>>>>>>> 2f85f7c631584d4804ba7e82450bc38001095d96
  );
};

export default App;