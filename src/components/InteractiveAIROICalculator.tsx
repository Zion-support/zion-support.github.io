import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Percent, 
  Clock, 
  Target, 
  BarChart3, 
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Users,
  Building,
  Brain,
  Cloud,
  Shield
} from 'lucide-react';

interface InteractiveAIROICalculatorProps {
  className?: string;
  children?: React.ReactNode;
}

interface CalculationResult {
  monthlySavings: number;
  yearlySavings: number;
  totalROI: number;
  paybackPeriod: number;
  efficiencyGains: number;
  costReduction: number;
}

const InteractiveAIROICalculator: React.FC<InteractiveAIROICalculatorProps> = ({ 
  className = '', 
  children 
}) => {
  const [formData, setFormData] = useState({
    currentCosts: 100000,
    employees: 50,
    industry: 'technology',
    aiServices: [] as string[],
    timeframe: 12
  });

  const [results, setResults] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const industries = [
    { value: 'technology', label: 'Technology', multiplier: 1.2 },
    { value: 'healthcare', label: 'Healthcare', multiplier: 1.5 },
    { value: 'finance', label: 'Finance', multiplier: 1.3 },
    { value: 'manufacturing', label: 'Manufacturing', multiplier: 1.1 },
    { value: 'retail', label: 'Retail', multiplier: 1.0 },
    { value: 'education', label: 'Education', multiplier: 0.9 }
  ];

  const aiServiceOptions = [
    { id: 'automation', name: 'Process Automation', savings: 0.25, icon: Zap },
    { id: 'analytics', name: 'AI Analytics', savings: 0.15, icon: BarChart3 },
    { id: 'customer-service', name: 'AI Customer Service', savings: 0.30, icon: Users },
    { id: 'predictive', name: 'Predictive Analytics', savings: 0.20, icon: Target },
    { id: 'cybersecurity', name: 'AI Cybersecurity', savings: 0.18, icon: Shield },
    { id: 'content', name: 'AI Content Generation', savings: 0.22, icon: Brain },
    { id: 'infrastructure', name: 'AI Infrastructure', savings: 0.28, icon: Cloud },
    { id: 'compliance', name: 'AI Compliance', savings: 0.16, icon: CheckCircle }
  ];

  const calculateROI = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const industry = industries.find(i => i.value === formData.industry);
      const industryMultiplier = industry?.multiplier || 1.0;
      
      // Calculate base savings from selected AI services
      const totalSavingsRate = formData.aiServices.reduce((total, serviceId) => {
        const service = aiServiceOptions.find(s => s.id === serviceId);
        return total + (service?.savings || 0);
      }, 0);

      // Apply industry multiplier and employee scaling
      const employeeMultiplier = Math.log(formData.employees) / Math.log(10); // Logarithmic scaling
      const adjustedSavingsRate = totalSavingsRate * industryMultiplier * employeeMultiplier;

      const monthlySavings = formData.currentCosts * adjustedSavingsRate / 12;
      const yearlySavings = monthlySavings * 12;
      const totalROI = (yearlySavings / formData.currentCosts) * 100;
      const paybackPeriod = formData.currentCosts / yearlySavings;
      const efficiencyGains = Math.min(95, adjustedSavingsRate * 300); // Cap at 95%
      const costReduction = Math.min(80, adjustedSavingsRate * 200); // Cap at 80%

      setResults({
        monthlySavings,
        yearlySavings,
        totalROI,
        paybackPeriod,
        efficiencyGains,
        costReduction
      });
      
      setIsCalculating(false);
      setShowResults(true);
    }, 1500);
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      aiServices: prev.aiServices.includes(serviceId)
        ? prev.aiServices.filter(id => id !== serviceId)
        : [...prev.aiServices, serviceId]
    }));
  };

  const resetCalculator = () => {
    setFormData({
      currentCosts: 100000,
      employees: 50,
      industry: 'technology',
      aiServices: [],
      timeframe: 12
    });
    setResults(null);
    setShowResults(false);
  };

  return (
    <div className={`interactiveairoicalculator ${className}`}>
      {children || (
        <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>

          <div className="relative z-10 container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                AI ROI Calculator
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Calculate the potential return on investment for AI solutions tailored to your business needs.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Form */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-cyan-400/30 p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Calculator className="w-6 h-6 mr-3 text-cyan-400" />
                    Business Information
                  </h3>

                  <div className="space-y-6">
                    {/* Current Annual Costs */}
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Current Annual IT/Operations Costs ($)
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="number"
                          value={formData.currentCosts}
                          onChange={(e) => setFormData(prev => ({ ...prev, currentCosts: Number(e.target.value) }))}
                          className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                          placeholder="100000"
                        />
                      </div>
                    </div>

                    {/* Number of Employees */}
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Number of Employees
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="number"
                          value={formData.employees}
                          onChange={(e) => setFormData(prev => ({ ...prev, employees: Number(e.target.value) }))}
                          className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                          placeholder="50"
                        />
                      </div>
                    </div>

                    {/* Industry */}
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Industry
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          value={formData.industry}
                          onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
                          className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 appearance-none"
                        >
                          {industries.map(industry => (
                            <option key={industry.value} value={industry.value}>
                              {industry.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* AI Services Selection */}
                    <div>
                      <label className="block text-white font-medium mb-4">
                        Select AI Services
                      </label>
                      <div className="grid grid-cols-1 gap-3">
                        {aiServiceOptions.map(service => (
                          <button
                            key={service.id}
                            onClick={() => handleServiceToggle(service.id)}
                            className={`flex items-center p-3 rounded-lg border transition-all ${
                              formData.aiServices.includes(service.id)
                                ? 'bg-cyan-400/20 border-cyan-400 text-cyan-300'
                                : 'bg-slate-700 border-gray-600 text-gray-300 hover:border-cyan-400/50'
                            }`}
                          >
                            <service.icon className="w-5 h-5 mr-3" />
                            <span className="flex-1 text-left">{service.name}</span>
                            <div className="text-sm text-gray-400">
                              {Math.round(service.savings * 100)}% savings
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                      onClick={calculateROI}
                      disabled={isCalculating || formData.aiServices.length === 0}
                      className="w-full py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                    >
                      {isCalculating ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Calculating...
                        </>
                      ) : (
                        <>
                          <Calculator className="w-5 h-5 mr-3" />
                          Calculate ROI
                        </>
                      )}
                    </button>

                    {/* Reset Button */}
                    <button
                      onClick={resetCalculator}
                      className="w-full py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                    >
                      Reset Calculator
                    </button>
                  </div>
                </div>

                {/* Results Display */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-purple-400/30 p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-3 text-purple-400" />
                    ROI Results
                  </h3>

                  {!showResults ? (
                    <div className="text-center py-12">
                      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                        <BarChart3 className="w-12 h-12 text-white" />
                      </div>
                      <p className="text-gray-400 text-lg">
                        Fill out the form and click "Calculate ROI" to see your potential savings and returns.
                      </p>
                    </div>
                  ) : results ? (
                    <div className="space-y-6">
                      {/* Key Metrics */}
                      <div className="grid grid-cols-1 gap-4">
                        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-green-400 font-medium">Monthly Savings</p>
                              <p className="text-2xl font-bold text-white">
                                ${results.monthlySavings.toLocaleString()}
                              </p>
                            </div>
                            <DollarSign className="w-8 h-8 text-green-400" />
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-blue-400 font-medium">Annual Savings</p>
                              <p className="text-2xl font-bold text-white">
                                ${results.yearlySavings.toLocaleString()}
                              </p>
                            </div>
                            <TrendingUp className="w-8 h-8 text-blue-400" />
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-purple-400 font-medium">Total ROI</p>
                              <p className="text-2xl font-bold text-white">
                                {results.totalROI.toFixed(1)}%
                              </p>
                            </div>
                            <Target className="w-8 h-8 text-purple-400" />
                          </div>
                        </div>
                      </div>

                      {/* Additional Metrics */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-700/50 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Clock className="w-5 h-5 text-cyan-400" />
                            <span className="text-cyan-400 font-medium">Payback Period</span>
                          </div>
                          <p className="text-xl font-bold text-white">
                            {results.paybackPeriod.toFixed(1)} months
                          </p>
                        </div>

                        <div className="bg-slate-700/50 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Zap className="w-5 h-5 text-yellow-400" />
                            <span className="text-yellow-400 font-medium">Efficiency Gains</span>
                          </div>
                          <p className="text-xl font-bold text-white">
                            {results.efficiencyGains.toFixed(1)}%
                          </p>
                        </div>
                      </div>

                      {/* Cost Reduction */}
                      <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/30 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-orange-400 font-medium">Cost Reduction</p>
                            <p className="text-2xl font-bold text-white">
                              {results.costReduction.toFixed(1)}%
                            </p>
                          </div>
                          <Percent className="w-8 h-8 text-orange-400" />
                        </div>
                      </div>

                      {/* Call to Action */}
                      <div className="mt-8 p-6 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-400/30 rounded-lg">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Ready to Achieve These Results?
                        </h4>
                        <p className="text-gray-300 mb-4">
                          Our AI solutions can help you realize these potential savings and more.
                        </p>
                        <button className="w-full py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                          Get Started Today
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              {/* Success Stories */}
              <div className="mt-16">
                <h3 className="text-3xl font-bold text-white text-center mb-12">
                  Success Stories
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-400/30 p-6">
                    <div className="flex items-center mb-4">
                      <Star className="w-5 h-5 text-yellow-400 mr-2" />
                      <span className="text-yellow-400 font-semibold">TechCorp Inc.</span>
                    </div>
                    <p className="text-gray-300 mb-4">
                      "Achieved 340% ROI in just 8 months with our AI automation solutions."
                    </p>
                    <div className="text-cyan-400 font-bold">340% ROI</div>
                  </div>

                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-purple-400/30 p-6">
                    <div className="flex items-center mb-4">
                      <Award className="w-5 h-5 text-purple-400 mr-2" />
                      <span className="text-purple-400 font-semibold">HealthPlus</span>
                    </div>
                    <p className="text-gray-300 mb-4">
                      "Reduced operational costs by 75% while improving patient care quality."
                    </p>
                    <div className="text-purple-400 font-bold">75% Cost Reduction</div>
                  </div>

                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-green-400/30 p-6">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      <span className="text-green-400 font-semibold">FinanceFlow</span>
                    </div>
                    <p className="text-gray-300 mb-4">
                      "Increased efficiency by 90% with our AI-powered financial analytics."
                    </p>
                    <div className="text-green-400 font-bold">90% Efficiency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveAIROICalculator;