import React from 'react';
import Link from 'next/link';

const NewContentShowcase2025: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BarChart3 className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">New Content 2025</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest AI guides, case studies, and resources that are helping Fortune 500 companies achieve 900%+ ROI
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Content Type Badge */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="capitalize">{item.type.replace('-', ' ')}</span>
                  </div>
                  {item.featured && (
                    <div className="flex items-center space-x-1 text-yellow-600">
                      <Award className="w-4 h-4" />
                      <span className="text-sm font-medium">Featured</span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(item.metrics).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <div>
                        <div className="text-xs text-gray-500 capitalize">
                          {key === 'roi' && 'ROI'}
                          {key === 'savings' && 'Savings'}
                          {key === 'accuracy' && 'Accuracy'}
                          {key === 'speed' && 'Speed'}
                          {key === 'efficiency' && 'Efficiency'}
                          {key === 'errors' && 'Error Reduction'}
                          {key === 'timeframe' && 'Timeline'}
                          {key === 'company' && 'Company Size'}
                          {key === 'success' && 'Success Rate'}
                          {key === 'enterprises' && 'Enterprises'}
                        </div>
                        <div className="text-sm font-bold text-gray-900">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Reading Time */}
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4" />
                  <span>{item.readingTime}</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="px-6 pb-6">
                <Link
                  href={item.url}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 group"
                >
                  <span>Read Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Achieve 900%+ ROI?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join 500+ Fortune 500 companies that have transformed their business with our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                <Target className="w-5 h-5" />
                <span>Schedule Consultation</span>
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
              >
                <Zap className="w-5 h-5" />
                <span>View All Success Stories</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2025;