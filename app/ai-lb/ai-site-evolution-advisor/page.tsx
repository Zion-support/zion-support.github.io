import { useState, useEffect } from 'react';

type EvolutionMetrics = {
  performanceScore: number;
  accessibilityScore: number;
  bestPracticesScore: number;
  seoScore: number;
};

type EvolutionAgent = {
  name: string;
  status: string;
};

type EvolutionStep = {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'pending';
  timestamp: Date | null;
  metrics?: EvolutionMetrics;
  recommendations?: string[];
  progress?: number;
  activeAgents?: EvolutionAgent[];
  estimatedCompletion?: Date;
};

export default function AISiteEvolutionAdvisor() {
  const [evolutionSteps, setEvolutionSteps] = useState<EvolutionStep[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('https://ziontechgroup.com');

  useEffect(() => {
    // Simulate loading real evolution data
    const loadEvolutionData = async () => {
      setIsGenerating(true);
      // In a real implementation, this would call an API or analyze the actual site
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const sampleSteps: EvolutionStep[] = [
        {
          id: 1,
          title: 'Initial Analysis',
          description: 'Analyzed current site structure, performance metrics, and user behavior patterns',
          status: 'completed',
          timestamp: new Date(Date.now() - 3600000), // 1 hour ago
          metrics: {
            performanceScore: 72,
            accessibilityScore: 85,
            bestPracticesScore: 80,
            seoScore: 68
          }
        },
        {
          id: 2,
          title: 'Optimization Planning',
          description: 'Identified 3 key improvement areas: image optimization, code splitting, and SEO enhancements',
          status: 'completed',
          timestamp: new Date(Date.now() - 1800000), // 30 minutes ago
          recommendations: [
            'Implement lazy loading for below-the-fold images',
            'Add code splitting for route-based components',
            'Optimize meta tags and structured data'
          ]
        },
        {
          id: 3,
          title: 'Autonomous Implementation',
          description: 'AI agents are implementing optimizations in real-time',
          status: 'in-progress',
          timestamp: new Date(Date.now() - 300000), // 5 minutes ago
          progress: 65,
          activeAgents: [
            { name: 'Performance Optimizer', status: 'working' },
            { name: 'SEO Specialist', status: 'analyzing' },
            { name: 'Accessibility Auditor', status: 'idle' }
          ]
        },
        {
          id: 4,
          title: 'Validation & Testing',
          description: 'Running A/B tests and validating improvements',
          status: 'pending',
          timestamp: null,
          estimatedCompletion: new Date(Date.now() + 7200000) // 2 hours from now
        },
        {
          id: 5,
          title: 'Deployment & Monitoring',
          description: 'Preparing for production deployment with rollback procedures',
          status: 'pending',
          timestamp: null
        }
      ];
      
      setEvolutionSteps(sampleSteps);
      setIsGenerating(false);
    };

    loadEvolutionData();
  }, []);

  const handleRefresh = async () => {
    setIsGenerating(true);
    // In a real app, this would trigger a new analysis cycle
    await new Promise(resolve => setTimeout(resolve, 3000));
    // Update with new data
    setEvolutionSteps(prev => 
      prev.map(step => ({
        ...step,
        status: step.status === 'in-progress' ? 'completed' : step.status,
        progress: step.status === 'in-progress' ? 100 : step.progress
      }))
    );
    setIsGenerating(false);
  };

  return (
    <div className="min-h-[600px] bg-gray-50 p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
          <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
          AI Site Evolution Advisor
        </h1>
        <p className="text-gray-600 mt-2">
          Watch how autonomous AI pipelines evolve ziontechgroup.com in real time
        </p>
        <div className="mt-4 flex items-center gap-4">
          <input
            type="url"
            value={currentUrl}
            onChange={(e) => setCurrentUrl(e.target.value)}
            placeholder="Enter URL to analyze"
            className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleRefresh}
            disabled={isGenerating}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {isGenerating ? 'Analyzing...' : 'Start Evolution Analysis'}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {evolutionSteps.map((step) => (
          <div key={step.id} className="border-l-4 border-gray-200 pl-4 py-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-1">
                  <h3 className="text-lg font-medium text-gray-800">{step.title}</h3>
                  <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${getStatusColor(step.status)}`}>
                    {step.status}
                  </span>
                </div>
                <p className="text-gray-600">{step.description}</p>
                
                {step.metrics && (
                  <div className="mt-3 flex gap-4 text-sm text-gray-500">
                    <div>Performance: {step.metrics.performanceScore}</div>
                    <div>Accessibility: {step.metrics.accessibilityScore}</div>
                    <div>SEO: {step.metrics.seoScore}</div>
                  </div>
                )}
                
                {step.recommendations && (
                  <div className="mt-3">
                    <p className="font-medium text-gray-700 mb-1">Recommendations:</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {step.recommendations.map((rec, idx) => (
                        <li key={idx}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {step.activeAgents && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {step.activeAgents.map((agent) => (
                      <span key={agent.name} className="px-2 py-1 text-xs rounded bg-gray-100">
                        {agent.name}: {agent.status}
                      </span>
                    ))}
                  </div>
                )}
                
                {step.progress !== undefined && (
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Progress</span>
                      <span>{step.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className={`bg-blue-600 h-2 rounded-full`} style={{ width: `${step.progress}%` }}></div>
                    </div>
                  </div>
                )}
                
                {step.estimatedCompletion && (
                  <p className="mt-2 text-sm text-gray-500">
                    Estimated completion: {step.estimatedCompletion.toLocaleTimeString()}
                  </p>
                )}
              </div>
              <div className="text-right text-gray-400">
                <time dateTime={step.timestamp?.toISOString()}>
                  {step.timestamp ? step.timestamp.toLocaleTimeString() : '--:--'}
                </time>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isGenerating && (
        <div className="mt-6 flex items-center gap-3">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-gray-600">Analyzing site evolution patterns...</span>
        </div>
      )}
    </div>
  );
}

function getStatusColor(status: string): string {
  switch (status) {
    case 'completed': return 'bg-green-100 text-green-800';
    case 'in-progress': return 'bg-blue-100 text-blue-800';
    case 'pending': return 'bg-yellow-100 text-yellow-800';
    default: return 'bg-gray-100 text-gray-800';
  }
}