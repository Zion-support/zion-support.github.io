<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">Zion Tech Group</h1>
      </header>
      
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Zion Tech Group</h1>
        <p className="text-gray-600 mb-6">Your trusted partner in technology solutions.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">AI Services</h2>
            <p className="text-gray-600">Cutting-edge AI solutions for your business needs.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">IT Services</h2>
            <p className="text-gray-600">Comprehensive IT solutions and support.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Cloud Solutions</h2>
            <p className="text-gray-600">Scalable cloud infrastructure and services.</p>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white p-4 mt-auto">
        <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
      </footer>
    </div>
  );
}
=======


import React, { useState, Suspense } from 'react';
=======
import React from 'react';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Button from './components/Button';
import Card from './components/Card';
import ServiceCard from './components/ServiceCard';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

const Home = () => (
  <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-extrabold mb-4 animate-fade-in">
          Zion Tech Group
        </h1>
        <p className="text-2xl text-gray-300 mb-8 animate-slide-up">
          Leading AI & Technology Solutions for a Smarter Future
        </p>
        <Button variant="primary" size="large" onClick={() => alert('Learn More!')}>
          Explore Our Services
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          title="AI Services"
          description="Transform your business with cutting-edge AI solutions."
          icon="✨"
        />
        <ServiceCard
          title="Cybersecurity"
          description="Protect your digital assets with advanced security solutions."
          icon="🔒"
        />
        <ServiceCard
          title="Cloud Infrastructure"
          description="Scale your operations with robust cloud solutions."
          icon="☁️"
        />
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card title="Innovation" description="Pioneering the next generation of technology." />
          <Card title="Expertise" description="Team of industry-leading professionals." />
          <Card title="Reliability" description="Trusted solutions for critical operations." />
          <Card title="Scalability" description="Solutions designed to grow with you." />
          <Card title="Security" description="Robust protection for all your data." />
          <Card title="Support" description="24/7 dedicated customer assistance." />
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Zion Holdings</h1>
      <p>Technology Solutions for the Future</p>
    </div>
  );
}

export default App;
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
