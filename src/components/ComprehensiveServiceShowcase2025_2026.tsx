import React from 'react';

const ComprehensiveServiceShowcase2025_2026: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">ComprehensiveServiceShowcase2025_2026</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
=======
    <div className="w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      {/* Header */}
      <div
        className="text-center py-16 px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Services 2025-2026
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Comprehensive AI solutions designed to transform your business and accelerate growth in the digital age.
        </p>
      </div>

      {/* Service Navigation */}
      <div
        className="container mx-auto px-4 mb-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((serviceindex) => {
            const Icon = service.icon;
            return (
              <divbutton
                key={service.id}
                onClick={() => setActiveService(service.id)}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className={`p-4 rounded-2xl border transition-all duration-300 ${
                  activeService === service.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-purple-400 text-white'
                    : 'bg-slate-800/50 border-white/20 text-gray-300 hover:border-purple-400/50 hover:text-white'
                }`}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    activeService === service.id
                      ? 'bg-white/20'
                      : 'bg-slate-700/50'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-sm">{service.title}</div>
                    <div className="text-xs opacity-80">{service.subtitle}</div>
                  </div>
                </div>
              </divbutton>
            );
          })}
        </div>
      </div>

      {/* Service Details */}
      <div
        key={activeService}
        className="container mx-auto px-4 mb-16"
      >
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Service Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">
                {currentService.title}
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                {currentService.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentService.features.map((featureindex) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-white/20"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us</h3>
              <div className="space-y-4">
                {currentService.benefits.map((benefitindex) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3"
                  >
                    <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="space-y-8">
            {/* Pricing */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Pricing Plans</h3>
              <div className="space-y-4">
                {Object.entries(currentService.pricing).map(([planprice]) => (
                  <div key={plan} className="flex justify-between items-center p-4 bg-slate-700/50 rounded-xl">
                    <span className="text-gray-300 capitalize font-medium">{plan}</span>
                    <span className="text-white font-bold text-lg">{price}</span>
                  </div>
                ))}
              </div>
              <button className={`w-full mt-6 bg-gradient-to-r ${currentService.color} text-white py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2`}>
                <ArrowRight className="w-5 h-5" />
                Get Started
              </button>
            </div>

            {/* Case Studies */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Success Stories</h3>
              <div className="space-y-6">
                {currentService.caseStudies.map((studyindex) => (
                  <div
                    key={index}
                    className="p-4 bg-slate-700/50 rounded-xl"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-white">{study.company}</span>
                      <span className="text-green-400 font-bold">{study.result}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{study.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border-t border-white/20 py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our AI solutions to revolutionize their operations and achieve unprecedented growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <divbutton
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full text-xl font-semibold flex items-center gap-3 hover:shadow-2xl transition-all duration-300"
            >
              <Rocket className="w-6 h-6" />
              Start Your AI Journey
            </divbutton>
            <divbutton
              className="border-2 border-white text-white px-12 py-4 rounded-full text-xl font-semibold flex items-center gap-3 hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              <Users className="w-6 h-6" />
              Schedule Consultation
            </divbutton>
          </div>
        </div>
      </div>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
    </div>
  );
};

export default ComprehensiveServiceShowcase2025_2026;
</div></div></div>