import React, { useEffect, useState } from "react";
import { Zap, CheckCircle, AlertTriangle } from "lucide-react";

interface OptimizationResult {
  type: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  status: 'completed' | 'pending' | 'failed';
}

const PerformanceOptimizer: React.FC = () => {
  const [optimizations, setOptimizations] = useState<OptimizationResult[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);

  useEffect(() => {
    // Initialize with default optimizations
    setOptimizations([
      {
        type: 'Image Optimization',
        description: 'Compress and optimize images for web',
        impact: 'high',
        status: 'pending'
      },
      {
        type: 'Code Splitting',
        description: 'Split code into smaller chunks for faster loading',
        impact: 'high',
        status: 'pending'
      },
      {
        type: 'Lazy Loading',
        description: 'Load components only when needed',
        impact: 'medium',
        status: 'pending'
      },
      {
        type: 'Bundle Analysis',
        description: 'Analyze and reduce bundle size',
        impact: 'medium',
        status: 'pending'
      },
      {
        type: 'Caching',
        description: 'Implement proper caching strategies',
        impact: 'high',
        status: 'pending'
      }
    ]);
  }, []);

  const runOptimizations = async () => {
    setIsOptimizing(true);
    
    for (let i = 0; i < optimizations.length; i++) {
      // Simulate optimization process
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setOptimizations(prev => 
        prev.map((opt, index) => 
          index === i 
            ? { ...opt, status: 'completed' as const }
            : opt
        )
      );
    }
    
    setIsOptimizing(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'failed':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      default:
        return <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high':
        return 'text-red-600 bg-red-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'low':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <Zap className="w-6 h-6 mr-2 text-blue-600" />
            Performance Optimizer
          </h2>
          <button
            onClick={runOptimizations}
            disabled={isOptimizing}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isOptimizing ? 'Optimizing...' : 'Run Optimizations'}
          </button>
        </div>
        
        <div className="space-y-4">
          {optimizations.map((optimization, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-4">
                {getStatusIcon(optimization.status)}
                <div>
                  <h3 className="font-semibold text-gray-900">{optimization.type}</h3>
                  <p className="text-sm text-gray-600">{optimization.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(optimization.impact)}`}>
                  {optimization.impact} impact
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  optimization.status === 'completed' 
                    ? 'text-green-600 bg-green-100' 
                    : optimization.status === 'failed'
                    ? 'text-red-600 bg-red-100'
                    : 'text-gray-600 bg-gray-100'
                }`}>
                  {optimization.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PerformanceOptimizer;
