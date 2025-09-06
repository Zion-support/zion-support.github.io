import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Button from './components/Button';
import Card from './components/Card';
import ServiceCard from './components/ServiceCard';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';

// Lazy load pages for better performance
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));

const Home = () => {
  const handleExploreClick = () => {
    // Smooth scroll to services section
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback to navigation
      window.location.href = '/services';
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-extrabold mb-4 animate-fade-in">
            Zion Tech Group
          </h1>
          <p className="text-2xl text-gray-300 mb-8 animate-slide-up">
            Leading AI & Technology Solutions for a Smarter Future
          </p>
          <Button 
            variant="primary" 
            size="large" 
            onClick={handleExploreClick}
            className="transform hover:scale-105 transition-transform duration-200"
          >
            Explore Our Services
          </Button>
        </div>

      <div id="services" className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          title="AI Services"
          description="Transform your business with cutting-edge AI solutions."
          icon="✨"
          features={["Machine Learning", "Natural Language Processing", "Computer Vision"]}
          className="transform hover:scale-105 transition-transform duration-300"
        />
        <ServiceCard
          title="Cybersecurity"
          description="Protect your digital assets with advanced security solutions."
          icon="🔒"
          features={["Threat Detection", "Compliance Management", "Security Audits"]}
          className="transform hover:scale-105 transition-transform duration-300"
        />
        <ServiceCard
          title="Cloud Infrastructure"
          description="Scale your operations with robust cloud solutions."
          icon="☁️"
          features={["Cloud Migration", "Infrastructure Optimization", "Scalable Solutions"]}
          className="transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card 
            title="Innovation" 
            description="Pioneering the next generation of technology." 
            className="transform hover:scale-105 transition-transform duration-300"
          />
          <Card 
            title="Expertise" 
            description="Team of industry-leading professionals." 
            className="transform hover:scale-105 transition-transform duration-300"
          />
          <Card 
            title="Reliability" 
            description="Trusted solutions for critical operations." 
            className="transform hover:scale-105 transition-transform duration-300"
          />
          <Card 
            title="Scalability" 
            description="Solutions designed to grow with you." 
            className="transform hover:scale-105 transition-transform duration-300"
          />
          <Card 
            title="Security" 
            description="Robust protection for all your data." 
            className="transform hover:scale-105 transition-transform duration-300"
          />
          <Card 
            title="Support" 
            description="24/7 dedicated customer assistance." 
            className="transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  </div>
  );
};

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner size="large" text="Loading page..." />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
        <PerformanceMonitor />
      </Router>
    </ErrorBoundary>
  );
};

export default App;
