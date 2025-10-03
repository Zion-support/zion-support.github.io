import { Link } from 'react-router-dom';

export default function October2025CuttingEdgeContentBanner2() {
  const newContent = [
    {
      title: "Agentic AI Orchestration Revolution 2025",
      description: "1,000+ coordinated autonomous agents achieving 96% success rates and $215M annual savings",
      link: "/blog/ai-2025-october-agentic-ai-orchestration-revolution",
      metrics: ["1,000+ Agents", "96% Success Rate", "$215M Savings"],
      color: "from-purple-400 to-indigo-400",
      icon: "🤖"
    },
    {
      title: "Intelligent Data Fabric Revolution 2025",
      description: "Self-organizing enterprise data achieving 99.99% availability and 91% cost reduction",
      link: "/blog/ai-2025-october-intelligent-data-fabric-revolution",
      metrics: ["99.99% Uptime", "91% Cost Cut", "87% Faster"],
      color: "from-emerald-400 to-teal-400",
      icon: "🔗"
    },
    {
      title: "Neuromorphic Computing for Enterprise 2025",
      description: "Brain-inspired chips delivering 1000x energy efficiency and sub-millisecond AI processing",
      link: "/blog/ai-2025-october-neuromorphic-computing-enterprise",
      metrics: ["1000x Efficient", "<1ms Latency", "97% Accuracy"],
      color: "from-violet-400 to-fuchsia-400",
      icon: "🧠"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 border-y border-indigo-500/30">
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10 animate-pulse"></div>
      
      <div className="relative container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-purple-300 font-semibold text-sm backdrop-blur-sm animate-pulse">
              🚀 JUST PUBLISHED: OCTOBER 2025 BREAKTHROUGH CONTENT
            </span>
          </div>
          <h2 className="text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Latest Enterprise AI Innovations
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Explore cutting-edge technologies transforming Fortune 500 operations with proven ROI and measurable impact
          </p>
        </div>

        {/* Content Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {newContent.map((article, index) => (
            <Link
              key={index}
              href={article.link}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Icon and New Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-5xl">{article.icon}</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/30 animate-bounce">
                  NEW
                </span>
              </div>

              {/* Title */}
              <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${article.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                {article.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 text-sm mb-6 leading-relaxed">
                {article.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {article.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-2 text-center backdrop-blur-sm">
                    <div className="text-xs text-white/90 font-bold">{metric}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between text-sm">
                <span className={`font-semibold bg-gradient-to-r ${article.color} bg-clip-text text-transparent`}>
                  Read Full Article
                </span>
                <span className="text-white/40 group-hover:text-white/80 group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </div>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${article.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none`}></div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-2xl px-8 py-6 backdrop-blur-sm">
            <div className="text-left">
              <div className="text-white font-bold text-lg mb-1">Ready to Transform Your Enterprise?</div>
              <div className="text-white/60 text-sm">
                Discover how these technologies can drive measurable ROI for your organization
              </div>
            </div>
            <Link to="/contact"
              className="whitespace-nowrap bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
