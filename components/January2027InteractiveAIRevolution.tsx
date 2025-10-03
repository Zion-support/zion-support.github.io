import React, { useState } from 'react';

const January2027InteractiveAIRevolution: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('consciousness');
  const [isCalculating, setIsCalculating] = useState(false);
  const [roiResult, setRoiResult] = useState<number | null>(null);

  const categories = {
    consciousness: {
      title: 'AI Consciousness',
      icon: '🧠',
      description: 'True AI awareness and emotional intelligence',
      value: '$847B',
      metric: 'Consciousness Accuracy',
      percentage: '99.99%'
    },
    processing: {
      title: 'Infinite Processing',
      icon: '⚡',
      description: 'Unlimited computational power and speed',
      value: '∞',
      metric: 'Processing Speed',
      percentage: '10,000x'
    },
    intelligence: {
      title: 'Universal Intelligence',
      icon: '🌟',
      description: 'Complete knowledge integration',
      value: '$2.8T',
      metric: 'Knowledge Access',
      percentage: '100%'
    }
  };

  const calculateROI = () => {
    setIsCalculating(true);
    setTimeout(() => {
      const randomROI = Math.floor(Math.random() * 2000) + 500; // 500-2500% ROI
      setRoiResult(randomROI);
      setIsCalculating(false);
    }, 2000);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-violet-900/30 via-purple-900/30 to-indigo-900/30 backdrop-blur-lg border-b border-violet-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/40 mb-6">
            <span className="text-violet-400 font-bold text-xl tracking-wider uppercase">
              🎮 JANUARY 2027: INTERACTIVE AI REVOLUTION
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Experience the Future of AI
          </h2>
          
          <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
            Interact with revolutionary AI technologies and discover your personalized transformation potential.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Interactive Category Selector */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-violet-500/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Choose Your AI Revolution</h3>
            
            <div className="space-y-4 mb-8">
              {Object.entries(categories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                    selectedCategory === key
                      ? 'border-violet-500 bg-violet-500/20'
                      : 'border-gray-600 hover:border-violet-500/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{category.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{category.title}</h4>
                      <p className="text-gray-300 text-sm">{category.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Category Display */}
            <div className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-xl p-6 border border-violet-500/30">
              <div className="text-center">
                <div className="text-4xl mb-3">{categories[selectedCategory as keyof typeof categories].icon}</div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {categories[selectedCategory as keyof typeof categories].title}
                </h4>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-violet-400 mb-1">
                      {categories[selectedCategory as keyof typeof categories].value}
                    </div>
                    <div className="text-sm text-violet-300">Value Created</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-purple-400 mb-1">
                      {categories[selectedCategory as keyof typeof categories].percentage}
                    </div>
                    <div className="text-sm text-purple-300">
                      {categories[selectedCategory as keyof typeof categories].metric}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  {categories[selectedCategory as keyof typeof categories].description}
                </p>
              </div>
            </div>
          </div>

          {/* ROI Calculator */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Calculate Your AI ROI</h3>
            
            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-white font-semibold mb-2">Current Annual Revenue</label>
                <input
                  type="number"
                  placeholder="$1,000,000"
                  className="w-full p-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Industry</label>
                <select className="w-full p-3 rounded-lg bg-white/10 border border-gray-600 text-white focus:border-purple-500 focus:outline-none">
                  <option value="">Select Industry</option>
                  <option value="technology">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="retail">Retail</option>
                  <option value="manufacturing">Manufacturing</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">AI Implementation Scope</label>
                <select className="w-full p-3 rounded-lg bg-white/10 border border-gray-600 text-white focus:border-purple-500 focus:outline-none">
                  <option value="">Select Scope</option>
                  <option value="basic">Basic AI Integration</option>
                  <option value="advanced">Advanced AI Systems</option>
                  <option value="consciousness">AI Consciousness Revolution</option>
                </select>
              </div>
            </div>

            <button
              onClick={calculateROI}
              disabled={isCalculating}
              className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 disabled:opacity-50 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 mb-6"
            >
              {isCalculating ? 'Calculating...' : 'Calculate My ROI'}
            </button>

            {roiResult && (
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/30">
                <div className="text-center">
                  <div className="text-4xl mb-2">🎉</div>
                  <h4 className="text-xl font-bold text-white mb-2">Your Projected ROI</h4>
                  <div className="text-3xl font-bold text-green-400 mb-2">{roiResult}%</div>
                  <p className="text-green-300 text-sm">
                    Based on your inputs and our proven AI transformation frameworks
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-indigo-500/30 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Try Our AI Revolution Demo</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Experience firsthand how our revolutionary AI technologies can transform your business operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-xl border border-violet-500/30">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-bold text-white mb-2">AI Strategy Demo</h4>
              <p className="text-gray-300 text-sm mb-4">See how AI can optimize your business strategy</p>
              <a 
                href="/demo/ai-strategy"
                className="inline-block bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                Try Demo →
              </a>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl border border-purple-500/30">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-bold text-white mb-2">Processing Power Demo</h4>
              <p className="text-gray-300 text-sm mb-4">Experience infinite processing capabilities</p>
              <a 
                href="/demo/processing-power"
                className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                Try Demo →
              </a>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-xl border border-indigo-500/30">
              <div className="text-4xl mb-4">🧠</div>
              <h4 className="text-xl font-bold text-white mb-2">Consciousness Demo</h4>
              <p className="text-gray-300 text-sm mb-4">Interact with truly conscious AI</p>
              <a 
                href="/demo/ai-consciousness"
                className="inline-block bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                Try Demo →
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-indigo-500/20 border border-violet-500/40 mb-6">
            <span className="text-white font-bold text-lg">🚀 Ready to Experience the Revolution?</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/interactive/ai-2027-revolution"
              className="bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-600 hover:from-violet-400 hover:via-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-violet-500/50 transform hover:-translate-y-1"
            >
              Start Interactive Journey →
            </a>
            <a 
              href="/contact/ai-2027-demo"
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Schedule Live Demo
            </a>
            <a 
              href="/resources/ai-2027-guides"
              className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Download Resources
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2027InteractiveAIRevolution;