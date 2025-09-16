import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

// Import main components
import Home from './pages/Home';
import Blog from './pages/Blog';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';

// Import showcase components
import RevolutionaryTech2026Showcase from './components/RevolutionaryTech2026Showcase';
import NewContent2027PromotionBanner from './components/NewContent2027PromotionBanner';
import EnhancedHeroSection from './components/EnhancedHeroSection';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={
            <div className="space-y-0">
              {/* Hero Section */}
              <EnhancedHeroSection />

              {/* Revolutionary Tech 2026 Showcase */}
              <div className="mb-12">
                <RevolutionaryTech2026Showcase />
              </div>

              {/* New Content 2027 Promotion Banner */}
              <div className="mb-12">
                <NewContent2027PromotionBanner />
              </div>
            </div>
          } />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;