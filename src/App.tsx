import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Header from './Header';
import Footer from './Footer';
import './index.css';

// 2025 Pages
import InnovationShowcase2025 from './pages/InnovationShowcase2025';
import AIInnovationLab2025 from './pages/AIInnovationLab2025';
import AIFutureTrends2025 from './pages/AIFutureTrends2025';
import RevolutionaryTechTrends2025 from './pages/RevolutionaryTechTrends2025';
import BusinessAutomationGuide2025 from './pages/BusinessAutomationGuide2025';
import NextGenInnovationHub2025 from './pages/NextGenInnovationHub2025';
import AIMetaVerseIntegration2025 from './pages/AIMetaVerseIntegration2025';
import AdvancedAnalyticsInsights2025 from './pages/AdvancedAnalyticsInsights2025';
import AIEnterpriseCopilot2025 from './pages/AIEnterpriseCopilot2025';
import NewShowcase2025 from './pages/NewShowcase2025';
import AdvancedAITransformation2025 from './pages/AdvancedAITransformation2025';
import QuantumComputingRevolution2025 from './pages/QuantumComputingRevolution2025';
import NeuralInterfaceRevolution2025 from './pages/NeuralInterfaceRevolution2025';
import NextGenTechShowcase2025 from './pages/NextGenTechShowcase2025';

// 2026 Pages
import BlogPost2026 from './pages/BlogPost2026';
import AdvancedTechSolutions2026 from './pages/AdvancedTechSolutions2026';
import UltimateServiceShowcase2026 from './pages/UltimateServiceShowcase2026';
import AIInnovationHub2026 from './pages/AIInnovationHub2026';
import ComprehensiveTechInsights2026 from './pages/ComprehensiveTechInsights2026';
import QuantumComputingSolutions2026 from './pages/QuantumComputingSolutions2026';
import AdvancedCybersecuritySuite2026 from './pages/AdvancedCybersecuritySuite2026';
import AIRevolutionaryBreakthrough2026 from './pages/AIRevolutionaryBreakthrough2026';
import QuantumBreakthroughs2026 from './pages/QuantumBreakthroughs2026';
import NeuralInterfaceRevolution2026 from './pages/NeuralInterfaceRevolution2026';
import SyntheticIntelligence2026 from './pages/SyntheticIntelligence2026';
import QuantumNeuralFusion2026 from './pages/QuantumNeuralFusion2026';
import CyberPhysicalSystems2026 from './pages/CyberPhysicalSystems2026';
import AdvancedBiotechSolutions2026 from './pages/AdvancedBiotechSolutions2026';
import NextGenAIRevolution2026 from './pages/NextGenAIRevolution2026';
import QuantumComputingRevolution2026 from './pages/QuantumComputingRevolution2026';
import RevolutionaryTechBlog2026 from './pages/RevolutionaryTechBlog2026';
import AdvancedTechTrends2026 from './pages/AdvancedTechTrends2026';
import TechnologyTrendsBlog2026 from './pages/TechnologyTrendsBlog2026';
import SpaceTechInnovation2026 from './pages/SpaceTechInnovation2026';
import AdvancedRobotics2026 from './pages/AdvancedRobotics2026';

