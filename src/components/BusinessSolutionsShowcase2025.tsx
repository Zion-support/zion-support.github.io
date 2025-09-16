import React from 'react';

const BusinessSolutionsShowcase2025: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">BusinessSolutionsShowcase2025</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
=======
    <divsection
      className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
          <div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 text-sm font-medium mb-4"
          >
            <Building2 className="w-4 h-4 mr-2" />
            Business Solutions 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Business Operations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover comprehensive business solutions that drive growthefficiencyand innovation 
            across every aspect of your organization.
          </p>
        </div>

        {/* Category Navigation */}
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            {categories.map((categoryindex) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(index)}
                  className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeCategory === index
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {category.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Solutions Grid */}
          <div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentCategory.solutions.map((solutionindex) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group"
              >
                {/* Header */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${currentCategory.color} flex items-center justify-center mb-4`}>
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {solution.features.map((featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">{solution.roi}</div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{solution.timeToValue}</div>
                    <div className="text-xs text-gray-500">Time to Value</div>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 flex items-center justify-center group">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Proven Results</h3>
              <p className="text-lg opacity-90">
                Join thousands of businesses that have transformed their operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <div className="text-sm opacity-80">Companies Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">$2.5B+</div>
                <div className="text-sm opacity-80">Cost Savings Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-sm opacity-80">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Get started with our comprehensive business solutions today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-600 transition-colors flex items-center justify-center">
                <Lightbulb className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border-2 border-indigo-500 text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-colors flex items-center justify-center">
                <Globe className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </divsection>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
  );
};

export default BusinessSolutionsShowcase2025;