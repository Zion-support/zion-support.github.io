import * as React from 'react';
import { useState, useEffect } from 'react';

const InteractiveAIInnovationDemo: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('retail');
  const [companySize, setCompanySize] = useState('enterprise');
  const [aiAdoption, setAiAdoption] = useState('beginner');
  const [results, setResults] = useState<any>(null);

  const industries = [
    { id: 'retail', name: 'Retail & E-commerce', icon: '🛒' },
    { id: 'manufacturing', name: 'Manufacturing', icon: '🏭' },
    { id: 'finance', name: 'Financial Services', icon: '💳' },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
    { id: 'technology', name: 'Technology', icon: '💻' },
    { id: 'education', name: 'Education', icon: '🎓' }
  ];

  const sizes = [
    { id: 'startup', name: 'Startup (1-50)', multiplier: 1.2 },
    { id: 'midmarket', name: 'Mid-Market (51-500)', multiplier: 1.5 },
    { id: 'enterprise', name: 'Enterprise (500+)', multiplier: 2.0 }
  ];

  const adoptionLevels = [
    { id: 'beginner', name: 'AI Beginner', multiplier: 1.0 },
    { id: 'intermediate', name: 'Some AI Experience', multiplier: 1.3 },
    { id: 'advanced', name: 'AI Advanced', multiplier: 1.6 }
  ];

  useEffect(() => {
    calculateResults();
  }, [selectedIndustry, companySize, aiAdoption]);

  const calculateResults = () => {
    const sizeMultiplier = sizes.find(s => s.id === companySize)?.multiplier || 1;
    const adoptionMultiplier = adoptionLevels.find(a => a.id === aiAdoption)?.multiplier || 1;
    const baseMultiplier = sizeMultiplier * adoptionMultiplier;

    const industryResults = {
      retail: {
        efficiency: 45 * baseMultiplier,
        costReduction: 35 * baseMultiplier,
        revenueGrowth: 28 * baseMultiplier,
        roi: 380 * baseMultiplier
      },
      manufacturing: {
        efficiency: 52 * baseMultiplier,
        costReduction: 42 * baseMultiplier,
        revenueGrowth: 31 * baseMultiplier,
        roi: 420 * baseMultiplier
      },
      finance: {
        efficiency: 38 * baseMultiplier,
        costReduction: 28 * baseMultiplier,
        revenueGrowth: 22 * baseMultiplier,
        roi: 320 * baseMultiplier
      },
      healthcare: {
        efficiency: 41 * baseMultiplier,
        costReduction: 33 * baseMultiplier,
        revenueGrowth: 25 * baseMultiplier,
        roi: 350 * baseMultiplier
      },
      technology: {
        efficiency: 48 * baseMultiplier,
        costReduction: 38 * baseMultiplier,
        revenueGrowth: 29 * baseMultiplier,
        roi: 400 * baseMultiplier
      },
      education: {
        efficiency: 35 * baseMultiplier,
        costReduction: 25 * baseMultiplier,
        revenueGrowth: 18 * baseMultiplier,
        roi: 280 * baseMultiplier
      }
    };

    setResults(industryResults[selectedIndustry as keyof typeof industryResults]);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
            <span className="text-indigo-400 font-bold text-xl tracking-wider uppercase">
              🎯 Interactive AI Innovation Calculator
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Discover Your AI Transformation Potential
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how AI can transform your business with our interactive calculator. 
            Get personalized insights based on your industry, company size, and current AI adoption level.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Section */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8">Configure Your Scenario</h3>
              
              {/* Industry Selection */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-300 mb-4">Select Your Industry</label>
                <div className="grid grid-cols-2 gap-3">
                  {industries.map((industry) => (
                    <button
                      key={industry.id}
                      onClick={() => setSelectedIndustry(industry.id)}
                      className={`p-4 rounded-xl border transition-all duration-300 ${
                        selectedIndustry === industry.id
                          ? 'bg-indigo-500/20 border-indigo-500/50 text-indigo-400'
                          : 'bg-white/5 border-white/10 text-gray-300 hover:border-indigo-500/30'
                      }`}
                    >
                      <div className="text-2xl mb-2">{industry.icon}</div>
                      <div className="text-sm font-medium">{industry.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Company Size */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-300 mb-4">Company Size</label>
                <div className="space-y-3">
                  {sizes.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setCompanySize(size.id)}
                      className={`w-full p-4 rounded-xl border transition-all duration-300 text-left ${
                        companySize === size.id
                          ? 'bg-purple-500/20 border-purple-500/50 text-purple-400'
                          : 'bg-white/5 border-white/10 text-gray-300 hover:border-purple-500/30'
                      }`}
                    >
                      <div className="font-medium">{size.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* AI Adoption Level */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-300 mb-4">Current AI Adoption</label>
                <div className="space-y-3">
                  {adoptionLevels.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setAiAdoption(level.id)}
                      className={`w-full p-4 rounded-xl border transition-all duration-300 text-left ${
                        aiAdoption === level.id
                          ? 'bg-pink-500/20 border-pink-500/50 text-pink-400'
                          : 'bg-white/5 border-white/10 text-gray-300 hover:border-pink-500/30'
                      }`}
                    >
                      <div className="font-medium">{level.name}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8">Your AI Transformation Potential</h3>
              
              {results && (
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-green-400 font-semibold">Operational Efficiency</span>
                      <span className="text-3xl font-bold text-green-400">+{results.efficiency.toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${Math.min(results.efficiency, 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-6 border border-blue-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-blue-400 font-semibold">Cost Reduction</span>
                      <span className="text-3xl font-bold text-blue-400">-{results.costReduction.toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${Math.min(results.costReduction, 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-purple-400 font-semibold">Revenue Growth</span>
                      <span className="text-3xl font-bold text-purple-400">+{results.revenueGrowth.toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${Math.min(results.revenueGrowth, 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-xl p-6 border border-orange-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-orange-400 font-semibold">Expected ROI</span>
                      <span className="text-3xl font-bold text-orange-400">{results.roi.toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-orange-500 to-yellow-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${Math.min(results.roi / 10, 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl border border-indigo-500/20">
                    <h4 className="text-lg font-bold text-white mb-3">🎯 Next Steps</h4>
                    <p className="text-gray-300 mb-4">
                      Based on your profile, we recommend starting with our AI readiness assessment and pilot program.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a 
                        href="/contact"
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 text-center"
                      >
                        Get Free Assessment
                      </a>
                      <a 
                        href="/demo"
                        className="border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 text-center"
                      >
                        Schedule Demo
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveAIInnovationDemo;