import React, { Suspense, lazy } from 'react';
import { Routes, Route  } from 'react-router-dom';
import { motion, AnimatePresence  } from 'framer-motion';
import { HelmetProvider  } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/index'));
const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact'));
const Careers = lazy(() => import('./pages/careers'));
const Services = lazy(() => import('./pages/services/index'));
const AIServices = lazy(() => import('./pages/services/ai-services'));
const ITServices = lazy(() => import('./pages/services/it-services'));
const MicroSaaS = lazy(() => import('./pages/services/micro-saas'));
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
const AICybersecurityPlatform = lazy(() => import('./pages/services/AICybersecurityPlatform'));
const AICustomerExperience = lazy(() => import('./pages/services/AICustomerExperience'));
const AIHealthcareDiagnostics = lazy(() => import('./pages/services/AIHealthcareDiagnostics'));
const AIEnterpriseOrchestrator = lazy(() => import('./pages/services/AIEnterpriseOrchestrator'));
const AIHealthcareAnalyticsPlatform = lazy(() => import('./pages/services/AIHealthcareAnalyticsPlatform'));
const AIAutonomousSupplyChain = lazy(() => import('./pages/services/AIAutonomousSupplyChain'));
const AIFinancialPlanning = lazy(() => import('./pages/services/AIFinancialPlanning'));

const App: React.FC = () => {
  return(<HelmetProvider>
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
                
                {/* Service Sub-pages */}
                <Route path="/services/ai-autonomous-cybersecurity-platform" element={<AICybersecurityPlatform />} />
                <Route path="/services/ai-customer-experience-platform" element={<AICustomerExperience />} />
                <Route path="/services/ai-healthcare-diagnostics" element={<AIHealthcareDiagnostics />} />
                <Route path="/services/ai-enterprise-orchestrator" element={<AIEnterpriseOrchestrator />} />
                <Route path="/services/ai-healthcare-analytics-platform" element={<AIHealthcareAnalyticsPlatform />} />
                <Route path="/services/ai-autonomous-supply-chain" element={<AIAutonomousSupplyChain />} />
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