import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Cloud, Code, Database, Mail, Users, Clock, DollarSign, Globe, Monitor } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      id: 'ai-neural-interface',
      title: 'AI Neural Interface',
      description: 'Revolutionary brain-computer interface for thought-to-text conversion and mind control with 99.7% accuracy.',
      icon: Brain,
      features: ['Thought-to-Text Conversion', 'Mind Control Interface', 'Neural Pattern Recognition', 'Real-time Processing'],
      price: 'Starting at $199/month',
      category: 'Neural AI',
      rating: 4.9,
      reviews: 1247,
      featured: true
    },
    {
      id: 'ai-quantum-computing',
      title: 'AI Quantum Computing',
      description: 'Quantum-powered AI solutions for complex problem solving and optimization with exponential speed improvements.',
      icon: Zap,
      features: ['Quantum Algorithms', 'Exponential Speed', 'Complex Optimization', 'Quantum Machine Learning'],
      price: 'Starting at $999/month',
      category: 'Quantum AI',
      rating: 4.9,
      reviews: 423,
      featured: true
    },
    {
      id: 'ai-voice-cloning',
      title: 'AI Voice Cloning Studio',
      description: 'Professional voice cloning and synthesis technology for content creation and personalization.',
      icon: Monitor,
      features: ['Voice Synthesis', 'Emotion Control', 'Multi-language Support', 'Real-time Generation'],
      price: 'Starting at $149/month',
      category: 'Voice AI',
      rating: 4.8,
      reviews: 892,
      featured: false
    },
    {
      id: 'ai-space-mission',
      title: 'AI Space Mission Optimizer',
      description: 'Optimize space missions and satellite operations with AI-driven mission planning and execution.',
      icon: Globe,
      features: ['Mission Planning', 'Satellite Optimization', 'Risk Assessment', 'Resource Management'],
      price: 'Starting at $2,999/month',
      category: 'Space AI',
      rating: 4.9,
      reviews: 156,
      featured: false
    },
    {
      id: 'ai-healthcare-diagnostics',
      title: 'AI Healthcare Diagnostics',
      description: 'Advanced medical diagnostic AI with 98.5% accuracy in disease detection and treatment recommendations.',
      icon: Shield,
      features: ['Medical Imaging', 'Disease Detection', 'Treatment Recommendations', 'Patient Monitoring'],
      price: 'Starting at $299/month',
      category: 'Healthcare AI',
      rating: 4.9,
      reviews: 2341,
      featured: true
    },
    {
      id: 'ai-supply-chain',
      title: 'AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management with predictive analytics and automated optimization.',
      icon: BarChart3,
      features: ['Predictive Analytics', 'Automated Optimization', 'Risk Management', 'Cost Reduction'],
      price: 'Starting at $199/month',
      category: 'Business AI',
      rating: 4.7,
      reviews: 567,
      featured: false
    }
  ];

  const categories = ['All', 'Neural AI', 'Quantum AI', 'Voice AI', 'Space AI', 'Healthcare AI', 'Business AI'];

  return (
    <>
      <Helmet>
        <title>AI Services - Advanced Artificial Intelligence Solutions | Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive AI services including neural interfaces, quantum computing, voice cloning, healthcare diagnostics, and more. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, neural interface, quantum computing, voice cloning, healthcare AI, machine learning, AI consulting" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Harness the power of artificial intelligence with our cutting-edge AI services. 
              From neural interfaces to quantum computing, we provide solutions that transform industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 group"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                <span>Contact AI Experts</span>
              </Link>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <div key={service.id} className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                service.featured 
                  ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' 
                  : 'border-white/20 hover:border-cyan-400/50'
              }`}>
                {service.featured && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-500/20 text-cyan-300 mb-4">
                    <Star className="w-4 h-4 mr-1" />
                    Featured
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <p className="text-sm text-cyan-400">{service.category}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400' : 'text-gray-600'}`} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400 ml-2">({service.reviews} reviews)</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                </div>
                
                <Link
                  to={`/${service.id}`}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-4 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl p-8 border border-cyan-400/30 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Harness AI Power?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the AI revolution with our cutting-edge services. Transform your business with intelligent automation and advanced AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 group"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-white text-white font-bold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                <span>Schedule Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIServicesPage;