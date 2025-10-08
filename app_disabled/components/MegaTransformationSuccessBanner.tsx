// import Link from 'next/link';

export default function MegaTransformationSuccessBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🏆 Mega Transformation Success Stories
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            Real-world AI transformation results from Fortune 500 companies,
            delivering unprecedented ROI and operational excellence.
          </p>
        </div>

        {/* Featured Success Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Fortune 500 Success */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-xl font-bold">Fortune 500 Transformation</h3>
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex items-center">
                <DollarSign className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-400 font-semibold">$200M+ ROI</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-400 font-semibold">
                  800% Productivity Gain
                </span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-400 font-semibold">
                  15-month Payback
                </span>
              </div>
            </div>
            <Link
              href="/case-studies/fortune-500-autonomous-operations-transformation-2026"
              className="text-blue-300 hover:text-blue-200 transition-colors font-semibold flex items-center"
            >
              Read Full Case Study <ArrowRight className="w-4 h-4 ml-1" />
              1d68394de6252bd8b85f69f386dad01902598b0b
            </Link>
            <div className="text-xs text-yellow-300 mt-2 font-semibold">
              🌟 PREMIUM SUCCESS
            </div>
          </div>

          {/* Manufacturing Transformation */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <Star className="w-8 h-8 text-orange-400 mr-3" />
              <h3 className="text-xl font-bold">Manufacturing Excellence</h3>
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex items-center">
                <DollarSign className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-400 font-semibold">
                  $150M+ Savings
                </span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-400 font-semibold">
                  600% Efficiency Boost
                </span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-400 font-semibold">
                  99.8% Uptime
                </span>
              </div>
            </div>
            <Link
              href="/case-studies/ai-manufacturing-transformation-mega-success-2026"
              className="text-blue-300 hover:text-blue-200 transition-colors font-semibold flex items-center"
            >
              Read Full Case Study <ArrowRight className="w-4 h-4 ml-1" />
              1d68394de6252bd8b85f69f386dad01902598b0b
            </Link>
            <div className="text-xs text-orange-300 mt-2 font-semibold">
              ⚡ MEGA SUCCESS
            </div>
          </div>

          {/* Healthcare Innovation */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-red-400 mr-3" />
              <h3 className="text-xl font-bold">Healthcare AI Revolution</h3>
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex items-center">
                <DollarSign className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-400 font-semibold">
                  $75M+ Value
                </span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-400 font-semibold">
                  95% Accuracy
                </span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-400 font-semibold">
                  50% Faster Diagnosis
                </span>
              </div>
            </div>
            <Link
              href="/case-studies/healthcare-ai-diagnostic-system-2025"
              className="text-blue-300 hover:text-blue-200 transition-colors font-semibold flex items-center"
            >
              Read Full Case Study <ArrowRight className="w-4 h-4 ml-1" />
              1d68394de6252bd8b85f69f386dad01902598b0b
            </Link>
            <div className="text-xs text-red-300 mt-2 font-semibold">
              💎 INNOVATION
            </div>
          </div>

          {/* Finance Automation */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <Star className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-xl font-bold">Finance Automation</h3>
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex items-center">
                <DollarSign className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-400 font-semibold">$120M+ ROI</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-400 font-semibold">
                  700% Process Speed
                </span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-400 font-semibold">
                  99.9% Accuracy
                </span>
              </div>
            </div>
            <Link
              href="/case-studies/ai-finance-automation-success-story"
              className="text-blue-300 hover:text-blue-200 transition-colors font-semibold flex items-center"
            >
              Read Full Case Study <ArrowRight className="w-4 h-4 ml-1" />
              1d68394de6252bd8b85f69f386dad01902598b0b
            </Link>
            <div className="text-xs text-green-300 mt-2 font-semibold">
              🚀 AUTOMATION
            </div>
          </div>

          {/* Supply Chain Optimization */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-bold">Supply Chain Excellence</h3>
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex items-center">
                <DollarSign className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-400 font-semibold">
                  $180M+ Savings
                </span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-400 font-semibold">
                  500% Optimization
                </span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-400 font-semibold">
                  99.7% On-time Delivery
                </span>
              </div>
            </div>
            <Link
              href="/case-studies/ai-supply-chain-optimization-mega-success-2025"
              className="text-blue-300 hover:text-blue-200 transition-colors font-semibold flex items-center"
            >
              Read Full Case Study <ArrowRight className="w-4 h-4 ml-1" />
              1d68394de6252bd8b85f69f386dad01902598b0b
            </Link>
            <div className="text-xs text-blue-300 mt-2 font-semibold">
              ⚡ OPTIMIZATION
            </div>
          </div>

          {/* Global Logistics */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <Star className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-xl font-bold">Global Logistics AI</h3>
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex items-center">
                <DollarSign className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-400 font-semibold">
                  $250M+ Value
                </span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-400 font-semibold">
                  900% Efficiency
                </span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-400 font-semibold">
                  Global Scale
                </span>
              </div>
            </div>
            <Link
              href="/case-studies/global-logistics-ai-transformation-2026"
              className="text-blue-300 hover:text-blue-200 transition-colors font-semibold flex items-center"
            >
              Read Full Case Study <ArrowRight className="w-4 h-4 ml-1" />
              1d68394de6252bd8b85f69f386dad01902598b0b
            </Link>
            <div className="text-xs text-purple-300 mt-2 font-semibold">
              🌍 GLOBAL
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            Cumulative Success Metrics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">
                $1.2B+
              </div>
              <div className="text-sm text-gray-300">Total Value Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Average Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">
                800%
              </div>
              <div className="text-sm text-gray-300">Max Productivity Gain</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                18mo
              </div>
              <div className="text-sm text-gray-300">
                Average Payback Period
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link
              href="/case-studies"
              className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center"
            >
              View All Case Studies <ArrowRight className="w-5 h-5 ml-2" />
              1d68394de6252bd8b85f69f386dad01902598b0b
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-900 transition-colors flex items-center"
            >
              Start Your Transformation <Star className="w-5 h-5 ml-2" />
            </Link>
          </div>
          <p className="text-sm opacity-75">
            Join the ranks of industry leaders who have achieved extraordinary
            results with AI
          </p>
        </div>
      </div>
    </section>
  );
}
