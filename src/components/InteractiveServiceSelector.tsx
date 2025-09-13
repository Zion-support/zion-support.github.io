import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Cpu, 
  Database, 
  Lock,
  Zap,
  Globe,
  ChevronRight,
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react';

const InteractiveServiceSelector: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('ai');
  const [selectedService, setSelectedService] = useState(0);

  const categories = [
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'security', name: 'Cybersecurity', icon: Shield, color: 'from-blue-500 to-cyan-500' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, color: 'from-green-500 to-emerald-500' },
    { id: 'quantum', name: 'Quantum Computing', icon: Cpu, color: 'from-orange-500 to-red-500' },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Lock, color: 'from-indigo-500 to-purple-500' },
    { id: 'iot', name: 'IoT & Edge Computing', icon: Globe, color: 'from-teal-500 to-blue-500' }
  ];

  const services = {
    ai: [
      {
        title: "AI Content Generator Pro",
        description: "Multi-language content generation with SEO optimization",
        price: "$299/month",
        features: ["80% time savings", "40% SEO improvement", "Brand voice customization"],
        popular: true
      },
      {
        title: "AI Customer Support Suite",
        description: "24/7 intelligent customer support automation",
        price: "$199/month",
        features: ["60% cost reduction", "90% faster response", "Multi-language support"],
        popular: false
      },
      {
        title: "AI Business Intelligence",
        description: "Advanced analytics with predictive capabilities",
        price: "$499/month",
        features: ["85% forecasting accuracy", "Real-time insights", "Automated reporting"],
        popular: false
      }
    ],
    security: [
      {
        title: "Advanced Threat Detection",
        description: "AI-powered threat detection with automated response",
        price: "$399/month",
        features: ["90% faster detection", "70% fewer false positives", "24/7 monitoring"],
        popular: true
      },
      {
        title: "Zero Trust Identity Management",
        description: "Multi-factor authentication and behavioral analytics",
        price: "$299/month",
        features: ["80% breach reduction", "Compliance ready", "SSO integration"],
        popular: false
      }
    ],
    cloud: [
      {
        title: "Cloud Infrastructure Automation",
        description: "Infrastructure as Code with auto-scaling",
        price: "$599/month",
        features: ["40% cost reduction", "10x faster deployment", "Disaster recovery"],
        popular: true
      },
      {
        title: "Enterprise CI/CD Pipeline",
        description: "Automated testing and deployment",
        price: "$399/month",
        features: ["50x faster deployment", "90% fewer failures", "Security scanning"],
        popular: false
      }
    ],
    quantum: [
      {
        title: "Quantum Algorithm Development",
        description: "Custom quantum algorithms for optimization",
        price: "$3,999/month",
        features: ["Quantum advantage", "Complex problem solving", "Custom circuits"],
        popular: true
      }
    ],
    blockchain: [
      {
        title: "DeFi Platform Development",
        description: "Custom decentralized finance platforms",
        price: "$2,999/month",
        features: ["Smart contracts", "Liquidity pools", "Security audited"],
        popular: true
      },
      {
        title: "NFT Marketplace Platform",
        description: "Complete NFT marketplace with minting tools",
        price: "$1,999/month",
        features: ["Auction system", "Royalty distribution", "Multi-chain support"],
        popular: false
      }
    ],
    iot: [
      {
        title: "Enterprise IoT Management",
        description: "Device management and real-time monitoring",
        price: "$799/month",
        features: ["Thousands of devices", "30% cost reduction", "Predictive maintenance"],
        popular: true
      },
      {
        title: "Edge Computing Solutions",
        description: "Low-latency applications and processing",
        price: "$1,299/month",
        features: ["90% latency reduction", "Real-time processing", "Load balancing"],
        popular: false
      }
    ]
  };

  const currentServices = services[selectedCategory as keyof typeof services] || [];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Choose Your
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technology Solution
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive suite of revolutionary technology services. 
            Find the perfect solution for your business needs.
          </p>
        </motion.div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group relative px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <category.icon className="w-5 h-5" />
                {category.name}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border ${
                  service.popular ? 'border-cyan-400' : 'border-gray-700'
                } hover:border-cyan-400 transition-all duration-300 cursor-pointer`}
                onClick={() => setSelectedService(index)}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Service Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="text-3xl font-bold text-white mb-6">{service.price}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="group/btn w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-full font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-300 mb-8">
            Need a custom solution? Our experts are ready to help you build the perfect technology stack.
          </p>
          <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
            <span className="flex items-center gap-2">
              Schedule Free Consultation
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveServiceSelector;