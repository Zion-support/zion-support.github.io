import React from 'react';
import { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import ScrollToTop from './ScrollToTop';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceMonitor from './components/PerformanceMonitor';
import SecurityEnhancer from './components/SecurityEnhancer';
import UserExperienceEnhancer from './components/UserExperienceEnhancer';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import './styles/accessibility.css';
import AI2026NextGenContentShowcase from './components/AI2026NextGenContentShowcase';
import AbsoluteTechShowcase2031 from './components/AbsoluteTechShowcase2031';
import AdvancedTechAdvertising2027 from './components/AdvancedTechAdvertising2027';
import AdvancedTechBreakthroughBanner from './components/AdvancedTechBreakthroughBanner';
import AutonomousBusinessOperations2026Showcase from './components/AutonomousBusinessOperations2026Showcase';
import ContentSpotlight from './components/ContentSpotlight';
import DynamicContentCarousel from './components/DynamicContentCarousel';
import EnhancedHeroSection from './components/EnhancedHeroSection';
import FeaturedContentSection from './components/FeaturedContentSection';
import FuturisticTechPromotionBanner2035 from './components/FuturisticTechPromotionBanner2035';
import InfiniteTechShowcase2030 from './components/InfiniteTechShowcase2030';
import InnovationShowcaseBanner from './components/InnovationShowcaseBanner';
import InteractiveContentDiscovery2026 from './components/InteractiveContentDiscovery2026';
import InteractiveTechShowcase from './components/InteractiveTechShowcase';
import InteractiveTechShowcase2027 from './components/InteractiveTechShowcase2027';
import InterdimensionalTechShowcase2027 from './components/InterdimensionalTechShowcase2027';
import InterdimensionalTechShowcase2037 from './components/InterdimensionalTechShowcase2037';
import NeuralInterfaceRevolution2036 from './components/NeuralInterfaceRevolution2036';
import NewContentShowcase2026 from './components/NewContentShowcase2026';
import NewlyAddedContentPromo from './components/NewlyAddedContentPromo';
import NewsletterSignup from './components/NewsletterSignup';
import OmniversalTechShowcase2029 from './components/OmniversalTechShowcase2029';
import PromotionalBanner from './components/PromotionalBanner';
import QuantumAIBreakthroughBanner from './components/QuantumAIBreakthroughBanner';
import QuantumComputingBreakthrough2035 from './components/QuantumComputingBreakthrough2035';
import QuantumNeuralRevolutionBanner from './components/QuantumNeuralRevolutionBanner';
import RevolutionaryAdvertisingBanner2026 from './components/RevolutionaryAdvertisingBanner2026';
import RevolutionaryContentBanner2027 from './components/RevolutionaryContentBanner2027';
import RevolutionaryContentShowcase2026 from './components/RevolutionaryContentShowcase2026';
import RevolutionaryTechShowcase2026 from './components/RevolutionaryTechShowcase2026';
import TranscendentTechnologyShowcase2028 from './components/TranscendentTechnologyShowcase2028';
import TrendingContentSection from './components/TrendingContentSection';
import UltimateContentShowcase2026 from './components/UltimateContentShowcase2026';
import UltimateRevolutionaryTechShowcase2027 from './components/UltimateRevolutionaryTechShowcase2027';
import './index.css';
import AdvancedAIConsciousness2026 from './pages/AdvancedAIConsciousness2026';
import AdvancedAISystems2026 from './pages/AdvancedAISystems2026';
import AdvancedAITransformation2025 from './pages/AdvancedAITransformation2025';
import AdvancedAnalyticsDashboard2026 from './pages/AdvancedAnalyticsDashboard2026';
import AdvancedBiotechRevolution2026 from './pages/AdvancedBiotechRevolution2026';
import AdvancedQuantumComputing2026 from './pages/AdvancedQuantumComputing2026';
import AdvancedRoboticsRevolution2026 from './pages/AdvancedRoboticsRevolution2026';
import AdvancedTechBreakthrough2025 from './pages/AdvancedTechBreakthrough2025';
import AdvancedTechSolutions2026 from './pages/AdvancedTechSolutions2026';
import AutonomousOpsPlaybook2026 from './pages/AutonomousOpsPlaybook2026';
import BiotechRevolution2026 from './pages/BiotechRevolution2026';
import ComprehensiveTechInsights2026 from './pages/ComprehensiveTechInsights2026';
import InnovationShowcase2025 from './pages/InnovationShowcase2025';
import InnovationShowcase2026 from './pages/InnovationShowcase2026';
import InterdimensionalTech2027 from './pages/InterdimensionalTech2027';
import InterdimensionalTech2037Page from './pages/InterdimensionalTech2037';
import NeuralInterfaceRevolution2025 from './pages/NeuralInterfaceRevolution2025';
import NeuralInterfaceRevolution2026 from './pages/NeuralInterfaceRevolution2026';
import NeuralInterfaceRevolution2036Page from './pages/NeuralInterfaceRevolution2036';
import NewAIResearchBreakthrough2026 from './pages/NewAIResearchBreakthrough2026';
import NextGenAIRevolution2026 from './pages/NextGenAIRevolution2026';
import NextGenTechShowcase2025 from './pages/NextGenTechShowcase2025';
import QuantumComputingBreakthrough2035Page from './pages/QuantumComputingBreakthrough2035';
import QuantumComputingRevolution2025 from './pages/QuantumComputingRevolution2025';
import QuantumComputingRevolution2026 from './pages/QuantumComputingRevolution2026';
import QuantumConsciousnessRevolution2026 from './pages/QuantumConsciousnessRevolution2026';
import QuantumNeuralFusion2026 from './pages/QuantumNeuralFusion2026';
import QuantumRealityEngine2027 from './pages/QuantumRealityEngine2027';
import RevolutionaryInnovationHub2027 from './pages/RevolutionaryInnovationHub2027';
import RevolutionaryTechBlog2026 from './pages/RevolutionaryTechBlog2026';
import RevolutionaryTechBreakthrough2027 from './pages/RevolutionaryTechBreakthrough2027';
import SpaceTechInnovation2026 from './pages/SpaceTechInnovation2026';
import SpaceTechRevolution2026 from './pages/SpaceTechRevolution2026';
import SyntheticBiologyRevolution2027 from './pages/SyntheticBiologyRevolution2027';
import SyntheticIntelligence2026 from './pages/SyntheticIntelligence2026';
import UltimateAIRevolution2027 from './pages/UltimateAIRevolution2027';
import UltimateTechShowcase2026 from './pages/UltimateTechShowcase2026';
import UltimateTechShowcase2027 from './pages/UltimateTechShowcase2027';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { ThemeProvider } from "./components/ThemeProvider";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const AboutPage = React.lazy(() => import('./pages/About'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const FAQPage = React.lazy(() => import('./pages/FAQ'));
const PrivacyPage = React.lazy(() => import('./pages/Privacy'));
const TermsPage = React.lazy(() => import('./pages/Terms'));
const SitemapPage = React.lazy(() => import('./pages/Sitemap'));
const HelpPage = React.lazy(() => import('./pages/Help'));
const CookiesPage = React.lazy(() => import('./pages/Cookies'));
const ServicesPage = React.lazy(() => import('./pages/Services'));
const BlogPage = React.lazy(() => import('./pages/Blog'));
const CareersPage = React.lazy(() => import('./pages/Careers'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));
const AdvancedTechShowcase2025 = React.lazy(() => import('./pages/AdvancedTechShowcase2025'));
const FutureInnovationLab2025 = React.lazy(() => import('./pages/FutureInnovationLab2025'));

const baseRoutes = [
  { path: '/', element: <Home /> },
];

export default function App(): React.JSX.Element {
  return (
    <EnhancedErrorBoundary>
      <WhitelabelProvider>
        <ThemeProvider defaultTheme="dark">
          <Router>
            <Header />
            <main className="min-h-screen">
              <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/sitemap" element={<SitemapPage />} />
                  <Route path="/help" element={<HelpPage />} />
                  <Route path="/cookies" element={<CookiesPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/partners" element={<PartnersPage />} />
                  <Route path="/pages/AdvancedTechShowcase2025" element={<AdvancedTechShowcase2025 />} />
                  <Route path="/pages/FutureInnovationLab2025" element={<FutureInnovationLab2025 />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <PerformanceOptimizer />
            <AccessibilityEnhancer />
            <PerformanceMonitor />
            <SecurityEnhancer />
            <UserExperienceEnhancer />
            <AnalyticsDashboard />
          </Router>
        </ThemeProvider>
      </WhitelabelProvider>
    </EnhancedErrorBoundary>
  );
}
