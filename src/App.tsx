import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/LoadingSpinner';
import PerformanceMonitor from './components/PerformanceMonitor';

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

// New pages from the incoming branch
const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));

const App = () => {
  return (
    <HelmetProvider>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Router>
          <Layout>
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
                {/* New routes from incoming branch */}
                <Route path="/home" element={<HomePage />} />
                <Route path="/about-new" element={<AboutPage />} />
                <Route path="/contact-new" element={<ContactPage />} />
                <Route path="/services-new" element={<ServicesPage />} />
              </Routes>
            </React.Suspense>
            <PerformanceMonitor />
          </Layout>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;