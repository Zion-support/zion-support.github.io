<<<<<<< HEAD
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket
  Brain
  Zap
  Globe
  Star
  TrendingUp
  Users
  Award,
  ChevronRight,
  Play,
  Download,
  Lightbulb,
  Target,
  Shield,
  Cpu,
  Database,
  Cloud,
  Lock,
  CheckCircle,
  ArrowRight,
  Eye,
  Sparkles
} from 'lucide-react';

const FutureTechnologyShowcase2026 = () => {
  const [activeCategorysetActiveCategory] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const categories = [
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      icon: Rocket,
      color: 'from-purple-600 to-pink-600',
      description: 'Revolutionary quantum computing solutions for exponential performance',
      technologies: [
        {
          name: 'Quantum Neural Networks',
          description: 'Hybrid quantum-classical neural networks for superior pattern recognition',
          status: 'Available Now',
          impact: '1000x faster processing',
          applications: ['Drug 'Discovery', 'Financial 'Modeling', 'Climate Simulation']
        },
        {
          name: 'Quantum Cryptography',
          description: 'Unbreakable encryption using quantum principles',
          status: 'Beta Testing',
          impact: 'Theoretically unbreakable',
          applications: ['Secure 'Communications', 'Data 'Protection', 'Blockchain Security']
        },
        {
          name: 'Quantum Optimization',
          description: 'Solving complex optimization problems in seconds',
          status: 'In Development',
          impact: 'Exponential speedup',
          applications: [', 'Logistics', 'Supply 'Chain', 'Resource Allocation']
        }
      ]
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interfaces',
      icon: Brain,
      color: 'from-blue-600 to-cyan-600',
      description: 'Direct brain-computer interfaces for thought-controlled computing',
      technologies: [
        {
          name: 'Thought-Controlled Computing',
          description: 'Control devices and applications using only your thoughts',
          status: 'Available Now',
          impact: '95% accuracy in neural signal processing',
          applications: [', 'Accessibility', 'Gaming'Medical Devices']
        },
        {
          name: 'Memory Enhancement',
          description: 'AI-powered memory augmentation and cognitive enhancement',
          status: 'Beta Testing',
          impact: '300% memory improvement',
          applications: [', 'Learning', 'Medical 'Treatment', 'Cognitive Therapy']
        },
        {
          name: 'Emotional AI',
          description: 'AI systems that understand and respond to human emotions',
          status: 'In Development',
          impact: '99.7% emotional recognition',
          applications: ['Mental 'Health', 'Customer 'Service', 'Education']
        }
      ]
    },
    {
      id: 'space-technology',
      title: 'Space Technology',
      icon: Globe,
      color: 'from-green-600 to-emerald-600',
      description: 'Advanced space-based technology solutions for global connectivity',
      technologies: [
        {
          name: 'Satellite Internet Networks',
          description: 'Global high-speed internet coverage from space',
          status: 'Available Now',
          impact: 'Global coverage with 1ms latency',
          applications: ['Remote 'Areas', 'IoT 'Connectivity', 'Emergency Communications']
        },
        {
          name: 'Space Manufacturing',
          description: 'Manufacturing in zero-gravity for superior materials',
          status: 'Beta Testing',
          impact: 'Revolutionary material properties',
          applications: [', 'Semiconductors', 'Pharmaceuticals'Advanced Materials']
        },
        {
          name: 'Asteroid Mining',
          description: 'Extracting rare materials from asteroids',
          status: 'In Development',
          impact: 'Unlimited rare earth elements',
          applications: [', 'Electronics', 'Renewable 'Energy', 'Space Exploration']
        }
      ]
    },
    {
      id: 'biotech-ai',
      title: 'Biotech AI',
      icon: Zap,
      color: 'from-orange-600 to-red-600',
      description: 'Combining biotechnology with AI for personalized medicine',
      technologies: [
        {
          name: 'Personalized Medicine',
          description: 'AI-powered personalized treatment plans based on genetics',
          status: 'Available Now',
          impact: '50% better treatment outcomes',
          applications: ['Cancer 'Treatment', 'Rare 'Diseases', 'Preventive Care']
        },
        {
          name: 'Synthetic Biology',
          description: 'Designing biological systems using AI',
          status: 'Beta Testing',
          impact: 'Revolutionary drug development',
          applications: ['Drug 'Discovery', 'Biofuels'Environmental Cleanup']
        },
        {
          name: 'Longevity Research',
          description: 'AI-driven research into extending human lifespan',
          status: 'In Development',
          impact: 'Potential 50% lifespan extension',
          applications: ['Anti-'Aging', 'Disease 'Prevention', 'Health Optimization']
        }
      ]
    }
  ];

  const stats = [
    { label: ''Technologies', 'value: '50+'icon: Lightbulb },
    { label: ''Patents', 'value: '200+'icon: Award },
    { label: 'Research 'Papers', 'value: '500+'icon: Star },
    { label: 'Global 'Impact', 'value: '1M+'icon: Users }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Quantum PhysicistMIT',
      content: 'The quantum computing platform has revolutionized our research capabilities. We can now solve problems that would take classical computers centuries.',
      rating: 5,
      company: 'MIT'
    },
    {
      name: 'Prof. Michael Rodriguez',
      role: 'NeuroscientistStanford',
      content: 'The neural interface technology is groundbreaking. It has opened up entirely new possibilities for human-computer interaction.',
      rating: 5,
      company: 'Stanford University'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Biotech ResearcherHarvard',
      content: 'The biotech AI integration has accelerated our drug discovery process by 1000x. We are seeing results that were impossible before.',
      rating: 5,
      company: 'Harvard Medical'
    }
  ];

  return (
    <div className="relative py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            FUTURE TECHNOLOGY SHOWCASE 2026
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Next-Generation
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Technologies
            </span>
            <br />
            Shaping Tomorrow
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore cutting-edge technologies that will define the future of humanity
            from quantum computing to neural interfaces and space technology.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((statindex) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((categoryindex) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === index
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <div className="flex items-center gap-2">
                  <category.icon className="w-5 h-5" />
                  {category.title}
                </div>
              </button>
            ))}
          </div>

          {/* Category Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0x: 20 }}
              animate={{ opacity: 1x: 0 }}
              exit={{ opacity: 0x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
            >
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {categories[activeCategory].title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {categories[activeCategory].description}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {categories[activeCategory].technologies.map((techindex) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 h-full border border-white/10 group-hover:border-indigo-400/50 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${categories[activeCategory].color} rounded-xl flex items-center justify-center`}>
                          <Lightbulb className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white">{tech.name}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            tech.status === 'Available Now' ? 'bg-green-500/20 text-green-400' :
                            tech.status === 'Beta Testing' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {tech.status}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {tech.description}
                      </p>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <TrendingUp className="w-4 h-4 text-indigo-400" />
                          <span className="text-gray-300">Impact: {tech.impact}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Target className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300">Applications: {tech.applications.join(')}</span>
                        </div>
                      </div>

                      <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 justify-center">
                        <Eye className="w-4 h-4" />
                        Learn More
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            What Leading Researchers Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonialindex) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5delay: 0.7 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  <div className="text-indigo-400 text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl p-8 border border-indigo-400/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Shape the Future?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Join us in developing the next generation of technologies that will transform humanity
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group bg-white/10 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2 border border-white/20">
                <Download className="w-5 h-5" />
                Download Research
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FutureTechnologyShowcase2026;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
