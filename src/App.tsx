import React, { Suspense } from 'react';
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

// Lazy load pages with better error handling
const Home = React.lazy(() => import('./pages/Home').catch(() => ({ default: () => <div>Error loading Home page</div> })));
const About = React.lazy(() => import('./pages/About').catch(() => ({ default: () => <div>Error loading About page</div> })));
const Services = React.lazy(() => import('./pages/Services').catch(() => ({ default: () => <div>Error loading Services page</div> })));
const Pricing = React.lazy(() => import('./pages/Pricing').catch(() => ({ default: () => <div>Error loading Pricing page</div> })));
const Contact = React.lazy(() => import('./pages/Contact').catch(() => ({ default: () => <div>Error loading Contact page</div> })));

// Service pages with error handling
const Cybersecurity = React.lazy(() => import('./pages/Cybersecurity').catch(() => ({ default: () => <div>Error loading Cybersecurity page</div> })));
const CloudMigration = React.lazy(() => import('./pages/CloudMigrationServices').catch(() => ({ default: () => <div>Error loading Cloud Migration page</div> })));
const DevOps = React.lazy(() => import('./pages/CloudDevOpsServices').catch(() => ({ default: () => <div>Error loading DevOps page</div> })));
const MobileDevelopment = React.lazy(() => import('./pages/MobileAppPage').catch(() => ({ default: () => <div>Error loading Mobile Development page</div> })));

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <Header />
          <Sidebar />
          <Suspense fallback={<LoadingSpinner />}>
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
          </Suspense>
          <Footer />
          <PerformanceMonitor />
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;