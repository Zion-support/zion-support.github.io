'use client';

import React, { useState } from 'react';

interface AISolution {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  pricing: {
    monthly: number;
    setup: number;
    enterprise: boolean;
  };
  roi: {
    timeframe: string;
    percentage: number;
    savings: number;
  };
  implementation: {
    duration: string;
    complexity: 'Low' | 'Medium' | 'High';
    teamSize: number;
  };
  bestFor: string[];
  limitations: string[];
}

const AISolutionsComparison: React.FC = () => {
  const [selectedSolutions, setSelectedSolutions] = useState<string[]>([]);
  const [comparisonMode, setComparisonMode] = useState<'features' | 'pricing' | 'roi'>('features');

  const solutions: AISolution[] = [
    {
      id: 'ai-automation',
      name: 'AI Process Automation',
      category: 'Automation',
      description: 'Intelligent automation for business processes with 80% efficiency gains',
      features: [
        'Workflow automation',
        'Document processing',
        'Data extraction',
        'Decision making',
        'Integration APIs',
        'Real-time monitoring'
      ],
      pricing: {
        monthly: 5000,
        setup: 15000,
        enterprise: true
      },
      roi: {
        timeframe: '6-12 months',
        percentage: 400,
        savings: 250000
      },
      implementation: {
        duration: '8-12 weeks',
        complexity: 'Medium',
        teamSize: 4
      },
      bestFor: ['Manufacturing', 'Finance', 'Healthcare', 'Retail'],
      limitations: ['Requires data quality', 'Complex workflows need customization']
    },
    {
      id: 'quantum-ai',
      name: 'Quantum AI Computing',
      category: 'Advanced AI',
      description: 'Next-generation quantum-powered AI for complex problem solving',
      features: [
        'Quantum algorithms',
        'Neural optimization',
        'Pattern recognition',
        'Predictive modeling',
        'Real-time processing',
        'Scalable architecture'
      ],
      pricing: {
        monthly: 25000,
        setup: 100000,
        enterprise: true
      },
      roi: {
        timeframe: '12-18 months',
        percentage: 600,
        savings: 500000
      },
      implementation: {
        duration: '16-24 weeks',
        complexity: 'High',
        teamSize: 8
      },
      bestFor: ['Research', 'Pharmaceuticals', 'Finance', 'Defense'],
      limitations: ['High complexity', 'Specialized hardware required']
    },
    {
      id: 'autonomous-systems',
      name: 'Autonomous AI Systems',
      category: 'Autonomous',
      description: 'Self-managing AI systems that operate independently',
      features: [
        'Self-healing systems',
        'Autonomous decision making',
        'Continuous learning',
        'Adaptive algorithms',
        'Predictive maintenance',
        'Zero-touch operations'
      ],
      pricing: {
        monthly: 15000,
        setup: 50000,
        enterprise: true
      },
      roi: {
        timeframe: '9-15 months',
        percentage: 350,
        savings: 400000
      },
      implementation: {
        duration: '12-20 weeks',
        complexity: 'High',
        teamSize: 6
      },
      bestFor: ['Manufacturing', 'Energy', 'Transportation', 'Logistics'],
      limitations: ['Requires monitoring', 'Complex debugging']
    },
    {
      id: 'micro-saas',
      name: 'AI Micro SaaS Platform',
      category: 'SaaS',
      description: 'Scalable micro SaaS solutions for rapid deployment',
      features: [
        'Multi-tenant architecture',
        'API-first design',
        'Scalable infrastructure',
        'User management',
        'Analytics dashboard',
        'Custom integrations'
      ],
      pricing: {
        monthly: 2000,
        setup: 10000,
        enterprise: false
      },
      roi: {
        timeframe: '3-6 months',
        percentage: 200,
        savings: 100000
      },
      implementation: {
        duration: '4-8 weeks',
        complexity: 'Low',
        teamSize: 2
      },
      bestFor: ['Startups', 'SMBs', 'SaaS companies', 'Consultancies'],
      limitations: ['Limited customization', 'Standard features only']
    }
  ];

  const toggleSolution = (solutionId: string) => {
    setSelectedSolutions(prev => 
      prev.includes(solutionId) 
        ? prev.filter(id => id !== solutionId)
        : [...prev, solutionId]
    );
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Low': return 'text-green-500 bg-green-100';
      case 'Medium': return 'text-yellow-500 bg-yellow-100';
      case 'High': return 'text-red-500 bg-red-100';
      default: return 'text-gray-500 bg-gray-100';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const filteredSolutions = selectedSolutions.length > 0 
    ? solutions.filter(s => selectedSolutions.includes(s.id))
    : solutions;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI Solutions Comparison Tool
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare our AI solutions side-by-side to find the perfect fit for your business needs
          </p>
        </div>

        {/* Comparison Mode Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm border">
            {(['features', 'pricing', 'roi'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setComparisonMode(mode)}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  comparisonMode === mode
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Solution Selection */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-6">Select Solutions to Compare</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                onClick={() => toggleSolution(solution.id)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedSolutions.includes(solution.id)
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={selectedSolutions.includes(solution.id)}
                    onChange={() => {}}
                    className="w-4 h-4 text-blue-600"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{solution.name}</h4>
                    <p className="text-sm text-gray-600">{solution.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Solution</th>
                  {comparisonMode === 'features' && (
                    <React.Fragment>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Features</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Best For</th>
                    </React.Fragment>
                  )}
                  {comparisonMode === 'pricing' && (
                    <React.Fragment>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Monthly Cost</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Setup Cost</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Implementation</th>
                    </React.Fragment>
                  )}
                  {comparisonMode === 'roi' && (
                    <React.Fragment>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">ROI Timeframe</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">ROI Percentage</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Annual Savings</th>
                    </React.Fragment>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredSolutions.map((solution) => (
                  <tr key={solution.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <h4 className="font-semibold text-gray-900">{solution.name}</h4>
                        <p className="text-sm text-gray-600">{solution.description}</p>
                      </div>
                    </td>
                    
                    {comparisonMode === 'features' && (
                      <React.Fragment>
                        <td className="px-6 py-4">
                          <ul className="text-sm text-gray-600 space-y-1">
                            {solution.features.slice(0, 3).map((feature, index) => (
                              <li key={index}>• {feature}</li>
                            ))}
                            {solution.features.length > 3 && (
                              <li className="text-blue-600">+{solution.features.length - 3} more</li>
                            )}
                          </ul>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-wrap gap-1">
                            {solution.bestFor.slice(0, 2).map((industry, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                              >
                                {industry}
                              </span>
                            ))}
                            {solution.bestFor.length > 2 && (
                              <span className="text-xs text-gray-500">
                                +{solution.bestFor.length - 2} more
                              </span>
                            )}
                          </div>
                        </td>
                      </React.Fragment>
                    )}
                    
                    {comparisonMode === 'pricing' && (
                      <React.Fragment>
                        <td className="px-6 py-4">
                          <span className="text-lg font-semibold text-gray-900">
                            {formatCurrency(solution.pricing.monthly)}
                          </span>
                          <span className="text-sm text-gray-500">/month</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-lg font-semibold text-gray-900">
                            {formatCurrency(solution.pricing.setup)}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-1">
                            <div className="text-sm text-gray-900">{solution.implementation.duration}</div>
                            <div className={`inline-block px-2 py-1 rounded-full text-xs ${getComplexityColor(solution.implementation.complexity)}`}>
                              {solution.implementation.complexity} Complexity
                            </div>
                          </div>
                        </td>
                      </React.Fragment>
                    )}
                    
                    {comparisonMode === 'roi' && (
                      <React.Fragment>
                        <td className="px-6 py-4">
                          <span className="text-lg font-semibold text-green-600">
                            {solution.roi.timeframe}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-lg font-semibold text-green-600">
                            {solution.roi.percentage}%
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-lg font-semibold text-green-600">
                            {formatCurrency(solution.roi.savings)}
                          </span>
                        </td>
                      </React.Fragment>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to implement the perfect AI solution for your business?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors transform hover:scale-105">
              Get Custom Recommendation
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISolutionsComparison;