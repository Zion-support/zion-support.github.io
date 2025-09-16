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
import LoadingSpinner from './src/components/LoadingSpinner';
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
import InteractiveTechShowcase2026 from './src/components/InteractiveTechShowcase2026';
import RevolutionaryContentShowcase2026 from './src/pages/RevolutionaryContentShowcase2026';

export default function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-white">
          <ScrollToTop />
          <PerformanceOptimizer />
          <AccessibilityEnhancer />
          <SEOOptimizer />
          <MobileOptimizer />
          <AnalyticsTracker />
          <SecurityEnhancer />
          <TestingSuite enableTesting={process.env.NODE_ENV === 'development'} />
          <MonitoringDashboard showDashboard={process.env.NODE_ENV === 'development'} />
          <DocumentationGenerator generateDocs={process.env.NODE_ENV === 'development'} />
          <PerformanceDashboard />
          <Header />
          
          <Routes>
            <Route path="/" element={
              <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                <main className="container mx-auto px-4 py-8">
                  {/* Revolutionary Content Banner 2026 - Latest Technology */}
                  <RevolutionaryContentBanner2026 />
                  
                  {/* Interactive Tech Showcase 2026 */}
                  <InteractiveTechShowcase2026 />
                  
                  {/* Revolutionary Services Showcase 2026 */}
                  <RevolutionaryServicesShowcase2026 />
                  
                  {/* Enhanced Hero Section */}
                  <EnhancedHeroSection />
                  
                  {/* Featured Content Section */}
                  <FeaturedContentSection />
                  
                  {/* Dynamic Content Carousel */}
                  <DynamicContentCarousel />
                </main>
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
            <Route path="/revolutionary-content-showcase-2026" element={<RevolutionaryContentShowcase2026 />} />
            <Route path="/case-study/:id" element={<CaseStudyPage />} />
          </Routes>
          
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}