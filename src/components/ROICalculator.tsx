import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Clock, Users } from 'lucide-react';

interface ROICalculatorProps {
  className?: string;
}

const ROICalculator: React.FC<ROICalculatorProps> = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    employees: 50,
    avgSalary: 75000,
    manualHoursPerWeek: 10,
    automationEfficiency: 80,
  });

  const calculateROI = () => {
    const annualSalaryCost = formData.employees * formData.avgSalary;
    const weeklyManualCost = (formData.avgSalary / 52) * (formData.manualHoursPerWeek / 40);
    const annualManualCost = weeklyManualCost * 52 * formData.employees;
    const automationSavings = annualManualCost * (formData.automationEfficiency / 100);
    const automationCost = 99 * 12; // $99/month for starter plan
    const netSavings = automationSavings - automationCost;
    const roi = ((automationSavings - automationCost) / automationCost) * 100;
    const paybackMonths = (automationCost / (automationSavings / 12));

    return {
      annualManualCost: Math.round(annualManualCost),
      automationSavings: Math.round(automationSavings),
      netSavings: Math.round(netSavings),
      roi: Math.round(roi),
      paybackMonths: Math.round(paybackMonths * 10) / 10,
    };
  };

  const results = calculateROI();

  const handleInputChange = (field: string, value: number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="w-8 h-8 text-zion-cyan" />
        <h3 className="text-2xl font-bold text-white">ROI Calculator</h3>
      </div>
      
      <p className="text-zion-slate-light mb-6">
        Calculate your potential savings with AI workflow automation
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-4">
          <div>
            <label className="block text-white font-medium mb-2">Number of Employees</label>
            <input
              type="range"
              min="10"
              max="500"
              value={formData.employees}
              onChange={(e) => handleInputChange('employees', parseInt(e.target.value))}
              className="w-full h-2 bg-zion-slate rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="text-center text-zion-cyan font-bold mt-2">{formData.employees}</div>
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Average Salary ($)</label>
            <input
              type="range"
              min="30000"
              max="150000"
              step="5000"
              value={formData.avgSalary}
              onChange={(e) => handleInputChange('avgSalary', parseInt(e.target.value))}
              className="w-full h-2 bg-zion-slate rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="text-center text-zion-cyan font-bold mt-2">${formData.avgSalary.toLocaleString()}</div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-white font-medium mb-2">Manual Hours per Week</label>
            <input
              type="range"
              min="2"
              max="40"
              value={formData.manualHoursPerWeek}
              onChange={(e) => handleInputChange('manualHoursPerWeek', parseInt(e.target.value))}
              className="w-full h-2 bg-zion-slate rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="text-center text-zion-cyan font-bold mt-2">{formData.manualHoursPerWeek} hours</div>
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Automation Efficiency (%)</label>
            <input
              type="range"
              min="50"
              max="95"
              value={formData.automationEfficiency}
              onChange={(e) => handleInputChange('automationEfficiency', parseInt(e.target.value))}
              className="w-full h-2 bg-zion-slate rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="text-center text-zion-cyan font-bold mt-2">{formData.automationEfficiency}%</div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-red-500/20 to-red-400/20 rounded-lg p-4 text-center border border-red-400/30">
          <DollarSign className="w-6 h-6 text-red-400 mx-auto mb-2" />
          <div className="text-red-400 font-bold text-lg">${results.annualManualCost.toLocaleString()}</div>
          <div className="text-red-300 text-sm">Current Manual Cost</div>
        </div>

        <div className="bg-gradient-to-r from-green-500/20 to-green-400/20 rounded-lg p-4 text-center border border-green-400/30">
          <TrendingUp className="w-6 h-6 text-green-400 mx-auto mb-2" />
          <div className="text-green-400 font-bold text-lg">${results.automationSavings.toLocaleString()}</div>
          <div className="text-green-300 text-sm">Annual Savings</div>
        </div>

        <div className="bg-gradient-to-r from-blue-500/20 to-blue-400/20 rounded-lg p-4 text-center border border-blue-400/30">
          <Calculator className="w-6 h-6 text-blue-400 mx-auto mb-2" />
          <div className="text-blue-400 font-bold text-lg">{results.roi}%</div>
          <div className="text-blue-300 text-sm">ROI</div>
        </div>

        <div className="bg-gradient-to-r from-purple-500/20 to-purple-400/20 rounded-lg p-4 text-center border border-purple-400/30">
          <Clock className="w-6 h-6 text-purple-400 mx-auto mb-2" />
          <div className="text-purple-400 font-bold text-lg">{results.paybackMonths}</div>
          <div className="text-purple-300 text-sm">Payback (months)</div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-zion-blue/20 to-zion-purple/20 rounded-lg border border-zion-blue/30">
        <div className="text-center">
          <div className="text-white font-bold text-xl mb-2">
            💰 Net Annual Savings: ${results.netSavings.toLocaleString()}
          </div>
          <div className="text-zion-slate-light">
            Start your free trial today and begin saving immediately!
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;