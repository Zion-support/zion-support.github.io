<<<<<<< HEAD
import React from 'react';
import { Cpu, Zap, Globe, Shield, CheckCircle, ArrowRight, Phone, Mail, MapPin, Calendar, MessageSquare, Database, Network, Clock, Target, Award, Star, Brain, TrendingUp } from 'lucide-react';

export default function EdgeComputingPage() {
  const services = [
    {
      icon: Cpu,
      title: 'Edge Infrastructure',
      description: 'Deploy and manage edge computing infrastructure closer to your data sources.',
      features: ['Low Latency', 'High Performance', 'Distributed Architecture', 'Real-time Processing']
    },
    {
      icon: Zap,
      title: 'Edge AI Processing',
      description: 'Run AI models and machine learning algorithms directly at the edge.',
      features: ['Local AI', 'Real-time Inference', 'Reduced Bandwidth', 'Privacy Protection']
    },
    {
      icon: Globe,
      title: 'Global Edge Network',
      description: 'Worldwide edge computing network for optimal performance and reliability.',
      features: ['Global Coverage', 'Load Balancing', 'Failover Protection', 'CDN Integration']
=======
'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Zap, Cpu, Clock, Users, Shield, BarChart, ArrowRight, Phone, Mail } from 'lucide-react';

const EdgeComputingPage: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Low-Latency Processing',
      description: 'Process data at the edge for ultra-low latency applications and real-time decision making.',
      benefits: ['< 1ms latency', 'Real-time processing', 'Instant responses']
    },
    {
      icon: Zap,
      title: 'Distributed Architecture',
      description: 'Deploy computing resources closer to data sources for optimal performance and efficiency.',
      benefits: ['Reduced bandwidth', 'Faster processing', 'Cost optimization']
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Ensure continuous operation with edge nodes that work independently of central infrastructure.',
      benefits: ['High availability', 'Fault tolerance', 'Resilient design']
    },
    {
      icon: Users,
      title: 'Scalable Infrastructure',
      description: 'Easily scale your edge computing infrastructure as your needs grow.',
      benefits: ['Auto-scaling', 'Flexible deployment', 'Resource optimization']
>>>>>>> origin/main
    },
    {
      icon: Shield,
      title: 'Edge Security',
<<<<<<< HEAD
      description: 'Comprehensive security solutions for edge computing environments.',
      features: ['Zero Trust', 'Data Encryption', 'Access Control', 'Threat Detection']
    }
  ];

  const useCases = [
    {
      title: 'IoT Data Processing',
      description: 'Process IoT sensor data at the edge for real-time insights and control.',
      icon: '🌐'
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Low-latency processing for autonomous vehicle decision making.',
      icon: '🚗'
    },
    {
      title: 'Smart Manufacturing',
      description: 'Real-time monitoring and control of manufacturing processes.',
      icon: '🏭'
    },
    {
      title: 'AR/VR Applications',
      description: 'High-performance edge computing for immersive AR/VR experiences.',
      icon: '🥽'
    },
    {
      title: 'Video Analytics',
      description: 'Real-time video processing and analysis at the edge.',
      icon: '📹'
    },
    {
      title: '5G Networks',
      description: 'Edge computing infrastructure for 5G network optimization.',
      icon: '📶'
    }
  ];

  const benefits = [
    {
      metric: '< 10ms',
      label: 'Latency',
      description: 'Ultra-low latency for real-time applications'
    },
    {
      metric: '99.9%',
      label: 'Uptime',
      description: 'High availability edge computing infrastructure'
    },
    {
      metric: '50%',
      label: 'Cost Reduction',
      description: 'Reduced bandwidth and cloud computing costs'
    },
    {
      metric: 'Global',
      label: 'Coverage',
      description: 'Worldwide edge computing network'
    }
  ];

  const technologies = [
    { name: 'Kubernetes', description: 'Container orchestration for edge deployments', icon: '☸️' },
    { name: 'Docker', description: 'Containerization for edge applications', icon: '🐳' },
    { name: 'TensorFlow Lite', description: 'Lightweight ML models for edge devices', icon: '🧠' },
    { name: 'MQTT', description: 'Lightweight messaging protocol for IoT', icon: '📡' },
    { name: 'WebRTC', description: 'Real-time communication for edge applications', icon: '💬' },
    { name: 'Redis', description: 'In-memory data store for edge caching', icon: '⚡' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Edge Computing Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Bring computing power closer to your data sources with our comprehensive edge computing solutions 
              for ultra-low latency, real-time processing, and enhanced performance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Low Latency</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Globe className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Global Network</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Secure</span>
              </div>
            </div>
=======
      description: 'Comprehensive security measures designed specifically for edge computing environments.',
      benefits: ['Data protection', 'Secure communication', 'Compliance ready']
    },
    {
      icon: BarChart,
      title: 'Performance Monitoring',
      description: 'Monitor edge performance with real-time analytics and optimization recommendations.',
      benefits: ['Live monitoring', 'Performance insights', 'Proactive optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Edge Computing
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Bring computing power closer to your data sources with our advanced edge computing solutions. 
            Achieve ultra-low latency, reduce bandwidth costs, and enable real-time processing at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Demo
            </button>
>>>>>>> origin/main
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Edge Computing Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive edge computing solutions for modern applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center group hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Edge Computing Use Cases
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real-world applications that benefit from edge computing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-6 hover:bg-slate-800/50 transition-all duration-300">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Edge Computing Technologies
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies powering our edge computing solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center hover:bg-slate-700/50 transition-all duration-300">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{tech.name}</h3>
                <p className="text-gray-300 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Edge Computing Benefits
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Key advantages of implementing edge computing solutions
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-cyan-400 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-xl font-bold text-white mb-2">
                  {benefit.label}
                </div>
                <div className="text-gray-300 text-sm">
                  {benefit.description}
                </div>
=======
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Advanced Edge Computing Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive edge computing solution designed for modern applications and IoT deployments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
>>>>>>> origin/main
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Deploy Edge Computing?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let our edge computing experts help you implement low-latency, high-performance solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started Today
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
=======
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Deploy Edge Computing?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading enterprises using edge computing to optimize their applications and reduce latency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EdgeComputingPage;
>>>>>>> origin/main
