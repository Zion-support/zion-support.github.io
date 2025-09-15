import { advancedAIAutomation2025 } from '../../data/advanced-ai-automation-2025';
import { advancedCybersecurity2025 } from '../../data/advanced-cybersecurity-2025';
import { blockchainWeb32025 } from '../../data/blockchain-web3-2025';
import { iotEdgeComputing2025 } from '../../data/iot-edge-computing-2025';
import { healthcareBiotech2025 } from '../../data/healthcare-biotech-2025';
import { fintechFinancial2025 } from '../../data/fintech-financial-2025';
import { educationElearning2025 } from '../../data/education-elearning-2025';
      title: 'AI & Automation Services',
      icon: Brain,
      services: advancedAIAutomation2025,
      gradient: 'from-purple-600 via-pink-600 to-blue-600',
      description: 'Cutting-edge AI solutions that transform business operations'
    {
      title: 'Cybersecurity & Security',
      icon: Shield,
      services: advancedCybersecurity2025,
      gradient: 'from-red-600 via-orange-600 to-yellow-600',
      description: 'Advanced security solutions for the digital age'
    {
      title: 'Blockchain & Web3',
      icon: Globe,
      services: blockchainWeb32025,
      gradient: 'from-green-600 via-teal-600 to-cyan-600',
      description: 'Next-generation blockchain and decentralized solutions'
    {
      title: 'IoT & Edge Computing',
      icon: Cloud,
      services: iotEdgeComputing2025,
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
      description: 'Smart connected solutions for the Internet of Things'
    {
      title: 'Healthcare & Biotechnology',
      icon: Target,
      services: healthcareBiotech2025,
      gradient: 'from-pink-600 via-rose-600 to-red-600',
      description: 'Innovative healthcare and biotech solutions'
    {
      title: 'Fintech & Financial',
      icon: DollarSign,
      services: fintechFinancial2025,
      gradient: 'from-emerald-600 via-green-600 to-teal-600',
      description: 'Revolutionary financial technology solutions'
      icon: Award,
      services: educationElearning2025,
      gradient: 'from-amber-600 via-yellow-600 to-orange-600',
      description: 'Advanced learning and educational technology'
    }
  ];
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
            Revolutionary 2025 Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of cutting-edge micro SAAS services, IT solutions, and AI innovations designed to transform your business and drive success in the digital age.
          </p>
        </motion.div>

              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} mr-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 text-lg">
                    {category.description}
                  </p>
                </div>
              </div>

                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {service.name}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.description}
                    {/* Features */}
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-purple-300 mb-2">Key Features:</h5>
                      <ul className="space-y-1">
                        {service.features?.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-xs text-gray-400">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {service.features && service.features.length > 3 && (
                          <li className="text-xs text-gray-500 italic">
                            +{service.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Starting from:</span>
                        <span className="text-lg font-bold text-green-400">
                          {service.price}{service.period}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                      <h5 className="text-sm font-medium text-purple-300 mb-2">ROI & Benefits:</h5>
                      <div className="text-xs text-gray-400">
                        <div className="flex items-center mb-1">
                          <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                          {service.roi}
                        </div>
                        <div className="text-xs text-gray-500">
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-purple-300 mb-2">Perfect for:</h5>
                      <div className="flex flex-wrap gap-1">
                        {service.useCases?.slice(0, 3).map((useCase, useCaseIndex) => (
                          <span
                            key={useCaseIndex}
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging our cutting-edge solutions to drive innovation, efficiency, and growth.
            </p>
