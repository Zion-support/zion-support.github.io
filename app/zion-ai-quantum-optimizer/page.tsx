import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  CpuChipIcon, 
  ChartBarIcon, 
  BoltIcon, 
  ShieldCheckIcon,
  CurrencyDollarIcon,
  StarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  CubeIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';

const ZionAIQuantumOptimizer = () => {
  const features = [
    {
      icon: CpuChipIcon,
      title: "Quantum Algorithm Processing",
      description: "Leverage quantum computing principles to solve complex optimization problems 1000x faster than classical methods."
    },
    {
      icon: ChartBarIcon,
      title: "Real-time Performance Analytics",
      description: "Monitor and analyze optimization results with advanced quantum-enhanced analytics and visualization."
    },
    {
      icon: BoltIcon,
      title: "Lightning-Fast Processing",
      description: "Process massive datasets and complex algorithms in milliseconds using quantum parallel processing."
    },
    {
      icon: ShieldCheckIcon,
      title: "Quantum-Secure Encryption",
      description: "Advanced quantum-resistant encryption ensures your data remains secure in the quantum era."
    }
  ];

  const pricingPlans = [
    {
      name: "Quantum Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses exploring quantum optimization",
      features: [
        "Up to 10,000 optimization queries/month",
        "Basic quantum algorithms",
        "Standard support",
        "5GB quantum data storage",
        "Basic analytics dashboard"
      ],
      popular: false
    },
    {
      name: "Quantum Professional",
      price: "$799",
      period: "/month",
      description: "Advanced quantum optimization for growing enterprises",
      features: [
        "Up to 100,000 optimization queries/month",
        "Advanced quantum algorithms",
        "Priority support",
        "50GB quantum data storage",
        "Advanced analytics & reporting",
        "API access",
        "Custom algorithm development"
      ],
      popular: true
    },
    {
      name: "Quantum Enterprise",
      price: "$2,499",
      period: "/month",
      description: "Full-scale quantum optimization for large organizations",
      features: [
        "Unlimited optimization queries",
        "All quantum algorithms",
        "24/7 dedicated support",
        "Unlimited quantum data storage",
        "Custom analytics & dashboards",
        "Full API access",
        "Custom algorithm development",
        "Dedicated quantum infrastructure",
        "White-label solutions"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Supply Chain Optimization",
      description: "Optimize complex supply chains with quantum algorithms, reducing costs by up to 40% and improving delivery times.",
      icon: CubeIcon
    },
    {
      title: "Financial Portfolio Optimization",
      description: "Maximize returns while minimizing risk using quantum-enhanced portfolio optimization algorithms.",
      icon: ChartBarIcon
    },
    {
      title: "Resource Allocation",
      description: "Optimize resource allocation across multiple projects and departments for maximum efficiency.",
      icon: BeakerIcon
    },
    {
      title: "Route Optimization",
      description: "Find the most efficient routes for delivery, logistics, and transportation using quantum algorithms.",
      icon: BoltIcon
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Quantum Optimizer - Advanced Quantum Computing Solutions | Zion Tech Group</title>
        <meta name="description" content="Revolutionary quantum optimization platform powered by AI. Solve complex problems 1000x faster with quantum algorithms. Starting at $299/month." />
        <meta name="keywords" content="quantum computing, AI optimization, quantum algorithms, business optimization, quantum software, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-quantum-optimizer" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-8">
              <SparklesIcon className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-300 font-medium">Revolutionary Quantum Technology</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Zion AI
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Quantum Optimizer
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of quantum computing to solve complex optimization problems 1000x faster than classical methods. 
              Transform your business with cutting-edge quantum algorithms and AI-powered insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of optimization with our advanced quantum computing platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how quantum optimization transforms industries and drives unprecedented results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <useCase.icon className="w-16 h-16 text-purple-400 mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum-Powered Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your quantum optimization needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-purple-500/50 scale-105 shadow-2xl shadow-purple-500/20' 
                    : 'border-slate-700/50 hover:border-purple-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'border border-purple-500 text-purple-300 hover:bg-purple-500/10'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience Quantum Optimization?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using quantum computing to optimize their operations. 
              Start your free trial today and see the difference quantum makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAIQuantumOptimizer;
