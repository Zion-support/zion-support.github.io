"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface AssessmentResults {
  overallScore: number;
  readinessLevel: string;
  recommendations: string[];
  implementationRoadmap: {
    phase: string;
    duration: string;
    keyActivities: string[];
  }[];
  estimatedInvestment: number;
  expectedROI: number;
  timeline: string;
}

export default function QuantumAIReadinessAssessment() {
  const [formData, setFormData] = useState({
    organizationSize: 'medium',
    industry: 'technology',
    currentAIMaturity: 3,
    quantumAwareness: 2,
    dataComplexity: 3,
    computationalNeeds: 3,
    budget: 'moderate',
    timeline: '12-18',
    technicalCapabilities: 3,
    leadershipCommitment: 3,
    changeManagement: 3,
    riskTolerance: 3
  });

  const [results, setResults] = useState<AssessmentResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const organizationSizes = {
    startup: { name: 'Startup (1-50)', multiplier: 0.6 },
    small: { name: 'Small (51-200)', multiplier: 0.8 },
    medium: { name: 'Medium (201-1000)', multiplier: 1.0 },
    large: { name: 'Large (1001-5000)', multiplier: 1.3 },
    enterprise: { name: 'Enterprise (5000+)', multiplier: 1.6 }
  };

  const industries = {
    technology: { name: 'Technology', quantumPotential: 1.4 },
    financial: { name: 'Financial Services', quantumPotential: 1.2 },
    healthcare: { name: 'Healthcare', quantumPotential: 1.0 },
    manufacturing: { name: 'Manufacturing', quantumPotential: 1.1 },
    energy: { name: 'Energy', quantumPotential: 1.3 },
    aerospace: { name: 'Aerospace', quantumPotential: 1.5 }
  };

  const budgetLevels = {
    limited: { name: 'Limited ($100K - $1M)', base: 500000 },
    moderate: { name: 'Moderate ($1M - $10M)', base: 5000000 },
    substantial: { name: 'Substantial ($10M - $50M)', base: 30000000 },
    unlimited: { name: 'Unlimited ($50M+)', base: 100000000 }
  };

  const calculateReadiness = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const orgSize = organizationSizes[formData.organizationSize as keyof typeof organizationSizes];
      const industry = industries[formData.industry as keyof typeof industries];
      const budget = budgetLevels[formData.budget as keyof typeof budgetLevels];
      
      // Calculate overall score (0-100)
      const technicalScore = (formData.currentAIMaturity + formData.quantumAwareness + formData.technicalCapabilities) * 8.33;
      const businessScore = (formData.leadershipCommitment + formData.changeManagement + formData.riskTolerance) * 8.33;
      const dataScore = (formData.dataComplexity + formData.computationalNeeds) * 8.33;
      
      const overallScore = Math.round((technicalScore + businessScore + dataScore) / 3);
      
      // Determine readiness level
      let readinessLevel = '';
      if (overallScore >= 80) readinessLevel = 'Quantum Ready';
      else if (overallScore >= 60) readinessLevel = 'Near Ready';
      else if (overallScore >= 40) readinessLevel = 'Developing';
      else readinessLevel = 'Early Stage';
      
      // Generate recommendations
      const recommendations = generateRecommendations(overallScore, formData);
      
      // Create implementation roadmap
      const implementationRoadmap = createImplementationRoadmap(readinessLevel, formData);
      
      // Calculate investment and ROI
      const estimatedInvestment = budget.base * orgSize.multiplier * industry.quantumPotential;
      const expectedROI = calculateExpectedROI(overallScore, industry.quantumPotential);
      
      setResults({
        overallScore,
        readinessLevel,
        recommendations,
        implementationRoadmap,
        estimatedInvestment,
        expectedROI,
        timeline: formData.timeline
      });
      
      setIsCalculating(false);
    }, 2000);
  };

  const generateRecommendations = (score: number, data: any) => {
    const recommendations = [];
    
    if (data.currentAIMaturity < 3) {
      recommendations.push('Develop foundational AI capabilities before quantum implementation');
    }
    
    if (data.quantumAwareness < 3) {
      recommendations.push('Invest in quantum computing education and awareness programs');
    }
    
    if (data.leadershipCommitment < 3) {
      recommendations.push('Secure executive leadership commitment and budget allocation');
    }
    
    if (data.technicalCapabilities < 3) {
      recommendations.push('Build technical team with quantum computing expertise');
    }
    
    if (data.changeManagement < 3) {
      recommendations.push('Develop comprehensive change management strategy');
    }
    
    if (data.dataComplexity < 3) {
      recommendations.push('Enhance data quality and complexity for quantum processing');
    }
    
    if (score >= 80) {
      recommendations.push('Proceed with quantum AI pilot program');
      recommendations.push('Establish quantum computing partnerships');
    }
    
    return recommendations;
  };

  const createImplementationRoadmap = (level: string, data: any) => {
    const roadmaps = {
      'Early Stage': [
        {
          phase: 'Foundation Building',
          duration: '6-12 months',
          keyActivities: [
            'AI maturity assessment and improvement',
            'Quantum computing education programs',
            'Technical team development',
            'Data quality enhancement'
          ]
        },
        {
          phase: 'Pilot Planning',
          duration: '3-6 months',
          keyActivities: [
            'Pilot project identification',
            'Technology partner selection',
            'Budget allocation and approval',
            'Stakeholder engagement'
          ]
        }
      ],
      'Developing': [
        {
          phase: 'Capability Development',
          duration: '3-6 months',
          keyActivities: [
            'Quantum computing training',
            'Technical infrastructure planning',
            'Pilot project design',
            'Partnership establishment'
          ]
        },
        {
          phase: 'Pilot Implementation',
          duration: '6-12 months',
          keyActivities: [
            'Limited quantum AI deployment',
            'Performance monitoring',
            'Team training and support',
            'Results analysis'
          ]
        }
      ],
      'Near Ready': [
        {
          phase: 'Pilot Execution',
          duration: '3-6 months',
          keyActivities: [
            'Quantum AI pilot deployment',
            'Performance optimization',
            'Stakeholder training',
            'Success metrics tracking'
          ]
        },
        {
          phase: 'Scaling Preparation',
          duration: '6-12 months',
          keyActivities: [
            'Pilot results analysis',
            'Scaling strategy development',
            'Infrastructure expansion',
            'Change management rollout'
          ]
        }
      ],
      'Quantum Ready': [
        {
          phase: 'Full Implementation',
          duration: '6-12 months',
          keyActivities: [
            'Enterprise-wide quantum AI deployment',
            'Advanced capability development',
            'Continuous optimization',
            'Competitive advantage realization'
          ]
        },
        {
          phase: 'Innovation Leadership',
          duration: 'Ongoing',
          keyActivities: [
            'Advanced quantum applications',
            'Industry leadership positioning',
            'Continuous innovation',
            'Market expansion'
          ]
        }
      ]
    };
    
    return roadmaps[level as keyof typeof roadmaps] || roadmaps['Early Stage'];
  };

  const calculateExpectedROI = (score: number, quantumPotential: number) => {
    const baseROI = 200; // Base ROI percentage
    const scoreMultiplier = score / 100;
    const potentialMultiplier = quantumPotential;
    
    return Math.round(baseROI * scoreMultiplier * potentialMultiplier);
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-blue-600';
    if (score >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getReadinessColor = (level: string) => {
    switch (level) {
      case 'Quantum Ready': return 'bg-green-100 text-green-800';
      case 'Near Ready': return 'bg-blue-100 text-blue-800';
      case 'Developing': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Quantum AI Readiness Assessment 2026
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Assess your organization's readiness for quantum AI transformation. Get personalized 
            recommendations and implementation roadmap for quantum computing success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Assessment Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Assessment Questions</h2>
            
            {/* Organization Size */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Organization Size
              </label>
              <select
                value={formData.organizationSize}
                onChange={(e) => handleInputChange('organizationSize', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="startup">Startup (1-50 employees)</option>
                <option value="small">Small (51-200 employees)</option>
                <option value="medium">Medium (201-1000 employees)</option>
                <option value="large">Large (1001-5000 employees)</option>
                <option value="enterprise">Enterprise (5000+ employees)</option>
              </select>
            </div>

            {/* Industry */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Industry
              </label>
              <select
                value={formData.industry}
                onChange={(e) => handleInputChange('industry', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="technology">Technology</option>
                <option value="financial">Financial Services</option>
                <option value="healthcare">Healthcare</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="energy">Energy</option>
                <option value="aerospace">Aerospace</option>
              </select>
            </div>

            {/* Current AI Maturity */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current AI Maturity Level: {formData.currentAIMaturity}/5
              </label>
              <input
                type="range"
                min="1"
                max="5"
                value={formData.currentAIMaturity}
                onChange={(e) => handleInputChange('currentAIMaturity', parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Basic</span>
                <span>Intermediate</span>
                <span>Advanced</span>
                <span>Expert</span>
                <span>Leading</span>
              </div>
            </div>

            {/* Quantum Awareness */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantum Computing Awareness: {formData.quantumAwareness}/5
              </label>
              <input
                type="range"
                min="1"
                max="5"
                value={formData.quantumAwareness}
                onChange={(e) => handleInputChange('quantumAwareness', parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>None</span>
                <span>Basic</span>
                <span>Good</span>
                <span>Expert</span>
                <span>Leading</span>
              </div>
            </div>

            {/* Data Complexity */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Data Complexity: {formData.dataComplexity}/5
              </label>
              <input
                type="range"
                min="1"
                max="5"
                value={formData.dataComplexity}
                onChange={(e) => handleInputChange('dataComplexity', parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Simple</span>
                <span>Moderate</span>
                <span>Complex</span>
                <span>Very Complex</span>
                <span>Quantum-Suitable</span>
              </div>
            </div>

            {/* Computational Needs */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Computational Needs: {formData.computationalNeeds}/5
              </label>
              <input
                type="range"
                min="1"
                max="5"
                value={formData.computationalNeeds}
                onChange={(e) => handleInputChange('computationalNeeds', parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Low</span>
                <span>Moderate</span>
                <span>High</span>
                <span>Very High</span>
                <span>Quantum-Level</span>
              </div>
            </div>

            {/* Budget */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Available Budget
              </label>
              <select
                value={formData.budget}
                onChange={(e) => handleInputChange('budget', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="limited">Limited ($100K - $1M)</option>
                <option value="moderate">Moderate ($1M - $10M)</option>
                <option value="substantial">Substantial ($10M - $50M)</option>
                <option value="unlimited">Unlimited ($50M+)</option>
              </select>
            </div>

            {/* Leadership Commitment */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Leadership Commitment: {formData.leadershipCommitment}/5
              </label>
              <input
                type="range"
                min="1"
                max="5"
                value={formData.leadershipCommitment}
                onChange={(e) => handleInputChange('leadershipCommitment', parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>None</span>
                <span>Limited</span>
                <span>Moderate</span>
                <span>Strong</span>
                <span>Champion</span>
              </div>
            </div>

            {/* Change Management */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Change Management Capability: {formData.changeManagement}/5
              </label>
              <input
                type="range"
                min="1"
                max="5"
                value={formData.changeManagement}
                onChange={(e) => handleInputChange('changeManagement', parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Poor</span>
                <span>Fair</span>
                <span>Good</span>
                <span>Excellent</span>
                <span>Outstanding</span>
              </div>
            </div>

            {/* Risk Tolerance */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Risk Tolerance: {formData.riskTolerance}/5
              </label>
              <input
                type="range"
                min="1"
                max="5"
                value={formData.riskTolerance}
                onChange={(e) => handleInputChange('riskTolerance', parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Very Low</span>
                <span>Low</span>
                <span>Moderate</span>
                <span>High</span>
                <span>Very High</span>
              </div>
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculateReadiness}
              disabled={isCalculating}
              className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isCalculating ? 'Assessing...' : 'Assess Readiness'}
            </button>
          </div>

          {/* Results */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Assessment Results</h2>
            
            {results ? (
              <div className="space-y-6">
                {/* Overall Score */}
                <div className="text-center">
                  <div className={`text-4xl font-bold ${getScoreColor(results.overallScore)} mb-2`}>
                    {results.overallScore}/100
                  </div>
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${getReadinessColor(results.readinessLevel)}`}>
                    {results.readinessLevel}
                  </div>
                </div>

                {/* Investment Analysis */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Investment Analysis</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Estimated Investment:</span>
                      <span className="font-semibold">{formatCurrency(results.estimatedInvestment)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Expected ROI:</span>
                      <span className="font-semibold text-green-600">{results.expectedROI}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Timeline:</span>
                      <span className="font-semibold">{results.timeline} months</span>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Recommendations</h3>
                  <ul className="space-y-2">
                    {results.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-700">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Implementation Roadmap */}
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Implementation Roadmap</h3>
                  <div className="space-y-4">
                    {results.implementationRoadmap.map((phase, index) => (
                      <div key={index} className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-gray-900">{phase.phase}</h4>
                        <p className="text-sm text-gray-600 mb-2">Duration: {phase.duration}</p>
                        <ul className="space-y-1">
                          {phase.keyActivities.map((activity, actIndex) => (
                            <li key={actIndex} className="text-sm text-gray-700 flex items-start">
                              <span className="text-green-500 mr-2">•</span>
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next Steps */}
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Steps</h3>
                  <div className="space-y-3">
                    <Link
                      href="/contact"
                      className="block w-full bg-purple-600 text-white text-center py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Schedule Quantum AI Consultation
                    </Link>
                    <Link
                      href="/resources/quantum-ai-implementation-guide"
                      className="block w-full border border-purple-600 text-purple-600 text-center py-2 px-4 rounded-lg hover:bg-purple-50 transition-colors"
                    >
                      Download Implementation Guide
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-600">
                  Complete the assessment to see your quantum AI readiness analysis.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quantum AI Readiness Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Early Stage</h3>
              <div className="text-2xl font-bold text-red-600 mb-1">0-39</div>
              <div className="text-sm text-gray-600">Focus on foundation building</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Developing</h3>
              <div className="text-2xl font-bold text-yellow-600 mb-1">40-59</div>
              <div className="text-sm text-gray-600">Build capabilities and awareness</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Near Ready</h3>
              <div className="text-2xl font-bold text-blue-600 mb-1">60-79</div>
              <div className="text-sm text-gray-600">Prepare for pilot implementation</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Quantum Ready</h3>
              <div className="text-2xl font-bold text-green-600 mb-1">80-100</div>
              <div className="text-sm text-gray-600">Ready for full implementation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}