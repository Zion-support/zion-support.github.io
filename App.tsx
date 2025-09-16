import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './src/index.css';

// Import enhanced components
import EnhancedNavigation from './src/components/EnhancedNavigation';
import EnhancedFooter from './src/components/EnhancedFooter';
import ContentSearch from './src/components/ContentSearch';

// Import existing pages
import AIRevolutionaryBreakthrough2026 from './src/pages/AIRevolutionaryBreakthrough2026';
import QuantumComputingRevolution2026 from './src/pages/QuantumComputingRevolution2026';
import NeuralInterfaceRevolution2026 from './src/pages/NeuralInterfaceRevolution2026';
import SyntheticIntelligence2026 from './src/pages/SyntheticIntelligence2026';
import QuantumNeuralFusion2026 from './src/pages/QuantumNeuralFusion2026';

// Import showcase components
import EnhancedContentShowcase from './src/components/EnhancedContentShowcase';
import RevolutionaryContentShowcase from './src/components/RevolutionaryContentShowcase';
import RevolutionaryContentShowcase2026 from './src/components/RevolutionaryContentShowcase2026';
import RevolutionaryPromoBanner2026 from './src/components/RevolutionaryPromoBanner2026';
import InteractiveContentShowcase2026 from './src/components/InteractiveContentShowcase2026';
import RevolutionaryContentBanner2026 from './src/components/RevolutionaryContentBanner2026';
import UltimateContentShowcase2026 from './src/components/UltimateContentShowcase2026';

// New 2033 Revolutionary Content
import RevolutionaryContentBanner2033 from './src/components/RevolutionaryContentBanner2033';
import UltimateTechRevolution2033 from './src/pages/UltimateTechRevolution2033';
import TranscendentAI2033 from './src/pages/TranscendentAI2033';
import UniversalTechRevolution2033 from './src/pages/UniversalTechRevolution2033';

// New 2026 Advanced Content
import NewContentBanner2026 from './src/components/NewContentBanner2026';
import AdvancedBiotechRevolution2026 from './src/pages/AdvancedBiotechRevolution2026';
import AdvancedSpaceTech2026 from './src/pages/AdvancedSpaceTech2026';
import AdvancedRobotics2026 from './src/pages/AdvancedRobotics2026';

