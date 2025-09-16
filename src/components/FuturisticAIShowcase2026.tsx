import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Globe, 
  Shield, 
  Users,
  BarChart3,
  Lightbulb,
  ArrowRight,
  Play,
  RotateCcw
} from 'lucide-react';

const FuturisticAIShowcase2026 = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const demos = [
    {
      id: 1,
      title: "Neural Pattern Recognition",
      description: "Advanced AI that recognizes complex patterns in real-time data streams with 99.9% accuracy.",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      metrics: { accuracy: "99.9%", speed: "0.1ms", data: "1TB/sec" }
    },
    {
      id: 2,
      title: "Quantum Processing Engine",
      description: "Revolutionary quantum computing that processes information at the speed of light.",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      metrics: { qubits: "1000+", speed: "Light", power: "Unlimited" }
    },
    {
      id: 3,
      title: "Global AI Network",
      description: "Worldwide interconnected AI system that learns and adapts across all connected devices.",
      icon: Globe,
      color: "from-green-500 to-teal-500",
      metrics: { nodes: "1M+", countries: "195", uptime: "99.99%" }
    },
    {
      id: 4,
      title: "Adaptive Security Matrix",
      description: "Self-evolving security system that anticipates and prevents threats before they occur.",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      metrics: { threats: "0", response: "Instant", coverage: "100%" }
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % demos.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isPlaying, demos.length]);

  const handleDemoChange = (index: number) => {
    setActiveDemo(index);
    setIsPlaying(false);
  };

  const resetDemo = () => {
    setIsPlaying(true);
    setActiveDemo(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Lightbulb className="w-12 h-12 text-yellow-400" />
            </motion.div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Futuristic AI
            </span>
            <br />
            <span className="text-white">Showcase 2026</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Experience the next generation of artificial intelligence that's reshaping our world
          </p>
        </motion.div>
      </div>

      {/* Interactive Demo Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Demo Selector */}
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Live AI Demonstrations</h2>
              <div className="flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                >
                  {isPlaying ? <Play className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={resetDemo}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                >
                  <RotateCcw className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {demos.map((demo, index) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleDemoChange(index)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeDemo === index 
                    ? 'bg-white/20 border-2 border-blue-400 shadow-lg shadow-blue-400/25' 
                    : 'bg-white/10 border-2 border-transparent hover:bg-white/15'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${demo.color} flex items-center justify-center flex-shrink-0`}>
                    <demo.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{demo.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{demo.description}</p>
                    
                    <div className="flex items-center space-x-4 mt-3">
                      {Object.entries(demo.metrics).map(([key, value]) => (
                        <div key={key} className="text-xs">
                          <span className="text-gray-400">{key}: </span>
                          <span className="text-yellow-400 font-semibold">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <ArrowRight className={`w-5 h-5 transition-all duration-300 ${
                    activeDemo === index ? 'text-blue-400' : 'text-gray-400'
                  }`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Demo Visualizer */}
          <div className="relative">
            <div className="bg-black/30 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDemo}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className={`w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r ${demos[activeDemo].color} flex items-center justify-center`}>
                    <demos[activeDemo].icon className="w-16 h-16 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4">{demos[activeDemo].title}</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">{demos[activeDemo].description}</p>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(demos[activeDemo].metrics).map(([key, value], index) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white/10 rounded-xl p-4"
                      >
                        <div className="text-2xl font-bold text-yellow-400">{value}</div>
                        <div className="text-sm text-gray-400 capitalize">{key}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/30 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400/30 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-pink-400/30 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-black/20 backdrop-blur-lg py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Performance <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Metrics</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world performance data from our AI systems deployed across global infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Processing Speed", value: "1M+ Ops/sec", icon: Zap, color: "text-blue-400" },
              { label: "Accuracy Rate", value: "99.97%", icon: Brain, color: "text-green-400" },
              { label: "Global Users", value: "50M+", icon: Users, color: "text-purple-400" },
              { label: "Uptime", value: "99.99%", icon: BarChart3, color: "text-yellow-400" }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <metric.icon className={`w-8 h-8 ${metric.color}`} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-gray-300 font-medium">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-12 text-center border border-white/20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience the Future of AI
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the revolution and discover how our futuristic AI technologies can transform your business operations and unlock unprecedented possibilities.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default FuturisticAIShowcase2026;