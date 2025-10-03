export default function October2025FreshContentLaunchBanner() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-950 via-purple-950 to-blue-950 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full shadow-2xl animate-bounce">
            <span className="text-xl font-bold text-white">⚡ FRESH CONTENT ALERT ⚡</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-4">
            October 2025 Content Drop
          </h2>
          <p className="text-2xl md:text-3xl text-cyan-300 font-semibold mb-2">
            3 Revolutionary Guides | 2 Billion-Dollar Success Stories
          </p>
          <p className="text-lg md:text-xl text-blue-300">
            Published Today | Validated Results | Enterprise-Ready Solutions
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-lg p-6 rounded-xl border-2 border-cyan-400 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-cyan-300">$3.7B+</div>
            <div className="text-sm text-blue-200">Combined Value</div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg p-6 rounded-xl border-2 border-purple-400 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-purple-300">99.97%</div>
            <div className="text-sm text-purple-200">Success Rate</div>
          </div>
          <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 backdrop-blur-lg p-6 rounded-xl border-2 border-blue-400 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-blue-300">847%</div>
            <div className="text-sm text-blue-200">Average ROI</div>
          </div>
          <div className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 backdrop-blur-lg p-6 rounded-xl border-2 border-pink-400 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-pink-300">5</div>
            <div className="text-sm text-pink-200">New Resources</div>
          </div>
        </div>

        {/* Content Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-purple-900/70 to-blue-900/70 backdrop-blur-lg p-6 rounded-xl border-2 border-cyan-400 hover:border-cyan-300 transition-all duration-300 group">
            <div className="text-3xl mb-3">🐝</div>
            <h3 className="text-lg font-bold text-cyan-300 mb-2 group-hover:text-cyan-200">
              AI Swarm Intelligence
            </h3>
            <p className="text-sm text-blue-200 mb-4">
              $890M savings, 10,000+ agents, 847% ROI
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">Guide</span>
              <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">Case Study</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-blue-900/70 to-cyan-900/70 backdrop-blur-lg p-6 rounded-xl border-2 border-purple-400 hover:border-purple-300 transition-all duration-300 group">
            <div className="text-3xl mb-3">🔐</div>
            <h3 className="text-lg font-bold text-purple-300 mb-2 group-hover:text-purple-200">
              Quantum Blockchain Security
            </h3>
            <p className="text-sm text-blue-200 mb-4">
              $2.8B secured, zero breaches, 1,847% ROI
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">Guide</span>
              <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">Case Study</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-cyan-900/70 to-purple-900/70 backdrop-blur-lg p-6 rounded-xl border-2 border-blue-400 hover:border-blue-300 transition-all duration-300 group">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-lg font-bold text-blue-300 mb-2 group-hover:text-blue-200">
              Autonomous Testing
            </h3>
            <p className="text-sm text-blue-200 mb-4">
              $83M gains, 94% faster, 840% ROI
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">Guide</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="/blog" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold text-lg rounded-lg shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
            Explore All New Content →
          </a>
        </div>
      </div>
    </div>
  );
}
