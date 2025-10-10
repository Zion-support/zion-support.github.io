import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Clock, Users, BarChart, ArrowRight } from 'lucide-react';

const InteractiveAIROICalculator: React.FC = () => {
  const [inputs, setInputs] = useState({
    currentRevenue: 1000000,
    currentEmployees: 50,
    currentEfficiency: 70,
    aiServices: ['automation', 'analytics', 'customerSupport']
  });

  const [results, setResults] = useState({
    roi: 0,
    costSavings: 0,
    efficiencyGain: 0,
    timeSaved: 0
  });

  const calculateROI = () => {
    const { currentRevenue, currentEmployees, currentEfficiency, aiServices } = inputs;
    
    // Base calculations
    const automationSavings = aiServices.includes('automation') ? 0.25 : 0;
    const analyticsGain = aiServices.includes('analytics') ? 0.15 : 0;
    const supportEfficiency = aiServices.includes('customerSupport') ? 0.20 : 0;
    
    const totalEfficiencyGain = automationSavings + analyticsGain + supportEfficiency;
    const newEfficiency = Math.min(95, currentEfficiency + (totalEfficiencyGain * 100));
    
    const costSavings = currentRevenue * totalEfficiencyGain;
    const efficiencyGain = newEfficiency - currentEfficiency;
    const timeSaved = (efficiencyGain / 100) * 40; // 40 hours per week average
    
    const roi = (costSavings / (currentRevenue * 0.1)) * 100; // Assuming 10% investment
    
    setResults({
      roi: Math.round(roi),
      costSavings: Math.round(costSavings),
      efficiencyGain: Math.round(efficiencyGain),
      timeSaved: Math.round(timeSaved)
    });
  };

  React.useEffect(() => {
    calculateROI();
  }, [inputs]);

  const handleInputChange = (field: string, value: number | string[]) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleServiceToggle = (service: string) => {
    const newServices = inputs.aiServices.includes(service)
      ? inputs.aiServices.filter(s => s !== service)
      : [...inputs.aiServices, service];
    handleInputChange('aiServices', newServices);
  };

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-full px-4 py-2 mb-6">
            <Calculator className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">ROI Calculator</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Calculate Your AI ROI
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            See how much your business can save and grow with our AI-powered solutions. 
            Get instant calculations based on your current metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="space-y-8">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <BarChart className="w-5 h-5 mr-2 text-cyan-400" />
                Your Current Metrics
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Annual Revenue ($)
                  </label>
                  <input
                    type="number"
                    value={inputs.currentRevenue}
                    onChange={(e) => handleInputChange('currentRevenue', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="1,000,000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Number of Employees
                  </label>
                  <input
                    type="number"
                    value={inputs.currentEmployees}
                    onChange={(e) => handleInputChange('currentEmployees', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Current Efficiency (%)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={inputs.currentEfficiency}
                    onChange={(e) => handleInputChange('currentEfficiency', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="70"
                  />
                </div>
              </div>
            </div>

            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Users className="w-5 h-5 mr-2 text-purple-400" />
                AI Services Selection
              </h3>
              
              <div className="space-y-4">
                {[
                  { id: 'automation', name: 'Workflow Automation', description: 'Automate repetitive tasks and processes' },
                  { id: 'analytics', name: 'AI Analytics', description: 'Advanced data analysis and insights' },
                  { id: 'customerSupport', name: 'AI Customer Support', description: 'Intelligent customer service solutions' }
                ].map((service) => (
                  <label key={service.id} className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={inputs.aiServices.includes(service.id)}
                      onChange={() => handleServiceToggle(service.id)}
                      className="mt-1 w-4 h-4 text-cyan-400 bg-slate-700 border-gray-600 rounded focus:ring-cyan-400 focus:ring-2"
                    />
                    <div>
                      <div className="text-white font-medium">{service.name}</div>
                      <div className="text-gray-400 text-sm">{service.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                Your Projected Results
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg border border-green-400/30">
                  <div className="text-3xl font-bold text-green-400 mb-1">{results.roi}%</div>
                  <div className="text-sm text-gray-300">ROI</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-400/30">
                  <div className="text-3xl font-bold text-blue-400 mb-1">${results.costSavings.toLocaleString()}</div>
                  <div className="text-sm text-gray-300">Annual Savings</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-400/30">
                  <div className="text-3xl font-bold text-purple-400 mb-1">{results.efficiencyGain}%</div>
                  <div className="text-sm text-gray-300">Efficiency Gain</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg border border-orange-400/30">
                  <div className="text-3xl font-bold text-orange-400 mb-1">{results.timeSaved}h</div>
                  <div className="text-sm text-gray-300">Hours Saved/Week</div>
                </div>
              </div>
            </div>

            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
                These calculations are based on industry averages. Your actual results may vary. 
                Contact us for a personalized assessment.
              </p>
              
              <div className="space-y-3">
                <a
                  href="/contact"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all flex items-center justify-center group"
                >
                  <span>Get Personalized Quote</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="w-full border border-cyan-400 text-cyan-400 py-3 px-6 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all flex items-center justify-center"
                >
                  <span>Call: (302) 464-0950</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveAIROICalculator;