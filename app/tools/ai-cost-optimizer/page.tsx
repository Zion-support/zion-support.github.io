import React, { useState, useEffect } from 'react';
import SEO from "../../components/SEO";
import Card from '../../../components/ui/Card';

export default function AICostOptimizer() {
  const [currentTab, setCurrentTab] = useState('analysis');
  const [costData, setCostData] = useState({
    compute: 2500,
    storage: 800,
    dataTransfer: 300,
    licensing: 1200,
    personnel: 15000
  });
  const [optimizationResults, setOptimizationResults] = useState({
    potentialSavings: 35,
    optimizedCost: 13000,
    recommendations: []
  });

  const costCategories = [
    {
      name: 'Compute Resources',
      current: 2500,
      optimized: 1600,
      savings: 900,
      percentage: 36,
      icon: '💻',
      recommendations: [
        'Implement auto-scaling for non-peak hours',
        'Use spot instances for batch processing',
        'Optimize model inference with quantization'
      ]
    },
    {
      name: 'Storage Costs',
      current: 800,
      optimized: 500,
      savings: 300,
      percentage: 37.5,
      icon: '💾',
      recommendations: [
        'Implement data lifecycle policies',
        'Use compressed storage formats',
        'Archive cold data to cheaper storage tiers'
      ]
    },
    {
      name: 'Data Transfer',
      current: 300,
      optimized: 180,
      savings: 120,
      percentage: 40,
      icon: '🌐',
      recommendations: [
        'Implement CDN for model serving',
        'Use data compression techniques',
        'Optimize API response sizes'
      ]
    },
    {
      name: 'Licensing Fees',
      current: 1200,
      optimized: 800,
      savings: 400,
      percentage: 33.3,
      icon: '📄',
      recommendations: [
        'Negotiate enterprise licensing deals',
        'Consider open-source alternatives',
        'Implement license usage monitoring'
      ]
    },
    {
      name: 'Personnel Costs',
      current: 15000,
      optimized: 12000,
      savings: 3000,
      percentage: 20,
      icon: '👥',
      recommendations: [
        'Implement MLOps automation',
        'Use managed AI services',
        'Invest in team training for efficiency'
      ]
    }
  ];

  const optimizationStrategies = [
    {
      title: 'Infrastructure Optimization',
      description: 'Optimize your cloud infrastructure and compute resources',
      impact: 'High',
      effort: 'Medium',
      savings: '$1,500/month',
      icon: '🏗️',
      steps: [
        'Implement auto-scaling policies',
        'Use spot instances for batch jobs',
        'Optimize container resource allocation',
        'Implement cost monitoring and alerts'
      ]
    },
    {
      title: 'Model Optimization',
      description: 'Optimize your AI models for better performance and lower costs',
      impact: 'High',
      effort: 'High',
      savings: '$2,000/month',
      icon: '🧠',
      steps: [
        'Implement model quantization',
        'Use model pruning techniques',
        'Optimize inference pipelines',
        'Implement model versioning and caching'
      ]
    },
    {
      title: 'Data Management',
      description: 'Optimize data storage, processing, and transfer costs',
      impact: 'Medium',
      effort: 'Low',
      savings: '$800/month',
      icon: '📊',
      steps: [
        'Implement data lifecycle policies',
        'Use compressed data formats',
        'Optimize data pipeline architecture',
        'Implement data deduplication'
      ]
    },
    {
      title: 'Process Automation',
      description: 'Automate processes to reduce manual intervention and costs',
      impact: 'Medium',
      effort: 'Medium',
      savings: '$1,200/month',
      icon: '⚙️',
      steps: [
        'Implement MLOps automation',
        'Use managed AI services',
        'Automate model deployment and monitoring',
        'Implement automated cost optimization'
      ]
    }
  ];

  const costTrends = [
    { month: 'Jan', cost: 18500 },
    { month: 'Feb', cost: 19200 },
    { month: 'Mar', cost: 20100 },
    { month: 'Apr', cost: 19500 },
    { month: 'May', cost: 18900 },
    { month: 'Jun', cost: 18200 }
  ];

  const totalCurrentCost = Object.values(costData).reduce((sum, cost) => sum + cost, 0);
  const totalOptimizedCost = totalCurrentCost * (1 - optimizationResults.potentialSavings / 100);
  const totalSavings = totalCurrentCost - totalOptimizedCost;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="AI Cost Optimizer - Zion Tech Group"
        description="Optimize your AI infrastructure costs while maintaining performance and reliability. Get detailed cost analysis and optimization recommendations."
        keywords="AI cost optimization, cloud cost optimization, AI infrastructure costs, cost reduction, AI ROI, cloud savings"
        url="/tools/ai-cost-optimizer"
      />

      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              💰 AI Cost Optimizer
            </h1>
            <p className="text-xl">
              Optimize your AI infrastructure costs while maintaining performance and reliability.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8">
          <button
            onClick={() => setCurrentTab('analysis')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              currentTab === 'analysis'
                ? 'bg-orange-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            📊 Cost Analysis
          </button>
          <button
            onClick={() => setCurrentTab('optimization')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              currentTab === 'optimization'
                ? 'bg-orange-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            ⚡ Optimization
          </button>
          <button
            onClick={() => setCurrentTab('recommendations')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              currentTab === 'recommendations'
                ? 'bg-orange-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            🎯 Recommendations
          </button>
        </div>

        {/* Cost Analysis Tab */}
        {currentTab === 'analysis' && (
          <div className="space-y-8">
            {/* Cost Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">${totalCurrentCost.toLocaleString()}</div>
                <h3 className="text-lg font-semibold mb-2">Current Monthly Cost</h3>
                <p className="text-sm text-gray-600">Total AI infrastructure spending</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">${totalSavings.toLocaleString()}</div>
                <h3 className="text-lg font-semibold mb-2">Potential Savings</h3>
                <p className="text-sm text-gray-600">Monthly cost reduction opportunity</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{optimizationResults.potentialSavings}%</div>
                <h3 className="text-lg font-semibold mb-2">Savings Percentage</h3>
                <p className="text-sm text-gray-600">Cost reduction potential</p>
              </Card>
            </div>

            {/* Cost Breakdown */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6">💰 Cost Breakdown by Category</h3>
              <div className="space-y-4">
                {costCategories.map((category, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{category.icon}</span>
                        <div>
                          <h4 className="font-semibold">{category.name}</h4>
                          <p className="text-sm text-gray-600">Current: ${category.current.toLocaleString()}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">${category.savings.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">{category.percentage}% savings</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-orange-600 h-2 rounded-full"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Cost Trends */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6">📈 Cost Trends (Last 6 Months)</h3>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <p className="text-gray-600">Interactive cost trend chart would be displayed here</p>
                  <p className="text-sm text-gray-500 mt-2">Showing monthly cost variations and trends</p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Optimization Tab */}
        {currentTab === 'optimization' && (
          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6">⚡ Optimization Strategies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {optimizationStrategies.map((strategy, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <span className="text-3xl mr-3">{strategy.icon}</span>
                        <div>
                          <h4 className="font-bold text-lg">{strategy.title}</h4>
                          <p className="text-gray-600">{strategy.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-600 font-bold">{strategy.savings}</div>
                        <div className="text-sm text-gray-600">{strategy.impact} Impact</div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Implementation Steps:</span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          strategy.effort === 'Low' ? 'bg-green-100 text-green-800' :
                          strategy.effort === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {strategy.effort} Effort
                        </span>
                      </div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {strategy.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-center">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors">
                      Implement Strategy
                    </button>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* Recommendations Tab */}
        {currentTab === 'recommendations' && (
          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6">🎯 Personalized Recommendations</h3>
              <div className="space-y-6">
                {costCategories.map((category, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-2xl mr-3">{category.icon}</span>
                      <div>
                        <h4 className="font-bold text-lg">{category.name}</h4>
                        <p className="text-gray-600">Potential savings: ${category.savings.toLocaleString()} ({category.percentage}%)</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h5 className="font-semibold">Recommended Actions:</h5>
                      <ul className="space-y-2">
                        {category.recommendations.map((recommendation, recIndex) => (
                          <li key={recIndex} className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            <span className="text-gray-700">{recommendation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Implementation Timeline */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6">📅 Implementation Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">1</div>
                  <div>
                    <h4 className="font-semibold">Week 1-2: Infrastructure Audit</h4>
                    <p className="text-sm text-gray-600">Analyze current usage patterns and identify optimization opportunities</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">2</div>
                  <div>
                    <h4 className="font-semibold">Week 3-4: Quick Wins Implementation</h4>
                    <p className="text-sm text-gray-600">Implement low-effort, high-impact optimizations</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-yellow-50 rounded-lg">
                  <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">3</div>
                  <div>
                    <h4 className="font-semibold">Week 5-8: Advanced Optimizations</h4>
                    <p className="text-sm text-gray-600">Implement model optimization and process automation</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">4</div>
                  <div>
                    <h4 className="font-semibold">Week 9-12: Monitoring & Fine-tuning</h4>
                    <p className="text-sm text-gray-600">Monitor results and fine-tune optimizations</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* CTA Section */}
        <Card className="p-8 mt-8 bg-gradient-to-r from-green-500 to-blue-500 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your AI Costs?</h3>
            <p className="text-lg mb-6">
              Get expert consultation on AI cost optimization and infrastructure efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                📞 Schedule Consultation
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                💰 View Cost Optimization Services
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}