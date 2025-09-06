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
  const _containerVariants = {_hidden: { opacity: 0},
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
  },

  const _itemVariants = {_hidden: { y: 20, _opacity: 0},
    visible: {_y: 0, _opacity: 1, _transition: {
        duration: 0.5}
  },

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
          initial={ opacity: 0, y: 30 }
          whileInView={ opacity: 1, y: 0 }
          transition={ duration: 0.8 }
          className=&quot;text-center mb-16&quot;        >
          <h2 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6&quot;>
            Revolutionary 2025 Services
          </h2>
          <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed&quot;>
            Discover our comprehensive suite of cutting-edge micro SAAS services, IT solutions, and AI innovations designed to transform your business and drive success in the digital age.          </p>
        </motion.div>

        {_/* Service Categories */}
        <motion.div
          variants={containerVariants}
          initial=&quot;hidden&quot;
          whileInView=&quot;visible&quot;
          viewport={ once: true }
          className=&quot;space-y-16&quot;        >
          {_serviceCategories.map(category, _categoryIndex) => (_<motion.div
              key={category.title}
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
                    {category.description}                  </p>
                </div>
              </div>

              {/* Services Grid */}
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
                {category.services.map(service, serviceIndex) => (
                  <motion.div
                    key={service.id}
                    initial={ opacity: 0, scale: 0.9 }
                    whileInView={ opacity: 1, scale: 1 }
                    transition={ duration: 0.5, delay: serviceIndex * 0.1 }
                    className=&quot;group relative bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:shadow-xl hover:shadow-cyan-500/30&quot;
                  >
                    {/* Service Header */}
                    <div className=&quot;mb-4&quot;>
                      <h4 className=&quot;text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors&quot;>
                        {service.name}
                      </h4>
                      <p className=&quot;text-gray-400 text-sm leading-relaxed&quot;>
                        {service.description}
                      </p>;
                    </div>;

                    {/* Features */}
                    <div className=&quot;mb-4&quot;>
                      <h5 className=&quot;text-sm font-medium text-purple-300 mb-2&quot;>Key Features:</h5>
                      <ul className=&quot;space-y-1&quot;>
                        {service.features?.slice(0, 3).map(feature, featureIndex) => (
                          <li key={featureIndex} className=&quot;flex items-center text-xs text-gray-400&quot;>
                            <CheckCircle className=&quot;w-3 h-3 text-green-400 mr-2 flex-shrink-0&quot; />
                            {feature}
                          </li>;
                        )}
                        {service.features && service.features.length > 3 && (
                          <li className=&quot;text-xs text-gray-500 italic&quot;>                            +{service.features.length - 3} more features
                          </li>
                        )}
                      </ul>;
                    </div>;

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
                          Setup time: {service.setupTime}                        </div>
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div className=&quot;mb-4&quot;>
                      <h5 className=&quot;text-sm font-medium text-purple-300 mb-2&quot;>Perfect for:</h5>
                      <div className=&quot;flex flex-wrap gap-1&quot;>
                        {service.useCases?.slice(0, 3).map(useCase, useCaseIndex) => (                          <span
                            key={useCaseIndex}
                            className=&quot;px-2 py-1 bg-slate-700/50 text-xs text-gray-300 rounded-full&quot;
                          >
                            {_useCase}
                          </span>
                        )}
                      </div>;
                    </div>;

                    {/* CTA Button */}
                    <div className=&quot;mt-6&quot;>
                      <a
                        href={service.link}
                        className=&quot;inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30&quot;                      >
                        Learn More
                        <ArrowRight className=&quot;w-4 h-4 ml-2&quot; />
                      </a>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className=&quot;absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none&quot; />                  </motion.div>
                )}
              </div>;
            </motion.div>;
          )}
        </motion.div>

        {_/* Call to Action */}
        <motion.div
          initial={ opacity: 0, y: 30 }
          whileInView={ opacity: 1, y: 0 }
          transition={ duration: 0.8, delay: 0.5 }
          className=&quot;text-center mt-20&quot;        >
          <div className=&quot;bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30&quot;>
            <h3 className=&quot;text-3xl font-bold text-white mb-4&quot;>
              Ready to Transform Your Business?
            </h3>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
              Join thousands of businesses already leveraging our cutting-edge solutions to drive innovation, efficiency, and growth.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">              <a
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
,

export default ComprehensiveServicesShowcase2025,