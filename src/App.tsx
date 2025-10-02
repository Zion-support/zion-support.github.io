import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';

// Simple placeholder components for routes
const HomePage = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to Zion Tech Group</h1>
      <p className="text-xl text-center text-gray-600 mb-8">
        Leading AI and technology solutions provider
      </p>
      <div className="text-center">
        <a 
          href="tel:+13024640950" 
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors mr-4"
        >
          Call +1 302 464 0950
        </a>
        <a 
          href="mailto:kleber@ziontechgroup.com" 
          className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
        >
          Email Us
        </a>
      </div>
    </div>
  </div>
);

const ServicesPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">AI Services</h3>
          <p className="text-gray-600 mb-4">Advanced AI solutions for your business</p>
          <a href="/services" className="text-blue-600 hover:underline">Learn More</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Micro SaaS</h3>
          <p className="text-gray-600 mb-4">Custom micro SaaS solutions</p>
          <a href="/services" className="text-blue-600 hover:underline">Learn More</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">IT Services</h3>
          <p className="text-gray-600 mb-4">Comprehensive IT consulting and implementation</p>
          <a href="/services" className="text-blue-600 hover:underline">Learn More</a>
        </div>
      </div>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Zion Tech Group</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-600 mb-6">
          Zion Tech Group is a leading provider of AI, micro SaaS, and IT solutions. 
          We help businesses transform their operations with cutting-edge technology.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>
          <div className="space-y-2">
            <p><strong>Phone:</strong> +1 302 464 0950</p>
            <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
            <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            Ready to transform your business? Contact us today for a consultation.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mr-4"
            >
              Call +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Email Us
            </a>
          </div>
          <div className="text-center text-gray-600">
            <p>364 E Main St STE 1008</p>
            <p>Middletown, DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;