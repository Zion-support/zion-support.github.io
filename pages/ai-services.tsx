import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, Zap, Shield, Sparkles, Atom, 
  Cpu, Target, Users, ArrowRight, Star,
  CheckCircle, Clock, DollarSign, TrendingUp
} from 'lucide-react';

const aiServices = [
  {
    name: 'AI Consciousness Evolution Pro',
    href: '/ai-consciousness-evolution-pro',
    description: 'Advanced AI consciousness development and emotional intelligence systems',
    features: ['Emotional AI', 'Consciousness Simulation', 'Ethical Framework', 'Human-AI Interaction'],
    isNew: true,
    badge: 'New',
    color: 'from-violet-500 to-purple-600'
  },
  {
    name: 'Quantum AI Fusion Platform',
    href: '/quantum-ai-fusion-platform',
    description: 'Revolutionary quantum-AI hybrid computing platform',
    features: ['Quantum Processing', 'AI Acceleration', 'Hybrid Algorithms', 'Real-time Learning'],
    isHot: true,
    badge: 'Hot',
    color: 'from-indigo-500 to-blue-600'
  },
  {
    name: 'AI Autonomous Ecosystem',
    href: '/ai-autonomous-ecosystem',
    description: 'Self-managing AI systems with autonomous decision-making',
    features: ['Autonomous Operations', 'Self-Optimization', 'Predictive Maintenance', 'Adaptive Learning'],
    color: 'from-cyan-500 to-blue-600'
  },
  {
    name: 'AI Ethics & Governance',
    href: '/ai-ethics-governance',
    description: 'Comprehensive ethical AI frameworks and governance systems',
    features: ['Ethical Guidelines', 'Bias Detection', 'Transparency Tools', 'Compliance Monitoring'],
    color: 'from-green-500 to-emerald-600'
  },
  {
    name: 'AI Creativity Studio Pro',
    href: '/ai-creativity-studio-pro',
    description: 'AI-powered creative platform for content generation and design',
    features: ['Content Creation', 'Design Generation', 'Creative Collaboration', 'Style Transfer'],
    isNew: true,
    badge: 'New',
    color: 'from-pink-500 to-rose-600'
  }
];

const benefits = [
  {
    icon: <Brain className="w-8 h-8 text-cyan-400" />,
    title: 'Advanced Consciousness',
    description: 'Develop AI systems with genuine understanding and emotional intelligence'
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: 'Lightning Fast',
    description: 'Quantum-enhanced processing for real-time AI decision making'
  },
  {
    icon: <Shield className="w-8 h-8 text-green-400" />,
    title: 'Ethically Sound',
    description: 'Built-in ethical frameworks and bias detection systems'
  },
  {
    icon: <Sparkles className="w-8 h-8 text-purple-400" />,
    title: 'Innovative Solutions',
    description: 'Cutting-edge AI technologies that push the boundaries of possibility'
  }
];

export default function AIServices() {
  return (
    <>
      <Head>
        <title>AI & Consciousness Services - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI consciousness and emotional intelligence services. Advanced AI systems with ethical frameworks and quantum-enhanced processing." />
        <meta name="keywords" content="AI consciousness, emotional AI, quantum AI, autonomous AI, AI ethics, AI creativity" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-indigo-500/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Brain className="w-12 h-12 text-violet-400" />
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  AI & Consciousness
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Pioneering the future of autonomous technology and AI-driven innovation. 
                We deliver cutting-edge solutions that transform businesses and accelerate growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-200 hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  href="/comprehensive-services-showcase-2025"
                  className="px-8 py-4 border border-violet-500/40 text-violet-300 rounded-xl font-semibold hover:bg-violet-500/10 transition-all duration-200"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary AI Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our comprehensive suite of AI consciousness and emotional intelligence solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-violet-500/50 transition-all duration-300 hover:scale-105">
                    {service.isNew && (
                      <span className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                        {service.badge}
                      </span>
                    )}
                    {service.isHot && (
                      <span className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                        {service.badge}
                      </span>
                    )}
                    
                    <div className="mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-sm text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={service.href}
                      className="inline-flex items-center space-x-2 text-violet-400 hover:text-violet-300 font-semibold group-hover:translate-x-1 transition-all duration-200"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative bg-gradient-to-br from-gray-900/30 to-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the future of AI with our cutting-edge consciousness and emotional intelligence solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience the Future of AI?
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Join the revolution in AI consciousness and emotional intelligence. 
                Transform your business with our cutting-edge solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-200 hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/comprehensive-services-showcase-2025"
                  className="px-8 py-4 border border-violet-500/40 text-violet-300 rounded-xl font-semibold hover:bg-violet-500/10 transition-all duration-200"
                >
                  Explore All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}