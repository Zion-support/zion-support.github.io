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
import NextGenContentShowcase2027 from './src/components/NextGenContentShowcase2027';
import TransdimensionalComputing2027 from './src/pages/TransdimensionalComputing2027';
import OmniversalAI2027 from './src/pages/OmniversalAI2027';

export default function App(): JSX.Element {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
              <main className="container mx-auto px-4 py-8">
                {/* NEW: Next-Gen 2027 Content Banner */}
                <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-3xl p-12 mb-12 text-white text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600/50 to-indigo-600/50 backdrop-blur-sm"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center space-x-4 mb-6">
                      <span className="text-4xl animate-bounce">🌟</span>
                      <h3 className="text-4xl font-bold">NEXT-GEN 2027 BEYOND REALITY</h3>
                      <span className="text-4xl animate-bounce">🌟</span>
                    </div>
                    <p className="text-2xl opacity-95 mb-8 max-w-6xl mx-auto">
                      Experience technologies beyond imagination featuring Transdimensional Computing, Omniversal AI, 
                      AI Revolutionary Breakthrough, Quantum Computing Revolution, Neural Interface Technology, Biotech Revolution, Space Tech Innovation, and Advanced Robotics
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-8xl mx-auto mb-8">
                      <a href="/pages/TransdimensionalComputing2027" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg">
                        🌀 Transdimensional Computing →
                      </a>
                      <a href="/pages/OmniversalAI2027" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg">
                        🌌 Omniversal AI →
                      </a>
                      <a href="/pages/AIRevolutionaryBreakthrough2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg">
                        🧠 AI Revolutionary Breakthrough →
                      </a>
                      <a href="/pages/QuantumComputingRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg">
                        ⚡ Quantum Computing Revolution →
                      </a>
                      <a href="/pages/NeuralInterfaceRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg">
                        🧬 Neural Interface Revolution →
                      </a>
                      <a href="/pages/AdvancedBiotechRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg">
                        🧬 Advanced Biotech Revolution →
                      </a>
                      <a href="/pages/SpaceTechInnovation2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg">
                        🚀 Space Tech Innovation →
                      </a>
                      <a href="/pages/AdvancedRobotics2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg">
                        🤖 Advanced Robotics →
                      </a>
                    </div>
                    <div className="flex justify-center space-x-4">
                      <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold">
                        ✨ 2 NEW 2027 TECHNOLOGIES
                      </span>
                      <span className="bg-violet-500/20 text-violet-300 px-4 py-2 rounded-full text-sm font-semibold">
                        🚀 TRANSDIMENSIONAL COMPUTING
                      </span>
                      <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold">
                        🌌 OMNIVERSAL AI
                      </span>
                      <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
                        🌟 BEYOND REALITY
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hero Section */}
                <div className="text-center mb-12">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-full text-sm font-semibold mb-4">
                    🚀 NEW: Next-Gen 2027 Beyond Reality
                  </div>
                  <h1 className="text-5xl font-bold text-gray-900 mb-6">
                    Welcome to Zion Tech Group
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    Leading the future of technology with Transdimensional Computing, Omniversal AI, and revolutionary solutions beyond imagination
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
                    <a href="/pages/TransdimensionalComputing2027" className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🌀 Transdimensional 2027
                    </a>
                    <a href="/pages/OmniversalAI2027" className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🌌 Omniversal AI 2027
                    </a>
                    <a href="/pages/AIRevolutionaryBreakthrough2026" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🧠 AI Breakthrough 2026
                    </a>
                    <a href="/pages/QuantumComputingRevolution2026" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      ⚡ Quantum Revolution
                    </a>
                    <a href="/pages/NeuralInterfaceRevolution2026" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🧬 Neural Interface
                    </a>
                    <a href="/pages/AdvancedBiotechRevolution2026" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🧬 Biotech Revolution
                    </a>
                    <a href="/pages/SpaceTechInnovation2026" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🚀 Space Tech Innovation
                    </a>
                    <a href="/pages/AdvancedRobotics2026" className="bg-gradient-to-r from-gray-600 to-slate-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🤖 Advanced Robotics
                    </a>
                  </div>
                </div>

                {/* Enhanced Content Showcase */}
                <div className="mb-12">
                  <EnhancedContentShowcase />
                </div>

                {/* Next-Gen Content Showcase */}
                <div className="mb-12">
                  <NextGenContentShowcase2027 />
                </div>

                {/* Ultimate Content Showcase */}
                <div className="mb-12">
                  <UltimateContentShowcase2026 />
                </div>

                {/* Revolutionary Content Showcase */}
                <div className="mb-12">
                  <RevolutionaryContentShowcase />
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-violet-500">
                    <div className="text-4xl mb-4">🌀</div>
                    <h3 className="text-xl font-semibold mb-2">Transdimensional Computing</h3>
                    <p className="text-gray-600 mb-4">
                      Computing beyond dimensions - process data across infinite realities and parallel universes.
                    </p>
                    <a href="/pages/TransdimensionalComputing2027" className="text-violet-600 hover:text-violet-700 font-semibold">
                      Explore Dimensions →
                    </a>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-indigo-500">
                    <div className="text-4xl mb-4">🌌</div>
                    <h3 className="text-xl font-semibold mb-2">Omniversal AI</h3>
                    <p className="text-gray-600 mb-4">
                      The first truly omniversal artificial intelligence spanning all possible universes and realities.
                    </p>
                    <a href="/pages/OmniversalAI2027" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                      Connect to Omniverse →
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-500">
                    <div className="text-4xl mb-4">🧠</div>
                    <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>
                    <p className="text-gray-600 mb-4">
                      Cutting-edge artificial intelligence solutions that are reshaping reality and transforming industries.
                    </p>
                    <a href="/pages/AIRevolutionaryBreakthrough2026" className="text-purple-600 hover:text-purple-700 font-semibold">
                      View AI Services →
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-cyan-500">
                    <div className="text-4xl mb-4">⚡</div>
                    <h3 className="text-xl font-semibold mb-2">Quantum Computing</h3>
                    <p className="text-gray-600 mb-4">
                      Revolutionary quantum computing solutions for complex problem solving across infinite universes.
                    </p>
                    <a href="/pages/QuantumComputingRevolution2026" className="text-cyan-600 hover:text-cyan-700 font-semibold">
                      Explore Quantum →
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-emerald-500">
                    <div className="text-4xl mb-4">🧬</div>
                    <h3 className="text-xl font-semibold mb-2">Neural Interfaces</h3>
                    <p className="text-gray-600 mb-4">
                      Direct brain-computer interfaces for enhanced human capabilities and consciousness transfer.
                    </p>
                    <a href="/pages/NeuralInterfaceRevolution2026" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                      Neural Tech →
                    </a>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
                    <div className="text-4xl mb-4">🧬</div>
                    <h3 className="text-xl font-semibold mb-2">Biotech Revolution</h3>
                    <p className="text-gray-600 mb-4">
                      Revolutionary biotechnology solutions transforming healthcare and human enhancement across realities.
                    </p>
                    <a href="/pages/AdvancedBiotechRevolution2026" className="text-green-600 hover:text-green-700 font-semibold">
                      Explore Biotech →
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-indigo-500">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-xl font-semibold mb-2">Space Technology</h3>
                    <p className="text-gray-600 mb-4">
                      Revolutionary space technologies enabling interstellar travel and colonization across dimensions.
                    </p>
                    <a href="/pages/SpaceTechInnovation2026" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                      Space Tech →
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-gray-500">
                    <div className="text-4xl mb-4">🤖</div>
                    <h3 className="text-xl font-semibold mb-2">Advanced Robotics</h3>
                    <p className="text-gray-600 mb-4">
                      Revolutionary robotics systems transforming industries and human-robot collaboration across universes.
                    </p>
                    <a href="/pages/AdvancedRobotics2026" className="text-gray-600 hover:text-gray-700 font-semibold">
                      Robotics →
                    </a>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Why Choose Zion Tech Group?
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                    We combine transdimensional computing, omniversal AI, and cutting-edge technology with deep industry expertise to deliver 
                    solutions that transcend reality and drive exponential business value. Our team of experts is dedicated 
                    to helping you succeed across all possible universes and dimensions.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <a href="/pages/TransdimensionalComputing2027" className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                      Start Your Journey Beyond Reality
                    </a>
                    <a href="/pages/OmniversalAI2027" className="border border-violet-600 text-violet-600 px-8 py-3 rounded-lg hover:bg-violet-50 transition-colors font-semibold">
                      Connect to Omniverse
                    </a>
                  </div>
                </div>
              </main>
            </div>
          } />
          
          {/* Routes for all the new pages */}
          <Route path="/pages/AIRevolutionaryBreakthrough2026" element={<AIRevolutionaryBreakthrough2026 />} />
          <Route path="/pages/QuantumComputingRevolution2026" element={<QuantumComputingRevolution2026 />} />
          <Route path="/pages/NeuralInterfaceRevolution2026" element={<NeuralInterfaceRevolution2026 />} />
          <Route path="/pages/SyntheticIntelligence2026" element={<SyntheticIntelligence2026 />} />
          <Route path="/pages/QuantumNeuralFusion2026" element={<QuantumNeuralFusion2026 />} />
          <Route path="/pages/NextGenAIRevolution2026" element={<NextGenAIRevolution2026 />} />
          <Route path="/pages/RevolutionaryTechBlog2026" element={<RevolutionaryTechBlog2026 />} />
          <Route path="/pages/ComprehensiveTechInsights2026" element={<ComprehensiveTechInsights2026 />} />
          <Route path="/pages/AdvancedAnalyticsDashboard2026" element={<AdvancedAnalyticsDashboard2026 />} />
          <Route path="/pages/BiotechRevolution2026" element={<BiotechRevolution2026 />} />
          <Route path="/pages/SpaceTechInnovation2026" element={<SpaceTechInnovation2026 />} />
          <Route path="/pages/AdvancedRobotics2026" element={<AdvancedRobotics2026 />} />
          <Route path="/pages/TransdimensionalComputing2027" element={<TransdimensionalComputing2027 />} />
          <Route path="/pages/OmniversalAI2027" element={<OmniversalAI2027 />} />
          
          <Route path="/blog" element={
            <main className="container mx-auto px-4 py-16">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
                <p className="text-xl text-gray-600">Coming soon - Latest insights and updates</p>
              </div>
            </main>
          } />
          <Route path="/contact" element={
            <main className="container mx-auto px-4 py-16">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
                <p className="text-xl text-gray-600">Get in touch with our team</p>
              </div>
            </main>
          } />
          <Route path="*" element={
            <main className="container mx-auto px-4 py-16 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
              <p className="text-xl text-gray-600">The page you're looking for doesn't exist.</p>
            </main>
          } />
        </Routes>
      </div>
    </Router>
  );
}