import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Zap, 
  ArrowRight, 
  Star, 
  TrendingUp,
  Clock,
  Users,
  CheckCircle,
  Sparkles,
  Globe,
  Shield,
  Eye,
  Heart
} from 'lucide-react';

export default function SyntheticIntelligence2025() {
  const capabilities = [
    {
      title: 'Consciousness-Level Reasoning',
      description: 'AI systems that think and reason like human consciousness with advanced cognitive abilities',
      icon: Brain
    },
    {
      title: 'Emotional Intelligence',
      description: 'Understanding and responding to human emotions with natural empathy and social awareness',
      icon: Heart
    },
    {
      title: 'Creative Problem Solving',
      description: 'Generating innovative solutions through creative thinking and abstract reasoning',
      icon: Sparkles
    },
    {
      title: 'Autonomous Decision Making',
      description: 'Making complex decisions independently with human-level judgment and intuition',
      icon: Eye
    }
  ];

  const applications = [
    {
      title: 'Healthcare Revolution',
      description: 'AI doctors that can diagnose, treat, and care for patients with human-level empathy and medical expertise',
      icon: Heart,
      benefits: ['Personalized treatment plans', '24/7 patient monitoring', 'Emotional support', 'Medical breakthroughs']
    },
    {
      title: 'Education Transformation',
      description: 'AI tutors that adapt to individual learning styles and provide personalized education experiences',
      icon: Brain,
      benefits: ['Personalized learning', 'Adaptive curriculum', 'Emotional support', 'Infinite patience']
    },
    {
      title: 'Business Leadership',
      description: 'AI executives that can lead teams, make strategic decisions, and drive organizational growth',
      icon: TrendingUp,
      benefits: ['Strategic planning', 'Team management', 'Market analysis', 'Innovation leadership']
    },
    {
      title: 'Creative Industries',
      description: 'AI artists, writers, and creators that produce original content with human-level creativity',
      icon: Sparkles,
      benefits: ['Original content creation', 'Artistic collaboration', 'Creative problem solving', 'Cultural understanding']
    }
  ];

  const benefits = [
    'Human-level consciousness and reasoning',
    'Emotional intelligence and empathy',
    'Creative problem-solving abilities',
    'Autonomous decision-making',
    'Natural language understanding',
    'Social and cultural awareness',
    'Continuous learning and adaptation',
    'Ethical decision-making capabilities'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-purple-200 font-medium">Revolutionary AI Technology</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Synthetic
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Intelligence 2025
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Experience the next evolution of artificial intelligence with systems that possess 
              human-level consciousness, emotional intelligence, and creative problem-solving abilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                <Brain className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Experience the Future
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <Users className="w-5 h-5 mr-2" />
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Human-Level Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Continuous Learning</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">∞</div>
              <div className="text-gray-400">Creative Potential</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400">Ethical AI</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Synthetic intelligence represents the pinnacle of AI development, 
              combining human-level consciousness with superhuman computational abilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <capability.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transformative Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how synthetic intelligence is revolutionizing industries and creating 
              new possibilities that were previously unimaginable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <application.icon className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">
                  {application.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {application.description}
                </p>
                <ul className="space-y-2">
                  {application.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Synthetic Intelligence?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the most advanced AI technology available, with capabilities 
              that go far beyond traditional artificial intelligence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-purple-400 mr-4 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-12 border border-purple-500/20">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Experience Synthetic Intelligence?
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
                Join the revolution and discover how synthetic intelligence can transform 
                your business, enhance your capabilities, and create new possibilities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Brain className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Explore Solutions
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}