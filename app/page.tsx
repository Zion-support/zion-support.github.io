'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import { Brain, Cloud, Shield, Zap, ArrowRight, CheckCircle, Star, Users, Globe, Code, BarChart, Target, Sparkles, Cpu, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart, Rocket } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions that transform your business operations.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      color: 'from-red-500 to-orange-600'
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Streamline your workflows with intelligent automation solutions.',
      color: 'from-yellow-500 to-green-600'
    }
  ];

  const services = [
    {
      title: 'AI Development',
      description: 'Custom AI solutions tailored to your business needs',
      icon: Brain,
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services',
      icon: Cloud,
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'Serverless Architecture', 'DevOps Automation']
    },
    {
      title: 'Security Solutions',
      description: 'Advanced cybersecurity to protect your business',
      icon: Shield,
      features: ['Threat Detection', 'Compliance Management', 'Security Audits', 'Incident Response']
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategies',
      icon: Zap,
      features: ['Process Automation', 'Data Analytics', 'API Development', 'Integration Services']
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Years Experience' }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions | Leading Technology Company</title>
        <meta name="description" content="Transform your business with cutting-edge AI and IT solutions. Expert services in artificial intelligence, cloud computing, cybersecurity, and digital transformation." />
        <meta name="keywords" content="AI solutions, cloud computing, cybersecurity, digital transformation, machine learning, IT consulting" />
        <meta property="og:title" content="Zion Tech Group - AI & IT Solutions" />
        <meta property="og:description" content="Leading provider of AI and IT solutions for modern businesses" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - AI & IT Solutions" />
        <meta name="twitter:description" content="Transform your business with cutting-edge AI and IT solutions" />
      </Helmet>

      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-advanced neural-network-advanced matrix-rain-advanced particle-system">
        <Navigation />
        
        <main id="main-content" className="container mx-auto px-4 py-16 pt-24 relative z-10" role="main">
          {/* Hero Section */}
          <section className="text-center mb-16 relative">
            <div className="max-w-6xl mx-auto">
              <div className="cyber-card-advanced holographic-advanced quantum-advanced p-12 rounded-3xl mb-8">
                <h1 className="text-6xl md:text-8xl font-bold mb-6 neon-text-advanced glow-advanced">
                  Transform Your Business with AI
                </h1>
                <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Leading provider of cutting-edge AI and IT solutions that drive innovation, 
                  efficiency, and growth for businesses worldwide. Experience the future of technology today.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="futuristic-btn-advanced px-10 py-5 text-lg font-semibold rounded-xl flex items-center justify-center hover-lift-advanced">
                    Get Started
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </button>
                  <button className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover-glow-advanced">
                    Learn More
                  </button>
                </div>
              </div>
              
              {/* Stats Banner */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                <div className="cyber-card-advanced p-6 text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2 neon-text-advanced">500+</div>
                  <div className="text-gray-300">Happy Clients</div>
                </div>
                <div className="cyber-card-advanced p-6 text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2 neon-text-advanced">1000+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="cyber-card-advanced p-6 text-center">
                  <div className="text-4xl font-bold text-pink-400 mb-2 neon-text-advanced">99%</div>
                  <div className="text-gray-300">Client Satisfaction</div>
                </div>
                <div className="cyber-card-advanced p-6 text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2 neon-text-advanced">10+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-20">
            <h2 className="text-5xl font-bold text-center text-white mb-16 neon-text-advanced">
              Why Choose Zion Tech Group?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="cyber-card-advanced holographic-advanced p-8 text-center hover-lift-advanced group"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text-advanced">{feature.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-20">
            <h2 className="text-5xl font-bold text-center text-white mb-16 neon-text-advanced">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="cyber-card-advanced holographic-advanced p-8 hover-lift-advanced group"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white neon-text-advanced">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Technology Showcase */}
          <section className="mb-20">
            <h2 className="text-5xl font-bold text-center text-white mb-16 neon-text-advanced">
              Cutting-Edge Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: 'AI/ML', icon: Brain, color: 'from-purple-500 to-pink-600' },
                { name: 'Quantum Computing', icon: Cpu, color: 'from-cyan-500 to-blue-600' },
                { name: 'Blockchain', icon: Shield, color: 'from-green-500 to-emerald-600' },
                { name: 'IoT', icon: Wifi, color: 'from-orange-500 to-red-600' },
                { name: 'AR/VR', icon: Eye, color: 'from-pink-500 to-purple-600' },
                { name: '5G', icon: Zap, color: 'from-yellow-500 to-orange-600' }
              ].map((tech, index) => (
                <div key={index} className="cyber-card-advanced p-6 text-center hover-lift-advanced group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white neon-text-advanced">{tech.name}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center mb-20">
            <div className="cyber-card-advanced holographic-advanced quantum-advanced p-12 rounded-3xl">
              <h2 className="text-5xl font-bold text-white mb-6 neon-text-advanced">
                Ready to Transform Your Business?
              </h2>
              <p className="text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                Let's discuss how our cutting-edge AI and IT solutions can help you achieve your goals and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="futuristic-btn-advanced px-12 py-6 text-xl font-semibold rounded-xl flex items-center justify-center hover-lift-advanced">
                  Start Your Project Today
                  <ArrowRight className="w-6 h-6 ml-3" />
                </button>
                <button className="px-12 py-6 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover-glow-advanced text-xl">
                  Schedule Consultation
                </button>
              </div>
              
              {/* Contact Info */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-white font-semibold text-lg">+1 302 464 0950</div>
                  <div className="text-gray-400">Call us anytime</div>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-white font-semibold text-lg">kleber@ziontechgroup.com</div>
                  <div className="text-gray-400">Email us today</div>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                  <div className="text-white font-semibold text-lg">Middletown, DE</div>
                  <div className="text-gray-400">Visit our office</div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;