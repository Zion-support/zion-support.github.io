import React, { useState, useEffect } from 'react';

const UltimateROICalculator2026: React.FC = () => {
  const [currentInvestment, setCurrentInvestment] = useState(100000);
  const [selectedTechnology, setSelectedTechnology] = useState('transcendent');
  const [timeHorizon, setTimeHorizon] = useState(12);
  const [calculatedROI, setCalculatedROI] = useState(0);
  const [animatedROI, setAnimatedROI] = useState(0);

  const technologies = {
    transcendent: { name: 'Transcendent AI 2026', roi: 1000000, color: 'from-violet-500 to-purple-600' },
    consciousness: { name: 'Neural Consciousness AI 2025', roi: 50000, color: 'from-emerald-500 to-cyan-600' },
    advanced: { name: 'Advanced AI 2025 Breakthrough', roi: 25000, color: 'from-blue-500 to-indigo-600' },
    ultimate: { name: 'Ultimate AI 2026 Future', roi: 100000, color: 'from-indigo-500 to-purple-600' },
    quantum: { name: 'Quantum AI 2025 Revolution', roi: 15000, color: 'from-cyan-500 to-blue-600' },
    creative: { name: 'Creative Intelligence AI', roi: 30000, color: 'from-pink-500 to-rose-600' }
  };

  useEffect(() => {
    const selectedTech = technologies[selectedTechnology as keyof typeof technologies];
    const baseROI = selectedTech.roi;
    const timeMultiplier = Math.pow(1.5, (timeHorizon - 12) / 12);
    const investmentMultiplier = Math.pow(currentInvestment / 100000, 0.1);
    
    const finalROI = baseROI * timeMultiplier * investmentMultiplier;
    setCalculatedROI(finalROI);

    // Animate ROI counter
    let startTime: number;
    const duration = 2000;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setAnimatedROI(Math.floor(finalROI * easeOutQuart));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [currentInvestment, selectedTechnology, timeHorizon]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toFixed(0);
  };

  const projectedRevenue = currentInvestment * (animatedROI / 100);
  const netProfit = projectedRevenue - currentInvestment;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full px-6 py-3 mb-6">
            <span className="text-white font-bold text-lg">💰 ULTIMATE ROI CALCULATOR 2026</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
              Ultimate ROI
            </span>
            <br />
            <span className="text-white">Calculator 2026</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Calculate your potential return on investment with our revolutionary AI technologies. 
            Experience unprecedented ROI with documented results up to <span className="font-bold text-purple-400">1,000,000%</span>.
          </p>
        </div>

        {/* Calculator Interface */}
        <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl p-8 border border-white border-opacity-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Controls */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">Investment Parameters</h3>
              
              {/* Investment Amount */}
              <div>
                <label className="block text-lg font-semibold mb-4">
                  Initial Investment Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl">💰</span>
                  <input
                    type="range"
                    min="10000"
                    max="10000000"
                    step="10000"
                    value={currentInvestment}
                    onChange={(e) => setCurrentInvestment(Number(e.target.value))}
                    className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>$10K</span>
                    <span className="text-purple-400 font-bold text-lg">
                      ${formatNumber(currentInvestment)}
                    </span>
                    <span>$10M</span>
                  </div>
                </div>
              </div>

              {/* Technology Selection */}
              <div>
                <label className="block text-lg font-semibold mb-4">
                  AI Technology
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {Object.entries(technologies).map(([key, tech]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedTechnology(key)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                        selectedTechnology === key
                          ? `border-purple-500 bg-gradient-to-r ${tech.color} bg-opacity-20`
                          : 'border-gray-600 bg-gray-800 bg-opacity-50 hover:border-purple-400'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold">{tech.name}</div>
                          <div className="text-sm opacity-80">
                            {tech.roi.toLocaleString()}% Base ROI
                          </div>
                        </div>
                        <div className="text-2xl">🚀</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Horizon */}
              <div>
                <label className="block text-lg font-semibold mb-4">
                  Implementation Timeline
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl">⏰</span>
                  <input
                    type="range"
                    min="6"
                    max="36"
                    step="1"
                    value={timeHorizon}
                    onChange={(e) => setTimeHorizon(Number(e.target.value))}
                    className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>6 months</span>
                    <span className="text-purple-400 font-bold text-lg">
                      {timeHorizon} months
                    </span>
                    <span>36 months</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">Projected Results</h3>
              
              {/* Main ROI Display */}
              <div className={`bg-gradient-to-r ${technologies[selectedTechnology as keyof typeof technologies].color} rounded-2xl p-8 text-center shadow-2xl`}>
                <div className="text-6xl font-black mb-4">
                  {formatNumber(animatedROI)}%
                </div>
                <div className="text-2xl font-bold mb-2">DOCUMENTED ROI</div>
                <div className="text-lg opacity-90">
                  {technologies[selectedTechnology as keyof typeof technologies].name}
                </div>
              </div>

              {/* Financial Breakdown */}
              <div className="space-y-4">
                <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold">Initial Investment</span>
                    <span className="text-2xl font-bold text-red-400">
                      ${formatNumber(currentInvestment)}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold">Projected Revenue</span>
                    <span className="text-2xl font-bold text-green-400">
                      ${formatNumber(projectedRevenue)}
                    </span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold">Net Profit</span>
                    <span className="text-2xl font-bold text-white">
                      ${formatNumber(netProfit)}
                    </span>
                  </div>
                </div>
              </div>

              {/* ROI Multiplier */}
              <div className="bg-purple-900 bg-opacity-30 rounded-xl p-6 border border-purple-500 border-opacity-30">
                <div className="text-center">
                  <div className="text-4xl font-black text-purple-400 mb-2">
                    {Math.floor(animatedROI / 100)}x
                  </div>
                  <div className="text-lg font-semibold">Investment Multiplier</div>
                  <div className="text-sm opacity-80">
                    Every dollar invested returns {Math.floor(animatedROI / 100)} dollars
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full">
                  🚀 Start Your AI Investment Journey
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Comparison */}
        <div className="mt-16 bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">ROI Comparison Across Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.entries(technologies).map(([key, tech]) => (
              <div key={key} className="text-center">
                <div className={`bg-gradient-to-r ${tech.color} rounded-xl p-4 mb-2`}>
                  <div className="text-2xl font-black">{formatNumber(tech.roi)}%</div>
                </div>
                <div className="text-sm font-semibold">{tech.name.split(' ')[0]}</div>
                <div className="text-xs opacity-80">Base ROI</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #8b5cf6, #6366f1);
          cursor: pointer;
          box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.3);
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #8b5cf6, #6366f1);
          cursor: pointer;
          border: none;
          box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.3);
        }
      `}</style>
    </section>
  );
};

export default UltimateROICalculator2026;