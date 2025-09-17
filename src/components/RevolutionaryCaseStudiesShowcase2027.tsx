import React from 'react';
const RevolutionaryCaseStudiesShowcase2027: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Revolutionary Case Studies 2027
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Proven Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how leading organizations achieved extraordinary results through our AI-powered solutions. 
            Real projectsreal resultsreal transformation.
          </p>
        </div>
        {/* Overall Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {overallStats.map((statindex) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-gray-900" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
        {/* Case Study Navigation */}
        <div
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {caseStudies.map((caseStudyindex) => (
              <button
                key={caseStudy.id}
                onClick={() => setActiveCase(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCase === index
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {caseStudy.company}
              </button>
            ))}
          </div>
        </div>
        {/* Case Study Content */}
          <div
            key={activeCase}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Details */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{caseStudies[activeCase].company}</h3>
                    <p className="text-gray-300">{caseStudies[activeCase].industry} • {caseStudies[activeCase].duration}</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300">{caseStudies[activeCase].challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300">{caseStudies[activeCase].solution}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Key Highlights</h4>
                    <ul className="space-y-2">
                      {caseStudies[activeCase].highlights.map((highlightindex) => (
                        <li key={index} className="flex items-start gap-2 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudies[activeCase].technologies.map((techindex) => (
                        <span key={index} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Column - Results & Testimonial */}
              <div>
                {/* Results Metrics */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-white mb-6">Results</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {caseStudies[activeCase].metrics.map((metricindex) => (
                      <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                        <metric.icon className={`w-8 h-8 ${metric.color} mx-auto mb-2`} />
                        <div className="text-2xl font-bold text-white">{metric.value}</div>
                        <div className="text-gray-300 text-sm">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Testimonial */}
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={caseStudies[activeCase].testimonial.avatar}
                      alt={caseStudies[activeCase].testimonial.author}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-white">{caseStudies[activeCase].testimonial.author}</div>
                      <div className="text-gray-300 text-sm">{caseStudies[activeCase].testimonial.position}</div>
                    </div>
                  </div>
                  <blockquote className="text-gray-300 italic">
                    "{caseStudies[activeCase].testimonial.quote}"
                  </blockquote>
                </div>
                {/* Action Buttons */}
                <div className="flex gap-4 mt-6">
                  <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    View Case Study
                  </button>
                  <button className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-gray-900">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have transformed their business with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gray-900 text-white py-4 px-8 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2">
                <ArrowRight className="w-5 h-5" />
                Start Your Project
              </button>
              <button className="bg-white/20 text-gray-900 py-4 px-8 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2">
                <ExternalLink className="w-5 h-5" />
                View All Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default RevolutionaryCaseStudiesShowcase2027;
