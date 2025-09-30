import React, { useState } from 'react';

const InteractiveAICostCalculator = () => {
  const [companySize, setCompanySize] = useState('small');
  const [industry, setIndustry] = useState('technology');
  const [aiServices, setAiServices] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(1);

  const calculateSavings = () => {
    let baseSavings = 0;
    let serviceMultiplier = 1;

    // Base savings by company size
    switch (companySize) {
      case 'small': baseSavings = 50000; break;
      case 'medium': baseSavings = 250000; break;
      case 'large': baseSavings = 1000000; break;
      case 'enterprise': baseSavings = 5000000; break;
    }

    // Service multipliers
    if (aiServices.includes('analytics')) serviceMultiplier += 0.3;
    if (aiServices.includes('automation')) serviceMultiplier += 0.4;
    if (aiServices.includes('virtual-assistant')) serviceMultiplier += 0.2;
    if (aiServices.includes('cybersecurity')) serviceMultiplier += 0.3;
    if (aiServices.includes('edge-computing')) serviceMultiplier += 0.4;
    if (aiServices.includes('finance-automation')) serviceMultiplier += 0.5;

    return Math.round(baseSavings * serviceMultiplier);
  };

  const handleServiceToggle = (service: string) => {
    setAiServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const totalSavings = calculateSavings();

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculate Your AI Transformation
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {' '}ROI
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how much your business could save and earn with our AI-powered solutions
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Step {currentStep}: Configure Your Business</h3>
                
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-lg font-semibold text-gray-700 mb-4">
                        Company Size
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { value: 'small', label: 'Small (1-50)', desc: 'Startups & SMBs' },
                          { value: 'medium', label: 'Medium (51-500)', desc: 'Growing Companies' },
                          { value: 'large', label: 'Large (501-5000)', desc: 'Established Enterprises' },
                          { value: 'enterprise', label: 'Enterprise (5000+)', desc: 'Fortune 500' }
                        ].map((size) => (
                          <button
                            key={size.value}
                            onClick={() => setCompanySize(size.value)}
                            className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                              companySize === size.value
                                ? 'border-blue-500 bg-blue-50 text-blue-700'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="font-semibold">{size.label}</div>
                            <div className="text-sm text-gray-500">{size.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-lg font-semibold text-gray-700 mb-4">
                        Industry
                      </label>
                      <select
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg"
                      >
                        <option value="technology">Technology</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="finance">Finance</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="retail">Retail</option>
                        <option value="education">Education</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-6">
                      Select AI Services (Choose all that apply)
                    </label>
                    <div className="grid gap-4">
                      {[
                        { id: 'analytics', name: 'AI Data Analytics', desc: 'Predictive insights & real-time dashboards' },
                        { id: 'automation', name: 'Workflow Automation', desc: 'Intelligent process automation' },
                        { id: 'virtual-assistant', name: 'AI Virtual Assistant', desc: '24/7 customer support' },
                        { id: 'cybersecurity', name: 'AI Cybersecurity', desc: 'Advanced threat detection' },
                        { id: 'edge-computing', name: 'Edge AI Computing', desc: 'Real-time processing' },
                        { id: 'finance-automation', name: 'Finance Automation', desc: 'Automated financial processes' }
                      ].map((service) => (
                        <button
                          key={service.id}
                          onClick={() => handleServiceToggle(service.id)}
                          className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                            aiServices.includes(service.id)
                              ? 'border-purple-500 bg-purple-50 text-purple-700'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold">{service.name}</div>
                              <div className="text-sm text-gray-500">{service.desc}</div>
                            </div>
                            {aiServices.includes(service.id) && (
                              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm">✓</span>
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                {currentStep > 1 && (
                  <button
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 transition-colors"
                  >
                    ← Back
                  </button>
                )}
                {currentStep < 2 && (
                  <button
                    onClick={() => setCurrentStep(prev => prev + 1)}
                    className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Next →
                  </button>
                )}
              </div>
            </div>

            {/* Results Display */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your AI Transformation Results</h3>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                    ${totalSavings.toLocaleString()}
                  </div>
                  <div className="text-lg text-gray-600">Annual Savings Potential</div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                    <span className="font-semibold text-gray-700">Efficiency Gains</span>
                    <span className="text-2xl font-bold text-green-600">90%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                    <span className="font-semibold text-gray-700">Cost Reduction</span>
                    <span className="text-2xl font-bold text-blue-600">70%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                    <span className="font-semibold text-gray-700">ROI Timeline</span>
                    <span className="text-2xl font-bold text-purple-600">6 months</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl text-center">
                  <h4 className="text-xl font-bold mb-2">Ready to Get Started?</h4>
                  <p className="text-blue-100 mb-4">
                    Schedule a free consultation to discuss your AI transformation strategy
                  </p>
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveAICostCalculator;