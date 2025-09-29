import React, { useState } from 'react';

interface MissionParameters {
  distance: number; // in AU (Astronomical Units)
  payload: number; // in kg
  missionDuration: number; // in years
  crewSize: number;
  missionType: 'exploration' | 'colonization' | 'research' | 'mining';
  aiLevel: 'basic' | 'advanced' | 'quantum';
}

interface MissionResults {
  totalCost: number;
  successProbability: number;
  timeToComplete: number;
  resourceRequirements: {
    fuel: number;
    supplies: number;
    equipment: number;
  };
  aiBenefits: {
    costSavings: number;
    timeReduction: number;
    riskReduction: number;
  };
}

const SpaceMissionAICalculator: React.FC = () => {
  const [parameters, setParameters] = useState<MissionParameters>({
    distance: 1.5, // Mars distance
    payload: 1000,
    missionDuration: 2,
    crewSize: 4,
    missionType: 'exploration',
    aiLevel: 'advanced'
  });

  const [results, setResults] = useState<MissionResults | null>(null);

  const calculateMission = () => {
    const { distance, payload, missionDuration, crewSize, missionType, aiLevel } = parameters;
    
    // Base calculations
    const baseCost = distance * 500000000 + payload * 100000 + crewSize * 50000000;
    const baseTime = distance * 0.5 + missionDuration;
    const baseSuccess = 0.85;

    // AI level multipliers
    const aiMultipliers = {
      basic: { cost: 0.9, time: 0.95, success: 1.1 },
      advanced: { cost: 0.7, time: 0.8, success: 1.3 },
      quantum: { cost: 0.5, time: 0.6, success: 1.5 }
    };

    const multiplier = aiMultipliers[aiLevel];

    // Mission type adjustments
    const typeMultipliers = {
      exploration: { cost: 1.0, time: 1.0, success: 1.0 },
      colonization: { cost: 2.5, time: 1.5, success: 0.8 },
      research: { cost: 1.2, time: 1.1, success: 1.1 },
      mining: { cost: 1.8, time: 1.3, success: 0.9 }
    };

    const typeMultiplier = typeMultipliers[missionType];

    // Calculate results
    const totalCost = baseCost * multiplier.cost * typeMultiplier.cost;
    const successProbability = Math.min(0.99, baseSuccess * multiplier.success * typeMultiplier.success);
    const timeToComplete = baseTime * multiplier.time * typeMultiplier.time;

    const resourceRequirements = {
      fuel: Math.round(payload * 0.3 * distance * multiplier.cost),
      supplies: Math.round(crewSize * missionDuration * 365 * 2),
      equipment: Math.round(payload * 0.7 * typeMultiplier.cost)
    };

    const aiBenefits = {
      costSavings: Math.round(baseCost * (1 - multiplier.cost)),
      timeReduction: Math.round((baseTime - timeToComplete) * 365),
      riskReduction: Math.round((successProbability - baseSuccess) * 100)
    };

    setResults({
      totalCost,
      successProbability,
      timeToComplete,
      resourceRequirements,
      aiBenefits
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          🚀 Space Mission AI Calculator
        </h2>
        <p className="text-gray-600">
          Calculate the impact of AI on your space mission parameters and costs
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Parameters */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Mission Parameters</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Distance (Astronomical Units)
            </label>
            <input
              type="range"
              min="0.5"
              max="10"
              step="0.1"
              value={parameters.distance}
              onChange={(e) => setParameters({...parameters, distance: parseFloat(e.target.value)})}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0.5 AU (Mars)</span>
              <span className="font-semibold">{parameters.distance} AU</span>
              <span>10 AU (Jupiter)</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payload Weight (kg)
            </label>
            <input
              type="number"
              value={parameters.payload}
              onChange={(e) => setParameters({...parameters, payload: parseInt(e.target.value) || 0})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mission Duration (years)
            </label>
            <input
              type="range"
              min="0.5"
              max="10"
              step="0.5"
              value={parameters.missionDuration}
              onChange={(e) => setParameters({...parameters, missionDuration: parseFloat(e.target.value)})}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-center text-sm text-gray-600 mt-1">
              {parameters.missionDuration} years
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Crew Size
            </label>
            <input
              type="range"
              min="0"
              max="20"
              step="1"
              value={parameters.crewSize}
              onChange={(e) => setParameters({...parameters, crewSize: parseInt(e.target.value)})}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-center text-sm text-gray-600 mt-1">
              {parameters.crewSize} crew members
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mission Type
            </label>
            <select
              value={parameters.missionType}
              onChange={(e) => setParameters({...parameters, missionType: e.target.value as any})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="exploration">🔍 Exploration</option>
              <option value="colonization">🏠 Colonization</option>
              <option value="research">🔬 Research</option>
              <option value="mining">⛏️ Mining</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              AI Level
            </label>
            <div className="space-y-2">
              {[
                { value: 'basic', label: 'Basic AI', desc: '10% cost reduction' },
                { value: 'advanced', label: 'Advanced AI', desc: '30% cost reduction' },
                { value: 'quantum', label: 'Quantum AI', desc: '50% cost reduction' }
              ].map((option) => (
                <label key={option.value} className="flex items-center">
                  <input
                    type="radio"
                    name="aiLevel"
                    value={option.value}
                    checked={parameters.aiLevel === option.value}
                    onChange={(e) => setParameters({...parameters, aiLevel: e.target.value as any})}
                    className="mr-3"
                  />
                  <div>
                    <div className="font-medium text-gray-900">{option.label}</div>
                    <div className="text-sm text-gray-600">{option.desc}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <button
            onClick={calculateMission}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Calculate Mission
          </button>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Mission Analysis</h3>
          
          {results ? (
            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {formatCurrency(results.totalCost)}
                  </div>
                  <div className="text-sm text-gray-600">Total Cost</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {Math.round(results.successProbability * 100)}%
                  </div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>

              {/* AI Benefits */}
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">🤖 AI Benefits</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cost Savings:</span>
                    <span className="font-semibold text-green-600">
                      {formatCurrency(results.aiBenefits.costSavings)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time Reduction:</span>
                    <span className="font-semibold text-blue-600">
                      {results.aiBenefits.timeReduction} days
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Risk Reduction:</span>
                    <span className="font-semibold text-purple-600">
                      +{results.aiBenefits.riskReduction}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Resource Requirements */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">📦 Resource Requirements</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fuel:</span>
                    <span className="font-semibold">{results.resourceRequirements.fuel} kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Supplies:</span>
                    <span className="font-semibold">{results.resourceRequirements.supplies} kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Equipment:</span>
                    <span className="font-semibold">{results.resourceRequirements.equipment} kg</span>
                  </div>
                </div>
              </div>

              {/* Mission Timeline */}
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">⏱️ Mission Timeline</h4>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">
                    {results.timeToComplete.toFixed(1)} years
                  </div>
                  <div className="text-sm text-gray-600">Total Mission Duration</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <div className="text-4xl mb-4">🚀</div>
              <p>Configure your mission parameters and click "Calculate Mission" to see the AI impact analysis.</p>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Ready to Launch Your AI-Powered Space Mission?
        </h3>
        <p className="text-gray-700 mb-4">
          Partner with Zion Tech Group to implement cutting-edge AI solutions for your space exploration projects.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Start Your Project
          </button>
          <button className="bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpaceMissionAICalculator;