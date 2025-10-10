'use client';
import React, { Suspense, lazy, useEffect } from 'react';

import { HelmetProvider } from 'react-helmet-async';
<<<<<<< HEAD
// Components;
=======

// Components';

>>>>>>> origin/main
import AccessibilityEnhancer from './components/AccessibilityEnhancer';

import SEOEnhancer from './components/SEOEnhancer';

import AdvancedSEOOptimizer from './components/AdvancedSEOOptimizer';

import LoadingSpinner from './components/LoadingSpinner';

import Navigation from './components/Navigation';

import Footer from './components/Footer';

import PerformanceOptimizer from './components/PerformanceOptimizer';
<<<<<<< HEAD
// Lazy load components for better performance;
// const ContentShowcase = lazy(() => import('./components/ContentShowcase'));
// const InteractiveContentShowcase2026="lazy()"
// () => import('./components/InteractiveContentShowcase2026')
// );
// const InteractiveAIROICalculator="lazy()"
=======

// Lazy load components for better performance';

// const ContentShowcase = lazy(() => import('./components/ContentShowcase));;

// const InteractiveContentShowcase2026 = lazy();;

// () => import('./components/InteractiveContentShowcase2026')
// );

// const InteractiveAIROICalculator = lazy();;

>>>>>>> origin/main
// () => import('./components/InteractiveAIROICalculator')
// );
// Lazy load pages for better performance;
<<<<<<< HEAD
const _HomePage = lazy(() => import('./page'));
const _AboutPage = lazy(() => import('./about/page'));
const _ServicesPage = lazy(() => import('./services/page'));
const _ContactPage = lazy(() => import('./contact/page'));
const _TeamPage = lazy(() => import('./team/page'));
const _PrivacyPage = lazy(() => import('./privacy/page'));
const _TermsPage = lazy(() => import('./terms/page'));
const _EnterprisePage = lazy(() => import('./enterprise/page'));
const _ServicesAdvertisingPage = lazy(() => import('./services-advertising/page'));
const _CaseStudiesPage = lazy(() => import('./case-studies/page'));
// Additional service pages;
const AiServicesPage = lazy(() => import('./ai-services/page'));
const ItServicesPage = lazy(() => import('./it-services/page'));
const MicroSaasPage = lazy(() => import('./micro-saas/page'));
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));
const BlockchainWeb3 Page = lazy(() => import('./blockchain-web3/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));
const BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));
const IotEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'));
// Additional pages;
const BlogPage = lazy(() => import('./blog-index'));
const GuidesPage = lazy(() => import('./guides/page'));
const SitemapPage = lazy(() => import('./sitemap/page'));
const NotFoundPage = lazy(() => import('./not-found'));
const OfflinePage = lazy(() => import('./offline/page'));
=======

const _HomePage = lazy(() => import('./page));;

const _AboutPage = lazy(() => import('./about/page));;

const _ServicesPage = lazy(() => import('./services/page));;

const _ContactPage = lazy(() => import('./contact/page));;

const _TeamPage = lazy(() => import('./team/page));;

const _PrivacyPage = lazy(() => import('./privacy/page));;

const _TermsPage = lazy(() => import('./terms/page));;

const _EnterprisePage = lazy(() => import('./enterprise/page));;

const _ServicesAdvertisingPage = lazy(() => import('./services-advertising/page));;

const _CaseStudiesPage = lazy(() => import('./case-studies/page));;

// Additional service pages;

const AiServicesPage = lazy(() => import('./ai-services/page));;

const ItServicesPage = lazy(() => import('./it-services/page));;

const MicroSaasPage = lazy(() => import('./micro-saas/page));;

const QuantumComputingPage = lazy(() => import('./quantum-computing/page));;

const AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page));;

const BlockchainWeb3 Page = lazy(() => import('./blockchain-web3/page));

const CybersecurityPage = lazy(() => import('./cybersecurity/page));;

const BusinessIntelligencePage = lazy(() => import('./business-intelligence/page));;

const IotEdgeComputingPage = lazy(() => import('./iot-edge-computing/page));;

// Additional pages;

const BlogPage = lazy(() => import('./blog-index));;

const GuidesPage = lazy(() => import('./guides/page));;

const SitemapPage = lazy(() => import('./sitemap/page));;

const NotFoundPage = lazy(() => import('./not-found));;

const OfflinePage = lazy(() => import('./offline/page));;

>>>>>>> origin/main
// Utils;

import { lazyLoadImages, preloadCriticalResources, collectPerformanceMetrics, performanceOptimizer } from './utils/performanceOptimizer';

import { logger } from './utils/logger';

import performanceMonitor from './utils/performanceMonitor';

import seoOptimizer from './utils/seoOptimizer';

import accessibilityEnhancer from './utils/accessibilityEnhancer';
<<<<<<< HEAD
// Styles;
import './globals.css';
=======

// Styles';

import './globals.css';
>>>>>>> origin/main
