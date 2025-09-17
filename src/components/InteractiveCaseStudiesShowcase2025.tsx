import React from 'react';
const InteractiveCaseStudiesShowcase2025: React.FC = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results from
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              AI Transformation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how leading companies are achieving remarkable results with our AI solutions. 
            See the measurable impact on their business.
          </p>
        </div>
        {/* Industry Filter */}
        <div
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => {
                setFilter(industry.id);
                setActiveStudy(0);
              }}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                filter === industry.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {industry.name}
              <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                {industry.count}
              </span>
            </button>
          ))}
        </div>
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Case Study Details */}
          <div
            key={currentStudy?.id}
            className="space-y-8"
          >
            {/* Company Header */}
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center mb-2">
                  <Building2 className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-500 uppercase tracking-wide">
                    {currentStudy?.industry}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {currentStudy?.title}
                </h3>
                <p className="text-xl text-gray-600">
                  {currentStudy?.company}
                </p>
              </div>
              {currentStudy?.featured && (
                <div className="flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                  <Star className="w-4 h-4 mr-1" />
                  Featured
                </div>
              )}
            </div>
            {/* Challenge & Solution */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-red-500" />
                  Challenge
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {currentStudy?.challenge}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-blue-500" />
                  Solution
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {currentStudy?.solution}
                </p>
              </div>
            </div>
            {/* Results Grid */}
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(currentStudy?.results || {}).map(([keyvalue]) => (
                <div key={key} className="bg-white p-4 rounded-xl border border-gray-100">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    {value}
                  </div>
                  <div className="text-sm text-gray-600 capitalize">
                    {key.replace(/([A-Z])/g' $1').trim()}
                  </div>
                </div>
              ))}
            </div>
            {/* Technologies */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentStudy?.technologies.map((techindex) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {/* Project Details */}
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {currentStudy?.duration}
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {currentStudy?.teamSize} team members
              </div>
            </div>
          </div>
          {/* Visual Content */}
          <div
            key={`visual-${currentStudy?.id}`}
            className="space-y-6"
          >
            {/* Image/Video */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm mb-4 mx-auto">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-medium">Case Study Video</p>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors"
                >
                  <Play className={`w-5 h-5 ${isPlaying ? 'text-red-500' : 'text-gray-700'}`} />
                </button>
              </div>
            </div>
            {/* Testimonial */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <Quote className="w-8 h-8 text-blue-500 mb-4" />
              <p className="text-gray-700 italic mb-4 leading-relaxed">
                "{currentStudy?.testimonial.text}"
              </p>
              <div className="flex items-center">
                <img
                  src={currentStudy?.testimonial.avatar}
                  alt={currentStudy?.testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {currentStudy?.testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {currentStudy?.testimonial.position}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Navigation */}
        <div
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center mt-12 space-x-4"
        >
          <button
            onClick={() => setActiveStudy(Math.max(0activeStudy - 1))}
            disabled={activeStudy === 0}
            className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowRight className="w-5 h-5 text-gray-600 rotate-180" />
          </button>
          <div className="flex space-x-2">
            {filteredStudies.map((_index) => (
              <button
                key={index}
                onClick={() => setActiveStudy(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeStudy ? 'bg-green-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setActiveStudy(Math.min(filteredStudies.length - 1activeStudy + 1))}
            disabled={activeStudy === filteredStudies.length - 1}
            className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        {/* CTA Section */}
        <div
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Join the companies already transforming their business with AI. 
              'Let', 's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View All Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

export default InteractiveCaseStudiesShowcase2025;