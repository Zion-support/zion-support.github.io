import React from 'react';
import { Link } from 'react-router-dom';

const October2025FeaturedContentBanner = () => {
  const featuredContent = [
    {
      title: "Enterprise AI Value Realization",
      description: "90 days to shipped outcomes: scorecards, evaluator gates, tiered routing",
      link: "/blog/enterprise-ai-value-realization-2025-10-08",
      icon: "Brain",
      gradient: "from-indigo-600 to-blue-600",
      bgGradient: "from-indigo-900/40 to-blue-900/40",
      borderColor: "border-indigo-500/30",
      stats: [
        { value: "90d", label: "To Outcomes" },
        { value: "KPI", label: "Linked Gates" },
        { value: "$$", label: "Predictable Cost" }
      ]
    },
    {
      title: "Enterprise Neural Orchestration Platform",
      description: "89% faster AI deployment, 94% cost reduction, $12.4M annual savings",
      link: "/blog/ai-2025-october-enterprise-neural-orchestration-platform",
      icon: "Brain",
      gradient: "from-blue-600 to-purple-600",
      bgGradient: "from-blue-900/40 to-purple-900/40",
      borderColor: "border-blue-500/30",
      stats: [
        { value: "89%", label: "Faster Deployment" },
        { value: "94%", label: "Cost Reduction" },
        { value: "$12.4M", label: "Annual Savings" }
      ]
    },
    {
      title: "Cognitive Supply Chain Revolution",
      description: "76% forecast accuracy, 68% inventory cost reduction, $18.7M value",
      link: "/blog/ai-2025-october-cognitive-supply-chain-revolution",
      icon: "Package",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-900/40 to-teal-900/40",
      borderColor: "border-emerald-500/30",
      stats: [
        { value: "76%", label: "Forecast Accuracy" },
        { value: "68%", label: "Cost Reduction" },
        { value: "$18.7M", label: "Annual Value" }
      ]
    },
    {
      title: "AI Reliability Blueprints 2027",
      description: "Evaluators, action budgets, instant rollback — ship safely",
      link: "/blog/ai-reliability-blueprints-2027-2025-10-02",
      icon: "TrendingUp",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-900/40 to-blue-900/40",
      borderColor: "border-cyan-500/30",
      stats: [
        { value: "KPI", label: "Linked Evals" },
        { value: "1‑click", label: "Rollback" },
        { value: "24/7", label: "Safe Ops" }
      ]
    },
    {
      title: "Edge Inference Playbook 2027",
      description: "Sub‑100ms globally with warm pools and tiered caches",
      link: "/blog/edge-inference-playbook-2027-2025-10-02",
      icon: "Sparkles",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900/40 to-pink-900/40",
      borderColor: "border-purple-500/30",
      stats: [
        { value: "<100ms", label: "P95 Latency" },
        { value: "SLA", label: "Aware Routing" },
        { value: "$", label: "Predictable Spend" }
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-bold mb-6 animate-pulse">

            🚀 NEW CONTENT RELEASE - October 1, 2025

          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest AI Solutions & Insights
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover breakthrough AI platforms delivering millions in value to enterprise organizations
          </p>
        </div>

        {/* Featured Content Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredContent.map((content, index) => {
            const Icon = content.icon;
            return (
              <Link
                key={index}
                to={content.link}
                className="group relative overflow-hidden rounded-2xl border hover:border-opacity-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ borderColor: content.borderColor }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${content.bgGradient} opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                <div className="relative p-8">
                  {/* Icon & Title */}
                  <div className="flex items-start mb-6">
                    <div className={`p-4 bg-gradient-to-r ${content.gradient} rounded-xl mr-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                        {content.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {content.description}
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {content.stats.map((stat, idx) => (
                      <div key={idx} className="text-center bg-slate-900/60 p-4 rounded-lg border border-white/10">
                        <div className={`text-2xl font-bold bg-gradient-to-r ${content.gradient} bg-clip-text text-transparent`}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Published October 1, 2025</span>
                    <div className={`flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform`}>
                      Read Full Article

                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${content.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <Link
              to="/blog"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 inline-flex items-center"
            >
              Explore All Articles

            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-all border border-blue-500/30 inline-flex items-center"
            >
              Get a Free Consultation

            </Link>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mt-12 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-xl p-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">$31.1M</div>
              <div className="text-gray-300 text-sm">Combined Annual Value</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">89%</div>
              <div className="text-gray-300 text-sm">Average Improvement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">8-12 Weeks</div>
              <div className="text-gray-300 text-sm">Implementation Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-gray-300 text-sm">Enterprise Ready</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025FeaturedContentBanner;
