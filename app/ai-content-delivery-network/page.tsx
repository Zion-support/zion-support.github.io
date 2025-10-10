'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const AiContentDeliveryNetworkPage: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: 'Global CDN Network',
      description: 'Worldwide content delivery network with edge locations across the globe.',
      benefits: ['Global coverage', 'Edge locations', 'Low latency', 'High availability']
    },
    {
      icon: Brain,
      title: 'AI-Powered Optimization',
      description: 'Intelligent content optimization and delivery using advanced AI algorithms.',
      benefits: ['Smart caching', 'Predictive delivery', 'Content optimization', 'Performance tuning']
    },
    {
      icon: Shield,
      title: 'Security & Protection',
      description: 'Advanced security features to protect your content and users.',
      benefits: ['DDoS protection', 'SSL/TLS encryption', 'Access controls', 'Threat detection']
    },
    {
      icon: Settings,
      title: 'Easy Management',
      description: 'Simple management and configuration through intuitive dashboards.',
      benefits: ['Visual config', 'API access', 'Analytics dashboard', 'Real-time monitoring']
    },
    {
      icon: Target,
      title: 'Performance Monitoring',
      description: 'Comprehensive monitoring and analytics for CDN performance.',
      benefits: ['Real-time metrics', 'Performance alerts', 'Usage analytics', 'Optimization insights']
    },
    {
      icon: Database,
      title: 'Scalable Infrastructure',
      description: 'Scale your content delivery to handle any traffic volume.',
      benefits: ['Auto-scaling', 'Load balancing', 'Traffic management', 'Capacity planning']
    }
  ];

  const benefits = [
    'Deliver content faster with global edge locations',
    'Reduce bandwidth costs with intelligent caching',
    'Improve user experience with low latency delivery',
    'Ensure security and protection of your content',
    'Scale automatically with traffic demands',
    'Gain insights with comprehensive analytics'
  ];

  const useCases = [
    {
      title: 'Web Applications',
      description: 'Accelerate web applications with global CDN',
      icon: Globe
    },
    {
      title: 'Media Streaming',
      description: 'Stream video and audio content worldwide',
      icon: Database
    },
    {
      title: 'E-commerce',
      description: 'Optimize e-commerce sites for global customers',
      icon: Target
    },
    {
      title: 'Mobile Apps',
      description: 'Deliver content to mobile applications efficiently',
      icon: Settings
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Content Delivery Network - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered content delivery network for modern applications. Global CDN with intelligent optimization." />
        <meta name="keywords" content="CDN, content delivery network, AI CDN, global CDN, content optimization, edge computing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Content Delivery Network
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Deliver content faster and more efficiently with our AI-powered global CDN. 
                Optimize performance, reduce costs, and improve user experience.
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
              <h2 className="text-4xl font-bold text-white mb-6">Advanced CDN Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered CDN provides everything you need to deliver content globally with optimal performance.
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
                Discover how our CDN can accelerate your applications across different industries.
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
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our CDN?</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our AI-powered CDN is designed to help you deliver content faster, 
                  more efficiently, and with better user experience.
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
                    <h3 className="text-2xl font-bold text-white mb-4">Global Performance</h3>
                    <p className="text-gray-300 mb-6">
                      Deliver content to users worldwide with optimal performance and low latency.
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
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Accelerate Your Content?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start delivering content faster with our AI-powered CDN. 
                Get started today and see the difference intelligent content delivery can make.
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

export default AiContentDeliveryNetworkPage;