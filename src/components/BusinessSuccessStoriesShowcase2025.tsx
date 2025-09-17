import React from 'react';
const BusinessSuccessStoriesShowcase2025: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-green-50 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-green-400/20 to-blue-400/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-green-900 to-blue-900 bg-clip-text text-transparent mb-6">
            Business Success Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover how leading companies across industries have transformed their operations and achieved unprecedented growth with our AI and technology solutions.
          </p>
        </div>
        {/* Overall Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {overallStats.map((statindex) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="flex justify-center mb-3">
                <stat.icon className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
        {/* Success Stories Navigation */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {successStories.map((storyindex) => (
            <button
              key={story.id}
              onClick={() => setActiveStory(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeStory === index
                  ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                  : 'bg-white text-slate-600 hover:bg-green-50 hover:text-green-600 border border-slate-200'
              }`}
            >
              {story.company}
            </button>
          ))}
        </div>
        {/* Active Success Story */}
          <div
            key={activeStory}
            className="bg-white rounded-3xl p-8 shadow-xl mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Story Details */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-green-600">{successStories[activeStory].logo}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{successStories[activeStory].company}</h3>
                    <p className="text-slate-600">{successStories[activeStory].industry} Industry</p>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-2">Challenge:</h4>
                  <p className="text-slate-600 mb-4">{successStories[activeStory].challenge}</p>
                  <h4 className="font-semibold text-slate-900 mb-2">Solution:</h4>
                  <p className="text-slate-600 mb-4">{successStories[activeStory].solution}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {successStories[activeStory].metrics.map((metricindex) => (
                    <div key={index} className="text-center p-4 bg-slate-50 rounded-xl">
                      <metric.icon className={`w-6 h-6 mx-auto mb-2 ${metric.color}`} />
                      <div className="text-2xl font-bold text-slate-900">{metric.value}</div>
                      <div className="text-sm text-slate-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Testimonial */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-slate-700 mb-6 italic text-lg leading-relaxed">
                  "{successStories[activeStory].testimonial.content}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-slate-900">{successStories[activeStory].testimonial.name}</div>
                    <div className="text-sm text-slate-600">{successStories[activeStory].testimonial.role}</div>
                  </div>
                  <div className="flex items-center">
                    {[...Array(successStories[activeStory].testimonial.rating)].map((_i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Results Summary */}
        <div
          className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Proven Results Across Industries</h3>
            <p className="text-xl opacity-90">
              Our solutions have delivered measurable results for companies of all sizes and industries.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">350%</div>
              <div className="text-green-100">Average ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2.5M+</div>
              <div className="text-green-100">Hours Saved</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$50M+</div>
              <div className="text-green-100">Cost Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-green-100">Success Rate</div>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Ready to Write Your Success Story?</h3>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already using our solutions to drive growthefficiencyand innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              View Case Studies
            </button>
            <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 flex items-center justify-center group">
              <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default BusinessSuccessStoriesShowcase2025;
</div></div>