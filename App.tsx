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

// Page imports
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
import RevolutionaryAIServices2025 from './src/pages/RevolutionaryAIServices2025';
import ConsciousnessComputingRevolution2026 from './src/pages/ConsciousnessComputingRevolution2026';
import AIEnterpriseGovernance2026 from './src/pages/AIEnterpriseGovernance2026';

// Component imports
import DynamicContentCarousel from './src/components/DynamicContentCarousel';
import RevolutionaryContentBanner2026 from './src/components/RevolutionaryContentBanner2026';
import RevolutionaryServicesShowcase2026 from './src/components/RevolutionaryServicesShowcase2026';
import InteractiveTechShowcase from './src/components/InteractiveTechShowcase';
import InteractiveTechShowcase2026 from './src/components/InteractiveTechShowcase2026';
import NewContentBanner2025 from './src/components/NewContentBanner2025';
import EnhancedContentShowcase2025 from './src/components/EnhancedContentShowcase2025';
import RevolutionaryAdBanner2036 from './src/components/RevolutionaryAdBanner2036';
import UltimateContentShowcase2025 from './src/components/UltimateContentShowcase2025';
import NewContentPromoBanner from './src/components/NewContentPromoBanner';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
          <Header />
          
          <Routes>
            <Route path="/" element={
              <div>
                <main className="container mx-auto px-4 py-8">
                  {/* Hero Section */}
                  <EnhancedHeroSection />
                  
                  {/* Featured Content */}
                  <FeaturedContentSection />
                  
                  {/* New Content Banners */}
                  <NewContentPromoBanner />
                  <NewContentBanner2025 />
                  <EnhancedContentShowcase2025 />
                  <RevolutionaryAdBanner2036 />
                  <UltimateContentShowcase2025 />
                  
                  {/* Interactive Showcases */}
                  <InteractiveTechShowcase />
                  <InteractiveTechShowcase2026 />
                  
                  {/* Content Carousels */}
                  <DynamicContentCarousel />
                  
                  {/* Revolutionary Content */}
                  <RevolutionaryContentBanner2026 />
                  <RevolutionaryServicesShowcase2026 />
                </main>
              </div>
            } />
            
            {/* Page Routes */}
            <Route path="/pages/InnovationLanding2025" element={<InnovationLanding2025 />} />
            <Route path="/pages/InnovativeServicesShowcase2025" element={<InnovativeServicesShowcase2025 />} />
            <Route path="/pages/BlogPost2025" element={<BlogPost2025 />} />
            <Route path="/pages/AdvancedTechSolutions2025" element={<AdvancedTechSolutions2025 />} />
            <Route path="/pages/NewAIUseCases2025" element={<NewAIUseCases2025 />} />
            <Route path="/pages/EdgeAIandIoT2025" element={<EdgeAIandIoT2025 />} />
            <Route path="/pages/FutureTechTrends2025" element={<FutureTechTrends2025 />} />
            <Route path="/pages/ComprehensiveServices2025" element={<ComprehensiveServices2025 />} />
            <Route path="/pages/AIInnovationPlaybook2025" element={<AIInnovationPlaybook2025 />} />
            <Route path="/pages/TechnologyInsights2025" element={<TechnologyInsights2025 />} />
            <Route path="/pages/AITransformationGuide2025" element={<AITransformationGuide2025 />} />
            <Route path="/pages/QuantumComputingSolutions2025" element={<QuantumComputingSolutions2025 />} />
            <Route path="/pages/AIInnovationHub2025" element={<AIInnovationHub2025 />} />
            <Route path="/pages/DigitalTransformation2025" element={<DigitalTransformation2025 />} />
            <Route path="/pages/AdvancedAnalytics2025" element={<AdvancedAnalytics2025 />} />
            <Route path="/pages/CybersecurityFortress2025" element={<CybersecurityFortress2025 />} />
            <Route path="/pages/AIRevolution2025" element={<AIRevolution2025 />} />
            <Route path="/pages/QuantumComputingBreakthrough" element={<QuantumComputingBreakthrough />} />
            <Route path="/pages/NeuralInterfaceFuture" element={<NeuralInterfaceFuture />} />
            <Route path="/pages/RevolutionaryAIServices2025" element={<RevolutionaryAIServices2025 />} />
            <Route path="/pages/ConsciousnessComputingRevolution2026" element={<ConsciousnessComputingRevolution2026 />} />
            <Route path="/pages/AIEnterpriseGovernance2026" element={<AIEnterpriseGovernance2026 />} />
            
            {/* Case Study Route */}
            <Route path="/case-study/:id" element={<CaseStudyPage />} />
          </Routes>
          
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;