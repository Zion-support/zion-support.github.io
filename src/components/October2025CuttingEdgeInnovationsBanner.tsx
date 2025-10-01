import { ArrowRight, Zap, Brain, Shield, Lock, TrendingUp, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { octoberCuttingEdgeInnovations, octoberInnovationMetrics } from "../content/october-2025-cutting-edge-innovations";

const October2025CuttingEdgeInnovationsBanner = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-16 px-4 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20">
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            <span className="text-white font-bold text-sm tracking-wide">
              🚀 JUST RELEASED · OCTOBER 2025 CUTTING-EDGE INNOVATIONS
            </span>
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The Future of Enterprise AI is Here
          </h2>
          <p className="text-xl md:text-2xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
            Discover how leading enterprises are deploying quantum-resistant security, brain-inspired computing, 
            and autonomous agent governance to achieve unprecedented efficiency and resilience
          </p>
        </div>

        {/* Global Impact Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-white mb-1">{octoberInnovationMetrics.totalMarket}</div>
            <div className="text-sm text-purple-200">Combined Market Opportunity</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-white mb-1">{octoberInnovationMetrics.averageEfficiency}</div>
            <div className="text-sm text-purple-200">Average Efficiency Gain</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-white mb-1">{octoberInnovationMetrics.combinedCompliance}</div>
            <div className="text-sm text-purple-200">Compliance Rate</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-white mb-1">{octoberInnovationMetrics.enterpriseDeployments}</div>
            <div className="text-sm text-purple-200">Enterprise Deployments</div>
          </div>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {octoberCuttingEdgeInnovations.map((content, index) => {
            const iconMap: { [key: string]: any } = {
              '🔐': Shield,
              '🧠': Brain,
              '⚖️': Lock
            };
            const Icon = iconMap[content.icon] || Zap;
            
            return (
              <Link
                key={content.id}
                to={`/blog/${content.slug}`}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:scale-105 hover:border-white/40 transition-all duration-300 hover:shadow-2xl"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`bg-gradient-to-br ${content.gradient} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-block text-xs text-blue-300 bg-blue-900/30 px-3 py-1 rounded-full mb-2">
                      {content.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {content.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-purple-200 mb-5 leading-relaxed line-clamp-3">
                  {content.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {Object.entries(content.metrics).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                      <div className="text-2xl font-bold text-white">{value}</div>
                      <div className="text-xs text-purple-300 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-5">
                  {content.highlights.slice(0, 3).map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-purple-200">
                      <TrendingUp className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-1">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-sm text-blue-300 font-semibold group-hover:gap-4 transition-all pt-4 border-t border-white/10">
                  <span>Read Complete Guide</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-10 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Lead the AI Revolution?
              </h3>
              <p className="text-purple-200 mb-6 text-lg leading-relaxed">
                Our experts have helped Fortune 500 companies implement these breakthrough technologies. 
                Get a free strategic consultation and custom implementation roadmap tailored to your organization.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-white">
                  <div className="bg-green-500 rounded-full p-1">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span>60-minute deep-dive with senior architects</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <div className="bg-green-500 rounded-full p-1">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span>Custom ROI analysis and risk assessment</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <div className="bg-green-500 rounded-full p-1">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span>12-month implementation roadmap</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-indigo-900 px-8 py-5 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Sparkles className="w-6 h-6" />
                Schedule Free Consultation
                <ArrowRight className="w-6 h-6" />
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-5 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg border-2 border-white/20"
              >
                Explore All Innovation Guides
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-10 text-center">
          <p className="text-purple-300 text-sm mb-4">Trusted by leading enterprises worldwide</p>
          <div className="flex flex-wrap justify-center gap-6 text-white/60 text-sm">
            <span>🏦 JP Morgan Chase</span>
            <span>🏥 Kaiser Permanente</span>
            <span>🚗 BMW</span>
            <span>🏭 Siemens</span>
            <span>🚀 NASA</span>
            <span>💼 Fortune 500</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default October2025CuttingEdgeInnovationsBanner;
