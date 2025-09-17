import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import pages
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import NotFound from '../pages/NotFound';

// Import AI/Tech pages
import AIInnovationHub2025 from '../pages/AIInnovationHub2025';
import AdvancedAISolutions2025 from '../pages/AdvancedAISolutions2025';
import RevolutionaryTech2025 from '../pages/RevolutionaryTech2025';
import QuantumComputingRevolution2025 from '../pages/QuantumComputingRevolution2025';
import NeuralInterfaceRevolution2025 from '../pages/NeuralInterfaceRevolution2025';
import AdvancedTechShowcase2025 from '../pages/AdvancedTechShowcase2025';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* Main Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />

      {/* AI & Technology Routes */}
      <Route path="/ai-innovation-hub-2025" element={<AIInnovationHub2025 />} />
      <Route path="/advanced-ai-solutions-2025" element={<AdvancedAISolutions2025 />} />
      <Route path="/revolutionary-tech-2025" element={<RevolutionaryTech2025 />} />
      <Route path="/quantum-computing-revolution-2025" element={<QuantumComputingRevolution2025 />} />
      <Route path="/neural-interface-revolution-2025" element={<NeuralInterfaceRevolution2025 />} />
      <Route path="/advanced-tech-showcase-2025" element={<AdvancedTechShowcase2025 />} />

      {/* Redirects for SEO */}
      <Route path="/ai-innovation" element={<Navigate to="/ai-innovation-hub-2025" replace />} />
      <Route path="/ai-solutions" element={<Navigate to="/advanced-ai-solutions-2025" replace />} />
      <Route path="/tech-showcase" element={<Navigate to="/advanced-tech-showcase-2025" replace />} />

      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;