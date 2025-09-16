import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Cpu, 
  Database, 
  Shield, 
  Globe, 
  Rocket, 
  Atom,
  Sparkles,
  TrendingUp,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Lightbulb,
  Gauge,
  BarChart3,
  PieChart,
  Activity,
  Layers,
  Network,
  Code,
  Eye,
  MessageSquare,
  Search,
  Filter,
  Settings,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

const AIInnovationRevolution2025 = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);

  const demos = [
    {
      id: 'neural-networks',
      title: 'Neural Network Visualization',
      description: 'Watch AI learn and adapt in real-time',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'predictive-analytics',
      title: 'Predictive Analytics Engine',
      description: 'See how AI predicts future trends',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'natural-language',
      title: 'Natural Language Processing',
      description: 'Experience conversational AI',
      icon: MessageSquare,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision System',
      description: 'AI that sees and understands',
      icon: Eye,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const innovations = [
    {
      title: "Conscious AI Systems",
      description: "AI that exhibits genuine awareness and understanding",
      icon: Brain,
      stats: "99.7% accuracy",
      color: "purple"
    },
    {
      title: "Quantum Neural Networks",
      description: "Exponentially faster processing with quantum computing",
      icon: Atom,
      stats: "1000x speed",
      color: "blue"
    },
    {
      title: "Autonomous Decision Making",
      description: "AI that makes complex decisions independently",
      icon: Target,
      stats: "95% success rate",
      color: "green"
    },
    {
      title: "Real-time Learning",
      description: "Continuous adaptation and improvement",
      icon: Zap,
      stats: "Instant updates",
      color: "yellow"
    }
  ];

  const features = [
    {
      category: "Core AI Technologies",
      items: [
        { name: "Machine Learning", description: "Advanced algorithms that learn from data", icon: Cpu },
        { name: "Deep Learning", description: "Neural networks with multiple layers", icon: Layers },
        { name: "Natural Language Processing", description: "Understanding and generating human language", icon: MessageSquare },
        { name: "Computer Vision", description: "AI that can see and interpret visual data", icon: Eye }
      ]
    },
    {
      category: "Advanced Capabilities",
      items: [
        { name: "Predictive Analytics", description: "Forecasting future trends and outcomes", icon: TrendingUp },
        { name: "Autonomous Systems", description: "Self-operating AI systems", icon: Settings },
        { name: "Real-time Processing", description: "Instant data analysis and response", icon: Zap },
        { name: "Multi-modal AI", description: "Processing multiple types of data simultaneously", icon: Network }
      ]
    },
    {
      category: "Enterprise Solutions",
      items: [
        { name: "AI-Powered Analytics", description: "Deep insights from your data", icon: BarChart3 },
        { name: "Intelligent Automation", description: "Automating complex business processes", icon: Activity },
        { name: "Smart Search", description: "Finding information with AI assistance", icon: Search },
        { name: "Predictive Maintenance", description: "Preventing equipment failures before they happen", icon: Shield }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Elena Rodriguez",
      role: "Chief AI Officer, TechVision",
      content: "This AI platform has transformed our entire operation. The results are beyond our wildest expectations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      company: "TechVision"
    },
    {
      name: "Marcus Chen",
      role: "CTO, InnovateLabs",
      content: "The most advanced AI system we've ever used. It's like having a team of geniuses working 24/7.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      company: "InnovateLabs"
    },
    {
      name: "Sarah Kim",
      role: "Director of AI, FutureCorp",
      content: "Revolutionary technology that's already paying for itself. Our efficiency has increased by 400%.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      company: "FutureCorp"
    }
  ];

  const stats = [
    { label: "AI Models Deployed", value: "10,000+", icon: Brain },
    { label: "Data Points Processed", value: "1B+", icon: Database },
    { label: "Accuracy Rate", value: "99.7%", icon: Target },
    { label: "Processing Speed", value: "1000x", icon: Zap },
    { label: "Cost Reduction", value: "85%", icon: TrendingUp },
    { label: "Customer Satisfaction", value: "98%", icon: Star }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Innovation
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Revolution 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the most advanced artificial intelligence technologies that are reshaping industries, 
              transforming businesses, and creating unprecedented opportunities for growth and innovation.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Explore AI Solutions
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Interactive Demo Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Interactive AI Demonstrations
          </h2>
          <p className="text-xl text-gray-300">
            Experience our AI technologies in action
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {demos.map((demo, index) => (
              <motion.div
                key={demo.id}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  currentDemo === index
                    ? `bg-gradient-to-r ${demo.color} text-white`
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => setCurrentDemo(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4">
                  <demo.icon className="w-8 h-8" />
                  <div>
                    <h3 className="text-xl font-semibold">{demo.title}</h3>
                    <p className="text-sm opacity-90">{demo.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            key={currentDemo}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`bg-gradient-to-br ${demos[currentDemo].color} p-8 rounded-3xl`}
          >
            <div className="text-center">
              <demos[currentDemo].icon className="w-24 h-24 text-white mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">
                {demos[currentDemo].title}
              </h3>
              <p className="text-white/90 mb-6">
                {demos[currentDemo].description}
              </p>
              <div className="flex justify-center space-x-4">
                <button className="bg-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Start Demo
                </button>
                <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Innovation Cards */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary AI Innovations
            </h2>
            <p className="text-xl text-gray-300">
              Discover the cutting-edge technologies that are changing everything
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovations.map((innovation, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-2xl hover:bg-gray-700 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 bg-${innovation.color}-500/20 rounded-lg flex items-center justify-center mb-4`}>
                  <innovation.icon className={`w-6 h-6 text-${innovation.color}-400`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {innovation.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {innovation.description}
                </p>
                <div className="text-sm font-semibold text-purple-400">
                  {innovation.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Comprehensive AI Capabilities
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to transform your business with AI
          </p>
        </motion.div>

        <div className="space-y-16">
          {features.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors"
                    whileHover={{ y: -5 }}
                  >
                    <item.icon className="w-8 h-8 text-purple-400 mb-4" />
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {item.name}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-white/90">
              Numbers that speak for themselves
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <stat.icon className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              What Industry Leaders Say
            </h2>
            <p className="text-xl text-gray-300">
              Don't just take our word for it - hear from the experts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-purple-400 text-xs">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of companies already using our AI solutions to stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Start Your AI Journey
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AIInnovationRevolution2025;