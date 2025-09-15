import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './src/ScrollToTop';
import Header from './src/Header';
import Footer from './src/Footer';
import CaseStudyPage from './src/CaseStudyPage';
import InteractiveTechShowcase from './src/components/InteractiveTechShowcase';
import './src/index.css';
import EnhancedHeroSection from './src/components/EnhancedHeroSection';
import FeaturedContentSection from './src/components/FeaturedContentSection';
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
import DynamicContentCarousel from './src/components/DynamicContentCarousel';
import AdvancedAITransformation2025 from './src/pages/AdvancedAITransformation2025';
import QuantumComputingRevolution2025 from './src/pages/QuantumComputingRevolution2025';
import NeuralInterfaceRevolution2025 from './src/pages/NeuralInterfaceRevolution2025';
import NextGenTechShowcase2025 from './src/pages/NextGenTechShowcase2025';
import AdvancedQuantumComputing2026 from './src/pages/AdvancedQuantumComputing2026';
import NeuralInterfaceRevolution2026 from './src/pages/NeuralInterfaceRevolution2026';
import AdvancedAISystems2026 from './src/pages/AdvancedAISystems2026';
import RevolutionaryContentShowcase2026 from './src/components/RevolutionaryContentShowcase2026';
import SyntheticIntelligence2026 from './src/pages/SyntheticIntelligence2026';
import QuantumNeuralFusion2026 from './src/pages/QuantumNeuralFusion2026';
import EnhancedContentShowcase from './src/components/EnhancedContentShowcase';
import AI2026RevolutionaryBreakthrough from './src/pages/AI2026RevolutionaryBreakthrough';
import QuantumComputingBreakthrough2026 from './src/pages/QuantumComputingBreakthrough2026';
import RevolutionaryTechBlog2026 from './src/pages/RevolutionaryTechBlog2026';
import RevolutionaryContentShowcase from './src/components/RevolutionaryContentShowcase';
import ComprehensiveTechInsights2026 from './src/pages/ComprehensiveTechInsights2026';
import AdvancedAnalyticsDashboard2026 from './src/pages/AdvancedAnalyticsDashboard2026';
import BiotechRevolution2026 from './src/pages/BiotechRevolution2026';
import SpaceTechInnovation2026 from './src/pages/SpaceTechInnovation2026';
import NewContentShowcase2026 from './src/components/NewContentShowcase2026';
import InteractiveContentShowcase2026 from './src/components/InteractiveContentShowcase2026';
import AITrends2026Blog from './src/pages/AITrends2026Blog';
import QuantumBreakthroughs2026Blog from './src/pages/QuantumBreakthroughs2026Blog';
import AIConsultingServices2026 from './src/pages/AIConsultingServices2026';

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
                  <div className="absolute top-0 left-0 w-full h-full">
                    {[...Array(50)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 3}s`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <span className="text-4xl animate-bounce">🚀</span>
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
                        REVOLUTIONARY BREAKTHROUGH CONTENT 2026
                      </h3>
                      <span className="text-4xl animate-bounce">🚀</span>
                    </div>
                    <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
                      Experience the future of technology with our groundbreaking new content on Advanced Quantum Computing, 
                      Neural Interface Revolution, Advanced AI Systems, and cutting-edge 2026 technologies
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
                      <a href="/pages/AdvancedQuantumComputing2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        ⚛️ Quantum 2026 →
                      </a>
                      <a href="/pages/NeuralInterfaceRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        🧬 Neural 2026 →
                      </a>
                      <a href="/pages/AdvancedAISystems2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        🤖 AI Systems 2026 →
                      </a>
                      <a href="/pages/SyntheticIntelligence2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        🧠 Synthetic AI →
                      </a>
                      <a href="/pages/QuantumNeuralFusion2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        ⚡ Quantum-Neural →
                      </a>
                      <a href="/pages/EnhancedContentShowcase" className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        🌟 Enhanced Showcase →
                      </a>
                      <a href="/pages/AITrends2026Blog" className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        📝 AI Trends Blog →
                      </a>
                      <a href="/pages/QuantumBreakthroughs2026Blog" className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        ⚛️ Quantum Blog →
                      </a>
                      <a href="/pages/AIConsultingServices2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        🛠️ AI Consulting →
                      </a>
                      <a href="/interactive-showcase" className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        🎮 Interactive Demo →
                      </a>
                    </div>
                  </div>
                </div>

                {/* NEW: Enhanced Content Showcase 2026 */}
                <div className="mb-12">
                  <NewContentShowcase2026 />
                </div>

                {/* Revolutionary Content Showcase 2026 */}
                <div className="mb-12">
                  <RevolutionaryContentShowcase2026 />
                </div>

                {/* NEW: Interactive Content Showcase 2026 */}
                <div className="mb-12">
                  <InteractiveContentShowcase2026 />
                </div>

                {/* NEW: Latest Blog Posts and Services */}
                <div className="mb-12">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Content & Services</h2>
                    <p className="text-xl text-gray-600">Discover our newest blog posts, services, and interactive content</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* AI Trends Blog */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                        🤖
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">AI Trends 2026</h3>
                      <p className="text-gray-600 mb-4">
                        Explore the revolutionary AI trends that are reshaping industries and transforming how we work and live.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">8 min read</span>
                        <a href="/pages/AITrends2026Blog" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                          Read More →
                        </a>
                      </div>
                    </div>

                    {/* Quantum Breakthroughs Blog */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                        ⚛️
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Quantum Breakthroughs 2026</h3>
                      <p className="text-gray-600 mb-4">
                        Discover the groundbreaking advances that are making quantum computing practical for real-world applications.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">10 min read</span>
                        <a href="/pages/QuantumBreakthroughs2026Blog" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                          Read More →
                        </a>
                      </div>
                    </div>

                    {/* AI Consulting Services */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                        🛠️
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">AI Consulting Services</h3>
                      <p className="text-gray-600 mb-4">
                        Transform your business with cutting-edge AI solutions. Expert consultants help you navigate the AI revolution.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Professional Services</span>
                        <a href="/pages/AIConsultingServices2026" className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                          Learn More →
                        </a>
                      </div>
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
                    <a href="/pages/TechnologyInsights2025" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🔮 Tech Insights 2025
                    </a>
                    <a href="/pages/AITransformationGuide2025" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🤖 AI Transformation
                    </a>
                    <a href="/pages/QuantumComputingSolutions2025" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      ⚡ Quantum Computing
                    </a>
                    <a href="/pages/ComprehensiveServices2025" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🚀 All Services
                    </a>
                    <a href="/pages/InnovationLanding2025" className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center">
                      🌟 Innovation 2025
                    </a>
                    <a href="/pages/AdvancedTechSolutions2025" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      ⚡ Advanced Solutions
                    </a>
                    <a href="/pages/FutureTechTrends2025" className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🔮 Future Trends
                    </a>
                    <a href="/pages/AIInnovationPlaybook2025" className="border-2 border-purple-600 text-purple-600 px-4 py-3 rounded-lg hover:bg-purple-50 transition-colors text-center font-semibold">
                      📘 AI Playbook
                    </a>
                    <a href="/pages/NewAIUseCases2025" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🎯 AI Use Cases
                    </a>
                    <a href="/pages/EdgeAIandIoT2025" className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🌐 Edge AI & IoT
                    </a>
                    <a href="/pages/AIInnovationHub2025" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🏢 Innovation Hub
                    </a>
                    <a href="/pages/DigitalTransformation2025" className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🔄 Digital Transform
                    </a>
                  </div>
                </div>

                {/* Enhanced Hero Section */}
                <div className="mb-12">
                  <EnhancedHeroSection />
                </div>

                {/* Featured Content Section */}
                <div className="mb-12">
                  <FeaturedContentSection />
                </div>

                {/* Dynamic Content Carousel */}
                <div className="mb-12">
                  <DynamicContentCarousel />
                </div>

                {/* Interactive Tech Showcase */}
                <div className="mb-12">
                  <InteractiveTechShowcase />
                </div>
              </main>
            </div>
          } />
          
          {/* Route definitions */}
          <Route path="/pages/TechnologyInsights2025" element={<TechnologyInsights2025 />} />
          <Route path="/pages/AITransformationGuide2025" element={<AITransformationGuide2025 />} />
          <Route path="/pages/QuantumComputingSolutions2025" element={<QuantumComputingSolutions2025 />} />
          <Route path="/pages/ComprehensiveServices2025" element={<ComprehensiveServices2025 />} />
          <Route path="/pages/InnovationLanding2025" element={<InnovationLanding2025 />} />
          <Route path="/pages/AdvancedTechSolutions2025" element={<AdvancedTechSolutions2025 />} />
          <Route path="/pages/FutureTechTrends2025" element={<FutureTechTrends2025 />} />
          <Route path="/pages/AIInnovationPlaybook2025" element={<AIInnovationPlaybook2025 />} />
          <Route path="/pages/NewAIUseCases2025" element={<NewAIUseCases2025 />} />
          <Route path="/pages/EdgeAIandIoT2025" element={<EdgeAIandIoT2025 />} />
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
          <Route path="/pages/AdvancedQuantumComputing2026" element={<AdvancedQuantumComputing2026 />} />
          <Route path="/pages/NeuralInterfaceRevolution2026" element={<NeuralInterfaceRevolution2026 />} />
          <Route path="/pages/AdvancedAISystems2026" element={<AdvancedAISystems2026 />} />
          <Route path="/pages/SyntheticIntelligence2026" element={<SyntheticIntelligence2026 />} />
          <Route path="/pages/QuantumNeuralFusion2026" element={<QuantumNeuralFusion2026 />} />
          <Route path="/enhanced-showcase" element={<EnhancedContentShowcase />} />
          <Route path="/pages/NextGenAIRevolution2026" element={<NextGenAIRevolution2026 />} />
          <Route path="/pages/QuantumComputingRevolution2026" element={<QuantumComputingRevolution2026 />} />
          <Route path="/pages/RevolutionaryTechBlog2026" element={<RevolutionaryTechBlog2026 />} />
          <Route path="/revolutionary-showcase" element={<RevolutionaryContentShowcase />} />
          <Route path="/pages/ComprehensiveTechInsights2026" element={<ComprehensiveTechInsights2026 />} />
          <Route path="/pages/AdvancedAnalyticsDashboard2026" element={<AdvancedAnalyticsDashboard2026 />} />
          <Route path="/pages/BiotechRevolution2026" element={<BiotechRevolution2026 />} />
          <Route path="/pages/SpaceTechInnovation2026" element={<SpaceTechInnovation2026 />} />
          <Route path="/pages/AITrends2026Blog" element={<AITrends2026Blog />} />
          <Route path="/pages/QuantumBreakthroughs2026Blog" element={<QuantumBreakthroughs2026Blog />} />
          <Route path="/pages/AIConsultingServices2026" element={<AIConsultingServices2026 />} />
          <Route path="/interactive-showcase" element={<InteractiveContentShowcase2026 />} />
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