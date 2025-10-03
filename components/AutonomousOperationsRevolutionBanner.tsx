export default function AutonomousOperationsRevolutionBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-900/50 via-blue-900/50 to-indigo-900/50 border-b border-green-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Main Banner */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-8">
            <span className="text-green-400 font-bold text-lg tracking-wider uppercase">
              🤖 Revolutionary Autonomous Operations Now Live!
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI 2026 Autonomous Operations Revolution
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the future of enterprise operations with 98% automation rates, 
            self-healing AI systems, and autonomous decision-making capabilities.
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-6xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-white mb-3">Predictive Maintenance</h3>
              <p className="text-gray-300 mb-4">
                AI-powered systems that predict equipment failures and schedule maintenance 
                automatically, reducing downtime by 85%.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300 text-sm">85% Less Downtime</span>
                <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 text-sm">60% Cost Savings</span>
              </div>
              <a 
                href="/blog/ai-2026-autonomous-operations-revolution" 
                className="inline-block bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500 text-white font-bold py-2 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50"
              >
                Learn More →
              </a>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Autonomous Scaling</h3>
              <p className="text-gray-300 mb-4">
                Intelligent resource management that automatically scales infrastructure 
                based on real-time demand patterns.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 text-sm">40% Cost Reduction</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-sm">99.9% Uptime</span>
              </div>
              <a 
                href="/blog/ai-2026-autonomous-operations-revolution" 
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-2 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
              >
                Explore Now →
              </a>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-6xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-3">Security Automation</h3>
              <p className="text-gray-300 mb-4">
                Advanced threat detection and response systems that automatically 
                identify and neutralize security threats.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-sm">95% Faster Response</span>
                <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300 text-sm">90% Fewer Incidents</span>
              </div>
              <a 
                href="/blog/ai-2026-autonomous-operations-revolution" 
                className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-2 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                Discover →
              </a>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-green-400">Proven Autonomous Operations Results</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-green-400 mb-2">98%</div>
                <div className="text-gray-300 text-sm">Automation Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-blue-400 mb-2">$30M+</div>
                <div className="text-gray-300 text-sm">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-purple-400 mb-2">400%</div>
                <div className="text-gray-300 text-sm">ROI Achieved</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-indigo-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">System Uptime</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
            >
              Get Automation Assessment
            </a>
            <a 
              href="/blog/ai-2026-autonomous-operations-revolution" 
              className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Read Full Guide
            </a>
            <a 
              href="/case-studies" 
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              View Success Stories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}