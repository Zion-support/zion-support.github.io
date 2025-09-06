import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import Card from './components/Card';
import ServiceCard from './components/ServiceCard';

const Home = () => (
  <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-extrabold mb-4">
          Zion Tech Group
        </h1>
        <p className="text-2xl text-gray-300 mb-8">
          Leading AI & Technology Solutions for a Smarter Future
        </p>
        <Button variant="primary" size="lg" onClick={() => alert('Learn More!')}>
          Explore Our Services
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          title="AI Services"
          description="Transform your business with cutting-edge AI solutions."
          icon="✨"
          features={['Machine Learning', 'NLP', 'Computer Vision', 'AI Consulting']}
        />
        <ServiceCard
          title="Cybersecurity"
          description="Protect your digital assets with advanced security solutions."
          icon="🔒"
          features={['Security Audits', 'Threat Detection', 'Compliance', 'Incident Response']}
        />
        <ServiceCard
          title="Cloud Infrastructure"
          description="Scale your operations with robust cloud solutions."
          icon="☁️"
          features={['Cloud Migration', 'Infrastructure Setup', 'Monitoring', 'Cost Optimization']}
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

const Services = () => (
  <div className="min-h-screen bg-gray-50 py-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card title="AI Solutions" description="Machine learning, natural language processing, and computer vision solutions." />
        <Card title="Cybersecurity" description="Advanced security solutions and compliance to protect your digital assets." />
        <Card title="Cloud Infrastructure" description="Scalable cloud solutions and infrastructure management services." />
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="min-h-screen bg-gray-50 py-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Contact Us</h1>
      <div className="max-w-2xl mx-auto">
        <Card title="Get In Touch" description="Ready to transform your business? Let's discuss your project and see how we can help you achieve your goals." />
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <Card title="Email" description="info@ziontechgroup.com" />
          <Card title="Phone" description="+1 (555) 123-4567" />
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