export default function App(): JSX.Element {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <EnhancedNavigation />
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
              <main className="container mx-auto px-4 py-8">
                {/* Enhanced Search Section */}
                <div className="text-center mb-12">
                  <h1 className="text-5xl font-bold text-gray-900 mb-6">
                    Welcome to Zion Tech Group
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    Leading the future of technology with AI, blockchain, and innovative solutions
                  </p>
                  <ContentSearch />
                </div>

                {/* NEW: Ultimate 2033 Content Banner */}
                <div className="mb-12">
                  <RevolutionaryContentBanner2033 />
                </div>

                {/* NEW: 2026 Advanced Content Banner */}
                <div className="mb-12">
                  <NewContentBanner2026 />
                </div>

                {/* NEW: Ultimate 2026 Content Banner */}
                <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 mb-12 text-white text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-pink-600/50 backdrop-blur-sm"></div>
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center space-x-4 mb-6">
                      <span className="text-4xl animate-bounce">🌟</span>
                      <h3 className="text-4xl font-bold">REVOLUTIONARY BREAKTHROUGH CONTENT 2026-2033</h3>
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
                      <a href="/pages/SyntheticIntelligence2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg">
                        🤖 Synthetic Intelligence →
                      </a>
                      <a href="/pages/QuantumNeuralFusion2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg">
                        ⚛️ Quantum-Neural Fusion →
                      </a>
                      <a href="/pages/UltimateTechRevolution2033" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg animate-pulse">
                        🌟 NEW: Ultimate Tech Revolution 2033 →
                      </a>
                      <a href="/pages/AdvancedBiotechRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg">
                        🧬 Advanced Biotech Revolution →
                      </a>
                      <a href="/pages/AdvancedSpaceTech2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg">
                        🚀 Advanced Space Technology →
                      </a>
                      <a href="/pages/AdvancedRobotics2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg">
                        🤖 Advanced Robotics →
                      </a>
                    </div>
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
                    <h3 className="text-xl font-semibold mb-2">Biotech Revolution</h3>
                    <p className="text-gray-600 mb-4">
                      Advanced biotechnology breakthroughs in gene editing and synthetic biology.
                    </p>
                    <a href="/pages/AdvancedBiotechRevolution2026" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Explore Biotech →
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-xl font-semibold mb-2">Space Technology</h3>
                    <p className="text-gray-600 mb-4">
                      Cutting-edge space exploration and interplanetary mission technologies.
                    </p>
                    <a href="/pages/AdvancedSpaceTech2026" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Space Tech →
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">🤖</div>
                    <h3 className="text-xl font-semibold mb-2">Advanced Robotics</h3>
                    <p className="text-gray-600 mb-4">
                      Intelligent robots that work alongside humans and revolutionize industries.
                    </p>
                    <a href="/pages/AdvancedRobotics2026" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Robotics →
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">🧠</div>
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
              <EnhancedFooter />
            </div>
          } />
          
          {/* Routes for all the new pages */}
          <Route path="/pages/AIRevolutionaryBreakthrough2026" element={
            <div>
              <AIRevolutionaryBreakthrough2026 />
              <EnhancedFooter />
            </div>
          } />
          <Route path="/pages/QuantumComputingRevolution2026" element={
            <div>
              <QuantumComputingRevolution2026 />
              <EnhancedFooter />
            </div>
          } />
          <Route path="/pages/NeuralInterfaceRevolution2026" element={
            <div>
              <NeuralInterfaceRevolution2026 />
              <EnhancedFooter />
            </div>
          } />
          <Route path="/pages/SyntheticIntelligence2026" element={
            <div>
              <SyntheticIntelligence2026 />
              <EnhancedFooter />
            </div>
          } />
          <Route path="/pages/QuantumNeuralFusion2026" element={
            <div>
              <QuantumNeuralFusion2026 />
              <EnhancedFooter />
            </div>
          } />
          
          {/* New 2033 Routes */}
          <Route path="/pages/UltimateTechRevolution2033" element={
            <div>
              <UltimateTechRevolution2033 />
              <EnhancedFooter />
            </div>
          } />
          <Route path="/pages/TranscendentAI2033" element={
            <div>
              <TranscendentAI2033 />
              <EnhancedFooter />
            </div>
          } />
          <Route path="/pages/UniversalTechRevolution2033" element={
            <div>
              <UniversalTechRevolution2033 />
              <EnhancedFooter />
            </div>
          } />
          
          {/* New 2026 Advanced Content Routes */}
          <Route path="/pages/AdvancedBiotechRevolution2026" element={
            <div>
              <AdvancedBiotechRevolution2026 />
              <EnhancedFooter />
            </div>
          } />
          <Route path="/pages/AdvancedSpaceTech2026" element={
            <div>
              <AdvancedSpaceTech2026 />
              <EnhancedFooter />
            </div>
          } />
          <Route path="/pages/AdvancedRobotics2026" element={
            <div>
              <AdvancedRobotics2026 />
              <EnhancedFooter />
            </div>
          } />
          
          <Route path="/blog" element={
            <div>
              <main className="container mx-auto px-4 py-16">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
                  <p className="text-xl text-gray-600">Coming soon - Latest insights and updates</p>
                </div>
              </main>
              <EnhancedFooter />
            </div>
          } />
          <Route path="/contact" element={
            <div>
              <main className="container mx-auto px-4 py-16">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
                  <p className="text-xl text-gray-600">Get in touch with our team</p>
                </div>
              </main>
              <EnhancedFooter />
            </div>
          } />
          <Route path="*" element={
            <div>
              <main className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
                <p className="text-xl text-gray-600">The page you're looking for doesn't exist.</p>
              </main>
              <EnhancedFooter />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}