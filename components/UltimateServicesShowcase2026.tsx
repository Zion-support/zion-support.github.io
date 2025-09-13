import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Cpu, 
  Cloud, 
  Shield, 
  Rocket, 
  ArrowRight, 
  Star, 
  CheckCircle,
  TrendingUp,
  Users,
  Globe,
  Database,
  Lock,
  BarChart3
} from 'lucide-react';

const UltimateServicesShowcase2026 = () => {
  const services = [
    {
      id: 'ai-solutions',
      title: 'AI & Machine Learning Solutions',
      description: 'Revolutionary artificial intelligence solutions that transform your business operations and drive unprecedented growth.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Quantum Neural Networks',
        'Synthetic Intelligence Platforms',
        'Autonomous Decision Systems',
        'Predictive Analytics Engine',
        'Natural Language Processing',
        'Computer Vision Solutions'
      ],
      pricing: 'Starting at $50K/month',
      link: '/services/ai-solutions',
      featured: true
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Services',
      description: 'Cutting-edge quantum computing solutions that provide exponential speedups for complex computational problems.',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Quantum Algorithm Development',
        'Quantum Cloud Platforms',
        'Quantum Cryptography',
        'Quantum Machine Learning',
        'Quantum Optimization',
        'Quantum Simulation'
      ],
      pricing: 'Starting at $100K/month',
      link: '/services/quantum-computing',
      featured: true
    },
    {
      id: 'hyper-automation',
      title: 'Hyper-Automation Platforms',
      description: 'End-to-end automation solutions that eliminate manual processes and create fully autonomous business operations.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Process Mining & Discovery',
        'Intelligent Process Automation',
        'Autonomous Workflows',
        'Cognitive Automation',
        'RPA Implementation',
        'Business Process Optimization'
      ],
      pricing: 'Starting at $30K/month',
      link: '/services/hyper-automation',
      featured: false
    },
    {
      id: 'cloud-infrastructure',
      title: 'Advanced Cloud Infrastructure',
      description: 'Next-generation cloud solutions with edge computing, quantum integration, and autonomous management capabilities.',
      icon: Cloud,
      color: 'from-green-500 to-teal-500',
      features: [
        'Edge Computing Networks',
        'Quantum Cloud Integration',
        'Autonomous Cloud Management',
        'Hybrid Cloud Solutions',
        'Serverless Architectures',
        'Multi-Cloud Orchestration'
      ],
      pricing: 'Starting at $25K/month',
      link: '/services/cloud-infrastructure',
      featured: false
    },
    {
      id: 'cybersecurity',
      title: 'Advanced Cybersecurity',
      description: 'Quantum-enhanced security solutions that protect your digital assets with unbreakable encryption and AI-powered threat detection.',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      features: [
        'Quantum Cryptography',
        'AI-Powered Threat Detection',
        'Zero-Trust Architecture',
        'Advanced Threat Hunting',
        'Security Orchestration',
        'Compliance Management'
      ],
      pricing: 'Starting at $40K/month',
      link: '/services/cybersecurity',
      featured: false
    },
    {
      id: 'data-analytics',
      title: 'Revolutionary Data Analytics',
      description: 'Advanced analytics platforms that provide real-time insights and predictive capabilities using quantum-enhanced processing.',
      icon: BarChart3,
      color: 'from-indigo-500 to-purple-500',
      features: [
        'Real-Time Analytics',
        'Predictive Modeling',
        'Quantum Data Processing',
        'Advanced Visualization',
        'Machine Learning Pipelines',
        'Data Lake Solutions'
      ],
      pricing: 'Starting at $35K/month',
      link: '/services/data-analytics',
      featured: false
    }
  ];

  const stats = [
    { value: '500+', label: 'Enterprise Clients', icon: Users },
    { value: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { value: '50x', label: 'Performance Boost', icon: TrendingUp },
    { value: '24/7', label: 'AI Monitoring', icon: Brain }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our entire infrastructure with their quantum computing solutions. We achieved 50x performance improvements.',
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CEO, InnovateLabs',
      content: 'Their AI solutions revolutionized our business processes. We went from manual operations to fully autonomous systems in just 6 months.',
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Dr. Elena Volkov',
      role: 'Head of R&D, QuantumTech',
      content: 'The quantum cloud platform they built for us is absolutely revolutionary. We can now solve problems that were impossible before.',
      avatar: '/api/placeholder/60/60'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-blue-200 font-medium">Ultimate Services 2026</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Technology
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Transform your business with our cutting-edge AI, quantum computing, automation, 
            and cloud infrastructure solutions designed for the future.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-4">
                <stat.icon className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 overflow-hidden ${
                service.featured ? 'ring-2 ring-blue-500/50' : ''
              }`}
            >
              {service.featured && (
                <div className="absolute -top-3 left-6 px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold rounded-full z-10">
                  Featured
                </div>
              )}

              <div className="p-8">
                {/* Service Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="text-blue-400 font-semibold mb-6">
                  {service.pricing}
                </div>

                {/* CTA Button */}
                <Link
                  href={service.link}
                  className="group/btn inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            What Our Clients Say
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-12 border border-blue-500/20">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              Join the revolution and discover how our cutting-edge technology solutions 
              can accelerate your business growth and competitive advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <Globe className="w-5 h-5 mr-2" />
                Explore All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateServicesShowcase2026;