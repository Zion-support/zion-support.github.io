'use client';
import React, { useState, useEffect } from 'react';
import { Search, CheckCircle, AlertTriangle, TrendingUp, Globe, Eye, Zap } from 'lucide-react';

interface SEOOptimization {
  id: string;
  title: string;
  description: string;
  status: 'good' | 'warning' | 'error';
  value: string | number;
  recommendation?: string;
  category: 'meta' | 'content' | 'technical' | 'performance';
}

const AdvancedSEOOptimizer: React.FC = () => {
  const [optimizations, setOptimizations] = useState<SEOOptimization[]>([
    {
      id: 'title-tag',
      title: 'Title Tag',
      description: 'Page title optimization',
      status: 'good',
      value: 'Zion Tech Group - AI Solutions',
      category: 'meta'
    },
    {
      id: 'meta-description',
      title: 'Meta Description',
      description: 'Meta description length and content',
      status: 'warning',
      value: 120,
      recommendation: 'Optimize meta description for better click-through rates',
      category: 'meta'
    },
    {
      id: 'heading-structure',
      title: 'Heading Structure',
      description: 'H1, H2, H3 tag hierarchy',
      status: 'good',
      value: 'Properly structured',
      category: 'content'
    },
    {
      id: 'image-alt',
      title: 'Image Alt Text',
      description: 'Alt text for images',
      status: 'error',
      value: '3 images missing alt text',
      recommendation: 'Add descriptive alt text to all images',
      category: 'content'
    },
    {
      id: 'page-speed',
      title: 'Page Speed',
      description: 'Core Web Vitals performance',
      status: 'warning',
      value: '2.3s',
      recommendation: 'Optimize images and scripts for faster loading',
      category: 'performance'
    },
    {
      id: 'mobile-friendly',
      title: 'Mobile Friendly',
      description: 'Mobile responsiveness',
      status: 'good',
      value: 'Responsive design',
      category: 'technical'
    },
    {
      id: 'ssl-certificate',
      title: 'SSL Certificate',
      description: 'HTTPS security',
      status: 'good',
      value: 'Active',
      category: 'technical'
    },
    {
      id: 'internal-links',
      title: 'Internal Links',
      description: 'Internal linking structure',
      status: 'warning',
      value: '12 internal links',
      recommendation: 'Add more internal links for better SEO',
      category: 'content'
    }
  ]);

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [overallScore, setOverallScore] = useState(0);

  useEffect(() => {
    calculateOverallScore();
  }, [optimizations]);

  const calculateOverallScore = () => {
    const total = optimizations.length;
    const good = optimizations.filter(opt => opt.status === 'good').length;
    const warning = optimizations.filter(opt => opt.status === 'warning').length;
    const error = optimizations.filter(opt => opt.status === 'error').length;
    
    const score = Math.round(((good * 100) + (warning * 60) + (error * 20)) / total);
    setOverallScore(score);
  };

  const runAnalysis = async () => {
    setIsAnalyzing(true);
    
    // Simulate analysis process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Update optimizations with new analysis
    const updatedOptimizations = optimizations.map(opt => ({
      ...opt,
      status: Math.random() > 0.3 ? 'good' : Math.random() > 0.5 ? 'warning' : 'error'
    }));
    
    setOptimizations(updatedOptimizations);
    setIsAnalyzing(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="h-5 w-5 text-green-400" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-400" />;
      case 'error':
        return <AlertTriangle className="h-5 w-5 text-red-400" />;
      default:
        return <AlertTriangle className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'border-green-500/50 bg-green-500/10';
      case 'warning':
        return 'border-yellow-500/50 bg-yellow-500/10';
      case 'error':
        return 'border-red-500/50 bg-red-500/10';
      default:
        return 'border-gray-500/50 bg-gray-500/10';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'meta':
        return <Search className="h-4 w-4" />;
      case 'content':
        return <Eye className="h-4 w-4" />;
      case 'technical':
        return <Zap className="h-4 w-4" />;
      case 'performance':
        return <TrendingUp className="h-4 w-4" />;
      default:
        return <Globe className="h-4 w-4" />;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white flex items-center gap-2">
          <Search className="h-5 w-5" />
          SEO Optimizer
        </h3>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className={`text-2xl font-bold ${getScoreColor(overallScore)}`}>
              {overallScore}
            </div>
            <div className="text-sm text-gray-400">SEO Score</div>
          </div>
          <button
            onClick={runAnalysis}
            disabled={isAnalyzing}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isAnalyzing ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Search className="h-4 w-4" />
                Analyze
              </>
            )}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {optimizations.map((optimization) => (
          <div
            key={optimization.id}
            className={`p-4 rounded-lg border transition-all duration-300 ${getStatusColor(optimization.status)}`}
          >
            <div className="flex items-start gap-3">
              <div className="flex items-center gap-2">
                {getStatusIcon(optimization.status)}
                <div className="text-gray-400">
                  {getCategoryIcon(optimization.category)}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-white font-medium">{optimization.title}</h4>
                  <span className="text-sm text-gray-300">
                    {typeof optimization.value === 'number' ? `${optimization.value}` : optimization.value}
                  </span>
                </div>
                <p className="text-sm text-gray-300 mb-2">{optimization.description}</p>
                {optimization.recommendation && (
                  <p className="text-sm text-yellow-300 bg-yellow-500/10 px-3 py-2 rounded-lg">
                    💡 {optimization.recommendation}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <h4 className="text-lg font-semibold text-white mb-4">Quick Actions</h4>
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg font-medium hover:bg-blue-500/30 transition-colors duration-300 flex items-center justify-center gap-2">
            <Globe className="h-4 w-4" />
            Generate Sitemap
          </button>
          <button className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg font-medium hover:bg-green-500/30 transition-colors duration-300 flex items-center justify-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Optimize Images
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSEOOptimizer;