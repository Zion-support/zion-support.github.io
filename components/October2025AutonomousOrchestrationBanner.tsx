export default function October2025AutonomousOrchestrationBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 py-16 sm:py-24">
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 animate-pulse"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center rounded-full bg-emerald-500/10 px-6 py-2 ring-2 ring-emerald-500/50 animate-pulse">
              <span className="text-sm font-semibold text-emerald-300">
                🤖 JUST PUBLISHED: OCTOBER 2025 - AUTONOMOUS ORCHESTRATION FRAMEWORK REVOLUTION
              </span>
            </div>
          </div>

          {/* Main content */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
              <span className="block mb-4">Autonomous</span>
              <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Orchestration Framework
              </span>
            </h1>
            
            <p className="mt-6 text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
              Revolutionary multi-agent coordination enabling 10,000+ AI agents to work in perfect harmony 
              across 500 global facilities with unprecedented reliability and efficiency
            </p>

            {/* Stats grid */}
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-8">
              <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm ring-1 ring-white/10">
                <div className="text-3xl font-bold text-emerald-400">$12.7B</div>
                <div className="mt-2 text-sm text-gray-400">Value Created</div>
              </div>
              <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm ring-1 ring-white/10">
                <div className="text-3xl font-bold text-teal-400">10,000+</div>
                <div className="mt-2 text-sm text-gray-400">AI Agents</div>
              </div>
              <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm ring-1 ring-white/10">
                <div className="text-3xl font-bold text-cyan-400">99.94%</div>
                <div className="mt-2 text-sm text-gray-400">Reliability</div>
              </div>
              <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm ring-1 ring-white/10">
                <div className="text-3xl font-bold text-emerald-300">2,847%</div>
                <div className="mt-2 text-sm text-gray-400">ROI</div>
              </div>
            </div>

            {/* Features */}
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm ring-1 ring-white/10">
                <div className="text-2xl mb-3">🎯</div>
                <h3 className="text-lg font-semibold text-white mb-2">Multi-Agent Coordination</h3>
                <p className="text-sm text-gray-400">
                  Intelligent task distribution, load balancing, and conflict resolution across thousands of agents
                </p>
              </div>
              <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm ring-1 ring-white/10">
                <div className="text-2xl mb-3">⚡</div>
                <h3 className="text-lg font-semibold text-white mb-2">Autonomous Decision Making</h3>
                <p className="text-sm text-gray-400">
                  Context-aware planning, predictive optimization, and automated failure recovery
                </p>
              </div>
              <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm ring-1 ring-white/10">
                <div className="text-2xl mb-3">🔗</div>
                <h3 className="text-lg font-semibold text-white mb-2">Enterprise Integration</h3>
                <p className="text-sm text-gray-400">
                  Universal API connectivity, legacy system support, real-time synchronization
                </p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="rounded-full bg-emerald-500 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-emerald-400 transition-all duration-200 transform hover:scale-105"
              >
                Download Complete Guide
              </a>
              <a
                href="#"
                className="rounded-full bg-white/10 px-8 py-3 text-base font-semibold text-white ring-1 ring-white/20 hover:bg-white/20 transition-all duration-200"
              >
                View Success Story
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-12 flex items-center justify-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏢</span>
                <span className="text-sm">450+ Global Enterprises</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌍</span>
                <span className="text-sm">500 Facilities</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span className="text-sm">92% Efficiency Gains</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
