import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './src/ScrollToTop';
import Header from './src/Header';
import Footer from './src/Footer';
import EnhancedHeroSection from './src/components/EnhancedHeroSection';
import FeaturedContentSection from './src/components/FeaturedContentSection';
import CaseStudyPage from './src/CaseStudyPage';
import PerformanceOptimizer from './src/components/PerformanceOptimizer';
import AccessibilityEnhancer from './src/components/AccessibilityEnhancer';
import SEOOptimizer from './src/components/SEOOptimizer';
import MobileOptimizer from './src/components/MobileOptimizer';
import ErrorBoundary from './src/components/ErrorBoundary';
import AnalyticsTracker from './src/components/AnalyticsTracker';
import SecurityEnhancer from './src/components/SecurityEnhancer';
import TestingSuite from './src/components/TestingSuite';
import MonitoringDashboard from './src/components/MonitoringDashboard';
import DocumentationGenerator from './src/components/DocumentationGenerator';
import PerformanceDashboard from './src/components/PerformanceDashboard';
import InnovationLanding2025 from './src/pages/InnovationLanding2025';
import InnovativeServicesShowcase2025 from './src/pages/InnovativeServicesShowcase2025';
import BlogPost2025 from './src/pages/BlogPost2025';
import AdvancedTechSolutions2025 from './src/pages/AdvancedTechSolutions2025';
import NewAIUseCases2025 from './src/pages/NewAIUseCases2025';
import EdgeAIandIoT2025 from './src/pages/EdgeAIandIoT2025';
import FutureTechTrends2025 from './src/pages/FutureTechTrends2025';
import ComprehensiveServices2025 from './src/pages/ComprehensiveServices2025';
import AIInnovationPlaybook2025 from './src/pages/AIInnovationPlaybook2025';
import TechnologyInsights2025 from './src/pages/TechnologyInsights2025';
import AITransformationGuide2025 from './src/pages/AITransformationGuide2025';
import QuantumComputingSolutions2025 from './src/pages/QuantumComputingSolutions2025';
import AIInnovationHub2025 from './src/pages/AIInnovationHub2025';
import DigitalTransformation2025 from './src/pages/DigitalTransformation2025';
import AdvancedAnalytics2025 from './src/pages/AdvancedAnalytics2025';
import CybersecurityFortress2025 from './src/pages/CybersecurityFortress2025';
import AIRevolution2025 from './src/pages/AIRevolution2025';
import QuantumComputingBreakthrough from './src/pages/QuantumComputingBreakthrough';
import NeuralInterfaceFuture from './src/pages/NeuralInterfaceFuture';
import DynamicContentCarousel from './src/components/DynamicContentCarousel';
import RevolutionaryContentBanner2026 from './src/components/RevolutionaryContentBanner2026';
import RevolutionaryServicesShowcase2026 from './src/components/RevolutionaryServicesShowcase2026';
import InteractiveTechShowcase from './src/components/InteractiveTechShowcase';
import InteractiveTechShowcase2026 from './src/components/InteractiveTechShowcase2026';
import InteractiveTechShowcase2027 from './src/components/InteractiveTechShowcase2027';
import RevolutionaryContentBanner from './src/components/RevolutionaryContentBanner';
import RevolutionaryTechBanner2026 from './src/components/RevolutionaryTechBanner2026';
import TrendingTopicsWidget2026 from './src/components/TrendingTopicsWidget2026';
import EnhancedContentCarousel2025 from './src/components/EnhancedContentCarousel2025';
import AdvancedPerformanceOptimizer2025 from './src/components/AdvancedPerformanceOptimizer2025';
import AdvancedSEOOptimizer2025 from './src/components/AdvancedSEOOptimizer2025';
import AdvancedAnalyticsTracker2025 from './src/components/AdvancedAnalyticsTracker2025';
import EnhancedAccessibility2025 from './src/components/EnhancedAccessibility2025';
import MobileOptimizer2025 from './src/components/MobileOptimizer2025';
import ComprehensiveImprovements2025 from './src/components/ComprehensiveImprovements2025';
import UltimateTechShowcase2025 from './src/components/UltimateTechShowcase2025';
import RevolutionaryInnovationBanner2025 from './src/components/RevolutionaryInnovationBanner2025';
import FutureTechTrends2025Component from './src/components/FutureTechTrends2025';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Header />
          <main className="relative">
            <Routes>
              <Route path="/" element={
                <div className="relative">
                  {/* NEW: Revolutionary Innovation Banner 2025 - Featured at Top */}
                  <RevolutionaryInnovationBanner2025 />
                  
                  {/* NEW: Ultimate Tech Showcase 2025 - Featured Content */}
                  <UltimateTechShowcase2025 />
                  
                  {/* NEW: Future Tech Trends 2025 - Trending Content */}
                  <FutureTechTrends2025Component />
                  
                  {/* Enhanced Hero Section */}
                  <EnhancedHeroSection />
                  
                  {/* Featured Content Section */}
                  <FeaturedContentSection />
                  
                  {/* Dynamic Content Carousel */}
                  <DynamicContentCarousel />
                  
                  {/* Revolutionary Content Banner 2026 - Latest Technology */}
                  <RevolutionaryContentBanner2026 />
                  
                  {/* Revolutionary Services Showcase 2026 */}
                  <RevolutionaryServicesShowcase2026 />
                  
                  {/* Interactive Tech Showcases */}
                  <InteractiveTechShowcase />
                  <InteractiveTechShowcase2026 />
                  <InteractiveTechShowcase2027 />
                  
                  {/* Additional Content Banners */}
                  <RevolutionaryContentBanner />
                  <RevolutionaryTechBanner2026 />
                  <TrendingTopicsWidget2026 />
                  
                  {/* Enhanced Components 2025 */}
                  <EnhancedContentCarousel2025 />
                  <AdvancedPerformanceOptimizer2025 />
                  <AdvancedSEOOptimizer2025 />
                  <AdvancedAnalyticsTracker2025 />
                  <EnhancedAccessibility2025 />
                  <MobileOptimizer2025 />
                  <ComprehensiveImprovements2025 />
                </div>
              } />
              <Route path="/innovation-landing-2025" element={<InnovationLanding2025 />} />
              <Route path="/innovative-services-showcase-2025" element={<InnovativeServicesShowcase2025 />} />
              <Route path="/blog-post-2025" element={<BlogPost2025 />} />
              <Route path="/advanced-tech-solutions-2025" element={<AdvancedTechSolutions2025 />} />
              <Route path="/new-ai-use-cases-2025" element={<NewAIUseCases2025 />} />
              <Route path="/edge-ai-iot-2025" element={<EdgeAIandIoT2025 />} />
              <Route path="/future-tech-trends-2025" element={<FutureTechTrends2025 />} />
              <Route path="/comprehensive-services-2025" element={<ComprehensiveServices2025 />} />
              <Route path="/ai-innovation-playbook-2025" element={<AIInnovationPlaybook2025 />} />
              <Route path="/technology-insights-2025" element={<TechnologyInsights2025 />} />
              <Route path="/ai-transformation-guide-2025" element={<AITransformationGuide2025 />} />
              <Route path="/quantum-computing-solutions-2025" element={<QuantumComputingSolutions2025 />} />
              <Route path="/ai-innovation-hub-2025" element={<AIInnovationHub2025 />} />
              <Route path="/digital-transformation-2025" element={<DigitalTransformation2025 />} />
              <Route path="/advanced-analytics-2025" element={<AdvancedAnalytics2025 />} />
              <Route path="/cybersecurity-fortress-2025" element={<CybersecurityFortress2025 />} />
              <Route path="/ai-revolution-2025" element={<AIRevolution2025 />} />
              <Route path="/quantum-computing-breakthrough" element={<QuantumComputingBreakthrough />} />
              <Route path="/neural-interface-future" element={<NeuralInterfaceFuture />} />
              <Route path="/case-study/:id" element={<CaseStudyPage />} />
            </Routes>
          </main>
          <Footer />
          <PerformanceOptimizer />
          <AccessibilityEnhancer />
          <SEOOptimizer />
          <MobileOptimizer />
          <AnalyticsTracker />
          <SecurityEnhancer />
          <TestingSuite />
          <MonitoringDashboard />
          <DocumentationGenerator />
          <PerformanceDashboard />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;