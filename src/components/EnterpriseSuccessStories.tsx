import React from 'react';
const EnterpriseSuccessStories: React.FC = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Enterprise Success Stories
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Real Results from
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Real Companies
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how leading enterprises have transformed their operations and achieved unprecedented growth with our AI solutions.
          </p>
        </div>
        {/* Key Metrics */}
        <div
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {keyMetrics.map((metricindex) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-lg font-semibold text-purple-300 mb-1">{metric.label}</div>
              <div className="text-sm text-gray-400">{metric.description}</div>
            </div>
          ))}
        </div>
        {/* Story Navigation */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {successStories.map((storyindex) => (
            <button
              key={story.id}
              onClick={() => setActiveStory(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeStory === index
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {story.company}
            </button>
          ))}
        </div>
        {/* Active Story Display */}
        <div
          key={activeStory}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16"
        >
          {/* Story Header */}
          <div className={`h-64 bg-gradient-to-br ${successStories[activeStory].color} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 h-full flex items-center justify-center p-8">
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{successStories[activeStory].logo}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  {successStories[activeStory].company}
                </h3>
                <p className="text-lg opacity-90">
                  {successStories[activeStory].industry} • {successStories[activeStory].size}
                </p>
              </div>
            </div>
          </div>
          {/* Story Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Challenge & Solution */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Challenge</h4>
                <p className="text-gray-600 mb-6">{successStories[activeStory].challenge}</p>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Solution</h4>
                <p className="text-gray-600">{successStories[activeStory].solution}</p>
              </div>
              {/* Results */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Results</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Cost Reduction</span>
                    <span className="font-bold text-green-600 text-lg">{successStories[activeStory].results.costReduction}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Efficiency Gain</span>
                    <span className="font-bold text-blue-600 text-lg">{successStories[activeStory].results.efficiencyGain}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Time Saved</span>
                    <span className="font-bold text-purple-600 text-lg">{successStories[activeStory].results.timeSaved}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">ROI</span>
                    <span className="font-bold text-orange-600 text-lg">{successStories[activeStory].results.roi}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Quote */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <Quote className="w-8 h-8 text-gray-400 mb-4" />
              <p className="text-lg text-gray-700 italic mb-4">
                "{successStories[activeStory].quote}"
              </p>
              <p className="font-semibold text-gray-900">— {successStories[activeStory].author}</p>
            </div>
          </div>
        </div>
        {/* Benefits Section */}
        <div
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Why Our Solutions Deliver Results
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefitindex) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        {/* CTA Section */}
        <div
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let us help you achieve similar results with our proven AI solutions and expert implementation team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
                Start Your Transformation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EnterpriseSuccessStories;