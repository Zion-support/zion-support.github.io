'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, BarChart, Cpu, Zap, Shield, Globe } from 'lucide-react';

const AiAutonomousSystemsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent decision-making and autonomous operation capabilities.',
      benefits: ['Machine learning', 'Decision automation', 'Predictive analysis', 'Smart algorithms']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization and performance monitoring.',
      benefits: ['Real-time monitoring', 'Performance metrics', 'Data visualization', 'Custom dashboards']
    },
    {
      icon: Cpu,
      title: 'Autonomous Processing',
      description: 'Fully autonomous processing capabilities with minimal human intervention required.',
      benefits: ['Self-managing systems', 'Automatic optimization', 'Independent operation', 'Reduced oversight']
    },
    {
      icon: Zap,
      title: 'Real-time Response',
      description: 'Lightning-fast response times with real-time processing and instant decision making.',
      benefits: ['Instant responses', 'Real-time processing', 'Low latency', 'High performance']
    },
    {
      icon: Shield,
      title: 'Security & Safety',
      description: 'Enterprise-grade security with built-in safety mechanisms and fail-safe protocols.',
      benefits: ['Security protocols', 'Safety mechanisms', 'Fail-safe systems', 'Risk mitigation']
    },
    {
      icon: Globe,
      title: 'Scalable Architecture',
      description: 'Highly scalable architecture that can adapt to growing demands and complex environments.',
      benefits: ['Horizontal scaling', 'Adaptive capacity', 'Global deployment', 'Flexible infrastructure']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Autonomous Systems - Zion Tech Group | Intelligent Automation</title>
        <meta name="description" content="Cutting-edge autonomous systems powered by advanced AI technology. Self-managing, intelligent systems for modern business operations." />
        <meta name="keywords" content="AI autonomous systems, artificial intelligence, autonomous technology, AI solutions, intelligent automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Systems</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Cutting-edge autonomous systems powered by advanced AI technology for intelligent, self-managing operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300">
                Discover how our AI platform can revolutionize your business operations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
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
        
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Deploy Autonomous Systems?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI-powered autonomous systems and transform your operations with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiAutonomousSystemsPage;