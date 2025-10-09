'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Network, Server, Shield, Zap, CheckCircle, ArrowRight, Star, Award, BarChart, Target } from 'lucide-react';

const ITInfrastructureDesignPage: React.FC = () => {
  const features = [
    {
      icon: Network,
      title: 'Network Architecture',
      description: 'Design robust network architectures with redundancy, security, and scalability.'
    },
    {
      icon: Server,
      title: 'Server Infrastructure',
      description: 'Plan and design server infrastructure for optimal performance and reliability.'
    },
    {
      icon: Shield,
      title: 'Security Design',
      description: 'Integrate security best practices into every aspect of infrastructure design.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Design for high performance with load balancing and resource optimization.'
    }
  ];

  const services = [
    {
      title: 'Data Center Design',
      description: 'Complete data center design including power, cooling, and network infrastructure.',
      duration: '2-6 months',
      icon: '🏢'
    },
    {
      title: 'Cloud Architecture',
      description: 'Design cloud-native architectures for AWS, Azure, and Google Cloud platforms.',
      duration: '1-3 months',
      icon: '☁️'
    },
    {
      title: 'Network Design',
      description: 'Enterprise network design with routing, switching, and security components.',
      duration: '1-2 months',
      icon: '🌐'
    },
    {
      title: 'Security Architecture',
      description: 'Comprehensive security architecture design with defense-in-depth strategies.',
      duration: '2-4 months',
      icon: '🔒'
    },
    {
      title: 'Disaster Recovery',
      description: 'Design disaster recovery and business continuity infrastructure solutions.',
      duration: '1-3 months',
      icon: '🚨'
    },
    {
      title: 'Hybrid Infrastructure',
      description: 'Design hybrid cloud and on-premise infrastructure solutions.',
      duration: '2-5 months',
      icon: '🔗'
    }
  ];

  const benefits = [
    'Design scalable and future-proof infrastructure',
    'Reduce implementation costs by 30%',
    'Improve system reliability and performance',
    'Ensure security and compliance requirements',
    'Optimize resource utilization and efficiency',
    'Plan for growth and technology evolution'
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                IT Infrastructure Design
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Expert IT infrastructure design services for modern, scalable, and secure systems. 
                From data centers to cloud architectures, we design solutions that grow with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  Start Design
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">200+</div>
                <div className="text-gray-300">Designs Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">30%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">15+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Infrastructure Design</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our infrastructure design services cover all aspects of modern IT systems 
                with a focus on scalability, security, and performance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-colors">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Infrastructure Design Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From data centers to cloud architectures, we provide comprehensive 
                infrastructure design services for all types of organizations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-900/50 rounded-xl p-6 hover:bg-slate-900/70 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {service.duration}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Infrastructure Design?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our infrastructure design services deliver scalable, secure, and efficient 
                  solutions that meet your current needs and future growth requirements.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Design Process</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-sm font-bold text-white">1</div>
                    <span className="text-gray-300">Requirements Analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-sm font-bold text-white">2</div>
                    <span className="text-gray-300">Architecture Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-sm font-bold text-white">3</div>
                    <span className="text-gray-300">Security Planning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-sm font-bold text-white">4</div>
                    <span className="text-gray-300">Implementation Guide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Design Your Perfect Infrastructure</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get expert infrastructure design services that deliver scalable, secure, and efficient solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ITInfrastructureDesignPage;