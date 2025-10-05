import { Link } from "react-router-dom";

export default function October2025NewestContentMegaShowcase() {
  const newContent = [
    {",
      icon: <Network className="w-8 h-8" />,",
      title: "Autonomous Mesh Intelligence Platform",
      description: "Self-organizing distributed AI networks with 99.997% uptime",",
      value: "$8.4B",
      metric: "2,847% ROI",",
      link: "/blog/ai-2025-october-autonomous-mesh-intelligence-platform",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: '🚀',
      title: "Quantum-Neural Hybrid Systems",
      description: "100,000x performance improvements for drug discovery and optimization",",
      value: "$12.7B",
      metric: "44,800% ROI",",
      link: "/blog/ai-2025-october-quantum-neural-hybrid-systems",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: '🚀',
      title: "Neural-Symbolic Reasoning Systems",
      description: "97% accuracy with 100% explainable AI decision-making",",
      value: "$5.7B",
      metric: "58,360% ROI",",
      link: "/blog/ai-2025-october-neural-symbolic-reasoning-systems",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]" <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"</div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 mb-6">

            <span className="text-purple-300 font-semibold">JUST PUBLISHED • OCTOBER 1, 2025</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            🚀 Revolutionary New Content 🚀
          </h2>
          
          <p className="text-2xl text-gray-300 mb-4 font-semibold">
            3 Breakthrough AI Technologies
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center gap-2">

              <span className="text-green-400 font-bold">$26.8B Combined Value</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-400 font-bold">3 Fortune 500 Success Stories</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold">100% Explainable AI</span>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {newContent.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* Metrics */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between py-2 px-4 bg-slate-700/30 rounded-lg">
                  <span className="text-gray-400">Enterprise Value</span>
                  <span className="text-green-400 font-bold text-xl">{item.value}</span>
                </div>
                <div className="flex items-center justify-between py-2 px-4 bg-slate-700/30 rounded-lg">
                  <span className="text-gray-400">Proven ROI</span>
                  <span className="text-purple-400 font-bold text-xl">{item.metric}</span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-4 transition-all">
                <span>Read Complete Guide</span>

              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}</Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl border border-purple-500/30">
            <p className="text-xl text-gray-300">
              Ready to transform your enterprise with cutting-edge AI?
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
              >
                Schedule Free Consultation
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-slate-700/50 text-white font-bold rounded-xl border border-slate-600 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
