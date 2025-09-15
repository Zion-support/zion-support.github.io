import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CaseStudyPage from './src/CaseStudyPage';
import './src/index.css';

// Import existing pages
import AdvancedAnalytics2025 from './src/pages/AdvancedAnalytics2025';
import AdvancedTechSolutions2025 from './src/pages/AdvancedTechSolutions2025';
import AIEnterpriseCopilot2025 from './src/pages/AIEnterpriseCopilot2025';
import AIInnovationHub2025 from './src/pages/AIInnovationHub2025';
import AIInnovationPlaybook2025 from './src/pages/AIInnovationPlaybook2025';
import AIRevolution2025 from './src/pages/AIRevolution2025';
import AITransformationGuide2025 from './src/pages/AITransformationGuide2025';
import BlogPost2025 from './src/pages/BlogPost2025';
import ComprehensiveServices2025 from './src/pages/ComprehensiveServices2025';
import CybersecurityFortress2025 from './src/pages/CybersecurityFortress2025';
import DigitalTransformation2025 from './src/pages/DigitalTransformation2025';
import EdgeAIandIoT2025 from './src/pages/EdgeAIandIoT2025';
import FutureTechTrends2025 from './src/pages/FutureTechTrends2025';
import InnovationLanding2025 from './src/pages/InnovationLanding2025';
import InnovativeServicesShowcase2025 from './src/pages/InnovativeServicesShowcase2025';
import NeuralInterfaceFuture from './src/pages/NeuralInterfaceFuture';
import NewAIUseCases2025 from './src/pages/NewAIUseCases2025';
import NewShowcase2025 from './src/pages/NewShowcase2025';
import QuantumComputingBreakthrough from './src/pages/QuantumComputingBreakthrough';
import QuantumComputingSolutions2025 from './src/pages/QuantumComputingSolutions2025';
import TechnologyInsights2025 from './src/pages/TechnologyInsights2025';

// Import 2026 pages
import AdvancedAITransformation2026 from './src/pages/AdvancedAITransformation2026';
import AIRevolutionaryBreakthrough2026 from './src/pages/AIRevolutionaryBreakthrough2026';
import ComprehensiveTechInsights2026 from './src/pages/ComprehensiveTechInsights2026';
import ComprehensiveTechShowcase2026 from './src/pages/ComprehensiveTechShowcase2026';
import FutureTechTrends2026 from './src/pages/FutureTechTrends2026';
import NeuralInterfaceRevolution2026 from './src/pages/NeuralInterfaceRevolution2026';
import NextGenAIRevolution2026 from './src/pages/NextGenAIRevolution2026';
import NextGenTechShowcase2026 from './src/pages/NextGenTechShowcase2026';
import QuantumComputingRevolution2026 from './src/pages/QuantumComputingRevolution2026';
import QuantumNeuralFusion2026 from './src/pages/QuantumNeuralFusion2026';
import RevolutionaryAIContent2026 from './src/pages/RevolutionaryAIContent2026';
import RevolutionaryTechBlog2026 from './src/pages/RevolutionaryTechBlog2026';
import SyntheticIntelligence2026 from './src/pages/SyntheticIntelligence2026';

// Import components
import EnhancedContentShowcase from './src/components/EnhancedContentShowcase';
import RevolutionaryContentShowcase from './src/components/RevolutionaryContentShowcase';

export default function App(): JSX.Element {
  return (
    <Router>
      <div className="min-h-screen bg-white">
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
                    <div className="mt-6">
                      <a href="/pages/RevolutionaryAIContent2026" className="inline-block bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg border-2 border-white/30">
                        🌟 NEW: Revolutionary AI Content 2026 →
                      </a>
                      <a href="/pages/FutureTechTrends2026" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg border-2 border-white/30 ml-4">
                        🔮 NEW: Future Tech Trends 2026 →
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
                    <a href="/pages/RevolutionaryAIContent2026" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center animate-pulse">
                      🌟 NEW: Revolutionary AI Content
                    </a>
                    <a href="/pages/FutureTechTrends2026" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center animate-pulse">
                      🔮 NEW: Future Tech Trends
                    </a>
                    <a href="/pages/ComprehensiveTechShowcase2026" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center animate-pulse">
                      🚀 NEW: Tech Showcase
                    </a>
                    <a href="/pages/AdvancedAITransformation2026" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🧠 AI Transformation
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
          
          {/* 2025 Pages */}
          <Route path="/pages/InnovationLanding2025" element={<InnovationLanding2025 />} />
          <Route path="/pages/InnovativeServicesShowcase2025" element={<InnovativeServicesShowcase2025 />} />
          <Route path="/pages/BlogPost2025" element={<BlogPost2025 />} />
          <Route path="/pages/AdvancedTechSolutions2025" element={<AdvancedTechSolutions2025 />} />
          <Route path="/pages/FutureTechTrends2025" element={<FutureTechTrends2025 />} />
          <Route path="/pages/ComprehensiveServices2025" element={<ComprehensiveServices2025 />} />
          <Route path="/pages/AIInnovationPlaybook2025" element={<AIInnovationPlaybook2025 />} />
          <Route path="/pages/TechnologyInsights2025" element={<TechnologyInsights2025 />} />
          <Route path="/pages/AITransformationGuide2025" element={<AITransformationGuide2025 />} />
          <Route path="/pages/QuantumComputingSolutions2025" element={<QuantumComputingSolutions2025 />} />
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
          <Route path="/pages/RevolutionaryAIContent2026" element={<RevolutionaryAIContent2026 />} />
          <Route path="/pages/FutureTechTrends2026" element={<FutureTechTrends2026 />} />
          <Route path="/pages/ComprehensiveTechShowcase2026" element={<ComprehensiveTechShowcase2026 />} />
          
          {/* Component Routes */}
          <Route path="/enhanced-showcase" element={<EnhancedContentShowcase />} />
          <Route path="/revolutionary-showcase" element={<RevolutionaryContentShowcase />} />
          <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
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