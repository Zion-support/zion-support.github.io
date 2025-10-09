'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Phone, Mail, MapPin, Code, Download, Upload, Settings, Brain, Sparkles, Play, Pause, Volume2, FileText, Terminal } from 'lucide-react';

const AICodeGenerationPage: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'AI Code Generation',
      description: 'Generate high-quality code from natural language descriptions using advanced AI',
      benefits: ['Natural language input', 'Multiple languages', 'Code completion', 'Error detection']
    },
    {
      icon: FileText,
      title: 'Documentation Generation',
      description: 'Automatically generate comprehensive documentation and comments for your code',
      benefits: ['Auto documentation', 'Code comments', 'API docs', 'README generation']
    },
    {
      icon: Settings,
      title: 'Code Optimization',
      description: 'AI-powered code optimization for performance, security, and best practices',
      benefits: ['Performance tuning', 'Security fixes', 'Best practices', 'Code review']
    },
    {
      icon: Terminal,
      title: 'Bug Detection & Fixing',
      description: 'Automatically detect and fix bugs, vulnerabilities, and code issues',
      benefits: ['Bug detection', 'Auto fixes', 'Security scanning', 'Code quality']
    }
  ];

  const pricingPlans = [
    {
      name: 'Developer',
      price: '$99/month',
      description: 'Perfect for individual developers and small projects',
      features: [
        'Up to 10,000 lines/month',
        '5 programming languages',
        'Basic documentation',
        'Email support',
        'API access',
        'Git integration'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$299/month',
      description: 'Ideal for development teams and startups',
      features: [
        'Up to 100,000 lines/month',
        '20+ programming languages',
        'Advanced documentation',
        'Priority support',
        'Team collaboration',
        'Custom training',
        'Code review',
        'Security scanning'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999/month',
      description: 'For large organizations and development companies',
      features: [
        'Unlimited lines of code',
        'All programming languages',
        'Professional documentation',
        '24/7 dedicated support',
        'White-label solution',
        'Custom AI training',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Web Development',
      description: 'Generate React, Vue, Angular, and other web application code',
      icon: '🌐',
      examples: ['React components', 'API endpoints', 'Database schemas', 'Frontend layouts']
    },
    {
      title: 'Mobile Development',
      description: 'Create iOS, Android, and cross-platform mobile applications',
      icon: '📱',
      examples: ['iOS apps', 'Android apps', 'React Native', 'Flutter apps']
    },
    {
      title: 'Backend Development',
      description: 'Generate server-side code, APIs, and database operations',
      icon: '⚙️',
      examples: ['REST APIs', 'GraphQL', 'Database queries', 'Microservices']
    },
    {
      title: 'Data Science',
      description: 'Create machine learning models, data analysis, and visualization code',
      icon: '📊',
      examples: ['ML models', 'Data analysis', 'Visualizations', 'Jupyter notebooks']
    }
  ];

  const languages = [
    { name: 'Python', description: 'Data science, web development, automation' },
    { name: 'JavaScript', description: 'Frontend, backend, full-stack development' },
    { name: 'TypeScript', description: 'Type-safe JavaScript development' },
    { name: 'Java', description: 'Enterprise applications, Android development' },
    { name: 'C#', description: '.NET applications, game development' },
    { name: 'Go', description: 'Microservices, cloud applications' },
    { name: 'Rust', description: 'System programming, performance-critical apps' },
    { name: 'Swift', description: 'iOS and macOS development' }
  ];

  const technicalSpecs = [
    { spec: 'Languages Supported', value: '50+ languages' },
    { spec: 'Code Quality', value: 'Production-ready' },
    { spec: 'Generation Speed', value: 'Real-time' },
    { spec: 'Accuracy Rate', value: '95%+' },
    { spec: 'Security Scanning', value: 'Enterprise-grade' },
    { spec: 'API Response Time', value: '< 2 seconds' },
    { spec: 'Uptime SLA', value: '99.9%' },
    { spec: 'Code Storage', value: 'Unlimited' }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Time Saving',
      description: 'Generate code 10x faster than manual coding',
      value: '90% faster'
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Reduce development costs and time-to-market',
      value: '80% cheaper'
    },
    {
      icon: Star,
      title: 'High Quality',
      description: 'Production-ready code with best practices',
      value: '95% accuracy'
    },
    {
      icon: Zap,
      title: 'Always Learning',
      description: 'Continuously improves with latest technologies',
      value: 'Always updated'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Code Generation & Development - Zion Tech Group</title>
        <meta name="description" content="Generate high-quality code with AI. Create applications in 50+ languages with automatic documentation and bug fixing. Starting at $99/month." />
        <meta name="keywords" content="ai code generation, code ai, automated coding, code completion, programming ai, development tools" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Revolutionary Code AI Technology
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Code Generation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Generate high-quality code from natural language descriptions. Support for 50+ programming languages with automatic documentation and bug fixing.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Languages</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">10x</div>
              <div className="text-gray-300">Faster</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">Real-time</div>
              <div className="text-gray-300">Generation</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Advanced Code AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose AI Code Generation?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{benefit.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Supported Programming Languages
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {languages.map((language, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">{language.name}</h3>
                <p className="text-sm text-gray-300">{language.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Use Cases & Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="text-left space-y-1">
                  {useCase.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="text-sm text-gray-400">• {example}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Flexible Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Code AI Plan`}
                  className={`w-full py-3 px-6 rounded-lg font-medium text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-2">{spec.value}</div>
                <div className="text-gray-300">{spec.spec}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Coding with AI
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Transform your ideas into production-ready code with our advanced AI technology. Get started today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICodeGenerationPage;