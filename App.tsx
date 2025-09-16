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

// New Revolutionary AI Content
import RevolutionaryServicesBanner2025 from './src/components/RevolutionaryServicesBanner2025';
import NextGenAIServices2025 from './src/pages/NextGenAIServices2025';
import QuantumTechBreakthrough2025 from './src/pages/QuantumTechBreakthrough2025';
import ConsciousAIRevolution2025 from './src/pages/ConsciousAIRevolution2025';

// Interactive Tech Components
import InteractiveTechShowcase from './src/components/InteractiveTechShowcase';
import InteractiveTechShowcase2026 from './src/components/InteractiveTechShowcase2026';

import './src/index.css';
import './src/styles/optimizations.css';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-50">
          <Header />
          <AnalyticsTracker />
          <PerformanceOptimizer />
          <AccessibilityEnhancer />
          <SEOOptimizer />
          <MobileOptimizer />
          <SecurityEnhancer />
          <TestingSuite />
          <MonitoringDashboard />
          <DocumentationGenerator />
          <PerformanceDashboard />
          
          <Routes>
            <Route path="/" element={
              <div>
                <EnhancedHeroSection />
                <FeaturedContentSection />
                <RevolutionaryServicesBanner2025 />
                <DynamicContentCarousel />
                <InteractiveTechShowcase />
              </div>
            } />
            
            {/* New Revolutionary AI Routes */}
            <Route path="/next-gen-ai-services" element={<NextGenAIServices2025 />} />
            <Route path="/quantum-tech-breakthrough" element={<QuantumTechBreakthrough2025 />} />
            <Route path="/conscious-ai-revolution" element={<ConsciousAIRevolution2025 />} />
            
            {/* Existing Routes */}
            <Route path="/innovation-landing" element={<InnovationLanding2025 />} />
            <Route path="/innovative-services" element={<InnovativeServicesShowcase2025 />} />
            <Route path="/blog-post" element={<BlogPost2025 />} />
            <Route path="/advanced-tech-solutions" element={<AdvancedTechSolutions2025 />} />
            <Route path="/new-ai-use-cases" element={<NewAIUseCases2025 />} />
            <Route path="/edge-ai-iot" element={<EdgeAIandIoT2025 />} />
            <Route path="/future-tech-trends" element={<FutureTechTrends2025 />} />
            <Route path="/comprehensive-services" element={<ComprehensiveServices2025 />} />
            <Route path="/ai-innovation-playbook" element={<AIInnovationPlaybook2025 />} />
            <Route path="/technology-insights" element={<TechnologyInsights2025 />} />
            <Route path="/ai-transformation-guide" element={<AITransformationGuide2025 />} />
            <Route path="/quantum-computing-solutions" element={<QuantumComputingSolutions2025 />} />
            <Route path="/ai-innovation-hub" element={<AIInnovationHub2025 />} />
            <Route path="/digital-transformation" element={<DigitalTransformation2025 />} />
            <Route path="/advanced-analytics" element={<AdvancedAnalytics2025 />} />
            <Route path="/cybersecurity-fortress" element={<CybersecurityFortress2025 />} />
            <Route path="/ai-revolution" element={<AIRevolution2025 />} />
            <Route path="/quantum-computing-breakthrough" element={<QuantumComputingBreakthrough />} />
            <Route path="/neural-interface-future" element={<NeuralInterfaceFuture />} />
            <Route path="/case-study" element={<CaseStudyPage />} />
            <Route path="/interactive-tech-showcase" element={<InteractiveTechShowcase2026 />} />
          </Routes>
          
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;