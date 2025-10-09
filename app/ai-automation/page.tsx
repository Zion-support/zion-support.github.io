'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Users, TrendingUp, Clock, Shield, Zap, Settings, Phone, ArrowRight, Brain, Target, BarChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Process Automation',
      description: 'Transform repetitive tasks into intelligent workflows that adapt and learn from patterns.',
      benefits: ['Reduce manual work by 80%', 'Improve accuracy to 99.9%', 'Scale operations instantly']
    },
    {
      icon: Zap,
      title: 'Real-time Decision Making',
      description: 'AI systems that make instant decisions based on data patterns and business rules.',
      benefits: ['Instant response times', 'Data-driven decisions', 'Continuous optimization']
    },
    {
      icon: Target,
      title: 'Predictive Analytics',
      description: 'Anticipate future trends and behaviors to make proactive business decisions.',
      benefits: ['Forecast demand accurately', 'Prevent issues before they occur', 'Optimize resource allocation']
    },
    {
      icon: BarChart,
      title: 'Performance Monitoring',
      description: 'Continuous monitoring and optimization of AI systems for peak performance.',
      benefits: ['Real-time insights', 'Automatic optimization', 'Performance tracking']
    }
  ];

  const useCases = [
    {
      title: 'Customer Service Automation',
      description: 'AI-powered chatbots and virtual assistants that handle customer inquiries 24/7.',
      icon: Users,
      metrics: ['90% faster response', '85% satisfaction rate', '60% cost reduction']
    },
    {
      title: 'Document Processing',
      description: 'Automated extraction and processing of information from various document types.',
      icon: Settings,
      metrics: ['95% accuracy', '10x faster processing', '99% time savings']
    },
    {
      title: 'Predictive Maintenance',
      description: 'AI systems that predict equipment failures before they happen.',
      icon: Shield,
      metrics: ['50% fewer breakdowns', '30% cost savings', '99% uptime']
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Automation Services - Zion Tech Group"
        description="Transform your business with intelligent automation solutions. Reduce costs, improve efficiency, and scale operations with our AI-powered automation services."
        keywords="AI automation, intelligent automation, process automation, business automation, AI solutions"
        canonical="https://ziontechgroup.com/ai-automation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  AI-Powered
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                    Automation
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-3xl mx-auto">
                  Transform your business processes with intelligent automation that learns, adapts, and scales with your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Our AI Automation
                  <span className="block text-cyan-400">Capabilities</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive AI automation solutions designed to streamline your operations and drive growth.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700 hover:border-cyan-400 transition-all duration-300">
                    <div className="text-cyan-400 mb-4">
                      <feature.icon className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Real-World
                  <span className="block text-cyan-400">Applications</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how our AI automation solutions are transforming businesses across industries.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {useCases.map((useCase, index) => (
                  <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700">
                    <div className="text-cyan-400 mb-6">
                      <useCase.icon className="w-16 h-16" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                    <p className="text-gray-300 mb-6">{useCase.description}</p>
                    <div className="space-y-3">
                      {useCase.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center text-cyan-400">
                          <TrendingUp className="w-5 h-5 mr-3" />
                          <span className="font-semibold">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-cyan-400 mb-8">
                Let's discuss how AI automation can transform your operations and drive measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  Start Your Automation Journey
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AIAutomationPage;
