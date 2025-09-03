import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/index'));
const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact'));
const Careers = lazy(() => import('./pages/careers'));
const Services = lazy(() => import('./pages/services'));
const AIServices = lazy(() => import('./pages/ai-services'));
const ITServices = lazy(() => import('./pages/it-services'));
const MicroSaaS = lazy(() => import('./pages/micro-saas'));
const Blog = lazy(() => import('./pages/blog'));
const Team = lazy(() => import('./pages/team'));
const Partners = lazy(() => import('./pages/partners'));
const Solutions = lazy(() => import('./pages/solutions'));
const Marketplace = lazy(() => import('./pages/marketplace'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatePresence mode="wait">
              <Routes>
                {/* Main Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/team" element={<Team />} />
                
                {/* Services Routes */}
                <Route path="/services" element={<Services />} />
                <Route path="/ai-services" element={<AIServices />} />
                <Route path="/it-services" element={<ITServices />} />
                <Route path="/micro-saas" element={<MicroSaaS />} />
                
                {/* Content Routes */}
                <Route path="/blog" element={<Blog />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/marketplace" element={<Marketplace />} />
                
                {/* 404 Route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </Layout>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;