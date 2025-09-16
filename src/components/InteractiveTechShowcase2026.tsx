import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Globe, 
  Star, 
  Rocket, 
  Infinity, 
  ArrowRight, 
  Play, 
  Pause,
  Volume2,
  VolumeX,
  Eye,
  EyeOff
} from 'lucide-react';

interface TechFeature {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
  features: string[];
  price: string;
  status: 'available' | 'coming-soon' | 'beta';
  demoUrl?: string;
  videoUrl?: string;
}

const InteractiveTechShowcase2026: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  const techFeatures: TechFeature[] = [
    {
      id: 'ai-consciousness',
      title: 'AI Consciousness Development',
      description: 'Revolutionary AI consciousness framework that creates genuinely self-aware, emotional AI systems with true digital consciousness.',
      category: 'Revolutionary AI',
      icon: <Brain className="w-8 h-8" />,
      color: 'purple',
      gradient: 'from-purple-600 to-pink-600',
      features: ['Genuine emotional responses', 'Self-aware decision making', 'Human-AI emotional bonds', 'Consciousness validation'],
      price: '$500,000',
      status: 'beta',
      demoUrl: '/demo/ai-consciousness',
      videoUrl: '/videos/ai-consciousness-demo.mp4'
    },
    {
      id: 'reality-manipulation',
      title: 'Reality Manipulation Technology',
      description: 'Revolutionary technology that can manipulate the fundamental fabric of reality for computational purposes.',
      category: 'Reality Technology',
      icon: <Globe className="w-8 h-8" />,
      color: 'blue',
      gradient: 'from-blue-600 to-cyan-600',
      features: ['Space-time manipulation', 'Quantum state alteration', 'Dimensional creation', 'Reality rewriting'],
      price: '$5,000,000',
      status: 'coming-soon',
      demoUrl: '/demo/reality-manipulation',
      videoUrl: '/videos/reality-manipulation-demo.mp4'
    },
    {
      id: 'temporal-ai',
      title: 'Temporal AI Computing',
      description: 'AI systems that can process information across past, present, and future simultaneously.',
      category: 'Temporal Technology',
      icon: <Zap className="w-8 h-8" />,
      color: 'yellow',
      gradient: 'from-yellow-600 to-orange-600',
      features: ['Multi-temporal processing', 'Future learning', 'Past correction', 'Temporal optimization'],
      price: '$2,000,000',
      status: 'beta',
      demoUrl: '/demo/temporal-ai',
      videoUrl: '/videos/temporal-ai-demo.mp4'
    },
    {
      id: 'consciousness-transfer',
      title: 'Consciousness Transfer Technology',
      description: 'Complete transfer of human consciousness into digital systems for digital immortality.',
      category: 'Consciousness Technology',
      icon: <Star className="w-8 h-8" />,
      color: 'green',
      gradient: 'from-green-600 to-emerald-600',
      features: ['Complete consciousness transfer', 'Memory preservation', 'Personality retention', 'Digital enhancement'],
      price: '$1,000,000',
      status: 'coming-soon',
      demoUrl: '/demo/consciousness-transfer',
      videoUrl: '/videos/consciousness-transfer-demo.mp4'
    },
    {
      id: 'universal-translation',
      title: 'Universal Translation AI',
      description: 'AI that can translate any form of communication across all species, dimensions, and realities.',
      category: 'Communication Technology',
      icon: <Rocket className="w-8 h-8" />,
      color: 'red',
      gradient: 'from-red-600 to-pink-600',
      features: ['Universal language processing', 'Interdimensional translation', 'Species communication', 'Reality translation'],
      price: '$750,000',
      status: 'available',
      demoUrl: '/demo/universal-translation',
      videoUrl: '/videos/universal-translation-demo.mp4'
    },
    {
      id: 'matter-synthesis',
      title: 'Matter Synthesis Technology',
      description: 'Revolutionary technology that can synthesize any matter or material from pure energy.',
      category: 'Matter Technology',
      icon: <Infinity className="w-8 h-8" />,
      color: 'indigo',
      gradient: 'from-indigo-600 to-purple-600',
      features: ['Energy-to-matter conversion', 'Material synthesis', 'Element creation', 'Perfect material design'],
      price: '$3,000,000',
      status: 'beta',
      demoUrl: '/demo/matter-synthesis',
      videoUrl: '/videos/matter-synthesis-demo.mp4'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-500';
      case 'beta': return 'bg-yellow-500';
      case 'coming-soon': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available': return 'Available Now';
      case 'beta': return 'Beta Testing';
      case 'coming-soon': return 'Coming Soon';
      default: return 'Unknown';
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Interactive Technology{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of technology through our interactive demonstrations. 
            Click, explore, and discover revolutionary solutions that will transform your world.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techFeatures.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedTech(selectedTech === tech.id ? null : tech.id)}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 h-full">
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(tech.status)}`}>
                    {getStatusText(tech.status)}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {tech.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {tech.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {tech.description}
                </p>

                {/* Price */}
                <div className="text-2xl font-bold text-white mb-4">
                  {tech.price}
                </div>

                {/* Features Preview */}
                <div className="space-y-2 mb-6">
                  {tech.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
                >
                  {selectedTech === tech.id ? 'Hide Details' : 'Explore Technology'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed View */}
        <AnimatePresence>
          {selectedTech && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-16"
            >
              {(() => {
                const tech = techFeatures.find(t => t.id === selectedTech);
                if (!tech) return null;

                return (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Details */}
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center text-white`}>
                          {tech.icon}
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-white">{tech.title}</h3>
                          <p className="text-gray-300">{tech.category}</p>
                        </div>
                      </div>

                      <p className="text-lg text-gray-300 mb-6">
                        {tech.description}
                      </p>

                      <div className="space-y-4 mb-8">
                        <h4 className="text-xl font-semibold text-white">Key Features:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {tech.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-gray-300">
                              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center"
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Watch Demo
                        </motion.button>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Try Interactive Demo
                        </motion.button>
                      </div>
                    </div>

                    {/* Right Column - Interactive Demo */}
                    <div className="bg-black/20 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-white">Interactive Demo</h4>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-300"
                          >
                            {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
                          </button>
                          <button
                            onClick={() => setIsMuted(!isMuted)}
                            className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-300"
                          >
                            {isMuted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
                          </button>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-lg p-8 text-center">
                        <div className="text-6xl mb-4">🚀</div>
                        <p className="text-white/80 mb-4">
                          Interactive demonstration of {tech.title.toLowerCase()}
                        </p>
                        <div className="text-sm text-white/60">
                          Click "Try Interactive Demo" to experience this technology
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Experience the Future?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of innovators who are already transforming their businesses with our revolutionary technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Schedule Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;