import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Loading from './src/components/Loading';
import PerformanceMonitor from './src/components/PerformanceMonitor';

// Lazy load pages for better performance
const Home = lazy(() => import('./src/pages/Home'));
const About = lazy(() => import('./src/pages/About'));
const Services = lazy(() => import('./src/pages/Services'));
const Pricing = lazy(() => import('./src/pages/Pricing'));
const Contact = lazy(() => import('./src/pages/Contact'));
const NotFound = lazy(() => import('./src/pages/NotFound'));
export default function App() {
  return (
    <Router>
      <PerformanceMonitor />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<Loading fullScreen text="Loading page..." />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}