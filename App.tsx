import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './src/Footer';
import Header from './src/Header';
import ScrollToTop from './src/ScrollToTop';
import EnhancedHeroSection from './src/components/EnhancedHeroSection';
import FeaturedContentSection from './src/components/FeaturedContentSection';
import CaseStudyPage from './src/CaseStudyPage';
import About from './src/pages/About';
import Blog from './src/pages/Blog';
// Commented out missing imports - these files don't exist in the pages directory
// import InnovationLanding2025 from './src/pages/InnovationLanding2025';
// import InnovativeServicesShowcase2025 from './src/pages/InnovativeServicesShowcase2025';
// import BlogPost2025 from './src/pages/BlogPost2025';
// import AdvancedTechSolutions2025 from './src/pages/AdvancedTechSolutions2025';
// import NewAIUseCases2025 from './src/pages/NewAIUseCases2025';
// import EdgeAIandIoT2025 from './src/pages/EdgeAIandIoT2025';
// import FutureTechTrends2025 from './src/pages/FutureTechTrends2025';
// import ComprehensiveServices2025 from './src/pages/ComprehensiveServices2025';
// import AIInnovationPlaybook2025 from './src/pages/AIInnovationPlaybook2025';
// import TechnologyInsights2025 from './src/pages/TechnologyInsights2025';
// import AITransformationGuide2025 from './src/pages/AITransformationGuide2025';
// import QuantumComputingSolutions2025 from './src/pages/QuantumComputingSolutions2025';
// import AIInnovationHub2025 from './src/pages/AIInnovationHub2025';
// import DigitalTransformation2025 from './src/pages/DigitalTransformation2025';
// import AdvancedAnalytics2025 from './src/pages/AdvancedAnalytics2025';
// import CybersecurityFortress2025 from './src/pages/CybersecurityFortress2025';
// import AIRevolution2025 from './src/pages/AIRevolution2025';
// import QuantumComputingBreakthrough from './src/pages/QuantumComputingBreakthrough';
// import NeuralInterfaceFuture from './src/pages/NeuralInterfaceFuture';
import DynamicContentCarousel from './src/components/DynamicContentCarousel';
import InteractiveTechShowcase from './src/components/InteractiveTechShowcase';
import NewTechShowcase2025 from './src/components/NewTechShowcase2025';
import AdvancedTechShowcase2026 from './src/components/AdvancedTechShowcase2026';
import PerformanceOptimization from './src/components/PerformanceOptimization';
import AIInnovationHub2026 from './src/pages/AIInnovationHub2026';
import QuantumComputingRevolution2026 from './src/pages/QuantumComputingRevolution2026';
import NeuralInterfaceRevolution2026 from './src/pages/NeuralInterfaceRevolution2026';
import InnovationHub2026 from './src/pages/InnovationHub2026';
import EnhancedContentShowcase from './src/components/EnhancedContentShowcase';
import './src/index.css';
import './src/styles/accessibility.css';
import './src/styles/optimizations.css';

export default function App(): JSX.Element {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />

        <Routes>
          <Route path="/" element={
            <main className="relative">
              {/* Hero Section with New Content Promotions */}
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-4">
                  🚀 NEW: Innovation 2025 Showcase
                </div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Welcome to Zion Tech Group
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Transform your business with cutting-edge AI, quantum computing, and cybersecurity solutions. 
                  Interactive AI calculator, enterprise case studies, and personalized recommendations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Get Started
                  </a>
                  <a href="/contact" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                    Contact Us
                  </a>
                </div>
              </div>

              <EnhancedHeroSection />
              <FeaturedContentSection />
              <NewTechShowcase2025 />
              <AdvancedTechShowcase2026 />
              <PerformanceOptimization />
              <DynamicContentCarousel />
              <InteractiveTechShowcase />
              <EnhancedContentShowcase />
            </main>
          } />
          
          <Route path="/case-study/:id" element={<CaseStudyPage />} />
          
          {/* New Tech Showcase 2026 Routes */}
          <Route path="/pages/AIInnovationHub2026" element={<AIInnovationHub2026 />} />
          <Route path="/pages/QuantumComputingRevolution2026" element={<QuantumComputingRevolution2026 />} />
          <Route path="/pages/NeuralInterfaceRevolution2026" element={<NeuralInterfaceRevolution2026 />} />
          <Route path="/pages/InnovationHub2026" element={<InnovationHub2026 />} />

          {/* Legacy Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />

          {/* Catch-all route for SPA */}
          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
                  <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
                  <a
                    href="/"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Go Home
                  </a>
                </div>
              </div>
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}