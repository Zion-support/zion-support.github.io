import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, ArrowRight, Play, CheckCircle, Target, Users, Clock, 
  Globe, Code, Database, BarChart3, Eye, MessageSquare, Shield, 
  Lock, FileText, Zap, HardDrive, Monitor, Settings, Server
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AIServices = [
  {
    id: 'ai-strategy',
    title: 'AI Strategy & Consulting',
    description: 'Strategic planning and consulting for AI implementation',
    category: 'strategy',
    features: ['AI readiness assessment', 'Technology roadmap', 'ROI analysis'],
    useCases: ['Digital transformation', 'Process optimization', 'Competitive advantage'],
    link: '/contact'
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning Solutions',
    description: 'Custom ML models and algorithms for your business',
    category: 'development',
    features: ['Custom model development', 'Data preprocessing', 'Model training'],
    useCases: ['Predictive analytics', 'Pattern recognition', 'Automated decision making'],
    link: '/contact'
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    description: 'Advanced image and video analysis capabilities',
    category: 'vision',
    features: ['Object detection', 'Image classification', 'Video analysis'],
    useCases: ['Quality control', 'Security monitoring', 'Medical imaging'],
    link: '/contact'
  },
  {
    id: 'nlp',
    title: 'Natural Language Processing',
    description: 'Text analysis and language understanding',
    category: 'nlp',
    features: ['Text classification', 'Sentiment analysis', 'Language translation'],
    useCases: ['Customer support', 'Content analysis', 'Document processing'],
    link: '/contact'
  },
  {
    id: 'ai-security',
    title: 'AI-Powered Security',
    description: 'Intelligent threat detection and prevention',
    category: 'security',
    features: ['Threat detection', 'Behavioral analysis', 'Automated response'],
    useCases: ['Cybersecurity', 'Fraud detection', 'Access control'],
    link: '/contact'
  },
  {
    id: 'ai-optimization',
    title: 'AI Optimization',
    description: 'Performance optimization using AI algorithms',
    category: 'optimization',
    features: ['Performance tuning', 'Resource optimization', 'Efficiency improvement'],
    useCases: ['System optimization', 'Process improvement', 'Cost reduction'],
    link: '/contact'
  }
];

const categories = [
  { name: "All", value: "all", icon: <Globe className="h-4 w-4" /> },
  { name: "Strategy", value: "strategy", icon: <CheckCircle className="h-4 w-4" /> },
  { name: "Development", value: "development", icon: <Code className="h-4 w-4" /> },
  { name: "Data", value: "data", icon: <Database className="h-4 w-4" /> },
  { name: "Analytics", value: "analytics", icon: <BarChart3 className="h-4 w-4" /> },
  { name: "Vision", value: "vision", icon: <Eye className="h-4 w-4" /> },
  { name: "NLP", value: "nlp", icon: <MessageSquare className="h-4 w-4" /> },
  { name: "Compliance", value: "compliance", icon: <Shield className="h-4 w-4" /> },
  { name: "Optimization", value: "optimization", icon: <Zap className="h-4 w-4" /> },
  { name: "Training", value: "training", icon: <Users className="h-4 w-4" /> },
  { name: "Integration", value: "integration", icon: <Code className="h-4 w-4" /> },
  { name: "Security", value: "security", icon: <Lock className="h-4 w-4" /> },
  { name: "Content", value: "content", icon: <FileText className="h-4 w-4" /> }
];

const AIServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  
  const filteredServices = selectedCategory === "all" 
    ? AIServices 
    : AIServices.filter(service => service.category.toLowerCase() === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Brain className="w-20 h-20 text-zion-cyan mx-auto mb-8" />
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                AI <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From machine learning to computer vision, we bring the future of technology to your doorstep.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 inline" />
                </Link>
                <button className="px-8 py-4 bg-zion-slate-dark/50 border border-zion-cyan/20 text-zion-cyan font-semibold rounded-xl hover:bg-zion-slate-dark/70 transition-all duration-300">
                  <Play className="w-5 h-5 inline mr-2" />
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.value
                    ? 'bg-zion-cyan text-white'
                    : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark/70'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">AI Solutions</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive artificial intelligence services designed to drive innovation and growth
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-zion-slate-light">{service.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Use Cases:</h4>
                    <ul className="space-y-1">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <li key={useCaseIndex} className="flex items-center gap-2 text-zion-slate-light">
                          <Target className="w-4 h-4 text-zion-purple" />
                          <span className="text-sm">{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Link 
                  to={service.link}
                  className="inline-block px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 inline" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's discuss how AI can revolutionize your operations and drive growth
            </p>
            <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <Users className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">Free Consultation</h3>
                  <p className="text-zion-slate-light mb-4">
                    Schedule a free AI strategy session with our experts
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                  >
                    Book Consultation
                  </Link>
                </div>
                <div className="text-center">
                  <Clock className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">Quick Start</h3>
                  <p className="text-zion-slate-light mb-4">
                    Get started with AI in as little as 2 weeks
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-block px-6 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 text-zion-cyan font-semibold rounded-xl hover:bg-zion-slate-dark/70 transition-all duration-300"
                  >
                    Start Project
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;
