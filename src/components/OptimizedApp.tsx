import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Header from './Header';
import Footer from './Footer';
import LazyLoader from './LazyLoader';

// Lazy load heavy components
const RevolutionaryTechShowcase2026 = lazy(() => import('../pages/RevolutionaryTechShowcase2026'));
const NextGenAIRevolution2026 = lazy(() => import('../pages/NextGenAIRevolution2026'));
const UltimateTechInsights2026 = lazy(() => import('../pages/UltimateTechInsights2026'));
const InteractiveTechShowcase2026 = lazy(() => import('./InteractiveTechShowcase2026'));
const ContentDiscovery2026 = lazy(() => import('./ContentDiscovery2026'));
const RevolutionaryContentShowcase2026 = lazy(() => import('./RevolutionaryContentShowcase2026'));

// Lazy load other pages
const InnovationLanding2025 = lazy(() => import('../pages/InnovationLanding2025'));
const InnovativeServicesShowcase2025 = lazy(() => import('../pages/InnovativeServicesShowcase2025'));
const BlogPost2025 = lazy(() => import('../pages/BlogPost2025'));
const AdvancedTechSolutions2025 = lazy(() => import('../pages/AdvancedTechSolutions2025'));
const FutureTechTrends2025 = lazy(() => import('../pages/FutureTechTrends2025'));
const ComprehensiveServices2025 = lazy(() => import('../pages/ComprehensiveServices2025'));
const AIInnovationPlaybook2025 = lazy(() => import('../pages/AIInnovationPlaybook2025'));
const TechnologyInsights2025 = lazy(() => import('../pages/TechnologyInsights2025'));
const AITransformationGuide2025 = lazy(() => import('../pages/AITransformationGuide2025'));
const QuantumComputingSolutions2025 = lazy(() => import('../pages/QuantumComputingSolutions2025'));
const NewAIUseCases2025 = lazy(() => import('../pages/NewAIUseCases2025'));
const EdgeAIandIoT2025 = lazy(() => import('../pages/EdgeAIandIoT2025'));
const AIInnovationHub2025 = lazy(() => import('../pages/AIInnovationHub2025'));
const DigitalTransformation2025 = lazy(() => import('../pages/DigitalTransformation2025'));
const AdvancedAnalytics2025 = lazy(() => import('../pages/AdvancedAnalytics2025'));
const CybersecurityFortress2025 = lazy(() => import('../pages/CybersecurityFortress2025'));
const AIRevolution2025 = lazy(() => import('../pages/AIRevolution2025'));
const QuantumComputingBreakthrough = lazy(() => import('../pages/QuantumComputingBreakthrough'));
const NeuralInterfaceFuture = lazy(() => import('../pages/NeuralInterfaceFuture'));
const AIEnterpriseCopilot2025 = lazy(() => import('../pages/AIEnterpriseCopilot2025'));
const NewShowcase2025 = lazy(() => import('../pages/NewShowcase2025'));
const BusinessAutomationGuide2025 = lazy(() => import('../pages/BusinessAutomationGuide2025'));
const AdvancedTechSolutions2026 = lazy(() => import('../pages/AdvancedTechSolutions2026'));
const InnovationShowcase2026 = lazy(() => import('../pages/InnovationShowcase2026'));
const AdvancedAITransformation2025 = lazy(() => import('../pages/AdvancedAITransformation2025'));
const QuantumComputingRevolution2025 = lazy(() => import('../pages/QuantumComputingRevolution2025'));
const NeuralInterfaceRevolution2025 = lazy(() => import('../pages/NeuralInterfaceRevolution2025'));
const NextGenTechShowcase2025 = lazy(() => import('../pages/NextGenTechShowcase2025'));
const AdvancedQuantumComputing2026 = lazy(() => import('../pages/AdvancedQuantumComputing2026'));
const NeuralInterfaceRevolution2026 = lazy(() => import('../pages/NeuralInterfaceRevolution2026'));
const AdvancedAISystems2026 = lazy(() => import('../pages/AdvancedAISystems2026'));
const SyntheticIntelligence2026 = lazy(() => import('../pages/SyntheticIntelligence2026'));
const QuantumNeuralFusion2026 = lazy(() => import('../pages/QuantumNeuralFusion2026'));
const EnhancedContentShowcase = lazy(() => import('./EnhancedContentShowcase'));
const NextGenAIRevolution2026 = lazy(() => import('../pages/NextGenAIRevolution2026'));
const QuantumComputingRevolution2026 = lazy(() => import('../pages/QuantumComputingRevolution2026'));
const RevolutionaryTechBlog2026 = lazy(() => import('../pages/RevolutionaryTechBlog2026'));
const RevolutionaryContentShowcase = lazy(() => import('./RevolutionaryContentShowcase'));
const ComprehensiveTechInsights2026 = lazy(() => import('../pages/ComprehensiveTechInsights2026'));
const AdvancedTechInsights2026 = lazy(() => import('../pages/AdvancedTechInsights2026'));
const FutureTechTrends2026 = lazy(() => import('../pages/FutureTechTrends2026'));
const EnhancedContentAdvertising = lazy(() => import('./EnhancedContentAdvertising'));
const AdvancedBiotechRevolution2026 = lazy(() => import('../pages/AdvancedBiotechRevolution2026'));
const SpaceTechInnovation2026 = lazy(() => import('../pages/SpaceTechInnovation2026'));
const AdvancedRobotics2026 = lazy(() => import('../pages/AdvancedRobotics2026'));
const UltimateContentShowcase2026 = lazy(() => import('./UltimateContentShowcase2026'));
const CaseStudyPage = lazy(() => import('../CaseStudyPage'));

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading amazing content...</p>
    </div>
  </div>
);

