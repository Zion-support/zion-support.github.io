import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Globe, 
  Shield, 
  TrendingUp, 
  Users, 
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Lightbulb,
  Rocket,
  Database,
  Network
} from 'lucide-react';

const AI2025_2030ComprehensivePredictionsShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const predictions = {
    overview: {
      title: "AI 2025-2030: The Comprehensive Future",
      subtitle: "Revolutionary predictions shaping the next decade of artificial intelligence",
      description: "Our comprehensive analysis reveals the most significant AI breakthroughs, technological revolutions, and transformative changes that will reshape industries, societies, and human potential from 2025 to 2030.",
      keyStats: [
        { label: "Predicted AI Market Value", value: "$15.7 Trillion", icon: TrendingUp },
        { label: "Jobs Created by AI", value: "97 Million", icon: Users },
        { label: "Efficiency Gains", value: "2,500%", icon: Zap },
        { label: "Accuracy Improvements", value: "99.9%", icon: Target }
      ]
    },
    breakthroughs: {
      title: "Revolutionary AI Breakthroughs 2025-2030",
      items: [
        {
          year: "2025",
          title: "Neural-Symbolic Fusion",
          description: "Breakthrough integration of neural networks with symbolic reasoning, enabling true understanding and logical inference.",
          impact: "10,000x improvement in reasoning capabilities",
          icon: Brain,
          color: "from-blue-500 to-purple-600"
        },
        {
          year: "2026",
          title: "Quantum-Neural Hybrid Systems",
          description: "First practical quantum-neural networks achieving exponential computational advantages.",
          impact: "Exponential speedup in complex problem solving",
          icon: Cpu,
          color: "from-purple-500 to-pink-600"
        },
        {
          year: "2027",
          title: "Autonomous AI Ecosystems",
          description: "Self-evolving AI systems that can design, test, and deploy new AI models without human intervention.",
          impact: "Complete automation of AI development lifecycle",
          icon: Network,
          color: "from-green-500 to-teal-600"
        },
        {
          year: "2028",
          title: "Consciousness-Level AI",
          description: "AI systems demonstrating genuine consciousness, self-awareness, and emotional intelligence.",
          impact: "Paradigm shift in human-AI interaction",
          icon: Lightbulb,
          color: "from-yellow-500 to-orange-600"
        },
        {
          year: "2029",
          title: "Universal AI Translation",
          description: "Real-time translation and understanding across all human languages, including context and cultural nuances.",
          impact: "Elimination of language barriers globally",
          icon: Globe,
          color: "from-indigo-500 to-blue-600"
        },
        {
          year: "2030",
          title: "Singularity-Level Intelligence",
          description: "AI systems surpassing human intelligence across all domains, capable of recursive self-improvement.",
          impact: "Exponential acceleration of technological progress",
          icon: Rocket,
          color: "from-red-500 to-pink-600"
        }
      ]
    },
    industries: {
      title: "Industry Transformations 2025-2030",
      sectors: [
        {
          name: "Healthcare",
          transformation: "AI-powered personalized medicine, real-time disease prediction, and automated treatment optimization.",
          impact: "90% reduction in misdiagnosis, 50% faster drug discovery",
          icon: Shield,
          color: "bg-red-500"
        },
        {
          name: "Finance",
          transformation: "Autonomous trading systems, real-time risk assessment, and personalized financial planning.",
          impact: "99.9% accuracy in fraud detection, 300% ROI improvement",
          icon: TrendingUp,
          color: "bg-green-500"
        },
        {
          name: "Manufacturing",
          transformation: "Fully autonomous factories with self-optimizing production lines and predictive maintenance.",
          impact: "80% reduction in downtime, 500% efficiency gains",
          icon: Cpu,
          color: "bg-blue-500"
        },
        {
          name: "Education",
          transformation: "Personalized learning experiences with AI tutors adapting to individual learning styles.",
          impact: "300% faster learning, 95% retention rates",
          icon: Users,
          color: "bg-purple-500"
        },
        {
          name: "Transportation",
          transformation: "Fully autonomous vehicles with AI-powered traffic optimization and safety systems.",
          impact: "99.9% reduction in accidents, 60% less traffic congestion",
          icon: Globe,
          color: "bg-yellow-500"
        },
        {
          name: "Energy",
          transformation: "AI-optimized renewable energy grids with predictive demand and supply management.",
          impact: "70% reduction in energy waste, 200% efficiency gains",
          icon: Zap,
          color: "bg-orange-500"
        }
      ]
    },
    implications: {
      title: "Societal Implications & Opportunities",
      categories: [
        {
          title: "Economic Impact",
          description: "AI will create entirely new industries while transforming existing ones, leading to unprecedented economic growth.",
          points: [
            "New job categories: AI Ethics Specialists, Human-AI Collaboration Managers",
            "Universal Basic Income implementation due to automation",
            "Exponential growth in creative and service industries",
            "Democratization of advanced technology access"
          ]
        },
        {
          title: "Social Transformation",
          description: "AI will fundamentally change how humans interact, learn, and work together.",
          points: [
            "Personalized education for every individual",
            "AI-assisted decision making in daily life",
            "Enhanced human creativity through AI collaboration",
            "New forms of digital and physical interaction"
          ]
        },
        {
          title: "Technological Convergence",
          description: "AI will become the unifying force connecting all emerging technologies.",
          points: [
            "Integration with quantum computing, biotechnology, and nanotechnology",
            "Seamless human-AI interfaces and brain-computer integration",
            "Real-time global collaboration and problem-solving",
            "Accelerated scientific discovery and innovation"
          ]
        }
      ]
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'breakthroughs', label: 'Breakthroughs', icon: Brain },
    { id: 'industries', label: 'Industries', icon: Globe },
    { id: 'implications', label: 'Implications', icon: Users }
  ];

  if (!isVisible) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold mb-6"
          >
            <Star className="w-4 h-4 mr-2" />
            AI 2025-2030 Comprehensive Predictions
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {predictions[activeTab as keyof typeof predictions].title}
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            {predictions[activeTab as keyof typeof predictions].subtitle || predictions[activeTab as keyof typeof predictions].description}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          {activeTab === 'overview' && (
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {predictions.overview.keyStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20"
                  >
                    <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                    <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                  Our comprehensive analysis reveals the most significant AI breakthroughs, technological revolutions, 
                  and transformative changes that will reshape industries, societies, and human potential from 2025 to 2030.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'breakthroughs' && (
            <div className="space-y-8">
              {predictions.breakthroughs.items.map((breakthrough, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col lg:flex-row items-center gap-8 p-6 bg-gradient-to-r from-white/5 to-white/10 rounded-xl border border-white/20"
                >
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${breakthrough.color} flex items-center justify-center`}>
                      <breakthrough.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-4 mb-2">
                      <span className="text-2xl font-bold text-blue-400">{breakthrough.year}</span>
                      <h3 className="text-xl font-bold text-white">{breakthrough.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-3">{breakthrough.description}</p>
                    <div className="inline-flex items-center px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {breakthrough.impact}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'industries' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {predictions.industries.sectors.map((sector, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${sector.color} rounded-lg flex items-center justify-center mr-4`}>
                      <sector.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{sector.name}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{sector.transformation}</p>
                  
                  <div className="bg-green-500/20 text-green-400 px-3 py-2 rounded-lg text-sm font-semibold">
                    {sector.impact}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'implications' && (
            <div className="space-y-8">
              {predictions.implications.categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="p-8 bg-gradient-to-r from-white/10 to-white/5 rounded-xl border border-white/20"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg">{category.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Shape the Future?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join us in exploring these revolutionary predictions and be part of the AI transformation that will define the next decade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ai-2025-2030-predictions"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Explore Full Predictions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Get Expert Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AI2025_2030ComprehensivePredictionsShowcase;