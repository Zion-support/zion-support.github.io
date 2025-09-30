import React from 'react';
import Link from 'next/link';

export default function AI2027BreakthroughBanner() {
  return (
    <section className="relative py-16 px-6 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500 rounded-full opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-purple-400 rounded-full opacity-20 animate-pulse delay-3000"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-6">
            <span className="animate-pulse">🚀</span>
            BREAKTHROUGH 2027
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI 2027: Next-Generation 
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Breakthroughs</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the revolutionary AI breakthroughs coming in 2027 that will reshape industries, 
            from quantum-enhanced neural networks to autonomous enterprise systems delivering 
            <span className="text-yellow-400 font-bold"> $2.3B+ ROI</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="text-3xl mb-2">🧠</div>
            <h3 className="font-bold text-white mb-2">Quantum AI</h3>
            <p className="text-blue-100 text-sm">1000x faster processing</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="text-3xl mb-2">🏢</div>
            <h3 className="font-bold text-white mb-2">Autonomous Enterprise</h3>
            <p className="text-blue-100 text-sm">98% efficiency gains</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="text-3xl mb-2">🔮</div>
            <h3 className="font-bold text-white mb-2">Predictive Intelligence</h3>
            <p className="text-blue-100 text-sm">99.7% accuracy</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="text-3xl mb-2">💰</div>
            <h3 className="font-bold text-white mb-2">ROI Impact</h3>
            <p className="text-blue-100 text-sm">$2.3B+ returns</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/blog/ai-2027-next-generation-breakthroughs"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Read Full Article
          </Link>
          <Link
            href="/case-studies/enterprise-ai-transformation-2027-success"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-colors"
          >
            View Success Story
          </Link>
        </div>

        <div className="text-center">
          <p className="text-blue-200 text-sm">
            <span className="font-semibold">Featured:</span> Fortune 500 company achieves $2.3B ROI with Zion Tech Group's AI transformation
          </p>
        </div>
      </div>
    </section>
  );
}