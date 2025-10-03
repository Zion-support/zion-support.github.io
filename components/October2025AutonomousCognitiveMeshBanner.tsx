import { Link } from 'react-router-dom';

export default function October2025AutonomousCognitiveMeshBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 border-t-4 border-purple-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400 mb-6">
            <span className="text-purple-300 text-sm font-bold animate-pulse">
              🚀 JUST PUBLISHED: OCTOBER 1, 2025
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Autonomous Cognitive Mesh
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent mb-6">
            Self-Organizing Distributed AI Intelligence
          </h3>

          {/* Value Props */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-400/30">
              <div className="text-4xl font-bold text-purple-300 mb-2">$18.7B</div>
              <div className="text-white text-sm">Proven Value Creation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-400/30">
              <div className="text-4xl font-bold text-blue-300 mb-2">15,000+</div>
              <div className="text-white text-sm">Autonomous Nodes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-400/30">
              <div className="text-4xl font-bold text-pink-300 mb-2">99.97%</div>
              <div className="text-white text-sm">System Reliability</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-400/30">
              <div className="text-4xl font-bold text-indigo-300 mb-2">3,847%</div>
              <div className="text-white text-sm">ROI in 24 Months</div>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Revolutionary self-organizing AI infrastructure that automatically discovers, coordinates, 
            and optimizes without manual intervention. Deploy 100,000+ nodes globally with unprecedented 
            reliability and efficiency.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 my-12 text-left">
            <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg p-6 border border-purple-400/30">
              <div className="text-2xl mb-3">🧠</div>
              <h4 className="text-lg font-bold text-white mb-2">Self-Organizing</h4>
              <p className="text-gray-300 text-sm">
                Zero-configuration deployment with automatic node discovery and coordination
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg p-6 border border-blue-400/30">
              <div className="text-2xl mb-3">⚡</div>
              <h4 className="text-lg font-bold text-white mb-2">Federated Learning</h4>
              <p className="text-gray-300 text-sm">
                Collaborative intelligence across 15,000+ nodes with privacy preservation
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg p-6 border border-indigo-400/30">
              <div className="text-2xl mb-3">🛡️</div>
              <h4 className="text-lg font-bold text-white mb-2">Self-Healing</h4>
              <p className="text-gray-300 text-sm">
                Autonomous fault detection and recovery with 99.99% uptime guarantee
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/blog/ai-2025-oct-autonomous-cognitive-mesh-breakthrough"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all shadow-lg"
            >
              📚 Read Complete Guide
            </Link>
            <Link
              to="/case-studies/ai-2025-oct-global-tech-autonomous-cognitive-mesh-18-7-billion-success"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/20 border-2 border-purple-400 transform hover:scale-105 transition-all"
            >
              💎 $18.7B Success Story
            </Link>
            <Link
              to="/services/autonomous-cognitive-mesh-platform-services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all shadow-lg"
            >
              🚀 Deploy Now
            </Link>
          </div>

          {/* Trust Signal */}
          <div className="mt-12 pt-8 border-t border-purple-400/30">
            <p className="text-purple-200 text-sm mb-4">
              ⭐ Trusted by Fortune 500 enterprises | 50,000+ nodes deployed globally
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-xs">
              <span>✓ SOC 2 Certified</span>
              <span>✓ ISO 27001 Compliant</span>
              <span>✓ GDPR Ready</span>
              <span>✓ 24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
