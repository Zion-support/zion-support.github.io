import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './src/ScrollToTop';
import Header from './src/Header';
import Footer from './src/Footer';
import ContentShowcaseBanner2026 from './src/components/ContentShowcaseBanner2026';
import RevolutionaryServicesShowcase2026 from './src/components/RevolutionaryServicesShowcase2026';
import NewContentPromotionBanner2026 from './src/components/NewContentPromotionBanner2026';
import RevolutionaryCaseStudies2026 from './src/pages/RevolutionaryCaseStudies2026';
import './src/index.css';
import './src/styles/optimizations.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen">
              <main className="container mx-auto px-4 py-8">
                {/* New Content Showcase Banner 2026 */}
                <ContentShowcaseBanner2026 />
                
                {/* Revolutionary Services Showcase 2026 */}
                <RevolutionaryServicesShowcase2026 />
                
                {/* Content Promotion Banner 2026 */}
                <NewContentPromotionBanner2026 />
              </main>
            </div>
          } />
          
          <Route path="/pages/RevolutionaryCaseStudies2026" element={<RevolutionaryCaseStudies2026 />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;