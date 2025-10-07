import { Link } from "react-router-dom";
import { octoberUltimateEnterpriseContent } from "../content/october-2025-ultimate-enterprise-content";

const October2025UltimateEnterpriseBanner = () => {
  const [multiCloudContent, conversationalAIContent] = octoberUltimateEnterpriseContent;

  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-bold text-sm mb-6 animate-bounce shadow-2xl">

            <span>OCTOBER 2025 - JUST PUBLISHED</span>

          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Ultimate Enterprise AI
            </span>
            <br /> <span className="text-white">Revolution 2025</span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-medium">
            Breakthrough solutions delivering <span className="text-cyan-400 font-bold">156%-184% ROI</span>, 
            <span className="text-purple-400 font-bold"> $262M+ savings</span>, and 
            <span className="text-blue-400 font-bold"> transformative results</span>
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Multi-Cloud Intelligence Card */}
          <div className="bg-gradient-to-br from-blue-600/20 via-cyan-600/20 to-teal-600/20 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 group">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300">

                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-cyan-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    NEW RELEASE
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full animate-pulse">
                    🔥 HOT
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {multiCloudContent.icon} Adaptive Multi-Cloud Intelligence
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  {multiCloudContent.description}
                </p>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-cyan-500/10 rounded-xl p-4 border border-cyan-500/20 hover:border-cyan-400/50 transition-colors">
                <div className="text-3xl font-extrabold text-cyan-400 mb-1">156%</div>
                <div className="text-sm text-gray-300 font-medium">ROI in 18 Months</div>
              </div>
              <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20 hover:border-blue-400/50 transition-colors">
                <div className="text-3xl font-extrabold text-blue-400 mb-1">$89M</div>
                <div className="text-sm text-gray-300 font-medium">Annual Savings</div>
              </div>
              <div className="bg-teal-500/10 rounded-xl p-4 border border-teal-500/20 hover:border-teal-400/50 transition-colors">
                <div className="text-3xl font-extrabold text-teal-400 mb-1">91%</div>
                <div className="text-sm text-gray-300 font-medium">Cost Optimization</div>
              </div>
              <div className="bg-cyan-500/10 rounded-xl p-4 border border-cyan-500/20 hover:border-cyan-400/50 transition-colors">
                <div className="text-3xl font-extrabold text-cyan-400 mb-1">4.5x</div>
                <div className="text-sm text-gray-300 font-medium">Efficiency Gain</div>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="space-y-2 mb-6">
              {multiCloudContent.highlights.slice(0, 4).map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 text-gray-200">

                  <span className="text-sm leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to={multiCloudContent.cta.link}
              className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 group"
            >
              <span className="text-lg">{multiCloudContent.cta.text}</span>

            </Link>
          </div>

          {/* Conversational AI Card */}
          <div className="bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-rose-600/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 group">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                  <MessageSquare className="w-9 h-9 text-white"</div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    FEATURED
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full animate-pulse">
                    ⭐ TRENDING
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {conversationalAIContent.icon} Conversational AI Revolution
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  {conversationalAIContent.description}
                </p>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/20 hover:border-purple-400/50 transition-colors">
                <div className="text-3xl font-extrabold text-purple-400 mb-1">184%</div>
                <div className="text-sm text-gray-300 font-medium">ROI in 14 Months</div>
              </div>
              <div className="bg-pink-500/10 rounded-xl p-4 border border-pink-500/20 hover:border-pink-400/50 transition-colors">
                <div className="text-3xl font-extrabold text-pink-400 mb-1">94%</div>
                <div className="text-sm text-gray-300 font-medium">Customer Satisfaction</div>
              </div>
              <div className="bg-rose-500/10 rounded-xl p-4 border border-rose-500/20 hover:border-rose-400/50 transition-colors">
                <div className="text-3xl font-extrabold text-rose-400 mb-1">5.7x</div>
                <div className="text-sm text-gray-300 font-medium">Productivity Boost</div>
              </div>
              <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/20 hover:border-purple-400/50 transition-colors">
                <div className="text-3xl font-extrabold text-purple-400 mb-1">$173M</div>
                <div className="text-sm text-gray-300 font-medium">Annual Savings</div>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="space-y-2 mb-6">
              {conversationalAIContent.highlights.slice(0, 4).map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 text-gray-200">

                  <span className="text-sm leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to={conversationalAIContent.cta.link}
              className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 group"
            >
              <span className="text-lg">{conversationalAIContent.cta.text}</span>

            </Link>
          </div>
        </div>

        {/* Combined Value Proposition */}
        <div className="bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="flex items-center justify-center mb-3">

              </div>
              <div className="text-3xl font-extrabold text-white mb-2">340%+</div>
              <div className="text-sm text-gray-300 font-medium">Combined ROI</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="flex items-center justify-center mb-3">

              </div>
              <div className="text-3xl font-extrabold text-white mb-2">$262M+</div>
              <div className="text-sm text-gray-300 font-medium">Total Savings</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="flex items-center justify-center mb-3">

              </div>
              <div className="text-3xl font-extrabold text-white mb-2">5.1x</div>
              <div className="text-sm text-gray-300 font-medium">Avg Efficiency</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="flex items-center justify-center mb-3">

              </div>
              <div className="text-3xl font-extrabold text-white mb-2">Fortune 100</div>
              <div className="text-sm text-gray-300 font-medium">Proven Results</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-xl text-gray-300 mb-6 font-medium">
            Ready to transform your enterprise with cutting-edge AI solutions?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-500 hover:via-blue-500 hover:to-purple-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 text-lg"
            >
              Schedule Free Assessment
            </Link>
            <Link
              to="/blog"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 border-2 border-white/30 hover:border-white/50 text-lg"
            >
              Explore All Insights
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025UltimateEnterpriseBanner;
