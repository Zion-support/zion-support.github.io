import React from 'react';
const AdvancedTechTrends2026: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Advanced Tech Trends
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              2026 & Beyond
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the revolutionary technologies that will transform your business 
            and give you a competitive edge in the next decade.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trends.map((trendindex) => (
            <div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              className="group relative"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 group-hover:scale-105">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${trend.color} mb-6`}>
                  <trend.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {trend.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {trend.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-purple-300 bg-purple-900/30 px-3 py-1 rounded-full">
                    {trend.impact}
                  </span>
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Lead the Future?
            </h3>
            <p className="text-xl mb-8 text-purple-100">
              Join the companies already implementing these cutting-edge technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-colors">
                Get Early Access
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors">
                Download Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AdvancedTechTrends2026;