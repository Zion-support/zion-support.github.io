import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './src/pages/Home';
import RevolutionaryTechBlog2026 from './src/pages/RevolutionaryTechBlog2026';
import UltimateTechShowcase2026 from './src/pages/UltimateTechShowcase2026';
import ComprehensiveServicesShowcase2027 from './src/pages/ComprehensiveServicesShowcase2027';
import RevolutionaryTechAdvertisingBanner from './src/components/RevolutionaryTechAdvertisingBanner';
import InteractiveTechShowcase from './src/components/InteractiveTechShowcase';
import UltimateBreakthroughBanner from './src/components/UltimateBreakthroughBanner';
import NeuralRealityBanner from './src/components/NeuralRealityBanner';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/RevolutionaryTechBlog2026" element={<RevolutionaryTechBlog2026 />} />
          <Route path="/pages/UltimateTechShowcase2026" element={<UltimateTechShowcase2026 />} />
          <Route path="/pages/ComprehensiveServicesShowcase2027" element={<ComprehensiveServicesShowcase2027 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;