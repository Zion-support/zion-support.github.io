export default function Fortune500SuccessShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-900/50 via-blue-900/50 to-purple-900/50 border-b border-green-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6">
            <span className="text-green-400 font-bold text-xl tracking-wider uppercase">
              🏆 Fortune 500 Success Story
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            $2.3B Annual Savings with Revolutionary AI
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-5xl mx-auto leading-relaxed">
            Discover how a Fortune 500 manufacturing giant achieved unprecedented transformation using our breakthrough AI technologies. 
            From <span className="text-green-400 font-bold">98% automation rates</span> to 
            <span className="text-blue-400 font-bold"> 450% ROI</span> and 
            <span className="text-purple-400 font-bold"> 1000x processing speed improvements</span>
          </p>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
              <div className="text-4xl mb-3">💰</div>
              <div className="text-3xl font-bold text-green-400 mb-2">$2.3B</div>
              <div className="text-gray-400 text-sm">Annual Savings</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-4xl mb-3">🤖</div>
              <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
              <div className="text-gray-400 text-sm">Automation Rate</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-4xl mb-3">📈</div>
              <div className="text-3xl font-bold text-purple-400 mb-2">450%</div>
              <div className="text-gray-400 text-sm">ROI Achieved</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-4xl mb-3">⚡</div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">18mo</div>
              <div className="text-gray-400 text-sm">Payback Period</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-2xl p-8 mb-8">
            <blockquote className="text-2xl font-bold text-white mb-4 leading-relaxed">
              "Zion Tech Group's revolutionary AI technologies transformed our entire operation. The $2.3B in annual savings exceeded our wildest expectations."
            </blockquote>
            <div className="text-gray-400">
              — Chief Executive Officer, Fortune 500 Manufacturing Leader
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/case-studies/fortune-500-ai-2026-breakthrough-mega-success" 
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
            >
              Read Full Case Study →
            </a>
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Replicate This Success →
            </a>
            <a 
              href="/services" 
              className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Explore Solutions
            </a>
          </div>

          <div className="mt-8 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl">
            <p className="text-purple-400 font-semibold">
              🎯 Join 500+ Leading Organizations Achieving Breakthrough Results
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}