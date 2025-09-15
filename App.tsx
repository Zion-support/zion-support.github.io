import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './src/index.css';

// Import only the pages that exist
import AIRevolutionaryBreakthrough2026 from './src/pages/AIRevolutionaryBreakthrough2026';
import QuantumComputingRevolution2026 from './src/pages/QuantumComputingRevolution2026';
import NeuralInterfaceRevolution2026 from './src/pages/NeuralInterfaceRevolution2026';
import SyntheticIntelligence2026 from './src/pages/SyntheticIntelligence2026';
import QuantumNeuralFusion2026 from './src/pages/QuantumNeuralFusion2026';
import NextGenAIRevolution2026 from './src/pages/NextGenAIRevolution2026';
import RevolutionaryTechBlog2026 from './src/pages/RevolutionaryTechBlog2026';
import ComprehensiveTechInsights2026 from './src/pages/ComprehensiveTechInsights2026';
import AdvancedAITransformation2026 from './src/pages/AdvancedAITransformation2026';
import NextGenTechShowcase2026 from './src/pages/NextGenTechShowcase2026';
import AdvancedBiotechRevolution2026 from './src/pages/AdvancedBiotechRevolution2026';
import SpaceTechInnovation2026 from './src/pages/SpaceTechInnovation2026';
import AdvancedRobotics2026 from './src/pages/AdvancedRobotics2026';
import EnhancedContentShowcase from './src/components/EnhancedContentShowcase';
import RevolutionaryContentShowcase from './src/components/RevolutionaryContentShowcase';
import UltimateContentShowcase2026 from './src/components/UltimateContentShowcase2026';
import TrendingContentSection from './src/components/TrendingContentSection';
import RevolutionaryContentShowcase2027 from './src/components/RevolutionaryContentShowcase2027';
import AdvancedAIConsciousness2027 from './src/pages/AdvancedAIConsciousness2027';
import NeuralQuantumFusion2027 from './src/pages/NeuralQuantumFusion2027';
import AdvancedQuantumComputing2026 from './src/pages/AdvancedQuantumComputing2026';
// New 2029-2030 Components
import QuantumConsciousnessRevolution2029 from './src/pages/QuantumConsciousnessRevolution2029';
import TranscendentAI2030 from './src/pages/TranscendentAI2030';
import UniversalTechRevolution2030 from './src/pages/UniversalTechRevolution2030';
// New 2027 Pages
import AdvancedTechRevolution2027 from './src/pages/AdvancedTechRevolution2027';
import ConsciousnessComputing2026 from './src/pages/ConsciousnessComputing2026';
import QuantumRealityEngine2026 from './src/pages/QuantumRealityEngine2026';
import InterdimensionalTech2027 from './src/pages/InterdimensionalTech2027';
// New 2028 Components
import RevolutionaryTechShowcase2028 from './src/pages/RevolutionaryTechShowcase2028';
import InteractiveTechShowcase2028 from './src/components/InteractiveTechShowcase2028';
import TrendingContentSection2028 from './src/components/TrendingContentSection2028';
import RevolutionaryContentBanner2028 from './src/components/RevolutionaryContentBanner2028';
import RevolutionaryContentBanner2030 from './src/components/RevolutionaryContentBanner2030';
import InteractiveTechShowcase2030 from './src/components/InteractiveTechShowcase2030';
// New 2027 Components
import RevolutionaryTechShowcase2027 from './src/components/RevolutionaryTechShowcase2027';
import UltimateContentBanner2027 from './src/components/UltimateContentBanner2027';
// New 2031 Components
import RevolutionaryContentBanner2031 from './src/components/RevolutionaryContentBanner2031';
import InteractiveTechShowcase2031 from './src/components/InteractiveTechShowcase2031';
// New 2031 Pages
import UltimateTechRevolution2031 from './src/pages/UltimateTechRevolution2031';
import RevolutionaryAIBreakthrough2031 from './src/pages/RevolutionaryAIBreakthrough2031';
import NextGenSpaceTech2031 from './src/pages/NextGenSpaceTech2031';
// New 2029 Components
import RevolutionaryTechShowcase2029 from './src/components/RevolutionaryTechShowcase2029';
import UltimateContentBanner2029 from './src/components/UltimateContentBanner2029';
// New 2029 Pages
import UltimateTechRevolution2029 from './src/pages/UltimateTechRevolution2029';
import ConsciousnessTransfer2029 from './src/pages/ConsciousnessTransfer2029';
import QuantumRealityManipulation2029 from './src/pages/QuantumRealityManipulation2029';
import SyntheticBiologyRevolution2029 from './src/pages/SyntheticBiologyRevolution2029';

export default function App(): JSX.Element {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
              <main className="container mx-auto px-4 py-8">
                {/* ULTRA-PROMINENT NEW CONTENT BANNER */}
                <UltimateContentBanner2027 />

                {/* REVOLUTIONARY TECH SHOWCASE 2027 */}
                <div className="mb-12">
                  <RevolutionaryTechShowcase2027 />
                </div>

                {/* NEW: Ultimate 2026 Content Banner */}
                <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 mb-8 text-white text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-pink-600/50 backdrop-blur-sm"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center space-x-4 mb-6">
                      <span className="text-4xl animate-bounce">🌟</span>
                      <h3 className="text-4xl font-bold">ULTIMATE 2026 REVOLUTIONARY CONTENT</h3>
                      <span className="text-4xl animate-bounce">🌟</span>
                    </div>
                    <p className="text-2xl opacity-95 mb-8 max-w-6xl mx-auto">
                      Experience the most advanced technology content featuring AI Revolutionary Breakthrough, 
                      Quantum Computing Revolution, Neural Interface Technology, Biotech Revolution, Space Tech Innovation, and Advanced Robotics
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-8xl mx-auto mb-8">
                      <a href="/pages/UltimateTechRevolution2031" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold border border-white/30 text-center animate-pulse">
                        🌟 NEW: Ultimate Tech 2031 →
                      </a>
                      <a href="/pages/RevolutionaryAIBreakthrough2031" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 text-center animate-pulse">
                        🧠 NEW: AI Breakthrough 2031 →
                      </a>
                      <a href="/pages/NextGenSpaceTech2031" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold border border-white/30 text-center animate-pulse">
                        🚀 NEW: Space Tech 2031 →
                      </a>
                      <a href="/pages/ConsciousnessComputing2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 text-center animate-pulse">
                        🧠 NEW: Consciousness Computing →
                      </a>
                      <a href="/pages/QuantumRealityEngine2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold border border-white/30 text-center animate-pulse">
                        ⚛️ NEW: Quantum Reality →
                      </a>
                      <a href="/pages/InterdimensionalTech2027" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold border border-white/30 text-center animate-pulse">
                        🌌 NEW: Interdimensional Tech →
                      </a>
                      <a href="/pages/QuantumConsciousnessRevolution2029" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold border border-white/30 text-center">
                        🧠 Quantum Consciousness →
                      </a>
                      <a href="/pages/TranscendentAI2030" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 text-center">
                        🌟 Transcendent AI →
                      </a>
                      <a href="/pages/UniversalTechRevolution2030" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold border border-white/30 text-center">
                        🌌 Universal Tech →
                      </a>
                    </div>
                    <div className="flex justify-center space-x-4">
                      <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold">
                        ✨ 9 NEW REVOLUTIONARY PAGES
                      </span>
                      <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
                        🚀 CUTTING-EDGE TECHNOLOGY
                      </span>
                      <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold">
                        🌟 INTERACTIVE SHOWCASE
                      </span>
                    </div>
                  </div>
                </div>

                {/* Revolutionary Content Showcase */}
                <div className="mb-12">
                  <RevolutionaryContentShowcase />
                </div>

                {/* Enhanced Content Showcase */}
                <div className="mb-12">
                  <EnhancedContentShowcase />
                </div>

                {/* Ultimate Content Showcase 2026 */}
                <div className="mb-12">
                  <UltimateContentShowcase2026 />
                </div>

                {/* Trending Content Section */}
                <div className="mb-12">
                  <TrendingContentSection />
                </div>
              </main>
            </div>
          } />
          
          {/* 2026 Pages */}
          <Route path="/pages/AIRevolutionaryBreakthrough2026" element={<AIRevolutionaryBreakthrough2026 />} />
          <Route path="/pages/QuantumComputingRevolution2026" element={<QuantumComputingRevolution2026 />} />
          <Route path="/pages/NeuralInterfaceRevolution2026" element={<NeuralInterfaceRevolution2026 />} />
          <Route path="/pages/SyntheticIntelligence2026" element={<SyntheticIntelligence2026 />} />
          <Route path="/pages/QuantumNeuralFusion2026" element={<QuantumNeuralFusion2026 />} />
          <Route path="/pages/NextGenAIRevolution2026" element={<NextGenAIRevolution2026 />} />
          <Route path="/pages/RevolutionaryTechBlog2026" element={<RevolutionaryTechBlog2026 />} />
          <Route path="/pages/ComprehensiveTechInsights2026" element={<ComprehensiveTechInsights2026 />} />
          <Route path="/pages/AdvancedAITransformation2026" element={<AdvancedAITransformation2026 />} />
          <Route path="/pages/NextGenTechShowcase2026" element={<NextGenTechShowcase2026 />} />
          <Route path="/pages/AdvancedBiotechRevolution2026" element={<AdvancedBiotechRevolution2026 />} />
          <Route path="/pages/SpaceTechInnovation2026" element={<SpaceTechInnovation2026 />} />
          <Route path="/pages/AdvancedRobotics2026" element={<AdvancedRobotics2026 />} />
          <Route path="/pages/AdvancedQuantumComputing2026" element={<AdvancedQuantumComputing2026 />} />
          <Route path="/pages/ConsciousnessComputing2026" element={<ConsciousnessComputing2026 />} />
          <Route path="/pages/QuantumRealityEngine2026" element={<QuantumRealityEngine2026 />} />
          
          {/* 2027 Pages */}
          <Route path="/pages/AdvancedAIConsciousness2027" element={<AdvancedAIConsciousness2027 />} />
          <Route path="/pages/NeuralQuantumFusion2027" element={<NeuralQuantumFusion2027 />} />
          <Route path="/pages/AdvancedTechRevolution2027" element={<AdvancedTechRevolution2027 />} />
          <Route path="/pages/InterdimensionalTech2027" element={<InterdimensionalTech2027 />} />
          
          {/* 2029 Pages */}
          <Route path="/pages/QuantumConsciousnessRevolution2029" element={<QuantumConsciousnessRevolution2029 />} />
          <Route path="/pages/UltimateTechRevolution2029" element={<UltimateTechRevolution2029 />} />
          <Route path="/pages/ConsciousnessTransfer2029" element={<ConsciousnessTransfer2029 />} />
          <Route path="/pages/QuantumRealityManipulation2029" element={<QuantumRealityManipulation2029 />} />
          <Route path="/pages/SyntheticBiologyRevolution2029" element={<SyntheticBiologyRevolution2029 />} />
          
          {/* 2030 Pages */}
          <Route path="/pages/TranscendentAI2030" element={<TranscendentAI2030 />} />
          <Route path="/pages/UniversalTechRevolution2030" element={<UniversalTechRevolution2030 />} />
          
          {/* 2031 Pages */}
          <Route path="/pages/UltimateTechRevolution2031" element={<UltimateTechRevolution2031 />} />
          <Route path="/pages/RevolutionaryAIBreakthrough2031" element={<RevolutionaryAIBreakthrough2031 />} />
          <Route path="/pages/NextGenSpaceTech2031" element={<NextGenSpaceTech2031 />} />
        </Routes>
      </div>
    </Router>
  );
}