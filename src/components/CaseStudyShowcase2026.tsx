import React from 'react';
const CaseStudyShowcase2026: React.FC = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Success Stories 2026
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Real Results from
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Real Companies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how leading companies across industries have transformed their operations and achieved remarkable results using our AI and technology solutions.
          </p>
        </div>
        {/* Industry Filter */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(industries).map(([keyindustry]) => {
            const Icon = industry.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveIndustry(key)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeIndustry === key
                    ? `bg-gradient-to-r ${industry.color} text-white shadow-lg transform scale-105`
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {industry.title}
              </button>
            );
};
          })}
        </div>
        {/* Case Studies Grid */}
          <div
            key={activeIndustry}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCaseStudies.map((caseStudyindex) => (
              <div
                key={caseStudy.id}
                onHoverStart={() => setHoveredCase(caseStudy.id)}
                onHoverEnd={() => setHoveredCase(null)}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Featured Badge */}
                {caseStudy.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                )}
                {/* Trending Badge */}
                {caseStudy.trending && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-full flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </span>
                  </div>
                )}
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                {/* Content */}
                <div className="p-6">
                  {/* Company */}
                  <div className="text-sm text-blue-600 font-medium mb-2">
                    {caseStudy.company}
                  </div>
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {caseStudy.title}
                  </h3>
                  {/* Challenge */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Challenge:</h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {caseStudy.challenge}
                    </p>
                  </div>
                  {/* Solution */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Solution:</h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {caseStudy.solution}
                    </p>
                  </div>
                  {/* Results */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Results:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(caseStudy.results).slice(04).map(([keyvalue]idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-bold text-green-600">{value}</div>
                          <div className="text-xs text-gray-600 capitalize">
                            {key.replace(/([A-Z])/g' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {caseStudy.technologies.slice(03).map((techidx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {caseStudy.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          +{caseStudy.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{caseStudy.duration}</span>
                    <span>•</span>
                    <span>{caseStudy.teamSize}</span>
                  </div>
                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                {/* Hover Overlay */}
                <div
                    opacity: hoveredCase === caseStudy.id ? 1 : 0 
                  }}
                  className="absolute inset-0 bg-gradient-to-t from-blue-600/90 to-purple-600/90 flex items-center justify-center"
                >
                  <div className="text-center text-white p-6">
                    <h4 className="text-xl font-bold mb-2">Read Full Case Study</h4>
                    <p className="text-sm mb-4">Discover the complete story of this transformation</p>
                    <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Call to Action */}
        <div
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join hundreds of companies that have transformed their operations with our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center">
                <Star className="w-5 h-5 mr-2" />
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

export default CaseStudyShowcase2026;