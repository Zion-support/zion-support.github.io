import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import DynamicContentCarousel from './components/DynamicContentCarousel';
import InteractiveTechShowcase from './components/InteractiveTechShowcase';
import RevolutionaryContentBanner2026 from './components/RevolutionaryContentBanner2026';
import RevolutionaryContentShowcase2026 from './components/RevolutionaryContentShowcase2026';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <Header />
        
        <Routes>
          <Route path="/" element={
            <div className="space-y-0">
              {/* Hero Section */}
              <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                  <h1 className="text-5xl font-bold mb-6">Revolutionary AI Solutions</h1>
                  <p className="text-xl mb-8">Transform your business with cutting-edge technology</p>
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Revolutionary Content Banner 2026 */}
              <div className="mb-12">
                <RevolutionaryContentBanner2026 />
              </div>

              {/* Revolutionary Content Showcase 2026 */}
              <div className="mb-12">
                <RevolutionaryContentShowcase2026 />
              </div>

              {/* Dynamic Content Carousel */}
              <DynamicContentCarousel />
              
              {/* Interactive Tech Showcase */}
              <InteractiveTechShowcase />
            </div>
          } />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;