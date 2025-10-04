import React, { useState } from 'react';
<<<<<<< HEAD
import { Calculator, TrendingUp, DollarSign, Users, Clock } from 'lucide-react';

export default function InteractiveAIROICalculator() {
  const [inputs, setInputs] = useState({
    currentEmployees: 100,
    averageSalary: 75000,
    currentProductivity: 100,
    aiImplementationCost: 500000,
    timeToImplement: 12,
  });

  const calculateROI = () => {
    const {
      currentEmployees,
      averageSalary,
      currentProductivity,
      aiImplementationCost,
      timeToImplement,
    } = inputs;

    // Calculate annual labor cost
    const annualLaborCost = currentEmployees * averageSalary;

    // AI productivity improvement (conservative estimate)
    const productivityImprovement = 0.3; // 30% improvement
    const newProductivity = currentProductivity * (1 + productivityImprovement);

    // Calculate savings from productivity gains
    const productivitySavings = annualLaborCost * productivityImprovement;

    // Additional benefits (reduced errors, faster processing, etc.)
    const additionalBenefits = annualLaborCost * 0.15; // 15% additional benefits

    // Total annual savings
    const totalAnnualSavings = productivitySavings + additionalBenefits;

    // Calculate ROI
    const roi =
      ((totalAnnualSavings - aiImplementationCost) / aiImplementationCost) *
      100;

    // Calculate payback period
    const paybackPeriod = aiImplementationCost / totalAnnualSavings;

    return {
      roi: Math.max(0, roi),
      paybackPeriod: Math.max(0, paybackPeriod),
      totalAnnualSavings,
      productivitySavings,
      additionalBenefits,
      newProductivity,
    };
  };

  const results = calculateROI();

  const handleInputChange = (field: string, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calculator className="h-8 w-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">AI ROI Calculator</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate the potential return on investment for AI implementation
              in your organization
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Section */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Organization Details</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Employees
                  </label>
                  <input
                    type="number"
                    value={inputs.currentEmployees}
                    onChange={e =>
                      handleInputChange(
                        'currentEmployees',
                        parseInt(e.target.value) || 0,
                      )
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Average Annual Salary ($)
                  </label>
                  <input
                    type="number"
                    value={inputs.averageSalary}
                    onChange={e =>
                      handleInputChange(
                        'averageSalary',
                        parseInt(e.target.value) || 0,
                      )
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="10000"
                    step="1000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Productivity Level (%)
                  </label>
                  <input
                    type="number"
                    value={inputs.currentProductivity}
                    onChange={e =>
                      handleInputChange(
                        'currentProductivity',
                        parseInt(e.target.value) || 0,
                      )
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="1"
                    max="200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    AI Implementation Cost ($)
                  </label>
                  <input
                    type="number"
                    value={inputs.aiImplementationCost}
                    onChange={e =>
                      handleInputChange(
                        'aiImplementationCost',
                        parseInt(e.target.value) || 0,
                      )
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="10000"
                    step="10000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Implementation Timeline (months)
                  </label>
                  <input
                    type="number"
                    value={inputs.timeToImplement}
                    onChange={e =>
                      handleInputChange(
                        'timeToImplement',
                        parseInt(e.target.value) || 0,
                      )
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="1"
                    max="36"
                  />
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Projected Results</h3>

                <div className="grid grid-cols-2 gap-6">
                  {/* ROI */}
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <TrendingUp className="h-6 w-6 text-blue-600" />
                      <h4 className="font-semibold text-gray-900">ROI</h4>
                    </div>
                    <div className="text-3xl font-bold text-blue-600">
                      {results.roi.toFixed(1)}%
                    </div>
                    <p className="text-sm text-gray-600">Return on investment after first year</p>
                  </div>

                  {/* Payback Period */}
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Clock className="h-6 w-6 text-green-600" />
                      <h4 className="font-semibold text-gray-900">Payback Period</h4>
                    </div>
                    <div className="text-3xl font-bold text-green-600">
                      {results.paybackPeriod.toFixed(1)} years
                    </div>
                    <p className="text-sm text-gray-600">Time to recover implementation costs</p>
                  </div>

                  {/* Annual Savings */}
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <DollarSign className="h-6 w-6 text-yellow-600" />
                      <h4 className="font-semibold text-gray-900">Annual Savings</h4>
                    </div>
                    <div className="text-2xl font-bold text-yellow-600">
                      ${results.totalAnnualSavings.toLocaleString()}
                    </div>
                    <p className="text-sm text-gray-600">Total annual cost savings</p>
                  </div>

                  {/* Productivity Gain */}
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Users className="h-6 w-6 text-purple-600" />
                      <h4 className="font-semibold text-gray-900">Productivity Gain</h4>
                    </div>
                    <div className="text-2xl font-bold text-purple-600">
                      {(
                        ((results.newProductivity - inputs.currentProductivity) /
                          inputs.currentProductivity) *
                        100
                      ).toFixed(1)}%
                    </div>
                    <p className="text-sm text-gray-600">Increase in productivity levels</p>
                  </div>
                </div>
              </div>

              {/* Breakdown */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-bold mb-4 text-gray-900">Savings Breakdown</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Productivity Savings</span>
                    <span className="font-semibold text-green-600">
                      ${results.productivitySavings.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Additional Benefits</span>
                    <span className="font-semibold text-blue-600">
                      ${results.additionalBenefits.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-sm text-yellow-800">
                  <strong>Disclaimer:</strong> This calculator provides estimates
                  based on industry averages. Actual results may vary based on
                  implementation quality, industry specifics, and organizational
                  factors. Consult with our AI experts for a detailed analysis
                  tailored to your organization.
                </p>
              </div>
=======

export default function InteractiveAIROICalculator() {
  const [investment, setInvestment] = useState(100000);
  const [savings, setSavings] = useState(300000);

  const roi = ((savings - investment) / investment) * 100;

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Interactive AI ROI Calculator
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Initial Investment ($)
            </label>
            <input
              type="number"
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Annual Savings ($)
            </label>
            <input
              type="number"
              value={savings}
              onChange={(e) => setSavings(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl font-bold text-green-600 mb-2">
              {roi.toFixed(0)}%
            </div>
            <div className="text-xl text-gray-600">ROI</div>
            <div className="text-sm text-gray-500 mt-2">
              Net Profit: ${(savings - investment).toLocaleString()}
>>>>>>> 83e4988d0b484747cc68fa307caba20f45af70a7
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </section>
=======
    </div>
>>>>>>> 83e4988d0b484747cc68fa307caba20f45af70a7
  );
}