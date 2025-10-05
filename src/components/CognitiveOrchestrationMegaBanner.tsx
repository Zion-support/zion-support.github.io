import React from 'react';
import { motion } from 'framer-motion';

interface CognitiveOrchestrationMegaBannerProps {
  className?: string;
  onClose?: () => void;
  showCloseButton?: boolean;
}

const CognitiveOrchestrationMegaBanner: React.FC<CognitiveOrchestrationMegaBannerProps> = ({
  className = '',
  onClose,
  showCloseButton = true
}) => {
  const features = [
    {
      icon: '🧠',
      title: 'Cognitive Processing',
      description: 'Advanced AI that thinks and learns like humans'
    },
    {
      icon: '⚡',
      title: 'Real-time Orchestration',
      description: 'Seamlessly coordinate multiple AI systems'
    },
    {
      icon: '🔮',
      title: 'Predictive Intelligence',
      description: 'Anticipate needs and optimize outcomes'
    },
    {
      icon: '🛡️',
      title: 'Enterprise Security',
      description: 'Military-grade protection for your data'
    }
  ];

  const stats = [
    { label: 'Processing Speed', value: '10x Faster', color: 'text-green-400' },
    { label: 'Accuracy Rate', value: '99.9%', color: 'text-blue-400' },
    { label: 'Cost Reduction', value: '70%', color: 'text-purple-400' },
    { label: 'Uptime', value: '99.99%', color: 'text-yellow-400' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className={`relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 px-4 overflow-hidden ${className}`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-500/30 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
          >
            <span className="text-3xl">🚀</span>
            <span className="font-bold text-lg tracking-wider uppercase">
              Cognitive Orchestration Mega Banner
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent"
          >
            Cognitive Orchestration
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-200"
          >
            Experience the future of artificial intelligence with our revolutionary cognitive orchestration platform. 
            Transform your business with AI that thinks, learns, and adapts in real-time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-xl font-bold text-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              Start Cognitive Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Watch Demo
            </motion.button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already using our cognitive orchestration platform 
            to revolutionize their operations and achieve unprecedented results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
            >
              Get Started Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Schedule Consultation
            </motion.button>
          </div>
        </motion.div>

        {/* Close Button */}
        {showCloseButton && onClose && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0 }}
            onClick={onClose}
            className="absolute top-6 right-6 text-white/80 hover:text-white text-3xl font-bold transition-colors duration-300 z-10"
            aria-label="Close banner"
          >
            ×
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default CognitiveOrchestrationMegaBanner;