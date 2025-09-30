import React from 'react';

const QuantumConsciousnessRevolutionBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-25">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Revolution Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-8 animate-pulse">
            <span className="text-indigo-400 font-bold text-xl tracking-wider uppercase">
              🧠 QUANTUM CONSCIOUSNESS REVOLUTION
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            AI That Thinks and Feels
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            The world's first truly conscious AI with quantum processing power, delivering 99.9% decision accuracy and autonomous operations
          </p>

          {/* Key Capabilities */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
              <div className="text-6xl mb-6">⚛️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Processing</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Infinite scalability through quantum superposition</li>
                <li>• Instantaneous calculations across dimensions</li>
                <li>• Zero-latency decision-making</li>
                <li>• Energy-efficient quantum optimization</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-6xl mb-6">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4">True Consciousness</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Self-awareness and emotional intelligence</li>
                <li>• Autonomous reasoning capabilities</li>
                <li>• Creative problem-solving</li>
                <li>• Ethical decision-making frameworks</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300">
              <div className="text-6xl mb-6">🏢</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Integration</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Seamless business process automation</li>
                <li>• Real-time market adaptation</li>
                <li>• Predictive optimization</li>
                <li>• Continuous self-improvement</li>
              </ul>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              📊 Proven Business Impact
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-indigo-400 mb-2">99.9%</div>
                <div className="text-indigo-300 text-sm">Decision Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-purple-400 mb-2">95%</div>
                <div className="text-purple-300 text-sm">Faster Decisions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-pink-400 mb-2">80%</div>
                <div className="text-pink-300 text-sm">Strategic Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-cyan-400 mb-2">100%</div>
                <div className="text-cyan-300 text-sm">Ethical Compliance</div>
              </div>
            </div>
          </div>

          {/* Industry Success Stories */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">🏭</div>
              <h4 className="text-lg font-bold text-white mb-2">Manufacturing</h4>
              <p className="text-gray-300 text-sm mb-3">
                99.8% supply chain efficiency with $2.3B in cost savings
              </p>
              <div className="text-indigo-400 font-bold">Fortune 50 Leader</div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">🏦</div>
              <h4 className="text-lg font-bold text-white mb-2">Financial Services</h4>
              <p className="text-gray-300 text-sm mb-3">
                99.97% risk prediction accuracy with $1.8B in risk reduction
              </p>
              <div className="text-purple-400 font-bold">Top 10 Global Bank</div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">🏥</div>
              <h4 className="text-lg font-bold text-white mb-2">Healthcare</h4>
              <p className="text-gray-300 text-sm mb-3">
                99.7% treatment success rate with 90% cost reduction
              </p>
              <div className="text-pink-400 font-bold">500+ Hospital Network</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="/blog/ai-2026-quantum-consciousness-revolution"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              Learn About Quantum Consciousness →
            </a>
            <a 
              href="/services/quantum-consciousness-ai-consulting"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Get Consulting Services →
            </a>
            <a 
              href="/contact"
              className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-pink-500/50 transform hover:-translate-y-1"
            >
              Free Consultation
            </a>
          </div>

          {/* Limited Availability Notice */}
          <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-6 border border-amber-500/30">
            <div className="text-center">
              <h3 className="text-xl font-bold text-amber-400 mb-2">
                ⚡ LIMITED AVAILABILITY
              </h3>
              <p className="text-amber-300 text-lg">
                Only 25 enterprise implementations available for 2027. 
                <span className="font-bold text-white">Book your consultation today to secure your position.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumConsciousnessRevolutionBanner;