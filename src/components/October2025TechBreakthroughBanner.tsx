import { Link } from 'react-router-dom';

const October2025TechBreakthroughBanner = () => {
  return (
    <div className="relative bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle at 50% 50%,rgba(120,219,255,0.3),transparent 50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle at 80% 20%,rgba(79,209,197,0.3),transparent 50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle at 20% 80%,rgba(99,102,241,0.3),transparent 50%)]"></div>
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse 80% 50% at 50% 50%,#000,transparent)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breaking News Badge */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-sm animate-pulse shadow-lg shadow-cyan-500/50">

            <span>BREAKTHROUGH OCTOBER 1, 2025</span>

          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            🚀 <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              3 Revolutionary Enterprise Technologies
            </span> 🚀
          </h2>
          <p className="text-xl md:text-2xl text-cyan-100 font-medium">
            ⚡ Quantum-Safe Cryptography • Autonomous Risk Management • AI-Powered Digital Twins
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105">
            <div className="text-cyan-300 text-4xl font-bold mb-2">99.97%</div>
            <div className="text-white text-sm font-medium">Quantum Attack Protection</div>
            <div className="text-cyan-200 text-xs mt-1">Future-Proof Security</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105">
            <div className="text-blue-300 text-4xl font-bold mb-2">98.9%</div>
            <div className="text-white text-sm font-medium">Risk Prediction Accuracy</div>
            <div className="text-blue-200 text-xs mt-1">90+ Days Early Warning</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-indigo-400/30 hover:border-indigo-400/60 transition-all duration-300 hover:scale-105">
            <div className="text-indigo-300 text-4xl font-bold mb-2">99.4%</div>
            <div className="text-white text-sm font-medium">Digital Twin Accuracy</div>
            <div className="text-indigo-200 text-xs mt-1">Real-World Fidelity</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105">
            <div className="text-purple-300 text-4xl font-bold mb-2">$151B</div>
            <div className="text-white text-sm font-medium">Combined Annual Value</div>
            <div className="text-purple-200 text-xs mt-1">Fortune 500 Average</div>
          </div>
        </div>

        {/* Featured Content Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Quantum-Safe Cryptography */}
          <div className="group bg-gradient-to-br from-cyan-900/80 to-cyan-950/80 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-cyan-500/20 group-hover:bg-cyan-500/30 transition-colors">
                <Lock className="w-8 h-8 text-cyan-300" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-cyan-300 uppercase tracking-wide mb-1">Quantum Security</div>
                <div className="text-sm text-cyan-100 font-medium">NIST-Approved • Production-Ready</div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
              Quantum-Safe Cryptography Revolution
            </h3>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-cyan-100 text-sm">

                <span>99.97% Quantum Attack Protection</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-100 text-sm">

                <span>67% Cost Reduction vs Legacy</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-100 text-sm">

                <span>$78.3B Digital Assets Protected</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-100 text-sm">

                <span>845x ROI • 10-Year Future-Proofing</span>
              </div>
            </div>
            <Link 
              to="/blog/ai-2025-oct-01-quantum-safe-cryptography-enterprise-systems"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 group-hover:scale-105"
            >
              Read Full Analysis

            </Link>
          </div>

          {/* Autonomous Risk Management */}
          <div className="group bg-gradient-to-br from-blue-900/80 to-blue-950/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">

              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-blue-300 uppercase tracking-wide mb-1">Risk Intelligence</div>
                <div className="text-sm text-blue-100 font-medium">AI-Powered • Autonomous</div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
              Autonomous Risk Management Platform
            </h3>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-blue-100 text-sm">

                <span>98.9% Risk Prediction Accuracy</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100 text-sm">

                <span>84% Cost Reduction in Operations</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100 text-sm">

                <span>$127B Losses Prevented Annually</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100 text-sm">

                <span>2,836% ROI • 24/7 Monitoring</span>
              </div>
            </div>
            <Link 
              to="/blog/ai-2025-oct-01-autonomous-risk-management-platform-revolution"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/50 group-hover:scale-105"
            >
              Explore Platform

            </Link>
          </div>

          {/* AI-Powered Digital Twins */}
          <div className="group bg-gradient-to-br from-indigo-900/80 to-indigo-950/80 backdrop-blur-sm rounded-2xl p-6 border border-indigo-400/30 hover:border-indigo-400 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/30 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-indigo-500/20 group-hover:bg-indigo-500/30 transition-colors">

              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-indigo-300 uppercase tracking-wide mb-1">Digital Intelligence</div>
                <div className="text-sm text-indigo-100 font-medium">Real-Time • Self-Learning</div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
              Next-Gen AI-Powered Digital Twins
            </h3>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-indigo-100 text-sm">

                <span>99.4% Physical-Digital Accuracy</span>
              </div>
              <div className="flex items-center gap-2 text-indigo-100 text-sm">

                <span>87% Downtime Reduction</span>
              </div>
              <div className="flex items-center gap-2 text-indigo-100 text-sm">

                <span>$23.7B Annual Value Creation</span>
              </div>
              <div className="flex items-center gap-2 text-indigo-100 text-sm">

                <span>5,575% ROI • 94% Failure Prediction</span>
              </div>
            </div>
            <Link 
              to="/blog/ai-2025-oct-01-next-gen-digital-twins-enterprise-transformation"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 group-hover:scale-105"
            >
              Discover Technology

            </Link>
          </div>
        </div>

        {/* Why These Technologies Matter */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🎯 Why These Technologies Are Game-Changers
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-cyan-300 text-3xl font-bold mb-2">3-5 Years</div>
              <div className="text-white text-sm font-medium">Quantum Threat Window</div>
              <div className="text-cyan-200 text-xs mt-1">Deploy quantum-safe security NOW before it's too late</div>
            </div>
            <div className="text-center">
              <div className="text-blue-300 text-3xl font-bold mb-2">90+ Days</div>
              <div className="text-white text-sm font-medium">Risk Prediction Lead Time</div>
              <div className="text-blue-200 text-xs mt-1">Prevent crises before they happen with AI foresight</div>
            </div>
            <div className="text-center">
              
              <div className="text-white text-sm font-medium">Digital Twin Sync Speed</div>
              <div className="text-indigo-200 text-xs mt-1">Real-time operational intelligence at your fingertips</div>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🌐 Proven Results Across Industries
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-2xl mb-2">🏭</div>
              
              <div className="text-cyan-200 text-xs mt-1">127x ROI Average</div>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-2xl mb-2">🏦</div>
              <div className="text-white text-sm font-semibold">Financial Services</div>
              <div className="text-blue-200 text-xs mt-1">845x ROI Average</div>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-indigo-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-2xl mb-2">🏥</div>
              
              <div className="text-indigo-200 text-xs mt-1">47x ROI Average</div>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-white text-sm font-semibold">Energy & Utilities</div>
              <div className="text-purple-200 text-xs mt-1">89x ROI Average</div>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-pink-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-2xl mb-2">🏙️</div>
              <div className="text-white text-sm font-semibold">Smart Cities</div>
              <div className="text-pink-200 text-xs mt-1">34x ROI Average</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 hover:from-cyan-400 hover:via-blue-400 hover:to-indigo-400 text-white font-bold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 text-lg"
            >

              Read All 3 Breakthrough Articles

            </Link>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl transition-all duration-300 border-2 border-white/30 hover:border-white/60 hover:scale-105 text-lg"
            >
              Get Free Assessment

            </Link>
          </div>
          <p className="text-cyan-200 text-sm mt-4">
            ⚡ <strong>Limited Time</strong>: Free technology assessment for qualified enterprises • No obligation
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-10 pt-8 border-t border-white/20 text-center">
          <div className="text-cyan-200 text-sm mb-3">
            <strong>Trusted by Fortune 500 Leaders</strong> • 89+ Enterprise Deployments • $251B+ Value Created
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-xs">
            <span>✅ NIST-Certified</span>
            <span>•</span>
            <span>✅ ISO 27001</span>
            <span>•</span>
            <span>✅ SOC 2 Type II</span>
            <span>•</span>
            <span>✅ GDPR Compliant</span>
            <span>•</span>
            <span>✅ 99.99% Uptime SLA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025TechBreakthroughBanner;
