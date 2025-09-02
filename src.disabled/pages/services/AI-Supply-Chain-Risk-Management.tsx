import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Shield, 
  BarChart3, 
  AlertTriangle, 
  Globe, 
  Users, 
  CheckCircle, 
  Zap,
  FileText,
  Settings,
  Brain,
  Target,
  Activity,
  MapPin,
  Clock
} from 'lucide-react';

const AISupplyChainRiskManagement: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Risk Detection",
      description: "Advanced machine learning algorithms analyze supply chain data to identify potential risks before they impact operations with 90%+ accuracy."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Supply Chain Mapping",
      description: "Comprehensive visualization of your entire supply network with real-time tracking of suppliers, logistics, and potential disruption points."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Predictive Risk Analytics",
      description: "AI models forecast supply chain disruptions based on historical data, weather patterns, geopolitical events, and market conditions."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "Continuous surveillance of supply chain metrics, supplier performance, and external factors that could impact your operations."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Early Warning System",
      description: "Proactive alerts and notifications when potential supply chain risks are detected, enabling timely mitigation strategies."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Automated Mitigation",
      description: "AI-driven recommendations for alternative suppliers, routes, and contingency plans to minimize supply chain disruptions."
    }
  ];

  const benefits = [
    "Reduce supply chain disruptions by 40-60% through AI-powered risk management",
    "Cut response time to supply chain issues from days to hours",
    "Achieve 25-35% improvement in supply chain resilience",
    "Eliminate manual risk assessment processes",
    "Provide real-time visibility across global supply networks",
    "Enable proactive risk mitigation and contingency planning"
  ];

  const useCases = [
    "Manufacturing & Production",
    "Retail & E-commerce",
    "Healthcare & Pharmaceuticals",
    "Automotive & Aerospace",
    "Food & Beverage",
    "Energy & Utilities"
  ];

  const riskTypes = [
    "Supplier Financial Risk",
    "Geopolitical Risk",
    "Natural Disaster Risk",
    "Transportation Risk",
    "Quality & Compliance Risk",
    "Demand Volatility Risk"
  ];

  const pricing = [
    {
      plan: "Professional",
      price: "$2,800",
      period: "/month",
      features: [
        "Up to 100 suppliers",
        "Basic AI risk assessment",
        "Real-time monitoring",
        "Standard reporting",
        "Email support",
        "Basic risk alerts"
      ]
    },
    {
      plan: "Enterprise",
      price: "$8,500",
      period: "/month",
      features: [
        "Up to 1,000 suppliers",
        "Advanced AI risk models",
        "Custom risk metrics",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
        "Multi-location support"
      ]
    },
    {
      plan: "Global",
      price: "$15,000",
      period: "/month",
      features: [
        "Unlimited suppliers",
        "Full AI risk suite",
        "Custom model training",
        "24/7 dedicated support",
        "Advanced threat detection",
        "White-label solutions",
        "On-premise deployment"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-orange-600/20 rounded-full">
              <Truck className="w-12 h-12 text-orange-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Supply Chain Risk Management
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your supply chain resilience with AI-powered risk detection, real-time monitoring, 
            and predictive analytics. Protect your operations from disruptions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-gray-600 text-gray-300 hover:border-gray-500 font-semibold rounded-lg transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Supply Chain Risk Management
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Leverage cutting-edge artificial intelligence to identify, assess, and mitigate supply chain risks
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-orange-500/50 transition-all"
              >
                <div className="text-orange-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience unprecedented efficiency and resilience in supply chain risk management
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Use Cases Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our AI platform serves diverse industries with complex supply chain requirements
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center hover:border-orange-500/50 transition-all"
              >
                <div className="p-3 bg-orange-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Activity className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{useCase}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Risk Types Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Types of Supply Chain Risks
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our AI platform monitors and manages all major categories of supply chain risks
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {riskTypes.map((riskType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center hover:border-orange-500/50 transition-all"
              >
                <div className="p-3 bg-orange-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{riskType}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the plan that fits your organization's supply chain complexity
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white/5 backdrop-blur-lg rounded-xl p-8 border ${
                  index === 1 ? 'border-orange-500/50 bg-orange-500/10' : 'border-white/10'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  index === 1
                    ? 'bg-orange-600 hover:bg-orange-700 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600/20 to-red-600/20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Supply Chain?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading organizations that trust our AI-powered platform for their supply chain risk management needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 font-semibold rounded-lg transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Have questions about our AI Supply Chain Risk Management platform? Our experts are here to help.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="p-3 bg-orange-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
              <p className="text-gray-400">https://ziontechgroup.com</p>
            </div>
            <div>
              <div className="p-3 bg-orange-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FileText className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <div className="p-3 bg-orange-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Settings className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-400">+1 (302) 464-0950</p>
            </div>
          </div>
          <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
            <p className="text-gray-400">364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AISupplyChainRiskManagement;