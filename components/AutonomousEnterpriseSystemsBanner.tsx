import { Link } from 'react-router-dom';

export default function AutonomousEnterpriseSystemsBanner() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-green-900 to-blue-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-8">
            <span className="text-green-400 font-bold text-sm tracking-wider uppercase animate-pulse">
              🚀 JUST PUBLISHED: JANUARY 2026
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            Revolutionary Autonomous Enterprise Systems
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The future of business operations is here: Self-managing systems achieving{' '}
            <span className="text-green-400 font-bold">99.7% operational efficiency</span> and{' '}
            <span className="text-blue-400 font-bold">$2.3B in proven value creation</span>
          </p>

          {/* Key Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-green-400 mb-2">99.7%</div>
              <div className="text-gray-300 text-sm">Operational Efficiency</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-blue-400 mb-2">$2.3B</div>
              <div className="text-gray-300 text-sm">Value Creation</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm">Process Automation</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link to="/blog/ai-2026-january-revolutionary-autonomous-enterprise-systems"
              className="group bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center gap-2">
                Read Complete Guide
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link to="/case-studies/autonomous-enterprise-2-billion-success"
              className="group border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-lg"
            >
              <span className="flex items-center gap-2">
                View $2.3B Success Story
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Features Preview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300">
              <div className="text-2xl mb-3">🤖</div>
              <h3 className="font-bold text-white mb-2">Self-Managing Operations</h3>
              <p className="text-gray-400 text-sm">Autonomous systems handling complex business processes with minimal human intervention</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
              <div className="text-2xl mb-3">📊</div>
              <h3 className="font-bold text-white mb-2">Predictive Intelligence</h3>
              <p className="text-gray-400 text-sm">Advanced analytics predicting market trends and operational needs with 98.3% accuracy</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
              <div className="text-2xl mb-3">🔄</div>
              <h3 className="font-bold text-white mb-2">Dynamic Resource Allocation</h3>
              <p className="text-gray-400 text-sm">Intelligent systems optimizing resources based on real-time demand and market conditions</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
              <div className="text-2xl mb-3">🛡️</div>
              <h3 className="font-bold text-white mb-2">Autonomous Security</h3>
              <p className="text-gray-400 text-sm">Self-managing security systems ensuring compliance and threat protection 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}