'use client';
import React from 'react';
import { Bot, Zap, CheckCircle, ArrowRight, Play, Users, BarChart, Shield, Clock, Target, Brain, Cpu } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'Intelligent Process Automation',
      description: 'Automate complex business processes with AI-powered decision making and learning capabilities'
    },
    {
      icon: Zap,
      title: 'Workflow Optimization',
      description: 'Streamline operations and eliminate bottlenecks with smart workflow management'
    },
    {
      icon: Brain,
      title: 'Machine Learning Integration',
      description: 'Leverage ML algorithms to continuously improve automation performance'
    },
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Monitor and analyze automation performance with comprehensive dashboards'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Ensure all automated processes meet security standards and regulatory requirements'
    },
    {
      icon: Clock,
      title: '24/7 Operations',
      description: 'Run automated processes around the clock without human intervention'
    }
  ];

  const useCases = [
    {
      title: 'Customer Service Automation',
      description: 'Automate customer inquiries, ticket routing, and response generation',
      benefits: ['80% faster response times', '24/7 availability', 'Consistent quality'],
      icon: Users
    },
    {
      title: 'Data Processing Automation',
      description: 'Automate data collection, validation, and analysis processes',
      benefits: ['99% accuracy', '90% time reduction', 'Real-time insights'],
      icon: BarChart
    },
    {
      title: 'Document Processing',
      description: 'Automate document classification, extraction, and routing',
      benefits: ['95% efficiency gain', 'Error-free processing', 'Instant categorization'],
      icon: Target
    },
    {
      title: 'Financial Automation',
      description: 'Automate invoice processing, expense management, and reporting',
      benefits: ['70% cost reduction', 'Faster approvals', 'Audit compliance'],
      icon: Cpu
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Cost Reduction',
      description: 'Reduce operational costs by up to 70% through intelligent automation'
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Save hundreds of hours monthly with automated processes'
    },
    {
      icon: Target,
      title: 'Accuracy Improvement',
      description: 'Achieve 99%+ accuracy in automated tasks and decision making'
    },
    {
      icon: BarChart,
      title: 'Scalability',
      description: 'Scale operations instantly without proportional cost increases'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Assessment & Analysis',
      description: 'Analyze your current processes and identify automation opportunities'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a comprehensive automation strategy tailored to your needs'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Deploy AI automation solutions with minimal disruption to operations'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuously monitor and optimize automation performance'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Automation Services - Zion Tech Group"
        description="Transform your business with intelligent automation. Our AI-powered solutions streamline processes, reduce costs, and improve efficiency across all operations."
        keywords={['AI automation', 'process automation', 'workflow automation', 'intelligent automation', 'business process automation', 'AI workflow']}
        canonicalUrl="https://ziontechgroup.com/ai-automation"
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                  AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Automation</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Transform your business operations with intelligent automation that learns, adapts, and optimizes itself. 
                  Reduce costs, improve accuracy, and scale effortlessly.
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
                      <Bot className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                      <p className="text-white font-semibold">70%</p>
                      <p className="text-gray-400 text-sm">Cost Reduction</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                      <Clock className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <p className="text-white font-semibold">24/7</p>
                      <p className="text-gray-400 text-sm">Operations</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                      <Target className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <p className="text-white font-semibold">99%</p>
                      <p className="text-gray-400 text-sm">Accuracy</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                      <BarChart className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                      <p className="text-white font-semibold">10x</p>
                      <p className="text-gray-400 text-sm">Efficiency</p>
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
              <h2 className="text-3xl font-bold text-white mb-4">Powerful Automation Features</h2>
              <p className="text-gray-400">Everything you need to automate and optimize your business processes</p>
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

        {/* Use Cases */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Real-World Applications</h2>
              <p className="text-gray-400">See how AI automation transforms different industries and processes</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                      <p className="text-gray-300 mb-4">{useCase.description}</p>
                      <ul className="space-y-2">
                        {useCase.benefits.map((benefit, benefitIndex) => (
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

        {/* Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our AI Automation?</h2>
              <p className="text-gray-400">Experience the transformative power of intelligent automation</p>
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

        {/* Process */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Implementation Process</h2>
              <p className="text-gray-400">A proven methodology for successful AI automation deployment</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Automate Your Business?</h2>
            <p className="text-gray-300 mb-8">
              Start your AI automation journey today and transform your operations with intelligent, 
              self-optimizing processes that deliver measurable results.
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

export default AIAutomationPage;