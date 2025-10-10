'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Cloud, Server, Shield, Zap, Globe, Database } from 'lucide-react';

const AICloudInfrastructurePage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Scalable Cloud Architecture',
      description: 'AI-optimized cloud infrastructure that scales automatically with your business needs.',
      benefits: ['Auto-scaling', 'Load balancing', 'Resource optimization', 'Cost efficiency']
    },
    {
      icon: Server,
      title: 'High-Performance Computing',
      description: 'Powerful computing resources for AI workloads and data-intensive applications.',
      benefits: ['GPU acceleration', 'Parallel processing', 'High memory', 'Fast storage']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, access controls, and compliance standards.',
      benefits: ['End-to-end encryption', 'Access controls', 'Audit trails', 'Compliance support']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Ultra-fast processing capabilities for real-time AI applications and data streaming.',
      benefits: ['Low latency', 'High throughput', 'Stream processing', 'Real-time analytics']
    },
    {
      icon: Globe,
      title: 'Global Distribution',
      description: 'Worldwide cloud infrastructure with intelligent content delivery and edge computing.',
      benefits: ['Global CDN', 'Edge computing', 'Low latency', 'High availability']
    },
    {
      icon: Database,
      title: 'Managed Databases',
      description: 'AI-optimized database solutions with automatic scaling and performance tuning.',
      benefits: ['Auto-scaling', 'Performance tuning', 'Backup & recovery', 'Monitoring']
    }
  ];

  const useCases = [
    {
      title: 'AI/ML Workloads',
      description: 'High-performance infrastructure for machine learning and AI model training',
      icon: '🤖'
    },
    {
      title: 'Big Data Analytics',
      description: 'Scalable infrastructure for processing and analyzing large datasets',
      icon: '📊'
    },
    {
      title: 'Web Applications',
      description: 'Reliable and scalable infrastructure for web applications and APIs',
      icon: '🌐'
    },
    {
      title: 'IoT Solutions',
      description: 'Edge computing infrastructure for Internet of Things applications',
      icon: '📡'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-optimized cloud infrastructure solutions. Scalable, secure, and high-performance cloud computing for modern applications." />
        <meta name="keywords" content="AI cloud infrastructure, cloud computing, scalable infrastructure, cloud security, edge computing, managed services" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Cloud
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Infrastructure
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-optimized cloud infrastructure solutions. Scalable, secure, and high-performance cloud computing for modern applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                Get Started
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced cloud infrastructure capabilities powered by AI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Perfect for a wide range of applications and industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Scale Your Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your cloud infrastructure requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AICloudInfrastructurePage;