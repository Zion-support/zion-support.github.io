import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CaseStudyPage from './src/CaseStudyPage';
import './src/index.css';

// Import existing pages that actually exist
import AIEnterpriseCopilot2025 from './src/pages/AIEnterpriseCopilot2025';
import NeuralInterfaceFuture from './src/pages/NeuralInterfaceFuture';
import NewShowcase2025 from './src/pages/NewShowcase2025';

// Import 2026 pages that exist
import AdvancedAITransformation2026 from './src/pages/AdvancedAITransformation2026';
import AIRevolutionaryBreakthrough2026 from './src/pages/AIRevolutionaryBreakthrough2026';
import ComprehensiveTechInsights2026 from './src/pages/ComprehensiveTechInsights2026';
import ComprehensiveTechShowcase2026 from './src/pages/ComprehensiveTechShowcase2026';
import FutureTechTrends2026 from './src/pages/FutureTechTrends2026';
import NeuralInterfaceRevolution2026 from './src/pages/NeuralInterfaceRevolution2026';
import NextGenAIRevolution2026 from './src/pages/NextGenAIRevolution2026';
import NextGenTechShowcase2026 from './src/pages/NextGenTechShowcase2026';
import QuantumComputingRevolution2026 from './src/pages/QuantumComputingRevolution2026';
import QuantumNeuralFusion2026 from './src/pages/QuantumNeuralFusion2026';
import RevolutionaryAIContent2026 from './src/pages/RevolutionaryAIContent2026';
import RevolutionaryTechBlog2026 from './src/pages/RevolutionaryTechBlog2026';
import SyntheticIntelligence2026 from './src/pages/SyntheticIntelligence2026';

// Import new 2026 pages
import UltimateTechShowcase2026 from './src/pages/UltimateTechShowcase2026';
import AdvancedBiotechAI2026 from './src/pages/AdvancedBiotechAI2026';
import NextGenSpaceTech2026 from './src/pages/NextGenSpaceTech2026';

// Import components
import EnhancedContentShowcase from './src/components/EnhancedContentShowcase';
import RevolutionaryContentShowcase from './src/components/RevolutionaryContentShowcase';

// Import Home component
import Home from './src/pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study" element={<CaseStudyPage />} />
        
        {/* 2025 Pages */}
        <Route path="/pages/AIEnterpriseCopilot2025" element={<AIEnterpriseCopilot2025 />} />
        <Route path="/pages/NeuralInterfaceFuture" element={<NeuralInterfaceFuture />} />
        <Route path="/pages/NewShowcase2025" element={<NewShowcase2025 />} />
        
        {/* 2026 Pages */}
        <Route path="/pages/AdvancedAITransformation2026" element={<AdvancedAITransformation2026 />} />
        <Route path="/pages/AIRevolutionaryBreakthrough2026" element={<AIRevolutionaryBreakthrough2026 />} />
        <Route path="/pages/ComprehensiveTechInsights2026" element={<ComprehensiveTechInsights2026 />} />
        <Route path="/pages/ComprehensiveTechShowcase2026" element={<ComprehensiveTechShowcase2026 />} />
        <Route path="/pages/FutureTechTrends2026" element={<FutureTechTrends2026 />} />
        <Route path="/pages/NeuralInterfaceRevolution2026" element={<NeuralInterfaceRevolution2026 />} />
        <Route path="/pages/NextGenAIRevolution2026" element={<NextGenAIRevolution2026 />} />
        <Route path="/pages/NextGenTechShowcase2026" element={<NextGenTechShowcase2026 />} />
        <Route path="/pages/QuantumComputingRevolution2026" element={<QuantumComputingRevolution2026 />} />
        <Route path="/pages/QuantumNeuralFusion2026" element={<QuantumNeuralFusion2026 />} />
        <Route path="/pages/RevolutionaryAIContent2026" element={<RevolutionaryAIContent2026 />} />
        <Route path="/pages/RevolutionaryTechBlog2026" element={<RevolutionaryTechBlog2026 />} />
        <Route path="/pages/SyntheticIntelligence2026" element={<SyntheticIntelligence2026 />} />
        
        {/* New 2026 Pages */}
        <Route path="/pages/UltimateTechShowcase2026" element={<UltimateTechShowcase2026 />} />
        <Route path="/pages/AdvancedBiotechAI2026" element={<AdvancedBiotechAI2026 />} />
        <Route path="/pages/NextGenSpaceTech2026" element={<NextGenSpaceTech2026 />} />
      </Routes>
    </Router>
  );
}

export default App;