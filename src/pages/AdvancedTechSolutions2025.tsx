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
  Eye,
  Code,
  Layers,
  BarChart3,
  Smartphone,
  Wifi,
  Server
} from 'lucide-react';

const AdvancedTechSolutions2025: React.FC = () => {
  const [activeSolution, setActiveSolution] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const solutions = [
    {
      icon: Brain,
      title: 'Advanced AI Orchestration',
      description: 'Multi-agent AI systems that coordinate complex business processes autonomously',
      features: ['Autonomous Decision Making', 'Predictive Analytics', 'Self-Optimization', 'Real-time Learning'],
      color: 'from-purple-500 to-pink-500',
      price: 'Starting at $4,999/month',
      badge: 'Revolutionary'
    },
    {
      icon: Shield,
      title: 'Quantum-Safe Security',
      description: 'Future-proof security infrastructure using quantum-resistant cryptography',
      features: ['Post-Quantum Cryptography', 'Quantum Key Distribution', 'Zero-Trust Architecture', 'Advanced Threat Detection'],
      color: 'from-blue-500 to-cyan-500',
      price: 'Starting at $3,999/month',
      badge: 'Cutting Edge'
    },
    {
      icon: Globe,
      title: 'Distributed Edge Computing',
      description: 'Global edge network for ultra-low latency applications and real-time processing',
      features: ['Global Edge Nodes', 'Real-time Processing', 'Automatic Failover', 'Load Balancing'],
      color: 'from-green-500 to-emerald-500',
      price: 'Starting at $2,999/month',
      badge: 'High Performance'
    },
    {
      icon: Zap,
      title: 'Neural Interface Platform',
      description: 'Brain-computer interface solutions for enhanced human-machine collaboration',
      features: ['Thought Recognition', 'Neural Feedback', 'Enhanced Cognition', 'Real-time Translation'],
      color: 'from-orange-500 to-red-500',
      price: 'Starting at $6,999/month',
      badge: 'Futuristic'
    }
  ];

  const useCases = [
    {
      industry: 'Healthcare',
      icon: Eye,
      title: 'AI-Powered Medical Diagnosis',
      description: 'Advanced AI systems that assist doctors in diagnosing complex medical conditions with 99.7% accuracy.',
      results: ['40% faster diagnosis', '99.7% accuracy rate', 'Reduced medical errors by 85%'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      industry: 'Finance',
      icon: BarChart3,
      title: 'Quantum-Safe Banking',
      description: 'Next-generation banking infrastructure secured by quantum-resistant cryptography.',
      results: ['100% quantum-safe', 'Zero security breaches', '99.99% uptime'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      industry: 'Manufacturing',
      icon: Layers,
      title: 'Smart Factory Automation',
      description: 'Fully automated manufacturing facilities with AI-driven optimization and predictive maintenance.',
      results: ['60% efficiency increase', '90% reduction in downtime', 'Real-time optimization'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      industry: 'Transportation',
      icon: Rocket,
      title: 'Autonomous Fleet Management',
      description: 'AI-powered fleet management with predictive routing and autonomous vehicle coordination.',
      results: ['50% fuel savings', '30% faster delivery', 'Zero accidents'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const technologies = [
    {
      name: 'Quantum Machine Learning',
      description: 'AI algorithms accelerated by quantum computing for unprecedented processing power',
      icon: Brain,
      status: 'Beta Available'
    },
    {
      name: 'Neural Edge Computing',
      description: 'Distributed neural networks at the edge for real-time AI processing',
      icon: Wifi,
      status: 'Live Now'
    },
    {
      name: 'Blockchain 3.0',
      description: 'Next-generation blockchain with quantum security and AI integration',
      icon: Shield,
      status: 'Coming Soon'
    },
    {
      name: 'Digital Twin Ecosystems',
      description: 'Complete digital replicas of physical systems for optimization and simulation',
      icon: Server,
      status: 'In Development'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Alex Thompson',
      role: 'Chief Technology Officer',
      company: 'MedTech Innovations',
      content: 'Zion Tech Group\'s AI solutions have revolutionized our medical diagnosis capabilities. The accuracy and speed are unmatched.',
      rating: 5,
      avatar: 'AT'
    },
    {
      name: 'Sarah Martinez',
      role: 'VP of Engineering',
      company: 'FinanceFlow Corp',
      content: 'The quantum-safe security implementation has given us peace of mind for the future. Absolutely cutting-edge technology.',
      rating: 5,
      avatar: 'SM'
    },
    {
      name: 'Michael Chen',
      role: 'Operations Director',
      company: 'AutoManufacture Inc',
      content: 'Our smart factory has achieved incredible efficiency gains. The AI optimization is truly remarkable.',
      rating: 5,
      avatar: 'MC'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -200, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center">
              <Brain className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Zion Tech Group</h1>
              <p className="text-sm text-cyan-300">Advanced Solutions 2025</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#solutions" className="hover:text-cyan-400 transition-colors">Solutions</a>
            <a href="#use-cases" className="hover:text-cyan-400 transition-colors">Use Cases</a>
            <a href="#technologies" className="hover:text-cyan-400 transition-colors">Technologies</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:shadow-lg transition-all duration-300">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-6"
            >
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300">Advanced Technology Solutions</span>
            </motion.div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Beyond Innovation
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed">
            Experience the most advanced technology solutions available today. Our cutting-edge AI, quantum computing, 
            and neural interface technologies are redefining what's possible in the digital age.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
            >
              Schedule Consultation
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technology solutions that push the boundaries of what's possible
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-xs font-semibold">
                    {solution.badge}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-white">{solution.price}</span>
                  <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-semibold">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="relative z-10 py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Applications</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our advanced solutions are transforming industries worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${useCase.color} rounded-lg flex items-center justify-center`}>
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-sm text-cyan-400 font-semibold">{useCase.industry}</span>
                    <h3 className="text-xl font-bold">{useCase.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                
                <div className="space-y-2">
                  {useCase.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Emerging <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the next generation of technological breakthroughs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{tech.description}</p>
                <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full text-xs font-semibold">
                  {tech.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Innovators</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what industry leaders say about our advanced solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-xs text-cyan-400">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Lead the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join the technological revolution and be among the first to experience the next generation of solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
              >
                Start Your Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Zion Tech Group</h3>
                <p className="text-sm text-gray-400">Advanced Solutions 2025</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">© 2025 Zion Tech Group. All rights reserved.</p>
              <p className="text-sm text-gray-500">Pioneering the future of technology.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdvancedTechSolutions2025;