import React from 'react',
import { lazy } from 'react';
// Lazy load pages for better performance,
export const lazyPages = {,
  // Home and main pages,
  Home: lazy(() => import('../pages/Home'));
  About: lazy(() => import('../pages/About'));
  Services: lazy(() => import('../pages/Services'));
  Contact: lazy(() => import('../pages/Contact'));
  // 2025 Content,
  NewShowcase2025: lazy(() => import('../pages/NewShowcase2025'));
  AIEnterpriseCopilot2025: lazy(() => import('../pages/AIEnterpriseCopilot2025'));
  NeuralInterfaceFuture: lazy(() => import('../pages/NeuralInterfaceFuture'));
  AdvancedAITransformation2025: lazy(() => import('../pages/AdvancedAITransformation2025'));
  QuantumComputingRevolution2025: lazy(() => import('../pages/QuantumComputingRevolution2025'));
  NeuralInterfaceRevolution2025: lazy(() => import('../pages/NeuralInterfaceRevolution2025'));
  NextGenTechShowcase2025: lazy(() => import('../pages/NextGenTechShowcase2025'));
  // 2026 Content,
  AdvancedTechSolutions2026: lazy(() => import('../pages/AdvancedTechSolutions2026'));
  InnovationShowcase2026: lazy(() => import('../pages/InnovationShowcase2026'));
  AdvancedQuantumComputing2026: lazy(() => import('../pages/AdvancedQuantumComputing2026'));
  NeuralInterfaceRevolution2026: lazy(() => import('../pages/NeuralInterfaceRevolution2026'));
  AdvancedAISystems2026: lazy(() => import('../pages/AdvancedAISystems2026'));
  SyntheticIntelligence2026: lazy(() => import('../pages/SyntheticIntelligence2026'));
  QuantumNeuralFusion2026: lazy(() => import('../pages/QuantumNeuralFusion2026'));
  NextGenAIRevolution2026: lazy(() => import('../pages/NextGenAIRevolution2026'));
  QuantumComputingRevolution2026: lazy(() => import('../pages/QuantumComputingRevolution2026'));
  RevolutionaryTechBlog2026: lazy(() => import('../pages/RevolutionaryTechBlog2026'));
  ComprehensiveTechInsights2026: lazy(() => import('../pages/ComprehensiveTechInsights2026'));
  AdvancedAnalyticsDashboard2026: lazy(() => import('../pages/AdvancedAnalyticsDashboard2026'));
  BiotechRevolution2026: lazy(() => import('../pages/BiotechRevolution2026'));
  SpaceTechInnovation2026: lazy(() => import('../pages/SpaceTechInnovation2026'));
  AIInnovationHub2026: lazy(() => import('../pages/AIInnovationHub2026'));
  UltimateTechShowcase2026: lazy(() => import('../pages/UltimateTechShowcase2026'));
  // 2027 Content,
  UltimateTechRevolution2027: lazy(() => import('../pages/UltimateTechRevolution2027'));
  TranscendentAI2027: lazy(() => import('../pages/TranscendentAI2027'));
  QuantumConsciousnessRevolution2027: lazy(() => import('../pages/QuantumConsciousnessRevolution2027'));
  SyntheticBiologyRevolution2027: lazy(() => import('../pages/SyntheticBiologyRevolution2027'));
  SpaceTimeComputing2027: lazy(() => import('../pages/SpaceTimeComputing2027')),};
// Lazy load components,
export const lazyComponents = {,
  EnhancedHeroSection: lazy(() => import('../components/EnhancedHeroSection'));
  FeaturedContentSection: lazy(() => import('../components/FeaturedContentSection'));
  DynamicContentCarousel: lazy(() => import('../components/DynamicContentCarousel'));
  InteractiveTechShowcase: lazy(() => import('../components/InteractiveTechShowcase'));
  InteractiveTechDemo2026: lazy(() => import('../components/InteractiveTechDemo2026'));
  PerformanceOptimizer: lazy(() => import('../components/PerformanceOptimizer'));
  NewContentShowcase2026: lazy(() => import('../components/NewContentShowcase2026'));
  RevolutionaryContentBanner2026: lazy(() => import('../components/RevolutionaryContentBanner2026'));
  RevolutionaryContentBanner2027: lazy(() => import('../components/RevolutionaryContentBanner2027'));
  UltimateContentShowcase2027: lazy(() => import('../components/UltimateContentShowcase2027')),};
// Loading component for Suspense fallback,
export const LoadingSpinner = () => (,
  <div className="flex items-center justify-center min-h-screen">,
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>,
    <span className="ml-4 text-lg text-gray-600">Loading...</span>,
  </div>,
);
// Error boundary for lazy loading,
export class LazyLoadErrorBoundary extends React.Component<,
  { children: React.ReactNode ,};
  { hasError: boolean ,}
> {,
  constructor(props: { children: React.ReactNode ,}) {,
    super(props);
    this.state = { hasError: false ,};
  }
,
  static getDerivedStateFromError(error: Error) {,
    return { hasError: true ,};
  }
,
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {,
    console.error('Lazy load error:', error, errorInfo);
  }
,
  render() {,
    if (this.state.hasError) {,
      return (,
        <div className="flex items-center justify-center min-h-screen">,
          <div className="text-center">,
            <h2 className="text-xl font-semibold text-red-600 mb-2">,
              Failed to load component,
            </h2>,
            <button,
              onClick={() => this.setState({ hasError: false ,})}
              className="px-4 py-2 bg-blue-600 text-white rounded hover: bg-blue-700",
            >,
              Try Again,
            </button>,
          </div>,
        </div>,
      ),}
,
    return this.props.children;
  }
}