<<<<<<< HEAD

import React, { useState, Suspense } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import Card from './components/Card';
import ServiceCard from './components/ServiceCard';


// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Contact = React.lazy(() => import('./pages/Contact'));

const HomePage = () => (

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

=======
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Button from './components/Button'
import Card from './components/Card'
import ServiceCard from './components/ServiceCard'
import { Header } from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Services from './pages/ServicesPage'
import Contact from './pages/Contact'

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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

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

function App() {
<<<<<<< HEAD

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ErrorBoundary>
      <Router>

        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
          <Header />
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          
          <main className="pt-20">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>

          </main>
          <Footer />

          <PerformanceMonitor />

        </div>
      </Router>
    </ErrorBoundary>

  );
=======
  const handleMenuClick = () => {
    // Handle menu click if needed
  };

  return (
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
  )
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
}


export default App;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
