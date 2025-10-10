        <div className="relative">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12 overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center">
                  <currentSlideData.icon className="w-8 h-8 text-slate-900" />
                </div>
                {/* Features */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentSlideData.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Stats */}
                {currentSlideData.stats && (
                  <div className="grid grid-cols-3 gap-6">
                    {currentSlideData.stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-gray-400 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                    <Zap className="w-5 h-5" />
                    Get Started;
  </
                  <button className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                    Learn More;
  </
                </div>
              </div>
              {/* Visual Element */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <currentSlideData.icon className="w-16 h-16 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">
                      {currentSlideData.title}
                    </div>
                    <div className="text-gray-300">
                      Slide {currentSlide + 1} of {slides.length}
                    </div>
                  </div>
                </div>
              </div>
