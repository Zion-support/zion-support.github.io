import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './src/index.css';

// Import existing pages
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
import UltimateTechRevolution2026 from './src/pages/UltimateTechRevolution2026';
import FutureTechPredictions2026 from './src/pages/FutureTechPredictions2026';
import RevolutionaryInnovationHub2026 from './src/pages/RevolutionaryInnovationHub2026';
import EnhancedContentShowcase from './src/components/EnhancedContentShowcase';
import RevolutionaryContentShowcase from './src/components/RevolutionaryContentShowcase';
import UltimateContentShowcase2026 from './src/components/UltimateContentShowcase2026';
import UltimateTechRevolution2027 from './src/pages/UltimateTechRevolution2027';
import ConsciousnessTransfer2027 from './src/pages/ConsciousnessTransfer2027';
import QuantumConsciousnessRevolution2027 from './src/pages/QuantumConsciousnessRevolution2027';
import RevolutionaryContentShowcase2027 from './src/components/RevolutionaryContentShowcase2027';

export default function App(): JSX.Element {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
              <main className="container mx-auto px-4 py-8">
                {/* ULTIMATE REVOLUTIONARY CONTENT BANNER 2027 */}
                <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 rounded-3xl p-12 mb-12 text-white text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm"></div>
                  <div className="absolute top-0 left-0 w-full h-full">
                    {[...Array(80)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 4}s`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center space-x-4 mb-6">
                      <span className="text-5xl animate-bounce">🌟</span>
                      <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        ULTIMATE TECHNOLOGY REVOLUTION 2027
                      </h3>
                      <span className="text-5xl animate-bounce">🌟</span>
                    </div>
                    <p className="text-2xl opacity-95 mb-8 max-w-5xl mx-auto leading-relaxed">
                      Experience the most revolutionary technological breakthroughs in human history. 
                      From consciousness transfer to quantum consciousness, we're redefining what's possible.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-8xl mx-auto">
                      <a href="/pages/UltimateTechRevolution2027" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold text-lg border border-white/30 hover:scale-105 transform">
                        🌟 Ultimate Revolution →
                      </a>
                      <a href="/pages/ConsciousnessTransfer2027" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-300 font-bold text-lg border border-white/30 hover:scale-105 transform">
                        🧠 Consciousness Transfer →
                      </a>
                      <a href="/pages/QuantumConsciousnessRevolution2027" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-emerald-600 transition-all duration-300 font-bold text-lg border border-white/30 hover:scale-105 transform">
                        ⚛️ Quantum Consciousness →
                      </a>
                      <a href="/pages/UltimateTechRevolution2027" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300 font-bold text-lg border border-white/30 hover:scale-105 transform">
                        🧬 Synthetic Biology →
                      </a>
                      <a href="/pages/UltimateTechRevolution2027" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-violet-600 transition-all duration-300 font-bold text-lg border border-white/30 hover:scale-105 transform">
                        🚀 Space Revolution →
                      </a>
                      <a href="/pages/UltimateTechRevolution2027" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-pink-600 transition-all duration-300 font-bold text-lg border border-white/30 hover:scale-105 transform">
                        🤖 Transcendent AI →
                      </a>
                    </div>
                  </div>
                </div>

                {/* NEW: Ultimate 2026 Content Banner */}
                <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 mb-12 text-white text-center relative overflow-hidden">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto mb-8">
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
                        ✨ 6 NEW REVOLUTIONARY PAGES
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

                {/* NEW: Revolutionary Innovation Hub Banner */}
                <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-3xl p-12 mb-12 text-white text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/50 to-purple-600/50 backdrop-blur-sm"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center space-x-4 mb-6">
                      <span className="text-4xl animate-pulse">🔬</span>
                      <h3 className="text-4xl font-bold">REVOLUTIONARY INNOVATION HUB 2026</h3>
                      <span className="text-4xl animate-pulse">🔬</span>
                    </div>
                    <p className="text-2xl opacity-95 mb-8 max-w-6xl mx-auto">
                      The world's most advanced innovation center featuring breakthrough technologies, 
                      consciousness AI labs, quantum facilities, and reality manipulation research
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto mb-8">
                      <a href="/pages/UltimateTechRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-green-600 transition-all duration-300 font-bold border border-white/30 text-lg">
                        🔮 Ultimate Tech Revolution →
                      </a>
                      <a href="/pages/FutureTechPredictions2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-green-600 transition-all duration-300 font-bold border border-white/30 text-lg">
                        🔮 Future Tech Predictions →
                      </a>
                      <a href="/pages/RevolutionaryInnovationHub2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-green-600 transition-all duration-300 font-bold border border-white/30 text-lg">
                        🚀 Innovation Hub →
                      </a>
                    </div>
                    <div className="flex justify-center space-x-4">
                      <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold">
                        🔬 BREAKTHROUGH RESEARCH
                      </span>
                      <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
                        🧠 CONSCIOUSNESS LABS
                      </span>
                      <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold">
                        ⚡ QUANTUM FACILITIES
                      </span>
                    </div>
                  </div>
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

                {/* Revolutionary Content Showcase 2027 */}
                <div className="mb-12">
                  <RevolutionaryContentShowcase2027 />
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
                    <div className="text-4xl mb-4">🔮</div>
                    <h3 className="text-xl font-semibold mb-2">Ultimate Tech Revolution</h3>
                    <p className="text-gray-600 mb-4">
                      Experience the convergence of AI, Quantum Computing, and Consciousness Technology.
                    </p>
                    <a href="/pages/UltimateTechRevolution2026" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Ultimate Revolution →
                    </a>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">🔮</div>
                    <h3 className="text-xl font-semibold mb-2">Future Tech Predictions</h3>
                    <p className="text-gray-600 mb-4">
                      Exclusive predictions about revolutionary technologies that will reshape our world.
                    </p>
                    <a href="/pages/FutureTechPredictions2026" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Future Predictions →
                    </a>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">🔬</div>
                    <h3 className="text-xl font-semibold mb-2">Innovation Hub</h3>
                    <p className="text-gray-600 mb-4">
                      The world's most advanced innovation center with breakthrough research facilities.
                    </p>
                    <a href="/pages/RevolutionaryInnovationHub2026" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Innovation Hub →
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
                    <a href="/pages/UltimateTechRevolution2026" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                      🔮 Ultimate Revolution
                    </a>
                    <a href="/pages/FutureTechPredictions2026" className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                      🔮 Future Predictions
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
          <Route path="/pages/UltimateTechRevolution2026" element={<UltimateTechRevolution2026 />} />
          <Route path="/pages/FutureTechPredictions2026" element={<FutureTechPredictions2026 />} />
          <Route path="/pages/RevolutionaryInnovationHub2026" element={<RevolutionaryInnovationHub2026 />} />
          <Route path="/pages/UltimateTechRevolution2027" element={<UltimateTechRevolution2027 />} />
          <Route path="/pages/ConsciousnessTransfer2027" element={<ConsciousnessTransfer2027 />} />
          <Route path="/pages/QuantumConsciousnessRevolution2027" element={<QuantumConsciousnessRevolution2027 />} />
          
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