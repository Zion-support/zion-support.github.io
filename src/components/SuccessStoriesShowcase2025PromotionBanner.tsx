import React from 'react';

<<<<<<< HEAD
const SuccessStoriesShowcase2025PromotionBanner: React.FC = () => {
  return (
    <div
      className="relative bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse" />
          <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-pulse delay-1000" />
          <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-500" />
          <div className="absolute bottom-8 right-4 w-2 h-2 bg-white rounded-full animate-pulse delay-700" />
=======
const COMPONENT: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Technology Showcase
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience revolutionary technology and innovation.
          </p>
>>>>>>> origin/merged-prs
        </div>

<<<<<<< HEAD
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                <div
                  className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"
                >
                  <Award className="w-3 h-3" />
                </div>
                <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                  NEW: Success Stories Showcase 2025
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Real Results from Real Companies
              </h2>
              
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <span className="text-lg opacity-90">Featuring:</span>
                <div
                  key={currentStat}
                  className="flex items-center gap-2"
                >
                  <stats[currentStat].icon className="w-4 h-4" />
                  <span className="text-lg font-semibold bg-white/20 px-3 py-1 rounded-full">
                    {stats[currentStat].value} {stats[currentStat].label}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>500+ Companies</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>$50M+ Savings</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>95% Efficiency Gain</span>
                </div>
              </div>
            </div>

            {/* Center - Rotating Stats */}
            <div className="hidden md:flex items-center gap-8">
              {stats.map((statindex) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                      scale: currentStat === index ? 1.1 : 1,
                      opacity: currentStat === index ? 1 : 0.7
                    }}
                    className="text-center"
                  >
                    <Icon className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs opacity-80">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Right Content - CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <divbutton
                className="flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                <BarChart3 className="w-4 h-4" />
                View Stories
                <ArrowRight className="w-4 h-4" />
              </divbutton>
              
              <divbutton
                className="flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                <Award className="w-4 h-4" />
                Join Success
              </divbutton>
            </div>

            {/* Close Button */}
            <divbutton
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </divbutton>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-1 bg-white/20">
          <div
            className="h-full bg-white"
          />
=======
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-purple-400 text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
            <p className="text-gray-300">Revolutionary technology that pushes the boundaries of what's possible.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-purple-400 text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-3">Advanced Systems</h3>
            <p className="text-gray-300">Cutting-edge systems that revolutionize how we interact with technology.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-purple-400 text-4xl mb-4">🔮</div>
            <h3 className="text-xl font-semibold text-white mb-3">Future Vision</h3>
            <p className="text-gray-300">A glimpse into the future of technology and innovation.</p>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl p-12 border border-purple-400/30">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Explore?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us in discovering the future of technology and innovation.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
            Explore Now
          </button>
>>>>>>> origin/merged-prs
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default SuccessStoriesShowcase2025PromotionBanner;
</div></div></div></div></div></div></div></div></div>
=======
export default COMPONENT;
>>>>>>> origin/merged-prs
