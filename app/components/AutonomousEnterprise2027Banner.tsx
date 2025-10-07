import Link from 'next/link';

export default function AutonomousEnterprise2027Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 rounded-2xl p-8 md:p-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.3),transparent_50%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border border-emerald-500/30 rounded-full text-sm font-medium text-emerald-300 mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
              Future Enterprise Vision 2027
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              The Future of Business:
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"> Autonomous Enterprise</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Experience the next evolution of enterprise operations. Self-governing businesses that 
              make intelligent decisions, adapt to market changes, and optimize operations autonomously. 
              The future is here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/blog/ai-2027-autonomous-enterprise-transformation"
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 text-center"
              >
                Explore 2027 Vision
              </Link>
              <Link 
                href="/services/autonomous-enterprise"
                className="px-8 py-4 border border-emerald-500 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-500/10 transition-all duration-300 text-center"
              >
                Start Your Journey
              </Link>
            </div>
          </div>

          {/* Transformation Timeline */}
          <div className="flex-1">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Transformation Timeline</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Foundation Phase</h4>
                    <p className="text-xs text-gray-400">AI-driven operational systems</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Integration Phase</h4>
                    <p className="text-xs text-gray-400">Connected autonomous systems</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Autonomy Phase</h4>
                    <p className="text-xs text-gray-400">Full operational autonomy</p>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="mt-6 pt-6 border-t border-slate-700/50">
                <h4 className="text-sm font-semibold text-white mb-3">Key Benefits</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-xs text-gray-300">24/7 Optimization</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span className="text-xs text-gray-300">Predictive Adaptation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-xs text-gray-300">Cost Reduction</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-xs text-gray-300">Enhanced Accuracy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-xl"></div>
    </div>
  );
}