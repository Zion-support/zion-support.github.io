import { Link } from "react-router-dom";

const October2025LatestContentBanner = () => {
  const articles = [
    {",
      title: "Advanced GenAI Orchestration Platform",
      description: "Master multi-model coordination and intelligent workflow automation at enterprise scale",
      icon: Brain,",
      link: "/blog/ai-2025-october-advanced-genai-orchestration-platform",
      gradient: "from-violet-600 to-purple-600"
    },
    {",
      title: "Enterprise AI Security: Zero Trust Framework",
      description: "Comprehensive security architecture protecting AI models, data, and inference endpoints",
      icon: Shield,",
      link: "/blog/ai-2025-october-enterprise-ai-security-zero-trust-framework",
      gradient: "from-cyan-600 to-blue-600"
    },
    {",
      title: "Real-Time Multimodal AI Processing",
      description: "Revolutionary techniques for simultaneous text, vision, and audio processing in production",
      icon: Zap,",
      link: "/blog/ai-2025-october-real-time-multimodal-processing-revolution",
      gradient: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600/20 to-cyan-600/20 border border-violet-500/30 rounded-full px-6 py-2 mb-6">

            <span className="text-violet-300 font-semibold">NEW CONTENT - OCTOBER 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Latest AI Breakthroughs & Enterprise Strategies
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore cutting-edge insights on GenAI orchestration, AI security frameworks, and real-time multimodal processing
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {articles.map((article, idx) => {
            const IconComponent = article.icon;
            return (
              <Link
                key={idx}
                to={article.link}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-violet-500/50 rounded-xl p-6 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${article.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-6 h-6 text-white"</div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-slate-400 mb-4 line-clamp-2">
                  {article.description}
                </p>
                
                <div className="flex items-center gap-2 text-violet-400 font-semibold group-hover:gap-4 transition-all">
                  <span>Read More</span>

                </div>
              </Link>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">
              3
            </div>
            <div className="text-sm text-slate-400">New Articles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-sm text-slate-400">Pages of Insights</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              Expert
            </div>
            <div className="text-sm text-slate-400">Implementation Guides</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-2">
              2025
            </div>
            <div className="text-sm text-slate-400">Latest Strategies</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-lg hover:shadow-violet-500/50"
          >
            Explore All Articles

          </Link>
        </div>
      </div>
    </section>
  );
};

export default October2025LatestContentBanner;
