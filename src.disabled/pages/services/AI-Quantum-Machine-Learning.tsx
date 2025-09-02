import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
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
  Clock,
  Network,
  Database,
  Cpu
} from 'lucide-react';

const AIQuantumMachineLearning: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Quantum AI Algorithms",
      description: "Advanced quantum machine learning algorithms that leverage quantum superposition and entanglement for exponential speedup in complex computations."
    },
    {
      icon: <Atom className="w-6 h-6" />,
      title: "Quantum-Classical Hybrid",
      description: "Seamless integration of quantum and classical computing resources for optimal performance across different types of machine learning tasks."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Quantum Feature Mapping",
      description: "Quantum feature mapping techniques that transform classical data into quantum states for enhanced pattern recognition and classification."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quantum Neural Networks",
      description: "Quantum neural network architectures that process information using quantum mechanical principles for superior learning capabilities."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Quantum Optimization",
      description: "Quantum optimization algorithms that solve complex optimization problems exponentially faster than classical approaches."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Quantum Error Correction",
      description: "Advanced error correction techniques that maintain quantum coherence and ensure reliable quantum machine learning operations."
    }
  ];

  const benefits = [
    "Achieve exponential speedup in complex ML computations",
    "Solve previously intractable optimization problems",
    "Improve pattern recognition accuracy by 40-60%",
    "Enable breakthroughs in drug discovery and materials science",
    "Provide quantum advantage in specific ML domains",
    "Future-proof your AI infrastructure for quantum computing"
  ];

  const useCases = [
    "Drug Discovery & Pharmaceuticals",
    "Financial Modeling & Risk Analysis",
    "Materials Science & Chemistry",
    "Cryptography & Cybersecurity",
    "Climate Modeling & Weather Prediction",
    "Logistics & Supply Chain Optimization"
  ];

  const quantumTechnologies = [
    "Quantum Gates & Circuits",
    "Quantum Annealing",
    "Quantum Error Correction",
    "Quantum-Classical Interfaces",
    "Quantum Memory & Storage",
    "Quantum Networking"
  ];

  const pricing = [
    {
      plan: "Professional",
      price: "$5,500",
      period: "/month",
      features: [
        "Basic quantum ML algorithms",
        "Quantum simulator access",
        "Standard reporting",
        "Email support",
        "Basic quantum features",
        "Documentation access"
      ]
    },
    {
      plan: "Enterprise",
      price: "$18,500",
      period: "/month",
      features: [
        "Advanced quantum ML suite",
        "Real quantum hardware access",
        "Custom algorithm development",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
        "Multi-user access"
      ]
    },
    {
      plan: "Research",
      price: "$28,000",
      period: "/month",
      features: [
        "Full quantum ML platform",
        "Exclusive quantum hardware",
        "Custom model training",
        "24/7 dedicated support",
        "Research collaboration tools",
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
            <div className="p-3 bg-cyan-600/20 rounded-full">
              <Atom className="w-12 h-12 text-cyan-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Quantum Machine Learning
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Revolutionize machine learning with quantum computing. Leverage quantum mechanics 
            for exponential speedup in complex computations and breakthrough AI capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors">
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
              Quantum AI Machine Learning Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Leverage cutting-edge quantum computing for revolutionary machine learning capabilities
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all"
              >
                <div className="text-cyan-400 mb-4">{feature.icon}</div>
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
              Why Choose Quantum AI?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience unprecedented computational power and AI capabilities
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
                <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
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
              Our quantum AI platform serves industries that require breakthrough computational capabilities
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center hover:border-cyan-500/50 transition-all"
              >
                <div className="p-3 bg-cyan-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Activity className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{useCase}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Quantum Technologies Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Computing Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built on cutting-edge quantum computing and AI technologies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quantumTechnologies.map((technology, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center hover:border-cyan-500/50 transition-all"
              >
                <div className="p-3 bg-cyan-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Cpu className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{technology}</h3>
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
              Choose the plan that fits your organization's quantum AI requirements
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
                  index === 1 ? 'border-cyan-500/50 bg-cyan-500/10' : 'border-white/10'
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
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  index === 1
                    ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
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
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600/20 to-blue-600/20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Quantum AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading organizations that trust our quantum AI platform for breakthrough machine learning capabilities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors">
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
            Have questions about our AI Quantum Machine Learning platform? Our experts are here to help.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="p-3 bg-cyan-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
              <p className="text-gray-400">https://ziontechgroup.com</p>
            </div>
            <div>
              <div className="p-3 bg-cyan-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FileText className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <div className="p-3 bg-cyan-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Settings className="w-8 h-8 text-cyan-400" />
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

export default AIQuantumMachineLearning;