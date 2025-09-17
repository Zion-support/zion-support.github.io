import React from 'react';
const BusinessSuccessStories2027: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div
          className="absolute top-0 left-0 w-full h-full"
            background: [
              'radial-gradient(circle at 20% 50%rgba(12011980.2) 0%transparent 50%)',
              'radial-gradient(circle at 80% 20%rgba(25511980.2) 0%transparent 50%)',
              'radial-gradient(circle at 40% 80%rgba(1202192550.2) 0%transparent 50%)',
              'radial-gradient(circle at 20% 50%rgba(12011980.2) 0%transparent 50%)',
            ]
          }}
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 mb-6">
            <Award className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Success Stories 2027</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Business Success
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Stories 2027
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how leading companies achieved extraordinary results using our 
            revolutionary AI and automation solutions. Real storiesreal resultsreal transformation.
          </p>
        </div>
        {/* Story Navigation */}
        <div
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-4">
            <button
              onClick={prevStory}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <div className="flex gap-2">
              {successStories.map((_index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStory ? 'bg-purple-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextStory}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`p-3 rounded-full transition-all duration-300 ${
                isPlaying ? 'bg-purple-600' : 'bg-white/10'
              }`}
            >
              <Play className={`w-6 h-6 text-white ${isPlaying ? 'animate-pulse' : ''}`} />
            </button>
          </div>
        </div>
        {/* Story Content */}
          <div
            key={currentStory}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8"
          >
            {/* Company Header */}
            <div className="flex items-center gap-6 mb-8">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${currentStoryData.color} flex items-center justify-center text-white font-bold text-2xl`}>
                {currentStoryData.logo}
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">{currentStoryData.company}</h3>
                <p className="text-gray-300 text-lg">{currentStoryData.industry}</p>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Challenge & Solution */}
              <div>
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-red-400" />
                    Challenge
                  </h4>
                  <p className="text-gray-300 leading-relaxed">{currentStoryData.challenge}</p>
                </div>
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Brain className="w-5 h-5 text-green-400" />
                    Solution
                  </h4>
                  <p className="text-gray-300 leading-relaxed">{currentStoryData.solution}</p>
                </div>
                {/* Testimonial */}
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-6 border border-purple-500/30">
                  <Quote className="w-8 h-8 text-purple-400 mb-4" />
                  <p className="text-gray-300 italic mb-4">"{currentStoryData.testimonial.content}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">{currentStoryData.testimonial.name}</div>
                      <div className="text-sm text-gray-400">{currentStoryData.testimonial.role}</div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(currentStoryData.testimonial.rating)].map((_i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Results & Metrics */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  Results
                </h4>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/30">
                    <div className="text-2xl font-bold text-green-400 mb-1">{currentStoryData.results.efficiency}</div>
                    <div className="text-sm text-gray-300">Efficiency Increase</div>
                  </div>
                  <div className="p-4 rounded-lg bg-blue-500/20 border border-blue-500/30">
                    <div className="text-2xl font-bold text-blue-400 mb-1">{currentStoryData.results.costSavings}</div>
                    <div className="text-sm text-gray-300">Cost Savings</div>
                  </div>
                  <div className="p-4 rounded-lg bg-purple-500/20 border border-purple-500/30">
                    <div className="text-2xl font-bold text-purple-400 mb-1">{currentStoryData.results.timeSaved}</div>
                    <div className="text-sm text-gray-300">Time Saved</div>
                  </div>
                  <div className="p-4 rounded-lg bg-yellow-500/20 border border-yellow-500/30">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">{currentStoryData.results.roi}</div>
                    <div className="text-sm text-gray-300">ROI</div>
                  </div>
                </div>
                {/* Key Metrics */}
                <div className="space-y-3">
                  {currentStoryData.metrics.map((metricindex) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex items-center gap-3">
                        <metric.icon className="w-5 h-5 text-purple-400" />
                        <span className="text-gray-300">{metric.label}</span>
                      </div>
                      <span className="text-white font-semibold">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Timeline */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                Implementation Timeline
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {currentStoryData.timeline.map((itemindex) => (
                  <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      {getStatusIcon(item.status)}
                      <span className="text-sm font-semibold text-white">{item.month}</span>
                    </div>
                    <div className="text-sm text-gray-300">{item.milestone}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already achieving extraordinary results with our 
              revolutionary AI and automation solutions. Your transformation starts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                Start Your Journey
              </button>
              <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};


export default BusinessSuccessStories2027;
