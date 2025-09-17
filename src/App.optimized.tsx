import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './Header';
import Footer from './Footer';

// Lazy load pages for better performance
const Blog = lazy(() => import('./pages/Blog'));
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage'));
const AIIncidentResponse2026 = lazy(() => import('./pages/AIIncidentResponse2026'));
const AIRevolutionaryBreakthrough2026 = lazy(() => import('./pages/AIRevolutionaryBreakthrough2026'));
const AdvancedAIConsciousness2027 = lazy(() => import('./pages/AdvancedAIConsciousness2027'));
const AdvancedAISystems2026 = lazy(() => import('./pages/AdvancedAISystems2026'));
const AdvancedAITransformation2025 = lazy(() => import('./pages/AdvancedAITransformation2025'));
const AdvancedAISolutions2027 = lazy(() => import('./pages/AdvancedAISolutions2027'));
const AdvancedAnalyticsInsights2025 = lazy(() => import('./pages/AdvancedAnalyticsInsights2025'));
const AdvancedBiotechRevolution2026 = lazy(() => import('./pages/AdvancedBiotechRevolution2026'));
const AdvancedQuantumComputing2026 = lazy(() => import('./pages/AdvancedQuantumComputing2026'));
const AdvancedRobotics2026 = lazy(() => import('./pages/AdvancedRobotics2026'));
const AdvancedTechBreakthrough2025 = lazy(() => import('./pages/AdvancedTechBreakthrough2025'));
const AdvancedTechSolutions2026 = lazy(() => import('./pages/AdvancedTechSolutions2026'));
const AgentOpsControlPlane2026 = lazy(() => import('./pages/AgentOpsControlPlane2026'));
const AgenticOpsControls2026 = lazy(() => import('./pages/AgenticOpsControls2026'));
const AutonomousOpsPlaybook2026 = lazy(() => import('./pages/AutonomousOpsPlaybook2026'));
const BiotechRevolution2025 = lazy(() => import('./pages/BiotechRevolution2025'));
const BlogPost_Sep2025_AIExecGuide = lazy(() => import('./pages/BlogPost_Sep2025_AIExecGuide'));
const BlogPost_Sep2025_CaseStudy = lazy(() => import('./pages/BlogPost_Sep2025_CaseStudy'));
const ComprehensiveTechInsights2026 = lazy(() => import('./pages/ComprehensiveTechInsights2026'));
const EdgeAICompliance2026 = lazy(() => import('./pages/EdgeAICompliance2026'));
const InnovationShowcase2025 = lazy(() => import('./pages/InnovationShowcase2025'));
const InterdimensionalTech2027 = lazy(() => import('./pages/InterdimensionalTech2027'));
const InterdimensionalTech2037Page = lazy(() => import('./pages/InterdimensionalTech2037'));
const NeuralInterfaceRevolution2025 = lazy(() => import('./pages/NeuralInterfaceRevolution2025'));
const NeuralInterfaceRevolution2026 = lazy(() => import('./pages/NeuralInterfaceRevolution2026'));
const NextGenAIRevolution2026 = lazy(() => import('./pages/NextGenAIRevolution2026'));
const NextGenTechShowcase2025 = lazy(() => import('./pages/NextGenTechShowcase2025'));
const OperationalEvalGates2026 = lazy(() => import('./pages/OperationalEvalGates2026'));
const QuantumComputingRevolution2025 = lazy(() => import('./pages/QuantumComputingRevolution2025'));
const QuantumComputingRevolution2026 = lazy(() => import('./pages/QuantumComputingRevolution2026'));
const QuantumConsciousnessRevolution2025 = lazy(() => import('./pages/QuantumConsciousnessRevolution2025'));
const QuantumConsciousnessRevolution2026 = lazy(() => import('./pages/QuantumConsciousnessRevolution2026'));
const QuantumNeuralFusion2026 = lazy(() => import('./pages/QuantumNeuralFusion2026'));
const QuantumRealityEngine2027 = lazy(() => import('./pages/QuantumRealityEngine2027'));
const ResponsibleAutonomyGuide2026 = lazy(() => import('./pages/ResponsibleAutonomyGuide2026'));
const RevolutionaryInnovationHub2027 = lazy(() => import('./pages/RevolutionaryInnovationHub2027'));
const RevolutionaryTechBlog2026 = lazy(() => import('./pages/RevolutionaryTechBlog2026'));
const RevolutionaryTechBreakthrough2025 = lazy(() => import('./pages/RevolutionaryTechBreakthrough2025'));
const RevolutionaryTechBreakthrough2027 = lazy(() => import('./pages/RevolutionaryTechBreakthrough2027'));
const SpaceTechInnovation2026 = lazy(() => import('./pages/SpaceTechInnovation2026'));
const SpaceTechRevolution2025 = lazy(() => import('./pages/SpaceTechRevolution2025'));
const SyntheticBiologyRevolution2027 = lazy(() => import('./pages/SyntheticBiologyRevolution2027'));
const SyntheticIntelligence2026 = lazy(() => import('./pages/SyntheticIntelligence2026'));
const SyntheticIntelligenceRevolution2025 = lazy(() => import('./pages/SyntheticIntelligenceRevolution2025'));
const TrustedRAGPlaybook2026 = lazy(() => import('./pages/TrustedRAGPlaybook2026'));
const UltimateAIRevolution2027 = lazy(() => import('./pages/UltimateAIRevolution2027'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Blog />} />
              <Route path="/case-study" element={<CaseStudyPage />} />
              <Route path="/ai-incident-response-2026" element={<AIIncidentResponse2026 />} />
              <Route path="/ai-revolutionary-breakthrough-2026" element={<AIRevolutionaryBreakthrough2026 />} />
              <Route path="/advanced-ai-consciousness-2027" element={<AdvancedAIConsciousness2027 />} />
              <Route path="/advanced-ai-systems-2026" element={<AdvancedAISystems2026 />} />
              <Route path="/advanced-ai-transformation-2025" element={<AdvancedAITransformation2025 />} />
              <Route path="/advanced-ai-solutions-2027" element={<AdvancedAISolutions2027 />} />
              <Route path="/advanced-analytics-insights-2025" element={<AdvancedAnalyticsInsights2025 />} />
              <Route path="/advanced-biotech-revolution-2026" element={<AdvancedBiotechRevolution2026 />} />
              <Route path="/advanced-quantum-computing-2026" element={<AdvancedQuantumComputing2026 />} />
              <Route path="/advanced-robotics-2026" element={<AdvancedRobotics2026 />} />
              <Route path="/advanced-tech-breakthrough-2025" element={<AdvancedTechBreakthrough2025 />} />
              <Route path="/advanced-tech-solutions-2026" element={<AdvancedTechSolutions2026 />} />
              <Route path="/agent-ops-control-plane-2026" element={<AgentOpsControlPlane2026 />} />
              <Route path="/agentic-ops-controls-2026" element={<AgenticOpsControls2026 />} />
              <Route path="/autonomous-ops-playbook-2026" element={<AutonomousOpsPlaybook2026 />} />
              <Route path="/biotech-revolution-2025" element={<BiotechRevolution2025 />} />
              <Route path="/blog-post-sep2025-ai-exec-guide" element={<BlogPost_Sep2025_AIExecGuide />} />
              <Route path="/blog-post-sep2025-case-study" element={<BlogPost_Sep2025_CaseStudy />} />
              <Route path="/comprehensive-tech-insights-2026" element={<ComprehensiveTechInsights2026 />} />
              <Route path="/edge-ai-compliance-2026" element={<EdgeAICompliance2026 />} />
              <Route path="/innovation-showcase-2025" element={<InnovationShowcase2025 />} />
              <Route path="/interdimensional-tech-2027" element={<InterdimensionalTech2027 />} />
              <Route path="/interdimensional-tech-2037" element={<InterdimensionalTech2037Page />} />
              <Route path="/neural-interface-revolution-2025" element={<NeuralInterfaceRevolution2025 />} />
              <Route path="/neural-interface-revolution-2026" element={<NeuralInterfaceRevolution2026 />} />
              <Route path="/next-gen-ai-revolution-2026" element={<NextGenAIRevolution2026 />} />
              <Route path="/next-gen-tech-showcase-2025" element={<NextGenTechShowcase2025 />} />
              <Route path="/operational-eval-gates-2026" element={<OperationalEvalGates2026 />} />
              <Route path="/quantum-computing-revolution-2025" element={<QuantumComputingRevolution2025 />} />
              <Route path="/quantum-computing-revolution-2026" element={<QuantumComputingRevolution2026 />} />
              <Route path="/quantum-consciousness-revolution-2025" element={<QuantumConsciousnessRevolution2025 />} />
              <Route path="/quantum-consciousness-revolution-2026" element={<QuantumConsciousnessRevolution2026 />} />
              <Route path="/quantum-neural-fusion-2026" element={<QuantumNeuralFusion2026 />} />
              <Route path="/quantum-reality-engine-2027" element={<QuantumRealityEngine2027 />} />
              <Route path="/responsible-autonomy-guide-2026" element={<ResponsibleAutonomyGuide2026 />} />
              <Route path="/revolutionary-innovation-hub-2027" element={<RevolutionaryInnovationHub2027 />} />
              <Route path="/revolutionary-tech-blog-2026" element={<RevolutionaryTechBlog2026 />} />
              <Route path="/revolutionary-tech-breakthrough-2025" element={<RevolutionaryTechBreakthrough2025 />} />
              <Route path="/revolutionary-tech-breakthrough-2027" element={<RevolutionaryTechBreakthrough2027 />} />
              <Route path="/space-tech-innovation-2026" element={<SpaceTechInnovation2026 />} />
              <Route path="/space-tech-revolution-2025" element={<SpaceTechRevolution2025 />} />
              <Route path="/synthetic-biology-revolution-2027" element={<SyntheticBiologyRevolution2027 />} />
              <Route path="/synthetic-intelligence-2026" element={<SyntheticIntelligence2026 />} />
              <Route path="/synthetic-intelligence-revolution-2025" element={<SyntheticIntelligenceRevolution2025 />} />
              <Route path="/trusted-rag-playbook-2026" element={<TrustedRAGPlaybook2026 />} />
              <Route path="/ultimate-ai-revolution-2027" element={<UltimateAIRevolution2027 />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;