// Components
import AdvancedContentCarousel from './components/AdvancedContentCarousel';
import RevolutionaryTechShowcase2026 from './components/RevolutionaryTechShowcase2026';
import EnhancedContentShowcase from './components/EnhancedContentShowcase';

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
                      Experience the future of technology with our groundbreaking new content on Advanced Tech Trends, 
                      AI Revolutionary Breakthroughs, Quantum Computing Revolution, and Neural Interface Technology
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 max-w-7xl mx-auto">
                      <a href="/pages/AdvancedTechTrends2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        🚀 Tech Trends 2026 →
                      </a>
                      <a href="/pages/AIRevolutionaryBreakthrough2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        🤖 AI Breakthrough →
                      </a>
                      <a href="/pages/QuantumComputingRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        ⚡ Quantum Revolution →
                      </a>
                      <a href="/pages/SyntheticIntelligence2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        🧠 Synthetic Intelligence →
                      </a>
                      <a href="/pages/NeuralInterfaceRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        🧬 Neural Interface →
                      </a>
                      <a href="/pages/TechnologyTrendsBlog2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        📚 Tech Blog 2026 →
                      </a>
                    </div>
                    <div className="mt-6">
                      <a href="/pages/AdvancedTechTrends2026" className="inline-block bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg border-2 border-white/30">
                        🌟 NEW: Advanced Tech Trends 2026 →
                      </a>
                    </div>
                  </div>
                </div>

                {/* NEW: Revolutionary Tech Showcase 2026 */}
                <div className="mb-12">
                  <RevolutionaryTechShowcase2026 />
                </div>

                {/* NEW: Latest Breakthrough Technologies Banner */}
                <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/50 to-cyan-600/50 backdrop-blur-sm"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <span className="text-3xl animate-pulse">🧬</span>
                      <h3 className="text-2xl font-bold">LATEST BREAKTHROUGH TECHNOLOGIES 2026</h3>
                      <span className="text-3xl animate-pulse">🚀</span>
                    </div>
                    <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
                      Discover our newest revolutionary technologies: Advanced Biotech Solutions, Space Technology Innovation, and Advanced Robotics
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                      <a href="/pages/AdvancedBiotechSolutions2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold border border-white/30">
                        🧬 Advanced Biotech Solutions →
                      </a>
                      <a href="/pages/SpaceTechInnovation2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-teal-600 transition-all duration-300 font-semibold border border-white/30">
                        🚀 Space Technology Innovation →
                      </a>
                      <a href="/pages/AdvancedRobotics2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold border border-white/30">
                        🤖 Advanced Robotics →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hero Section with New Content Promotions */}
                <div className="text-center mb-12">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-4">
                    🚀 NEW: Innovation 2025 Showcase
                  </div>
                  <h1 className="text-5xl font-bold text-gray-900 mb-6">
                    Welcome to Zion Tech Group
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    Leading the future of technology with AI, blockchain, and innovative solutions
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    <a href="/pages/AdvancedAITransformation2025" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🧠 AI Transformation 2025
                    </a>
                    <a href="/pages/QuantumNeuralFusion2026" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      ⚛️ Quantum-Neural Fusion
                    </a>
                    <a href="/pages/NextGenTechShowcase2025" className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🌟 Next-Gen Showcase
                    </a>
                    <a href="/pages/SyntheticIntelligence2026" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🤖 Synthetic Intelligence
                    </a>
                    <a href="/pages/QuantumComputingRevolution2026" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      ⚡ Advanced Quantum
                    </a>
                    <a href="/pages/NeuralInterfaceRevolution2026" className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🧬 Neural Interface
                    </a>
                    <a href="/pages/ComprehensiveTechInsights2026" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🔍 Tech Insights 2026
                    </a>
                    <a href="/pages/RevolutionaryTechBlog2026" className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors text-center font-semibold">
                      📚 Tech Blog 2026
                    </a>
                  </div>
                </div>

                {/* Interactive Dynamic Content Carousel */}
                <div className="mb-12">
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">🌟 Featured: Revolutionary Technology 2026</h2>
                    <p className="text-xl text-gray-600">Discover our latest innovations that are reshaping industries</p>
                  </div>
                  <AdvancedContentCarousel />
                </div>

                {/* Enhanced Content Showcase */}
                <div className="mb-12">
                  <EnhancedContentShowcase />
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">🤖</div>
                    <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>
                    <p className="text-gray-600 mb-4">
                      Cutting-edge artificial intelligence solutions for your business needs.
                    </p>
                    <a href="/pages/AIInnovationLab2025" className="text-blue-600 hover:text-blue-700 font-semibold">
                      View AI Services →
                    </a>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">🔗</div>
                    <h3 className="text-xl font-semibold mb-2">Blockchain</h3>
                    <p className="text-gray-600 mb-4">
                      Secure, decentralized solutions powered by blockchain technology.
                    </p>
                    <a href="/pages/InnovationShowcase2025" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Explore Blockchain →
                    </a>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">☁️</div>
                    <h3 className="text-xl font-semibold mb-2">Cloud Services</h3>
                    <p className="text-gray-600 mb-4">
                      Scalable cloud infrastructure and deployment solutions.
                    </p>
                    <a href="/pages/UltimateServiceShowcase2026" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Cloud Solutions →
                    </a>
                  </div>
                </div>

                {/* Success Stories Section */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 mb-12">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">🏆 Client Success Stories</h2>
                    <p className="text-lg text-gray-600">See how we've transformed businesses with cutting-edge technology</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">+300%</span>
                        <span className="text-sm text-gray-500">Efficiency Gain</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Fortune 500 AI Transformation</h3>
                      <p className="text-gray-600 mb-4">Implemented autonomous AI agents that reduced operational costs by 40% and increased productivity by 300%.</p>
                      <a href="/pages/AIRevolutionaryBreakthrough2026" className="text-blue-600 hover:text-blue-700 font-semibold">
                        Read Case Study →
                      </a>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">$2M</span>
                        <span className="text-sm text-gray-500">Cost Savings</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Global Blockchain Implementation</h3>
                      <p className="text-gray-600 mb-4">Deployed enterprise blockchain solution that streamlined supply chain operations and saved $2M annually.</p>
                      <a href="/pages/QuantumComputingRevolution2026" className="text-blue-600 hover:text-blue-700 font-semibold">
                        Learn More →
                      </a>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">99.9%</span>
                        <span className="text-sm text-gray-500">Uptime</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Cloud Migration Success</h3>
                      <p className="text-gray-600 mb-4">Migrated legacy systems to cloud infrastructure achieving 99.9% uptime and 60% faster performance.</p>
                      <a href="/pages/AdvancedTechSolutions2026" className="text-blue-600 hover:text-blue-700 font-semibold">
                        View Results →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Latest News Section */}
                <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">📰 Latest Technology Insights</h2>
                    <p className="text-lg text-gray-600">Stay updated with the latest trends and innovations</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">NEW</span>
                        <span className="text-sm text-gray-500">January 20, 2025</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Technology Trends 2025</h3>
                      <p className="text-gray-600 mb-4">Discover the most significant trends shaping our digital future...</p>
                      <a href="/pages/BlogPost2026" className="text-blue-600 hover:text-blue-700 font-semibold">
                        Read Full Article →
                      </a>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">FEATURED</span>
                        <span className="text-sm text-gray-500">January 18, 2025</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Innovation Showcase 2025</h3>
                      <p className="text-gray-600 mb-4">Explore our revolutionary services across cutting-edge technology domains...</p>
                      <a href="/pages/InnovationShowcase2025" className="text-blue-600 hover:text-blue-700 font-semibold">
                        Explore Innovations →
                      </a>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-2 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full">BREAKTHROUGH</span>
                        <span className="text-sm text-gray-500">January 22, 2025</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Advanced Tech Solutions</h3>
                      <p className="text-gray-600 mb-4">Cutting-edge AI, quantum computing, and neural interface technologies...</p>
                      <a href="/pages/AdvancedTechSolutions2026" className="text-blue-600 hover:text-blue-700 font-semibold">
                        Explore Solutions →
                      </a>
                    </div>
                  </div>
                </div>

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
                    <a href="/pages/InnovationShowcase2025" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
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
          
          {/* 2025 Routes */}
          <Route path="/pages/InnovationShowcase2025" element={<InnovationShowcase2025 />} />
          <Route path="/pages/AIInnovationLab2025" element={<AIInnovationLab2025 />} />
          <Route path="/pages/AIFutureTrends2025" element={<AIFutureTrends2025 />} />
          <Route path="/pages/RevolutionaryTechTrends2025" element={<RevolutionaryTechTrends2025 />} />
          <Route path="/pages/BusinessAutomationGuide2025" element={<BusinessAutomationGuide2025 />} />
          <Route path="/pages/NextGenInnovationHub2025" element={<NextGenInnovationHub2025 />} />
          <Route path="/pages/AIMetaVerseIntegration2025" element={<AIMetaVerseIntegration2025 />} />
          <Route path="/pages/AdvancedAnalyticsInsights2025" element={<AdvancedAnalyticsInsights2025 />} />
          <Route path="/pages/AIEnterpriseCopilot2025" element={<AIEnterpriseCopilot2025 />} />
          <Route path="/pages/NewShowcase2025" element={<NewShowcase2025 />} />
          <Route path="/pages/AdvancedAITransformation2025" element={<AdvancedAITransformation2025 />} />
          <Route path="/pages/QuantumComputingRevolution2025" element={<QuantumComputingRevolution2025 />} />
          <Route path="/pages/NeuralInterfaceRevolution2025" element={<NeuralInterfaceRevolution2025 />} />
          <Route path="/pages/NextGenTechShowcase2025" element={<NextGenTechShowcase2025 />} />

          {/* 2026 Routes */}
          <Route path="/pages/BlogPost2026" element={<BlogPost2026 />} />
          <Route path="/pages/AdvancedTechSolutions2026" element={<AdvancedTechSolutions2026 />} />
          <Route path="/pages/UltimateServiceShowcase2026" element={<UltimateServiceShowcase2026 />} />
          <Route path="/pages/AIInnovationHub2026" element={<AIInnovationHub2026 />} />
          <Route path="/pages/ComprehensiveTechInsights2026" element={<ComprehensiveTechInsights2026 />} />
          <Route path="/pages/QuantumComputingSolutions2026" element={<QuantumComputingSolutions2026 />} />
          <Route path="/pages/AdvancedCybersecuritySuite2026" element={<AdvancedCybersecuritySuite2026 />} />
          <Route path="/pages/AIRevolutionaryBreakthrough2026" element={<AIRevolutionaryBreakthrough2026 />} />
          <Route path="/pages/QuantumBreakthroughs2026" element={<QuantumBreakthroughs2026 />} />
          <Route path="/pages/NeuralInterfaceRevolution2026" element={<NeuralInterfaceRevolution2026 />} />
          <Route path="/pages/SyntheticIntelligence2026" element={<SyntheticIntelligence2026 />} />
          <Route path="/pages/QuantumNeuralFusion2026" element={<QuantumNeuralFusion2026 />} />
          <Route path="/pages/CyberPhysicalSystems2026" element={<CyberPhysicalSystems2026 />} />
          <Route path="/pages/AdvancedBiotechSolutions2026" element={<AdvancedBiotechSolutions2026 />} />
          <Route path="/pages/NextGenAIRevolution2026" element={<NextGenAIRevolution2026 />} />
          <Route path="/pages/QuantumComputingRevolution2026" element={<QuantumComputingRevolution2026 />} />
          <Route path="/pages/RevolutionaryTechBlog2026" element={<RevolutionaryTechBlog2026 />} />
          <Route path="/pages/AdvancedTechTrends2026" element={<AdvancedTechTrends2026 />} />
          <Route path="/pages/TechnologyTrendsBlog2026" element={<TechnologyTrendsBlog2026 />} />
          <Route path="/pages/SpaceTechInnovation2026" element={<SpaceTechInnovation2026 />} />
          <Route path="/pages/AdvancedRobotics2026" element={<AdvancedRobotics2026 />} />

          {/* Component Routes */}
          <Route path="/enhanced-showcase" element={<EnhancedContentShowcase />} />
          <Route path="/revolutionary-showcase" element={<RevolutionaryTechShowcase2026 />} />

          {/* Other Routes */}
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

        <Footer />
      </div>
    </Router>
  );
}