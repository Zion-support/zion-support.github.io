import React from 'react';
const AITrendsPredictions2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            Future AI Predictions
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Trends & Predictions
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> 2025-2027</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive predictions for the future of artificial intelligencefrom quantum breakthroughs to synthetic consciousness.
          </p>
        </div>
        {/* Year Selector */}
        <div
          className="flex justify-center gap-4 mb-12"
        >
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeYear === year
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
        {/* Content */}
          <div
            key={activeYear}
          >
            {/* Year Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {trendsData[activeYear].title}
              </h2>
              <p className="text-xl text-gray-300">
                {trendsData[activeYear].subtitle}
              </p>
            </div>
            {/* Trends Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
              {trendsData[activeYear].trends.map((trendindex) => {
                const Icon = trend.icon;
                return (
                  <div
                    key={trend.id}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 bg-gradient-to-r ${trend.color} rounded-xl`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                            {trend.title}
                          </h3>
                          <div className="flex items-center gap-1 text-green-400">
                            <Star className="w-4 h-4" />
                            <span className="text-sm font-medium">{trend.confidence}%</span>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-4">
                          {trend.description}
                        </p>
                        <div className="flex items-center gap-2 text-blue-400 font-medium">
                          <TrendingUp className="w-4 h-4" />
                          {trend.impact}
                        </div>
                      </div>
                    </div>
                  </div>
                );
};
              })}
            </div>
            {/* Predictions */}
            <div
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Key Predictions for {activeYear}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {trendsData[activeYear].predictions.map((predictionindex) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300">{prediction}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Ahead of AI Evolution
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get exclusive access to our detailed AI trend reports and be the first to know about breakthrough technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/ai-trends-report"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Download Full Report
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/newsletter"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300"
              >
                Subscribe to Updates
                <Sparkles className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );



export default AITrendsPredictions2025;
