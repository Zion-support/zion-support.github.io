import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function InteractiveAICalculator2026() {
  const [annualRevenue, setAnnualRevenue] = useState(10000000);
  const [currentEfficiency, setCurrentEfficiency] = useState(70);
  const [automationLevel, setAutomationLevel] = useState(30);

  // Calculate potential savings
  const efficiencyGain = (100 - currentEfficiency) * 0.8; // 80% of remaining efficiency
  const automationSavings = (automationLevel / 100) * 0.6; // 60% savings from automation
  const totalSavings = annualRevenue * (efficiencyGain + automationSavings) / 100;
  const roiPercentage = (totalSavings / (annualRevenue * 0.05)) * 100; // Assuming 5% of revenue as investment

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Interactive AI ROI Calculator 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your potential savings and ROI with our revolutionary AI enterprise automation 
            and quantum computing solutions. See real-time projections based on your business metrics.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Inputs */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Your Business Metrics</h3>
            
            <div className="space-y-8">
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-4">
                  Annual Revenue: ${annualRevenue.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="1000000"
                  max="1000000000"
                  step="1000000"
                  value={annualRevenue}
                  onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                  className="w-full h-3 bg-gradient-to-r from-blue-200 to-teal-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>$1M</span>
                  <span>$1B</span>
                </div>
              </div>
              
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-4">
                  Current Efficiency: {currentEfficiency}%
                </label>
                <input
                  type="range"
                  min="30"
                  max="90"
                  step="5"
                  value={currentEfficiency}
                  onChange={(e) => setCurrentEfficiency(Number(e.target.value))}
                  className="w-full h-3 bg-gradient-to-r from-orange-200 to-red-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>30%</span>
                  <span>90%</span>
                </div>
              </div>
              
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-4">
                  Current Automation Level: {automationLevel}%
                </label>
                <input
                  type="range"
                  min="10"
                  max="80"
                  step="5"
                  value={automationLevel}
                  onChange={(e) => setAutomationLevel(Number(e.target.value))}
                  className="w-full h-3 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>10%</span>
                  <span>80%</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Results Display */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-green-900 mb-4">Potential Annual Savings</h3>
                <div className="text-5xl font-bold text-green-600 mb-2">
                  ${Math.round(totalSavings).toLocaleString()}
                </div>
                <p className="text-green-700 font-semibold">
                  {((totalSavings / annualRevenue) * 100).toFixed(1)}% of annual revenue
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Projected ROI</h3>
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  {Math.round(roiPercentage)}%
                </div>
                <p className="text-blue-700 font-semibold">
                  Return on AI investment
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border-2 border-purple-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Efficiency Improvement</h3>
                <div className="text-5xl font-bold text-purple-600 mb-2">
                  +{Math.round(efficiencyGain)}%
                </div>
                <p className="text-purple-700 font-semibold">
                  Operational efficiency gain
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-orange-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-900 mb-4">ROI Timeline</h3>
                <div className="text-5xl font-bold text-orange-600 mb-2">
                  {roiPercentage > 300 ? '3-6' : '6-12'}mo
                </div>
                <p className="text-orange-700 font-semibold">
                  Break-even period
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Achieve These Results?</h3>
            <p className="text-xl mb-6 opacity-90">
              Get a personalized AI transformation roadmap and detailed ROI analysis for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Get Free Analysis
              </a>
            </div>
            <p className="text-sm mt-4 opacity-75">
              Free consultation • Detailed ROI analysis • Custom implementation roadmap
            </p>
          </div>
        </div>
        
        {/* Additional Information */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Data-Driven Insights</h4>
            <p className="text-gray-600 text-sm">
              Calculations based on real client results and industry benchmarks
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Proven Results</h4>
            <p className="text-gray-600 text-sm">
              Our clients achieve average 400% ROI within 6-12 months
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Rapid Implementation</h4>
            <p className="text-gray-600 text-sm">
              See results in weeks, not years with our proven methodology
            </p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
      `}</style>
    </section>
  );
}