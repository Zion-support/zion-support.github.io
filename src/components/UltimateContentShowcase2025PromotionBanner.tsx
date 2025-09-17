import React from 'react';
const UltimateContentShowcase2025PromotionBanner: React.FC = () => {
  return (
    <div>
      <div
        className="relative bg-gradient-to-r from-purple-900 via-slate-900 to-blue-900 border-b border-purple-500/30 overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-blue-600/20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%253Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%253D%2522http%253A%2F%2Fwww.w3.org%2F2000%2Fsvg%2522%253E%253Cg%20fill%253D%2522none%2522%20fill-rule%253D%2522evenodd%2522%253E%253Cg%20fill%253D%2522%25239C92AC%2522%20fill-opacity%253D%25220.1%2522%253E%253Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%221%22%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-30"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left Content */}
            <div className="flex items-center gap-6">
              <div
                className="flex items-center gap-3"
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">!</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    🚀 Ultimate Content Showcase 2025
                  </h3>
                  <p className="text-purple-200 text-sm">
                    Revolutionary AI Innovation & Future Predictions
                  </p>
                </div>
              </div>
              {/* Rotating Features */}
              <div className="hidden md:flex items-center gap-4">
                <div className="w-px h-8 bg-purple-500/30"></div>
                <div className="flex items-center gap-3">
                    <div
                      key={currentFeature}
                      className="flex items-center gap-2"
                    >
                      <div className={`w-8 h-8 bg-gradient-to-r ${features[currentFeature].color} rounded-lg flex items-center justify-center`}>
                        {React.createElement(features[currentFeature].icon{ className: "w-4 h-4 text-white" })}
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">
                          {features[currentFeature].title}
                        </div>
                        <div className="text-purple-300 text-xs">
                          {features[currentFeature].description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Content */}
            <div className="flex items-center gap-4">
              {/* Countdown Timer */}
              <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg border border-white/20">
                <Clock className="w-4 h-4 text-purple-300" />
                <span className="text-white text-sm font-medium">
                  Limited Time Offer
                </span>
              </div>
              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <divbutton
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-all duration-300"
                >
                  <Play className="w-4 h-4" />
                  <span className="text-sm font-medium">Preview</span>
                </divbutton>
                <divbutton
                  className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  <span>Explore Now</span>
                  <ArrowRight className="w-4 h-4" />
                </divbutton>
                <divbutton
                  onClick={() => setIsDismissed(true)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
                >
                  <X className="w-5 h-5 text-gray-400 hover:text-white" />
                </divbutton>
              </div>
            </div>
          </div>
          {/* Mobile Features */}
          <div className="md:hidden mt-4">
            <div className="flex items-center justify-center gap-4">
                <div
                  key={currentFeature}
                  className="flex items-center gap-2"
                >
                  <div className={`w-6 h-6 bg-gradient-to-r ${features[currentFeature].color} rounded-lg flex items-center justify-center`}>
                    {React.createElement(features[currentFeature].icon{ className: "w-3 h-3 text-white" })}
                  </div>
                  <div className="text-center">
                    <div className="text-white font-semibold text-sm">
                      {features[currentFeature].title}
                    </div>
                    <div className="text-purple-300 text-xs">
                      {features[currentFeature].description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Animated Border */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
        <div
          className="absolute bottom-0 left-0 h-1 bg-white"
        ></div>
      </div>
    </div>
  );

export default UltimateContentShowcase2025PromotionBanner;