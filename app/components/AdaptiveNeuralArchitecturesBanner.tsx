import ArrowRight from 'next/link';

export default function AdaptiveNeuralArchitecturesBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 via-cyan-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-8 animate-pulse">
            <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
              🧬 REVOLUTIONARY 2026
            </span>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent leading-tight">
            Adaptive Neural Architectures
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Self-evolving neural networks that continuously adapt, optimize, and improve in real-time, delivering 1000x performance improvements with $25B+ ROI
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">1000x</div>
              <div className="text-xs text-blue-300">Performance Boost</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">$25B+</div>
              <div className="text-xs text-cyan-300">ROI Achieved</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">99.9%</div>
              <div className="text-xs text-green-300">Accuracy Rate</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">Real-time</div>
              <div className="text-xs text-purple-300">Adaptation</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <ArrowRight 
              href="/blog/ai-2026-adaptive-neural-architectures-breakthrough" 
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Read Full Breakthrough →
            </ArrowRight>
            <ArrowRight 
              href="/case-studies/ai-2026-adaptive-neural-architectures-25-billion-success" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
            >
              View $25B Success Story →
            </ArrowRight>
            <ArrowRight 
              href="/contact" 
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Start Your Evolution
            </ArrowRight>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <div className="text-blue-400 text-2xl mb-3">🔄</div>
              <h3 className="text-white font-bold text-lg mb-2">Real-Time Adaptation</h3>
              <p className="text-gray-400 text-sm">Neural networks that restructure themselves in real-time based on new data patterns and changing requirements.</p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-900/20 to-green-900/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <div className="text-cyan-400 text-2xl mb-3">⚡</div>
              <h3 className="text-white font-bold text-lg mb-2">Autonomous Optimization</h3>
              <p className="text-gray-400 text-sm">Self-optimizing systems that continuously improve performance without human intervention or manual tuning.</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
              <div className="text-green-400 text-2xl mb-3">🧬</div>
              <h3 className="text-white font-bold text-lg mb-2">Evolutionary Learning</h3>
              <p className="text-gray-400 text-sm">AI systems that evolve new capabilities and develop novel approaches through continuous learning and adaptation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}