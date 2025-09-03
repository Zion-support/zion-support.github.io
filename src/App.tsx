import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/index'));
const AboutPage = lazy(() => import('./pages/about'));
const ContactPage = lazy(() => import('./pages/contact'));
const ServicesPage = lazy(() => import('./pages/services'));
const SolutionsPage = lazy(() => import('./pages/solutions'));
const AIServicesPage = lazy(() => import('./pages/ai-services'));
const ITServicesPage = lazy(() => import('./pages/it-services'));
const MicroSAASPage = lazy(() => import('./pages/micro-saas'));

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatePresence mode="wait">
              <Routes>
                {/* Main Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                
                {/* Services Routes */}
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/ai-services" element={<AIServicesPage />} />
                <Route path="/it-services" element={<ITServicesPage />} />
                <Route path="/micro-saas" element={<MicroSAASPage />} />
                <Route path="/solutions" element={<SolutionsPage />} />
                
                {/* 404 Route */}
                <Route path="*" element={<HomePage />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </Layout>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;