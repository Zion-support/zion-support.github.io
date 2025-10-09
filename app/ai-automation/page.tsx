'use client';
import React from 'react';
import { Brain, Zap, Cog, ArrowRight, CheckCircle, Star, Users, TrendingUp, Shield, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Process Discovery',
      description: 'AI automatically identifies and maps your business processes for optimization opportunities.'
    },
    {
      icon: Zap,
      title: 'Smart Workflow Automation',
      description: 'Deploy AI-powered workflows that adapt and learn from your business patterns.'
    },
    {
      icon: Cog,
      title: 'Predictive Maintenance',
      description: 'Prevent system failures with AI-driven predictive analytics and automated maintenance.'
    },
    {
      icon: Users,
      title: 'Human-AI Collaboration',
      description: 'Seamless integration between human workers and AI systems for maximum efficiency.'
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 60%',
    'Increase process efficiency by 300%',
    'Eliminate manual errors completely',
    'Scale operations without proportional cost increase',
    '24/7 automated monitoring and optimization',
    'Real-time decision making capabilities'
  ];

  const useCases = [
    {
      title: 'Customer Service Automation',
      description: 'AI-powered chatbots and ticket routing that resolve 80% of inquiries automatically.',
      metrics: '80% reduction in response time'
    },
    {
      title: 'Financial Process Automation',
      description: 'Automated invoice processing, expense management, and financial reporting.',
      metrics: '95% accuracy in financial processing'
    },
    {
      title: 'Supply Chain Optimization',
      description: 'AI-driven inventory management and demand forecasting for optimal stock levels.',
      metrics: '40% reduction in inventory costs'
    },
    {
      title: 'HR Process Automation',
      description: 'Automated recruitment, onboarding, and employee lifecycle management.',
      metrics: '70% faster hiring process'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Automation Services - Zion Tech Group"
        description="Transform your business with intelligent process automation. Reduce costs by 60%, increase efficiency by 300%, and eliminate manual errors with our AI-powered automation solutions."
        keywords={['AI automation', 'process automation', 'workflow automation', 'intelligent automation', 'business process optimization', 'AI-powered workflows']}
        canonicalUrl="https://ziontechgroup.com/ai-automation"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                  <Brain className="w-4 h-4" />
                  <span>AI Automation Services</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Intelligent Process
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Automation</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Transform your business operations with AI-powered automation that learns, adapts, and optimizes your processes in real-time. Reduce costs by 60% while increasing efficiency by 300%.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Automation Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-lg transition-all duration-300 text-lg">
                  View Case Studies
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">60%</div>
                  <div className="text-sm text-gray-400">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">300%</div>
                  <div className="text-sm text-gray-400">Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">99.9%</div>
                  <div className="text-sm text-gray-400">Accuracy Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium">AI Process Monitor Active</span>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-cyan-400 text-sm">Customer Service</span>
                        <span className="text-green-400 text-sm">Optimized</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full w-4/5"></div>
                      </div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-purple-400 text-sm">Financial Processing</span>
                        <span className="text-green-400 text-sm">Automated</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full w-full"></div>
                      </div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-pink-400 text-sm">Supply Chain</span>
                        <span className="text-yellow-400 text-sm">Learning</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-pink-400 to-orange-400 h-2 rounded-full w-3/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Advanced AI Automation Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI automation platform combines machine learning, natural language processing, and advanced analytics to create intelligent workflows that evolve with your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
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
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our AI Automation?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI automation solutions are designed to deliver measurable results from day one, with continuous optimization and learning capabilities.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl font-bold text-cyan-400 mb-2">300%</div>
                  <div className="text-white text-xl">Efficiency Increase</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">60%</div>
                    <div className="text-sm text-gray-300">Cost Reduction</div>
                  </div>
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">99.9%</div>
                    <div className="text-sm text-gray-300">Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Real-World Automation Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our AI automation solutions have transformed businesses across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                  <div className="bg-green-400/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {useCase.metrics}
                  </div>
                </div>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have transformed their operations with our AI automation solutions. Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg">
                <Clock className="w-5 h-5 mr-2" />
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-lg transition-all duration-300 text-lg">
                Download Case Study
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AIAutomationPage;