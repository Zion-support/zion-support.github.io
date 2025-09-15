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
import AdvancedBiotechSolutions2026 from './src/pages/AdvancedBiotechSolutions2026';
import AdvancedRobotics2026 from './src/pages/AdvancedRobotics2026';
import SpaceTechInnovation2026 from './src/pages/SpaceTechInnovation2026';
import EnhancedContentShowcase from './src/components/EnhancedContentShowcase';
import RevolutionaryContentShowcase from './src/components/RevolutionaryContentShowcase';
import RevolutionaryPromoBanner from './src/components/RevolutionaryPromoBanner';

export default function App(): JSX.Element {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Revolutionary Promotional Banner */}
        <RevolutionaryPromoBanner />
        
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
              <main className="container mx-auto px-4 py-8">
                {/* NEW: Revolutionary 2026 Content Banner */}
                <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-pink-600/50 backdrop-blur-sm"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <span className="text-3xl animate-bounce">🌟</span>
                      <h3 className="text-3xl font-bold">BREAKTHROUGH 2026 CONTENT</h3>
                      <span className="text-3xl animate-bounce">🌟</span>
                    </div>
                    <p className="text-xl opacity-95 mb-6 max-w-5xl mx-auto">
                      Experience the most advanced technology content featuring AI Revolutionary Breakthrough, 
                      Quantum Computing Revolution, Neural Interface Technology, and Synthetic Intelligence
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                      <a href="/pages/AIRevolutionaryBreakthrough2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        🧠 AI Revolutionary Breakthrough →
                      </a>
                      <a href="/pages/QuantumComputingRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        ⚡ Quantum Computing Revolution →
                      </a>
                      <a href="/pages/NeuralInterfaceRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        🧬 Neural Interface Revolution →
                      </a>
                      <a href="/pages/SyntheticIntelligence2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        🤖 Synthetic Intelligence →
                      </a>
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

                {/* Revolutionary Content Showcase */}
                <div className="mb-12">
                  <RevolutionaryContentShowcase />
                </div>

                {/* NEW: Advanced Technology Showcase 2026 */}
                <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl p-8 mb-12 text-white text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/50 to-cyan-600/50 backdrop-blur-sm"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <span className="text-3xl animate-pulse">🧬</span>
                      <h3 className="text-3xl font-bold">ADVANCED BIOTECH SOLUTIONS 2026</h3>
                      <span className="text-3xl animate-pulse">🧬</span>
                    </div>
                    <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
                      Revolutionary biotechnology solutions transforming healthcare, agriculture, and environmental sustainability through cutting-edge genetic engineering
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                      <a href="/pages/AdvancedBiotechSolutions2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold border border-white/30">
                        🧬 CRISPR 3.0 Gene Editing →
                      </a>
                      <a href="/pages/AdvancedBiotechSolutions2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold border border-white/30">
                        🌱 Synthetic Biology →
                      </a>
                      <a href="/pages/AdvancedBiotechSolutions2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold border border-white/30">
                        💊 Personalized Medicine →
                      </a>
                      <a href="/pages/AdvancedBiotechSolutions2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold border border-white/30">
                        🌾 Agricultural Biotech →
                      </a>
                    </div>
                  </div>
                </div>

                {/* NEW: Advanced Robotics 2026 Showcase */}
                <div className="bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 rounded-2xl p-8 mb-12 text-white text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-600/50 to-zinc-600/50 backdrop-blur-sm"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <span className="text-3xl animate-bounce">🤖</span>
                      <h3 className="text-3xl font-bold">ADVANCED ROBOTICS 2026</h3>
                      <span className="text-3xl animate-bounce">🤖</span>
                    </div>
                    <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
                      Next-generation robotics systems with artificial intelligence, advanced sensors, and autonomous capabilities revolutionizing industries
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                      <a href="/pages/AdvancedRobotics2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-slate-600 transition-all duration-300 font-semibold border border-white/30">
                        🧠 AI-Powered Autonomy →
                      </a>
                      <a href="/pages/AdvancedRobotics2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-slate-600 transition-all duration-300 font-semibold border border-white/30">
                        👁️ Advanced Sensing →
                      </a>
                      <a href="/pages/AdvancedRobotics2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-slate-600 transition-all duration-300 font-semibold border border-white/30">
                        🤝 Human-Robot Collaboration →
                      </a>
                      <a href="/pages/AdvancedRobotics2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-slate-600 transition-all duration-300 font-semibold border border-white/30">
                        🏭 Industrial Automation →
                      </a>
                    </div>
                  </div>
                </div>

                {/* NEW: Space Technology Innovation 2026 */}
                <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 mb-12 text-white text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-pink-600/50 backdrop-blur-sm"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <span className="text-3xl animate-pulse">🚀</span>
                      <h3 className="text-3xl font-bold">SPACE TECHNOLOGY INNOVATION 2026</h3>
                      <span className="text-3xl animate-pulse">🚀</span>
                    </div>
                    <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
                      Revolutionary space technologies enabling interplanetary exploration, space colonization, and advanced satellite systems
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                      <a href="/pages/SpaceTechInnovation2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold border border-white/30">
                        🚀 Advanced Propulsion →
                      </a>
                      <a href="/pages/SpaceTechInnovation2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold border border-white/30">
                        🏠 Space Habitats →
                      </a>
                      <a href="/pages/SpaceTechInnovation2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold border border-white/30">
                        🛰️ Advanced Satellites →
                      </a>
                      <a href="/pages/SpaceTechInnovation2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold border border-white/30">
                        🌙 Lunar & Mars Missions →
                      </a>
                    </div>
                  </div>
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
          <Route path="/pages/AdvancedBiotechSolutions2026" element={<AdvancedBiotechSolutions2026 />} />
          <Route path="/pages/AdvancedRobotics2026" element={<AdvancedRobotics2026 />} />
          <Route path="/pages/SpaceTechInnovation2026" element={<SpaceTechInnovation2026 />} />
          
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