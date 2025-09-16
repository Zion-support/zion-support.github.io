import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Brain, 
  Cpu, 
  Zap, 
  Shield, 
  Globe,
  Rocket,
  Star,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  Play,
  Download,
  ExternalLink
} from 'lucide-react';

const AIInnovationShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const innovations = [
    {
      id: 'consciousness-ai',
      title: 'Consciousness AI Systems',
      description: 'Revolutionary AI that achieves genuine self-awareness and consciousness',
      icon: '🧠',
      gradient: 'from-purple-600 to-pink-600',
      features: ['Self-Awareness', 'Emotional Intelligence', 'Ethical Decision Making'],
      impact: '98%'
    },
    {
      id: 'quantum-neural',
      title: 'Quantum Neural Networks',
      description: 'Quantum computing meets neural networks for exponential processing power',
      icon: '⚛️',
      gradient: 'from-blue-600 to-cyan-600',
      features: ['Quantum Speed', 'Parallel Processing', 'Unlimited Scalability'],
      impact: '95%'
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interfaces',
      description: 'Direct brain-computer interfaces for seamless human-AI collaboration',
      icon: '🔗',
      gradient: 'from-green-600 to-teal-600',
      features: ['Thought Control', 'Real-time Processing', 'Medical Applications'],
      impact: '92%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black text-sm font-bold mb-6 animate-bounce">
              <Sparkles className="w-4 h-4 mr-2" />
              REVOLUTIONARY AI INNOVATIONS 2026
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The Future of
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
              is Here
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover groundbreaking AI innovations that are reshaping industries, 
              creating new possibilities, and defining the future of technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25"
              >
                Get Expert Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <button className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Innovations Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Innovations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore cutting-edge AI technologies that are transforming industries and creating new possibilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {innovations.map((innovation, index) => (
            <motion.div
              key={innovation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className={`h-48 bg-gradient-to-br ${innovation.gradient} flex items-center justify-center`}>
                <div className="text-6xl">{innovation.icon}</div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {innovation.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {innovation.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {innovation.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{innovation.impact}</div>
                    <div className="text-sm text-gray-500">Success Rate</div>
                  </div>
                  
                  <Link
                    to={`/innovation/${innovation.id}`}
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already leveraging our revolutionary AI innovations 
            to achieve unprecedented growth and success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            
            <button className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
              <Download className="w-5 h-5 mr-2" />
              Download Whitepaper
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInnovationShowcase2026;