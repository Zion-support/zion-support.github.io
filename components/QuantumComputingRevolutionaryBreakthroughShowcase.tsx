import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Atom, 
  Cpu, 
  Shield, 
  Lock, 
  Globe, 
  Rocket, 
  Star,
  ArrowRight,
  CheckCircle,
  Target,
  Lightbulb,
  Users,
  BarChart3,
  Brain,
  Database,
  Network,
  Gauge
} from 'lucide-react';

const QuantumComputingRevolutionaryBreakthroughShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('applications');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const quantumContent = {
    applications: {
      title: "Quantum Computing Applications",
      subtitle: "Revolutionary applications transforming industries",
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      content: [
        {
          title: "Drug Discovery & Healthcare",
          description: "Quantum computers simulating molecular interactions for breakthrough treatments",
          impact: "1000x faster drug discovery",
          features: ["Molecular simulation", "Protein folding", "Personalized medicine", "Cancer research"],
          icon: <Atom className="w-6 h-6 text-green-500" />
        },
        {
          title: "Financial Modeling",
          description: "Quantum algorithms optimizing complex financial portfolios and risk analysis",
          impact: "Exponential optimization",
          features: ["Portfolio optimization", "Risk analysis", "Fraud detection", "Algorithmic trading"],
          icon: <BarChart3 className="w-6 h-6 text-blue-500" />
        },
        {
          title: "Climate Science",
          description: "Quantum simulations modeling climate systems and environmental solutions",
          impact: "Perfect climate modeling",
          features: ["Climate simulation", "Carbon capture", "Renewable energy", "Environmental modeling"],
          icon: <Globe className="w-6 h-6 text-emerald-500" />
        },
        {
          title: "Cryptography & Security",
          description: "Quantum-resistant encryption and ultra-secure communication systems",
          impact: "Unbreakable security",
          features: ["Quantum encryption", "Secure communication", "Blockchain security", "Data protection"],
          icon: <Shield className="w-6 h-6 text-red-500" />
        },
        {
          title: "Artificial Intelligence",
          description: "Quantum-enhanced AI with exponential processing capabilities",
          impact: "Revolutionary AI processing",
          features: ["Quantum neural networks", "Machine learning", "Pattern recognition", "Decision making"],
          icon: <Brain className="w-6 h-6 text-purple-500" />
        },
        {
          title: "Materials Science",
          description: "Quantum design of new materials with unprecedented properties",
          impact: "Revolutionary materials",
          features: ["Superconductors", "Quantum materials", "Energy storage", "Advanced composites"],
          icon: <Database className="w-6 h-6 text-orange-500" />
        }
      ]
    },
    breakthroughs: {
      title: "Quantum Breakthroughs 2025-2030",
      subtitle: "Revolutionary quantum technologies reshaping reality",
      icon: <Rocket className="w-8 h-8 text-blue-500" />,
      content: [
        {
          year: "2025",
          title: "1000+ Qubit Systems",
          description: "First commercial quantum computers with over 1000 qubits",
          impact: "Exponential computational power",
          features: ["Error correction", "Stable operations", "Real applications", "Commercial availability"],
          icon: <Cpu className="w-6 h-6 text-blue-500" />
        },
        {
          year: "2026",
          title: "Quantum Internet",
          description: "Global quantum communication network with perfect security",
          impact: "Unbreakable communication",
          features: ["Quantum encryption", "Instant transfer", "Perfect privacy", "Global network"],
          icon: <Network className="w-6 h-6 text-green-500" />
        },
        {
          year: "2027",
          title: "Quantum AI Integration",
          description: "Seamless integration of quantum computing with artificial intelligence",
          impact: "Revolutionary AI processing",
          features: ["Quantum neural networks", "Instant learning", "Infinite memory", "Creative AI"],
          icon: <Brain className="w-6 h-6 text-purple-500" />
        },
        {
          year: "2028",
          title: "Quantum Simulation Mastery",
          description: "Perfect simulation of complex systems at quantum level",
          impact: "Perfect system modeling",
          features: ["Molecular simulation", "Material design", "Drug discovery", "Climate modeling"],
          icon: <Atom className="w-6 h-6 text-emerald-500" />
        },
        {
          year: "2029",
          title: "Quantum Time Manipulation",
          description: "Quantum systems manipulating time perception and processing",
          impact: "Time optimization",
          features: ["Temporal computing", "Time dilation", "Instant processing", "Temporal AI"],
          icon: <Gauge className="w-6 h-6 text-orange-500" />
        },
        {
          year: "2030",
          title: "Quantum Reality Engineering",
          description: "Quantum systems engineering reality at fundamental levels",
          impact: "Reality manipulation",
          features: ["Matter creation", "Energy generation", "Space manipulation", "Reality control"],
          icon: <Star className="w-6 h-6 text-yellow-500" />
        }
      ]
    },
    technologies: {
      title: "Quantum Technologies",
      subtitle: "Cutting-edge quantum technologies and their applications",
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      content: [
        {
          title: "Quantum Supremacy",
          description: "Quantum computers solving problems impossible for classical computers",
          impact: "Exponential speedup",
          features: ["Problem solving", "Optimization", "Simulation", "Cryptography"],
          icon: <Target className="w-6 h-6 text-red-500" />
        },
        {
          title: "Quantum Entanglement",
          description: "Instantaneous correlation between quantum particles across any distance",
          impact: "Instant communication",
          features: ["Quantum teleportation", "Secure communication", "Quantum sensing", "Quantum computing"],
          icon: <Zap className="w-6 h-6 text-purple-500" />
        },
        {
          title: "Quantum Tunneling",
          description: "Particles passing through energy barriers impossible in classical physics",
          impact: "Revolutionary electronics",
          features: ["Quantum electronics", "Energy efficiency", "Advanced sensors", "Quantum devices"],
          icon: <Rocket className="w-6 h-6 text-blue-500" />
        },
        {
          title: "Quantum Superposition",
          description: "Quantum particles existing in multiple states simultaneously",
          impact: "Parallel processing",
          features: ["Parallel computation", "Quantum algorithms", "Optimization", "Simulation"],
          icon: <Cpu className="w-6 h-6 text-green-500" />
        },
        {
          title: "Quantum Interference",
          description: "Quantum waves interfering to create new computational possibilities",
          impact: "Enhanced algorithms",
          features: ["Quantum algorithms", "Optimization", "Search algorithms", "Machine learning"],
          icon: <BarChart3 className="w-6 h-6 text-indigo-500" />
        },
        {
          title: "Quantum Error Correction",
          description: "Advanced error correction maintaining quantum coherence",
          impact: "Stable quantum computing",
          features: ["Error correction", "Quantum stability", "Reliable computation", "Scalable systems"],
          icon: <Shield className="w-6 h-6 text-emerald-500" />
        }
      ]
    }
  };

  const categories = [
    { id: 'applications', label: 'Applications', icon: <Zap className="w-5 h-5" /> },
    { id: 'breakthroughs', label: 'Breakthroughs', icon: <Rocket className="w-5 h-5" /> },
    { id: 'technologies', label: 'Technologies', icon: <Lightbulb className="w-5 h-5" /> }
  ];

  const currentContent = quantumContent[activeCategory as keyof typeof quantumContent];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6"
          >
            {currentContent.icon}
          </motion.div>
          
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {currentContent.title}
          </motion.h2>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {currentContent.subtitle}
          </motion.p>
        </div>

        {/* Category Navigation */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Content Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentContent.content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                {item.year && (
                  <span className="text-2xl font-bold text-purple-400">{item.year}</span>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {item.description}
              </p>
              
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg p-3 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-semibold text-purple-400">Impact</span>
                </div>
                <p className="text-white font-medium">{item.impact}</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                {item.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Harness Quantum Power?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the quantum revolution and discover how quantum computing can transform your business and industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quantum-computing-revolutionary-breakthroughs"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                Explore Quantum Solutions
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Get Quantum Consultation
                <Rocket className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default QuantumComputingRevolutionaryBreakthroughShowcase;