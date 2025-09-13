// @ts-nocheck
import React, { Suspense, lazy } from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';
import PerformanceMonitor from '../components/PerformanceMonitor';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';

// Lazy load heavy components
const ROICalculator = lazy(() => import('../components/ROICalculator'));
const StructuredData = lazy(() => import('../components/StructuredData'));
const PerformanceMetrics = lazy(() => import('../components/PerformanceMetrics'));
const TechnologyStack = lazy(() => import('../components/TechnologyStack'));

// Import new content components
import NewContent2025ShowcaseBanner from '../components/NewContent2025ShowcaseBanner';
import AI2025LatestInnovationsShowcase from '../components/AI2025LatestInnovationsShowcase';
import RevolutionaryTechTrends2025 from '../components/RevolutionaryTechTrends2025';
import EnterpriseSuccessStories from '../components/EnterpriseSuccessStories';

export default function HomePage() {
  return (
    <ErrorBoundary>
      <SEO
        title="Zion Tech Group - AI & Technology Solutions"
        description="Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services."
        keywords="AI automation, cloud computing, micro SaaS, technology consulting, enterprise solutions, digital transformation"
        url="/"
      />
      
      <div className='min-h-screen bg-white'>
        {/* NEW CONTENT SHOWCASE BANNER */}
        <NewContent2025ShowcaseBanner />
        
        {/* AI INNOVATIONS 2025 SHOWCASE */}
        <AI2025LatestInnovationsShowcase />
        
        {/* REVOLUTIONARY TECH TRENDS 2025 */}
        <RevolutionaryTechTrends2025 />
        
        {/* ENTERPRISE SUCCESS STORIES */}
        <EnterpriseSuccessStories />
        
        {/* EXISTING CONTENT SECTIONS */}
        <Suspense fallback={<LoadingSpinner />}>
          <ROICalculator />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <TechnologyStack />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <PerformanceMetrics />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <StructuredData />
        </Suspense>
        
        <PerformanceMonitor />
        <AccessibilityEnhancer />
      </div>
    </ErrorBoundary>
  );
}