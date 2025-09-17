import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Zap, Cpu, Brain, Sparkles, Shield } from 'lucide-react';
const NewServicesShowcase2026: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "AI-Powered Business Intelligence Suite",
      description: "Complete AI-driven business intelligence solution that provides real-time insights and predictive analytics.",
      price: "Starting at $2,999/month",
      features: [
        "Real-time data processing and analysis",
        "Predictive analytics and forecasting",
        "Automated report generation",
        "Custom dashboard creation",
        "Machine learning model integration"
      ],
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20",
      popular: true
    },
    {
      id: 2,
      title: "Quantum Computing Consulting Services",
      description: "Expert quantum computing consultation to help your organization prepare for the quantum revolution.",
      price: "Custom pricing based on scope",
      features: [
        "Quantum readiness assessment",
        "Quantum algorithm development",
        "Hybrid classical-quantum solutions",
        "Quantum security implementation",
        "Team training and education"
      ],
      icon: <Cpu className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20",
      popular: false
    },
    {
      id: 3,
      title: "Neural Interface Development Platform",
      description: "Cutting-edge platform for developing and deploying neural interface applications.",
      price: "Starting at $4,999/month",
      features: [
        "Neural signal processing",
        "Real-time data analysis",
        "Custom interface development",
        "Safety and compliance tools",
        "Integration with existing systems"
      ],
      icon: <Brain className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20",
      popular: false
    },
    {
      id: 4,
      title: "Conscious AI Development Framework",
      description: "Advanced framework for developing and deploying conscious AI systems with ethical considerations.",
      price: "Starting at $7,999/month",
      features: [
        "Consciousness modeling tools",
        "Ethical AI guidelines",
        "Behavioral analysis systems",
        "Safety monitoring tools",
        "Regulatory compliance support"
      ],
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/20",
      popular: false
    },
    {
      id: 5,
      title: "Autonomous Operations Management",
      description: "Complete solution for implementing and managing autonomous business operations.",
      price: "Starting at $5,999/month",
      features: [
        "Autonomous process design",
        "Self-optimizing systems",
        "Real-time monitoring and control",
        "Predictive maintenance",
        "Continuous improvement algorithms"
      ],
      icon: <Shield className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-500/10 to-purple-500/10",
      borderColor: "border-indigo-500/20",
      popular: false
    }
  ];
  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-6">
            <Star className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-purple-700 dark:text-purple-300 font-medium">New Services 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Revolutionary
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transform your business with our cutting-edge AI, quantum computing, and neural interface solutions. 
            Built for the future, delivering results today.
          </p>
        </motion.div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group ${service.popular ? 'lg:col-span-1 md:col-span-2' : ''}`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              <div className={`relative h-full p-8 rounded-2xl bg-white dark:bg-slate-800 border-2 ${service.borderColor} hover:shadow-2xl transition-all duration-300 group-hover:transform group-hover:scale-105`}>
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                {/* Price */}
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {service.price}
                </div>
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r ${service.color} hover:shadow-lg transition-all duration-300 flex items-center justify-center group`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of forward-thinking companies already using our revolutionary AI services to drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
              >
                Schedule a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-colors duration-300"
              >
                View All Services
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );

};

export default NewServicesShowcase2026;
