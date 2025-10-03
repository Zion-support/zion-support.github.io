import { Link } from 'react-router-dom';

export default function October2025AIBreakthroughTrilogyBanner() {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-12 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Top Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 font-black px-6 py-3 rounded-full text-sm uppercase tracking-wider shadow-xl mb-4">
            <span className="text-2xl animate-bounce">🚀</span>
            <span>October 1, 2025 • The AI Breakthrough Trilogy • Just Published</span>
            <span className="text-2xl animate-bounce">🚀</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200">
            Three Revolutionary AI Guides<br />
            <span className="text-yellow-300">Just Dropped Today</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-purple-200 mb-6 max-w-3xl mx-auto">
            From Human-Aligned AI to Quantum Computing: Your Complete Enterprise Transformation Roadmap
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="text-center">
              <div className="text-3xl font-black text-yellow-300">$9.3B+</div>
              <div className="text-sm text-purple-200">Combined Value</div>
            </div>
            <div className="w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-black text-green-300">99.7%</div>
              <div className="text-sm text-purple-200">Avg Accuracy</div>
            </div>
            <div className="w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-black text-blue-300">10,000x</div>
              <div className="text-sm text-purple-200">Max Speedup</div>
            </div>
            <div className="w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-black text-orange-300">1,847%</div>
              <div className="text-sm text-purple-200">Average ROI</div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Guide 1 */}
          <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm rounded-xl p-6 border-2 border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">🧠</span>
              <div>
                <div className="text-xs text-blue-300 font-bold uppercase">Guide #1</div>
                <div className="text-yellow-300 font-black text-xs">NEW TODAY</div>
              </div>
            </div>
            
            <h3 className="text-2xl font-black mb-3 text-white">
              RLHF Enterprise<br />Revolution
            </h3>
            
            <p className="text-purple-100 text-sm mb-4">
              Master Reinforcement Learning from Human Feedback with production frameworks that Fortune 500 companies use
            </p>
            
            <div className="space-y-2 text-sm mb-6">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-purple-200">Annual Value:</span>
                <span className="font-bold text-yellow-300">$127M</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-purple-200">Accuracy Gain:</span>
                <span className="font-bold text-green-300">+94%</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-purple-200">ROI:</span>
                <span className="font-bold text-orange-300">847%</span>
              </div>
            </div>
            
            <Link 
              to="/blog/ai-2025-october-reinforcement-learning-human-feedback-enterprise"
              className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-3 px-4 rounded-lg text-center transition-all"
            >
              Read Full Guide →
            </Link>
          </div>

          {/* Guide 2 */}
          <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-sm rounded-xl p-6 border-2 border-green-400/30 hover:border-green-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">🚗</span>
              <div>
                <div className="text-xs text-green-300 font-bold uppercase">Guide #2</div>
                <div className="text-yellow-300 font-black text-xs">NEW TODAY</div>
              </div>
            </div>
            
            <h3 className="text-2xl font-black mb-3 text-white">
              Autonomous Vehicles<br />AI Revolution
            </h3>
            
            <p className="text-purple-100 text-sm mb-4">
              Complete enterprise fleet management and self-driving technology deployment framework
            </p>
            
            <div className="space-y-2 text-sm mb-6">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-purple-200">Market Value:</span>
                <span className="font-bold text-yellow-300">$8.7B</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-purple-200">Safety Score:</span>
                <span className="font-bold text-green-300">99.94%</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-purple-200">ROI:</span>
                <span className="font-bold text-orange-300">1,847%</span>
              </div>
            </div>
            
            <Link 
              to="/blog/ai-2025-october-autonomous-vehicles-ai-revolution"
              className="block w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold py-3 px-4 rounded-lg text-center transition-all"
            >
              Read Full Guide →
            </Link>
          </div>

          {/* Guide 3 */}
          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-xl p-6 border-2 border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">⚛️</span>
              <div>
                <div className="text-xs text-purple-300 font-bold uppercase">Guide #3</div>
                <div className="text-yellow-300 font-black text-xs">NEW TODAY</div>
              </div>
            </div>
            
            <h3 className="text-2xl font-black mb-3 text-white">
              Quantum Machine<br />Learning Breakthrough
            </h3>
            
            <p className="text-purple-100 text-sm mb-4">
              Practical quantum ML implementation for enterprise with proven production frameworks
            </p>
            
            <div className="space-y-2 text-sm mb-6">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-purple-200">Annual Value:</span>
                <span className="font-bold text-yellow-300">$427M</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-purple-200">Speedup:</span>
                <span className="font-bold text-green-300">10,000x</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-purple-200">ROI:</span>
                <span className="font-bold text-orange-300">2,847%</span>
              </div>
            </div>
            
            <Link 
              to="/blog/ai-2025-october-quantum-machine-learning-enterprise-breakthrough"
              className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-4 rounded-lg text-center transition-all"
            >
              Read Full Guide →
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-yellow-900/20 to-orange-900/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30">
          <h3 className="text-2xl md:text-3xl font-black mb-4">
            🎯 Ready to Implement These Breakthrough Technologies?
          </h3>
          <p className="text-purple-200 text-lg mb-6 max-w-2xl mx-auto">
            Join Fortune 500 companies achieving transformational results with our proven enterprise AI solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/services"
              className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 text-slate-900 font-black px-8 py-4 rounded-lg transition-all shadow-xl hover:shadow-2xl text-lg"
            >
              Explore Services
            </Link>
            <Link 
              to="/case-studies"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-lg transition-all border-2 border-white/30 hover:border-white/50 text-lg"
            >
              Success Stories
            </Link>
            <Link 
              to="/blog"
              className="bg-purple-600/30 hover:bg-purple-600/50 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-lg transition-all border-2 border-purple-400/30 hover:border-purple-400/50 text-lg"
            >
              More Insights
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
