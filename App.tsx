import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './src/ScrollToTop';
import Header from './src/Header';
import Footer from './src/Footer';
import Home from './src/pages/Home';
import CaseStudyPage from './src/CaseStudyPage';
import ErrorBoundary from './src/components/ErrorBoundary';
import AccessibilityFeatures from './src/components/AccessibilityFeatures';
import usePerformanceMonitoring from './src/hooks/usePerformanceMonitoring';
import './src/index.css';

// Import new content pages
import UltimateTechShowcase2026 from './src/pages/UltimateTechShowcase2026';
import AdvancedBiotechAI2026 from './src/pages/AdvancedBiotechAI2026';
import NextGenSpaceTech2026 from './src/pages/NextGenSpaceTech2026';
import EnhancedContentAdvertising from './src/components/EnhancedContentAdvertising';

// Import existing pages
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
import AIEnterpriseCopilot2025 from './src/pages/AIEnterpriseCopilot2025';
import NewShowcase2025 from './src/pages/NewShowcase2025';

// Import components
import InteractiveTechShowcase from './src/components/InteractiveTechShowcase';
import RevolutionaryTechShowcase from './src/components/RevolutionaryTechShowcase';
import DynamicContentCarousel from './src/components/DynamicContentCarousel';
import EnhancedContentShowcase from './src/components/EnhancedContentShowcase';
import RevolutionaryContentShowcase from './src/components/RevolutionaryContentShowcase';

function App() {
  usePerformanceMonitoring();

  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <AccessibilityFeatures />
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/case-study" element={<CaseStudyPage />} />
              
              {/* New 2026 Content Routes */}
              <Route path="/pages/UltimateTechShowcase2026" element={<UltimateTechShowcase2026 />} />
              <Route path="/pages/AdvancedBiotechAI2026" element={<AdvancedBiotechAI2026 />} />
              <Route path="/pages/NextGenSpaceTech2026" element={<NextGenSpaceTech2026 />} />
              
              {/* 2025 Routes */}
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
              <Route path="/pages/AIEnterpriseCopilot2025" element={<AIEnterpriseCopilot2025 />} />
              <Route path="/pages/NewShowcase2025" element={<NewShowcase2025 />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;