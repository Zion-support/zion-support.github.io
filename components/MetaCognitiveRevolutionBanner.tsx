import { Link } from 'react-router-dom';

export default function MetaCognitiveRevolutionBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Header */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🧠 META-COGNITIVE AI REVOLUTION 2026
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            Self-Aware AI Systems
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Revolutionary meta-cognitive AI achieving 99.7% self-awareness, 500x learning acceleration, and $4.2B enterprise value
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">99.7%</div>
              <div className="text-xs text-purple-300">Self-Awareness</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-400 mb-1">500x</div>
              <div className="text-xs text-indigo-300">Learning Speed</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">$4.2B</div>
              <div className="text-xs text-blue-300">Enterprise Value</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">1.2mo</div>
              <div className="text-xs text-green-300">Payback Period</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/blog/ai-2026-meta-cognitive-revolution-breakthrough" 
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Discover Meta-Cognitive AI →
            </Link>
            <Link to="/case-studies/ai-2026-meta-cognitive-4-billion-success" 
              className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              Read $4.2B Success Story →
            </Link>
            <Link to="/contact" 
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Started Today
            </Link>
          </div>
          
          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-3">Self-Monitoring AI</h3>
              <p className="text-gray-300 text-sm">
                AI systems that analyze their own performance, identify limitations, and continuously improve their decision-making processes.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">500x Learning Speed</h3>
              <p className="text-gray-300 text-sm">
                Meta-cognitive systems learn 500x faster than traditional AI by optimizing their own learning strategies and approaches.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-3">$4.2B Value</h3>
              <p className="text-gray-300 text-sm">
                Fortune 100 companies achieving $4.2B in measurable value through meta-cognitive AI implementation and optimization.
              </p>
            </div>
          </div>
          
          {/* Success Story Preview */}
          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                🏆 Fortune 100 Success Story
              </h3>
              <p className="text-green-200 text-lg mb-6">
                "Meta-cognitive AI delivered $4.2B in value within 18 months, revolutionizing our decision-making processes and achieving 99.7% self-awareness accuracy."
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300">99.7% Self-Awareness</span>
                <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300">500x Learning Speed</span>
                <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300">$4.2B Enterprise Value</span>
                <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300">1.2 Month Payback</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}