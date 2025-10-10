import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Target, Brain, Users, ArrowRight, Shield, Zap, BarChart3 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AILeadGenerationPage: React.FC = () => {
  const features = [
    {
      title: 'Lead Scoring',
      description: 'AI-powered lead scoring and qualification for better conversion rates.',
      icon: Target,
      benefits: [
        'Lead qualification',
        'Scoring algorithms',
        'Conversion prediction',
        'Priority ranking'
      ]
    },
    {
      title: 'Lead Nurturing',
      description: 'Intelligent lead nurturing with personalized content and automated follow-ups.',
      icon: Brain,
      benefits: [
        'Personalized content',
        'Automated follow-ups',
        'Engagement tracking',
        'Nurture campaigns'
      ]
    },
    {
      title: 'Lead Analytics',
      description: 'Advanced analytics for lead generation performance and optimization.',
      icon: BarChart3,
      benefits: [
        'Performance tracking',
        'Conversion analysis',
        'ROI measurement',
        'Optimization insights'
      ]
    },
    {
      title: 'Lead Management',
      description: 'Comprehensive lead management with CRM integration and workflow automation.',
      icon: Users,
      benefits: [
        'CRM integration',
        'Workflow automation',
        'Lead tracking',
        'Pipeline management'
      ]
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  const useCases = [
    {
      title: 'B2B Sales',
      description: 'Comprehensive lead generation solutions for B2B sales teams.',
      icon: Target
    },
    {
      title: 'E-commerce',
      description: 'AI-powered lead generation for e-commerce and online businesses.',
      icon: Users
    },
    {
      title: 'SaaS Companies',
      description: 'Advanced lead generation tools for SaaS companies and software providers.',
      icon: Brain
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Lead Generation - Zion Tech Group</title>
        <meta name="description" content="AI-powered lead generation solutions that identify, qualify, and nurture leads for better conversion rates. Advanced AI technology for better sales performance." />
        <meta name="keywords" content="AI lead generation, lead scoring, lead nurturing, sales automation, lead analytics, CRM integration" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(249,115,22,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Lead
              <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Generation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Generate more qualified leads with AI-powered solutions. Lead scoring, nurturing, 
              and analytics for better conversion rates and sales performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-orange-400 text-orange-300 px-8 py-4 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
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
                Lead Generation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered lead generation provides comprehensive tools for sales teams.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-orange-500 transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-orange-900/20 to-red-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Lead Generation Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Perfect for sales teams and businesses that need to generate more qualified leads.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-orange-500 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4 mx-auto">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Lead Generation?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-powered lead generation that transforms sales performance.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-orange-400 flex-shrink-0" />
                  <p className="text-white font-medium">{benefit}</p>
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
                Ready to Generate More Leads?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading sales teams who trust our AI Lead Generation solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Generating
                </button>
                <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Contact Sales
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

export default AILeadGenerationPage;