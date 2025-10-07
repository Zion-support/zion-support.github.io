import { Link } from "react-router-dom";
import { octoberNewBreakthroughContent, octoberContentStats } from "../content/october-2025-new-breakthrough-content";

const October2025NewBreakthroughBanner = () => {
  const stats = octoberContentStats;

  const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    '🧠': Brain,
    '💰': DollarSign,
    '🎨': Eye
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20 px-4 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md px-8 py-3 rounded-full mb-8 border border-white/30">

            <span className="text-white font-bold text-lg tracking-wide">
              🚀 NEW BREAKTHROUGH CONTENT · OCTOBER 2, 2025
            </span>

          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Next-Generation Enterprise AI
            <br /> <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 text-transparent bg-clip-text">
              Systems That Transform Operations
            </span>
          </h2>
          <p className="text-2xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
            Master context-aware agents, intelligent cost governance, and multimodal intelligence 
            with our latest enterprise implementation guides. Achieve 79% cost reductions and 26x 
            performance improvements.
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {octoberNewBreakthroughContent.map((content) => {
            const Icon = iconMap[content.icon] || Brain;
            
            return (
              <Link
                key={content.id}
                to={`/blog/${content.slug}`}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:from-white/20 hover:to-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`bg-gradient-to-br ${content.gradient} p-4 rounded-xl shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-purple-300 mb-2 font-semibold uppercase tracking-wider">
                      {content.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors leading-tight">
                      {content.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-purple-200 mb-6 leading-relaxed">
                  {content.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {Object.entries(content.metrics).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                      <div className="text-2xl font-extrabold text-white mb-1">{value}</div>
                      <div className="text-xs text-purple-300 capitalize font-medium">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="space-y-3 mb-6">
                  {content.highlights.slice(0, 2).map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-purple-200">

                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-sm text-yellow-300 font-bold group-hover:gap-4 transition-all">
                  Read Full Guide

                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/30 rounded-2xl p-12 mb-12 shadow-2xl">
          <div className="flex items-center gap-4 mb-6 justify-center">

            <h3 className="text-3xl font-bold text-white">
              Ready to Transform Your Enterprise AI?
            </h3>
          </div>
          <p className="text-purple-200 text-lg mb-8 max-w-3xl mx-auto text-center leading-relaxed">
            Our Fortune 500 clients achieve 79% cost reductions, 26x performance improvements, and 
            96% customer satisfaction using these proven frameworks. Get your free enterprise assessment 
            and custom implementation roadmap today.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-5 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all shadow-lg hover:shadow-2xl hover:scale-105"
            >

              Get Free Enterprise Assessment

            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
            >
              Explore All Articles

            </Link>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-4xl font-extrabold text-white mb-2">{stats.totalMarketValue}</div>
            <div className="text-sm text-purple-300 font-medium">Market Opportunity</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-4xl font-extrabold text-green-400 mb-2">{stats.avgCostReduction}</div>
            <div className="text-sm text-purple-300 font-medium">Avg Cost Reduction</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-4xl font-extrabold text-yellow-400 mb-2">{stats.avgSpeedImprovement}</div>
            <div className="text-sm text-purple-300 font-medium">Speed Improvement</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-4xl font-extrabold text-blue-400 mb-2">{stats.enterpriseAdoption}</div>
            <div className="text-sm text-purple-300 font-medium">Enterprise Adoption</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-4xl font-extrabold text-pink-400 mb-2">{stats.customerSatisfaction}</div>
            <div className="text-sm text-purple-300 font-medium">Customer Satisfaction</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-4xl font-extrabold text-purple-400 mb-2">{stats.paybackPeriod}</div>
            <div className="text-sm text-purple-300 font-medium">Avg Payback Period</div>
          </div>
        </div>

        {/* Technology Tags */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap gap-3 justify-center">
            {['AI Agents', 'Memory Systems', 'FinOps', 'Cost Optimization', 'Multimodal AI', 
              'Computer Vision', 'NLP', 'Enterprise Automation', 'Cloud Management'].map((tag) => (

              <span
key={tag}

                className="bg-white/10 backdrop-blur-sm border border-white/20 text-purple-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025NewBreakthroughBanner;
