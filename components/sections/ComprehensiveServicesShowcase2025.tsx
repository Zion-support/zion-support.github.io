<<<<<<< HEAD
import React from 'react',
import { motion } from 'framer-motion',
import { CheckCircle, ArrowRight, Star, TrendingUp, Zap, Shield, Globe, Brain, Database, Cloud, Lock, Rocket, Users, DollarSign, Target, Award, Phone } from 'lucide-react',
import { advancedAIAutomation2025 } from '../../data/advanced-ai-automation-2025',
import { advancedCybersecurity2025 } from '../../data/advanced-cybersecurity-2025',
import { blockchainWeb32025 } from '../../data/blockchain-web3-2025',
import { iotEdgeComputing2025 } from '../../data/iot-edge-computing-2025',
import { healthcareBiotech2025 } from '../../data/healthcare-biotech-2025',
import { fintechFinancial2025 } from '../../data/fintech-financial-2025',
import { educationElearning2025 } from '../../data/education-elearning-2025',
const ComprehensiveServicesShowcase2025 = () => {
  const serviceCategories = [
    {
      title: 'AI & Automation Services',
      icon: Brain,
      services: advancedAIAutomation2025,
      gradient: 'from-purple-600 via-pink-600 to-blue-600',
      description: 'Cutting-edge AI solutions that transform business operations'
    },
    {
      title: 'Cybersecurity & Security',
      icon: Shield,
      services: advancedCybersecurity2025,
      gradient: 'from-red-600 via-orange-600 to-yellow-600',
      description: 'Advanced security solutions for the digital age'
    },
    {
      title: 'Blockchain & Web3',
      icon: Globe,
      services: blockchainWeb32025,
      gradient: 'from-green-600 via-teal-600 to-cyan-600',
      description: 'Next-generation blockchain and decentralized solutions'
    },
    {
      title: 'IoT & Edge Computing',
      icon: Cloud,
      services: iotEdgeComputing2025,
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
      description: 'Smart connected solutions for the Internet of Things'
    },
    {
      title: 'Healthcare & Biotechnology',
      icon: Target,
      services: healthcareBiotech2025,
      gradient: 'from-pink-600 via-rose-600 to-red-600',
      description: 'Innovative healthcare and biotech solutions'
    },
    {
      title: 'Fintech & Financial',
      icon: DollarSign,
      services: fintechFinancial2025,
      gradient: 'from-emerald-600 via-green-600 to-teal-600',
      description: 'Revolutionary financial technology solutions'
    },
    {
      title: 'Education & E-Learning',
      icon: Award,
      services: educationElearning2025,
      gradient: 'from-amber-600 via-yellow-600 to-orange-600',
      description: 'Advanced learning and educational technology'
    }
  ],
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _containerVariants = {_hidden: { opacity: 0},
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  },

  const _itemVariants = {_hidden: { y: 20, _opacity: 0},
    visible: {_y: 0, _opacity: 1, _transition: {
        duration: 0.5}
    }
  },

<<<<<<< HEAD
  return (
    <section className=&quot;relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden&quot;>
      {/* Animated Background Elements */}
      <div className=&quot;absolute inset-0 overflow-hidden&quot;>
        <div className=&quot;absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob&quot;></div>
        <div className=&quot;absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000&quot;></div>
        <div className=&quot;absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000&quot;></div>
      </div>

      <div className=&quot;relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=&quot;text-center mb-16&quot;
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <h2 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6&quot;>
            Revolutionary 2025 Services
          </h2>
<<<<<<< HEAD
          <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed&quot;>
            Discover our comprehensive suite of cutting-edge micro SAAS services, IT solutions, and AI innovations designed to transform your business and drive success in the digital age.
=======
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of cutting-edge micro SAAS services, _IT solutions, _and AI innovations designed to transform your business and drive success in the digital age.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </p>
        </motion.div>

        {_/* Service Categories */}
        <motion.div
<<<<<<< HEAD
          variants={containerVariants}
          initial=&quot;hidden&quot;
          whileInView=&quot;visible&quot;
          viewport={{ once: true }}
          className=&quot;space-y-16&quot;
=======
          variants={_containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={_{ once: true}}
          className="space-y-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          {_serviceCategories.map((category, _categoryIndex) => (_<motion.div
              key={category.title}
<<<<<<< HEAD
              variants={itemVariants}
              className=&quot;relative&quot;
            >
              {/* Category Header */}
              <div className=&quot;flex items-center mb-8&quot;>
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} mr-4`}>
                  <category.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <div>
                  <h3 className=&quot;text-3xl font-bold text-white mb-2&quot;>
                    {category.title}
                  </h3>
                  <p className=&quot;text-gray-400 text-lg&quot;>
                    {category.description}
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </p>
                </div>
              </div>

<<<<<<< HEAD
              {/* Services Grid */}
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                    className=&quot;group relative bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:shadow-xl hover:shadow-cyan-500/30&quot;
                  >
                    {/* Service Header */}
                    <div className=&quot;mb-4&quot;>
                      <h4 className=&quot;text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors&quot;>
                        {service.name}
                      </h4>
                      <p className=&quot;text-gray-400 text-sm leading-relaxed&quot;>
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className=&quot;mb-4&quot;>
                      <h5 className=&quot;text-sm font-medium text-purple-300 mb-2&quot;>Key Features:</h5>
                      <ul className=&quot;space-y-1&quot;>
                        {service.features?.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className=&quot;flex items-center text-xs text-gray-400&quot;>
                            <CheckCircle className=&quot;w-3 h-3 text-green-400 mr-2 flex-shrink-0&quot; />
                            {feature}
                          </li>
                        ))}
                        {service.features && service.features.length > 3 && (
                          <li className=&quot;text-xs text-gray-500 italic&quot;>
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            +{service.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

<<<<<<< HEAD
                    {/* Pricing */}
                    <div className=&quot;mb-4&quot;>
                      <div className=&quot;flex items-center justify-between&quot;>
                        <span className=&quot;text-sm text-gray-400&quot;>Starting from:</span>
                        <span className=&quot;text-lg font-bold text-green-400&quot;>
                          {service.price}{service.period}
                        </span>
                      </div>
                      <div className=&quot;text-xs text-gray-500 mt-1&quot;>
                        Market position: {service.marketPosition}
                      </div>
                    </div>

                    {/* ROI */}
                    <div className=&quot;mb-4&quot;>
                      <h5 className=&quot;text-sm font-medium text-purple-300 mb-2&quot;>ROI & Benefits:</h5>
                      <div className=&quot;text-xs text-gray-400&quot;>
                        <div className=&quot;flex items-center mb-1&quot;>
                          <TrendingUp className=&quot;w-3 h-3 text-blue-400 mr-2 flex-shrink-0&quot; />
                          {service.roi}
                        </div>
                        <div className=&quot;text-xs text-gray-500&quot;>
                          Setup time: {service.setupTime}
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </div>
                      </div>
                    </div>

<<<<<<< HEAD
                    {/* Use Cases */}
                    <div className=&quot;mb-4&quot;>
                      <h5 className=&quot;text-sm font-medium text-purple-300 mb-2&quot;>Perfect for:</h5>
                      <div className=&quot;flex flex-wrap gap-1&quot;>
                        {service.useCases?.slice(0, 3).map((useCase, useCaseIndex) => (
=======
                    {_/* Use Cases */}
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-purple-300 mb-2">Perfect for:</h5>
                      <div className="flex flex-wrap gap-1">
                        {_service.useCases?.slice(0, _3).map(_(useCase, _useCaseIndex) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          <span
                            key={useCaseIndex}
                            className=&quot;px-2 py-1 bg-slate-700/50 text-xs text-gray-300 rounded-full&quot;
                          >
                            {_useCase}
                          </span>
                        ))}
                      </div>
                    </div>

<<<<<<< HEAD
                    {/* CTA Button */}
                    <div className=&quot;mt-6&quot;>
                      <a
                        href={service.link}
                        className=&quot;inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30&quot;
=======
                    {_/* CTA Button */}
                    <div className="mt-6">
                      <a
                        href={_service.link}
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      >
                        Learn More
                        <ArrowRight className=&quot;w-4 h-4 ml-2&quot; />
                      </a>
                    </div>

<<<<<<< HEAD
                    {/* Hover Effect Overlay */}
                    <div className=&quot;absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none&quot; />
=======
                    {_/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {_/* Call to Action */}
        <motion.div
<<<<<<< HEAD
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className=&quot;text-center mt-20&quot;
=======
          initial={_{ opacity: 0, _y: 30}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.8, _delay: 0.5}}
          className="text-center mt-20"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <div className=&quot;bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30&quot;>
            <h3 className=&quot;text-3xl font-bold text-white mb-4&quot;>
              Ready to Transform Your Business?
            </h3>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
              Join thousands of businesses already leveraging our cutting-edge solutions to drive innovation, efficiency, and growth.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
=======
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              <a
                href=&quot;https://ziontechgroup.com/contact&quot;
                className=&quot;inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30&quot;
              >
                Get Started Today
                <Rocket className=&quot;w-5 h-5 ml-2&quot; />
              </a>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;inline-flex items-center justify-center px-8 py-3 bg-slate-700/50 text-white font-semibold rounded-xl hover:bg-slate-600/50 transition-all duration-200 border border-slate-600&quot;
              >
                Call +1 302 464 0950
                <Phone className=&quot;w-5 h-5 ml-2&quot; />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
},

export default ComprehensiveServicesShowcase2025,