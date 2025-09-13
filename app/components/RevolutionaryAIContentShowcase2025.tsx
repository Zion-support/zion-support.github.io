import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Cpu, 
  Database, 
  Shield, 
  Network, 
  Rocket, 
  Star,
  ArrowRight,
  Play,
  Users,
  TrendingUp,
  Award,
  CheckCircle
} from 'lucide-react';

const RevolutionaryAIContentShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Technologies', icon: Star },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', icon: Zap },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'automation', name: 'Automation', icon: Rocket }
  ];

  const revolutionaryContent = [
    {
      id: 1,
      title: "AI Consciousness Platform 2025",
      description: "Breakthrough AI system with emergent consciousness capabilities, enabling human-like reasoning and emotional intelligence.",
      category: 'ai',
      image: "/api/placeholder/600/400",
      features: ["Self-learning algorithms", "Emotional intelligence", "Creative problem solving"],
      price: "$2,999/month",
      marketPrice: "$5,000/month",
      savings: "40%",
      rating: 4.9,
      reviews: 1247,
      status: "Live Now",
      badge: "Revolutionary"
    },
    {
      id: 2,
      title: "Quantum AI Hybrid System",
      description: "First-of-its-kind quantum-classical AI system that processes information 1000x faster than traditional systems.",
      category: 'quantum',
      image: "/api/placeholder/600/400",
      features: ["Quantum processing", "Classical AI integration", "Real-time optimization"],
      price: "$4,999/month",
      marketPrice: "$12,000/month",
      savings: "58%",
      rating: 4.8,
      reviews: 892,
      status: "Beta Access",
      badge: "Exclusive"
    },
    {
      id: 3,
      title: "Autonomous Security AI",
      description: "Self-evolving cybersecurity system that adapts to new threats in real-time without human intervention.",
      category: 'security',
      image: "/api/placeholder/600/400",
      features: ["Threat prediction", "Auto-response", "Zero-day protection"],
      price: "$1,799/month",
      marketPrice: "$3,500/month",
      savings: "49%",
      rating: 4.9,
      reviews: 2156,
      status: "Live Now",
      badge: "Advanced"
    },
    {
      id: 4,
      title: "Universal Automation Engine",
      description: "AI-powered automation platform that can automate any business process across any industry or technology stack.",
      category: 'automation',
      image: "/api/placeholder/600/400",
      features: ["Universal compatibility", "Process discovery", "Intelligent automation"],
      price: "$2,499/month",
      marketPrice: "$4,200/month",
      savings: "41%",
      rating: 4.7,
      reviews: 1834,
      status: "Coming Soon",
      badge: "Innovative"
    },
    {
      id: 5,
      title: "Neural Data Processing",
      description: "Revolutionary data processing system that uses neural networks to understand and process any data format instantly.",
      category: 'ai',
      image: "/api/placeholder/600/400",
      features: ["Universal data processing", "Neural understanding", "Instant insights"],
      price: "$1,299/month",
      marketPrice: "$2,800/month",
      savings: "54%",
      rating: 4.8,
      reviews: 967,
      status: "Live Now",
      badge: "Breakthrough"
    },
    {
      id: 6,
      title: "Quantum Security Protocol",
      description: "Unbreakable security system using quantum encryption principles for absolute data protection.",
      category: 'quantum',
      image: "/api/placeholder/600/400",
      features: ["Quantum encryption", "Unbreakable security", "Future-proof"],
      price: "$3,299/month",
      marketPrice: "$6,500/month",
      savings: "49%",
      rating: 4.9,
      reviews: 743,
      status: "Limited Release",
      badge: "Ultimate"
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? revolutionaryContent 
    : revolutionaryContent.filter(item => item.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-transparent to-cyan-600/20"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-6">
            <Rocket className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Revolutionary AI Technologies 2025</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Next-Gen AI
            </span>
            <br />
            <span className="text-white">Technologies</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the future of artificial intelligence with our revolutionary technologies 
            that are transforming industries and redefining what's possible.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20 hover:border-white/40'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{category.name}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredContent.map((item, index) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                layout
                onHoverStart={() => setHoveredCard(item.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative"
              >
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25">
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.badge}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === 'Live Now' 
                        ? 'bg-green-600 text-white' 
                        : item.status === 'Beta Access'
                        ? 'bg-blue-600 text-white'
                        : item.status === 'Coming Soon'
                        ? 'bg-orange-600 text-white'
                        : 'bg-purple-600 text-white'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      {item.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 mb-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-white">{item.price}</span>
                          <span className="text-sm text-gray-400 line-through">{item.marketPrice}</span>
                        </div>
                        <span className="text-sm text-green-400 font-medium">Save {item.savings}</span>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-6">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(item.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-300">
                        {item.rating} ({item.reviews} reviews)
                      </span>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <span>Explore Technology</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === item.id ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm pointer-events-none"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already using our revolutionary AI technologies 
              to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-xl font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-purple-500 text-purple-300 py-4 px-8 rounded-xl font-medium hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Users className="w-5 h-5" />
                <span>Schedule Consultation</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RevolutionaryAIContentShowcase2025;