import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Layout Components
import { AppHeader } from './layout/AppHeader';
import Footer from './components/Footer';

// Enhanced Components
import { PerformanceMonitor } from './components/PerformanceMonitor';
import { SEO } from './components/SEO';
import { ErrorBoundary } from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy-loaded pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/ServicesPage'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/BlogPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="min-h-screen flex flex-col bg-gray-50">
          {/* SEO Component */}
          <SEO 
            title="Zion Tech Group - AI-Powered IT Solutions & Services"
            description="Leading provider of AI-powered IT solutions, micro-SaaS platforms, and cutting-edge technology services. Transform your business with our innovative solutions."
            keywords="AI solutions, IT services, micro-SaaS, technology consulting, digital transformation"
            ogImage="/og-image.jpg"
            canonicalUrl="https://ziontechgroup.com"
          />
          
          {/* Performance Monitor */}
          <PerformanceMonitor enabled={true} />
          
          {/* Header */}
          <AppHeader />
          
          {/* Main Content */}
          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {/* Core Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                
                {/* 404 Route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;