import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Eye, Hand, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const NeuralInterfaceBanner2025 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 rounded-2xl p-8 mb-8"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2310B981" fill-opacity="0.1"%3E%3Cpath d="M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="flex-1 mb-8 lg:mb-0 lg:mr-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 text-black text-sm font-semibold mb-4">
              <Brain className="w-4 h-4 mr-2" />
              Neural Interface Technology
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Neural Interface Breakthrough 2025
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 max-w-2xl">
              Experience the future of human-computer interaction with our revolutionary neural interface technology. 
              Direct brain-to-computer communication is no longer science fiction—it's here.
            </p>

            {/* Key Features */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-sm text-gray-300">
                <Brain className="w-4 h-4 text-emerald-400 mr-2" />
                Direct Thought Control
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Eye className="w-4 h-4 text-emerald-400 mr-2" />
                Visual Neural Processing
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Hand className="w-4 h-4 text-emerald-400 mr-2" />
                Tactile Feedback
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/neural-interface-breakthrough-2025"
                className="inline-flex items-center bg-gradient-to-r from-emerald-400 to-teal-500 text-black px-6 py-3 rounded-lg font-bold hover:shadow-2xl transition-all duration-300"
              >
                Experience Neural Interface
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-black transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="flex-shrink-0">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-emerald-400 mb-2">99.7%</div>
                <div className="text-gray-300 text-sm">Accuracy Rate</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-emerald-400 mb-2">0.1ms</div>
                <div className="text-gray-300 text-sm">Response Time</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-emerald-400 mb-2">1000+</div>
                <div className="text-gray-300 text-sm">Neural Channels</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NeuralInterfaceBanner2025;