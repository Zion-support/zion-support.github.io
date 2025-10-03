export default function September2025DeploymentMasteryBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-indigo-900/50 via-purple-900/50 to-pink-900/50 border-b border-indigo-500/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Content */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-4">
                <span className="text-indigo-400 font-bold text-sm tracking-wider uppercase">
                  ⚡ JUST RELEASED - SEPTEMBER 30, 2025
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Enterprise AI Deployment Mastery: Your Complete 2025 Guide
              </h2>
              
              <p className="text-lg text-gray-300 mb-6">
                Discover the proven strategies that leading enterprises use to achieve 
                <span className="text-indigo-400 font-bold"> 10x deployment velocity</span>, 
                <span className="text-purple-400 font-bold"> 95% success rates</span>, and 
                <span className="text-pink-400 font-bold"> $18M average annual value</span>.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-indigo-500/10 rounded-lg p-3 border border-indigo-500/20">
                  <div className="text-2xl font-bold text-indigo-400">95%</div>
                  <div className="text-xs text-indigo-300">Success Rate</div>
                </div>
                <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/20">
                  <div className="text-2xl font-bold text-purple-400">10x</div>
                  <div className="text-xs text-purple-300">Faster Deployment</div>
                </div>
                <div className="bg-pink-500/10 rounded-lg p-3 border border-pink-500/20">
                  <div className="text-2xl font-bold text-pink-400">60%</div>
                  <div className="text-xs text-pink-300">Cost Reduction</div>
                </div>
                <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/20">
                  <div className="text-2xl font-bold text-purple-400">99.9%</div>
                  <div className="text-xs text-purple-300">Uptime SLA</div>
                </div>
              </div>

              <a 
                href="/blog/ai-2025-september-30-enterprise-deployment-mastery"
                className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
              >
                Read Complete Guide →
              </a>
            </div>

            {/* Right Highlights */}
            <div className="flex-1">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">What You'll Learn:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-400 font-bold text-lg">⚙️</span>
                    <span><strong className="text-white">Automated Infrastructure:</strong> Kubernetes-native AI platforms with auto-scaling and 99.9% reliability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold text-lg">🔄</span>
                    <span><strong className="text-white">MLOps Excellence:</strong> End-to-end automation from training to production with A/B testing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-400 font-bold text-lg">🔒</span>
                    <span><strong className="text-white">Security & Compliance:</strong> Zero-trust architecture with automated compliance for regulated industries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-400 font-bold text-lg">📊</span>
                    <span><strong className="text-white">Real Success Metrics:</strong> Proven implementation roadmap with actual enterprise results</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
