import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Rocket, 
  Cpu, 
  Database, 
  Cloud, 
  Lock, 
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Award,
  Gauge,
  Sparkles,
  Atom,
  CircuitBoard,
  CpuChip,
  Layers,
  Lightbulb,
  Puzzle,
  Eye,
  Microscope,
  Telescope,
  Satellite,
  Code,
  Bot,
  Network,
  Cpu2,
  BookOpen,
  Calendar,
  Clock,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const InteractiveContentShowcase: React.FC = () => {
  const [activeContent, setActiveContent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredContent, setHoveredContent] = useState<number | null>(null);

  const contentItems = [
    {
      id: 1,
      title: 'Synthetic Intelligence 2026',
      description: 'Experience the next evolution of intelligence - synthetic consciousness that transcends human limitations and opens infinite possibilities.',
      category: 'AI Innovation',
      readTime: '15 min read',
      views: '2.3M',
      likes: '45K',
      image: '/api/placeholder/600/400',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: ['Consciousness Computing', 'Quantum Neural Networks', 'Biological-Digital Fusion', 'Multi-Dimensional AI'],
      link: '/pages/SyntheticIntelligence2026'
    },
    {
      id: 2,
      title: 'Advanced Tech Trends 2026',
      description: 'Discover the revolutionary technology trends that will reshape our world in 2026. From consciousness computing to cosmic intelligence.',
      category: 'Tech Trends',
      readTime: '18 min read',
      views: '1.8M',
      likes: '38K',
      image: '/api/placeholder/600/400',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
      features: ['Consciousness Computing', 'Quantum Consciousness', 'Biological-Digital Hybrids', 'Multi-Dimensional Computing'],
      link: '/pages/AdvancedTechTrends2026'
    },
    {
      id: 3,
      title: 'AI Innovation Revolution 2026',
      description: 'Experience the most revolutionary AI innovations that will transform every aspect of human life. From consciousness-driven AI to cosmic intelligence.',
      category: 'AI Innovation',
      readTime: '12 min read',
      views: '1.5M',
      likes: '32K',
      image: '/api/placeholder/600/400',
      icon: Bot,
      color: 'from-green-500 to-emerald-500',
      features: ['Consciousness-Driven AI', 'Quantum Neural Networks', 'Biological-Digital Fusion', 'Multi-Dimensional AI'],
      link: '/pages/AIInnovationRevolution2026'
    },
    {
      id: 4,
      title: 'Revolutionary Content Hub 2026',
      description: 'Discover our comprehensive content library on AI innovation, technology trends, and future insights. Experience the future of technology today.',
      category: 'Content Hub',
      readTime: '25 min read',
      views: '1.2M',
      likes: '28K',
      image: '/api/placeholder/600/400',
      icon: BookOpen,
      color: 'from-orange-500 to-red-500',
      features: ['50+ Content Pieces', '2.5M+ Total Views', '100K+ Engagements', '25K+ Shares'],
      link: '/pages/RevolutionaryContentHub2026'
    },
    {
      id: 5,
      title: 'Quantum-Neural Fusion 2026',
      description: 'Revolutionary fusion of quantum computing and neural networks for unprecedented processing power and problem-solving capabilities.',
      category: 'Quantum Computing',
      readTime: '14 min read',
      views: '980K',
      likes: '24K',
      image: '/api/placeholder/600/400',
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      features: ['Quantum Processing', 'Neural Networks', 'Exponential Speed', 'Parallel Universes'],
      link: '/pages/QuantumNeuralFusion2026'
    },
    {
      id: 6,
      title: 'Neural Interface Future',
      description: 'Bridge the gap between mind and machine with direct neural interfaces that enable seamless human-AI communication.',
      category: 'Neural Technology',
      readTime: '16 min read',
      views: '850K',
      likes: '22K',
      image: '/api/placeholder/600/400',
      icon: CircuitBoard,
      color: 'from-teal-500 to-cyan-500',
      features: ['Non-Invasive BCI', 'Thought Control', 'Neural Feedback', 'Mind-Machine Interface'],
      link: '/pages/NeuralInterfaceFuture'
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveContent((prev) => (prev + 1) % contentItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, contentItems.length]);

  const nextContent = () => {
    setActiveContent((prev) => (prev + 1) % contentItems.length);
  };

  const prevContent = () => {
    setActiveContent((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  const currentContent = contentItems[activeContent];

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Main Content Display */}
      <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20"></div>
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-8 p-8">
          {/* Content Info */}
          <div className="flex flex-col justify-center">
            <motion.div
              key={activeContent}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${currentContent.color} rounded-xl flex items-center justify-center`}>
                  <currentContent.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-xs font-semibold text-white">
                    {currentContent.category}
                  </span>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">
                {currentContent.title}
              </h3>

              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {currentContent.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{currentContent.readTime}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Eye className="w-4 h-4" />
                  <span>{currentContent.views} views</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Star className="w-4 h-4" />
                  <span>{currentContent.likes} likes</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>2026</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-purple-300 mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {currentContent.features.map((feature, index) => (
                    <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href={currentContent.link}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-white"
                >
                  <Play className="w-4 h-4" />
                  <span>Explore Content</span>
                </a>
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="px-6 py-3 border border-purple-400 rounded-lg hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 font-semibold text-purple-300"
                >
                  {isAutoPlaying ? 'Pause' : 'Play'}
                </button>
              </div>
            </motion.div>
          </div>

          {/* Content Image */}
          <div className="relative">
            <motion.div
              key={activeContent}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <img
                src={currentContent.image}
                alt={currentContent.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">{currentContent.title}</span>
                  <div className="flex space-x-2">
                    <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                      <Star className="w-4 h-4 text-white" />
                    </button>
                    <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <button
            onClick={prevContent}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={nextContent}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-4 left-4 flex space-x-2">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveContent(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeContent ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content Thumbnails */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {contentItems.map((item, index) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setHoveredContent(index)}
            onHoverEnd={() => setHoveredContent(null)}
            onClick={() => setActiveContent(index)}
            className={`relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 ${
              index === activeContent ? 'ring-2 ring-purple-400' : ''
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-24 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-2 left-2 right-2">
              <div className={`w-6 h-6 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mb-1`}>
                <item.icon className="w-3 h-3 text-white" />
              </div>
              <h4 className="text-xs font-semibold text-white truncate">{item.title}</h4>
              <p className="text-xs text-gray-300">{item.readTime}</p>
            </div>
            {hoveredContent === index && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-purple-500/20 flex items-center justify-center"
              >
                <Play className="w-6 h-6 text-white" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveContentShowcase;
