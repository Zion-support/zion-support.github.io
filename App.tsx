import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Header from './Header';
import Footer from './Footer';
import EnhancedHeroSection from './components/EnhancedHeroSection';
import FeaturedContentSection from './components/FeaturedContentSection';
import DynamicContentCarousel from './components/DynamicContentCarousel';
import InteractiveTechShowcase from './components/InteractiveTechShowcase';
import './index.css';

// Import pages
import AdvancedTechSolutions2026 from './src/pages/AdvancedTechSolutions2026';
import InnovationShowcase2026 from './src/pages/InnovationShowcase2026';
import AdvancedAITransformation2025 from './src/pages/AdvancedAITransformation2025';
import QuantumComputingRevolution2025 from './src/pages/QuantumComputingRevolution2025';
import NeuralInterfaceRevolution2025 from './src/pages/NeuralInterfaceRevolution2025';
import NextGenTechShowcase2025 from './src/pages/NextGenTechShowcase2025';
import AdvancedQuantumComputing2026 from './src/pages/AdvancedQuantumComputing2026';
import NeuralInterfaceRevolution2026 from './src/pages/NeuralInterfaceRevolution2026';
import AdvancedAISystems2026 from './src/pages/AdvancedAISystems2026';
import SyntheticIntelligence2026 from './src/pages/SyntheticIntelligence2026';
import QuantumNeuralFusion2026 from './src/pages/QuantumNeuralFusion2026';
import NextGenAIRevolution2026 from './src/pages/NextGenAIRevolution2026';
import QuantumComputingRevolution2026 from './src/pages/QuantumComputingRevolution2026';
import RevolutionaryTechBlog2026 from './src/pages/RevolutionaryTechBlog2026';
import ComprehensiveTechInsights2026 from './src/pages/ComprehensiveTechInsights2026';
import AdvancedAnalyticsDashboard2026 from './src/pages/AdvancedAnalyticsDashboard2026';
import BiotechRevolution2026 from './src/pages/BiotechRevolution2026';
import SpaceTechInnovation2026 from './src/pages/SpaceTechInnovation2026';
import UltimateTechRevolution2026 from './src/pages/UltimateTechRevolution2026';
import RevolutionaryInnovationHub2026 from './src/pages/RevolutionaryInnovationHub2026';
import ComprehensiveCaseStudies2026 from './src/pages/ComprehensiveCaseStudies2026';
import AIInnovationHub2026 from './src/pages/AIInnovationHub2026';
import AdvancedTechBreakthrough2025 from './src/pages/AdvancedTechBreakthrough2025';
import InnovationShowcase2025 from './src/pages/InnovationShowcase2025';
import AdvancedAIConsciousness2026 from './src/pages/AdvancedAIConsciousness2026';
import UltimateTechShowcase2026 from './src/pages/UltimateTechShowcase2026';
import AdvancedBiotechRevolution2026 from './src/pages/AdvancedBiotechRevolution2026';
import SpaceTechRevolution2026 from './src/pages/SpaceTechRevolution2026';
import AdvancedRoboticsRevolution2026 from './src/pages/AdvancedRoboticsRevolution2026';
import QuantumConsciousnessRevolution2026 from './src/pages/QuantumConsciousnessRevolution2026';
import InterdimensionalTech2027 from './src/pages/InterdimensionalTech2027';
import UltimateTechShowcase2027 from './src/pages/UltimateTechShowcase2027';
import RevolutionaryInnovationHub2027 from './src/pages/RevolutionaryInnovationHub2027';
import SyntheticBiologyRevolution2027 from './src/pages/SyntheticBiologyRevolution2027';
import UltimateAIConsciousness2025 from './src/pages/UltimateAIConsciousness2025';
import QuantumRealityEngineering2025 from './src/pages/QuantumRealityEngineering2025';
import UltimateTechRevolution2032 from './src/pages/UltimateTechRevolution2032';
import TranscendentAI2033 from './src/pages/TranscendentAI2033';

// Import components
import EnhancedContentShowcase from './src/components/EnhancedContentShowcase';
import RevolutionaryContentShowcase from './src/components/RevolutionaryContentShowcase';
import RevolutionaryContentShowcase2026 from './src/components/RevolutionaryContentShowcase2026';
import RevolutionaryPromoBanner2026 from './src/components/RevolutionaryPromoBanner2026';
import InteractiveContentShowcase2026 from './src/components/InteractiveContentShowcase2026';
import RevolutionaryContentBanner2026 from './src/components/RevolutionaryContentBanner2026';
import UltimateContentShowcase2026 from './src/components/UltimateContentShowcase2026';
import TrendingContentSection from './src/components/TrendingContentSection';
import RevolutionaryContentShowcase2027 from './src/components/RevolutionaryContentShowcase2027';
import InteractiveTechShowcase2028 from './src/components/InteractiveTechShowcase2028';
import TrendingContentSection2028 from './src/components/TrendingContentSection2028';
import RevolutionaryContentBanner2028 from './src/components/RevolutionaryContentBanner2028';
import RevolutionaryContentBanner2030 from './src/components/RevolutionaryContentBanner2030';
import InteractiveTechShowcase2030 from './src/components/InteractiveTechShowcase2030';
import RevolutionaryTechShowcase2027 from './src/components/RevolutionaryTechShowcase2027';
import AdvancedTechBreakthroughBanner from './src/components/AdvancedTechBreakthroughBanner';
import InnovationShowcaseBanner from './src/components/InnovationShowcaseBanner';
import RevolutionaryAdvertisingBanner2026 from './src/components/RevolutionaryAdvertisingBanner2026';
import AI2026NextGenContentShowcase from './src/components/AI2026NextGenContentShowcase';
import AutonomousBusinessOperations2026Showcase from './src/components/AutonomousBusinessOperations2026Showcase';
import InteractiveContentDiscovery2026 from './src/components/InteractiveContentDiscovery2026';
import QuantumNeuralRevolutionBanner from './src/components/QuantumNeuralRevolutionBanner';
import InteractiveTechShowcase2027 from './src/components/InteractiveTechShowcase2027';
import QuantumAIBreakthroughBanner from './src/components/QuantumAIBreakthroughBanner';
import RevolutionaryTechShowcase2026 from './src/components/RevolutionaryTechShowcase2026';
import AdvancedTechAdvertising2027 from './src/components/AdvancedTechAdvertising2027';
import UltimateRevolutionaryTechShowcase2027 from './src/components/UltimateRevolutionaryTechShowcase2027';
import InterdimensionalTechShowcase2027 from './src/components/InterdimensionalTechShowcase2027';
import TranscendentTechnologyShowcase2028 from './src/components/TranscendentTechnologyShowcase2028';
import OmniversalTechShowcase2029 from './src/components/OmniversalTechShowcase2029';
import InfiniteTechShowcase2030 from './src/components/InfiniteTechShowcase2030';
import AbsoluteTechShowcase2031 from './src/components/AbsoluteTechShowcase2031';
import UltimateTechRevolution2032Banner from './src/components/UltimateTechRevolution2032Banner';
import TranscendentAI2033Banner from './src/components/TranscendentAI2033Banner';
import InteractiveContentDiscovery2033 from './src/components/InteractiveContentDiscovery2033';
import TrendingContentSection2033 from './src/components/TrendingContentSection2033';
import NewsletterSignup from './src/components/NewsletterSignup';
import PromotionalBanner from './src/components/PromotionalBanner';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <Header />
        
        <Routes>
          <Route path="/" element={
            <div className="space-y-0">
              {/* Hero Section */}
              <EnhancedHeroSection />
              
              {/* NEW: Advanced Tech Breakthrough Banner */}
              <div className="mb-12">
                <AdvancedTechBreakthroughBanner />
              </div>

              {/* NEW: Innovation Showcase Banner */}
              <div className="mb-12">
                <InnovationShowcaseBanner />
              </div>

              {/* Featured Content Section */}
              <FeaturedContentSection />
              
              {/* Dynamic Content Carousel */}
              <DynamicContentCarousel />
              
              {/* Interactive Tech Showcase */}
              <InteractiveTechShowcase />
              
              {/* Enhanced Content Showcase */}
              <div className="mb-12">
                <EnhancedContentShowcase />
              </div>

              {/* Revolutionary Content Showcase */}
              <div className="mb-12">
                <RevolutionaryContentShowcase />
              </div>

              {/* Revolutionary Content Showcase 2026 */}
              <div className="mb-12">
                <RevolutionaryContentShowcase2026 />
              </div>

              {/* Revolutionary Promo Banner 2026 */}
              <div className="mb-12">
                <RevolutionaryPromoBanner2026 />
              </div>

              {/* Interactive Content Showcase 2026 */}
              <div className="mb-12">
                <InteractiveContentShowcase2026 />
              </div>

              {/* Revolutionary Content Banner 2026 */}
              <div className="mb-12">
                <RevolutionaryContentBanner2026 />
              </div>

              {/* Ultimate Content Showcase 2026 */}
              <div className="mb-12">
                <UltimateContentShowcase2026 />
              </div>

              {/* Trending Content Section */}
              <div className="mb-12">
                <TrendingContentSection />
              </div>

              {/* Revolutionary Content Showcase 2027 */}
              <div className="mb-12">
                <RevolutionaryContentShowcase2027 />
              </div>

              {/* Interactive Tech Showcase 2028 */}
              <div className="mb-12">
                <InteractiveTechShowcase2028 />
              </div>

              {/* Trending Content Section 2028 */}
              <div className="mb-12">
                <TrendingContentSection2028 />
              </div>

              {/* Revolutionary Content Banner 2028 */}
              <div className="mb-12">
                <RevolutionaryContentBanner2028 />
              </div>

              {/* Revolutionary Content Banner 2030 */}
              <div className="mb-12">
                <RevolutionaryContentBanner2030 />
              </div>

              {/* Interactive Tech Showcase 2030 */}
              <div className="mb-12">
                <InteractiveTechShowcase2030 />
              </div>

              {/* Revolutionary Tech Showcase 2027 */}
              <div className="mb-12">
                <RevolutionaryTechShowcase2027 />
              </div>

              {/* Revolutionary Advertising Banner 2026 */}
              <div className="mb-12">
                <RevolutionaryAdvertisingBanner2026 />
              </div>

              {/* AI 2026 Next Gen Content Showcase */}
              <div className="mb-12">
                <AI2026NextGenContentShowcase />
              </div>
              
              {/* Autonomous Business Operations 2026 Showcase */}
              <div className="mb-12">
                <AutonomousBusinessOperations2026Showcase />
              </div>

              {/* Interactive Content Discovery 2026 */}
              <div className="mb-12">
                <InteractiveContentDiscovery2026 />
              </div>

              {/* Quantum Neural Revolution Banner */}
              <div className="mb-12">
                <QuantumNeuralRevolutionBanner />
              </div>

              {/* Interactive Tech Showcase 2027 */}
              <div className="mb-12">
                <InteractiveTechShowcase2027 />
              </div>

              {/* Quantum AI Breakthrough Banner */}
              <div className="mb-12">
                <QuantumAIBreakthroughBanner />
              </div>

              {/* Revolutionary Tech Showcase 2026 */}
              <div className="mb-12">
                <RevolutionaryTechShowcase2026 />
              </div>

              {/* Advanced Tech Advertising 2027 */}
              <div className="mb-12">
                <AdvancedTechAdvertising2027 />
              </div>

              {/* Ultimate Revolutionary Tech Showcase 2027 */}
              <div className="mb-12">
                <UltimateRevolutionaryTechShowcase2027 />
              </div>

              {/* Interdimensional Tech Showcase 2027 */}
              <div className="mb-12">
                <InterdimensionalTechShowcase2027 />
              </div>

              {/* Transcendent Technology Showcase 2028 */}
              <div className="mb-12">
                <TranscendentTechnologyShowcase2028 />
              </div>

              {/* Omniversal Tech Showcase 2029 */}
              <div className="mb-12">
                <OmniversalTechShowcase2029 />
              </div>

              {/* Infinite Tech Showcase 2030 */}
              <div className="mb-12">
                <InfiniteTechShowcase2030 />
              </div>

              {/* Absolute Tech Showcase 2031 */}
              <div className="mb-12">
                <AbsoluteTechShowcase2031 />
              </div>

              {/* Ultimate Tech Revolution 2032 Banner */}
              <div className="mb-12">
                <UltimateTechRevolution2032Banner />
              </div>

              {/* Transcendent AI 2033 Banner */}
              <div className="mb-12">
                <TranscendentAI2033Banner />
              </div>

              {/* Interactive Content Discovery 2033 */}
              <div className="mb-12">
                <InteractiveContentDiscovery2033 />
              </div>

              {/* Trending Content Section 2033 */}
              <div className="mb-12">
                <TrendingContentSection2033 />
              </div>

              {/* Newsletter Signup */}
              <div className="mb-12">
                <NewsletterSignup />
              </div>

              {/* Promotional Banner */}
              <div className="mb-12">
                <PromotionalBanner />
              </div>
            </div>
          } />
          
          {/* Routes for all pages */}
          <Route path="/pages/AdvancedTechSolutions2026" element={<AdvancedTechSolutions2026 />} />
          <Route path="/pages/InnovationShowcase2026" element={<InnovationShowcase2026 />} />
          <Route path="/pages/AdvancedAITransformation2025" element={<AdvancedAITransformation2025 />} />
          <Route path="/pages/QuantumComputingRevolution2025" element={<QuantumComputingRevolution2025 />} />
          <Route path="/pages/NeuralInterfaceRevolution2025" element={<NeuralInterfaceRevolution2025 />} />
          <Route path="/pages/NextGenTechShowcase2025" element={<NextGenTechShowcase2025 />} />
          <Route path="/pages/AdvancedQuantumComputing2026" element={<AdvancedQuantumComputing2026 />} />
          <Route path="/pages/NeuralInterfaceRevolution2026" element={<NeuralInterfaceRevolution2026 />} />
          <Route path="/pages/AdvancedAISystems2026" element={<AdvancedAISystems2026 />} />
          <Route path="/pages/SyntheticIntelligence2026" element={<SyntheticIntelligence2026 />} />
          <Route path="/pages/QuantumNeuralFusion2026" element={<QuantumNeuralFusion2026 />} />
          <Route path="/pages/NextGenAIRevolution2026" element={<NextGenAIRevolution2026 />} />
          <Route path="/pages/QuantumComputingRevolution2026" element={<QuantumComputingRevolution2026 />} />
          <Route path="/pages/RevolutionaryTechBlog2026" element={<RevolutionaryTechBlog2026 />} />
          <Route path="/pages/ComprehensiveTechInsights2026" element={<ComprehensiveTechInsights2026 />} />
          <Route path="/pages/AdvancedAnalyticsDashboard2026" element={<AdvancedAnalyticsDashboard2026 />} />
          <Route path="/pages/BiotechRevolution2026" element={<BiotechRevolution2026 />} />
          <Route path="/pages/SpaceTechInnovation2026" element={<SpaceTechInnovation2026 />} />
          <Route path="/pages/AdvancedAIConsciousness2026" element={<AdvancedAIConsciousness2026 />} />
          <Route path="/pages/UltimateTechShowcase2026" element={<UltimateTechShowcase2026 />} />
          <Route path="/pages/AdvancedBiotechRevolution2026" element={<AdvancedBiotechRevolution2026 />} />
          <Route path="/pages/SpaceTechRevolution2026" element={<SpaceTechRevolution2026 />} />
          <Route path="/pages/AdvancedRoboticsRevolution2026" element={<AdvancedRoboticsRevolution2026 />} />
          <Route path="/pages/QuantumConsciousnessRevolution2026" element={<QuantumConsciousnessRevolution2026 />} />
          <Route path="/pages/InterdimensionalTech2027" element={<InterdimensionalTech2027 />} />
          <Route path="/pages/UltimateTechShowcase2027" element={<UltimateTechShowcase2027 />} />
          <Route path="/pages/RevolutionaryInnovationHub2027" element={<RevolutionaryInnovationHub2027 />} />
          <Route path="/pages/SyntheticBiologyRevolution2027" element={<SyntheticBiologyRevolution2027 />} />
          <Route path="/pages/AdvancedTechBreakthrough2025" element={<AdvancedTechBreakthrough2025 />} />
          <Route path="/pages/InnovationShowcase2025" element={<InnovationShowcase2025 />} />
          <Route path="/pages/UltimateAIConsciousness2025" element={<UltimateAIConsciousness2025 />} />
          <Route path="/pages/QuantumRealityEngineering2025" element={<QuantumRealityEngineering2025 />} />
          <Route path="/pages/UltimateTechRevolution2032" element={<UltimateTechRevolution2032 />} />
          <Route path="/pages/TranscendentAI2033" element={<TranscendentAI2033 />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;