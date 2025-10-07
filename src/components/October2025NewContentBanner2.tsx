import { Link } from "react-router-dom";

const October2025NewContentBanner2 = () => {
  const newArticles = [
    {",
      title: "AI-Powered Sustainable Data Centers",
      description: "Discover how AI is reducing data center energy consumption by 40% while improving performance",
      icon: Leaf,",
      slug: "ai-2025-oct-01-ai-powered-sustainable-data-centers",
      gradient: "from-green-500 to-emerald-600",",
      badge: "Green AI"
    },
    {",
      title: "Next-Gen Financial Risk Prediction",
      description: "94% accuracy in real-time market volatility forecasting with AI-powered risk systems",
      icon: DollarSign,",
      slug: "ai-2025-oct-01-ai-financial-risk-prediction-systems",
      gradient: "from-blue-500 to-cyan-600",",
      badge: "FinTech"
    },
    {",
      title: "Voice AI Revolution in Enterprise",
      description: "Transform communication with 98% accuracy voice AI across 95+ languages",
      icon: Mic,",
      slug: "ai-2025-oct-01-voice-ai-revolution-enterprise",
      gradient: "from-purple-500 to-pink-600",",
      badge: "Voice AI"
    },
    {",
      title: "Intelligent Automation & RPA 2.0",
      description: "Next-generation RPA with self-learning bots delivering 10x ROI",
      icon: Bot,",
      slug: "ai-2025-oct-01-robotics-process-automation-next-gen",
      gradient: "from-orange-500 to-red-600",",
      badge: "Automation"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 px-6 py-2 rounded-full border border-purple-500/30 mb-6">

            <span className="text-purple-300 font-semibold">FRESH INSIGHTS | October 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest AI Breakthroughs & Innovations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore cutting-edge AI solutions transforming industries — from sustainable computing to intelligent automation
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {newArticles.map((article) => {
            const Icon = article.icon;
            return (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1"
              >
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-xs font-semibold rounded-full border border-purple-500/30">
                    {article.badge}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${article.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white"</div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {article.description}
                </p>

                {/* Read More Link */}
                <div className="flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-4 transition-all">
                  <span>Read Article</span>

                </div>

                {/* Hover Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105"
          >
            <span>Explore All AI Insights</span>

          </Link>
        </div>
      </div>
    </section>
  );
};

export default October2025NewContentBanner2;
