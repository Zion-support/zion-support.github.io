import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Shield, 
  Globe, 
  Zap, 
  Database, 
  Cloud, 
  Smartphone,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Award,
  Rocket
} from 'lucide-react';

const RevolutionaryServicesShowcase2026 = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      id: 1,
      title: "AI-Powered Business Automation",
      subtitle: "Transform your operations with intelligent automation",
      description: "Leverage cutting-edge AI to automate complex business processes, reduce costs, and increase efficiency across all departments.",
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Intelligent Process Automation",
        "Predictive Analytics",
        "Natural Language Processing",
        "Machine Learning Models",
        "Real-time Decision Making"
      ],
      pricing: "Starting at $2,999/month",
      rating: 4.9,
      clients: "500+",
      category: "AI Solutions"
    },
    {
      id: 2,
      title: "Quantum Computing Solutions",
      subtitle: "Harness quantum power for complex problem solving",
      description: "Access quantum computing capabilities for optimization, cryptography, and scientific research through our cloud-based platform.",
      icon: Cpu,
      gradient: "from-cyan-500 to-blue-500",
      features: [
        "Quantum Algorithm Development",
        "Cryptographic Security",
        "Optimization Problems",
        "Scientific Simulations",
        "Quantum Machine Learning"
      ],
      pricing: "Starting at $4,999/month",
      rating: 4.8,
      clients: "150+",
      category: "Quantum Tech"
    },
    {
      id: 3,
      title: "Advanced Cybersecurity Suite",
      subtitle: "Protect against AI-powered threats",
      description: "Comprehensive cybersecurity solutions powered by AI to detect, prevent, and respond to sophisticated cyber threats in real-time.",
      icon: Shield,
      gradient: "from-red-500 to-orange-500",
      features: [
        "AI Threat Detection",
        "Zero Trust Architecture",
        "Behavioral Analytics",
        "Automated Response",
        "Compliance Management"
      ],
      pricing: "Starting at $3,499/month",
      rating: 4.9,
      clients: "800+",
      category: "Security"
    },
    {
      id: 4,
      title: "Neural Interface Development",
      subtitle: "Next-generation human-computer interaction",
      description: "Develop brain-computer interfaces and neural control systems for medical, gaming, and productivity applications.",
      icon: Globe,
      gradient: "from-emerald-500 to-teal-500",
      features: [
        "BCI Hardware Design",
        "Neural Signal Processing",
        "Machine Learning Integration",
        "Medical Applications",
        "Consumer Electronics"
      ],
      pricing: "Starting at $7,999/month",
      rating: 4.7,
      clients: "75+",
      category: "Emerging Tech"
    },
    {
      id: 5,
      title: "Edge AI Computing Platform",
      subtitle: "Deploy AI at the edge for real-time processing",
      description: "Distributed AI computing platform that brings machine learning capabilities to edge devices for ultra-low latency applications.",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-500",
      features: [
        "Edge ML Deployment",
        "Real-time Processing",
        "Distributed Computing",
        "IoT Integration",
        "Autonomous Systems"
      ],
      pricing: "Starting at $1,999/month",
      rating: 4.8,
      clients: "300+",
      category: "Edge Computing"
    },
    {
      id: 6,
      title: "Synthetic Intelligence Platform",
      subtitle: "Beyond traditional AI capabilities",
      description: "Revolutionary synthetic intelligence systems that go beyond mimicking human cognition to create entirely new forms of intelligence.",
      icon: Database,
      gradient: "from-indigo-500 to-purple-500",
      features: [
        "Synthetic Neural Networks",
        "Creative AI Systems",
        "Autonomous Learning",
        "Multi-modal Processing",
        "Consciousness Simulation"
      ],
      pricing: "Starting at $9,999/month",
      rating: 4.9,
      clients: "50+",
      category: "Synthetic AI"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const currentService = services[activeService];

  return (
    <div className="relative w-full py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/patterns/circuit.svg')] bg-center opacity-10"></div>
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Rocket className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-sm font-medium text-white">Revolutionary Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Next-Generation
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Solutions</span>
            <br />
            for 2026
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our cutting-edge services that are transforming industries and creating new possibilities
            for businesses worldwide.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 cursor-pointer transition-all duration-300 ${
                activeService === index ? 'ring-2 ring-purple-400 bg-white/15' : 'hover:bg-white/15'
              }`}
              onClick={() => setActiveService(index)}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="mb-4">
                <span className="text-sm font-medium text-purple-300">{service.category}</span>
                <h3 className="text-xl font-bold text-white mt-1">{service.title}</h3>
                <p className="text-gray-300 text-sm mt-2">{service.subtitle}</p>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{service.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{service.clients} clients</span>
                </div>
              </div>

              <div className="text-lg font-semibold text-white mb-4">{service.pricing}</div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Detailed Service View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-8 p-8">
              {/* Service Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${currentService.gradient} flex items-center justify-center`}>
                    <currentService.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-purple-300">{currentService.category}</span>
                    <h3 className="text-3xl font-bold text-white">{currentService.title}</h3>
                    <p className="text-lg text-purple-200">{currentService.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">{currentService.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{currentService.rating}</span>
                    </div>
                    <p className="text-gray-300 text-sm">Customer Rating</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="w-5 h-5 text-blue-400" />
                      <span className="text-white font-semibold">{currentService.clients}</span>
                    </div>
                    <p className="text-gray-300 text-sm">Active Clients</p>
                  </div>
                </div>

                <div className="text-2xl font-bold text-white">{currentService.pricing}</div>
              </div>

              {/* Features List */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">Key Features</h4>
                <div className="space-y-3">
                  {currentService.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "Happy Clients", value: "2,500+", icon: Users },
            { label: "Projects Completed", value: "10,000+", icon: Award },
            { label: "Success Rate", value: "99.8%", icon: TrendingUp },
            { label: "Years Experience", value: "15+", icon: Rocket }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryServicesShowcase2026;