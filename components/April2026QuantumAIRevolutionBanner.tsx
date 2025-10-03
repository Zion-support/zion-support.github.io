import React from 'react';

const April2026QuantumAIRevolutionBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Banner */}
          <div className="inline-flex items-center gap-4 px-12 py-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-8 animate-pulse">
            <span className="text-6xl">⚛️</span>
            <span className="text-cyan-400 font-bold text-2xl tracking-wider uppercase">
              🚀 April 2026 Quantum AI Revolution - NOW LIVE!
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            The Next Evolution in Enterprise Intelligence
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Experience <span className="text-cyan-400 font-bold">5000x processing acceleration</span> and 
            <span className="text-purple-400 font-bold"> 99.9% decision accuracy</span> with our revolutionary Quantum AI technology
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30">
              <div className="text-3xl font-extrabold text-cyan-400 mb-2">5000x</div>
              <div className="text-xs text-cyan-300">Processing Acceleration</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <div className="text-3xl font-extrabold text-purple-400 mb-2">99.9%</div>
              <div className="text-xs text-purple-300">Decision Accuracy</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
              <div className="text-3xl font-extrabold text-blue-400 mb-2">$12.7B</div>
              <div className="text-xs text-blue-300">Average Client Value</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30">
              <div className="text-3xl font-extrabold text-indigo-400 mb-2">2.1M</div>
              <div className="text-xs text-indigo-300">Payback Period</div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a 
              href="/blog/ai-2026-april-quantum-ai-revolution-breakthrough" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1 text-lg"
            >
              Discover Quantum AI Revolution →
            </a>
            <a 
              href="/case-studies/ai-2026-april-quantum-ai-mega-success-story" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1 text-lg"
            >
              View $12.7B Success Story →
            </a>
            <a 
              href="/services/ai-2026-april-quantum-ai-consulting" 
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg"
            >
              Get Quantum AI Consulting
            </a>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-5xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold text-white mb-4">Quantum-Neural Fusion</h3>
              <p className="text-gray-300 text-sm mb-4">
                Revolutionary architecture combining quantum computing with advanced neural networks for unprecedented computational power.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Quantum parallelism processing</li>
                <li>• Neural network optimization</li>
                <li>• Real-time decision making</li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-4">Autonomous Operations</h3>
              <p className="text-gray-300 text-sm mb-4">
                Self-healing systems that resolve 94% of issues without human intervention, ensuring continuous optimal performance.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Self-healing architecture</li>
                <li>• Predictive maintenance</li>
                <li>• Continuous optimization</li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-4">Proven Results</h3>
              <p className="text-gray-300 text-sm mb-4">
                Real-world success with Fortune 100 companies achieving $12.7 billion in measurable value and 99.9% operational excellence.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• $12.7B average value</li>
                <li>• 99.9% excellence rate</li>
                <li>• 605% average ROI</li>
              </ul>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience the Quantum AI Revolution?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the Fortune 100 companies already achieving unprecedented success with our April 2026 Quantum AI Revolution. 
              Get your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
              >
                Get Free Consultation
              </a>
              <a 
                href="/services/ai-2026-april-quantum-ai-consulting" 
                className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
              >
                View Consulting Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default April2026QuantumAIRevolutionBanner;