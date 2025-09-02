import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '../components/layout/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact'));
const Careers = lazy(() => import('./pages/careers'));
const Services = lazy(() => import('./pages/services/index'));
const AIServices = lazy(() => import('./pages/services/ai-services'));
const ITServices = lazy(() => import('./pages/services/it-services'));
const MicroSaaS = lazy(() => import('./pages/services/micro-saas'));
const AIEmailResponder = lazy(() => import('./pages/services/ai-email-responder'));
const AutomatedFollowUps = lazy(() => import('./pages/services/automated-follow-ups'));
const AISeoOptimizer = lazy(() => import('./pages/services/ai-seo-optimizer'));
const Pricing = lazy(() => import('./pages/pricing'));
const PricingGuide = lazy(() => import('./pages/pricing-guide'));
const Blog = lazy(() => import('./pages/blog'));
const CaseStudies = lazy(() => import('./pages/case-studies'));
const WhitePapers = lazy(() => import('./pages/white-papers'));
const Webinars = lazy(() => import('./pages/webinars'));
const Team = lazy(() => import('./pages/team'));
const Privacy = lazy(() => import('./pages/privacy'));
const Terms = lazy(() => import('./pages/terms'));
const Sitemap = lazy(() => import('./pages/sitemap'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Service sub-pages
const AIHealthcareDiagnostics = lazy(() => import('./pages/services/ai-healthcare-diagnostics'));
const AIFinancialPlanning = lazy(() => import('./pages/services/AIFinancialPlanning'));

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
                <Route path="/services-overview" element={<Services />} />
                <Route path="/ai-services" element={<AIServices />} />
                <Route path="/it-services" element={<ITServices />} />
                <Route path="/micro-saas" element={<MicroSaaS />} />
                <Route path="/services/ai-email-responder" element={<AIEmailResponder />} />
                <Route path="/services/automated-follow-ups" element={<AutomatedFollowUps />} />
                <Route path="/services/ai-seo-optimizer" element={<AISeoOptimizer />} />
                
                {/* Service Sub-pages */}
                {/* Deprecated routes temporarily map to existing pages */}
                <Route path="/services/ai-autonomous-cybersecurity-platform" element={<AISeoOptimizer />} />
                <Route path="/services/ai-customer-experience-platform" element={<AutomatedFollowUps />} />
                <Route path="/services/ai-healthcare-diagnostics" element={<AIHealthcareDiagnostics />} />
                <Route path="/services/ai-enterprise-orchestrator" element={<AIServices />} />
                <Route path="/services/ai-healthcare-analytics-platform" element={<AIHealthcareDiagnostics />} />
                <Route path="/services/ai-autonomous-supply-chain" element={<AIServices />} />
                <Route path="/services/ai-financial-planning" element={<AIFinancialPlanning />} />
                
                {/* Pricing Routes */}
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/pricing-guide" element={<PricingGuide />} />
                
                {/* Content Routes */}
                <Route path="/blog" element={<Blog />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/white-papers" element={<WhitePapers />} />
                <Route path="/webinars" element={<Webinars />} />
                
                {/* Legal Routes */}
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/sitemap" element={<Sitemap />} />
                
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