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

// 2025 Pages
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
import NextGenTechRevolution2025 from './src/pages/NextGenTechRevolution2025';
import UltimateTechBreakthrough2025 from './src/pages/UltimateTechBreakthrough2025';
import RevolutionaryTechShowcase2025 from './src/pages/RevolutionaryTechShowcase2025';

// 2026 Pages
import SyntheticIntelligence2026 from './src/pages/SyntheticIntelligence2026';
import QuantumNeuralFusion2026 from './src/pages/QuantumNeuralFusion2026';
import NextGenAIRevolution2026 from './src/pages/NextGenAIRevolution2026';
import QuantumComputingRevolution2026 from './src/pages/QuantumComputingRevolution2026';
import NeuralInterfaceRevolution2026 from './src/pages/NeuralInterfaceRevolution2026';
import RevolutionaryTechBlog2026 from './src/pages/RevolutionaryTechBlog2026';
import ComprehensiveTechInsights2026 from './src/pages/ComprehensiveTechInsights2026';
import AdvancedAITransformation2026 from './src/pages/AdvancedAITransformation2026';
import NextGenTechShowcase2026 from './src/pages/NextGenTechShowcase2026';
import AdvancedAISystems2026 from './src/pages/AdvancedAISystems2026';
import AIRevolutionaryBreakthrough2026 from './src/pages/AIRevolutionaryBreakthrough2026';
import QuantumReality2026 from './src/pages/QuantumReality2026';
import NeuralInterfaceEvolution2026 from './src/pages/NeuralInterfaceEvolution2026';
import UltimateTechRevolution2026 from './src/pages/UltimateTechRevolution2026';
import ConsciousnessComputing2026 from './src/pages/ConsciousnessComputing2026';

// 2029-2030 Pages
import UltimateTechShowcase2029 from './src/pages/UltimateTechShowcase2029';
import RevolutionaryTech2030 from './src/pages/RevolutionaryTech2030';
import OmniversalAI2030 from './src/pages/OmniversalAI2030';
import ConsciousnessTransfer2030 from './src/pages/ConsciousnessTransfer2030';

// Components
import DynamicContentCarousel from './src/components/DynamicContentCarousel';
import RevolutionaryContentBanner2026 from './src/components/RevolutionaryContentBanner2026';
import RevolutionaryServicesShowcase2026 from './src/components/RevolutionaryServicesShowcase2026';
import InteractiveTechShowcase from './src/components/InteractiveTechShowcase';
import InteractiveTechShowcase2026 from './src/components/InteractiveTechShowcase2026';
import InteractiveTechShowcase2027 from './src/components/InteractiveTechShowcase2027';
import InteractiveTechShowcase2028 from './src/components/InteractiveTechShowcase2028';
import EnhancedContentCarousel2025 from './src/components/EnhancedContentCarousel2025';
import AdvancedPerformanceOptimizer2025 from './src/components/AdvancedPerformanceOptimizer2025';
import AdvancedSEOOptimizer2025 from './src/components/AdvancedSEOOptimizer2025';
import AdvancedAnalyticsTracker2025 from './src/components/AdvancedAnalyticsTracker2025';
import EnhancedAccessibility2025 from './src/components/EnhancedAccessibility2025';
import MobileOptimizer2025 from './src/components/MobileOptimizer2025';
import ComprehensiveImprovements2025 from './src/components/ComprehensiveImprovements2025';
import EnhancedContentShowcase from './src/components/EnhancedContentShowcase';
import RevolutionaryContentShowcase from './src/components/RevolutionaryContentShowcase';
import InnovationShowcase2026 from './src/components/InnovationShowcase2026';
import RevolutionaryContentShowcase2026 from './src/components/RevolutionaryContentShowcase2026';
import RevolutionaryAdBanner from './src/components/RevolutionaryAdBanner';
import UltimateContentShowcase from './src/components/UltimateContentShowcase';
import RevolutionaryContentShowcase2030 from './src/components/RevolutionaryContentShowcase2030';

// New 2025 Components
import RevolutionaryContentBanner2025 from './src/components/RevolutionaryContentBanner2025';
import UltimateContentBanner2025 from './src/components/UltimateContentBanner2025';
import InteractiveTechShowcase2025 from './src/components/InteractiveTechShowcase2025';
import DynamicContentCarousel2025 from './src/components/DynamicContentCarousel2025';

