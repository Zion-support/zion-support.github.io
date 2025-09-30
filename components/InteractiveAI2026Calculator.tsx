import React, { useState } from 'react';

export default function InteractiveAI2026Calculator() {
  const [formData, setFormData] = useState({
    annualRevenue: '',
    employees: '',
    currentEfficiency: '',
    industry: 'manufacturing'
  });

  const [results, setResults] = useState(null);

  const calculateROI = () => {
    const revenue = parseFloat(formData.annualRevenue) || 0;
    const empCount = parseInt(formData.employees) || 0;
    const efficiency = parseFloat(formData.currentEfficiency) || 0;
    
    // AI 2026 ROI calculation based on industry benchmarks
    const costSavings = revenue * 0.15; // 15% cost reduction
    const productivityGains = revenue * 0.25; // 25% productivity increase
    const efficiencyImprovement = (100 - efficiency) * 0.9; // 90% of current inefficiency
    const totalROI = ((costSavings + productivityGains) / revenue) * 100;
    
    setResults({
      costSavings: Math.round(costSavings),
      productivityGains: Math.round(productivityGains),
      efficiencyImprovement: Math.round(efficiencyImprovement),
      totalROI: Math.round(totalROI),
      paybackPeriod: Math.round(12 / (totalROI / 100))
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your AI 2026 ROI</h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Annual Revenue ($)
              </label>
              <input
                type="number"
                placeholder="10,000,000"
                value={formData.annualRevenue}
                onChange={(e) => setFormData({...formData, annualRevenue: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Number of Employees
              </label>
              <input
                type="number"
                placeholder="500"
                value={formData.employees}
                onChange={(e) => setFormData({...formData, employees: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Current Efficiency (%)
              </label>
              <input
                type="number"
                placeholder="60"
                min="0"
                max="100"
                value={formData.currentEfficiency}
                onChange={(e) => setFormData({...formData, currentEfficiency: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Industry
              </label>
              <select
                value={formData.industry}
                onChange={(e) => setFormData({...formData, industry: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="manufacturing">Manufacturing</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
                <option value="retail">Retail</option>
                <option value="technology">Technology</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <button
              onClick={calculateROI}
              className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Calculate AI 2026 ROI
            </button>
          </div>
        </div>

        {/* Results Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Projected Results</h3>
          {results ? (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Annual Cost Savings</h4>
                    <p className="text-gray-600 text-sm">From AI automation and optimization</p>
                  </div>
                  <div className="text-3xl font-bold text-green-600">
                    ${results.costSavings.toLocaleString()}
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Productivity Gains</h4>
                    <p className="text-gray-600 text-sm">From enhanced efficiency</p>
                  </div>
                  <div className="text-3xl font-bold text-blue-600">
                    ${results.productivityGains.toLocaleString()}
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Efficiency Improvement</h4>
                    <p className="text-gray-600 text-sm">Overall operational efficiency</p>
                  </div>
                  <div className="text-3xl font-bold text-purple-600">
                    {results.efficiencyImprovement}%
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Total ROI</h4>
                    <p className="text-gray-600 text-sm">Return on AI investment</p>
                  </div>
                  <div className="text-3xl font-bold text-orange-600">
                    {results.totalROI}%
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Payback Period</h4>
                    <p className="text-gray-600 text-sm">Months to recover investment</p>
                  </div>
                  <div className="text-3xl font-bold text-teal-600">
                    {results.paybackPeriod} months
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">📊</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Ready to Calculate?</h4>
              <p className="text-gray-600">
                Enter your business metrics to see your projected AI 2026 ROI and transformation results.
              </p>
            </div>
          )}
          
          {results && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="bg-blue-50 rounded-lg p-4">
                <h5 className="font-semibold text-blue-900 mb-2">AI 2026 Technologies Included:</h5>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Quantum-enhanced optimization</li>
                  <li>• Autonomous business systems</li>
                  <li>• Neural interface technology</li>
                  <li>• Edge AI computing</li>
                  <li>• Multimodal AI integration</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {results && (
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <h4 className="text-xl font-bold text-gray-900 mb-4">Ready to Achieve These Results?</h4>
          <p className="text-gray-600 mb-6">
            Our AI 2026 Revolutionary Solutions can help you achieve these projected results 
            with guaranteed ROI and expert implementation support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="/services/ai-2026-revolutionary-solutions"
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Explore AI 2026 Solutions
            </a>
          </div>
        </div>
      )}
    </div>
  );
}