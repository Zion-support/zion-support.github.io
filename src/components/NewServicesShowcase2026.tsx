import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap, Brain, Cpu, TrendingUp, CheckCircle } from 'lucide-react';

interface NewService {
  id: string;
  title: string;
  description: string;
  features: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  category: string;
  isNew?: boolean;
  featured: boolean;
  icon: string;
}

const NewServicesShowcase2026: React.FC = () => {
  const [selectedService, setSelectedService] = useState(0);

  const newServices: NewService[] = [
    {
      id: "ai-transformation-consulting",
      title: "AI Transformation Consulting Services",
      description: "Comprehensive AI transformation consulting to help organizations implement cutting-edge AI technologies and achieve digital transformation goals.",
      features: [
        "AI strategy development and roadmap creation",
        "Technology assessment and selection",
        "Implementation planning and execution",
        "Change management and training programs",
        "ROI analysis and performance monitoring",
        "24/7 expert support and guidance"
      ],
      pricing: {
        basic: 50000,
        pro: 150000,
        enterprise: 500000
      },
      category: "AI Consulting",
      isNew: true,
      featured: true,
      icon: "ai-consulting"
    },
    {
      id: "quantum-computing-solutions",
      title: "Quantum Computing Solutions for Enterprise",
      description: "End-to-end quantum computing solutions designed to solve complex business problems and unlock unprecedented computational capabilities.",
      features: [
        "Quantum algorithm development and optimization",
        "Quantum hardware integration and management",
        "Hybrid classical-quantum system design",
        "Quantum security and encryption solutions",
        "Performance monitoring and optimization",
        "Expert quantum computing consultation"
      ],
      pricing: {
        basic: 75000,
        pro: 200000,
        enterprise: 750000
      },
      category: "Quantum Solutions",
      isNew: true,
      featured: true,
      icon: "quantum-solutions"
    },
    {
      id: "autonomous-business-platform",
      title: "Autonomous Business Platform",
      description: "Complete platform for building autonomous business systems that can operate independently and drive growth without human intervention.",
      features: [
        "Autonomous decision-making systems",
        "Self-managing business processes",
        "Intelligent automation frameworks",
        "Real-time performance optimization",
        "Predictive analytics and forecasting",
        "Comprehensive monitoring and control"
      ],
      pricing: {
        basic: 100000,
        pro: 300000,
        enterprise: 1000000
      },
      category: "Autonomous Systems",
      isNew: true,
      featured: true,
      icon: "autonomous-platform"
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ai-consulting':
        return <Brain className="h-8 w-8" />;
      case 'quantum-solutions':
        return <Cpu className="h-8 w-8" />;
      case 'autonomous-platform':
        return <Zap className="h-8 w-8" />;
      default:
        return <Star className="h-8 w-8" />;
    }
  };

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    } else if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}K`;
    }
    return `$${price}`;
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center space-x-2 mb-4"
          >
            <Star className="h-6 w-6 text-yellow-400" />
            <span className="text-yellow-400 font-bold text-lg">NEW SERVICES</span>
            <Star className="h-6 w-6 text-yellow-400" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Revolutionary AI Services
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              for 2026
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Discover our cutting-edge AI services that are transforming industries and driving unprecedented innovation
          </motion.p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {newServices.map((service, index) => (
            <motion.button
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedService(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                selectedService === index
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {getIcon(service.icon)}
              <span>{service.title}</span>
              {service.isNew && (
                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  NEW
                </span>
              )}
            </motion.button>
          ))}
        </div>

        {/* Service Details */}
        <motion.div
          key={selectedService}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-purple-600 to-cyan-500 p-3 rounded-lg">
                  {getIcon(newServices[selectedService].icon)}
                </div>
                <div>
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {newServices[selectedService].category}
                  </span>
                  {newServices[selectedService].isNew && (
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium ml-2 animate-pulse">
                      NEW
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {newServices[selectedService].title}
              </h3>
              
              <p className="text-gray-300 text-lg mb-6">
                {newServices[selectedService].description}
              </p>

              <div className="space-y-3 mb-8">
                {newServices[selectedService].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-8 py-3 rounded-lg font-medium flex items-center space-x-2 hover:from-purple-700 hover:to-cyan-600 transition-all duration-200"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6">
              <h4 className="text-xl font-bold text-white mb-6 text-center">Pricing Plans</h4>
              
              <div className="space-y-4">
                {Object.entries(newServices[selectedService].pricing).map(([plan, price], index) => (
                  <div
                    key={plan}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      plan === 'pro'
                        ? 'border-purple-500 bg-purple-500/10'
                        : 'border-gray-600 bg-gray-600/10'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-bold capitalize ${
                        plan === 'pro' ? 'text-purple-400' : 'text-gray-300'
                      }`}>
                        {plan}
                      </span>
                      <span className={`text-2xl font-bold ${
                        plan === 'pro' ? 'text-purple-400' : 'text-white'
                      }`}>
                        {formatPrice(price)}
                      </span>
                    </div>
                    {plan === 'pro' && (
                      <div className="flex items-center space-x-1 text-yellow-400 text-sm">
                        <Star className="h-4 w-4 fill-current" />
                        <span>Most Popular</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg border border-green-500/30">
                <div className="flex items-center space-x-2 text-green-400 mb-2">
                  <TrendingUp className="h-5 w-5" />
                  <span className="font-medium">ROI Guarantee</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Average 300% ROI within 12 months of implementation
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our revolutionary AI services to drive innovation and growth
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-8 py-3 rounded-lg font-medium flex items-center space-x-2 hover:from-purple-700 hover:to-cyan-600 transition-all duration-200"
            >
              <span>Get Started Today</span>
              <ArrowRight className="h-4 w-4" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200"
            >
              Schedule Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewServicesShowcase2026;