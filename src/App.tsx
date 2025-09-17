import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import ScrollToTop from './ScrollToTop';
import AI2026NextGenContentShowcase from './components/AI2026NextGenContentShowcase';
import AbsoluteTechShowcase2031 from './components/AbsoluteTechShowcase2031';
import AdvancedTechAdvertising2027 from './components/AdvancedTechAdvertising2027';
import AdvancedTechBreakthroughBanner from './components/AdvancedTechBreakthroughBanner';
import AutonomousBusinessOperations2026Showcase from './components/AutonomousBusinessOperations2026Showcase';
import ContentSpotlight from './components/ContentSpotlight';
import NewBlogPromoBanner from './components/NewBlogPromoBanner';
import NewContentAdBanner from './components/NewContentAdBanner';
import DynamicContentCarousel from './components/DynamicContentCarousel';
import EnhancedHeroSection from './components/EnhancedHeroSection';
import FeaturedContentSection from './components/FeaturedContentSection';
import EmbodiedAI2026Banner from './components/EmbodiedAI2026Banner';
import InteractiveTechShowcase from './components/InteractiveTechShowcase';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary technology solutions and insights for the future
            </p>
          </div>
        </div>
=======
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <Header />
        
        <Routes>
          <Route path="/" element={
            <div className="space-y-0">
              {/* Hero Section */}
              <EnhancedHeroSection />

              {/* Embodied AI 2026 Promo */}
              <div className="mb-12">
                <EmbodiedAI2026Banner />
              </div>
              
              {/* Revolutionary Content Banner 2026 */}
              <div className="mb-12">
                <RevolutionaryContentBanner2026 />
              </div>

              {/* New Content Promotion Banner 2026 */}
              <div className="mb-12">
                <NewContentPromotionBanner2026 />
              </div>

              {/* Featured Content Carousel 2026 */}
              <div className="mb-12">
                <FeaturedContentCarousel2026 />
              </div>

              {/* New Content Advertising Banner */}
              <div className="mb-12">
                <NewContentAdBanner />
              </div>

              {/* Revolutionary Content Showcase */}
              <div className="mb-12">
                <RevolutionaryContentShowcase />
              </div>

              {/* New Revolutionary Services Showcase */}
              <div className="mb-12">
                <NewRevolutionaryServicesShowcase />
              </div>

              {/* New Services Showcase 2026 */}
              <div className="mb-12">
                <NewServicesShowcase2026 />
              </div>
              
              {/* New Content Promo Banner */}
              <div className="mb-12">
                <NewlyAddedContentPromo />
              </div>

              {/* Blog Content Promotion Banner */}
              <div className="mb-12">
                <ContentPromotionBanner />
              </div>

              {/* New Blog Promo Banner */}
              <div className="mb-12">
                <NewBlogPromoBanner />
              </div>

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

              {/* Blog Showcase from data/blog-posts */}
              <div className="mb-12">
                <ContentPromotionBanner />
              </div>
              <div className="mb-12">
                <NewContentPromoBannerClean />
              </div>
              <div className="mb-12">
                <FeaturedContentShowcase />
              </div>

              {/* Latest Content Spotlight */}
              <ContentSpotlight />
              
              {/* Dynamic Content Carousel */}
              <DynamicContentCarousel />
              
              {/* Interactive Tech Showcase */}
              <InteractiveTechShowcase />
              
              {/* NEW: Enhanced Content Showcase 2026 */}
              <div className="mb-12">
                <NewContentShowcase2026 />
              </div>

              {/* NEW: Trending Content Section */}
              <div className="mb-12">
                <TrendingContentSection />
              </div>

              {/* Revolutionary Content Showcase 2026 */}
              <div className="mb-12">
                <RevolutionaryContentShowcase2026 />
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

              {/* Ultimate Content Showcase 2026 */}
              <div className="mb-12">
                <UltimateContentShowcase2026 />
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

              {/* Newsletter Signup */}
              <div className="mb-12">
                <NewsletterSignup />
              </div>

              {/* Revolutionary Content Banner 2027 - NEW */}
              <div className="mb-12">
                <RevolutionaryContentBanner2027 />
              </div>

              {/* NEW: Futuristic Tech Promotion Banner 2035 */}
              <div className="mb-12">
                <FuturisticTechPromotionBanner2035 />
              </div>

              {/* NEW: Quantum Computing Breakthrough 2035 */}
              <div className="mb-12">
                <QuantumComputingBreakthrough2035 />
              </div>

              {/* NEW: Neural Interface Revolution 2036 */}
              <div className="mb-12">
                <NeuralInterfaceRevolution2036 />
              </div>

              {/* NEW: Interdimensional Tech Showcase 2037 */}
              <div className="mb-12">
                <InterdimensionalTechShowcase2037 />
              </div>

              {/* Promotional Banner */}
              <div className="mb-12">
                <PromotionalBanner />
              </div>
            </div>
          } />
          
          {/* Routes for all pages */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/sep-2025-exec-guide-evals-guardrails" element={<BlogPost_Sep2025_AIExecGuide />} />
          <Route path="/blog/sep-2025-finserv-model-routing-case-study" element={<BlogPost_Sep2025_CaseStudy />} />
          <Route path="/pages/AdvancedTechSolutions2026" element={<AdvancedTechSolutions2026 />} />
          <Route path="/pages/NewAIResearchBreakthrough2026" element={<NewAIResearchBreakthrough2026 />} />
          <Route path="/pages/AutonomousOpsPlaybook2026" element={<AutonomousOpsPlaybook2026 />} />
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
          <Route path="/pages/TrustedRAGPlaybook2026" element={<TrustedRAGPlaybook2026 />} />
          <Route path="/pages/AgentOpsControlPlane2026" element={<AgentOpsControlPlane2026 />} />
          <Route path="/pages/ResponsibleAutonomyGuide2026" element={<ResponsibleAutonomyGuide2026 />} />
          <Route path="/pages/OperationalEvalGates2026" element={<OperationalEvalGates2026 />} />
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
          <Route path="/pages/RevolutionaryTechBreakthrough2027" element={<RevolutionaryTechBreakthrough2027 />} />
          <Route path="/pages/UltimateAIRevolution2027" element={<UltimateAIRevolution2027 />} />
          <Route path="/pages/QuantumRealityEngine2027" element={<QuantumRealityEngine2027 />} />
          <Route path="/pages/QuantumComputingBreakthrough2035" element={<QuantumComputingBreakthrough2035Page />} />
          <Route path="/pages/NeuralInterfaceRevolution2036" element={<NeuralInterfaceRevolution2036Page />} />
          <Route path="/pages/InterdimensionalTech2037" element={<InterdimensionalTech2037Page />} />
          <Route path="/pages/EdgeAICompliance2026" element={<EdgeAICompliance2026 />} />
          <Route path="/pages/AIIncidentResponse2026" element={<AIIncidentResponse2026 />} />
          <Route path="/pages/AgenticOpsControls2026" element={<AgenticOpsControls2026 />} />
          
          {/* New Content Routes 2026 */}
          <Route path="/ai-innovation-showcase-2026" element={<AIInnovationShowcase2026 />} />
          <Route path="/next-gen-tech-trends-2026" element={<NextGenTechTrends2026 />} />
        </Routes>
        
        <Footer />
>>>>>>> origin/feat/add-blog-content-and-promo
      </div>
    </Router>
  );
};

export default App;