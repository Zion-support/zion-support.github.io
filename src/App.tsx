import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import ComprehensiveServicesShowcase2025 from './pages/ComprehensiveServicesShowcase2025';
import AIContentOptimizerPro from './pages/services/ai-content-optimizer-pro';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/services" element={<Services />} />
          <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025 />} />
          <Route path="/services/ai-content-optimizer-pro" element={<AIContentOptimizerPro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;