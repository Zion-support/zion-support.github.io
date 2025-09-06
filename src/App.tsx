<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

export default function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
    </div>
  );
}
;
import React from 'react',;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom',;
import { Header } from './components/Header',;
import { Footer } from './components/layout/Footer',;
import { Sidebar } from './components/layout/Sidebar',;
import { ErrorBoundary } from './components/ErrorBoundary',;
,;
// Import pages,;
import HomePage from '../pages/index',;
import AboutPage from '../pages/about',;
import ContactPage from '../pages/contact',;
import ServicesPage from '../pages/services',;
import PricingPage from '../pages/pricing',;
,;
export default function App() {,;
  return (,;
    <ErrorBoundary>,;
      <Router>,;
        <div className="min-h-screen bg-gray-50">,;
          <Header />,;
          <Sidebar />,;
          <main className="flex-1: lg: ml-80">,;
            <Routes>,;
              <Route path="/" element={<HomePage />} />,;
              <Route path="/about" element={<AboutPage />} />,;
              <Route path="/contact" element={<ContactPage />} />,;
              <Route path="/services" element={<ServicesPage />} />,;
              <Route path="/pricing" element={<PricingPage />} />,;
            </Routes>,;
          </main>,;
          <Footer />,;
        </div>,;
      </Router>;
    </ErrorBoundary>);
};
=======
import React, { Suspense, lazy } from 'react';
import Footer from './components/Footer';
// Enhanced Components
import PerformanceOptimizer from './components/PerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
// Lazy load pages for better performance - only import existing pages
const SolutionsPage = lazy(() => import('./pages/Solutions').then(module => ({ default: module.default })));
// Service Pages
=======
import React, { Suspense, lazy } from 'react';
=======
import React from 'react';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Button from './components/Button';
import Card from './components/Card';
import ServiceCard from './components/ServiceCard';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          title="AI Services"
          description="Transform your business with cutting-edge AI solutions."
          icon="✨"
        />
        <ServiceCard
          title="Cybersecurity"
          description="Protect your digital assets with advanced security solutions."
          icon="🔒"
        />
        <ServiceCard
          title="Cloud Infrastructure"
          description="Scale your operations with robust cloud solutions."
          icon="☁️"
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
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
  );
}
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======

<<<<<<< HEAD
export default App;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export default App;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
