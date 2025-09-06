<<<<<<< HEAD
import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import LoadingSpinner from './components/LoadingSpinner';
import PerformanceMonitor from './components/PerformanceMonitor';
import Button from './components/Button';
import Card from './components/Card';
import ServiceCard from './components/ServiceCard';
=======
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Button from './components/Button'
import Card from './components/Card'
import ServiceCard from './components/ServiceCard'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Contact = React.lazy(() => import('./pages/Contact'));

// Service pages
const Cybersecurity = React.lazy(() => import('./pages/Cybersecurity'));
const CloudMigration = React.lazy(() => import('./pages/CloudMigration'));
const DevOps = React.lazy(() => import('./pages/DevOps'));
const MobileDevelopment = React.lazy(() => import('./pages/MobileDevelopment'));

const HomePage = () => (
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
          features={["Machine Learning", "Natural Language Processing", "Computer Vision"]}
        />
        <ServiceCard
          title="Cybersecurity"
          description="Protect your digital assets with advanced security solutions."
          icon="🔒"
          features={["Threat Detection", "Compliance Management", "Security Audits"]}
        />
        <ServiceCard
          title="Cloud Infrastructure"
          description="Scale your operations with robust cloud solutions."
          icon="☁️"
          features={["Cloud Migration", "Infrastructure Optimization", "Scalable Solutions"]}
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
                
                {/* Service pages */}
                <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                <Route path="/services/cloud-migration" element={<CloudMigration />} />
                <Route path="/services/devops" element={<DevOps />} />
                <Route path="/services/mobile-development" element={<MobileDevelopment />} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
          <PerformanceMonitor />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
