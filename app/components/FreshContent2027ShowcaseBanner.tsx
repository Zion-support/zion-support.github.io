import ArrowRight from 'next/link';

export default function FreshContent2027ShowcaseBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-2xl p-8 mb-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="animate-pulse mr-2">✨</span>
            Fresh Content 2027
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Revolutionary AI Breakthroughs
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Discover the latest cutting-edge innovations that are reshaping the future of enterprise technology
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Neuromorphic Computing */}
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🧠</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-cyan-300">Neuromorphic Computing</h3>
                <p className="text-sm text-gray-400">January 2027</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Brain-inspired computing that delivers 100,000x faster processing with 99.7% energy reduction
            </p>
            <ArrowRight 
              href="/blog/ai-2027-neuromorphic-computing-revolution"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm group"
            >
              Read More
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </ArrowRight>
          </div>

          {/* Quantum-AI Hybrid */}
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">⚛️</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-purple-300">Quantum-AI Hybrid</h3>
                <p className="text-sm text-gray-400">February 2027</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              The convergence of quantum computing and AI solving previously intractable problems
            </p>
            <ArrowRight 
              href="/blog/quantum-ai-hybrid-systems-2027"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold text-sm group"
            >
              Read More
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </ArrowRight>
          </div>

          {/* Autonomous Operations */}
          <div className="bg-gradient-to-br from-emerald-600/20 to-green-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-emerald-300">Autonomous Operations</h3>
                <p className="text-sm text-gray-400">March 2027</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Self-managing organizations that operate with superhuman efficiency and continuous optimization
            </p>
            <ArrowRight 
              href="/blog/autonomous-enterprise-operations-2027"
              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-semibold text-sm group"
            >
              Read More
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </ArrowRight>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-wrap gap-4">
            <ArrowRight 
              href="/blog"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
            >
              Explore All Articles
            </ArrowRight>
            <ArrowRight 
              href="/contact"
              className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Get Expert Consultation
            </ArrowRight>
          </div>
        </div>
      </div>
    </div>
  );
}