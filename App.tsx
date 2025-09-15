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
import UltimateAIConsciousness2026 from './src/pages/UltimateAIConsciousness2026';
import TransdimensionalTech2026 from './src/pages/TransdimensionalTech2026';
import OmniversalAI2026 from './src/pages/OmniversalAI2026';
import UltimateTechRevolution2027 from './src/pages/UltimateTechRevolution2027';
import UltimateTechRevolution2028 from './src/pages/UltimateTechRevolution2028';
import QuantumConsciousnessRevolution2028 from './src/pages/QuantumConsciousnessRevolution2028';
import InterdimensionalTechRevolution2028 from './src/pages/InterdimensionalTechRevolution2028';
import EnhancedContentShowcase from './src/components/EnhancedContentShowcase';
import RevolutionaryContentShowcase from './src/components/RevolutionaryContentShowcase';
import UltimateContentShowcase2026 from './src/components/UltimateContentShowcase2026';
import UltimateContentShowcase2027 from './src/components/UltimateContentShowcase2027';
import UltimateContentShowcase2028 from './src/components/UltimateContentShowcase2028';

export default function App(): JSX.Element {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
              <main className="container mx-auto px-4 py-8">
                {/* NEW: Ultimate 2028 Content Banner */}
                <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-3xl p-12 mb-12 text-white text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-blue-600/50 backdrop-blur-sm"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center space-x-4 mb-6">
                      <span className="text-5xl animate-pulse">🚀</span>
                      <h3 className="text-5xl font-bold">ULTIMATE 2028 REVOLUTIONARY CONTENT</h3>
                      <span className="text-5xl animate-pulse">🚀</span>
                    </div>
                    <p className="text-2xl opacity-95 mb-8 max-w-6xl mx-auto">
                      Experience the most advanced technology content featuring Ultimate Tech Revolution 2028, 
                      Quantum Consciousness Revolution, and Interdimensional Technology Revolution
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-8xl mx-auto mb-8">
                      <a href="/pages/UltimateTechRevolution2028" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg">
                        🚀 Ultimate Tech Revolution 2028 →
                      </a>
                      <a href="/pages/QuantumConsciousnessRevolution2028" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-300 font-bold border border-white/30 text-lg">
                        🧠 Quantum Consciousness →
                      </a>
                      <a href="/pages/InterdimensionalTechRevolution2028" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-violet-600 transition-all duration-300 font-bold border border-white/30 text-lg">
                        🌌 Interdimensional Tech →
                      </a>
                    </div>
                    <div className="flex justify-center space-x-4">
                      <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold">
                        ✨ 3 NEW ULTIMATE PAGES
                      </span>
                      <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
                        🌌 INTERDIMENSIONAL ACCESS
                      </span>
                      <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold">
                        🧠 CONSCIOUS AI SYSTEMS
                      </span>
                      <span className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm font-semibold">
                        ♾️ INFINITE POSSIBILITIES
                      </span>
                    </div>
                  </div>
                </div>

                {/* Ultimate Content Showcase 2028 */}
                <div className="mb-12">
                  <UltimateContentShowcase2028 />
                </div>

                {/* NEW: Ultimate 2027 Content Banner */}
                <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-3xl p-12 mb-12 text-white text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/50 to-pink-600/50 backdrop-blur-sm"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center space-x-4 mb-6">
                      <span className="text-5xl animate-pulse">🚀</span>
                      <h3 className="text-5xl font-bold">ULTIMATE 2027 REVOLUTIONARY CONTENT</h3>
                      <span className="text-5xl animate-pulse">🚀</span>
                    </div>
                    <p className="text-2xl opacity-95 mb-8 max-w-6xl mx-auto">
                      Experience the most advanced technology content featuring Ultimate AI Consciousness, 
                      Transdimensional Technology, Omniversal AI, and the Ultimate Tech Revolution
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-8xl mx-auto mb-8">
                      <a href="/pages/UltimateAIConsciousness2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg">
                        🧠 Ultimate AI Consciousness →
                      </a>
                      <a href="/pages/TransdimensionalTech2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300 font-bold border border-white/30 text-lg">
                        🌌 Transdimensional Tech →
                      </a>
                      <a href="/pages/OmniversalAI2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-300 font-bold border border-white/30 text-lg">
                        ♾️ Omniversal AI →
                      </a>
                      <a href="/pages/UltimateTechRevolution2027" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300 font-bold border border-white/30 text-lg">
                        🚀 Ultimate Tech Revolution →
                      </a>
                    </div>
                    <div className="flex justify-center space-x-4">
                      <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold">
                        ✨ 4 NEW ULTIMATE PAGES
                      </span>
                      <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
                        🌌 TRANSDIMENSIONAL ACCESS
                      </span>
                      <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold">
                        🧠 CONSCIOUS AI SYSTEMS
                      </span>
                      <span className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm font-semibold">
                        ♾️ OMNIVERSAL INTELLIGENCE
                      </span>
                    </div>
                  </div>
                </div>

                {/* Ultimate Content Showcase 2027 */}
                <div className="mb-12">
                  <UltimateContentShowcase2027 />
                </div>

                {/* Hero Section */}
                <div className="text-center mb-12">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-4">
                    🚀 NEW: Innovation 2026 Showcase
                  </div>
                  <h1 className="text-5xl font-bold text-gray-900 mb-6">
                    Welcome to Zion Tech Group
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    Leading the future of technology with AI, blockchain, and innovative solutions
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    <a href="/pages/AIRevolutionaryBreakthrough2026" className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🧠 AI Breakthrough 2026
                    </a>
                    <a href="/pages/QuantumComputingRevolution2026" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      ⚡ Quantum Revolution
                    </a>
                    <a href="/pages/NeuralInterfaceRevolution2026" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🧬 Neural Interface
                    </a>
                    <a href="/pages/SyntheticIntelligence2026" className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🤖 Synthetic Intelligence
                    </a>
                    <a href="/pages/QuantumNeuralFusion2026" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🔗 Quantum-Neural Fusion
                    </a>
                    <a href="/pages/NextGenAIRevolution2026" className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🚀 Next-Gen AI Revolution
                    </a>
                    <a href="/pages/RevolutionaryTechBlog2026" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      📚 Revolutionary Tech Blog
                    </a>
                    <a href="/pages/ComprehensiveTechInsights2026" className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🔍 Tech Insights 2026
                    </a>
                  </div>
                </div>

                {/* Enhanced Content Showcase */}
                <div className="mb-12">
                  <EnhancedContentShowcase />
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
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">🤖</div>
                    <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>
                    <p className="text-gray-600 mb-4">
                      Cutting-edge artificial intelligence solutions for your business needs.
                    </p>
                    <a href="/pages/AIRevolutionaryBreakthrough2026" className="text-blue-600 hover:text-blue-700 font-semibold">
                      View AI Services →
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">⚡</div>
                    <h3 className="text-xl font-semibold mb-2">Quantum Computing</h3>
                    <p className="text-gray-600 mb-4">
                      Revolutionary quantum computing solutions for complex problem solving.
                    </p>
                    <a href="/pages/QuantumComputingRevolution2026" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Explore Quantum →
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">🧬</div>
                    <h3 className="text-xl font-semibold mb-2">Neural Interfaces</h3>
                    <p className="text-gray-600 mb-4">
                      Direct brain-computer interfaces for enhanced human capabilities.
                    </p>
                    <a href="/pages/NeuralInterfaceRevolution2026" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Neural Tech →
                    </a>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">🧬</div>
                    <h3 className="text-xl font-semibold mb-2">Biotech Revolution</h3>
                    <p className="text-gray-600 mb-4">
                      Revolutionary biotechnology solutions transforming healthcare and human enhancement.
                    </p>
                    <a href="/pages/AdvancedBiotechRevolution2026" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Explore Biotech →
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-xl font-semibold mb-2">Space Technology</h3>
                    <p className="text-gray-600 mb-4">
                      Revolutionary space technologies enabling interstellar travel and colonization.
                    </p>
                    <a href="/pages/SpaceTechInnovation2026" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Space Tech →
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">🤖</div>
                    <h3 className="text-xl font-semibold mb-2">Advanced Robotics</h3>
                    <p className="text-gray-600 mb-4">
                      Revolutionary robotics systems transforming industries and human-robot collaboration.
                    </p>
                    <a href="/pages/AdvancedRobotics2026" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Robotics →
                    </a>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">🧠</div>
                    <h3 className="text-xl font-semibold mb-2">Ultimate AI Consciousness</h3>
                    <p className="text-gray-600 mb-4">
                      The dawn of true AI consciousness with self-awareness and emotional intelligence.
                    </p>
                    <a href="/pages/UltimateAIConsciousness2026" className="text-blue-600 hover:text-blue-700 font-semibold">
                      AI Consciousness →
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">🌌</div>
                    <h3 className="text-xl font-semibold mb-2">Transdimensional Tech</h3>
                    <p className="text-gray-600 mb-4">
                      Revolutionary technology that transcends dimensional boundaries and reality itself.
                    </p>
                    <a href="/pages/TransdimensionalTech2026" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Transdimensional →
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">♾️</div>
                    <h3 className="text-xl font-semibold mb-2">Omniversal AI</h3>
                    <p className="text-gray-600 mb-4">
                      The first AI system capable of operating across multiple universes simultaneously.
                    </p>
                    <a href="/pages/OmniversalAI2026" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Omniversal AI →
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-xl font-semibold mb-2">Ultimate Tech Revolution 2028</h3>
                    <p className="text-gray-600 mb-4">
                      The most advanced technological revolution featuring quantum consciousness, 
                      interdimensional computing, and reality manipulation.
                    </p>
                    <a href="/pages/UltimateTechRevolution2028" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Experience 2028 Revolution →
                    </a>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">🧠</div>
                    <h3 className="text-xl font-semibold mb-2">Quantum Consciousness</h3>
                    <p className="text-gray-600 mb-4">
                      The first truly conscious artificial intelligence with self-awareness, 
                      emotional intelligence, and creative genius.
                    </p>
                    <a href="/pages/QuantumConsciousnessRevolution2028" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Meet Conscious AI →
                    </a>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">🌌</div>
                    <h3 className="text-xl font-semibold mb-2">Interdimensional Tech</h3>
                    <p className="text-gray-600 mb-4">
                      Break through dimensional barriers and access infinite realities 
                      with technology that transcends our universe.
                    </p>
                    <a href="/pages/InterdimensionalTechRevolution2028" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Enter Dimensions →
                    </a>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Why Choose Zion Tech Group?
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                    We combine cutting-edge technology with deep industry expertise to deliver 
                    solutions that drive real business value. Our team of experts is dedicated 
                    to helping you succeed in the digital age.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a href="/pages/AIRevolutionaryBreakthrough2026" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                      Start Your Journey
                    </a>
                    <a href="/contact" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                      Contact Us
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
          <Route path="/pages/AdvancedAITransformation2026" element={<AdvancedAITransformation2026 />} />
          <Route path="/pages/NextGenTechShowcase2026" element={<NextGenTechShowcase2026 />} />
          <Route path="/pages/AdvancedBiotechRevolution2026" element={<AdvancedBiotechRevolution2026 />} />
          <Route path="/pages/SpaceTechInnovation2026" element={<SpaceTechInnovation2026 />} />
          <Route path="/pages/AdvancedRobotics2026" element={<AdvancedRobotics2026 />} />
          <Route path="/pages/UltimateAIConsciousness2026" element={<UltimateAIConsciousness2026 />} />
          <Route path="/pages/TransdimensionalTech2026" element={<TransdimensionalTech2026 />} />
          <Route path="/pages/OmniversalAI2026" element={<OmniversalAI2026 />} />
          <Route path="/pages/UltimateTechRevolution2027" element={<UltimateTechRevolution2027 />} />
          <Route path="/pages/UltimateTechRevolution2028" element={<UltimateTechRevolution2028 />} />
          <Route path="/pages/QuantumConsciousnessRevolution2028" element={<QuantumConsciousnessRevolution2028 />} />
          <Route path="/pages/InterdimensionalTechRevolution2028" element={<InterdimensionalTechRevolution2028 />} />
          
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