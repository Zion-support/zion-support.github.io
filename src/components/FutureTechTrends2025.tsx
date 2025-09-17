import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Database, 
  Cloud, 
  Shield, 
  Zap,
  Globe,
  Users,
  TrendingUp,
  ArrowRight,
  Play,
  CheckCircle,
  Star,
  Sparkles,
  Rocket,
  Target,
  Award
} from 'lucide-react';
const FutureTechTrends2025 = () => {
  const [activeTrend, setActiveTrend] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTrend((prev) => (prev + 1) % trends.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const trends = [
    {
      title: "Artificial General Intelligence",
      description: "The next frontier of AI that can understand, learn, and apply knowledge across any domain",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      impact: "Transform every industry",
      timeline: "2025-2027"
    },
    {
      title: "Quantum Computing",
      description: "Revolutionary computing power that solves problems impossible for classical computers",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500",
      impact: "Breakthrough discoveries",
      timeline: "2025-2030"
    },
    {
      title: "Edge AI",
      description: "Intelligent processing at the edge of networks for real-time decision making",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      impact: "Instant responses",
      timeline: "2025-2026"
    },
    {
      title: "Neural Interfaces",
      description: "Direct brain-computer interfaces enabling seamless human-AI interaction",
      icon: Target,
      color: "from-green-500 to-emerald-500",
      impact: "Mind-machine fusion",
      timeline: "2025-2028"
    },
    {
      title: "Autonomous Systems",
      description: "Self-managing systems that operate independently with minimal human intervention",
      icon: Rocket,
      color: "from-red-500 to-pink-500",
      impact: "Complete automation",
      timeline: "2025-2029"
    }
  ];
  const predictions = [
    {
      category: "AI & Machine Learning",
      prediction: "AI will become 1000x more powerful",
      probability: "95%",
      icon: Brain
    },
    {
      category: "Quantum Computing",
      prediction: "Quantum supremacy in practical applications",
      probability: "80%",
      icon: Cpu
    },
    {
      category: "Edge Computing",
      prediction: "90% of data processed at the edge",
      probability: "85%",
      icon: Zap
    },
    {
      category: "Neural Networks",
      prediction: "Human-level reasoning in AI systems",
      probability: "70%",
      icon: Target
    }
  ];
  const stats = [
    { number: "$15T", label: "Market Value by 2030", icon: TrendingUp },
    { number: "2.5B", label: "AI-Powered Devices", icon: Globe },
    { number: "85%", label: "Businesses Using AI", icon: Users },
    { number: "500%", label: "Productivity Increase", icon: Award }
  ];
  return (
    <div className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%2520width%253D%252280%2522%2520height%253D%252280%2522%2520viewBox%253D%25220%25200%252080%252080%2522%2520xmlns%253D%2522http%253A%2F%2Fwww.w3.org%2F2000%2Fsvg%2522%253E%253Cg%2520fill%253D%2522none%2522%2520fill-rule%253D%2522evenodd%2522%253E%253Cg%2520fill%253D%2522%2523ffffff%2522%2520fill-opacity%253D%25220.03%2522%253E%253Cpath%2520d%253D%2522M40%252040c0-22.091-17.909-40-40-40v80c22.091%25200%252040-17.909%252040-40z%2522%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-40" />
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-8">
            <Sparkles className="w-5 h-5" />
            <span>FUTURE TECH TRENDS 2025</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            The Future is
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Now
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover the revolutionary technologies that will reshape our world in 2025 and beyond. 
            From AI breakthroughs to quantum computing, the future is unfolding before our eyes.
          </p>
        </motion.div>
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl border border-white border-opacity-20"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Trends Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Revolutionary Trends
            </h3>
            <div className="space-y-4">
              {trends.map((trend, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className={`p-6 rounded-2xl bg-gradient-to-r ${trend.color} bg-opacity-10 border border-white border-opacity-20 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300 cursor-pointer ${
                    activeTrend === index ? 'ring-2 ring-white ring-opacity-50' : ''
                  }`}
                  onClick={() => setActiveTrend(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${trend.color} bg-opacity-20`}>
                      <trend.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {trend.title}
                      </h4>
                      <p className="text-gray-300 mb-3">
                        {trend.description}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-sm font-medium text-green-400">
                            {trend.impact}
                          </span>
                        </div>
                        <div className="text-sm text-gray-400">
                          {trend.timeline}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="relative h-96 bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTrend}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center p-8"
                >
                  <div className="text-center">
                    <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r ${trends[activeTrend].color} bg-opacity-20 flex items-center justify-center`}>
                        {React.createElement(trends[activeTrend].icon, { className: "w-12 h-12 text-white" })}
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">
                      {trends[activeTrend].title}
                    </h4>
                    <p className="text-gray-300 text-lg mb-4">
                      {trends[activeTrend].description}
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <div className="bg-green-500 bg-opacity-20 text-green-400 px-3 py-1 rounded-full text-sm">
                        {trends[activeTrend].impact}
                      </div>
                      <div className="bg-blue-500 bg-opacity-20 text-blue-400 px-3 py-1 rounded-full text-sm">
                        {trends[activeTrend].timeline}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-1000" />
              <div className="absolute top-1/2 right-8 w-1 h-1 bg-white rounded-full animate-pulse delay-2000" />
            </div>
          </motion.div>
        </div>
        {/* Predictions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Expert Predictions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {predictions.map((prediction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="p-6 bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl border border-white border-opacity-20 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  {React.createElement(prediction.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  {prediction.category}
                </h4>
                <p className="text-gray-300 mb-4 text-sm">
                  {prediction.prediction}
                </p>
                <div className="flex items-center justify-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-yellow-400 font-bold">
                    {prediction.probability}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Be Part of the Future
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't just watch the future unfold—be an active participant in shaping it
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Trends
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center gap-2">
                Get Insights
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );

export default FutureTechTrends2025;
</div></div></div></div></div>