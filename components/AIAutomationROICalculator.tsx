import React{ useStateuseEffect } from 'react';
import { CalculatorIconChartBarIconTrendingUpIconCurrencyDollarIcon } from '@heroicons/react/24/outline';

interface CalculationInputs {
  currentEmployees: number;
  averageSalary: number;
  processHours: number;
  errorRate: number;
  errorCost: number;
  processingVolume: number;
  automationPercentage: number;
  implementationCost: number;
  maintenanceCost: number;
}

interface CalculationResults {
  laborSavings: number;
  errorSavings: number;
  efficiencyGains: number;
  totalAnnualSavings: number;
  totalCosts: number;
  netAnnualBenefit: number;
  roi: number;
  paybackMonths: number;
  threeYearNPV: number;
}

const AIAutomationROICalculator: React.FC = () => {
  const [inputsetInputs] = useState<CalculationInputs>({
    currentEmployees: 10,
    averageSalary: 75000,
    processHours: 2000,
    errorRate: 5,
    errorCost: 100,
    processingVolume: 10000,
    automationPercentage: 70,
    implementationCost: 150000,
    maintenanceCost: 25000
  });

  const [resultsetResults] = useState<CalculationResults>({
    laborSavings: 0,
    errorSavings: 0,
    efficiencyGains: 0,
    totalAnnualSavings: 0,
    totalCosts: 0,
    netAnnualBenefit: 0,
    roi: 0,
    paybackMonths: 0,
    threeYearNPV: 0
  });

  const [isCalculatingsetIsCalculating] = useState(false);

  useEffect(() => {
    calculateROI();
  }[inputs]);

  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
      const {
        currentEmployees,
        averageSalary,
        processHours,
        errorRate,
        errorCost,
        processingVolume,
        automationPercentage,
        implementationCost,
        maintenanceCost
      } = inputs;

      // Calculate labor savings (70% automation means 70% reduction in labor costs)
      const laborSavings = (currentEmployees * averageSalary * automationPercentage) / 100;

      // Calculate error savings (automation reduces errors by 85%)
      const errorReduction = 85; // 85% error reduction with AI automation
      const currentErrorCost = (processingVolume * errorRate / 100) * errorCost;
      const errorSavings = currentErrorCost * (errorReduction / 100);

      // Calculate efficiency gains (additional 20% productivity improvement)
      const efficiencyMultiplier = 1.2;
      const efficiencyGains = laborSavings * 0.2;

      // Total annual savings
      const totalAnnualSavings = laborSavings + errorSavings + efficiencyGains;

      // Total costs (one-time implementation + annual maintenance)
      const totalCosts = implementationCost + maintenanceCost;

      // Net annual benefit (savings - maintenance costs)
      const netAnnualBenefit = totalAnnualSavings - maintenanceCost;

      // ROI calculation
      const roi = ((netAnnualBenefit - implementationCost) / implementationCost) * 100;

      // Payback period in months
      const paybackMonths = implementationCost / (netAnnualBenefit / 12);

      // 3-year NPV calculation (simplified)
      const discountRate = 0.1; // 10% discount rate
      const year1Value = netAnnualBenefit / Math.pow(1 + discountRate1);
      const year2Value = netAnnualBenefit / Math.pow(1 + discountRate2);
      const year3Value = netAnnualBenefit / Math.pow(1 + discountRate3);
      const threeYearNPV = year1Value + year2Value + year3Value - implementationCost;

      setResults({
        laborSavings,
        errorSavings,
        efficiencyGains,
        totalAnnualSavings,
        totalCosts,
        netAnnualBenefit,
        roi,
        paybackMonths,
        threeYearNPV
      });

      setIsCalculating(false);
    }800);
  };

  const handleInputChange = (field: keyof CalculationInputsvalue: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US'{
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-2 mb-6">
            <CalculatorIcon className="w-5 h-5 mr-2 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">AI AUTOMATION ROI CALCULATOR</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculate Your AI Automation
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Return on Investment
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the potential savings and ROI from implementing AI automation in your organization. 
            Get instant calculations based on your specific business metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Your Business Metrics</h3>
            
            <div className="space-y-6">
              {/* Current Employees */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Employees in Target Process
                </label>
                <input
                  type="number"
                  value={inputs.currentEmployees}
                  onChange={(e) => handleInputChange('currentEmployees'parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="1"
                />
              </div>

              {/* Average Salary */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Average Annual Salary per Employee ($)
                </label>
                <input
                  type="number"
                  value={inputs.averageSalary}
                  onChange={(e) => handleInputChange('averageSalary'parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                  step="1000"
                />
              </div>

              {/* Process Hours */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Process Hours per Employee
                </label>
                <input
                  type="number"
                  value={inputs.processHours}
                  onChange={(e) => handleInputChange('processHours'parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                />
              </div>

              {/* Error Rate */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Error Rate (%)
                </label>
                <input
                  type="number"
                  value={inputs.errorRate}
                  onChange={(e) => handleInputChange('errorRate'parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                  max="100"
                  step="0.1"
                />
              </div>

              {/* Error Cost */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Average Cost per Error ($)
                </label>
                <input
                  type="number"
                  value={inputs.errorCost}
                  onChange={(e) => handleInputChange('errorCost'parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                />
              </div>

              {/* Processing Volume */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Processing Volume (transactions/items)
                </label>
                <input
                  type="number"
                  value={inputs.processingVolume}
                  onChange={(e) => handleInputChange('processingVolume'parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                />
              </div>

              {/* Automation Percentage */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Automation Percentage (%)
                </label>
                <input
                  type="range"
                  min="10"
                  max="90"
                  value={inputs.automationPercentage}
                  onChange={(e) => handleInputChange('automationPercentage'parseInt(e.target.value) || 0)}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>10%</span>
                  <span className="font-medium text-blue-600">{inputs.automationPercentage}%</span>
                  <span>90%</span>
                </div>
              </div>

              {/* Implementation Cost */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  AI Automation Implementation Cost ($)
                </label>
                <input
                  type="number"
                  value={inputs.implementationCost}
                  onChange={(e) => handleInputChange('implementationCost'parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                  step="1000"
                />
              </div>

              {/* Maintenance Cost */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Maintenance Cost ($)
                </label>
                <input
                  type="number"
                  value={inputs.maintenanceCost}
                  onChange={(e) => handleInputChange('maintenanceCost'parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                  step="1000"
                />
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* ROI Summary */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">ROI Summary</h3>
              
              {isCalculating ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                  <span className="ml-3">Calculating...</span>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Return on Investment</span>
                    <span className="text-3xl font-bold text-yellow-400">
                      {formatPercentage(results.roi)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Payback Period</span>
                    <span className="text-2xl font-bold">
                      {results.paybackMonths.toFixed(1)} months
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg">3-Year NPV</span>
                    <span className="text-2xl font-bold text-green-300">
                      {formatCurrency(results.threeYearNPV)}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Detailed Breakdown */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Savings Breakdown</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <div className="flex items-center">
                    <ChartBarIcon className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="font-medium">Labor Savings</span>
                  </div>
                  <span className="font-bold text-green-600">
                    {formatCurrency(results.laborSavings)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <div className="flex items-center">
                    <TrendingUpIcon className="w-5 h-5 text-purple-500 mr-3" />
                    <span className="font-medium">Error Reduction Savings</span>
                  </div>
                  <span className="font-bold text-green-600">
                    {formatCurrency(results.errorSavings)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <div className="flex items-center">
                    <CurrencyDollarIcon className="w-5 h-5 text-green-500 mr-3" />
                    <span className="font-medium">Efficiency Gains</span>
                  </div>
                  <span className="font-bold text-green-600">
                    {formatCurrency(results.efficiencyGains)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-3 bg-gray-50 rounded-lg px-4">
                  <span className="font-bold text-lg">Total Annual Savings</span>
                  <span className="font-bold text-2xl text-blue-600">
                    {formatCurrency(results.totalAnnualSavings)}
                  </span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Achieve These Results?
              </h3>
              <p className="text-gray-600 mb-6">
                Our AI automation experts can help you implement these solutions and achieve 
                the ROI calculated above. Get a personalized implementation plan today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Implementation Plan
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 max-w-4xl mx-auto">
            * These calculations are estimates based on industry averages and typical AI automation results. 
            Actual results may vary based on specific implementationindustryand business factors. 
            Consult with our experts for a detailed analysis tailored to your organization.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIAutomationROICalculator;