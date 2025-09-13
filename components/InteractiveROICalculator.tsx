import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CalculatorIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  TrendingUpIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export default function InteractiveROICalculator() {
  const [currentRevenue, setCurrentRevenue] = useState(1000000);
  const [aiInvestment, setAiInvestment] = useState(50000);
  const [timeframe, setTimeframe] = useState(12);
  const [industry, setIndustry] = useState('technology');
  const [aiApplications, setAiApplications] = useState(['automation', 'analytics']);
  const [roi, setRoi] = useState(0);
  const [paybackPeriod, setPaybackPeriod] = useState(0);
  const [totalBenefits, setTotalBenefits] = useState(0);

  const industryMultipliers = {
    technology: 1.5,
    healthcare: 1.8,
    finance: 1.6,
    manufacturing: 1.4,
    retail: 1.3,
    education: 1.2
  };

  const applicationMultipliers = {
    automation: 0.4,
    analytics: 0.3,
    customerService: 0.25,
    contentGeneration: 0.2,
    predictiveMaintenance: 0.35,
    fraudDetection: 0.3
  };

  useEffect(() => {
    calculateROI();
  }, [currentRevenue, aiInvestment, timeframe, industry, aiApplications]);

  const calculateROI = () => {
    const industryMultiplier = industryMultipliers[industry] || 1;
    const applicationMultiplier = aiApplications.reduce((sum, app) => 
      sum + (applicationMultipliers[app] || 0), 0
    );
    
    // Base efficiency improvement (conservative estimate)
    const baseEfficiencyImprovement = 0.25; // 25%
    
    // Calculate total benefits
    const monthlyBenefits = currentRevenue * baseEfficiencyImprovement * industryMultiplier * applicationMultiplier;
    const totalBenefits = monthlyBenefits * timeframe;
    
    // Calculate ROI
    const netBenefits = totalBenefits - aiInvestment;
    const roiPercentage = aiInvestment > 0 ? (netBenefits / aiInvestment) * 100 : 0;
    
    // Calculate payback period
    const paybackPeriod = aiInvestment > 0 ? aiInvestment / monthlyBenefits : 0;
    
    setRoi(roiPercentage);
    setPaybackPeriod(paybackPeriod);
    setTotalBenefits(totalBenefits);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(num);
  };

  const getROIColor = (roi: number) => {
    if (roi >= 500) return 'text-green-600';
    if (roi >= 300) return 'text-blue-600';
    if (roi >= 100) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getROIBadge = (roi: number) => {
    if (roi >= 500) return { text: 'EXCEPTIONAL', color: 'bg-green-100 text-green-800' };
    if (roi >= 300) return { text: 'EXCELLENT', color: 'bg-blue-100 text-blue-800' };
    if (roi >= 100) return { text: 'GOOD', color: 'bg-yellow-100 text-yellow-800' };
    return { text: 'NEEDS IMPROVEMENT', color: 'bg-red-100 text-red-800' };
  };

  const badge = getROIBadge(roi);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full px-6 py-3 mb-8"
          >
            <CalculatorIcon className="h-5 w-5 mr-2" />
            <span className="text-sm font-bold">💰 ROI CALCULATOR</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Calculate Your AI Investment ROI
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover the potential return on investment for your AI transformation. 
            Get personalized insights based on your industry and AI applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Investment Parameters</h3>
            
            <div className="space-y-6">
              {/* Current Revenue */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Annual Revenue
                </label>
                <input
                  type="range"
                  min="100000"
                  max="10000000"
                  step="100000"
                  value={currentRevenue}
                  onChange={(e) => setCurrentRevenue(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>$100K</span>
                  <span className="font-semibold text-blue-600">{formatCurrency(currentRevenue)}</span>
                  <span>$10M</span>
                </div>
              </div>

              {/* AI Investment */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  AI Investment Amount
                </label>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="10000"
                  value={aiInvestment}
                  onChange={(e) => setAiInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>$10K</span>
                  <span className="font-semibold text-purple-600">{formatCurrency(aiInvestment)}</span>
                  <span>$500K</span>
                </div>
              </div>

              {/* Timeframe */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Investment Timeframe (months)
                </label>
                <input
                  type="range"
                  min="6"
                  max="36"
                  step="1"
                  value={timeframe}
                  onChange={(e) => setTimeframe(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>6 months</span>
                  <span className="font-semibold text-green-600">{timeframe} months</span>
                  <span>36 months</span>
                </div>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail</option>
                  <option value="education">Education</option>
                </select>
              </div>

              {/* AI Applications */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  AI Applications (select multiple)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {Object.keys(applicationMultipliers).map((app) => (
                    <label key={app} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={aiApplications.includes(app)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setAiApplications([...aiApplications, app]);
                          } else {
                            setAiApplications(aiApplications.filter(a => a !== app));
                          }
                        }}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700 capitalize">
                        {app.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* ROI Result */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-xl p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className={`${badge.color} px-4 py-2 rounded-full text-sm font-bold`}>
                    {badge.text}
                  </span>
                </div>
                <div className={`text-6xl font-bold ${getROIColor(roi)} mb-2`}>
                  {formatNumber(roi)}%
                </div>
                <div className="text-xl text-gray-600">Return on Investment</div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <CurrencyDollarIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Total Benefits</h4>
                    <p className="text-sm text-gray-600">Over {timeframe} months</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-600">
                  {formatCurrency(totalBenefits)}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <ClockIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Payback Period</h4>
                    <p className="text-sm text-gray-600">Months to ROI</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-blue-600">
                  {formatNumber(paybackPeriod)} months
                </div>
              </div>
            </div>

            {/* Insights */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <SparklesIcon className="h-6 w-6" />
                <h4 className="text-lg font-semibold">AI Transformation Insights</h4>
              </div>
              <ul className="space-y-2 text-purple-100">
                <li>• Average ROI for {industry} industry: {formatNumber(industryMultipliers[industry] * 100)}%</li>
                <li>• {aiApplications.length} AI applications selected</li>
                <li>• Estimated efficiency improvement: {formatNumber((industryMultipliers[industry] * Object.keys(applicationMultipliers).reduce((sum, app) => sum + (aiApplications.includes(app) ? applicationMultipliers[app] : 0), 0)) * 100)}%</li>
                <li>• Break-even point: {formatNumber(paybackPeriod)} months</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Personalized AI Strategy
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}