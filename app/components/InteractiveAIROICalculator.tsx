'use client';
import React, { useState, memo } from 'react';
import { Calculator, TrendingUp, DollarSign, BarChart, ArrowRight } from 'lucide-react';

const InteractiveAIROICalculator: React.FC = memo(() => {
  const [monthlyRevenue, setMonthlyRevenue] = useState(100000);
  const [currentCosts, setCurrentCosts] = useState(50000);
  const [aiInvestment, setAiInvestment] = useState(10000);

  const calculateROI = () => {
    const costSavings = currentCosts * 0.3; // 30% cost reduction
    const revenueIncrease = monthlyRevenue * 0.25; // 25% revenue increase
    const totalBenefits = (costSavings + revenueIncrease) * 12; // Annual
    const roi = ((totalBenefits - aiInvestment) / aiInvestment) * 100;
    return Math.round(roi);
  };

  const annualSavings = Math.round((currentCosts * 0.3) * 12);
  const annualRevenueIncrease = Math.round((monthlyRevenue * 0.25) * 12);

  return (
    <section className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-8 mb-16">
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 bg-cyan-600/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Calculator className="w-4 h-4" />
          <span>ROI Calculator</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
          Calculate Your AI ROI
        </h2>
        
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          See how much you can save and earn with our AI solutions. 
          Adjust the values below to see your potential ROI.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Controls */}
        <div className="space-y-6">
          <div>
            <label className="block text-white font-semibold mb-2">
              Monthly Revenue ($)
            </label>
            <input
              type="number"
              value={monthlyRevenue}
              onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
              className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
            />
          </div>
          
          <div>
            <label className="block text-white font-semibold mb-2">
              Current Monthly Costs ($)
            </label>
            <input
              type="number"
              value={currentCosts}
              onChange={(e) => setCurrentCosts(Number(e.target.value))}
              className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
            />
          </div>
          
          <div>
            <label className="block text-white font-semibold mb-2">
              AI Investment ($)
            </label>
            <input
              type="number"
              value={aiInvestment}
              onChange={(e) => setAiInvestment(Number(e.target.value))}
              className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-lg p-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">
                {calculateROI()}%
              </div>
              <div className="text-white font-semibold mb-4">Expected ROI</div>
              <div className="text-sm text-gray-300">
                Based on 30% cost reduction and 25% revenue increase
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-700/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-1">
                ${annualSavings.toLocaleString()}
              </div>
              <div className="text-sm text-gray-300">Annual Savings</div>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">
                ${annualRevenueIncrease.toLocaleString()}
              </div>
              <div className="text-sm text-gray-300">Revenue Increase</div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
            >
              <BarChart className="w-4 h-4 mr-2" />
              Get Detailed Analysis
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

InteractiveAIROICalculator.displayName = 'InteractiveAIROICalculator';

export default InteractiveAIROICalculator;