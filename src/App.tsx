import React from 'react';
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

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <Header />
          <div className="flex">
            <Sidebar />
            <main className="flex-1">
              <React.Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                  <Route path="/services/cloud-migration" element={<CloudMigration />} />
                  <Route path="/services/devops" element={<DevOps />} />
                  <Route path="/services/mobile-development" element={<MobileDevelopment />} />
                </Routes>
              </React.Suspense>
            </main>
          </div>
          <Footer />
          <PerformanceMonitor />
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
