import React from 'react';
import Link from 'next/link';

export default function Ultimate2027ContentShowcaseBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-500 rounded-full opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-indigo-500 rounded-full opacity-20 animate-pulse delay-3000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-full text-lg font-bold mb-6 animate-bounce">
            <span className="text-2xl">🚀</span>
            <span>ULTIMATE 2027 AI BREAKTHROUGHS</span>
            <span className="text-2xl">✨</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            The Future of AI is 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
              {' '}Here Today
            </span>
          </h2>
          
          <p className="text-2xl text-indigo-100 max-w-4xl mx-auto mb-12 leading-relaxed">
            Experience the most advanced AI technologies available to enterprise: Quantum Computing, 
            Autonomous Business Processes, and proven $1B+ ROI transformations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Quantum AI Revolution */}
          <Link href="/blog/ai-2027-quantum-revolution" className="group">
            <div className="bg-gradient-to-br from-purple-800 to-indigo-800 rounded-2xl p-8 shadow-2xl hover:shadow-purple-500/25 transition-all transform hover:-translate-y-2 hover:scale-105 border border-purple-400/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🔮</span>
                </div>
                <div>
                  <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                    QUANTUM BREAKTHROUGH
                  </span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">
                AI 2027: Quantum Revolution
              </h3>
              
              <p className="text-indigo-100 mb-6 leading-relaxed">
                Discover how quantum computing transforms AI, delivering 1000x speed improvements 
                and $500M+ ROI for enterprise implementations.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">1000x</div>
                  <div className="text-xs text-indigo-200">Speed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">99.9%</div>
                  <div className="text-xs text-indigo-200">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">$500M+</div>
                  <div className="text-xs text-indigo-200">ROI</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-indigo-200">25 min read</div>
                <div className="text-yellow-400 font-bold group-hover:text-yellow-300 transition-colors">
                  Read Full Article →
                </div>
              </div>
            </div>
          </Link>

          {/* Autonomous Business Processes */}
          <Link href="/blog/ai-autonomous-business-processes-2027" className="group">
            <div className="bg-gradient-to-br from-green-800 to-teal-800 rounded-2xl p-8 shadow-2xl hover:shadow-green-500/25 transition-all transform hover:-translate-y-2 hover:scale-105 border border-green-400/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-400 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🤖</span>
                </div>
                <div>
                  <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                    AUTONOMOUS SYSTEMS
                  </span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">
                Autonomous Business Processes
              </h3>
              
              <p className="text-green-100 mb-6 leading-relaxed">
                Transform your business with fully autonomous AI processes achieving 95% automation, 
                80% cost reduction, and 300% productivity gains.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">95%</div>
                  <div className="text-xs text-green-200">Automation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">80%</div>
                  <div className="text-xs text-green-200">Cost ↓</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">300%</div>
                  <div className="text-xs text-green-200">Productivity</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-green-200">22 min read</div>
                <div className="text-yellow-400 font-bold group-hover:text-yellow-300 transition-colors">
                  Read Full Article →
                </div>
              </div>
            </div>
          </Link>

          {/* Fortune 500 Success Story */}
          <Link href="/case-studies/fortune-500-quantum-ai-transformation-2027" className="group">
            <div className="bg-gradient-to-br from-blue-800 to-cyan-800 rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/25 transition-all transform hover:-translate-y-2 hover:scale-105 border border-blue-400/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🏆</span>
                </div>
                <div>
                  <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                    SUCCESS STORY
                  </span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">
                Fortune 500: $1B ROI
              </h3>
              
              <p className="text-blue-100 mb-6 leading-relaxed">
                How a Fortune 500 company achieved $1B ROI through quantum AI transformation with 
                95% cost reduction and 1000x performance gains.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">$1B</div>
                  <div className="text-xs text-blue-200">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">95%</div>
                  <div className="text-xs text-blue-200">Cost ↓</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">1000x</div>
                  <div className="text-xs text-blue-200">Performance</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-blue-200">18 min read</div>
                <div className="text-yellow-400 font-bold group-hover:text-yellow-300 transition-colors">
                  Read Case Study →
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-black">
            <h3 className="text-3xl font-bold mb-4">Don't Miss the AI Revolution</h3>
            <p className="text-xl mb-6">
              These breakthrough technologies are transforming Fortune 500 companies today. 
              Be among the first to implement them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-black text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-black text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-black hover:text-yellow-400 transition-colors"
              >
                Get Your AI Assessment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}