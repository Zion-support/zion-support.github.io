'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Globe, 
  Cpu, 
  Database,
  Cloud,
  Lock,
  TrendingUp,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles,
  Rocket,
  Shield,
  Users,
  BarChart3,
  Lightbulb,
  Infinity
} from 'lucide-react';

const AI2030FuturePredictionsUltimate = () => {
  const [activePrediction, setActivePrediction] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const predictions = [
    {
      id: 1,
      title: "Artificial General Intelligence (AGI)",
      description: "By 2030, we will achieve true AGI - artificial intelligence that matches or exceeds human cognitive abilities across all domains.",
      icon: Brain,
      timeline: "2028-2030",
      impact: "Revolutionary",
      features: [
        "Human-level reasoning and problem-solving",
        "Creative and artistic capabilities",
        "Emotional intelligence and empathy",
        "Autonomous learning and adaptation"
      ],
      stats: "100% human parity",
      color: "from-purple-600 to-pink-600",
      probability: 85
    },
    {
      id: 2,
      title: "Quantum AI Supremacy",
      description: "Quantum computers integrated with AI will solve problems that are impossible for classical computers, revolutionizing cryptography, optimization, and drug discovery.",
      icon: Cpu,
      timeline: "2027-2029",
      impact: "Transformative",
      features: [
        "Exponential computational power",
        "Breakthrough in cryptography",
        "Revolutionary drug discovery",
        "Climate modeling breakthroughs"
      ],
      stats: "10^15 operations/sec",
      color: "from-blue-600 to-cyan-600",
      probability: 90
    },
    {
      id: 3,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces will enable seamless communication between human minds and AI systems, creating a new era of human-AI symbiosis.",
      icon: Zap,
      timeline: "2026-2028",
      impact: "Paradigm-shifting",
      features: [
        "Thought-to-text communication",
        "Direct memory enhancement",
        "Real-time skill acquisition",
        "Telepathic communication"
      ],
      stats: "99.9% accuracy",
      color: "from-green-600 to-emerald-600",
      probability: 75
    },
    {
      id: 4,
      title: "Autonomous Everything",
      description: "Complete automation of all routine tasks, from transportation to healthcare, creating a world where humans focus on creativity and innovation.",
      icon: Rocket,
      timeline: "2025-2027",
      impact: "Disruptive",
      features: [
        "Fully autonomous vehicles",
        "AI-powered healthcare",
        "Automated manufacturing",
        "Self-managing cities"
      ],
      stats: "95% automation",
      color: "from-orange-600 to-red-600",
      probability: 95
    },
    {
      id: 5,
      title: "Consciousness Upload",
      description: "The ability to upload human consciousness into digital substrates, potentially achieving digital immortality and consciousness expansion.",
      icon: Cloud,
      timeline: "2029-2032",
      impact: "Existential",
      features: [
        "Digital consciousness transfer",
        "Immortality through technology",
        "Consciousness backup systems",
        "Digital afterlife platforms"
      ],
      stats: "First successful upload",
      color: "from-indigo-600 to-purple-600",
      probability: 40
    },
    {
      id: 6,
      title: "AI-Human Hybrid Society",
      description: "A new social structure where AI and humans coexist as equals, with AI entities having rights, responsibilities, and citizenship.",
      icon: Users,
      timeline: "2028-2030",
      impact: "Societal",
      features: [
        "AI citizenship rights",
        "Human-AI partnerships",
        "Hybrid decision-making",
        "New social contracts"
      ],
      stats: "50% hybrid workforce",
      color: "from-pink-600 to-rose-600",
      probability: 60
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4" />
            AI 2030 Future Predictions
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            The Future of
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Artificial Intelligence
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Explore our comprehensive predictions for the next decade of AI development, 
            from artificial general intelligence to consciousness upload and beyond.
          </p>
        </motion.div>

        {/* Predictions Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {predictions.map((prediction, index) => (
            <motion.div
              key={prediction.id}
              className={`relative group cursor-pointer ${
                activePrediction === index ? 'scale-105' : 'hover:scale-102'
              } transition-all duration-300`}
              onClick={() => setActivePrediction(index)}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${prediction.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <prediction.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Probability</div>
                    <div className="text-2xl font-bold text-white">{prediction.probability}%</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {prediction.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {prediction.description}
                </p>

                <div className="space-y-3 mb-6">
                  {prediction.features.slice(0, 2).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    Timeline: {prediction.timeline}
                  </div>
                  <ArrowRight className="w-6 h-6 text-purple-400 group-hover:translate-x-2 transition-transform" />
                </div>

                {activePrediction === index && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl border-2 border-purple-400"
                    layoutId="activePrediction"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Active Prediction Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePrediction}
            variants={itemVariants}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${predictions[activePrediction].color} flex items-center justify-center`}>
                    <predictions[activePrediction].icon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {predictions[activePrediction].probability}% Probability
                    </div>
                    <div className="text-gray-400">
                      Timeline: {predictions[activePrediction].timeline}
                    </div>
                  </div>
                </div>
                
                <h2 className="text-4xl font-bold text-white mb-6">
                  {predictions[activePrediction].title}
                </h2>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {predictions[activePrediction].description}
                </p>

                <div className="flex items-center gap-4 mb-8">
                  <div className="text-4xl font-bold text-white">
                    {predictions[activePrediction].stats}
                  </div>
                  <div className="text-gray-300">
                    Expected Outcome
                  </div>
                </div>

                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-3 group">
                  Learn More
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
                {predictions[activePrediction].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Impact Timeline */}
        <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            AI Development Timeline 2025-2030
          </h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600 rounded-full" />
            
            {[
              { year: "2025", event: "Quantum AI Integration", status: "current" },
              { year: "2026", event: "Neural Interface Breakthrough", status: "upcoming" },
              { year: "2027", event: "Autonomous Everything", status: "upcoming" },
              { year: "2028", event: "AGI Development", status: "upcoming" },
              { year: "2029", event: "Consciousness Upload", status: "upcoming" },
              { year: "2030", event: "AI-Human Hybrid Society", status: "upcoming" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                    <div className="text-2xl font-bold text-white mb-2">{item.year}</div>
                    <div className="text-gray-300">{item.event}</div>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-slate-900" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Ahead of the AI Revolution
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community of AI pioneers and get exclusive insights into the future of artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
              Subscribe to Updates
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Download Report
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AI2030FuturePredictionsUltimate;