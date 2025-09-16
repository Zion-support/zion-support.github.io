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
import PerformanceDashboard from './src/components/PerformanceDashboard';

// Import our new components
import RevolutionaryContentBanner2026 from './src/components/RevolutionaryContentBanner2026';
import InteractiveTechShowcase2026 from './src/components/InteractiveTechShowcase2026';
import RevolutionaryAIServices2026 from './src/pages/RevolutionaryAIServices2026';
import QuantumComputingRevolution2026 from './src/pages/QuantumComputingRevolution2026';

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
import DynamicContentCarousel from './src/components/DynamicContentCarousel';
import InteractiveTechShowcase from './src/components/InteractiveTechShowcase';
import Home from './src/pages/Home';
import About from './src/pages/About';
import Contact from './src/pages/Contact';
import Blog from './src/pages/Blog';

import './src/index.css';
import './src/styles/optimizations.css';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
          <Header />
          
          <main>
            {/* Revolutionary Content Banner 2026 */}
            <RevolutionaryContentBanner2026 />
            
            {/* Interactive Tech Showcase 2026 */}
            <InteractiveTechShowcase2026 />
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              
              {/* 2025 Pages */}
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
              
              {/* 2026 Pages */}
              <Route path="/pages/RevolutionaryAIServices2026" element={<RevolutionaryAIServices2026 />} />
              <Route path="/pages/QuantumComputingRevolution2026" element={<QuantumComputingRevolution2026 />} />
              
              {/* Case Study */}
              <Route path="/case-study/:id" element={<CaseStudyPage />} />
            </Routes>
          </main>
          
          <Footer />
          
          {/* Performance Optimizers */}
          <PerformanceOptimizer />
          <AccessibilityEnhancer />
          <SEOOptimizer />
          <MobileOptimizer />
          <PerformanceDashboard />
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;