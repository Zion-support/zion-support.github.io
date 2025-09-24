import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Header from './Header';
import Footer from './Footer';
import LazyWrapper from './components/LazyWrapper';
import './index.css';

// Lazy load heavy components
const EnhancedHeroSection = lazy(() => import('./components/EnhancedHeroSection'));
const FeaturedContentSection = lazy(() => import('./components/FeaturedContentSection'));
const DynamicContentCarousel = lazy(() => import('./components/DynamicContentCarousel'));
const InteractiveTechShowcase = lazy(() => import('./components/InteractiveTechShowcase'));

// Lazy load pages
const AdvancedTechSolutions2026 = lazy(() => import('./pages/AdvancedTechSolutions2026'));
const InnovationShowcase2026 = lazy(() => import('./pages/InnovationShowcase2026'));
const AdvancedAITransformation2025 = lazy(() => import('./pages/AdvancedAITransformation2025'));
const QuantumComputingRevolution2025 = lazy(() => import('./pages/QuantumComputingRevolution2025'));
const NeuralInterfaceRevolution2025 = lazy(() => import('./pages/NeuralInterfaceRevolution2025'));
const NextGenTechShowcase2025 = lazy(() => import('./pages/NextGenTechShowcase2025'));

// 2027 Revolutionary Content
const AdvancedTechTrends2027 = lazy(() => import('./pages/AdvancedTechTrends2027'));
const ConsciousAIRevolution2027 = lazy(() => import('./pages/ConsciousAIRevolution2027'));
const QuantumConsciousnessRevolution2027 = lazy(() => import('./pages/QuantumConsciousnessRevolution2027'));
const SyntheticBiologyRevolution2027 = lazy(() => import('./pages/SyntheticBiologyRevolution2027'));
const UltimateTechRevolution2027 = lazy(() => import('./pages/UltimateTechRevolution2027'));

// SEO Meta component
const SEOMeta: React.FC<{ title: string; description: string; keywords?: string }> = ({ 
  title, 
  description, 
  keywords = "AI, technology, innovation, quantum computing, neural interface" 
}) => {
  React.useEffect(() => {
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords;
      document.head.appendChild(meta);
    }
  }, [title, description, keywords]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <SEOMeta 
        title="Zion Tech Group - Revolutionary AI & Technology Solutions"
        description="Leading provider of cutting-edge AI, quantum computing, and neural interface technologies. Transform your business with our revolutionary 2025-2027 tech solutions."
        keywords="AI, artificial intelligence, quantum computing, neural interface, technology innovation, business transformation, 2025, 2026, 2027"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <LazyWrapper>
            <EnhancedHeroSection />
          </LazyWrapper>
          
          <LazyWrapper>
            <FeaturedContentSection />
          </LazyWrapper>
          
          <LazyWrapper>
            <DynamicContentCarousel />
          </LazyWrapper>
          
          <LazyWrapper>
            <InteractiveTechShowcase />
          </LazyWrapper>
        </main>

        <Footer />
      </div>

      <Routes>
        {/* 2025 Revolutionary Content Routes */}
        <Route 
          path="/pages/RevolutionaryAIConsciousness2025" 
          element={
            <LazyWrapper>
              <NeuralInterfaceRevolution2025 />
            </LazyWrapper>
          } 
        />
        <Route 
          path="/pages/QuantumComputingBreakthrough2025" 
          element={
            <LazyWrapper>
              <QuantumComputingRevolution2025 />
            </LazyWrapper>
          } 
        />
        <Route 
          path="/pages/NeuralInterfaceRevolution2025" 
          element={
            <LazyWrapper>
              <NeuralInterfaceRevolution2025 />
            </LazyWrapper>
          } 
        />

        {/* 2027 Revolutionary Content Routes */}
        <Route 
          path="/pages/AdvancedTechTrends2027" 
          element={
            <LazyWrapper>
              <AdvancedTechTrends2027 />
            </LazyWrapper>
          } 
        />
        <Route 
          path="/pages/ConsciousAIRevolution2027" 
          element={
            <LazyWrapper>
              <ConsciousAIRevolution2027 />
            </LazyWrapper>
          } 
        />
        <Route 
          path="/pages/QuantumConsciousnessRevolution2027" 
          element={
            <LazyWrapper>
              <QuantumConsciousnessRevolution2027 />
            </LazyWrapper>
          } 
        />
        <Route 
          path="/pages/SyntheticBiologyRevolution2027" 
          element={
            <LazyWrapper>
              <SyntheticBiologyRevolution2027 />
            </LazyWrapper>
          } 
        />
        <Route 
          path="/pages/UltimateTechRevolution2027" 
          element={
            <LazyWrapper>
              <UltimateTechRevolution2027 />
            </LazyWrapper>
          } 
        />

        {/* Other existing routes */}
        <Route 
          path="/pages/AdvancedTechSolutions2026" 
          element={
            <LazyWrapper>
              <AdvancedTechSolutions2026 />
            </LazyWrapper>
          } 
        />
        <Route 
          path="/pages/InnovationShowcase2026" 
          element={
            <LazyWrapper>
              <InnovationShowcase2026 />
            </LazyWrapper>
          } 
        />
        <Route 
          path="/pages/AdvancedAITransformation2025" 
          element={
            <LazyWrapper>
              <AdvancedAITransformation2025 />
            </LazyWrapper>
          } 
        />
        <Route 
          path="/pages/QuantumComputingRevolution2025" 
          element={
            <LazyWrapper>
              <QuantumComputingRevolution2025 />
            </LazyWrapper>
          } 
        />
        <Route 
          path="/pages/NextGenTechShowcase2025" 
          element={
            <LazyWrapper>
              <NextGenTechShowcase2025 />
            </LazyWrapper>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;