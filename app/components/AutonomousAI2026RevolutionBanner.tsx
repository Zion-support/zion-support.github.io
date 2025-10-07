import Link from 'next/link';

export default function AutonomousAI2026RevolutionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 px-4 rounded-xl mb-8 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 transform rotate-12 scale-150"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full opacity-5"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full opacity-5"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center gap-3 mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              🚀 REVOLUTIONARY BREAKTHROUGH
            </span>
            <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              NEW 2026
            </span>
            <span className="bg-gradient-to-r from-red-400 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              FEATURED
            </span>
          </div>
          
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Next-Generation Autonomous AI Systems
          </h2>
          
          <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
            Revolutionary AI systems that operate independently, make complex decisions, and continuously 
            optimize your enterprise operations without human intervention. Experience unprecedented efficiency gains.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
            <div className="text-sm opacity-90">Efficiency Improvement</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">$2.3M</div>
            <div className="text-sm opacity-90">Average Annual Savings</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-sm opacity-90">Autonomous Operation</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">89%</div>
            <div className="text-sm opacity-90">Downtime Reduction</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white bg-opacity-5 backdrop-blur-sm p-6 rounded-lg">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-lg font-semibold mb-2">Meta-Cognitive Reasoning</h3>
            <p className="text-sm opacity-80">
              AI systems that think about their own thinking processes for unprecedented decision-making.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-5 backdrop-blur-sm p-6 rounded-lg">
            <div className="text-3xl mb-3">⚛️</div>
            <h3 className="text-lg font-semibold mb-2">Quantum Processing</h3>
            <p className="text-sm opacity-80">
              Quantum-enhanced algorithms for complex optimization problems solved in real-time.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-5 backdrop-blur-sm p-6 rounded-lg">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="text-lg font-semibold mb-2">Autonomous Security</h3>
            <p className="text-sm opacity-80">
              Self-protecting systems that detect and neutralize threats without human intervention.
            </p>
          </div>
        </div>

        {/* Success Story Highlight */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-4xl">🏭</div>
            <div>
              <h3 className="text-xl font-semibold">Fortune 500 Manufacturing Success</h3>
              <p className="text-sm opacity-80">Production line optimization with autonomous AI</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">+127%</div>
              <div className="text-xs opacity-80">Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">$8.2M</div>
              <div className="text-xs opacity-80">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">+94%</div>
              <div className="text-xs opacity-80">Quality</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">-89%</div>
              <div className="text-xs opacity-80">Downtime</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/services/ai-autonomous-operations-2026" 
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
          >
            🚀 Explore Autonomous AI Services
          </Link>
          <Link 
            href="/blog/ai-2026-next-generation-autonomous-systems" 
            className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-30 transition-all duration-300 border border-white border-opacity-30"
          >
            📖 Read Technical Details
          </Link>
          <Link 
            href="/case-studies" 
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            💰 View Success Stories
          </Link>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-8">
          <p className="text-sm opacity-80">
            Join leading enterprises already transforming operations with next-generation autonomous AI systems
          </p>
        </div>
      </div>
    </div>
  );
}