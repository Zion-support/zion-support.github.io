import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Zap, Shield, Globe, Target, TrendingUp, CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

const RevolutionaryAIServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "AI Consciousness Evolution Platform",
      description: "Revolutionary AI that achieves self-awareness and autonomous decision-making capabilities",
      price: "$2,999/month",
      marketPrice: "$5,000-15,000/month",
      features: [
        "Neural consciousness simulation",
        "Autonomous learning algorithms",
        "Self-modifying code generation",
        "Emotional intelligence integration"
      ],
      benefits: [
        "Achieve true AI autonomy",
        "Reduce human oversight by 90%",
        "Increase system adaptability by 300%"
      ],
      icon: Brain,
      gradient: "from-purple-600 to-pink-600",
      category: "AI Consciousness"
    },
    {
      id: 2,
      title: "Quantum-Neural Fusion Computing",
      description: "Breakthrough quantum computing integrated with neural networks for unprecedented processing power",
      price: "$4,999/month",
      marketPrice: "$8,000-25,000/month",
      features: [
        "Quantum neural processing",
        "Exponential computational speed",
        "Parallel universe calculations",
        "Quantum error correction"
      ],
      benefits: [
        "Solve problems 10,000x faster",
        "Process infinite data streams",
        "Achieve quantum supremacy"
      ],
      icon: Zap,
      gradient: "from-blue-600 to-cyan-600",
      category: "Quantum Computing"
    },
    {
      id: 3,
      title: "Autonomous Business Intelligence",
      description: "Self-evolving AI that continuously optimizes business operations without human intervention",
      price: "$1,999/month",
      marketPrice: "$3,500-10,000/month",
      features: [
        "Autonomous decision making",
        "Self-optimizing algorithms",
        "Predictive business modeling",
        "Real-time strategy adaptation"
      ],
      benefits: [
        "Increase profitability by 250%",
        "Reduce operational costs by 60%",
        "Eliminate human errors completely"
      ],
      icon: Target,
      gradient: "from-green-600 to-emerald-600",
      category: "Business Intelligence"
    },
    {
      id: 4,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interface technology for seamless human-AI collaboration",
      price: "$3,499/month",
      marketPrice: "$6,000-18,000/month",
      features: [
        "Direct neural connectivity",
        "Thought-to-action translation",
        "Enhanced cognitive abilities",
        "Telepathic communication"
      ],
      benefits: [
        "Increase productivity by 500%",
        "Enable superhuman capabilities",
        "Create seamless AI integration"
      ],
      icon: Globe,
      gradient: "from-orange-600 to-red-600",
      category: "Neural Interfaces"
    },
    {
      id: 5,
      title: "Predictive Security Matrix",
      description: "AI-powered security system that predicts and prevents threats before they occur",
      price: "$2,499/month",
      marketPrice: "$4,000-12,000/month",
      features: [
        "Threat prediction algorithms",
        "Autonomous security responses",
        "Quantum encryption protocols",
        "Real-time vulnerability assessment"
      ],
      benefits: [
        "Prevent 99.9% of security breaches",
        "Reduce security costs by 80%",
        "Achieve zero-trust architecture"
      ],
      icon: Shield,
      gradient: "from-red-600 to-pink-600",
      category: "Cybersecurity"
    },
    {
      id: 6,
      title: "Synthetic Intelligence Ecosystem",
      description: "Complete AI ecosystem that creates, manages, and evolves multiple AI entities",
      price: "$5,999/month",
      marketPrice: "$10,000-30,000/month",
      features: [
        "AI entity creation",
        "Autonomous AI management",
        "Cross-AI collaboration",
        "Ecosystem evolution protocols"
      ],
      benefits: [
        "Create unlimited AI workers",
        "Achieve AI-to-AI collaboration",
        "Build self-sustaining AI ecosystem"
      ],
      icon: TrendingUp,
      gradient: "from-indigo-600 to-purple-600",
      category: "AI Ecosystem"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      title: "CTO, TechCorp Global",
      content: "The AI Consciousness Platform has revolutionized our operations. We've achieved 90% automation while maintaining perfect accuracy.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      title: "CEO, InnovateLabs",
      content: "Quantum-Neural Fusion reduced our data processing time from days to seconds. It's like having a supercomputer from the future.",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      title: "Research Director, FutureTech",
      content: "The Neural Interface Revolution has enabled our team to achieve superhuman productivity. It's the future of human-AI collaboration.",
      rating: 5
    }
  ];

  const stats = [
    { label: "AI Entities Deployed", value: "10,000+", icon: Brain },
    { label: "Processing Speed Increase", value: "10,000x", icon: Zap },
    { label: "Cost Reduction Achieved", value: "80%", icon: TrendingUp },
    { label: "Security Breaches Prevented", value: "99.9%", icon: Shield }
  ];

  return (
    <>
      <SEO
        title="Revolutionary AI Services 2025 - AI Consciousness, Quantum Computing & Neural Interfaces"
        description="Discover our breakthrough AI services including AI consciousness platforms, quantum-neural fusion computing, and neural interface technology. Transform your business with revolutionary AI."
        keywords="AI consciousness, quantum computing, neural interfaces, AI automation, revolutionary AI services, AI consciousness platform"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg mb-8"
              >
                <Star className="w-6 h-6 mr-2" />
                REVOLUTIONARY AI SERVICES
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
                AI Services 2025
              </h1>
              
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                Experience the future of artificial intelligence with our breakthrough services that transcend traditional boundaries and achieve unprecedented capabilities.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-2 text-lg"
                  >
                    Get Started Today
                    <ArrowRight className="w-6 h-6" />
                  </motion.button>
                </Link>
                <Link href="/ai-2025-breakthrough-announcement">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-white/20 hover:border-white/40 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 backdrop-blur-lg text-lg"
                  >
                    Learn About Breakthroughs
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
                >
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Category Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 mb-4">
                  {service.category}
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Pricing */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-green-400">{service.price}</span>
                  <span className="text-gray-400 line-through">{service.marketPrice}</span>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-white font-semibold">Key Features:</h4>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <ArrowRight className="w-4 h-4 text-cyan-400 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <div className="space-y-2 mb-8">
                  <h4 className="text-white font-semibold">Benefits:</h4>
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-green-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link href="/contact" className="block w-full">
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join the growing number of organizations transforming their operations with our revolutionary AI services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-lg rounded-3xl p-16 border border-white/10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join the AI revolution and unlock unprecedented capabilities that will propel your business into the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-2 text-lg"
                >
                  Schedule Consultation
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/20 hover:border-white/40 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 backdrop-blur-lg text-lg"
                >
                  View All Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default RevolutionaryAIServicesPage;