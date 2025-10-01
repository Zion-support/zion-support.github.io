import React from 'react';

const January2025CognitiveAutomationBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-blue-900/40 backdrop-blur-sm border-b border-purple-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8">
            <span className="text-purple-400 font-bold text-lg tracking-wider uppercase">
              🧠 BREAKING: January 2025
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Cognitive Automation Breakthrough
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto font-semibold">
            Revolutionary AI Systems Deliver 95% Accuracy, 87% Faster Decisions, and $95B Success Stories
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">95%</div>
              <div className="text-xs text-purple-300">Decision Accuracy</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-400 mb-1">87%</div>
              <div className="text-xs text-indigo-300">Faster Decisions</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">$95B</div>
              <div className="text-xs text-blue-300">Success Value</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">15x</div>
              <div className="text-xs text-green-300">Performance Gain</div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-3">Neural Reasoning Engines</h3>
              <p className="text-gray-300 text-sm mb-4">
                Advanced neural networks that simulate human cognitive processes, enabling complex reasoning and decision-making.
              </p>
              <ul className="text-gray-300 text-xs space-y-1">
                <li>• Multi-layer cognitive processing</li>
                <li>• Contextual understanding</li>
                <li>• Probabilistic reasoning</li>
                <li>• Adaptive learning</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Real-Time Decision Systems</h3>
              <p className="text-gray-300 text-sm mb-4">
                Lightning-fast cognitive processing that delivers decisions 87% faster than traditional methods.
              </p>
              <ul className="text-gray-300 text-xs space-y-1">
                <li>• Sub-second processing</li>
                <li>• Parallel cognitive threads</li>
                <li>• Dynamic optimization</li>
                <li>• Continuous learning</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Predictive Cognitive Models</h3>
              <p className="text-gray-300 text-sm mb-4">
                AI systems that anticipate future scenarios and proactively optimize decision-making processes.
              </p>
              <ul className="text-gray-300 text-xs space-y-1">
                <li>• Scenario modeling</li>
                <li>• Outcome prediction</li>
                <li>• Risk assessment</li>
                <li>• Strategic planning</li>
              </ul>
            </div>
          </div>

          {/* Success Story Highlight */}
          <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 mb-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-purple-400 mb-6">🏦 Global Financial Services Success</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-purple-400 mb-2">$95B</div>
                <div className="text-sm text-purple-300">Value Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-purple-400 mb-2">95%</div>
                <div className="text-sm text-purple-300">Decision Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-purple-400 mb-2">87%</div>
                <div className="text-sm text-purple-300">Faster Processing</div>
              </div>
            </div>
            <p className="text-gray-300 text-center">
              A leading financial institution implemented cognitive automation across all trading operations, 
              achieving unprecedented decision accuracy while dramatically reducing processing times.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/blog/ai-2025-cognitive-automation-breakthrough"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Read Full Article →
            </a>
            <a
              href="/services/cognitive-automation-consulting"
              className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              Get Started →
            </a>
            <a
              href="/case-studies/cognitive-automation-success-stories"
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              View Case Studies →
            </a>
          </div>

          {/* Additional Benefits */}
          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-white mb-3">🎯 Implementation Benefits</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• 95% decision accuracy achieved</li>
                <li>• 87% faster decision processing</li>
                <li>• $95B value creation potential</li>
                <li>• 15x performance improvement</li>
                <li>• 99.8% quality maintenance</li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-white mb-3">🚀 Technology Advantages</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Neural reasoning engines</li>
                <li>• Real-time decision systems</li>
                <li>• Predictive cognitive models</li>
                <li>• Self-optimizing intelligence</li>
                <li>• Continuous learning algorithms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2025CognitiveAutomationBanner;