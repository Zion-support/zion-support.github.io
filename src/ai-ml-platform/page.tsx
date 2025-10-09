import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Cpu, Database, BarChart, Settings, Shield, Zap, CheckCircle, ArrowRight, Star, TrendingUp, Target, Code, Cloud, Users, Globe, Lock, Award } from 'lucide-react';

const AIMLPlatformPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Complete ML Pipeline',
      description: 'End-to-end machine learning platform from data ingestion to model deployment',
      benefits: ['Automated data preprocessing', 'Model training & validation', 'One-click deployment']
    },
    {
      icon: Cpu,
      title: 'Advanced AI Models',
      description: 'Pre-trained models and custom model development capabilities',
      benefits: ['100+ pre-trained models', 'Custom model training', 'AutoML capabilities']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Comprehensive data management and processing tools',
      benefits: ['Data versioning', 'Feature engineering', 'Data quality monitoring']
    },
    {
      icon: BarChart,
      title: 'Model Monitoring',
      description: 'Real-time model performance monitoring and optimization',
      benefits: ['Performance tracking', 'Drift detection', 'Auto-retraining']
    }
  ];

  const capabilities = [
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP models for text analysis, sentiment analysis, and language understanding',
      icon: Brain,
      useCases: ['Chatbots & Virtual Assistants', 'Document Analysis', 'Content Generation']
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis with state-of-the-art computer vision models',
      icon: Cpu,
      useCases: ['Object Detection', 'Image Classification', 'Video Analytics']
    },
    {
      title: 'Predictive Analytics',
      description: 'Build predictive models for forecasting and decision making',
      icon: BarChart,
      useCases: ['Sales Forecasting', 'Risk Assessment', 'Demand Planning']
    },
    {
      title: 'Recommendation Systems',
      description: 'Personalized recommendation engines for enhanced user experience',
      icon: Target,
      useCases: ['Product Recommendations', 'Content Curation', 'Personalized Marketing']
    }
  ];

  const pricing = [
    {
      name: 'Developer',
      price: '$299/month',
      description: 'Perfect for individual developers',
      features: [
        'Up to 5 models',
        '10GB storage',
        'Basic support',
        'Standard APIs'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$999/month',
      description: 'Ideal for development teams',
      features: [
        'Up to 25 models',
        '100GB storage',
        'Priority support',
        'Advanced APIs',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Unlimited models',
        'Unlimited storage',
        'Dedicated support',
        'Custom integrations',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
            AI ML Platform
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium neon-pulse">
            Complete Machine Learning Platform for Enterprise
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Build, train, and deploy machine learning models at scale with our comprehensive AI platform. 
            From data preparation to model deployment, we provide everything you need to succeed with AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Start Building AI
            </a>
            <a
              href="tel:+13024640950"
              className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <Code className="w-5 h-5" />
              +1 302 464 0950
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Platform Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center neon-text">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 text-center text-sm leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            AI Capabilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="quantum-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white neon-text">
                    {capability.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {capability.description}
                </p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Use Cases:</h4>
                  {capability.useCases.map((useCase, useCaseIndex) => (
                    <div key={useCaseIndex} className="flex items-center text-sm text-gray-300">
                      <ArrowRight className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {useCase}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Choose Your Plan
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 hover:scale-105 transition-all duration-300 ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 neon-text">{plan.name}</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'cyber-button'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Build with AI?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers and data scientists building the future with our AI ML platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Start Building Today
              </a>
              <a
                href="/demo"
                className="flex items-center gap-2 border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
              >
                <Settings className="w-5 h-5" />
                Request Demo
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIMLPlatformPage;