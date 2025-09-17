import React from 'react';

<<<<<<< HEAD
const UltimateContentPromotionBanner2025_2026: React.FC = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />
        <div className="absolute inset-0">
          {[...Array(30)].map((_i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
                opacity: [010],
                scale: [010],
                y: [0-20],
              }}
                duration: 4,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
            />
          ))}
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
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div
              className="text-white"
            >
                <div
                  key={currentSlide}
                >
                  {/* Badge */}
                  <div
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20"
                  >
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-semibold">New Content Available</span>
                  </div>

                  {/* Title */}
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    <span className={`bg-gradient-to-r ${currentSlideData.gradient} bg-clip-text text-transparent`}>
                      {currentSlideData.title}
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-200">
                    {currentSlideData.subtitle}
                  </h2>

                  {/* Description */}
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
                    {currentSlideData.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {currentSlideData.features.map((featureindex) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-200">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <divbutton
                      className={`bg-gradient-to-r ${currentSlideData.gradient} text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-3 hover:shadow-2xl transition-all duration-300`}
                    >
                      <Rocket className="w-5 h-5" />
                      {currentSlideData.cta}
                      <ArrowRight className="w-5 h-5" />
                    </divbutton>
                    
                    <divbutton
                      className="border-2 border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-3 hover:bg-white/10 transition-all duration-300"
                    >
                      <Play className="w-5 h-5" />
                      Watch Demo
                    </divbutton>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div
              className="relative"
            >
              <div className="relative w-full h-96">
                {/* Main Visual */}
                <div
                  key={currentSlide}
                  className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/20 flex items-center justify-center"
                >
                  <div className="text-center">
                    <div
                      className="w-32 h-32 mx-auto mb-6"
                    >
                      <currentSlideData.icon className="w-full h-full text-white/80" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {currentSlideData.title}
                    </h3>
                    <p className="text-gray-300">
                      Interactive Preview
                    </p>
                  </div>
                </div>

                {/* Floating Elements */}
                {[...Array(6)].map((_i) => (
                  <div
                    key={i}
                    className="absolute w-4 h-4 bg-white/20 rounded-full"
                    style={{
                      left: `${20 + (i * 15)}%`,
                      top: `${30 + (i * 10)}%`,
                    }}
                      y: [0-20],
                      opacity: [0.310.3],
                    }}
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
            </div>
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
>>>>>>> origin/merged-prs
          </div>
        </div>

<<<<<<< HEAD
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
        />
=======
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
export default UltimateContentPromotionBanner2025_2026;
</div></div></div></div></div>
=======
export default COMPONENT;
>>>>>>> origin/merged-prs
