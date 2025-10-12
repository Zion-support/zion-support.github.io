import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Zap, Globe, Shield, Database, Wifi, CheckCircle, Target, TrendingUp, Users, Settings, Cloud, Smartphone, Activity } from 'lucide-react'

export default function EdgeComputingPage() {
  const edgeServices = [
    {
      icon: Cpu,
      title: 'Edge Infrastructure',
      description: 'Deploy and manage edge computing infrastructure closer to your data sources and users.',
      features: ['Edge servers', 'Micro data centers', 'Hardware optimization', 'Remote management']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Process data at the edge for ultra-low latency and real-time decision making.',
      features: ['Stream processing', 'Real-time analytics', 'Instant responses', 'Low latency']
    },
    {
      icon: Globe,
      title: 'Distributed Networks',
      description: 'Build resilient distributed networks that span multiple edge locations.',
      features: ['Multi-site deployment', 'Load balancing', 'Failover systems', 'Global coverage']
    },
    {
      icon: Shield,
      title: 'Edge Security',
      description: 'Comprehensive security solutions for edge computing environments.',
      features: ['Edge firewalls', 'Encryption', 'Access control', 'Threat detection']
    },
    {
      icon: Database,
      title: 'Edge Data Management',
      description: 'Efficiently manage and synchronize data across edge and cloud environments.',
      features: ['Data synchronization', 'Edge caching', 'Data filtering', 'Bandwidth optimization']
    },
    {
      icon: Wifi,
      title: 'IoT Integration',
      description: 'Connect and process data from IoT devices at the edge for faster insights.',
      features: ['Device connectivity', 'Protocol support', 'Data aggregation', 'Device management']
    }
  ];

  const edgeBenefits = [
    { icon: Zap, title: 'Ultra-Low Latency', description: 'Process data in milliseconds at the edge' },
    { icon: Globe, title: 'Global Reach', description: 'Deploy anywhere in the world' },
    { icon: Shield, title: 'Enhanced Security', description: 'Keep sensitive data local and secure' },
    { icon: TrendingUp, title: 'Cost Efficiency', description: 'Reduce bandwidth and cloud costs' },
    { icon: Activity, title: 'Real-time Insights', description: 'Get instant analytics and responses' },
    { icon: Users, title: 'Better UX', description: 'Improved user experience with faster responses' }
  ];

  const useCases = [
    {
      title: 'Autonomous Vehicles',
      description: 'Real-time decision making for self-driving cars',
      icon: Smartphone
    },
    {
      title: 'Smart Manufacturing',
      description: 'Real-time monitoring and control of production lines',
      icon: Settings
    },
    {
      title: 'Retail Analytics',
      description: 'Real-time customer behavior analysis in stores',
      icon: Users
    },
    {
      title: 'Healthcare IoT',
      description: 'Real-time patient monitoring and diagnostics',
      icon: Activity
    },
    {
      title: 'Smart Cities',
      description: 'Real-time traffic and infrastructure management',
      icon: Globe
    },
    {
      title: 'AR/VR Applications',
      description: 'Low-latency rendering for immersive experiences',
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Edge Computing Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your business with edge computing solutions. Ultra-low latency processing, real-time analytics, and distributed infrastructure for modern applications." />
        <meta name="keywords" content="edge computing, real-time processing, distributed computing, IoT, low latency, edge infrastructure" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Edge <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Computing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Bring computing power closer to your data and users with our comprehensive edge computing solutions. 
              Achieve ultra-low latency, real-time processing, and enhanced performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Edge Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Edge Services */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Edge Computing Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions to bring computing power to the edge
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {edgeServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Edge Computing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlock the power of distributed computing for your applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {edgeBenefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Edge Computing Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world applications that benefit from edge computing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Deploy at the Edge?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our edge computing experts help you design and deploy the perfect edge solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your Edge Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}