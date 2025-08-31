import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

// Enhanced Layout Components
import { EnhancedHeader } from './components/EnhancedHeader';
import { EnhancedFooter } from './components/EnhancedFooter';

// Enhanced Components
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
import { MobileExperienceEnhancer } from './components/MobileExperienceEnhancer';
import { SEO } from './components/SEO';
import FloatingActionButton from './components/FloatingActionButton';

import { AdvancedAnalytics } from './components/AdvancedAnalytics';
import { SmartNotificationSystem } from './components/SmartNotificationSystem';
import { ChatAssistant } from './components/ChatAssistant';
import PerformanceMonitor from './components/PerformanceMonitor';
import { LoadingSpinner } from './components/ui/loading-spinner';
import { ErrorBoundary } from './components/ErrorBoundary';

// Lazy-loaded Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Team = lazy(() => import('./pages/Team'));
const Blog = lazy(() => import('./pages/Blog'));
const Careers = lazy(() => import('./pages/Careers'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Partners = lazy(() => import('./pages/Partners'));
const Help = lazy(() => import('./pages/Help'));
const Documentation = lazy(() => import('./pages/Documentation'));
const API = lazy(() => import('./pages/API'));
const RequestQuote = lazy(() => import('./pages/RequestQuote'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const NotFound = lazy(() => import('./pages/NotFound'));

const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "100vw" }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

function App() {
  return (
    <HelmetProvider>
      <PerformanceOptimizer enableLazyLoading enableIntersectionObserver enablePerformanceMonitoring>
        <EnhancedAccessibilityEnhancer enableKeyboardNavigation enableScreenReader enableHighContrast enableLargeText enableReducedMotion>
          <MobileExperienceEnhancer />
          <AdvancedAnalytics enabled={true} trackingId="G-XXXXX-Y" enableHeatmap enableSessionRecording enableAITesting />
          <SmartNotificationSystem enabled={true} />
          <ChatAssistant enabled={true} />
          <FloatingActionButton enabled={true} />
          <PerformanceMonitor />

          <ErrorBoundary>
            <EnhancedHeader />
            <AnimatePresence mode="wait">
              <Suspense fallback={<LoadingSpinner size="xl" color="cyan" text="Loading Zion Tech Group..." />}>
                <Routes>
                  <Route path="/" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Home /></motion.div>} />
                  <Route path="/about" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><About /></motion.div>} />
                  <Route path="/services" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Services /></motion.div>} />
                  <Route path="/contact" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Contact /></motion.div>} />
                  <Route path="/team" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Team /></motion.div>} />
                  <Route path="/blog" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Blog /></motion.div>} />
                  <Route path="/careers" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Careers /></motion.div>} />
                  <Route path="/case-studies" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><CaseStudies /></motion.div>} />
                  <Route path="/partners" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Partners /></motion.div>} />
                  <Route path="/help" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Help /></motion.div>} />
                  <Route path="/documentation" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Documentation /></motion.div>} />
                  <Route path="/api" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><API /></motion.div>} />
                  <Route path="/request-quote" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><RequestQuote /></motion.div>} />
                  <Route path="/privacy-policy" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><PrivacyPolicy /></motion.div>} />
                  <Route path="/terms-of-service" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><TermsOfService /></motion.div>} />
                  <Route path="*" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><NotFound /></motion.div>} />
                </Routes>
              </Suspense>
            </AnimatePresence>
            <EnhancedFooter />
          </ErrorBoundary>
        </EnhancedAccessibilityEnhancer>
      </PerformanceOptimizer>
    </HelmetProvider>
  );
}

export default App;
