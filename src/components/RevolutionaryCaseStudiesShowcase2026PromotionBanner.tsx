import React from 'react';

<<<<<<< HEAD
const RevolutionaryCaseStudiesShowcase2026PromotionBanner: React.FC = () => {
  return (
    <div>
      <div
        className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-pink-500/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(139,92,246,0.2),transparent_50%)]"></div>
        </div>

        {/* Floating Success Icons */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
                y: [0-250],
                opacity: [0.40.80.4],
                scale: [1.21],
              }}
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            {/* Left Content */}
            <div className="flex-1">
              <div
                className="flex items-center space-x-3 mb-4"
              >
                <Award className="w-6 h-6 text-yellow-300" />
                <span className="text-sm font-medium bg-yellow-300 text-purple-900 px-3 py-1 rounded-full">
                  SUCCESS STORIES
                </span>
              </div>

              <divh2
                className="text-2xl md:text-3xl font-bold mb-3"
              >
                🏆 Revolutionary Case Studies 2026
              </divh2>

              <divp
                className="text-lg text-purple-200 mb-6 max-w-2xl"
              >
                Real success stories from companies that achieved incredible results with our AI and automation solutions. 
                See how they transformed their operations and achieved massive ROI.
              </divp>

              {/* Rotating Case Study Display */}
              <div
                key={currentStat}
                className="flex items-center space-x-4 mb-6 p-4 bg-white bg-opacity-10 rounded-lg"
              >
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <caseStudies[currentStat].icon className={`w-6 h-6 ${caseStudies[currentStat].color}`} />
                </div>
                <div>
                  <div className="font-semibold text-lg">{caseStudies[currentStat].title}</div>
                  <div className="text-sm text-purple-200">{caseStudies[currentStat].company}</div>
                  <div className="text-2xl font-bold text-yellow-300">{caseStudies[currentStat].roi} ROI</div>
                </div>
              </div>

              {/* Features */}
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6"
              >
                {features.map((featureindex) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-purple-200">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div
                className="flex space-x-6 mb-6"
              >
                {stats.map((statindex) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-yellow-300">{stat.label}</div>
                    <div className="text-sm text-purple-300">{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center group">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  View Case Studies
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300 flex items-center justify-center group">
                  <Target className="w-5 h-5 mr-2" />
                  Start Your Success Story
                </button>
              </div>
            </div>

            {/* Right Content - Animated Success Icons */}
            <div
              className="hidden lg:flex items-center space-x-4"
            >
              <div
                className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
              >
                <DollarSign className="w-10 h-10 text-green-400" />
              </div>
              <div
                className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
              >
                <TrendingUp className="w-8 h-8 text-yellow-400" />
              </div>
              <div
                className="w-18 h-18 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
              >
                <Award className="w-9 h-9 text-pink-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-4 right-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors duration-300"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Pulse Effect */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-pink-400/20"
        />
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
        </div>

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
        </div>
>>>>>>> origin/merged-prs
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default RevolutionaryCaseStudiesShowcase2026PromotionBanner;
</div></div></div></div>
=======
export default COMPONENT;
>>>>>>> origin/merged-prs
