import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));
const Blog = lazy(() => import('./pages/Blog'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Careers = lazy(() => import('./pages/Careers'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

// Service detail pages
const AISolutions = lazy(() => import('./pages/services/AISolutions'));
const CloudDevOps = lazy(() => import('./pages/services/CloudDevOps'));
const Cybersecurity = lazy(() => import('./pages/services/Cybersecurity'));
const ITInfrastructure = lazy(() => import('./pages/services/ITInfrastructure'));
const DigitalTransformation = lazy(() => import('./pages/services/DigitalTransformation'));
const Consulting = lazy(() => import('./pages/services/Consulting'));

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 pt-16"> {/* Add padding-top to account for fixed header */}
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                
                {/* Service detail routes */}
                <Route path="/services/ai" element={<AISolutions />} />
                <Route path="/services/cloud" element={<CloudDevOps />} />
                <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                <Route path="/services/infrastructure" element={<ITInfrastructure />} />
                <Route path="/services/transformation" element={<DigitalTransformation />} />
                <Route path="/services/consulting" element={<Consulting />} />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;