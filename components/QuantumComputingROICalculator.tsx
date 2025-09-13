import React, { useState } from 'react';

const QuantumComputingROICalculator = () => {
  const [inputs, setInputs] = useState({
    currentProcessingTime: 100, // hours
    currentAccuracy: 85, // percentage
    currentCost: 1000000, // annual cost
    problemComplexity: 'high',
    industry: 'technology',
    companySize: 'large'
  });

  const [results, setResults] = useState(null);

  const calculateQuantumROI = () => {
    const { currentProcessingTime, currentAccuracy, currentCost, problemComplexity, industry, companySize } = inputs;
    
    // Complexity multipliers
    const complexityMultipliers = {
      low: 0.5,
      medium: 1.0,
      high: 2.0,
      extreme: 3.0
    };

    // Industry multipliers
    const industryMultipliers = {
      technology: 1.5,
      finance: 2.0,
      healthcare: 1.8,
      manufacturing: 1.3,
      retail: 1.0,
      other: 1.0
    };

    // Company size multipliers
    const sizeMultipliers = {
      small: 0.5,
      medium: 1.0,
      large: 1.5,
      enterprise: 2.0
    };

    const complexityMultiplier = complexityMultipliers[problemComplexity] || 1.0;
    const industryMultiplier = industryMultipliers[industry] || 1.0;
    const sizeMultiplier = sizeMultipliers[companySize] || 1.0;
    const baseMultiplier = complexityMultiplier * industryMultiplier * sizeMultiplier;

    // Calculate quantum improvements
    const timeReduction = Math.min(99.9, 95 + (problemComplexity === 'extreme' ? 4.9 : 0)); // 95-99.9% time reduction
    const newProcessingTime = currentProcessingTime * (1 - timeReduction / 100);
    
    const accuracyImprovement = Math.min(99.9, currentAccuracy + (100 - currentAccuracy) * 0.8); // Up to 99.9% accuracy
    const accuracyGain = accuracyImprovement - currentAccuracy;
    
    // Calculate benefits
    const timeSavingsValue = currentCost * (timeReduction / 100) * 0.8; // 80% of cost saved from time reduction
    const accuracyValue = currentCost * (accuracyGain / 100) * 0.6; // 60% of cost saved from accuracy improvement
    const quantumSpeedupValue = currentCost * 0.3 * baseMultiplier; // Additional value from quantum speedup
    
    const totalBenefits = timeSavingsValue + accuracyValue + quantumSpeedupValue;
    const quantumImplementationCost = currentCost * 0.25; // 25% of current cost for quantum implementation
    const netBenefits = totalBenefits - quantumImplementationCost;
    const roi = ((netBenefits / quantumImplementationCost) * 100);
    
    const paybackPeriod = quantumImplementationCost / (totalBenefits / 12); // months

    setResults({
      timeReduction,
      newProcessingTime,
      accuracyImprovement,
      accuracyGain,
      timeSavingsValue,
      accuracyValue,
      quantumSpeedupValue,
      totalBenefits,
      quantumImplementationCost,
      netBenefits,
      roi,
      paybackPeriod
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Quantum Computing ROI Calculator
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Calculate the potential return on investment for implementing quantum computing solutions in your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Input Form */}
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Your Current Situation</h3>
            
            <div className="space-y-8">
              {/* Processing Time */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  Current Processing Time (hours)
                </label>
                <input
                  type="number"
                  value={inputs.currentProcessingTime}
                  onChange={(e) => setInputs({...inputs, currentProcessingTime: parseInt(e.target.value) || 0})}
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
                  placeholder="100"
                />
              </div>

              {/* Current Accuracy */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  Current Accuracy (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={inputs.currentAccuracy}
                  onChange={(e) => setInputs({...inputs, currentAccuracy: parseInt(e.target.value) || 0})}
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
                  placeholder="85"
                />
              </div>

              {/* Current Cost */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  Current Annual Cost ($)
                </label>
                <input
                  type="number"
                  value={inputs.currentCost}
                  onChange={(e) => setInputs({...inputs, currentCost: parseInt(e.target.value) || 0})}
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
                  placeholder="1000000"
                />
              </div>

              {/* Problem Complexity */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  Problem Complexity
                </label>
                <select
                  value={inputs.problemComplexity}
                  onChange={(e) => setInputs({...inputs, problemComplexity: e.target.value})}
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
                >
                  <option value="low">Low - Simple optimization problems</option>
                  <option value="medium">Medium - Standard business problems</option>
                  <option value="high">High - Complex multi-variable problems</option>
                  <option value="extreme">Extreme - Previously unsolvable problems</option>
                </select>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  Industry
                </label>
                <select
                  value={inputs.industry}
                  onChange={(e) => setInputs({...inputs, industry: e.target.value})}
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
                >
                  <option value="technology">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Company Size */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  Company Size
                </label>
                <select
                  value={inputs.companySize}
                  onChange={(e) => setInputs({...inputs, companySize: e.target.value})}
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
                >
                  <option value="small">Small (1-50 employees)</option>
                  <option value="medium">Medium (51-500 employees)</option>
                  <option value="large">Large (501-5000 employees)</option>
                  <option value="enterprise">Enterprise (5000+ employees)</option>
                </select>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateQuantumROI}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 rounded-xl font-bold text-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Calculate Quantum ROI
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Quantum Computing Projections</h3>
            
            {results ? (
              <div className="space-y-8">
                {/* ROI Percentage */}
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-8 text-center">
                  <div className="text-5xl font-bold text-green-600 mb-3">
                    {formatNumber(Math.round(results.roi))}%
                  </div>
                  <div className="text-2xl font-semibold text-green-800">Expected ROI</div>
                </div>

                {/* Key Improvements */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {results.timeReduction.toFixed(1)}%
                    </div>
                    <div className="text-lg text-blue-800">Time Reduction</div>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      {results.accuracyImprovement.toFixed(1)}%
                    </div>
                    <div className="text-lg text-purple-800">New Accuracy</div>
                  </div>
                </div>

                {/* Financial Breakdown */}
                <div className="space-y-6">
                  <h4 className="text-xl font-bold text-gray-900">Financial Breakdown</h4>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-semibold text-gray-700">Time Savings Value</span>
                      <span className="font-bold text-green-600">{formatCurrency(results.timeSavingsValue)}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-semibold text-gray-700">Accuracy Value</span>
                      <span className="font-bold text-blue-600">{formatCurrency(results.accuracyValue)}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-semibold text-gray-700">Quantum Speedup Value</span>
                      <span className="font-bold text-purple-600">{formatCurrency(results.quantumSpeedupValue)}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-semibold text-gray-700">Total Benefits</span>
                      <span className="font-bold text-green-600">{formatCurrency(results.totalBenefits)}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-semibold text-gray-700">Implementation Cost</span>
                      <span className="font-bold text-red-600">{formatCurrency(results.quantumImplementationCost)}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-semibold text-gray-700">Net Benefits</span>
                      <span className="font-bold text-green-600">{formatCurrency(results.netBenefits)}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="font-semibold text-gray-700">Payback Period</span>
                      <span className="font-bold text-indigo-600">{results.paybackPeriod.toFixed(1)} months</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                  <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    Get Quantum Implementation Plan
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-16">
                <div className="text-8xl mb-6">⚛️</div>
                <p className="text-2xl">Enter your current situation and click "Calculate Quantum ROI" to see your projected results.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingROICalculator;