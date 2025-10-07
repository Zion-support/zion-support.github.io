import { Link } from "react-router-dom";

const October2025AIOperationsBanner = () => {
  const newArticles = [
    {",
      title: "AI-Powered DevSecOps Automation",
      description: "Achieve 99.2% vulnerability detection with 87% auto-remediation and 847% deployment acceleration",",
      link: "/blog/ai-2025-oct-01-devsecops-automation-revolution",
      icon: Shield,",
      stats: "99.2% Detection | 7,747% ROI",
      color: "from-blue-500 to-cyan-500"
    },
    {",
      title: "Autonomous Cloud Cost Optimization",
      description: "Save $127M+ annually with 67% cost reduction and 99.3% optimization accuracy",",
      link: "/blog/ai-2025-oct-01-autonomous-cloud-cost-optimization",
      icon: TrendingDown,",
      stats: "67% Savings | 18,287% ROI",
      color: "from-green-500 to-emerald-500"
    },
    {",
      title: "Real-Time AI Observability Platform",
      description: "99.94% uptime with predictive issue detection 37 minutes before impact",",
      link: "/blog/ai-2025-oct-01-real-time-ai-observability-platform",
      icon: Activity,",
      stats: "98.7% Prevention | 17,488% ROI",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30 mb-4">
            <Activity className="w-4 h-4 text-blue-400 animate-pulse" <span className="text-blue-300 text-sm font-semibold">
              OCTOBER 2025 - BREAKTHROUGH AI OPERATIONS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transform Your Enterprise Operations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Three revolutionary platforms delivering unprecedented ROI, security, and operational excellence
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {newArticles.map((article, index) => {
            const Icon = article.icon;
            return (
              <Link
                key={index}
                to={article.link}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${article.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${article.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white"</div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {article.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                      {article.stats}
                    </span>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span className="text-sm font-semibold mr-2">Read Full Guide</span>

                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 group"
            >
              <span>Explore All AI Insights</span>

            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <span>Schedule Expert Consultation</span>
            </Link>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-1">99.2%</div>
            <div className="text-sm text-gray-400">Security Detection</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">67%</div>
            <div className="text-sm text-gray-400">Cost Reduction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">99.94%</div>
            <div className="text-sm text-gray-400">System Uptime</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">$127M+</div>
            <div className="text-sm text-gray-400">Annual Savings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025AIOperationsBanner;
