import React from 'react';

const BusinessSolutionsShowcase2025PromotionBanner: React.FC = () => {
  return (
    <div>
      {isVisible && (
        <div
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-2xl"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              {/* Left Content */}
              <div 
                className="flex items-center space-x-4 flex-1"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
                      scale
                                                                  ease: "easeInOut" 
                    }}
                  >
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">
                      🏢 Business Solutions 2025
                    </h3>
                    <p className="text-sm opacity-90 hidden sm:block">
                      Transform your operations with proven solutions
                    </p>
                  </div>
                </div>
              </div>

              {/* Center Metrics Rotator */}
              <div 
                className="hidden md:flex items-center space-x-6"
              >
                <div className="text-center">
                  <div className="text-sm opacity-80 mb-1">Live Results</div>
                    <div
                      key={currentMetric}
                      className="flex items-center space-x-2"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center`}>
                        {React.createElement(metrics[currentMetric].icon{ 
                          className: `w-4 h-4 ${metrics[currentMetric].color}` 
                        })}
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{metrics[currentMetric].value}</div>
                        <div className="text-xs opacity-80">{metrics[currentMetric].label}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-px h-8 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold">30</div>
                  <div className="text-xs opacity-80">Days to Value</div>
                </div>
                <div className="w-px h-8 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-xs opacity-80">Support</div>
                </div>
              </div>

              {/* Right Actions */}
              <div 
                className="flex items-center space-x-3"
              >
                <button className="hidden sm:flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-200 backdrop-blur-sm">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">Case Studies</span>
                </button>
                
                <button className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 shadow-lg">
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <button 
                  onClick={handleDismiss}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Mobile Content */}
            <div 
              className="md:hidden flex items-center justify-between py-2 border-t border-white/20"
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center`}
                    key={currentMetric}
                  >
                    {React.createElement(metrics[currentMetric].icon{ 
                      className: `w-3 h-3 ${metrics[currentMetric].color}` 
                    })}
                  </div>
                  <span className="text-sm font-medium">{metrics[currentMetric].value}</span>
                </div>
                <div className="w-px h-4 bg-white/30"></div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">30 Days to Value</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {solutions.map((solutionindex) => (
                  <div
                    key={index}
                    className={`w-6 h-6 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center`}
                  >
                    {React.createElement(solution.icon{ className: "w-3 h-3 text-white" })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full"
                opacity
                                                ease: "easeInOut"
              }}
            />
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/5 rounded-full"
                opacity
                                                ease: "easeInOut",
                delay
            />
            <div
              className="absolute top-1/2 left-1/2 w-16 h-16 bg-white/8 rounded-full"
                opacity
                                                ease: "easeInOut",
                delay
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessSolutionsShowcase2025PromotionBanner;
</div></div>