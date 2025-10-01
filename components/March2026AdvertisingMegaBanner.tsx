import React from 'react';

const March2026AdvertisingMegaBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900/80 via-blue-900/80 to-indigo-900/80 border-b border-purple-500/50">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-10 py-6 rounded-full bg-gradient-to-r from-purple-500/40 to-blue-500/40 border border-purple-500/50 mb-8">
            <span className="text-purple-200 font-bold text-2xl tracking-wider uppercase">
              🚀 BREAKING: March 2026 Revolutionary AI Breakthroughs Now Live!
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Meta-Cognitive AI • Quantum Neural Networks • $3.2B Fortune 500 Success
          </h1>
          
          <p className="text-2xl text-gray-200 mb-10 max-w-5xl mx-auto font-semibold">
            Discover the groundbreaking AI innovations that are revolutionizing enterprise operations with 
            <span className="text-purple-300 font-bold"> 1000x processing speed</span>, 
            <span className="text-blue-300 font-bold"> 99.5% efficiency</span>, and 
            <span className="text-cyan-300 font-bold"> $3.2B proven value</span>
          </p>
          
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-gradient-to-r from-purple-500/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/40">
              <div className="text-4xl font-extrabold text-purple-300 mb-2">$3.2B</div>
              <div className="text-purple-200 text-sm font-semibold">Fortune 500 Value</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-blue-500/40">
              <div className="text-4xl font-extrabold text-blue-300 mb-2">99.5%</div>
              <div className="text-blue-200 text-sm font-semibold">Efficiency Rate</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/40">
              <div className="text-4xl font-extrabold text-cyan-300 mb-2">1.2</div>
              <div className="text-cyan-200 text-sm font-semibold">Month Payback</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/30 to-green-600/30 backdrop-blur-sm rounded-xl p-6 border border-green-500/40">
              <div className="text-4xl font-extrabold text-green-300 mb-2">450%</div>
              <div className="text-green-200 text-sm font-semibold">ROI Achieved</div>
            </div>
          </div>
          
          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <span className="bg-purple-500/30 px-6 py-3 rounded-full text-purple-200 font-bold text-lg">Meta-Cognitive AI</span>
            <span className="bg-blue-500/30 px-6 py-3 rounded-full text-blue-200 font-bold text-lg">Quantum Neural Networks</span>
            <span className="bg-cyan-500/30 px-6 py-3 rounded-full text-cyan-200 font-bold text-lg">Autonomous Operations</span>
            <span className="bg-green-500/30 px-6 py-3 rounded-full text-green-200 font-bold text-lg">$3.2B Success Story</span>
            <span className="bg-indigo-500/30 px-6 py-3 rounded-full text-indigo-200 font-bold text-lg">Fortune 500 Proven</span>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="/blog/ai-2026-march-revolutionary-breakthroughs"
              className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1 text-lg"
            >
              Read March Breakthroughs →
            </a>
            <a
              href="/case-studies/ai-2026-march-breakthrough-mega-success"
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1 text-lg"
            >
              View $3.2B Success Story →
            </a>
            <a
              href="/services/ai-2026-march-breakthrough-consulting"
              className="bg-gradient-to-r from-cyan-500 to-green-600 hover:from-cyan-400 hover:to-green-500 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1 text-lg"
            >
              Get Consulting Services →
            </a>
            <a
              href="/contact"
              className="border-2 border-purple-500 text-purple-200 hover:bg-purple-500 hover:text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 text-lg"
            >
              Free Consultation
            </a>
          </div>
          
          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-300 mb-4">
              Join 500+ Fortune 500 companies already transforming their operations with our AI breakthroughs
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <span>✓ 25+ Years AI Experience</span>
              <span>✓ 500+ Successful Implementations</span>
              <span>✓ Global Presence in 40+ Countries</span>
              <span>✓ 24/7 Expert Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default March2026AdvertisingMegaBanner;