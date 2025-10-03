import { Link } from 'react-router-dom';

export default function AI2027AutonomousOperationsAdvertisingBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold mb-4 animate-pulse">
            🤖 AI 2027 AUTONOMOUS OPERATIONS
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
            99.9% Autonomous Enterprise Operations
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-4xl mx-auto">
            Fortune 500 companies achieve <span className="text-yellow-300 font-bold">$200 billion in operational savings</span> with AI 2027 Autonomous Operations. Revolutionary automation delivering unprecedented efficiency and reliability.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-300 mb-2">99.9%</div>
              <div className="text-sm text-green-200">Autonomous Operations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-300 mb-2">$200B</div>
              <div className="text-sm text-green-200">Operational Savings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-300 mb-2">1000x</div>
              <div className="text-sm text-green-200">Decision Speed</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/blog/ai-2027-autonomous-enterprise-operations-revolution"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Read Autonomous Operations Guide
            </Link>
            <Link to="/case-studies"
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-white/30"
            >
              View Success Stories
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-green-200">
            <span className="inline-flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Join 200+ Fortune 500 companies with 99.9% autonomous operations
            </span>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
    </div>
  );
}