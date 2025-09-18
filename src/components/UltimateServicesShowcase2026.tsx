import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Rocket, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  BarChart3, 
  Cpu,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react';
const UltimateServicesShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai-solutions');
  const services = {
    'ai-solutions': {
      title: 'AI Solutions',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      description: 'Revolutionary AI technologies that transform businesses and accelerate innovation',
      features: [
        'Conscious AI Systems',
        'Autonomous Decision Making',
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'Machine Learning Optimization'
      ],
      stats: {
        clients: '10,000+',
        success: '99.9%',
        efficiency: '500%'
      }
    },
    'quantum-computing': {
      title: 'Quantum Computing',
      icon: Cpu,
      color: 'from-blue-600 to-cyan-600',
      description: 'Next-generation quantum computing solutions for complex problem solving',
      features: [
        'Quantum Algorithm Development',
        'Quantum Machine Learning',
        'Cryptographic Security',
        'Optimization Problems',
        'Quantum Simulation',
        'Quantum Networking'
      ],
      stats: {
        clients: '500+',
        success: '98.5%',
        efficiency: '1000x'
      }
    },
    'cybersecurity': {
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      description: 'Advanced cybersecurity solutions protecting against evolving threats',
      features: [
        'AI-Powered Threat Detection',
        'Zero-Trust Architecture',
        'Quantum-Safe Encryption',
        'Behavioral Analytics',
        'Incident Response',
        'Compliance Management'
      ],
      stats: {
        clients: '5,000+',
        success: '99.95%',
        efficiency: '300%'
      }
    },
    'space-tech': {
      title: 'Space Technology',
      icon: Rocket,
      color: 'from-slate-600 to-gray-600',
      description: 'Cutting-edge space technology solutions for exploration and commercialization',
      features: [
        'Satellite Technology',
        'Space Mission Planning',
        'Interplanetary Communication',
        'Space Manufacturing',
        'Asteroid Mining',
        'Space Colonization'
      ],
      stats: {
        clients: '100+',
        success: '95%',
        efficiency: '200%'
      }
    },
    'sustainability': {
      title: 'Sustainable Tech',
      icon: Globe,
      color: 'from-green-600 to-emerald-600',
      description: 'Green technology solutions for a sustainable future',
      features: [
        'Carbon Footprint Reduction',
        'Renewable Energy Optimization',
        'Waste Management AI',
        'Environmental Monitoring',
        'Green Manufacturing',
        'Climate Modeling'
      ],
      stats: {
        clients: '2,000+',
        success: '97%',
        efficiency: '400%'
      }
    },
    'education': {
      title: 'AI Education',
      icon: Users,
      color: 'from-indigo-600 to-purple-600',
      description: 'Personalized AI-powered education systems for all ages',
      features: [
        'Adaptive Learning',
        'Personalized Curricula',
        'Real-time Assessment',
        'Virtual Tutoring',
        'Skill Development',
        'Accessibility Features'
      ],
      stats: {
        clients: '50,000+',
        success: '95%',
        efficiency: '300%'
      }
    }
  };
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "CTO, TechCorp",
      content: "The AI solutions transformed our entire operation. We've seen a 500% increase in efficiency and our team is more productive than ever.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "CEO, InnovateLab",
      content: "Their quantum computing solutions solved problems we thought were impossible. The results exceeded all our expectations.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Dr. Elena Kim",
      role: "Director, FutureTech",
      content: "The cybersecurity implementation was flawless. We feel completely secure and our data has never been safer.",
      rating: 5,
      avatar: "EK"
    }
  ];
  const currentService = services[activeTab as keyof typeof services];
  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ultimate Technology
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive suite of cutting-edge technologies designed to revolutionize your business and accelerate innovation.
          </p>
        </motion.div>
        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(services).map(([key, service]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === key
                  ? 'bg-white text-slate-900 shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <service.icon className="w-5 h-5" />
              <span className="font-semibold">{service.title}</span>
            </button>
          ))}
        </div>
        {/* Service Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* Service Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className={`p-4 rounded-2xl bg-gradient-to-r ${currentService.color}`}>
                <currentService.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">{currentService.title}</h3>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed">
              {currentService.description}
            </p>
            <div className="grid grid-cols-2 gap-6">
              {Object.entries(currentService.stats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{value}</div>
                  <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                </div>
              ))}
            </div>
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            {currentService.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white font-medium">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl p-12 border border-white/20"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our cutting-edge technology solutions to achieve unprecedented success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default UltimateServicesShowcase2026;