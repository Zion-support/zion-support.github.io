import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  CurrencyDollarIcon, 
  ChartBarIcon, 
  ShieldCheckIcon, 
  CpuChipIcon,
  StarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  EyeIcon,
  LockClosedIcon,
  TrendingUpIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const ZionAIBlockchainAnalyzer = () => {
  const features = [
    {
      icon: CpuChipIcon,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze blockchain data patterns, transactions, and market trends in real-time."
    },
    {
      icon: EyeIcon,
      title: "Real-time Monitoring",
      description: "Monitor blockchain networks, smart contracts, and DeFi protocols with instant alerts and comprehensive dashboards."
    },
    {
      icon: ShieldCheckIcon,
      title: "Security Intelligence",
      description: "Detect suspicious activities, potential hacks, and security vulnerabilities across multiple blockchain networks."
    },
    {
      icon: TrendingUpIcon,
      title: "Market Predictions",
      description: "Predict cryptocurrency price movements and market trends using advanced AI models and historical data analysis."
    }
  ];

  const pricingPlans = [
    {
      name: "Blockchain Starter",
      price: "$149",
      period: "/month",
      description: "Perfect for individual traders and small crypto enthusiasts",
      features: [
        "Up to 5 blockchain networks",
        "Basic market analysis",
        "Real-time price tracking",
        "Standard alerts",
        "Email support",
        "1GB data storage"
      ],
      popular: false
    },
    {
      name: "Blockchain Professional",
      price: "$399",
      period: "/month",
      description: "Advanced tools for serious traders and crypto businesses",
      features: [
        "Up to 20 blockchain networks",
        "Advanced AI analysis",
        "Custom alerts & notifications",
        "Portfolio tracking",
        "Priority support",
        "10GB data storage",
        "API access",
        "DeFi protocol monitoring"
      ],
      popular: true
    },
    {
      name: "Blockchain Enterprise",
      price: "$1,299",
      period: "/month",
      description: "Comprehensive solution for crypto exchanges and institutions",
      features: [
        "Unlimited blockchain networks",
        "Full AI analysis suite",
        "Custom reporting & dashboards",
        "White-label solutions",
        "24/7 dedicated support",
        "Unlimited data storage",
        "Full API access",
        "Compliance monitoring",
        "Risk management tools",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Cryptocurrency Trading",
      description: "Make informed trading decisions with AI-powered market analysis, price predictions, and risk assessment tools.",
      icon: TrendingUpIcon
    },
    {
      title: "DeFi Protocol Monitoring",
      description: "Monitor DeFi protocols for security vulnerabilities, liquidity changes, and yield farming opportunities.",
      icon: ShieldCheckIcon
    },
    {
      title: "Smart Contract Auditing",
      description: "Analyze smart contracts for potential bugs, security issues, and optimization opportunities using AI.",
      icon: LockClosedIcon
    },
    {
      title: "Portfolio Management",
      description: "Track and optimize your crypto portfolio with advanced analytics and automated rebalancing suggestions.",
      icon: ChartBarIcon
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Blockchain Analyzer - Advanced Crypto & DeFi Analytics | Zion Tech Group</title>
        <meta name="description" content="Revolutionary blockchain analysis platform powered by AI. Monitor crypto markets, DeFi protocols, and smart contracts. Starting at $149/month." />
        <meta name="keywords" content="blockchain analysis, cryptocurrency analytics, DeFi monitoring, crypto trading, smart contract auditing, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-blockchain-analyzer" />
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-8">
              <SparklesIcon className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-300 font-medium">Next-Generation Blockchain Intelligence</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Zion AI
              <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Blockchain Analyzer
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Unlock the power of blockchain data with our AI-powered analysis platform. 
              Monitor markets, detect opportunities, and make informed decisions in the crypto ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center"
              >
                Start Analysis
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                View Demo
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
              Advanced Blockchain Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive tools for analyzing blockchain networks, crypto markets, and DeFi protocols
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
              Powerful Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From trading to security, discover how our platform transforms blockchain analysis
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
              Choose Your Analysis Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the perfect plan for your blockchain analysis needs
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
                    <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Master Blockchain Analysis?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of traders, developers, and institutions already using our platform to gain 
              competitive advantages in the crypto market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Analysis Now
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

export default ZionAIBlockchainAnalyzer;
