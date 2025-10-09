'use client';
import React from 'react';
import { Smartphone, Zap, Shield, ArrowRight, CheckCircle, Star, Users, TrendingUp, Target, Brain, Cpu, Code } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIMobileBuilderPage: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'AI-Powered Development',
      description: 'Build mobile apps faster with AI-assisted development tools',
      benefits: ['Code generation', 'UI/UX suggestions', 'Bug detection', 'Performance optimization']
    },
    {
      icon: Brain,
      title: 'Intelligent Design',
      description: 'AI-driven design recommendations and user experience optimization',
      benefits: ['Design suggestions', 'User flow optimization', 'Accessibility features', 'Responsive design']
    },
    {
      icon: Code,
      title: 'No-Code/Low-Code',
      description: 'Build apps without extensive coding knowledge using visual builders',
      benefits: ['Drag-and-drop interface', 'Pre-built components', 'Template library', 'Visual logic builder']
    },
    {
      icon: Target,
      title: 'Cross-Platform',
      description: 'Build once, deploy everywhere with cross-platform compatibility',
      benefits: ['iOS & Android', 'Web deployment', 'Consistent UI', 'Single codebase']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Built-in security features and compliance tools for mobile apps',
      benefits: ['Data encryption', 'Secure authentication', 'Privacy compliance', 'Security testing']
    },
    {
      icon: Zap,
      title: 'Real-time Testing',
      description: 'Test and debug your apps in real-time with AI-powered testing',
      benefits: ['Automated testing', 'Performance monitoring', 'Bug detection', 'User testing']
    }
  ];

  const appTypes = [
    {
      title: 'E-commerce Apps',
      description: 'Build online stores and shopping apps with AI-powered features',
      icon: Target
    },
    {
      title: 'Business Apps',
      description: 'Create productivity and business management applications',
      icon: Users
    },
    {
      title: 'Social Apps',
      description: 'Develop social networking and community platforms',
      icon: Brain
    },
    {
      title: 'Gaming Apps',
      description: 'Build engaging games and interactive experiences',
      icon: Zap
    }
  ];

  const industries = [
    'E-commerce & Retail',
    'Healthcare & Medical',
    'Education & Training',
    'Finance & Banking',
    'Real Estate',
    'Food & Beverage',
    'Travel & Hospitality',
    'Entertainment & Media'
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small projects and prototypes',
      features: [
        'Up to 3 apps',
        'Basic AI features',
        'Standard templates',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing businesses with advanced app needs',
      features: [
        'Up to 10 apps',
        'Advanced AI features',
        'Custom templates',
        'Priority support',
        'Advanced analytics',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large-scale app development',
      features: [
        'Unlimited apps',
        'Custom AI models',
        'White-label options',
        '24/7 dedicated support',
        'SLA guarantees',
        'Custom development'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Smartphone className="w-8 h-8 text-cyan-400" />
                  <span className="text-cyan-400 font-semibold">AI Mobile Builder</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  AI-Powered Mobile
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    {' '}App Builder
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Build stunning mobile apps faster than ever with our AI-powered development platform. 
                  No coding required - just drag, drop, and deploy your app to iOS and Android.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="cyber-button inline-flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Building
                </button>
                <button className="cyber-button-outline inline-flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  View Demo
                </button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Free 14-day trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>No coding required</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-600 rounded w-1/2"></div>
                    <div className="h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded w-2/3"></div>
                    <div className="h-4 bg-gray-600 rounded w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Mobile App Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive mobile app development capabilities powered by artificial intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card group">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              App Types You Can Build
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create any type of mobile app with our versatile AI-powered platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appTypes.map((appType, index) => (
              <div key={index} className="cyber-card group text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <appType.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{appType.title}</h3>
                <p className="text-gray-300">{appType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI mobile builder is trusted by leading companies across various industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="cyber-card text-center group">
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your mobile app development needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`cyber-card relative ${tier.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                    : 'cyber-button-outline'
                }`}>
                  {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers and businesses already using our AI mobile builder to create amazing apps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Building
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AIMobileBuilderPage;