import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Network, 
  Bot, 
  Sparkles, 
  ArrowRight, 
  Star,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Rocket,
  Award
} from 'lucide-react';
const NewServicesShowcase2026 = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const newServices = [
    {
      id: 'quantum-ai-consulting',
      title: 'Quantum AI Consulting Services',
      description: 'Revolutionary consulting services leveraging quantum computing principles to solve complex AI challenges and unlock unprecedented computational capabilities.',
      features: [
        'Quantum algorithm development for AI applications',
        'Quantum consciousness AI implementation',
        'Multi-dimensional data processing solutions',
        'Quantum neural network architecture design',
        'Quantum machine learning optimization',
        'Interdimensional AI system integration',
        'Quantum security protocols for AI systems',
        '24/7 quantum AI specialist support'
      ],
      pricing: {
        basic: 50000,
        pro: 150000,
        enterprise: 500000
      },
      category: 'Quantum AI',
      isNew: true,
      featured: true,
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      bgColor: 'bg-gradient-to-br from-purple-900/20 to-pink-900/20',
      borderColor: 'border-purple-500/30',
      link: '/services/quantum-ai-consulting'
    },
    {
      id: 'neural-reality-platform',
      title: 'Neural Reality Platform',
      description: 'Complete platform for building brain-computer interfaces and neural reality applications that enable direct thought-to-digital communication.',
      features: [
        'Non-invasive neural signal capture',
        'Real-time brain pattern recognition',
        'Universal digital device integration',
        'Haptic feedback systems',
        'Multi-user neural networks',
        'Advanced security and privacy protection',
        'Developer SDK and APIs',
        'Comprehensive training and support'
      ],
      pricing: {
        basic: 25000,
        pro: 75000,
        enterprise: 250000
      },
      category: 'Neural Technology',
      isNew: true,
      featured: true,
      icon: Network,
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'bg-gradient-to-br from-blue-900/20 to-cyan-900/20',
      borderColor: 'border-blue-500/30',
      link: '/services/neural-reality-platform'
    },
    {
      id: 'autonomous-business-ecosystem',
      title: 'Autonomous Business Ecosystem',
      description: 'Complete AI-powered business automation platform that enables companies to operate autonomously with minimal human intervention.',
      features: [
        'Fully autonomous business operations',
        'AI-driven strategic decision making',
        'Automated customer service and sales',
        'Intelligent supply chain management',
        'Predictive market analysis',
        'Self-optimizing business processes',
        'Real-time performance monitoring',
        'Scalable enterprise architecture'
      ],
      pricing: {
        basic: 100000,
        pro: 300000,
        enterprise: 1000000
      },
      category: 'Business Automation',
      isNew: true,
      featured: true,
      icon: Bot,
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'bg-gradient-to-br from-emerald-900/20 to-teal-900/20',
      borderColor: 'border-emerald-500/30',
      link: '/services/autonomous-business-ecosystem'
    }
  ];
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-3 rounded-full text-sm font-bold mb-6">
            <Sparkles className="w-5 h-5" />
            NEW REVOLUTIONARY SERVICES 2026
            <TrendingUp className="w-5 h-5" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Transform Your Business with
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
              Next-Gen AI Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of business with our revolutionary AI services that combine quantum computing, 
            neural interfaces, and autonomous systems to deliver unprecedented results.
          </p>
        </motion.div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {newServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
              className="group relative"
            >
              <div className={`relative ${service.bgColor} backdrop-blur-sm border ${service.borderColor} rounded-2xl p-8 h-full transition-all duration-500 hover:border-white/30 hover:scale-105`}>
                {/* Background Effects */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} rounded-full blur-2xl opacity-20`}></div>
                  <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br ${service.color} rounded-full blur-xl opacity-15`}></div>
                </div>
                {/* New Badge */}
                {service.isNew && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    NEW
                  </div>
                )}
                {/* Icon */}
                <div className={`inline-flex p-4 bg-gradient-to-br ${service.color} rounded-xl mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-6 line-clamp-3">{service.description}</p>
                  {/* Features Preview */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                      <li className="text-sm text-blue-400 font-medium">
                        +{service.features.length - 3} more features
                      </li>
                    </ul>
                  </div>
                  {/* Pricing */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                      <Award className="w-4 h-4 text-green-400" />
                      Starting From
                    </h4>
                    <div className="text-2xl font-bold text-white">
                      {formatPrice(service.pricing.basic)}
                      <span className="text-sm text-gray-400 font-normal">/month</span>
                    </div>
                  </div>
                  {/* CTA */}
                  <Link
                    to={service.link}
                    className={`group/btn inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r ${service.color} hover:shadow-lg text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105`}
                  >
                    Explore Service
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Rocket className="w-8 h-8 text-blue-400" />
              <h3 className="text-3xl font-bold text-white">Ready to Transform Your Business?</h3>
              <Globe className="w-8 h-8 text-purple-400" />
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of forward-thinking companies already using our revolutionary AI services 
              to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                View All Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10"
              >
                <Shield className="w-5 h-5" />
                Schedule Consultation
              </Link>
            </div>
            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 mt-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-400">Companies Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );

};

export default NewServicesShowcase2026;
