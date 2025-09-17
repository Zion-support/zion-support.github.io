import React from 'react';
const AI2025TrendsInnovationShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%20width%253D%252260%2522%20height%253D%252260%2522%20viewBox%253D%25220%25200%252060%252060%2522%20xmlns%253D%2522http%253A%2F%2Fwww.w3.org%2F2000%2Fsvg%2522%253E%253Cg%20fill%253D%2522none%2522%20fill-rule%253D%2522evenodd%2522%253E%253Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.05%22%253E%253Ccircle%20cx%253D%252230%2522%20cy%253D%252230%2522%20r%253D%25222%2522%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-blue-300 font-medium">2025 AI Innovation Trends</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Future of
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> AI Innovation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the revolutionary AI trends and innovations that will transform your business in 2025 and beyond. 
            Stay ahead of the curve with cutting-edge technology solutions.
          </p>
        </div>
        {/* Interactive Trends Carousel */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Trends Navigation */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">Key AI Trends 2025</h3>
              {trends.map((trendindex) => (
                <div
                  key={trend.id}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeTrend === index
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/50'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                  onClick={() => setActiveTrend(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${trend.color}`}>
                      <trend.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white">{trend.title}</h4>
                      <p className="text-sm text-gray-300">{trend.stats}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
            {/* Active Trend Display */}
            <div className="relative">
                <div
                  key={activeTrend}
                  className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${trends[activeTrend].color}`}>
                      <trends[activeTrend].icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{trends[activeTrend].title}</h3>
                      <p className="text-blue-300 font-medium">{trends[activeTrend].stats}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {trends[activeTrend].description}
                  </p>
                  <div className="space-y-3">
                    {trends[activeTrend].features.map((featureindex) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Innovation Showcase */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Revolutionary Innovations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovations.map((innovationindex) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium">
                    {innovation.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm font-medium">
                    {innovation.impact}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {innovation.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {innovation.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Benefits Stats */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Proven Results</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefitindex) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{benefit.value}</div>
                <div className="text-gray-300">{benefit.text}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Call to Action */}
        <div
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Explore AI Solutions
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
            <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
              Download Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );

};

export default AI2025TrendsInnovationShowcase;
