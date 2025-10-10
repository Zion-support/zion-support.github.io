'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const AiCloudInfrastructurePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Cloud Infrastructure',
      description: 'Advanced AI algorithms that provide intelligent cloud management and optimization.',
      benefits: ['Smart scaling', 'Predictive analytics', 'Automated optimization', 'Intelligent monitoring']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Enterprise-grade security features to protect your cloud infrastructure and data.',
      benefits: ['End-to-end encryption', 'Access controls', 'Audit trails', 'Compliance support']
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Scale your applications globally with our distributed cloud infrastructure.',
      benefits: ['Multi-region support', 'Global CDN', 'Edge computing', 'Low latency']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Comprehensive data management and analytics for your cloud infrastructure.',
      benefits: ['Data storage', 'Data processing', 'Data analytics', 'Data backup']
    },
    {
      icon: Settings,
      title: 'Easy Management',
      description: 'Simple management and configuration through intuitive dashboards.',
      benefits: ['Visual config', 'Template library', 'Version control', 'Rollback support']
    },
    {
      icon: Target,
      title: 'Performance Optimization',
      description: 'Optimize cloud performance with intelligent monitoring and analytics.',
      benefits: ['Performance metrics', 'Optimization suggestions', 'Bottleneck identification', 'Efficiency improvements']
    }
  ];

  const benefits = [
    'Scale applications with confidence and intelligence',
    'Reduce infrastructure costs with smart optimization',
    'Improve performance and reliability',
    'Ensure security and compliance',
    'Gain insights with comprehensive analytics',
    'Streamline operations with automation'
  ];

  const useCases = [
    {
      title: 'Web Applications',
      description: 'Host and scale web applications with intelligent cloud infrastructure',
      icon: Globe
    },
    {
      title: 'Microservices',
      description: 'Build and deploy microservices with container orchestration',
      icon: Database
    },
    {
      title: 'Data Processing',
      description: 'Process and analyze large datasets with cloud computing power',
      icon: BarChart
    },
    {
      title: 'AI/ML Workloads',
      description: 'Run AI and machine learning workloads with GPU acceleration',
      icon: Brain
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cloud infrastructure for modern applications. Secure, scalable, and intelligent cloud solutions." />
        <meta name="keywords" content="cloud infrastructure, AI cloud, cloud computing, cloud management, cloud optimization" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Cloud Infrastructure
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Build and scale applications with our AI-powered cloud infrastructure. 
                Get intelligent management, optimization, and security for your cloud workloads.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#features"
                  className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Cloud Infrastructure</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our cloud infrastructure provides everything you need to build, deploy, and scale applications with intelligence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="bg-cyan-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our cloud infrastructure can transform your applications across different industries.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/10 text-center">
                  <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Cloud Infrastructure?</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our AI-powered cloud infrastructure is designed to help you build, deploy, 
                  and scale applications with confidence and intelligence.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                  <div className="text-center">
                    <div className="bg-cyan-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      <Globe className="w-10 h-10 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Global Scale</h3>
                    <p className="text-gray-300 mb-6">
                      Scale your applications globally with our distributed cloud infrastructure.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-cyan-400">99.9%</div>
                        <div className="text-gray-300 text-sm">Uptime</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-purple-400">50ms</div>
                        <div className="text-gray-300 text-sm">Latency</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Scale Your Applications?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start building and scaling applications with our AI-powered cloud infrastructure. 
                Get started today and see the difference intelligent cloud management can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/pricing"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>View Pricing</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default AiCloudInfrastructurePage;