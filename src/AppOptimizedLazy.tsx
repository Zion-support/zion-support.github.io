import React, { Suspense, lazy }  from 'react';
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Header from './Header';
import Footer from './Footer';
import './index.css';

// Lazy load components for better performance
const EnhancedHeroSection = lazy(() => import('./components/EnhancedHeroSection'));
const FeaturedContentSection = lazy(() => import('./components/FeaturedContentSection'));
const DynamicContentCarousel = lazy(() => import('./components/DynamicContentCarousel'));
const InteractiveTechShowcase = lazy(() => import('./components/InteractiveTechShowcase'));
const PerformanceOptimizer = lazy(() => import('./components/PerformanceOptimizer'));
const RevolutionaryContentBanner2026 = lazy(() => import('./components/RevolutionaryContentBanner2026'));
const RevolutionaryContentBanner2027 = lazy(() => import('./components/RevolutionaryContentBanner2027'));
const UltimateContentShowcase2027 = lazy(() => import('./components/UltimateContentShowcase2027'));

// Lazy load pages
const NewShowcase2025 = lazy(() => import('./pages/NewShowcase2025'));
const AIEnterpriseCopilot2025 = lazy(() => import('./pages/AIEnterpriseCopilot2025'));
const NeuralInterfaceFuture = lazy(() => import('./pages/NeuralInterfaceFuture'));
const AdvancedTechSolutions2026 = lazy(() => import('./pages/AdvancedTechSolutions2026'));
const InnovationShowcase2026 = lazy(() => import('./pages/InnovationShowcase2026'));
const AdvancedAITransformation2025 = lazy(() => import('./pages/AdvancedAITransformation2025'));
const QuantumComputingRevolution2025 = lazy(() => import('./pages/QuantumComputingRevolution2025'));
const NeuralInterfaceRevolution2025 = lazy(() => import('./pages/NeuralInterfaceRevolution2025'));
const NextGenTechShowcase2025 = lazy(() => import('./pages/NextGenTechShowcase2025'));
const AdvancedQuantumComputing2026 = lazy(() => import('./pages/AdvancedQuantumComputing2026'));
const NeuralInterfaceRevolution2026 = lazy(() => import('./pages/NeuralInterfaceRevolution2026'));
const AdvancedAISystems2026 = lazy(() => import('./pages/AdvancedAISystems2026'));
const SyntheticIntelligence2026 = lazy(() => import('./pages/SyntheticIntelligence2026'));
const QuantumNeuralFusion2026 = lazy(() => import('./pages/QuantumNeuralFusion2026'));
const NextGenAIRevolution2026 = lazy(() => import('./pages/NextGenAIRevolution2026'));
const QuantumComputingRevolution2026 = lazy(() => import('./pages/QuantumComputingRevolution2026'));
const RevolutionaryTechBlog2026 = lazy(() => import('./pages/RevolutionaryTechBlog2026'));
const ComprehensiveTechInsights2026 = lazy(() => import('./pages/ComprehensiveTechInsights2026'));
const AdvancedAnalyticsDashboard2026 = lazy(() => import('./pages/AdvancedAnalyticsDashboard2026'));
const BiotechRevolution2026 = lazy(() => import('./pages/BiotechRevolution2026'));
const SpaceTechInnovation2026 = lazy(() => import('./pages/SpaceTechInnovation2026'));
const AIInnovationHub2026 = lazy(() => import('./pages/AIInnovationHub2026'));
const UltimateTechShowcase2026 = lazy(() => import('./pages/UltimateTechShowcase2026'));
const UltimateTechRevolution2027 = lazy(() => import('./pages/UltimateTechRevolution2027'));
const TranscendentAI2027 = lazy(() => import('./pages/TranscendentAI2027'));
const QuantumConsciousnessRevolution2027 = lazy(() => import('./pages/QuantumConsciousnessRevolution2027'));
const SyntheticBiologyRevolution2027 = lazy(() => import('./pages/SyntheticBiologyRevolution2027'));
const SpaceTimeComputing2027 = lazy(() => import('./pages/SpaceTimeComputing2027'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
  </div>
);

export default function AppOptimizedLazy(): React.JSX.Element {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={
              <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                <main className="container mx-auto px-4 py-8">
                  {/* Revolutionary New Content Banner */};
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
                            animationDelay: `${Math.random() * 3}s`
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
                      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 max-w-7xl mx-auto">
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
                          🧠 Synthetic AI 2026 →
                        </a>
                        <a href="/pages/QuantumNeuralFusion2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                          ⚡ Quantum Neural →
                        </a>
                        <a href="/pages/NextGenAIRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                          🚀 Next-Gen AI →
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Hero Section */};
                  <Suspense fallback={<div className="h-96 bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse rounded-2xl"></div>}>
                    <EnhancedHeroSection />
                  </Suspense>

                  {/* Revolutionary Content Banners */};
                  <Suspense fallback={<div className="h-32 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse rounded-xl mb-8"></div>}>
                    <RevolutionaryContentBanner2026 />
                  </Suspense>
                  
                  <Suspense fallback={<div className="h-32 bg-gradient-to-r from-green-400 to-blue-400 animate-pulse rounded-xl mb-8"></div>}>
                    <RevolutionaryContentBanner2027 />
                  </Suspense>

                  {/* Featured Content Section */};
                  <Suspense fallback={<div className="h-64 bg-gradient-to-r from-yellow-400 to-red-400 animate-pulse rounded-2xl mb-8"></div>}>
                    <FeaturedContentSection />
                  </Suspense>

                  {/* Interactive Tech Showcase */};
                  <Suspense fallback={<div className="h-80 bg-gradient-to-r from-indigo-400 to-purple-400 animate-pulse rounded-2xl mb-8"></div>}>
                    <InteractiveTechShowcase />
                  </Suspense>

                  {/* Dynamic Content Carousel */};
                  <Suspense fallback={<div className="h-64 bg-gradient-to-r from-pink-400 to-yellow-400 animate-pulse rounded-2xl mb-8"></div>}>
                    <DynamicContentCarousel />
                  </Suspense>

                  {/* Ultimate Content Showcase 2027 */};
                  <Suspense fallback={<div className="h-96 bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse rounded-2xl mb-8"></div>}>
                    <UltimateContentShowcase2027 />
                  </Suspense>

                  {/* Performance Optimizer */};
                  <Suspense fallback={<div className="h-32 bg-gradient-to-r from-emerald-400 to-teal-400 animate-pulse rounded-xl"></div>}>
                    <PerformanceOptimizer />
                  </Suspense>
                </main>
              </div>
            } />

            {/* Lazy-loaded routes */};
            <Route path="/pages/NewShowcase2025" element={<Suspense fallback={<LoadingSpinner />}><NewShowcase2025 /></Suspense>} />
            <Route path="/pages/AIEnterpriseCopilot2025" element={<Suspense fallback={<LoadingSpinner />}><AIEnterpriseCopilot2025 /></Suspense>} />
            <Route path="/pages/NeuralInterfaceFuture" element={<Suspense fallback={<LoadingSpinner />}><NeuralInterfaceFuture /></Suspense>} />
            <Route path="/pages/AdvancedTechSolutions2026" element={<Suspense fallback={<LoadingSpinner />}><AdvancedTechSolutions2026 /></Suspense>} />
            <Route path="/pages/InnovationShowcase2026" element={<Suspense fallback={<LoadingSpinner />}><InnovationShowcase2026 /></Suspense>} />
            <Route path="/pages/AdvancedAITransformation2025" element={<Suspense fallback={<LoadingSpinner />}><AdvancedAITransformation2025 /></Suspense>} />
            <Route path="/pages/QuantumComputingRevolution2025" element={<Suspense fallback={<LoadingSpinner />}><QuantumComputingRevolution2025 /></Suspense>} />
            <Route path="/pages/NeuralInterfaceRevolution2025" element={<Suspense fallback={<LoadingSpinner />}><NeuralInterfaceRevolution2025 /></Suspense>} />
            <Route path="/pages/NextGenTechShowcase2025" element={<Suspense fallback={<LoadingSpinner />}><NextGenTechShowcase2025 /></Suspense>} />
            <Route path="/pages/AdvancedQuantumComputing2026" element={<Suspense fallback={<LoadingSpinner />}><AdvancedQuantumComputing2026 /></Suspense>} />
            <Route path="/pages/NeuralInterfaceRevolution2026" element={<Suspense fallback={<LoadingSpinner />}><NeuralInterfaceRevolution2026 /></Suspense>} />
            <Route path="/pages/AdvancedAISystems2026" element={<Suspense fallback={<LoadingSpinner />}><AdvancedAISystems2026 /></Suspense>} />
            <Route path="/pages/SyntheticIntelligence2026" element={<Suspense fallback={<LoadingSpinner />}><SyntheticIntelligence2026 /></Suspense>} />
            <Route path="/pages/QuantumNeuralFusion2026" element={<Suspense fallback={<LoadingSpinner />}><QuantumNeuralFusion2026 /></Suspense>} />
            <Route path="/pages/NextGenAIRevolution2026" element={<Suspense fallback={<LoadingSpinner />}><NextGenAIRevolution2026 /></Suspense>} />
            <Route path="/pages/QuantumComputingRevolution2026" element={<Suspense fallback={<LoadingSpinner />}><QuantumComputingRevolution2026 /></Suspense>} />
            <Route path="/pages/RevolutionaryTechBlog2026" element={<Suspense fallback={<LoadingSpinner />}><RevolutionaryTechBlog2026 /></Suspense>} />
            <Route path="/pages/ComprehensiveTechInsights2026" element={<Suspense fallback={<LoadingSpinner />}><ComprehensiveTechInsights2026 /></Suspense>} />
            <Route path="/pages/AdvancedAnalyticsDashboard2026" element={<Suspense fallback={<LoadingSpinner />}><AdvancedAnalyticsDashboard2026 /></Suspense>} />
            <Route path="/pages/BiotechRevolution2026" element={<Suspense fallback={<LoadingSpinner />}><BiotechRevolution2026 /></Suspense>} />
            <Route path="/pages/SpaceTechInnovation2026" element={<Suspense fallback={<LoadingSpinner />}><SpaceTechInnovation2026 /></Suspense>} />
            <Route path="/pages/AIInnovationHub2026" element={<Suspense fallback={<LoadingSpinner />}><AIInnovationHub2026 /></Suspense>} />
            <Route path="/pages/UltimateTechShowcase2026" element={<Suspense fallback={<LoadingSpinner />}><UltimateTechShowcase2026 /></Suspense>} />
            <Route path="/pages/UltimateTechRevolution2027" element={<Suspense fallback={<LoadingSpinner />}><UltimateTechRevolution2027 /></Suspense>} />
            <Route path="/pages/TranscendentAI2027" element={<Suspense fallback={<LoadingSpinner />}><TranscendentAI2027 /></Suspense>} />
            <Route path="/pages/QuantumConsciousnessRevolution2027" element={<Suspense fallback={<LoadingSpinner />}><QuantumConsciousnessRevolution2027 /></Suspense>} />
            <Route path="/pages/SyntheticBiologyRevolution2027" element={<Suspense fallback={<LoadingSpinner />}><SyntheticBiologyRevolution2027 /></Suspense>} />
            <Route path="/pages/SpaceTimeComputing2027" element={<Suspense fallback={<LoadingSpinner />}><SpaceTimeComputing2027 /></Suspense>} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </Router>
  );
}