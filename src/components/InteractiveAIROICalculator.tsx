import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Users, 
  BarChart3, 
  Target,
  Zap,
  CheckCircle,
  ArrowRight,
  RefreshCw,
  Info
} from 'lucide-react';

interface InteractiveAIROICalculatorProps {
  className?: string;
  children?: React.ReactNode;
}

interface CalculationInputs {
  currentRevenue: number;
  currentCosts: number;
  employees: number;
  averageSalary: number;
  industry: string;
  aiImplementationCost: number;
  timeToImplement: number;
}

interface ROICalculation {
  currentProfit: number;
  projectedProfit: number;
  profitIncrease: number;
  roi: number;
  paybackPeriod: number;
  efficiencyGains: number;
  costSavings: number;
  revenueIncrease: number;
}

export default function InteractiveAIROICalculator({ 
  className = '', 
  children 
}: InteractiveAIROICalculatorProps) {
  const [inputs, setInputs] = useState<CalculationInputs>({
    currentRevenue: 1000000,
    currentCosts: 750000,
    employees: 50,
    averageSalary: 75000,
    industry: 'technology',
    aiImplementationCost: 150000,
    timeToImplement: 6
  });

  const [calculation, setCalculation] = useState<ROICalculation | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const industries = [
    { value: 'technology', label: 'Technology', multiplier: 1.0 },
    { value: 'healthcare', label: 'Healthcare', multiplier: 1.2 },
    { value: 'finance', label: 'Finance', multiplier: 1.1 },
    { value: 'manufacturing', label: 'Manufacturing', multiplier: 0.9 },
    { value: 'retail', label: 'Retail', multiplier: 0.8 },
    { value: 'education', label: 'Education', multiplier: 0.7 }
  ];

  const calculateROI = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const industryMultiplier = industries.find(i => i.value === inputs.industry)?.multiplier || 1.0;
      
      const currentProfit = inputs.currentRevenue - inputs.currentCosts;
      
      // AI impact calculations based on industry and company size
      const efficiencyGains = Math.min(0.9, 0.3 + (inputs.employees / 1000) * 0.2) * industryMultiplier;
      const costSavings = inputs.currentCosts * efficiencyGains * 0.6; // 60% of efficiency gains translate to cost savings
      const revenueIncrease = inputs.currentRevenue * efficiencyGains * 0.4; // 40% of efficiency gains translate to revenue increase
      
      const projectedProfit = currentProfit + costSavings + revenueIncrease;
      const profitIncrease = projectedProfit - currentProfit;
      
      const roi = ((profitIncrease - inputs.aiImplementationCost) / inputs.aiImplementationCost) * 100;
      const paybackPeriod = inputs.aiImplementationCost / (profitIncrease / 12);
      
      setCalculation({
        currentProfit,
        projectedProfit,
        profitIncrease,
        roi,
        paybackPeriod,
        efficiencyGains: efficiencyGains * 100,
        costSavings,
        revenueIncrease
      });
      
      setIsCalculating(false);
      setShowResults(true);
    }, 1500);
  };

  const handleInputChange = (field: keyof CalculationInputs, value: number | string) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const resetCalculator = () => {
    setInputs({
      currentRevenue: 1000000,
      currentCosts: 750000,
      employees: 50,
      averageSalary: 75000,
      industry: 'technology',
      aiImplementationCost: 150000,
      timeToImplement: 6
    });
    setCalculation(null);
    setShowResults(false);
  };

  useEffect(() => {
    if (showResults) {
      const timer = setTimeout(() => {
        setShowResults(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showResults]);

  return (
    <div className={`relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ${className}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text">
            AI ROI Calculator
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Calculate the potential return on investment for implementing AI solutions in your business
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center mb-8">
                <Calculator className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Business Information</h3>
              </div>

              <div className="space-y-6">
                {/* Revenue Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Annual Revenue ($)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      value={inputs.currentRevenue}
                      onChange={(e) => handleInputChange('currentRevenue', parseInt(e.target.value) || 0)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="1,000,000"
                    />
                  </div>
                </div>

                {/* Costs Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Annual Operating Costs ($)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      value={inputs.currentCosts}
                      onChange={(e) => handleInputChange('currentCosts', parseInt(e.target.value) || 0)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="750,000"
                    />
                  </div>
                </div>

                {/* Employees */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Number of Employees
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      value={inputs.employees}
                      onChange={(e) => handleInputChange('employees', parseInt(e.target.value) || 0)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="50"
                    />
                  </div>
                </div>

                {/* Industry */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Industry
                  </label>
                  <select
                    value={inputs.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  >
                    {industries.map((industry) => (
                      <option key={industry.value} value={industry.value} className="bg-slate-800">
                        {industry.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* AI Implementation Cost */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    AI Implementation Cost ($)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      value={inputs.aiImplementationCost}
                      onChange={(e) => handleInputChange('aiImplementationCost', parseInt(e.target.value) || 0)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="150,000"
                    />
                  </div>
                </div>

                {/* Time to Implement */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Implementation Time (months)
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      value={inputs.timeToImplement}
                      onChange={(e) => handleInputChange('timeToImplement', parseInt(e.target.value) || 0)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="6"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    onClick={calculateROI}
                    disabled={isCalculating}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isCalculating ? (
                      <>
                        <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                        Calculating...
                      </>
                    ) : (
                      <>
                        <Calculator className="w-5 h-5 mr-2" />
                        Calculate ROI
                      </>
                    )}
                  </button>
                  
                  <button
                    onClick={resetCalculator}
                    className="px-6 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center mb-8">
                <BarChart3 className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">ROI Analysis</h3>
              </div>

              {!calculation ? (
                <div className="text-center py-12">
                  <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg">
                    Enter your business information and click "Calculate ROI" to see your potential returns
                  </p>
                </div>
              ) : (
                <div className={`space-y-6 transition-all duration-1000 ${showResults ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  {/* Main ROI Display */}
                  <div className="text-center p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-400/20">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {calculation.roi > 0 ? '+' : ''}{calculation.roi.toFixed(1)}%
                    </div>
                    <div className="text-gray-300 font-medium">Return on Investment</div>
                    <div className="text-sm text-gray-400 mt-2">
                      Payback in {calculation.paybackPeriod.toFixed(1)} months
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-400 mb-1">
                        +${(calculation.profitIncrease / 1000).toFixed(0)}K
                      </div>
                      <div className="text-sm text-gray-400">Annual Profit Increase</div>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-1">
                        {calculation.efficiencyGains.toFixed(1)}%
                      </div>
                      <div className="text-sm text-gray-400">Efficiency Gains</div>
                    </div>
                  </div>

                  {/* Breakdown */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white mb-3">Impact Breakdown</h4>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Cost Savings</span>
                        <span className="text-green-400 font-semibold">
                          +${(calculation.costSavings / 1000).toFixed(0)}K
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Revenue Increase</span>
                        <span className="text-blue-400 font-semibold">
                          +${(calculation.revenueIncrease / 1000).toFixed(0)}K
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Implementation Cost</span>
                        <span className="text-red-400 font-semibold">
                          -${(inputs.aiImplementationCost / 1000).toFixed(0)}K
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-4 border border-purple-400/20">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Zap className="w-5 h-5 text-purple-400 mr-2" />
                      Recommendation
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {calculation.roi > 100 
                        ? "Excellent investment opportunity! This AI implementation shows strong potential for significant returns."
                        : calculation.roi > 50
                        ? "Good investment with solid returns. Consider implementing in phases to manage risk."
                        : calculation.roi > 0
                        ? "Moderate returns expected. Evaluate if the benefits align with your strategic goals."
                        : "Consider revising the implementation scope or timeline to improve ROI."
                      }
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}