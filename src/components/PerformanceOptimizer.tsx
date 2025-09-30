import React, { useState, useEffect } from 'react';

interface OptimizationSuggestion {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  category: 'performance' | 'seo' | 'accessibility' | 'security';
  status: 'pending' | 'applied' | 'ignored';
}

const PerformanceOptimizer: React.FC = () => {
  const [suggestions, setSuggestions] = useState<OptimizationSuggestion[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);

  useEffect(() => {
    // Simulate analysis
    const analyzePerformance = () => {
      setIsAnalyzing(true);
      setAnalysisProgress(0);

      const interval = setInterval(() => {
        setAnalysisProgress(prev => {
          if (prev >= 100) {
            setIsAnalyzing(false);
            clearInterval(interval);
            generateSuggestions();
            return 100;
          }
          return prev + Math.random() * 20;
        });
      }, 200);
    };

    analyzePerformance();
  }, []);

  const generateSuggestions = () => {
    const mockSuggestions: OptimizationSuggestion[] = [
      {
        id: '1',
        title: 'Enable Image Compression',
        description: 'Compress images to reduce load times by up to 40%',
        impact: 'high',
        category: 'performance',
        status: 'pending'
      },
      {
        id: '2',
        title: 'Implement Lazy Loading',
        description: 'Load images and components only when needed',
        impact: 'high',
        category: 'performance',
        status: 'pending'
      },
      {
        id: '3',
        title: 'Add Meta Descriptions',
        description: 'Improve SEO with proper meta descriptions',
        impact: 'medium',
        category: 'seo',
        status: 'pending'
      },
      {
        id: '4',
        title: 'Fix Alt Text',
        description: 'Add alt text to images for accessibility',
        impact: 'medium',
        category: 'accessibility',
        status: 'pending'
      },
      {
        id: '5',
        title: 'Enable HTTPS',
        description: 'Secure all connections with HTTPS',
        impact: 'high',
        category: 'security',
        status: 'pending'
      }
    ];

    setSuggestions(mockSuggestions);
  };

  const applySuggestion = (id: string) => {
    setSuggestions(prev => 
      prev.map(suggestion => 
        suggestion.id === id 
          ? { ...suggestion, status: 'applied' }
          : suggestion
      )
    );
  };

  const ignoreSuggestion = (id: string) => {
    setSuggestions(prev => 
      prev.map(suggestion => 
        suggestion.id === id 
          ? { ...suggestion, status: 'ignored' }
          : suggestion
      )
    );
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'performance': return 'bg-blue-100 text-blue-800';
      case 'seo': return 'bg-green-100 text-green-800';
      case 'accessibility': return 'bg-purple-100 text-purple-800';
      case 'security': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'applied': return 'text-green-600 bg-green-100';
      case 'ignored': return 'text-gray-600 bg-gray-100';
      default: return 'text-yellow-600 bg-yellow-100';
    }
  };

  if (isAnalyzing) {
    return (
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Analyzing Performance...</h3>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${analysisProgress}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">{Math.round(analysisProgress)}% complete</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Suggestions</p>
              <p className="text-2xl font-bold text-blue-600">{suggestions.length}</p>
            </div>
            <div className="p-2 bg-blue-100 rounded-full">
              <div className="w-6 h-6 text-blue-600">💡</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Applied</p>
              <p className="text-2xl font-bold text-green-600">
                {suggestions.filter(s => s.status === 'applied').length}
              </p>
            </div>
            <div className="p-2 bg-green-100 rounded-full">
              <div className="w-6 h-6 text-green-600">✅</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-yellow-600">
                {suggestions.filter(s => s.status === 'pending').length}
              </p>
            </div>
            <div className="p-2 bg-yellow-100 rounded-full">
              <div className="w-6 h-6 text-yellow-600">⏳</div>
            </div>
          </div>
        </div>
      </div>

      {/* Suggestions List */}
      <div className="space-y-4">
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="text-lg font-semibold text-gray-800">{suggestion.title}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(suggestion.impact)}`}>
                    {suggestion.impact} impact
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(suggestion.category)}`}>
                    {suggestion.category}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(suggestion.status)}`}>
                    {suggestion.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{suggestion.description}</p>
              </div>
            </div>
            
            {suggestion.status === 'pending' && (
              <div className="flex space-x-2">
                <button
                  onClick={() => applySuggestion(suggestion.id)}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Apply
                </button>
                <button
                  onClick={() => ignoreSuggestion(suggestion.id)}
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
                >
                  Ignore
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Bulk Actions</h3>
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
            Apply All High Impact
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            Apply All Performance
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors">
            Apply All SEO
          </button>
          <button className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors">
            Reset Analysis
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOptimizer;