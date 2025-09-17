import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  BarChart3, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  Award,
  TrendingUp
} from 'lucide-react';
const AdvancedAISolutions2025 = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const services = [
    {
      id: 'autonomous-ops',
      title: 'Autonomous Business Operations',
      description: 'Fully automated business processes with AI decision-making',
      icon: Brain,
      features: [
        'Real-time decision making',
        'Automated resource allocation',
        'Predictive maintenance',
        'Intelligent workflow optimization'
      ],
      pricing: 'Custom',
      category: 'AI Operations'
    },
    {
      id: 'quantum-cybersecurity',
      title: 'Quantum-Enhanced Cybersecurity',
      description: 'Unbreakable encryption and advanced threat detection',
      icon: Shield,
      features: [
        'Quantum encryption protocols',
        'AI-powered threat detection',
        'Real-time security monitoring',
        'Zero-trust architecture'
      ],
      pricing: 'From $10K/month',
      category: 'Security'
    },
    {
      id: 'metaverse-solutions',
      title: 'Metaverse Business Solutions',
      description: 'Complete digital transformation for virtual worlds',
      icon: Globe,
      features: [
        'Virtual headquarters setup',
        'Immersive customer experiences',
        'Digital workforce management',
        'Virtual commerce platforms'
      ],
      pricing: 'From $15K/month',
      category: 'Metaverse'
    },
    {
      id: 'edge-ai',
      title: 'Edge AI Intelligence',
      description: 'Real-time AI processing at the source',
      icon: Zap,
      features: [
        'Low-latency processing',
        'Offline AI capabilities',
        'IoT integration',
        'Autonomous system control'
      ],
      pricing: 'From $8K/month',
      category: 'Edge Computing'
    },
    {
      id: 'digital-twins',
      title: 'Digital Twin Technology',
      description: 'Perfect virtual replicas for optimization',
      icon: Database,
      features: [
        'Real-time simulation',
        'Predictive analytics',
        'Performance optimization',
        'Failure prediction'
      ],
      pricing: 'From $12K/month',
      category: 'Simulation'
    },
    {
      id: 'ai-personalization',
      title: 'AI-Driven Personalization',
      description: 'Hyper-personalized customer experiences',
      icon: Users,
      features: [
        'Behavioral analysis',
        'Dynamic content generation',
        'Predictive recommendations',
        'Real-time adaptation'
      ],
      pricing: 'From $6K/month',
      category: 'Customer Experience'
    }
  ];
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "CTO, TechCorp",
      content: "The autonomous operations solution transformed our business efficiency by 300%. We've never seen anything like it.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Security Director, GlobalBank",
      content: "Quantum cybersecurity gave us peace of mind with unbreakable encryption. Our security posture is now unmatched.",
      rating: 5
    },
    {
      name: "Elena Kim",
      role: "CEO, VirtualVentures",
      content: "Our metaverse presence has grown exponentially thanks to their comprehensive digital solutions.",
      rating: 5
    }
  ];
  const stats = [
    { label: 'AI Solutions Deployed', value: '500+', icon: Brain },
    { label: 'Client Satisfaction', value: '99.8%', icon: Star },
    { label: 'Uptime Guarantee', value: '99.99%', icon: Clock },
    { label: 'Cost Reduction', value: '45%', icon: TrendingUp }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Advanced AI Solutions
              <span className="block text-yellow-400">2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Revolutionary AI technologies that are transforming businesses and creating unprecedented opportunities
              for growth, efficiency, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-yellow-400 text-blue-900 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/20 text-white rounded-lg font-semibold text-lg hover:bg-white/30 transition-colors"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our AI Solutions Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge AI technologies designed to solve complex business challenges
              and drive unprecedented growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-lg mr-4">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    <span className="text-sm text-blue-600 font-medium">{service.category}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{service.pricing}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real businesses using our AI solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of forward-thinking companies already using our AI solutions
              to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-yellow-400 text-blue-900 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/20 text-white rounded-lg font-semibold text-lg hover:bg-white/30 transition-colors"
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );

};


export default AdvancedAISolutions2025;
