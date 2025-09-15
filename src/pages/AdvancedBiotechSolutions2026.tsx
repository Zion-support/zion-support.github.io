import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  Activity,
  Waves,
  Hexagon,
  Network,
  Dna,
  Microscope,
  Heart,
  Pill,
  TestTube,
  Stethoscope,
  Syringe,
  Beaker
} from 'lucide-react';

const AdvancedBiotechSolutions2026: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const biotechFeatures = [
    {
      icon: Dna,
      title: 'Precision Gene Editing',
      description: 'AI-powered CRISPR systems with 99.99% accuracy for targeted genetic modifications',
      color: 'from-green-500 to-emerald-500',
      features: ['AI-Guided Editing', 'Off-Target Prevention', 'Real-time Monitoring']
    },
    {
      icon: Brain,
      title: 'Neural-Biotech Interface',
      description: 'Direct integration between biological systems and artificial neural networks',
      color: 'from-purple-500 to-pink-500',
      features: ['Neural Pathways', 'Biological Computing', 'Consciousness Integration']
    },
    {
      icon: Microscope,
      title: 'Quantum Bioimaging',
      description: 'Quantum-enhanced imaging systems for molecular-level biological analysis',
      color: 'from-blue-500 to-cyan-500',
      features: ['Quantum Sensors', 'Molecular Resolution', 'Real-time Analysis']
    },
    {
      icon: TestTube,
      title: 'Synthetic Biology',
      description: 'Engineering biological systems with unprecedented precision and control',
      color: 'from-orange-500 to-red-500',
      features: ['Designer Organisms', 'Biological Factories', 'Custom Proteins']
    }
  ];

  const biotechStats = [
    { number: '99.99%', label: 'Gene Editing Accuracy', icon: Target },
    { number: '10^15', label: 'Molecular Resolution', icon: Microscope },
    { number: '0.001s', label: 'Analysis Speed', icon: Zap },
    { number: '∞', label: 'Therapeutic Possibilities', icon: Heart }
  ];

  const biotechApplications = [
    {
      title: 'Personalized Medicine',
      description: 'AI-driven treatment protocols tailored to individual genetic profiles and health conditions.',
      capabilities: ['Genetic Profiling', 'Treatment Optimization', 'Drug Discovery'],
      impact: 'Life-Saving',
      status: 'Live Now',
      icon: Heart
    },
    {
      title: 'Regenerative Medicine',
      description: 'Advanced stem cell therapies and tissue engineering for complete organ regeneration.',
      capabilities: ['Organ Regeneration', 'Stem Cell Therapy', 'Tissue Engineering'],
      impact: 'Revolutionary',
      status: 'Clinical Trials',
      icon: Activity
    },
    {
      title: 'Longevity Enhancement',
      description: 'Genetic and cellular interventions to extend healthy human lifespan by decades.',
      capabilities: ['Aging Reversal', 'Cellular Repair', 'Longevity Genes'],
      impact: 'Transcendent',
      status: 'Research Phase',
      icon: Sparkles
    },
    {
      title: 'Consciousness Preservation',
      description: 'Technology to preserve and transfer human consciousness into biological or digital substrates.',
      capabilities: ['Memory Transfer', 'Consciousness Backup', 'Digital Immortality'],
      impact: 'Paradigm-Shifting',
      status: 'Coming Soon',
      icon: Brain
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Maria Rodriguez',
      role: 'Chief Medical Officer, GenTech Innovations',
      content: 'Advanced biotech solutions have revolutionized our approach to medicine. We\'ve achieved 95% success rates in previously untreatable conditions.',
      rating: 5,
      company: 'GenTech Medical'
    },
    {
      name: 'Dr. James Chen',
      role: 'Director, Longevity Research Institute',
      content: 'The regenerative medicine capabilities are extraordinary. We\'ve successfully regenerated organs and reversed aging in laboratory models.',
      rating: 5,
      company: 'Longevity Labs'
    },
    {
      name: 'Dr. Sarah Kim',
      role: 'Lead Scientist, Neural-Bio Interface Lab',
      content: 'The neural-biotech integration represents the future of human enhancement. We\'re witnessing the dawn of human-machine symbiosis.',
      rating: 5,
      company: 'NeuralBio Systems'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 to-emerald-600/30"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-green-300 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -200, 0],
                opacity: [0.4, 1, 0.4],
                scale: [1, 2, 1],
                rotate: [0, 360, 0],
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
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-xl flex items-center justify-center">
              <Dna className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Zion Tech Group</h1>
              <p className="text-sm text-green-300">Advanced Biotech Solutions 2026</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-green-400 transition-colors">Features</a>
            <a href="#applications" className="hover:text-green-400 transition-colors">Applications</a>
            <a href="#testimonials" className="hover:text-green-400 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg hover:shadow-lg transition-all duration-300">
            Experience Biotech
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
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-400/30 mb-6"
            >
              <Sparkles className="w-5 h-5 text-green-400" />
              <span className="text-green-300">Biological Revolution</span>
            </motion.div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Advanced Biotech Solutions
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed">
            Experience the convergence of biology and technology - where genetic engineering, 
            neural interfaces, and quantum biology create unprecedented possibilities for human enhancement and medical breakthroughs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Experience Biotech Demo</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-green-400 rounded-lg hover:bg-green-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
            >
              Explore Medical Solutions
            </motion.button>
          </div>

          {/* Biotech Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {biotechStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-green-400/20"
              >
                <stat.icon className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Revolutionary <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Biotech Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Advanced biotechnology solutions that merge biological systems with cutting-edge technology 
              to create unprecedented medical and enhancement possibilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {biotechFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                <ul className="space-y-1">
                  {feature.features.map((feat, featIndex) => (
                    <li key={featIndex} className="flex items-center space-x-2 text-xs text-green-300">
                      <CheckCircle className="w-3 h-3" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="relative z-10 py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Life-Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Applications</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Biotechnology applications that are revolutionizing medicine, extending human capabilities, and opening new frontiers of life enhancement
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {biotechApplications.map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <application.icon className="w-8 h-8 text-green-400" />
                    <h3 className="text-2xl font-bold">{application.title}</h3>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-xs font-semibold">
                      {application.status}
                    </span>
                    <span className="px-2 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-xs font-semibold">
                      {application.impact}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{application.description}</p>
                <ul className="space-y-2 mb-6">
                  {application.capabilities.map((capability, capabilityIndex) => (
                    <li key={capabilityIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">{capability}</span>
                    </li>
                  ))}
                </ul>
                <button className="flex items-center space-x-2 text-green-400 hover:text-green-300 font-semibold">
                  <span>Explore Application</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Medical <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Hear from medical professionals and researchers who are experiencing the transformative power of advanced biotechnology
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
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-xs text-green-400">{testimonial.company}</div>
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
              Ready to Transform Life Itself?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Experience the future of biotechnology - where genetic engineering, neural interfaces, 
              and quantum biology converge to create unprecedented possibilities for human enhancement and medical breakthroughs
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
              >
                Experience Advanced Biotech
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-green-400 rounded-lg hover:bg-green-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
              >
                Schedule Medical Demo
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
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg flex items-center justify-center">
                <Dna className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Zion Tech Group</h3>
                <p className="text-sm text-gray-400">Advanced Biotech Solutions 2026</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">© 2026 Zion Tech Group. All rights reserved.</p>
              <p className="text-sm text-gray-500">Transforming life through advanced biotechnology.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdvancedBiotechSolutions2026;