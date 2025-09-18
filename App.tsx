import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CaseStudyPage from './src/CaseStudyPage';
import Footer from './src/Footer';
import Header from './src/Header';
import ScrollToTop from './src/ScrollToTop';
import NeuralConsensus2026PromotionBanner from './src/components/NeuralConsensus2026PromotionBanner';
import SyntheticIntelligence2026Showcase from './src/components/SyntheticIntelligence2026Showcase';
import NewContent2026Carousel from './src/components/NewContent2026Carousel';
import UltimateContentBanner2025 from './src/components/UltimateContentBanner2025';
import RevolutionaryContentBanner2025 from './src/components/RevolutionaryContentBanner2025';
import RevolutionaryContentCarousel2025 from './src/components/RevolutionaryContentCarousel2025';
import EnhancedContentCarousel2025 from './src/components/EnhancedContentCarousel2025';
import InteractiveTechShowcase2027 from './src/components/InteractiveTechShowcase2027';
import RevolutionaryContentShowcase2026 from './src/components/RevolutionaryContentShowcase2026';
import AdvancedAITechnologyShowcase2026 from './src/components/AdvancedAITechnologyShowcase2026';
import './src/index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={
              <div className="space-y-0">
                {/* Neural Consensus 2026 Promotion Banner */}
                <div className="mb-12">
                  <NeuralConsensus2026PromotionBanner />
                </div>

                {/* NEW: New Content 2026 Carousel - Revolutionary AI Content Collection */}
                <div className="mb-12">
                  <NewContent2026Carousel />
                </div>

                {/* NEW: Synthetic Intelligence 2026 Showcase - AI Beyond Human Limits */}
                <div className="mb-12">
                  <SyntheticIntelligence2026Showcase />
                </div>

                {/* Ultimate Content Banner 2025 */}
                <div className="mb-12">
                  <UltimateContentBanner2025 />
                </div>

                {/* Revolutionary Content Banner 2025 */}
                <div className="mb-12">
                  <RevolutionaryContentBanner2025 />
                </div>

                {/* Revolutionary Content Carousel 2025 */}
                <div className="mb-12">
                  <RevolutionaryContentCarousel2025 />
                </div>

                {/* Enhanced Content Carousel 2025 */}
                <div className="mb-12">
                  <EnhancedContentCarousel2025 />
                </div>

                {/* Interactive Tech Showcase 2027 */}
                <div className="mb-12">
                  <InteractiveTechShowcase2027 />
                </div>

                {/* Revolutionary Content Showcase 2026 */}
                <div className="mb-12">
                  <RevolutionaryContentShowcase2026 />
                </div>

                {/* Advanced AI Technology Showcase 2026 */}
                <div className="mb-12">
                  <AdvancedAITechnologyShowcase2026 />
                </div>
              </div>
            } />
            <Route path="/case-study/:id" element={<CaseStudyPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;