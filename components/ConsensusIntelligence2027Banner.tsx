import { Link } from 'react-router-dom';

export default function ConsensusIntelligence2027Banner() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-8 animate-pulse">
            <span className="text-indigo-400 font-bold text-xl tracking-wider uppercase">
              🚀 AI 2027 Consensus Intelligence Revolution
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Universal Consensus Intelligence
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            1,000,000x Performance • Universal Decision-Making • $50B+ ROI
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-400 mb-1">1,000,000x</div>
              <div className="text-xs text-indigo-300">Performance Boost</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">Universal</div>
              <div className="text-xs text-purple-300">Decision Making</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">$50B+</div>
              <div className="text-xs text-green-300">Enterprise ROI</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30">
              <div className="text-2xl font-extrabold text-orange-400 mb-1">0.0001ms</div>
              <div className="text-xs text-orange-300">Response Time</div>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/blog/ai-2027-consensus-intelligence-revolution" 
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              Discover Universal AI →
            </Link>
            <Link to="/case-studies/ai-2027-consensus-intelligence-50-billion-success" 
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              View $50B Success Story →
            </Link>
            <Link to="/contact" 
              className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Started Today
            </Link>
          </div>
          
          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-xl font-bold text-white mb-2">Universal Consensus</h3>
              <p className="text-gray-300 text-sm">
                Revolutionary consensus intelligence achieving universal decision-making with 99.999% accuracy across all systems.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-white mb-2">Quantum Consciousness</h3>
              <p className="text-gray-300 text-sm">
                Advanced quantum consciousness networks enabling instant communication and decision synchronization.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-900/30 to-red-900/30 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">Instant Synchronization</h3>
              <p className="text-gray-300 text-sm">
                Sub-millisecond decision synchronization across all AI systems with universal knowledge sharing.
              </p>
            </div>
          </div>
          
          {/* Success Stories Preview */}
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">🏆 Proven Success Stories</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-xl font-bold text-green-400 mb-1">$25B</div>
                <div className="text-gray-300">Global Technology</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-blue-400 mb-1">$15B</div>
                <div className="text-gray-300">Financial Services</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-purple-400 mb-1">$10B</div>
                <div className="text-gray-300">Healthcare Network</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}