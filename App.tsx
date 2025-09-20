import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './src/ScrollToTop';
import Header from './src/Header';
import Footer from './src/Footer';
import EnhancedHeroSection from './src/components/EnhancedHeroSection';
import FeaturedContentSection from './src/components/FeaturedContentSection';
import CaseStudyPage from './src/CaseStudyPage';

// Lazy load components for better performance
const InnovationLanding2025 = lazy(() => import('./src/pages/InnovationLanding2025'));
const InnovativeServicesShowcase2025 = lazy(() => import('./src/pages/InnovativeServicesShowcase2025'));
const BlogPost2025 = lazy(() => import('./src/pages/BlogPost2025'));
const AdvancedTechSolutions2025 = lazy(() => import('./src/pages/AdvancedTechSolutions2025'));
const NewAIUseCases2025 = lazy(() => import('./src/pages/NewAIUseCases2025'));
const EdgeAIandIoT2025 = lazy(() => import('./src/pages/EdgeAIandIoT2025'));
const FutureTechTrends2025 = lazy(() => import('./src/pages/FutureTechTrends2025'));
const ComprehensiveServices2025 = lazy(() => import('./src/pages/ComprehensiveServices2025'));
const AIInnovationPlaybook2025 = lazy(() => import('./src/pages/AIInnovationPlaybook2025'));
const TechnologyInsights2025 = lazy(() => import('./src/pages/TechnologyInsights2025'));
const AITransformationGuide2025 = lazy(() => import('./src/pages/AITransformationGuide2025'));
const QuantumComputingSolutions2025 = lazy(() => import('./src/pages/QuantumComputingSolutions2025'));
const AIInnovationHub2025 = lazy(() => import('./src/pages/AIInnovationHub2025'));
const DigitalTransformation2025 = lazy(() => import('./src/pages/DigitalTransformation2025'));
const AdvancedAnalytics2025 = lazy(() => import('./src/pages/AdvancedAnalytics2025'));
const CybersecurityFortress2025 = lazy(() => import('./src/pages/CybersecurityFortress2025'));
const AIRevolution2025 = lazy(() => import('./src/pages/AIRevolution2025'));
const QuantumComputingBreakthrough = lazy(() => import('./src/pages/QuantumComputingBreakthrough'));
const NeuralInterfaceFuture = lazy(() => import('./src/pages/NeuralInterfaceFuture'));
const DynamicContentCarousel = lazy(() => import('./src/components/DynamicContentCarousel'));
const InteractiveTechShowcase = lazy(() => import('./src/components/InteractiveTechShowcase'));
const AIEnterpriseCopilot2025 = lazy(() => import('./src/pages/AIEnterpriseCopilot2025'));
const NewShowcase2025 = lazy(() => import('./src/pages/NewShowcase2025'));
const AdvancedAITransformation2025 = lazy(() => import('./src/pages/AdvancedAITransformation2025'));
const QuantumComputingRevolution2025 = lazy(() => import('./src/pages/QuantumComputingRevolution2025'));
const NeuralInterfaceRevolution2025 = lazy(() => import('./src/pages/NeuralInterfaceRevolution2025'));
const NextGenTechShowcase2025 = lazy(() => import('./src/pages/NextGenTechShowcase2025'));
const SyntheticIntelligence2026 = lazy(() => import('./src/pages/SyntheticIntelligence2026'));
const QuantumNeuralFusion2026 = lazy(() => import('./src/pages/QuantumNeuralFusion2026'));
const AdvancedQuantumComputing2026 = lazy(() => import('./src/pages/AdvancedQuantumComputing2026'));
const NeuralInterfaceRevolution2026 = lazy(() => import('./src/pages/NeuralInterfaceRevolution2026'));
const EnhancedContentShowcase = lazy(() => import('./src/components/EnhancedContentShowcase'));
const NextGenAIRevolution2026 = lazy(() => import('./src/pages/NextGenAIRevolution2026'));
const QuantumComputingRevolution2026 = lazy(() => import('./src/pages/QuantumComputingRevolution2026'));
const RevolutionaryTechBlog2026 = lazy(() => import('./src/pages/RevolutionaryTechBlog2026'));
const RevolutionaryContentShowcase = lazy(() => import('./src/components/RevolutionaryContentShowcase'));
const UltimateTechShowcase2027 = lazy(() => import('./src/components/UltimateTechShowcase2027'));
const FuturisticTechShowcase2028 = lazy(() => import('./src/components/FuturisticTechShowcase2028'));
const ComprehensiveTechInsights2026 = lazy(() => import('./src/pages/ComprehensiveTechInsights2026'));
const UltimateTechShowcase2026 = lazy(() => import('./src/pages/UltimateTechShowcase2026'));
const FutureTechRevolution2026 = lazy(() => import('./src/pages/FutureTechRevolution2026'));
const AdvancedAITransformation2026 = lazy(() => import('./src/pages/AdvancedAITransformation2026'));
const NextGenTechShowcase2026 = lazy(() => import('./src/pages/NextGenTechShowcase2026'));
const AdvancedAISystems2026 = lazy(() => import('./src/pages/AdvancedAISystems2026'));
const AdvancedAISystems2027 = lazy(() => import('./src/pages/AdvancedAISystems2027'));
const QuantumComputingRevolution2027 = lazy(() => import('./src/pages/QuantumComputingRevolution2027'));
const AdvancedAITransformation2028 = lazy(() => import('./src/pages/AdvancedAITransformation2028'));
const QuantumNeuralFusion2028 = lazy(() => import('./src/pages/QuantumNeuralFusion2028'));
const SpaceTechAI2025 = lazy(() => import('./src/pages/SpaceTechAI2025'));
const BiotechAIRevolution2025 = lazy(() => import('./src/pages/BiotechAIRevolution2025'));
const InnovationShowcase2026 = lazy(() => import('./src/components/InnovationShowcase2026'));

// Loading component for lazy loading
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
  </div>
);

import './src/index.css';

export default function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-white">
          <ScrollToTop />
          <Header />
          <main className="flex-grow">
            <Suspense fallback={
              <div className="container mx-auto px-4 py-8">
                <LoadingSpinner size="lg" className="py-20" />
              </div>
            }>
              <Routes>
                <Route path="/" element={
                  <div className="container mx-auto px-4 py-8">
                    <div className="max-w-4xl mx-auto text-center">
                      <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Welcome to Zion Tech Group
                      </h1>
                      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        Your trusted partner in AI and technology solutions. 
                        We're revolutionizing the future with cutting-edge innovations.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Solutions</h3>
                          <p className="text-gray-600">
                            Advanced artificial intelligence systems that transform your business operations.
                          </p>
                        </div>
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">Tech Innovation</h3>
                          <p className="text-gray-600">
                            Next-generation technology solutions for the modern enterprise.
                          </p>
                        </div>
                      </div>
                      <div className="space-x-4">
                        <Link 
                          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                          to="/pages/UltimateTechBreakthrough2026"
                        >
                          Explore Our Technology
                        </Link>
                        <Link 
                          className="inline-block border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                          to="/contact"
                        >
                          Get in Touch
                        </Link>
                      </div>
                    </div>
                  </div>
                } />
                <Route path="/pages/UltimateTechBreakthrough2026" element={<UltimateTechBreakthrough2026 />} />
                <Route path="/contact" element={
                  <div className="container mx-auto px-4 py-8">
                    <div className="max-w-2xl mx-auto text-center">
                      <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
                      <p className="text-lg text-gray-600 mb-8">
                        Ready to transform your business with our AI and technology solutions? 
                        Get in touch with our team today.
                      </p>
                      <div className="bg-gray-50 p-8 rounded-lg">
                        <p className="text-gray-700 mb-4">
                          Email: contact@ziontechgroup.com
                        </p>
                        <p className="text-gray-700">
                          Phone: +1 (555) 123-4567
                        </p>
                      </div>
                    </div>
                  </div>
                } />
                <Route path="*" element={
                  <div className="container mx-auto px-4 py-8">
                    <div className="max-w-2xl mx-auto text-center">
                      <h1 className="text-4xl font-bold text-gray-900 mb-6">Page Not Found</h1>
                      <p className="text-lg text-gray-600 mb-8">
                        The page you're looking for doesn't exist.
                      </p>
                      <Link 
                        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        to="/"
                      >
                        Go Home
                      </Link>
                    </div>
                  </div>
                } />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <PerformanceMonitor />
        </div>
      </Router>
    </ErrorBoundary>
  );
}