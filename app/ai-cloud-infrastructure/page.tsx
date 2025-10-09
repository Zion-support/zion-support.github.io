'use client';
import React from 'react';
import { Cloud, Server, Shield, Zap, CheckCircle, ArrowRight, Play, Users, BarChart, Clock, Target, Brain, Cpu, Database } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AICloudInfrastructurePage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'AI-Optimized Cloud Architecture',
      description: 'Design and deploy cloud infrastructure specifically optimized for AI workloads and machine learning operations'
    },
    {
      icon: Server,
      title: 'Scalable Computing Resources',
      description: 'Automatically scale compute resources based on AI model demands and processing requirements'
    },
    {
      icon: Brain,
      title: 'ML Pipeline Infrastructure',
      description: 'Complete infrastructure for data ingestion, model training, deployment, and monitoring'
    },
    {
      icon: Database,
      title: 'AI-Ready Data Storage',
      description: 'High-performance data storage solutions optimized for AI and machine learning workloads'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, access controls, and compliance monitoring'
    },
    {
      icon: Zap,
      title: 'Auto-Scaling & Load Balancing',
      description: 'Intelligent load balancing and auto-scaling for optimal performance and cost efficiency'
    }
  ];

  const services = [
    {
      title: 'Cloud Migration & Setup',
      description: 'Seamless migration of existing systems to AI-optimized cloud infrastructure',
      benefits: ['Zero downtime migration', 'Cost optimization', 'Performance improvement'],
      icon: Cloud
    },
    {
      title: 'AI Model Deployment',
      description: 'Production-ready deployment of machine learning models with monitoring and scaling',
      benefits: ['High availability', 'Real-time monitoring', 'Automatic scaling'],
      icon: Brain
    },
    {
      title: 'Data Pipeline Architecture',
      description: 'End-to-end data pipeline for AI model training and inference',
      benefits: ['Real-time processing', 'Data quality assurance', 'Scalable architecture'],
      icon: Database
    },
    {
      title: 'DevOps for AI',
      description: 'CI/CD pipelines and infrastructure as code for AI applications',
      benefits: ['Automated deployments', 'Version control', 'Rollback capabilities'],
      icon: Server
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Cost Optimization',
      description: 'Reduce cloud costs by up to 60% with intelligent resource management'
    },
    {
      icon: Clock,
      title: 'Faster Deployment',
      description: 'Deploy AI models 10x faster with our pre-configured infrastructure'
    },
    {
      icon: Target,
      title: 'High Performance',
      description: 'Achieve optimal performance with GPU-optimized cloud instances'
    },
    {
      icon: BarChart,
      title: 'Scalability',
      description: 'Scale from prototype to production seamlessly'
    }
  ];

  const technologies = [
    { name: 'AWS', description: 'Amazon Web Services' },
    { name: 'Azure', description: 'Microsoft Azure' },
    { name: 'Google Cloud', description: 'Google Cloud Platform' },
    { name: 'Kubernetes', description: 'Container orchestration' },
    { name: 'Docker', description: 'Containerization' },
    { name: 'Terraform', description: 'Infrastructure as code' },
    { name: 'TensorFlow', description: 'ML framework' },
    { name: 'PyTorch', description: 'Deep learning framework' }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Cloud Infrastructure Services - Zion Tech Group"
        description="Build and deploy AI-optimized cloud infrastructure. Scalable, secure, and cost-effective cloud solutions for machine learning and AI applications."
        keywords={['AI cloud infrastructure', 'ML cloud services', 'AI cloud deployment', 'machine learning infrastructure', 'cloud AI platform', 'AI cloud architecture']}
        canonicalUrl="https://ziontechgroup.com/ai-cloud-infrastructure"
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                  AI Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Infrastructure</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Build and deploy AI-optimized cloud infrastructure that scales with your needs. 
                  From prototype to production, we provide the foundation for your AI success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all text-lg">
                    <Play className="w-6 h-6 mr-2" />
                    Watch Demo
                  </button>
                  <button className="inline-flex items-center bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-700 transition-all border border-gray-600 text-lg">
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                      <Cloud className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                      <p className="text-white font-semibold">60%</p>
                      <p className="text-gray-400 text-sm">Cost Reduction</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                      <Zap className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <p className="text-white font-semibold">10x</p>
                      <p className="text-gray-400 text-sm">Faster Deploy</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                      <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <p className="text-white font-semibold">99.9%</p>
                      <p className="text-gray-400 text-sm">Uptime</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                      <BarChart className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                      <p className="text-white font-semibold">Auto</p>
                      <p className="text-gray-400 text-sm">Scaling</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">AI-Optimized Infrastructure Features</h2>
              <p className="text-gray-400">Everything you need to run AI workloads efficiently in the cloud</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our AI Cloud Services</h2>
              <p className="text-gray-400">Comprehensive cloud infrastructure solutions for AI and machine learning</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Technologies We Use</h2>
              <p className="text-gray-400">Cutting-edge cloud and AI technologies for optimal performance</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 text-center border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">{tech.name}</h3>
                  <p className="text-xs text-gray-400">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our AI Cloud Infrastructure?</h2>
              <p className="text-gray-400">Experience the benefits of AI-optimized cloud infrastructure</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your AI Cloud Infrastructure?</h2>
            <p className="text-gray-300 mb-8">
              Let us help you design and deploy the perfect cloud infrastructure for your AI and machine learning needs. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/demo"
                className="inline-flex items-center bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-700 transition-all border border-gray-600"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AICloudInfrastructurePage;