const OptimizedApp: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        
        <Suspense fallback={<LoadingFallback />}>
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
                      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
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
                        <a href="/pages/AdvancedBiotechRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                          🧬 Biotech 2026 →
                        </a>
                        <a href="/pages/SpaceTechInnovation2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                          🚀 Space Tech →
                        </a>
                        <a href="/pages/AdvancedRobotics2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                          🤖 Robotics →
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Lazy loaded components */}
                  <LazyLoader component={() => import('./RevolutionaryContentShowcase2026')} />
                  <LazyLoader component={() => import('./InteractiveTechShowcase2026')} />
                  <LazyLoader component={() => import('./ContentDiscovery2026')} />

                  {/* Hero Section */}
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
                      <a href="/pages/InnovationLanding2025" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
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
            
            {/* Lazy loaded routes */}
            <Route path="/pages/RevolutionaryTechShowcase2026" element={
              <LazyLoader component={() => import('../pages/RevolutionaryTechShowcase2026')} />
            } />
            <Route path="/pages/NextGenAIRevolution2026" element={
              <LazyLoader component={() => import('../pages/NextGenAIRevolution2026')} />
            } />
            <Route path="/pages/UltimateTechInsights2026" element={
              <LazyLoader component={() => import('../pages/UltimateTechInsights2026')} />
            } />
            <Route path="/pages/InnovationLanding2025" element={
              <LazyLoader component={() => import('../pages/InnovationLanding2025')} />
            } />
            <Route path="/pages/InnovativeServicesShowcase2025" element={
              <LazyLoader component={() => import('../pages/InnovativeServicesShowcase2025')} />
            } />
            <Route path="/pages/BlogPost2025" element={
              <LazyLoader component={() => import('../pages/BlogPost2025')} />
            } />
            <Route path="/pages/AdvancedTechSolutions2025" element={
              <LazyLoader component={() => import('../pages/AdvancedTechSolutions2025')} />
            } />
            <Route path="/pages/FutureTechTrends2025" element={
              <LazyLoader component={() => import('../pages/FutureTechTrends2025')} />
            } />
            <Route path="/pages/ComprehensiveServices2025" element={
              <LazyLoader component={() => import('../pages/ComprehensiveServices2025')} />
            } />
            <Route path="/pages/AIInnovationPlaybook2025" element={
              <LazyLoader component={() => import('../pages/AIInnovationPlaybook2025')} />
            } />
            <Route path="/pages/TechnologyInsights2025" element={
              <LazyLoader component={() => import('../pages/TechnologyInsights2025')} />
            } />
            <Route path="/pages/AITransformationGuide2025" element={
              <LazyLoader component={() => import('../pages/AITransformationGuide2025')} />
            } />
            <Route path="/pages/QuantumComputingSolutions2025" element={
              <LazyLoader component={() => import('../pages/QuantumComputingSolutions2025')} />
            } />
            <Route path="/pages/NewAIUseCases2025" element={
              <LazyLoader component={() => import('../pages/NewAIUseCases2025')} />
            } />
            <Route path="/pages/EdgeAIandIoT2025" element={
              <LazyLoader component={() => import('../pages/EdgeAIandIoT2025')} />
            } />
            <Route path="/pages/AIInnovationHub2025" element={
              <LazyLoader component={() => import('../pages/AIInnovationHub2025')} />
            } />
            <Route path="/pages/DigitalTransformation2025" element={
              <LazyLoader component={() => import('../pages/DigitalTransformation2025')} />
            } />
            <Route path="/pages/AdvancedAnalytics2025" element={
              <LazyLoader component={() => import('../pages/AdvancedAnalytics2025')} />
            } />
            <Route path="/pages/CybersecurityFortress2025" element={
              <LazyLoader component={() => import('../pages/CybersecurityFortress2025')} />
            } />
            <Route path="/pages/AIRevolution2025" element={
              <LazyLoader component={() => import('../pages/AIRevolution2025')} />
            } />
            <Route path="/pages/QuantumComputingBreakthrough" element={
              <LazyLoader component={() => import('../pages/QuantumComputingBreakthrough')} />
            } />
            <Route path="/pages/NeuralInterfaceFuture" element={
              <LazyLoader component={() => import('../pages/NeuralInterfaceFuture')} />
            } />
            <Route path="/pages/AIEnterpriseCopilot2025" element={
              <LazyLoader component={() => import('../pages/AIEnterpriseCopilot2025')} />
            } />
            <Route path="/pages/NewShowcase2025" element={
              <LazyLoader component={() => import('../pages/NewShowcase2025')} />
            } />
            <Route path="/pages/BusinessAutomationGuide2025" element={
              <LazyLoader component={() => import('../pages/BusinessAutomationGuide2025')} />
            } />
            <Route path="/pages/AdvancedTechSolutions2026" element={
              <LazyLoader component={() => import('../pages/AdvancedTechSolutions2026')} />
            } />
            <Route path="/pages/InnovationShowcase2026" element={
              <LazyLoader component={() => import('../pages/InnovationShowcase2026')} />
            } />
            <Route path="/pages/AdvancedAITransformation2025" element={
              <LazyLoader component={() => import('../pages/AdvancedAITransformation2025')} />
            } />
            <Route path="/pages/QuantumComputingRevolution2025" element={
              <LazyLoader component={() => import('../pages/QuantumComputingRevolution2025')} />
            } />
            <Route path="/pages/NeuralInterfaceRevolution2025" element={
              <LazyLoader component={() => import('../pages/NeuralInterfaceRevolution2025')} />
            } />
            <Route path="/pages/NextGenTechShowcase2025" element={
              <LazyLoader component={() => import('../pages/NextGenTechShowcase2025')} />
            } />
            <Route path="/pages/AdvancedQuantumComputing2026" element={
              <LazyLoader component={() => import('../pages/AdvancedQuantumComputing2026')} />
            } />
            <Route path="/pages/NeuralInterfaceRevolution2026" element={
              <LazyLoader component={() => import('../pages/NeuralInterfaceRevolution2026')} />
            } />
            <Route path="/pages/AdvancedAISystems2026" element={
              <LazyLoader component={() => import('../pages/AdvancedAISystems2026')} />
            } />
            <Route path="/pages/SyntheticIntelligence2026" element={
              <LazyLoader component={() => import('../pages/SyntheticIntelligence2026')} />
            } />
            <Route path="/pages/QuantumNeuralFusion2026" element={
              <LazyLoader component={() => import('../pages/QuantumNeuralFusion2026')} />
            } />
            <Route path="/pages/AdvancedBiotechRevolution2026" element={
              <LazyLoader component={() => import('../pages/AdvancedBiotechRevolution2026')} />
            } />
            <Route path="/pages/SpaceTechInnovation2026" element={
              <LazyLoader component={() => import('../pages/SpaceTechInnovation2026')} />
            } />
            <Route path="/pages/AdvancedRobotics2026" element={
              <LazyLoader component={() => import('../pages/AdvancedRobotics2026')} />
            } />
            <Route path="/case-studies/:slug" element={
              <LazyLoader component={() => import('../CaseStudyPage')} />
            } />
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
        </Suspense>
        
        <Footer />
      </div>
    </Router>
  );
};

export default OptimizedApp;