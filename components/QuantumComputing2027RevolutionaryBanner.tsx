import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Cpu, 
  Zap, 
  Shield, 
  Brain, 
  Database,
  ArrowRight,
  Star,
  Award,
  TrendingUp,
  Users,
  Globe
} from 'lucide-react';

const QuantumComputing2027RevolutionaryBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('quantum-banner');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Atom,
      title: "Quantum Supremacy",
      description: "Achieve computational superiority with quantum processors",
      stats: "1,000,000x Speed",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "Quantum AI Fusion",
      description: "Merge quantum computing with artificial intelligence",
      stats: "99.9% Accuracy",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Quantum Security",
      description: "Unbreakable encryption with quantum cryptography",
      stats: "100% Secure",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Quantum Analytics",
      description: "Process massive datasets in milliseconds",
      stats: "Real-time Processing",
      color: "from-orange-500 to-red-500"
    }
  ];

  const quantumCapabilities = [
    { label: "Quantum Qubits", value: "10,000+", icon: Atom },
    { label: "Processing Power", value: "1Millionx", icon: Zap },
    { label: "Accuracy Rate", value: "99.9%", icon: Award },
    { label: "Global Deployments", value: "500+", icon: Globe },
    { label: "Active Users", value: "100K+", icon: Users },
    { label: "Success Rate", value: "98.7%", icon: Star }
  ];

  return (
    <motion.section
      id="quantum-banner"
      className="relative overflow-hidden py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold mb-6"
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Atom className="w-4 h-4 mr-2" />
            Quantum Computing Revolution 2027
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            The Quantum Future is Now
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Experience unprecedented computational power with our revolutionary quantum computing solutions. 
            Transform your business with technology that was once considered science fiction.
          </motion.p>

          {/* Rotating Feature Display */}
          <motion.div
            className="max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
              <motion.div
                key={currentFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${features[currentFeature].color} flex items-center justify-center mx-auto mb-4`}>
                  <features[currentFeature].icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {features[currentFeature].title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {features[currentFeature].description}
                </p>
                <div className="text-blue-400 font-semibold text-lg">
                  {features[currentFeature].stats}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Quantum Capabilities Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {quantumCapabilities.map((capability, index) => (
            <motion.div
              key={index}
              className="text-center bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.7 + 0.1 * index, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                <capability.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">{capability.value}</div>
              <div className="text-gray-300 text-sm">{capability.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quantum Applications */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.9 + 0.1 * index, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{feature.description}</p>
              <div className="text-blue-400 font-semibold text-sm">{feature.stats}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Enter the Quantum Era?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the quantum revolution and unlock unprecedented computational power. 
              Our 2027 quantum solutions are ready to transform your business today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quantum-computing-solutions-2027"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:from-blue-600 hover:to-purple-600 flex items-center justify-center group"
              >
                Explore Quantum Solutions
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/quantum-computing-demo"
                className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-gray-600"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default QuantumComputing2027RevolutionaryBanner;