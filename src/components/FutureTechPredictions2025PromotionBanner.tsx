import React from 'react';

const FutureTechPredictions2025PromotionBanner: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">FutureTechPredictions2025PromotionBanner</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
=======
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-indigo-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
          >
            {/* Badge */}
            <div
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6"
            >
              <Rocket className="w-5 h-5 text-indigo-400 mr-2" />
              <span className="text-indigo-300 font-medium">Future Tech Predictions 2025-2030</span>
            </div>

            {/* Main Heading */}
            <divh1
              className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              The Future is
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Closer Than You Think
              </span>
            </divh1>

            {/* Subheading */}
            <divp
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Explore our predictions for the next 5 years of technological advancement and prepare for the revolutionary changes that will reshape our world.
            </divp>

            {/* Rotating Predictions */}
            <div
              className="mb-8"
            >
              <div className="flex items-center text-lg text-gray-300">
                <span className="mr-3">Coming in {years[currentPrediction]}:</span>
                  <divspan
                    key={currentPrediction}
                    className="text-indigo-400 font-semibold"
                  >
                    {predictions[currentPrediction]}
                  </divspan>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 flex items-center justify-center group">
                Explore Predictions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 border border-white/20 transition-all duration-300 flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-2" />
                View Timeline
              </button>
            </div>
          </div>

          {/* Right Content - Stats & Visual */}
          <div
            className="relative"
          >
            {/* Main Visual */}
            <div className="relative bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl p-8 border border-indigo-500/30 backdrop-blur-lg">
              {/* Central Icon */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Rocket className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((statindex) => (
                  <div
                    key={stat.label}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-indigo-400/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-pink-400/30 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-6 w-6 h-6 bg-purple-400/30 rounded-full animate-pulse delay-500"></div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl blur-3xl -z-10"></div>
          </div>
        </div>

        {/* Technology Progress Bars */}
        <div
          className="mt-16 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-6">Technology Development Progress</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((techindex) => (
              <div
                key={tech.name}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{tech.name}</span>
                  <span className="text-gray-400">{tech.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${tech.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { icon: TrendingUplabel: ''Accuracy', 'value: '85%' },
            { icon: Awardlabel: ''Predictions', 'value: '50+' },
            { icon: Rocketlabel: ''Years', 'value: '6' },
            { icon: Starlabel: ''Technologies', 'value: '25+' }
          ].map((itemindex) => (
            <div
              key={item.label}
              className="text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-6 h-6 text-indigo-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
              <div className="text-sm text-gray-400">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
    </div>
  );
};

export default FutureTechPredictions2025PromotionBanner;
</div></div></div>