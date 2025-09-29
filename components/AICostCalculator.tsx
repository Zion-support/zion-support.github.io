import React, { useState, useEffect } from 'react';

interface CalculationResult {
  currentCost: number;
  optimizedCost: number;
  savings: number;
  savingsPercentage: number;
  recommendations: string[];
}

export default function AICostCalculator() {
  const [inputs, setInputs] = useState({
    monthlyCalls: 1000000,
    avgTokensPerCall: 500,
    currentModel: 'gpt-4',
    optimizationLevel: 'high'
  });

  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const modelPricing = {
    'gpt-4': { input: 0.03, output: 0.06 },
    'gpt-3.5-turbo': { input: 0.001, output: 0.002 },
    'claude-3-opus': { input: 0.015, output: 0.075 },
    'claude-3-sonnet': { input: 0.003, output: 0.015 },
    'claude-3-haiku': { input: 0.00025, output: 0.00125 }
  };

  const optimizationLevels = {
    low: { costReduction: 0.2, strategies: ['Basic prompt optimization'] },
    medium: { costReduction: 0.45, strategies: ['Model selection', 'Prompt optimization', 'Basic caching'] },
    high: { costReduction: 0.7, strategies: ['Model selection', 'Advanced prompt optimization', 'Response caching', 'Batch processing', 'Streaming'] }
  };

  const calculateCosts = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const pricing = modelPricing[inputs.currentModel as keyof typeof modelPricing];
      const totalTokens = inputs.monthlyCalls * inputs.avgTokensPerCall;
      const inputTokens = totalTokens * 0.7; // Assume 70% input tokens
      const outputTokens = totalTokens * 0.3; // Assume 30% output tokens
      
      const currentCost = (inputTokens / 1000 * pricing.input) + (outputTokens / 1000 * pricing.output);
      
      const optimization = optimizationLevels[inputs.optimizationLevel as keyof typeof optimizationLevels];
      const optimizedCost = currentCost * (1 - optimization.costReduction);
      const savings = currentCost - optimizedCost;
      const savingsPercentage = (savings / currentCost) * 100;

      setResult({
        currentCost,
        optimizedCost,
        savings,
        savingsPercentage,
        recommendations: optimization.strategies
      });
      
      setIsCalculating(false);
    }, 1500);
  };

  useEffect(() => {
    calculateCosts();
  }, [inputs]);

  const handleInputChange = (field: string, value: number | string) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getSavingsColor = (percentage: number) => {
    if (percentage >= 60) return 'text-green-600';
    if (percentage >= 40) return 'text-blue-600';
    if (percentage >= 20) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getSavingsBgColor = (percentage: number) => {
    if (percentage >= 60) return 'bg-green-100 border-green-200';
    if (percentage >= 40) return 'bg-blue-100 border-blue-200';
    if (percentage >= 20) return 'bg-yellow-100 border-yellow-200';
    return 'bg-red-100 border-red-200';
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          AI Cost Calculator 2026
        </h2>
        <p className="text-gray-600">
          Calculate your potential AI cost savings with our interactive calculator
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Monthly API Calls
            </label>
            <input
              type="number"
              value={inputs.monthlyCalls}
              onChange={(e) => handleInputChange('monthlyCalls', parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="1,000,000"
            />
            <p className="text-xs text-gray-500 mt-1">
              Number of API calls you make per month
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Average Tokens per Call
            </label>
            <input
              type="number"
              value={inputs.avgTokensPerCall}
              onChange={(e) => handleInputChange('avgTokensPerCall', parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Average number of tokens (input + output) per API call
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current AI Model
            </label>
            <select
              value={inputs.currentModel}
              onChange={(e) => handleInputChange('currentModel', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="gpt-4">GPT-4</option>
              <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
              <option value="claude-3-opus">Claude 3 Opus</option>
              <option value="claude-3-sonnet">Claude 3 Sonnet</option>
              <option value="claude-3-haiku">Claude 3 Haiku</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">
              The AI model you're currently using
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Optimization Level
            </label>
            <select
              value={inputs.optimizationLevel}
              onChange={(e) => handleInputChange('optimizationLevel', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="low">Low (20% savings)</option>
              <option value="medium">Medium (45% savings)</option>
              <option value="high">High (70% savings)</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">
              Level of optimization strategies applied
            </p>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {isCalculating ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Calculating your savings...</p>
              </div>
            </div>
          ) : result ? (
            <>
              <div className={`rounded-lg border p-6 ${getSavingsBgColor(result.savingsPercentage)}`}>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Cost Analysis</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Current Monthly Cost:</span>
                    <span className="text-xl font-bold text-gray-900">
                      ${result.currentCost.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Optimized Monthly Cost:</span>
                    <span className="text-xl font-bold text-green-600">
                      ${result.optimizedCost.toFixed(2)}
                    </span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Monthly Savings:</span>
                      <span className={`text-2xl font-bold ${getSavingsColor(result.savingsPercentage)}`}>
                        ${result.savings.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Savings Percentage:</span>
                      <span className={`text-xl font-bold ${getSavingsColor(result.savingsPercentage)}`}>
                        {result.savingsPercentage.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Optimization Strategies</h3>
                <ul className="space-y-2">
                  {result.recommendations.map((strategy, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-600">{strategy}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Annual Projection
                </h3>
                <p className="text-blue-800">
                  Based on your current usage, you could save{' '}
                  <span className="font-bold">${(result.savings * 12).toFixed(2)}</span>{' '}
                  annually with our optimization strategies.
                </p>
              </div>
            </>
          ) : null}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
          >
            Get Free Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </div>
    </div>
  );
}