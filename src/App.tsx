import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import LoadingSpinner from './components/LoadingSpinner';
import PerformanceMonitor from './components/PerformanceMonitor';
import { Button } from './components/ui/Button';
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
const CloudMigration = React.lazy(() => import('./pages/CloudMigrationServices'));
const DevOps = React.lazy(() => import('./pages/CloudDevOpsServices'));
const MobileDevelopment = React.lazy(() => import('./pages/MobileAppPage'));

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <Header />
          <Sidebar />
          <React.Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cybersecurity" element={<Cybersecurity />} />
              <Route path="/cloud-migration" element={<CloudMigration />} />
              <Route path="/devops" element={<DevOps />} />
              <Route path="/mobile-development" element={<MobileDevelopment />} />
            </Routes>
          </React.Suspense>
          <Footer />
          <PerformanceMonitor />
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;