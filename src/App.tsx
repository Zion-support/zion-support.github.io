import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));

// Simple placeholder components
const Home = () => (
  <div className='min-h-screen flex items-center justify-center bg-gray-50'>
    <div className='text-center'>
      <h1 className='text-4xl font-bold text-gray-900 mb-4'>
        Welcome to Zion Tech Group
      </h1>
      <p className='text-xl text-gray-600'>Advanced AI and IT Solutions</p>
    </div>
  </div>
);

const About = () => (
  <div className='min-h-screen flex items-center justify-center bg-gray-50'>
    <div className='text-center'>
      <h1 className='text-4xl font-bold text-gray-900 mb-4'>About Us</h1>
      <p className='text-xl text-gray-600'>Leading AI and IT Solutions Provider</p>
    </div>
  </div>
);

const Contact = () => (
  <div className='min-h-screen flex items-center justify-center bg-gray-50'>
    <div className='text-center'>
      <h1 className='text-4xl font-bold text-gray-900 mb-4'>Contact Us</h1>
      <p className='text-xl text-gray-600'>Get in touch with our team</p>
    </div>
  </div>
);

const Services = () => (
  <div className='min-h-screen flex items-center justify-center bg-gray-50'>
    <div className='text-center'>
      <h1 className='text-4xl font-bold text-gray-900 mb-4'>Our Services</h1>
      <p className='text-xl text-gray-600'>AI and IT Solutions for Enterprise</p>
    </div>
  </div>
);

const App: React.FC = () => {
  useEffect(() => {
    // Initialize any global functionality here
    console.log('App initialized');
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;