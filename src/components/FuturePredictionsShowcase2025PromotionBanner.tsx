import React from 'react';

<<<<<<< HEAD
const FuturePredictionsShowcase2025PromotionBanner: React.FC = () => {
  return (
    <div
      className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-3xl p-8 md:p-12 my-8"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%253Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%253D%2522http%253A%2F%2Fwww.w3.org%2F2000%2Fsvg%2522%253E%253Cg%20fill%253D%2522none%2522%20fill-rule%253D%2522evenodd%2522%253E%253Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.05%22%253E%253Cpath%20d%3D%22M20%2020c0-11.046-8.954-20-20-20v20h20z%22%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-400 to-purple-500 text-black px-4 py-2 rounded-full font-bold text-sm mb-6"
            >
              <Calendar className="w-4 h-4" />
              FUTURE PREDICTIONS
              <Sparkles className="w-4 h-4" />
            </div>

            {/* Main Heading */}
            <divh2
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Future Predictions
              <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Showcase 2025-2030
              </span>
            </divh2>

            {/* Description */}
            <divp
              className="text-xl text-gray-300 mb-8 max-w-2xl"
            >
              Explore our expert predictions for the future of AItechnologyand human civilization 
              from 2025 to 2030 and beyond.
            </divp>

            {/* Features */}
            <div
              className="flex flex-wrap gap-4 mb-8"
            >
              {[
                { icon: Braintext: 'Neural Interface 2025' },
                { icon: Rocketext: 'Universal Automation 2026' },
                { icon: Globetext: 'Global AI Network 2030' }
              ].map((featureindex) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <feature.icon className="w-4 h-4 text-pink-400" />
                  <span className="text-white text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group flex items-center gap-3 bg-gradient-to-r from-pink-400 to-purple-500 text-black px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl">
                <Play className="w-6 h-6" />
                Explore Predictions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
                <ChevronRight className="w-5 h-5" />
                View Timeline
              </button>
            </div>
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
>>>>>>> origin/merged-prs
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

<<<<<<< HEAD
          {/* Right Visual - Rotating Predictions */}
          <div
            className="relative"
          >
            <div className="relative w-80 h-80">
              {/* Main Circle */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
              
              {/* Rotating Elements */}
              <div className="absolute inset-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-30 animate-spin" style={{ animationDuration: '12s' }}></div>
              
              {/* Center Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  key={currentPrediction}
                  className="text-center"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${predictions[currentPrediction].color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                    <predictions[currentPrediction].icon className="w-10 h-10 text-black" />
                  </div>
                  <div className="text-white font-bold text-lg">{predictions[currentPrediction].title}</div>
                  <div className="text-gray-300 text-sm">{predictions[currentPrediction].year}</div>
                </div>
              </div>

              {/* Floating Prediction Icons */}
              {predictions.map((predictionindex) => (
                <div
                  key={index}
                    opacity: index === currentPrediction ? 1 : 0.3
                    scale: index === currentPrediction ? 1 : 0.8 
                  }}
                  className={`absolute ${
                    index === 0 ? 'top-4 left-1/2' :
                    index === 1 ? 'top-1/2 right-4' :
                    'bottom-4 left-1/2'
                  } transform -translate-x-1/2 -translate-y-1/2`}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${prediction.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <prediction.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              ))}

              {/* Timeline Dots */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              {predictions.map((predictionindex) => (
                <div
                  key={index}
                  className={`absolute top-1/2 ${
                    index === 0 ? 'left-1/4' :
                    index === 1 ? 'left-1/2' :
                    'left-3/4'
                  } transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full`}
                ></div>
              ))}
            </div>
          </div>
=======
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
export default FuturePredictionsShowcase2025PromotionBanner;
</div></div>
</p></p>
=======
export default COMPONENT;
>>>>>>> origin/merged-prs
