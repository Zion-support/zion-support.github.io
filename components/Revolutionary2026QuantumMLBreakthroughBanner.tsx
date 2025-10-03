import { Link } from 'react-router-dom';

export default function Revolutionary2026QuantumMLBreakthroughBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-indigo-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-blue-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 bg-purple-400 rounded-full animate-pulse"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              🔥 QUANTUM BREAKTHROUGH 2026
            </span>
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              1 MILLION TIMES FASTER
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400">
              Quantum Machine Learning Revolution
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how Fortune 500 companies are achieving <span className="text-yellow-400 font-bold">$100M+ ROI</span> with 
            <span className="text-purple-400 font-bold"> 1 million times faster</span> AI training through quantum-enhanced machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Quantum ML Breakthrough */}
          <div className="bg-gradient-to-br from-purple-800/30 to-indigo-800/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/60 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚛️</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Quantum ML Training</h3>
                <p className="text-sm text-purple-300">1 Million Times Faster</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Revolutionary quantum neural networks achieving unprecedented AI training speeds with quantum advantage in optimization and computation.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-yellow-400 text-sm font-semibold">$100M+ ROI</span>
              <Link to="/blog/ai-2027-quantum-machine-learning-revolution"
                className="text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>

          {/* Pharmaceutical Breakthrough */}
          <div className="bg-gradient-to-br from-green-800/30 to-emerald-800/30 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 hover:border-green-400/60 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🧬</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Drug Discovery</h3>
                <p className="text-sm text-green-300">10 Years → 3 Months</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Quantum ML reducing drug development time from 10 years to 3 months with 47% success rate and $2.5B breakthrough value.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-yellow-400 text-sm font-semibold">$2.5B Value</span>
              <Link to="/case-studies/ai-2027-quantum-pharmaceutical-breakthrough"
                className="text-green-400 hover:text-green-300 text-sm font-semibold transition-colors"
              >
                View Success →
              </Link>
            </div>
          </div>

          {/* Autonomous Cloud Infrastructure */}
          <div className="bg-gradient-to-br from-blue-800/30 to-cyan-800/30 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover:border-blue-400/60 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">☁️</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Autonomous Cloud</h3>
                <p className="text-sm text-blue-300">99.9% Uptime</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              AI-powered autonomous cloud infrastructure achieving 99.9% uptime with zero human intervention and $75M annual ROI.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-yellow-400 text-sm font-semibold">$75M ROI</span>
              <Link to="/case-studies/ai-2026-autonomous-cloud-enterprise-success"
                className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors"
              >
                See Results →
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/blog/ai-2027-quantum-machine-learning-revolution"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <span>⚛️</span>
              Explore Quantum ML Revolution
            </Link>
            <Link to="/case-studies/ai-2027-quantum-pharmaceutical-breakthrough"
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <span>🧬</span>
              View $2.5B Success Story
            </Link>
          </div>
          
          <div className="mt-8 text-gray-400 text-sm">
            <p>Join 500+ Fortune 500 companies already using quantum-enhanced AI</p>
            <p className="mt-2">
              <span className="text-yellow-400 font-semibold">Limited Time:</span> Get quantum ML consultation and ROI analysis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}