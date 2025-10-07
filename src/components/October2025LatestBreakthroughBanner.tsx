import { Link } from "react-router-dom";
import { octoberLatestBreakthroughContent } from "../content/october-2025-latest-breakthrough-content";

const October2025LatestBreakthroughBanner = () => {
  return (
    <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-16 px-4 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6">

            <span className="text-white font-semibold text-sm">
              NEW BREAKTHROUGH CONTENT · OCTOBER 2025
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest AI Infrastructure Breakthroughs
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Master advanced LLM orchestration, vector database optimization, and production-ready 
            AI agents with our latest enterprise guides
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {octoberLatestBreakthroughContent.map((content) => {
            const Icon = content.icon === "🚀" ? Zap : content.icon === "⚡" ? Database : Bot;
            
            return (
              <Link
                key={content.id}
                to={`/blog/${content.slug}`}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`bg-gradient-to-br ${content.gradient} p-3 rounded-lg`}>
                    <Icon className="w-6 h-6 text-white"</div>
                  <div className="flex-1">
                    <div className="text-xs text-blue-300 mb-2">{content.category}</div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {content.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-blue-200 mb-4 line-clamp-2">
                  {content.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Object.entries(content.metrics).slice(0, 2).map(([key, value]) => (
                    <div key={key} className="bg-white/5 rounded-lg p-2">
                      <div className="text-2xl font-bold text-white">{value}</div>
                      <div className="text-xs text-blue-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-4">
                  {content.highlights.slice(0, 2).map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-blue-200">

                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-sm text-blue-300 font-semibold group-hover:gap-4 transition-all">
                  Read Full Article

                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your AI Infrastructure?
          </h3>
          <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
            Our experts help Fortune 500 companies implement these advanced techniques. 
            Get a free consultation and custom roadmap for your organization.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Schedule Free Consultation

            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              Explore All Articles
            </Link>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">$700B+</div>
            <div className="text-sm text-blue-300">Combined Market Opportunity</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">60-85%</div>
            <div className="text-sm text-blue-300">Cost Reduction Potential</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">10-100x</div>
            <div className="text-sm text-blue-300">Performance Improvements</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">99.9%</div>
            <div className="text-sm text-blue-300">Enterprise-Grade Reliability</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025LatestBreakthroughBanner;