// Styles
import './src/index.css';
import './src/styles/optimizations.css';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Header />
          <main className="relative">
            <Routes>
              {/* Home Route */}
              <Route path="/" element={
                <div className="space-y-0">
                  <EnhancedHeroSection />
                  <RevolutionaryContentBanner2025 />
                  <UltimateContentBanner2025 />
                  <DynamicContentCarousel2025 />
                  <InteractiveTechShowcase2025 />
                  <FeaturedContentSection />
                  <RevolutionaryAdBanner />
                  <UltimateContentShowcase />
                </div>
              } />
              
              {/* 2025 Innovation Routes */}
              <Route path="/innovation-2025" element={<InnovationLanding2025 />} />
              <Route path="/services-showcase-2025" element={<InnovativeServicesShowcase2025 />} />
              <Route path="/blog-2025" element={<BlogPost2025 />} />
              <Route path="/tech-solutions-2025" element={<AdvancedTechSolutions2025 />} />
              <Route path="/ai-use-cases-2025" element={<NewAIUseCases2025 />} />
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
              <Route path="/next-gen-tech-revolution-2025" element={<NextGenTechRevolution2025 />} />
              <Route path="/ultimate-tech-breakthrough-2025" element={<UltimateTechBreakthrough2025 />} />
              <Route path="/revolutionary-tech-showcase-2025" element={<RevolutionaryTechShowcase2025 />} />
              
              {/* 2026 Innovation Routes */}
              <Route path="/synthetic-intelligence-2026" element={<SyntheticIntelligence2026 />} />
              <Route path="/quantum-neural-fusion-2026" element={<QuantumNeuralFusion2026 />} />
              <Route path="/next-gen-ai-revolution-2026" element={<NextGenAIRevolution2026 />} />
              <Route path="/quantum-computing-revolution-2026" element={<QuantumComputingRevolution2026 />} />
              <Route path="/neural-interface-revolution-2026" element={<NeuralInterfaceRevolution2026 />} />
              <Route path="/revolutionary-tech-blog-2026" element={<RevolutionaryTechBlog2026 />} />
              <Route path="/comprehensive-tech-insights-2026" element={<ComprehensiveTechInsights2026 />} />
              <Route path="/advanced-ai-transformation-2026" element={<AdvancedAITransformation2026 />} />
              <Route path="/next-gen-tech-showcase-2026" element={<NextGenTechShowcase2026 />} />
              <Route path="/advanced-ai-systems-2026" element={<AdvancedAISystems2026 />} />
              <Route path="/ai-revolutionary-breakthrough-2026" element={<AIRevolutionaryBreakthrough2026 />} />
              <Route path="/quantum-reality-2026" element={<QuantumReality2026 />} />
              <Route path="/neural-interface-evolution-2026" element={<NeuralInterfaceEvolution2026 />} />
              <Route path="/ultimate-tech-revolution-2026" element={<UltimateTechRevolution2026 />} />
              <Route path="/consciousness-computing-2026" element={<ConsciousnessComputing2026 />} />
              
              {/* 2029-2030 Future Routes */}
              <Route path="/ultimate-tech-showcase-2029" element={<UltimateTechShowcase2029 />} />
              <Route path="/revolutionary-tech-2030" element={<RevolutionaryTech2030 />} />
              <Route path="/omniversal-ai-2030" element={<OmniversalAI2030 />} />
              <Route path="/consciousness-transfer-2030" element={<ConsciousnessTransfer2030 />} />
              
              {/* Case Study Route */}
              <Route path="/case-study" element={<CaseStudyPage />} />
            </Routes>
          </main>
          <Footer />
          
          {/* Performance and Monitoring Components */}
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
          
          {/* 2025 Advanced Components */}
          <AdvancedPerformanceOptimizer2025 />
          <AdvancedSEOOptimizer2025 />
          <AdvancedAnalyticsTracker2025 />
          <EnhancedAccessibility2025 />
          <MobileOptimizer2025 />
          <ComprehensiveImprovements2025 />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;