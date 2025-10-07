import { Link } from 'react-router-dom';

const October2025CuttingEdgeContentBanner = () => {
  const featuredArticles = [
    {
      title: "Next-Gen Autonomous Orchestration — Self-Healing Systems at Scale",
      subtitle: "99.99% Uptime, 85% Cost Reduction, Zero-Touch Operations",",
      category: "Autonomous Systems",
      link: "/blog/ai-2025-oct-next-gen-autonomous-orchestration",",
      gradient: "from-cyan-500 to-blue-600",
      icon: '🚀',
      metrics: ["99.99% Uptime", "85% Cost Cut", "95% Faster Recovery"]
    },
    {",
      title: "Advanced Prompt Engineering Mastery — 10x LLM Performance",
      subtitle: "95%+ Accuracy, 80% Cost Reduction, Production-Grade Techniques",",
      category: "LLM Engineering",
      link: "/blog/ai-2025-oct-advanced-prompt-engineering-mastery",",
      gradient: "from-purple-500 to-pink-600",
      icon: '🚀',
      metrics: ["10x Performance", "95%+ Accuracy", "$990K Savings"]
    },
    {",
      title: "Real-Time AI Personalization at Scale — 100M+ Users",
      subtitle: "340% Revenue Lift, Sub-50ms Latency, 10M Decisions/Second",",
      category: "ML at Scale",
      link: "/blog/ai-2025-oct-real-time-personalization-at-scale",",
      gradient: "from-orange-500 to-red-600",
      icon: '🚀',
      metrics: ["340% Revenue", "Sub-50ms Latency", "100M+ Users"]
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-y border-purple-500/20">
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 mb-4">

            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              🔥 OCTOBER 1, 2025 — JUST PUBLISHED TODAY
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            3 Game-Changing Enterprise AI Breakthroughs
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            🚀 <span className="font-semibold text-purple-300">Master autonomous systems</span> with self-healing capabilities, 
            <span className="font-semibold text-cyan-300"> unlock 10x LLM performance</span> with advanced prompting, and 
            <span className="font-semibold text-pink-300"> deliver personalization at massive scale</span> — Essential reading for technology leaders!
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {featuredArticles.map((article, index) => (
            <Link
              key={index}
              to={article.link}
              className="group relative overflow-hidden bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Card gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative p-6">
                {/* Icon and Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${article.gradient} text-white shadow-lg`}>
                    {article.icon}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                  {article.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                  {article.subtitle}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.metrics.map((metric, idx) => (
                    <span

key={idx}

                      className="text-xs px-2 py-1 rounded-md bg-slate-700/50 text-gray-300 border border-slate-600/50"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Read More Link */}
                <div className="flex items-center text-sm font-semibold text-purple-400 group-hover:text-cyan-400 transition-colors">
                  Read Full Article

                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              to="/blog"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-xl hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Explore All Latest Content

              </span>
            </Link>
            
            <Link
              to="/contact"
              className="px-8 py-4 bg-slate-800/80 backdrop-blur-sm text-white font-bold rounded-xl border border-purple-500/30 hover:border-purple-500 hover:bg-slate-700/80 transition-all duration-300"
            >
              Schedule Expert Consultation
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            💡 <span className="text-gray-300 font-semibold">Join 50,000+ AI leaders</span> who get weekly insights on enterprise AI implementation
          </p>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {",
      animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default October2025CuttingEdgeContentBanner;
