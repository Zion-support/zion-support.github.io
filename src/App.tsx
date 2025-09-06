import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import Card from './components/Card';
import ServiceCard from './components/ServiceCard';
import Pricing from './pages/Pricing';
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
        <div className="animate-fade-in-delay">
          <Button variant="primary" size="lg" onClick={() => window.location.href = '/services'}>
            Explore Our Services
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <ServiceCard
            title="AI Services"
            description="Transform your business with cutting-edge AI solutions."
            icon="✨"
            features={['Machine Learning', 'NLP', 'Computer Vision', 'AI Consulting']}
          />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <ServiceCard
            title="Cybersecurity"
            description="Protect your digital assets with advanced security solutions."
            icon="🔒"
            features={['Security Audits', 'Threat Detection', 'Compliance', 'Incident Response']}
          />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <ServiceCard
            title="Cloud Infrastructure"
            description="Scale your operations with robust cloud solutions."
            icon="☁️"
            features={['Cloud Migration', 'Infrastructure Setup', 'Monitoring', 'Cost Optimization']}
          />
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-4xl font-bold mb-8 animate-fade-in">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <Card title="Innovation" description="Pioneering the next generation of technology." />
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card title="Expertise" description="Team of industry-leading professionals." />
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Card title="Reliability" description="Trusted solutions for critical operations." />
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Card title="Scalability" description="Solutions designed to grow with you." />
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Card title="Security" description="Robust protection for all your data." />
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Card title="Support" description="24/7 dedicated customer assistance." />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-20 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-400 mb-2">99%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">5+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="min-h-screen bg-gray-50 py-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Us</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-600 mb-8">
          Zion Tech Group is a leading technology company dedicated to delivering innovative 
          solutions that transform businesses and drive growth in the digital age.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <Card title="Our Mission" description="To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and growth." />
          <Card title="Our Vision" description="To be the global leader in technology solutions, creating a world where every business can leverage technology." />
        </div>
      </div>
    </div>
  </div>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header onMenuClick={handleMenuClick} />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
