import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Clock, Users, Zap, Target } from 'lucide-react';

interface ROIInputs {
  currentCosts: number;
  automationEfficiency: number;
  implementationCost: number;
  timeToImplement: number;
  teamSize: number;
}

interface ROIResults {
  monthlySavings: number;
  annualSavings: number;
  paybackPeriod: number;
  threeYearROI: number;
  efficiencyGains: string;
}

const AIROICalculator: React.FC = () => {
  const [inputs, setInputs] = useState<ROIInputs>({
    currentCosts: 50000,
    automationEfficiency: 30,
    implementationCost: 75000,
    timeToImplement: 6,
    teamSize: 10
  });

  const [results, setResults] = useState<ROIResults | null>(null);
  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    const monthlySavings = (inputs.currentCosts * inputs.automationEfficiency) / 100;
    const annualSavings = monthlySavings * 12;
    const paybackPeriod = inputs.implementationCost / monthlySavings;
    const threeYearROI = ((annualSavings * 3) - inputs.implementationCost) / inputs.implementationCost * 100;
    
    let efficiencyGains = "";
    if (inputs.automationEfficiency >= 50) {
      efficiencyGains = "Exceptional - Industry leading automation";
    } else if (inputs.automationEfficiency >= 30) {
      efficiencyGains = "Excellent - Significant productivity gains";
    } else if (inputs.automationEfficiency >= 20) {
      efficiencyGains = "Good - Meaningful efficiency improvements";
    } else {
      efficiencyGains = "Moderate - Measurable improvements";
    }

    setResults({
      monthlySavings,
      annualSavings,
      paybackPeriod,
      threeYearROI,
      efficiencyGains
    });
    setShowResults(true);
  };

  const handleInputChange = (field: keyof ROIInputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
          <Calculator className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">AI ROI Calculator</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Calculate the potential return on investment for AI automation in your organization. 
          Get instant insights into cost savings, efficiency gains, and payback periods.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Current Situation</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <DollarSign className="w-4 h-4 inline mr-2" />
              Current Monthly Operational Costs ($)
            </label>
            <input
              type="number"
              value={inputs.currentCosts}
              onChange={(e) => handleInputChange('currentCosts', parseInt(e.target.value) || 0)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="50000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Zap className="w-4 h-4 inline mr-2" />
              Expected Automation Efficiency (%)
            </label>
            <input
              type="number"
              min="0"
              max="100"
              value={inputs.automationEfficiency}
              onChange={(e) => handleInputChange('automationEfficiency', parseInt(e.target.value) || 0)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="30"
            />
            <p className="text-sm text-gray-500 mt-1">Percentage of current costs that can be automated</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Target className="w-4 h-4 inline mr-2" />
              AI Implementation Cost ($)
            </label>
            <input
              type="number"
              value={inputs.implementationCost}
              onChange={(e) => handleInputChange('implementationCost', parseInt(e.target.value) || 0)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="75000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Clock className="w-4 h-4 inline mr-2" />
              Time to Implement (months)
            </label>
            <input
              type="number"
              value={inputs.timeToImplement}
              onChange={(e) => handleInputChange('timeToImplement', parseInt(e.target.value) || 0)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="6"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Users className="w-4 h-4 inline mr-2" />
              Team Size (people)
            </label>
            <input
              type="number"
              value={inputs.teamSize}
              onChange={(e) => handleInputChange('teamSize', parseInt(e.target.value) || 0)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="10"
            />
          </div>

          <button
            onClick={calculateROI}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Calculate ROI
          </button>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">ROI Analysis</h3>
          
          {showResults && results ? (
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-green-800">Monthly Savings</h4>
                    <p className="text-2xl font-bold text-green-600">
                      ${results.monthlySavings.toLocaleString()}
                    </p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-blue-800">Annual Savings</h4>
                    <p className="text-2xl font-bold text-blue-600">
                      ${results.annualSavings.toLocaleString()}
                    </p>
                  </div>
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-purple-800">Payback Period</h4>
                    <p className="text-2xl font-bold text-purple-600">
                      {results.paybackPeriod.toFixed(1)} months
                    </p>
                  </div>
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-orange-800">3-Year ROI</h4>
                    <p className="text-2xl font-bold text-orange-600">
                      {results.threeYearROI.toFixed(0)}%
                    </p>
                  </div>
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Efficiency Assessment</h4>
                <p className="text-gray-700">{results.efficiencyGains}</p>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg p-4">
                <h4 className="font-semibold mb-2">Recommendation</h4>
                <p className="text-sm">
                  {results.paybackPeriod < 12 
                    ? "Excellent investment opportunity with quick payback period."
                    : results.paybackPeriod < 24
                    ? "Good investment with reasonable payback period."
                    : "Consider phased implementation to reduce upfront costs."
                  }
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <Calculator className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Enter your information and click "Calculate ROI" to see results</p>
            </div>
          )}
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-3">💡 Tips for Better ROI</h4>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>• Start with high-volume, repetitive tasks for maximum impact</li>
          <li>• Consider phased implementation to spread costs over time</li>
          <li>• Factor in training and change management costs</li>
          <li>• Include both direct cost savings and productivity improvements</li>
          <li>• Monitor and measure results continuously to optimize</li>
        </ul>
      </div>
    </div>
  );
};

export default AIROICalculator;