import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Simple components
const Home = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-6xl font-bold text-center mb-8">
        Zion Tech Group
      </h1>
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
        Leading AI, Quantum Computing & Cybersecurity Solutions
      </p>
      <div className="text-center">
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
          Get Started
        </button>
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="min-h-screen bg-gray-100 py-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <p className="text-lg text-center max-w-3xl mx-auto">
        We are a leading technology company specializing in AI, quantum computing, and cybersecurity solutions.
      </p>
    </div>
  </div>
);

const Contact = () => (
  <div className="min-h-screen bg-gray-100 py-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-lg text-center max-w-3xl mx-auto">
        Get in touch with our team for more information about our services.
      </p>
    </div>
  </div>
);

// Simple navigation
const Navigation = () => (
  <nav className="bg-white shadow-lg">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-purple-600">
          Zion Tech Group
        </div>
        <div className="space-x-6">
          <a href="/" className="text-gray-700 hover:text-purple-600">Home</a>
          <a href="/about" className="text-gray-700 hover:text-purple-600">About</a>
          <a href="/contact" className="text-gray-700 hover:text-purple-600">Contact</a>
        </div>
      </div>
    </div>
  </nav>
);

// Simple footer
const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4 text-center">
      <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
    </div>
  </footer>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;