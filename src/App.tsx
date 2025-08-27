import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { EnhancedLayout } from './components/EnhancedLayout';
import { ChatAssistant } from './components/ChatAssistant';
import { AIChatbotSystem } from './components/AIChatbotSystem';
import { ErrorBoundary } from './components/ErrorBoundary';
import { NotificationSystem } from './components/NotificationSystem';
import { EnhancedLoading, loadingConfigs } from './components/EnhancedLoading';
import { AccessibilityProvider } from './components/AccessibilityProvider';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { SEO } from './components/SEO';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/about'));
const Contact = React.lazy(() => import('./pages/contact'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Services = React.lazy(() => import('./pages/Services'));
const CaseStudies = React.lazy(() => import('./pages/case-studies'));
const Events = React.lazy(() => import('./pages/events'));
const Products = React.lazy(() => import('./pages/products'));
const ResearchDevelopment = React.lazy(() => import('./pages/research-development'));
const Solutions = React.lazy(() => import('./pages/solutions'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const InnovativeServicesShowcase = React.lazy(() => import('./pages/InnovativeServicesShowcase'));

// Enhanced loading component with better UX
const EnhancedLoadingSpinner = () => (
  <EnhancedLoading
    isLoading={true}
    {...loadingConfigs.pageLoad}
    autoComplete={false}
  />
);

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <AccessibilityProvider>
          <Router>
            {/* Global SEO */}
            <SEO />
            
            <EnhancedLayout>
              <Suspense fallback={<EnhancedLoadingSpinner />}>
                <Routes>
                  {/* Main Routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/research-development" element={<ResearchDevelopment />} />
                  <Route path="/solutions" element={<Solutions />} />
                  <Route path="/green-it" element={<GreenIT />} />
                  <Route path="/innovative-services-2025" element={<InnovativeServicesShowcase />} />
                  
                  {/* Emerging Tech Routes */}
                  <Route path="/emerging-tech" element={<GreenIT />} />
                  <Route path="/emerging-tech/:service" element={<GreenIT />} />
                  
                  {/* Marketplace Routes */}
                  <Route path="/marketplace" element={<GreenIT />} />
                  <Route path="/marketplace/:service" element={<GreenIT />} />
                </Routes>
              </Suspense>
              
              {/* Chat Assistant */}
              <ChatAssistant />
            </EnhancedLayout>
            
            {/* AI Chatbot System */}
            <AIChatbotSystem />
            
            {/* Performance Optimizer */}
            <PerformanceOptimizer />
            
            {/* Notification System */}
            <NotificationSystem />
          </Router>
        </AccessibilityProvider>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;