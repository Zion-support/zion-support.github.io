import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './src/ScrollToTop';
import Header from './src/Header';
import Footer from './src/Footer';
import EnhancedHeroSection from './src/components/EnhancedHeroSection';
import FeaturedContentSection from './src/components/FeaturedContentSection';
import CaseStudyPage from './src/CaseStudyPage';
import DynamicContentCarousel from './src/components/DynamicContentCarousel';
import InteractiveTechShowcase from './src/components/InteractiveTechShowcase';
import SEOHead from './src/components/SEOHead';
import './src/index.css';

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
import AIEnterpriseCopilot2025 from './src/pages/AIEnterpriseCopilot2025';
import NewShowcase2025 from './src/pages/NewShowcase2025';
import AdvancedAITransformation2025 from './src/pages/AdvancedAITransformation2025';
import QuantumComputingRevolution2025 from './src/pages/QuantumComputingRevolution2025';
import NeuralInterfaceRevolution2025 from './src/pages/NeuralInterfaceRevolution2025';
import NextGenTechShowcase2025 from './src/pages/NextGenTechShowcase2025';

// 2026 Pages
import SyntheticIntelligence2026 from './src/pages/SyntheticIntelligence2026';
import QuantumNeuralFusion2026 from './src/pages/QuantumNeuralFusion2026';
import AdvancedQuantumComputing2026 from './src/pages/AdvancedQuantumComputing2026';
import NeuralInterfaceRevolution2026 from './src/pages/NeuralInterfaceRevolution2026';
import NextGenAIRevolution2026 from './src/pages/NextGenAIRevolution2026';
import RevolutionaryTechBlog2026 from './src/pages/RevolutionaryTechBlog2026';
import QuantumComputingRevolution2026 from './src/pages/QuantumComputingRevolution2026';
import ComprehensiveTechInsights2026 from './src/pages/ComprehensiveTechInsights2026';
import AdvancedAITransformation2026 from './src/pages/AdvancedAITransformation2026';
import NextGenTechShowcase2026 from './src/pages/NextGenTechShowcase2026';
import AdvancedAISystems2026 from './src/pages/AdvancedAISystems2026';
import UltimateTechShowcase2026 from './src/pages/UltimateTechShowcase2026';
import FutureTechRevolution2026 from './src/pages/FutureTechRevolution2026';

// 2027 Pages
import AdvancedTechShowcase2027 from './src/pages/AdvancedTechShowcase2027';
import QuantumConsciousness2027 from './src/pages/QuantumConsciousness2027';
import InterdimensionalTech2027 from './src/pages/InterdimensionalTech2027';

// Components
import EnhancedContentShowcase from './src/components/EnhancedContentShowcase';
import RevolutionaryContentShowcase from './src/components/RevolutionaryContentShowcase';
import InnovationShowcase2026 from './src/components/InnovationShowcase2026';
import RevolutionaryTechBanner2026 from './src/components/RevolutionaryTechBanner2026';
import RevolutionaryTechBanner2027 from './src/components/RevolutionaryTechBanner2027';
import InteractiveTechShowcase2027 from './src/components/InteractiveTechShowcase2027';

export default function App(): JSX.Element {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <SEOHead />
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
              <main className="container mx-auto px-4 py-8">
                {/* Revolutionary 2027 Content Banner */}
                <RevolutionaryTechBanner2027 />

                {/* Revolutionary 2026 Content Banner */}
                <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-pink-600/50 backdrop-blur-sm"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <span className="text-3xl animate-bounce">🌟</span>
                      <h3 className="text-3xl font-bold">BREAKTHROUGH 2026 CONTENT</h3>
                      <span className="text-3xl animate-bounce">🌟</span>
                    </div>
                    <p className="text-xl opacity-95 mb-6 max-w-5xl mx-auto">
                      Experience the future of technology with our groundbreaking new content on Synthetic Intelligence, 
                      Quantum-Neural Fusion, Advanced AI Systems, and Revolutionary Neural Interfaces
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
                      <a href="/pages/SyntheticIntelligence2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        🧠 Synthetic Intelligence →
                      </a>
                      <a href="/pages/QuantumNeuralFusion2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        ⚛️ Quantum-Neural Fusion →
                      </a>
                      <a href="/pages/AdvancedAISystems2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        🤖 Advanced AI Systems →
                      </a>
                      <a href="/pages/NeuralInterfaceRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        🧬 Neural Interfaces →
                      </a>
                      <a href="/pages/UltimateTechShowcase2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        🚀 Ultimate Showcase →
                      </a>
                      <a href="/pages/FutureTechRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        🔮 Future Revolution →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Enhanced Hero Section */}
                <EnhancedHeroSection />

                {/* Revolutionary New Content Banner */}
                <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 backdrop-blur-sm"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <span className="text-3xl animate-bounce">🚀</span>
                      <h3 className="text-2xl font-bold">REVOLUTIONARY BREAKTHROUGH CONTENT 2026</h3>
                      <span className="text-3xl animate-bounce">🚀</span>
                    </div>
                    <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
                      Experience the future of technology with our groundbreaking new content featuring Ultimate Technology Showcase 2026, 
                      Future Technology Revolution, and Next-Gen AI Innovation
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                      <a href="/pages/UltimateTechShowcase2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        🌟 Ultimate Tech Showcase 2026 →
                      </a>
                      <a href="/pages/FutureTechRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        🔮 Future Tech Revolution →
                      </a>
                      <a href="/pages/NextGenAIRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        🧠 Next-Gen AI Revolution →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Featured Content Section */}
                <FeaturedContentSection />

                {/* Interactive Tech Showcase */}
                <InteractiveTechShowcase />

                {/* Dynamic Content Carousel */}
                <DynamicContentCarousel />

                {/* Hero Section with Enhanced Buttons */}
                <div className="text-center mb-16">
                  <h1 className="text-5xl font-bold text-gray-900 mb-6">
                    🚀 Revolutionary Technology Solutions
                  </h1>
                  <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    Experience the future of AI, Quantum Computing, and Neural Interfaces with our cutting-edge 2026 technology showcase
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a href="/pages/AdvancedTechShowcase2027" className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center animate-pulse">
                      🌟 NEW: Advanced Showcase 2027
                    </a>
                    <a href="/pages/QuantumConsciousness2027" className="bg-gradient-to-r from-slate-600 to-gray-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center animate-pulse">
                      🧠 NEW: Quantum Consciousness 2027
                    </a>
                    <a href="/pages/InterdimensionalTech2027" className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center animate-pulse">
                      🌌 NEW: Interdimensional Tech 2027
                    </a>
                    <a href="/pages/UltimateTechShowcase2026" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🚀 Ultimate Tech Showcase 2026
                    </a>
                    <a href="/pages/FutureTechRevolution2026" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🔮 Future Tech Revolution 2026
                    </a>
                    <a href="/pages/SyntheticIntelligence2026" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🤖 Synthetic Intelligence 2026
                    </a>
                  </div>
                </div>

                {/* Revolutionary Tech Banner 2026 */}
                <RevolutionaryTechBanner2026 />

                {/* Revolutionary Content Showcase */}
                <RevolutionaryContentShowcase />

                {/* Interactive Tech Showcase 2027 */}
                <InteractiveTechShowcase2027 />
              </main>
            </div>
          } />

          {/* Routes for 2025 Pages */}
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
          <Route path="/pages/AdvancedAITransformation2025" element={<AdvancedAITransformation2025 />} />
          <Route path="/pages/QuantumComputingRevolution2025" element={<QuantumComputingRevolution2025 />} />
          <Route path="/pages/NeuralInterfaceRevolution2025" element={<NeuralInterfaceRevolution2025 />} />
          <Route path="/pages/NextGenTechShowcase2025" element={<NextGenTechShowcase2025 />} />

          {/* Routes for 2026 Pages */}
          <Route path="/pages/SyntheticIntelligence2026" element={<SyntheticIntelligence2026 />} />
          <Route path="/pages/QuantumNeuralFusion2026" element={<QuantumNeuralFusion2026 />} />
          <Route path="/pages/AdvancedQuantumComputing2026" element={<AdvancedQuantumComputing2026 />} />
          <Route path="/pages/NeuralInterfaceRevolution2026" element={<NeuralInterfaceRevolution2026 />} />
          <Route path="/pages/NextGenAIRevolution2026" element={<NextGenAIRevolution2026 />} />
          <Route path="/pages/RevolutionaryTechBlog2026" element={<RevolutionaryTechBlog2026 />} />
          <Route path="/pages/QuantumComputingRevolution2026" element={<QuantumComputingRevolution2026 />} />
          <Route path="/pages/ComprehensiveTechInsights2026" element={<ComprehensiveTechInsights2026 />} />
          <Route path="/pages/AdvancedAITransformation2026" element={<AdvancedAITransformation2026 />} />
          <Route path="/pages/NextGenTechShowcase2026" element={<NextGenTechShowcase2026 />} />
          <Route path="/pages/AdvancedAISystems2026" element={<AdvancedAISystems2026 />} />
          <Route path="/pages/UltimateTechShowcase2026" element={<UltimateTechShowcase2026 />} />
          <Route path="/pages/FutureTechRevolution2026" element={<FutureTechRevolution2026 />} />

          {/* Routes for 2027 Pages */}
          <Route path="/pages/AdvancedTechShowcase2027" element={<AdvancedTechShowcase2027 />} />
          <Route path="/pages/QuantumConsciousness2027" element={<QuantumConsciousness2027 />} />
          <Route path="/pages/InterdimensionalTech2027" element={<InterdimensionalTech2027 />} />

          {/* Component Routes */}
          <Route path="/enhanced-showcase" element={<EnhancedContentShowcase />} />
          <Route path="/revolutionary-showcase" element={<RevolutionaryContentShowcase />} />
          <Route path="/innovation-showcase-2026" element={<InnovationShowcase2026 />} />
          <Route path="/case-study/:id" element={<CaseStudyPage />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}