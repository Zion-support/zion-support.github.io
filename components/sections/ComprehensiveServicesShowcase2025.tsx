import React from 'react';

const _ComprehensiveServicesShowcase2025 = () => {_const _serviceCategories = [
    {
      title: 'AI & Automation Services', _icon: Brain, _services: advancedAIAutomation2025, _gradient: 'from-purple-600 via-pink-600 to-blue-600', _description: 'Cutting-edge AI solutions that transform business operations'},
    {_title: 'Cybersecurity & Security', _icon: Shield, _services: advancedCybersecurity2025, _gradient: 'from-red-600 via-orange-600 to-yellow-600', _description: 'Advanced security solutions for the digital age'},
    {_title: 'Blockchain & Web3', _icon: Globe, _services: blockchainWeb32025, _gradient: 'from-green-600 via-teal-600 to-cyan-600', _description: 'Next-generation blockchain and decentralized solutions'},
    {_title: 'IoT & Edge Computing', _icon: Cloud, _services: iotEdgeComputing2025, _gradient: 'from-blue-600 via-indigo-600 to-purple-600', _description: 'Smart connected solutions for the Internet of Things'},
    {_title: 'Healthcare & Biotechnology', _icon: Target, _services: healthcareBiotech2025, _gradient: 'from-pink-600 via-rose-600 to-red-600', _description: 'Innovative healthcare and biotech solutions'},
    {_title: 'Fintech & Financial', _icon: DollarSign, _services: fintechFinancial2025, _gradient: 'from-emerald-600 via-green-600 to-teal-600', _description: 'Revolutionary financial technology solutions'},
    {_title: 'Education & E-Learning', _icon: Award, _services: educationElearning2025, _gradient: 'from-amber-600 via-yellow-600 to-orange-600', _description: 'Advanced learning and educational technology'}
  ];

  const _containerVariants = {_hidden: { opacity: 0},
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  };

  const _itemVariants = {_hidden: { y: 20, _opacity: 0},
    visible: {_y: 0, _opacity: 1, _transition: {
        duration: 0.5}
    }
  };

  return (_<section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {_/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {_/* Header */}
        <motion.div
          initial={_{ opacity: 0, _y: 30}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.8}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
            Revolutionary 2025 Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of cutting-edge micro SAAS services, _IT solutions, _and AI innovations designed to transform your business and drive success in the digital age.
          </p>
        </motion.div>

        {_/* Service Categories */}
        <motion.div
          variants={_containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={_{ once: true}}
          className="space-y-16"
        >
          {_serviceCategories.map((category, _categoryIndex) => (_<motion.div
              key={category.title}
              variants={_itemVariants}
              className="relative"
            >
              {_/* Category Header */}
              <div className="flex items-center mb-8">
                <div className={_`p-3 rounded-xl bg-gradient-to-r ${category.gradient} mr-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {_category.title}
                  </h3>
                  <p className="text-gray-400 text-lg">
                    {_category.description}
                  </p>
                </div>
              </div>

              {_/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {_category.services.map((service, _serviceIndex) => (
                  <motion.div
                    key={service.id}
                    initial={_{ opacity: 0, _scale: 0.9}}
                    whileInView={_{ opacity: 1, _scale: 1}}
                    transition={_{ duration: 0.5, _delay: serviceIndex * 0.1}}
                    className="group relative bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:shadow-xl hover:shadow-cyan-500/30"
                  >
                    {_/* Service Header */}
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {_service.name}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {_service.description}
                      </p>
                    </div>

                    {_/* Features */}
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-purple-300 mb-2">Key Features:</h5>
                      <ul className="space-y-1">
                        {_service.features?.slice(0, _3).map(_(feature, _featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-xs text-gray-400">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {_feature}
                          </li>
                        ))}
                        {_service.features && service.features.length > 3 && (
                          <li className="text-xs text-gray-500 italic">
                            +{service.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {_/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Starting from:</span>
                        <span className="text-lg font-bold text-green-400">
                          {_service.price}{_service.period}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Market position: {_service.marketPosition}
                      </div>
                    </div>

                    {_/* ROI */}
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-purple-300 mb-2">ROI & Benefits:</h5>
                      <div className="text-xs text-gray-400">
                        <div className="flex items-center mb-1">
                          <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                          {_service.roi}
                        </div>
                        <div className="text-xs text-gray-500">
                          Setup time: {_service.setupTime}
                        </div>
                      </div>
                    </div>

                    {_/* Use Cases */}
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-purple-300 mb-2">Perfect for:</h5>
                      <div className="flex flex-wrap gap-1">
                        {_service.useCases?.slice(0, _3).map(_(useCase, _useCaseIndex) => (
                          <span
                            key={useCaseIndex}
                            className="px-2 py-1 bg-slate-700/50 text-xs text-gray-300 rounded-full"
                          >
                            {_useCase}
                          </span>
                        ))}
                      </div>
                    </div>

                    {_/* CTA Button */}
                    <div className="mt-6">
                      <a
                        href={_service.link}
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>

                    {_/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {_/* Call to Action */}
        <motion.div
          initial={_{ opacity: 0, _y: 30}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.8, _delay: 0.5}}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging our cutting-edge solutions to drive innovation, efficiency, and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30"
              >
                Get Started Today
                <Rocket className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center justify-center px-8 py-3 bg-slate-700/50 text-white font-semibold rounded-xl hover:bg-slate-600/50 transition-all duration-200 border border-slate-600"
              >
                Call +1 302 464 0950
                <Phone className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComprehensiveServicesShowcase2025;