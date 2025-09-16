import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './src/ScrollToTop';
import Header from './src/Header';
import Footer from './src/Footer';
import EnhancedNavigation from './src/components/EnhancedNavigation';
import EnhancedFooter from './src/components/EnhancedFooter';
import AnalyticsDashboard from './src/components/AnalyticsDashboard';
import EnhancedHeroSection from './src/components/EnhancedHeroSection';
import FeaturedContentSection from './src/components/FeaturedContentSection';
import CaseStudyPage from './src/CaseStudyPage';
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
import QuantumComputingBreakthrough from './src/pages/QuantumComputingBreakthrough';
import NeuralInterfaceFuture from './src/pages/NeuralInterfaceFuture';
import AIEnterpriseCopilot2025 from './src/pages/AIEnterpriseCopilot2025';
import NewShowcase2025 from './src/pages/NewShowcase2025';
import DynamicContentCarousel from './src/components/DynamicContentCarousel';
import InteractiveTechShowcase from './src/components/InteractiveTechShowcase';
import './src/index.css';
import SyntheticIntelligence2026 from './src/pages/SyntheticIntelligence2026';
import QuantumNeuralFusion2026 from './src/pages/QuantumNeuralFusion2026';
// New 2025 Revolutionary Content
import RevolutionaryTechBreakthrough2025 from './src/pages/RevolutionaryTechBreakthrough2025';
import UltimateAIConsciousness2025 from './src/pages/UltimateAIConsciousness2025';
import QuantumRealityEngine2025 from './src/pages/QuantumRealityEngine2025';
// New 2033 Revolutionary Content
import UltimateTechRevolution2033 from './src/pages/UltimateTechRevolution2033';
import RevolutionaryAIBreakthrough2033 from './src/pages/RevolutionaryAIBreakthrough2033';
import NextGenSpaceTech2033 from './src/pages/NextGenSpaceTech2033';
import RevolutionaryContentBanner2033 from './src/components/RevolutionaryContentBanner2033';
import InteractiveTechShowcase2033 from './src/components/InteractiveTechShowcase2033';
// New Revolutionary Content Pages
import RevolutionaryTechBreakthrough2026 from './src/pages/RevolutionaryTechBreakthrough2026';
import UltimateAIConsciousness2026 from './src/pages/UltimateAIConsciousness2026';
import QuantumRealityEngine2026 from './src/pages/QuantumRealityEngine2026';
import NeuralInterfaceRevolution2026 from './src/pages/NeuralInterfaceRevolution2026';
import SpaceTechInnovation2026 from './src/pages/SpaceTechInnovation2026';
import MetaverseRevolution2026 from './src/pages/MetaverseRevolution2026';

export default function App(): JSX.Element {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
              <main className="container mx-auto px-4 py-8">
                {/* ULTRA-PROMINENT NEW 2033 CONTENT BANNER */}
                <RevolutionaryContentBanner2033 />

                {/* INTERACTIVE TECH SHOWCASE 2033 */}
                <div className="mb-12">
                  <InteractiveTechShowcase2033 />
                </div>

                {/* Enhanced Search Section */}
                <div className="text-center mb-12">
                  <h1 className="text-5xl font-bold text-gray-900 mb-6">
                    Welcome to Zion Tech Group
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    Leading the future of technology with AI, blockchain, and innovative solutions
                  </p>
                </div>

                {/* ULTRA-PROMINENT NEW CONTENT BANNER */}
                <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 mb-8 text-white text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-pink-600/50 backdrop-blur-sm"></div>
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center space-x-4 mb-6">
                      <span className="text-4xl animate-bounce">🌟</span>
                      <h3 className="text-4xl font-bold">REVOLUTIONARY BREAKTHROUGH CONTENT 2026-2032</h3>
                      <span className="text-4xl animate-bounce">🌟</span>
                    </div>
                    <p className="text-2xl opacity-95 mb-8 max-w-6xl mx-auto">
                      Experience the most advanced technological breakthroughs that will reshape the future of humanity
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto mb-8">
                      <a href="/pages/RevolutionaryTechBreakthrough2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg">
                        🚀 Revolutionary Tech Breakthrough →
                      </a>
                      <a href="/pages/UltimateAIConsciousness2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg">
                        🧠 Ultimate AI Consciousness →
                      </a>
                      <a href="/pages/QuantumRealityEngine2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg">
                        ⚛️ Quantum Reality Engine →
                      </a>
                      <a href="/pages/NeuralInterfaceRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg">
                        🧬 Neural Interface Revolution →
                      </a>
                      <a href="/pages/SpaceTechInnovation2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg">
                        🚀 Space Tech Innovation →
                      </a>
                      <a href="/pages/MetaverseRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg">
                        🌐 Metaverse Revolution →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Featured Content Section */}
                <FeaturedContentSection />
                
                {/* Dynamic Content Carousel */}
                <div className="mb-12">
                  <DynamicContentCarousel />
                </div>

                {/* Interactive Tech Showcase */}
                <div className="mb-12">
                  <InteractiveTechShowcase />
                </div>

                {/* Analytics Dashboard */}
                <div className="mb-12">
                  <AnalyticsDashboard />
                </div>
              </main>
            </div>
          } />
          
          {/* New Revolutionary Content Routes */}
          <Route path="/pages/RevolutionaryTechBreakthrough2026" element={<RevolutionaryTechBreakthrough2026 />} />
          <Route path="/pages/UltimateAIConsciousness2026" element={<UltimateAIConsciousness2026 />} />
          <Route path="/pages/QuantumRealityEngine2026" element={<QuantumRealityEngine2026 />} />
          <Route path="/pages/NeuralInterfaceRevolution2026" element={<NeuralInterfaceRevolution2026 />} />
          <Route path="/pages/SpaceTechInnovation2026" element={<SpaceTechInnovation2026 />} />
          <Route path="/pages/MetaverseRevolution2026" element={<MetaverseRevolution2026 />} />
          
          {/* Existing Routes */}
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
          <Route path="/pages/QuantumComputingBreakthrough" element={<QuantumComputingBreakthrough />} />
          <Route path="/pages/NeuralInterfaceFuture" element={<NeuralInterfaceFuture />} />
          <Route path="/pages/AIEnterpriseCopilot2025" element={<AIEnterpriseCopilot2025 />} />
          <Route path="/pages/NewShowcase2025" element={<NewShowcase2025 />} />
          <Route path="/pages/SyntheticIntelligence2026" element={<SyntheticIntelligence2026 />} />
          <Route path="/pages/QuantumNeuralFusion2026" element={<QuantumNeuralFusion2026 />} />
          <Route path="/pages/RevolutionaryTechBreakthrough2025" element={<RevolutionaryTechBreakthrough2025 />} />
          <Route path="/pages/UltimateAIConsciousness2025" element={<UltimateAIConsciousness2025 />} />
          <Route path="/pages/QuantumRealityEngine2025" element={<QuantumRealityEngine2025 />} />
          <Route path="/pages/UltimateTechRevolution2033" element={<UltimateTechRevolution2033 />} />
          <Route path="/pages/RevolutionaryAIBreakthrough2033" element={<RevolutionaryAIBreakthrough2033 />} />
          <Route path="/pages/NextGenSpaceTech2033" element={<NextGenSpaceTech2033 />} />
          <Route path="/case-study" element={<CaseStudyPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}