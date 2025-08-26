import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EnhancedLoading from './components/EnhancedLoading';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActionButton from './components/FloatingActionButton';
import EnhancedScrollToTop from './components/EnhancedScrollToTop';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const Services = lazy(() => import('./pages/Services'));
const AISolutions = lazy(() => import('./pages/services/AISolutions'));
const CloudDevOps = lazy(() => import('./pages/services/CloudDevOps'));
const Cybersecurity = lazy(() => import('./pages/services/Cybersecurity'));
const ITInfrastructure = lazy(() => import('./pages/services/ITInfrastructure'));
const DigitalTransformation = lazy(() => import('./pages/services/DigitalTransformation'));
const Consulting = lazy(() => import('./pages/services/Consulting'));
const Pricing = lazy(() => import('./pages/Pricing'));
const ITSolutions = lazy(() => import('./pages/services/ITSolutions'));
const AIServices = lazy(() => import('./pages/services/AIServices'));
const TalentDirectory = lazy(() => import('./pages/TalentDirectory'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <EnhancedLoading variant="spinner" size="xl" text="Loading Zion Tech Group..." />
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16 lg:pt-20">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/ai" element={<AISolutions />} />
              <Route path="/services/cloud" element={<CloudDevOps />} />
              <Route path="/services/cybersecurity" element={<Cybersecurity />} />
              <Route path="/services/infrastructure" element={<ITInfrastructure />} />
              <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/services/consulting" element={<Consulting />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/services/it-solutions" element={<ITSolutions />} />
              <Route path="/services/ai-services" element={<AIServices />} />
              <Route path="/talent-directory" element={<TalentDirectory />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <FloatingActionButton />
        <EnhancedScrollToTop />
      </div>
    </Router>
  );
}

export default App;