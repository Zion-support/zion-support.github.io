import React from 'react';

const ComprehensiveAIServicesShowcase2025: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">ComprehensiveAIServicesShowcase2025</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
=======
    <divsection
      className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%20width%253D%252260%2522%20height%253D%252260%2522%20viewBox%253D%25220%25200%252060%252060%2522%20xmlns%253D%2522http%253A%2F%2Fwww.w3.org%2F2000%2Fsvg%2522%253E%253Cg%20fill%253D%2522none%2522%20fill-rule%253D%2522evenodd%2522%253E%253Cg%20fill%253D%2522%25239C92AC%2522%20fill-opacity%253D%25220.1%2522%253E%253Ccircle%20cx%253D%252230%2522%20cy%253D%252230%2522%20r%253D%25222%2522%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Cpu className="w-4 h-4 text-blue-400" />
            <span>Comprehensive AI Services</span>
            <Award className="w-4 h-4 text-yellow-400" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Transform Your Business with
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
              AI-Powered Solutions
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive suite of AI services designed to accelerate growth
            improve efficiencyand drive innovation across every aspect of your business.
          </p>
        </div>

        {/* Service Navigation */}
          {services.map((serviceindex) => (
            <button
              key={service.id}
              onClick={() => setActiveService(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeService === index
                  ? 'bg-white text-indigo-900 shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {service.icon}
              <span className="ml-2">{service.title}</span>
            </button>
          ))}
        </div>

        {/* Active Service Details */}
        <div
          key={activeService}
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Service Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white">
                  {services[activeService].icon}
                </div>
                <div>
                  <span className="px-3 py-1 bg-white/20 text-white text-sm font-semibold rounded-full">
                    {services[activeService].category}
                  </span>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">
                {services[activeService].title}
              </h3>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {services[activeService].description}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-white font-semibold">{services[activeService].rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-semibold">{services[activeService].clients.toLocaleString()}+ clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-white font-semibold">Proven ROI</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={services[activeService].link}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <Rocket className="w-5 h-5" />
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-900 transition-all duration-300 flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
                <button className="bg-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  <span>Download Brochure</span>
                </button>
              </div>
            </div>

            {/* Features and Benefits */}
            <div className="space-y-8">
              {/* Features */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  Key Features
                </h4>
                <div className="space-y-3">
                  {services[activeService].features.map((featureindex) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-400" />
                  Business Benefits
                </h4>
                <div className="space-y-3">
                  {services[activeService].benefits.map((benefitindex) => (
                    <div key={index} className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-300 text-sm">Starting from</span>
                    <div className="text-2xl font-bold text-white">{services[activeService].pricing}</div>
                  </div>
                  <a
                    href="/pricing"
                    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                  >
                    <span>View Pricing</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Services Grid */}
          {services.map((serviceindex) => (
            <div
              key={service.id}
              className="group"
            >
              <a href={service.link}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-white/20 text-white text-xs font-semibold rounded-full">
                          {service.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white text-sm font-semibold">{service.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <div className="text-sm text-gray-300">
                      <span className="font-semibold text-white">{service.clients.toLocaleString()}+</span> clients
                    </div>
                    <ArrowRight className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Join thousands of companies already using our AI services to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Users className="w-5 h-5" />
                <span>Schedule Consultation</span>
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-900 transition-all duration-300 flex items-center gap-2"
              >
                <Globe className="w-5 h-5" />
                <span>Explore All Services</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </divsection>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
  );
};

export default ComprehensiveAIServicesShowcase2025;