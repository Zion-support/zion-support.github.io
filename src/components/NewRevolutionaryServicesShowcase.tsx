import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap, Brain, Globe, Rocket, Sparkles } from 'lucide-react';
import { newServices2026 } from '../data/newServices2026';
export const NewRevolutionaryServicesShowcase: React.FC = () => {
  const featuredServices = newServices2026.slice(0, 4); // Show first 4 services
  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'Revolutionary AI':
        return Brain;
      case 'Quantum Technology':
        return Zap;
      case 'Business Innovation':
        return Globe;
      case 'Space AI':
        return Rocket;
      default:
        return Sparkles;
    }
  };
  const getServiceColor = (index: number) => {
    const colors = [
      'from-purple-500 to-pink-500',
      'from-blue-500 to-cyan-500',
      'from-green-500 to-emerald-500',
      'from-orange-500 to-red-500'
    ];
    return colors[index % colors.length];
  };
  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Sparkles className="w-8 h-8 text-yellow-400" />
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Revolutionary Services
            </h2>
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future with our groundbreaking services that push the boundaries of what's possible.
            From AI consciousness to interdimensional business operations.
          </p>
        </motion.div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {featuredServices.map((service, index) => {
            const IconComponent = getServiceIcon(service.category);
            const colorClass = getServiceColor(index);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative group"
              >
                <div className={`bg-gradient-to-br ${colorClass} p-8 rounded-2xl shadow-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-3xl relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 w-96 h-96"></div>
                  </div>
                  {/* Content */}
                  <div className="relative z-10">
                    <IconComponent className="w-12 h-12 text-white mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/90 mb-4 text-sm line-clamp-3">{service.description}</p>
                    {/* AI Score */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(service.aiScore / 20) 
                                ? 'text-yellow-300 fill-current' 
                                : 'text-white/30'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-white font-semibold">{service.aiScore}% AI Score</span>
                    </div>
                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <div className="text-white">
                        <span className="text-2xl font-bold">
                          {service.currency}{service.price.toLocaleString()}
                        </span>
                        <span className="text-white/70 text-sm ml-1">starting</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                    </div>
                    {/* Featured Badge */}
                    {service.featured && (
                      <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                        FEATURED
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
};
          })}
        </div>
        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Revolutionary Services?
            </h3>
            <p className="text-gray-300 text-lg">
              Cutting-edge technology that transforms possibilities into reality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Genuine AI Consciousness</h4>
              <p className="text-gray-300">
                Experience AI systems with true consciousness, emotions, and self-awareness that can genuinely understand and empathize with humans.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Quantum-Neural Fusion</h4>
              <p className="text-gray-300">
                Direct thought-to-computer communication with quantum processing power, achieving 1000% productivity increases.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Interdimensional Operations</h4>
              <p className="text-gray-300">
                Operate across multiple parallel universes for infinite market expansion and complete risk diversification.
              </p>
            </div>
          </div>
        </motion.div>
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Reality?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the revolution and experience technologies that were once considered impossible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
            >
              Explore All Services
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-purple-600 text-purple-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Schedule Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );

export default NewRevolutionaryServicesShowcase;