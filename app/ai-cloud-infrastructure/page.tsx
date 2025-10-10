'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Brain, Shield, Zap, Database, Server, Globe, CheckCircle, ArrowRight, Cpu, HardDrive, Network, Lock, BarChart, Users, Settings } from 'lucide-react';

const AICloudInfrastructurePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Infrastructure',
      description: 'Intelligent cloud infrastructure that automatically scales, optimizes, and self-heals based on AI-driven insights.',
      benefits: ['Auto-scaling', 'Predictive optimization', 'Self-healing systems', 'Intelligent resource allocation']
    },
    {
      icon: Cloud,
      title: 'Multi-Cloud Architecture',
      description: 'Seamless integration across AWS, Azure, Google Cloud, and private clouds with intelligent workload distribution.',
      benefits: ['Vendor independence', 'Cost optimization', 'High availability', 'Disaster recovery']
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'AI-enhanced security with real-time threat detection, automated response, and zero-trust architecture.',
      benefits: ['Real-time monitoring', 'Automated threat response', 'Zero-trust security', 'Compliance automation']
    },
    {
      icon: Zap,
      title: 'Edge Computing',
      description: 'Distributed AI processing at the edge for ultra-low latency and real-time decision making.',
      benefits: ['Ultra-low latency', 'Real-time processing', 'Bandwidth optimization', 'Offline capabilities']
    },
    {
      icon: Database,
      title: 'AI Data Lakes',
      description: 'Intelligent data management with automated classification, processing, and insights generation.',
      benefits: ['Automated data processing', 'Real-time analytics', 'Data lineage tracking', 'Intelligent archiving']
    },
    {
      icon: Server,
      title: 'Container Orchestration',
      description: 'AI-optimized Kubernetes and container management with intelligent resource allocation.',
      benefits: ['Auto-scaling', 'Resource optimization', 'Fault tolerance', 'Cost efficiency']
    }
  ];

  const services = [
    {
      title: 'AI Cloud Migration',
      description: 'Seamless migration of your existing infrastructure to AI-powered cloud platforms.',
      features: ['Zero-downtime migration', 'AI optimization', 'Cost analysis', 'Performance monitoring'],
      price: 'Starting at $15,000'
    },
    {
      title: 'AI Infrastructure Design',
      description: 'Custom AI cloud architecture designed for your specific business needs and requirements.',
      features: ['Custom architecture', 'Scalability planning', 'Security design', 'Cost optimization'],
      price: 'Starting at $25,000'
    },
    {
      title: 'AI Cloud Management',
      description: 'Ongoing management and optimization of your AI cloud infrastructure.',
      features: ['24/7 monitoring', 'AI optimization', 'Security management', 'Performance tuning'],
      price: 'Starting at $5,000/month'
    },
    {
      title: 'AI Edge Computing',
      description: 'Deploy AI models at the edge for real-time processing and ultra-low latency.',
      features: ['Edge deployment', 'Model optimization', 'Real-time processing', 'Offline capabilities'],
      price: 'Starting at $10,000'
    }
  ];

  const stats = [
    { number: '99.99%', label: 'Uptime Guarantee', icon: Shield },
    { number: '50%', label: 'Cost Reduction', icon: BarChart },
    { number: '10x', label: 'Performance Boost', icon: Zap },
    { number: '24/7', label: 'AI Monitoring', icon: Brain }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cloud Infrastructure - Zion Tech Group | Intelligent Cloud Solutions</title>
        <meta name="description" content="Transform your cloud infrastructure with AI-powered automation, intelligent scaling, and advanced security. Achieve 99.99% uptime and 50% cost reduction." />
        <meta name="keywords" content="AI cloud infrastructure, intelligent cloud, cloud automation, AI-powered scaling, cloud security, edge computing" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-cloud-infrastructure" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
          <div className="relative container mx-auto px-4 py-24">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Cloud Infrastructure</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your cloud infrastructure with intelligent automation, predictive scaling, and AI-enhanced security. 
                Achieve 99.99% uptime, 50% cost reduction, and 10x performance improvement.
              </p>
              <div className="flex flex-wrap justify-center gap-8 mt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Intelligent Cloud Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered cloud infrastructure automatically adapts, scales, and optimizes to meet your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-slate-800/30 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">AI Cloud Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI cloud solutions tailored to your business requirements and growth objectives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technology Stack</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on cutting-edge technologies and AI frameworks for maximum performance and reliability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'AWS', icon: Cloud },
              { name: 'Azure', icon: Server },
              { name: 'Google Cloud', icon: Globe },
              { name: 'Kubernetes', icon: Settings },
              { name: 'Docker', icon: HardDrive },
              { name: 'Terraform', icon: Network }
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Cloud Infrastructure?</h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let our AI experts design and implement the perfect cloud infrastructure for your business. 
              Get started with a free consultation and infrastructure assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </a>
              <a
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AICloudInfrastructurePage;