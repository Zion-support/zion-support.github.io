import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Code, Zap, Star, Users, Clock, Shield, Brain, Terminal, GitBranch, Bug, FileText, Cpu, Database } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AICodeAssistantPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: 'AI Code Generation',
      description: 'Generate code from natural language descriptions and comments'
    },
    {
      icon: <Bug className="w-6 h-6 text-green-500" />,
      title: 'Bug Detection',
      description: 'Automatically identify and suggest fixes for code issues'
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-500" />,
      title: 'Performance Optimization',
      description: 'Analyze and optimize code for better performance'
    },
    {
      icon: <FileText className="w-6 h-6 text-orange-500" />,
      title: 'Documentation Generation',
      description: 'Auto-generate comprehensive code documentation'
    },
    {
      icon: <GitBranch className="w-6 h-6 text-pink-500" />,
      title: 'Code Review',
      description: 'Intelligent code review with best practices suggestions'
    },
    {
      icon: <Terminal className="w-6 h-6 text-red-500" />,
      title: 'Multi-Language Support',
      description: 'Support for 20+ programming languages and frameworks'
    }
  ];

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for individual developers and small projects',
      features: [
        '1,000 code generations/month',
        'Basic bug detection',
        '5 programming languages',
        'Email support',
        '1 user account',
        'Standard performance analysis'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$199',
      period: '/month',
      description: 'Ideal for development teams and growing projects',
      features: [
        '10,000 code generations/month',
        'Advanced bug detection',
        '20+ programming languages',
        'Priority support',
        '5 user accounts',
        'Advanced performance optimization',
        'Code review assistance',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large development teams and enterprise projects',
      features: [
        'Unlimited code generations',
        'Custom AI models',
        'All programming languages',
        'Dedicated account manager',
        'Unlimited users',
        'Custom performance metrics',
        'White-label solution',
        '24/7 phone support',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const languages = [
    { name: 'JavaScript', logo: '🟨' },
    { name: 'Python', logo: '🐍' },
    { name: 'Java', logo: '☕' },
    { name: 'C++', logo: '⚡' },
    { name: 'C#', logo: '🔷' },
    { name: 'Go', logo: '🐹' },
    { name: 'Rust', logo: '🦀' },
    { name: 'TypeScript', logo: '🔷' },
    { name: 'PHP', logo: '🐘' },
    { name: 'Ruby', logo: '💎' },
    { name: 'Swift', logo: '🍎' },
    { name: 'Kotlin', logo: '🟣' }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Senior Developer',
      company: 'TechCorp Inc.',
      content: 'The AI code generation has increased my productivity by 300%. I can focus on architecture while AI handles the boilerplate.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead Engineer',
      company: 'StartupXYZ',
      content: 'The bug detection feature caught issues I would have missed. It\'s like having a senior developer reviewing every line of code.',
      rating: 5
    },
    {
      name: 'Emily Johnson',
      role: 'CTO',
      company: 'Innovation Labs',
      content: 'Our code quality improved dramatically since implementing AI Code Assistant. Fewer bugs, better performance, happier team.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Code Assistant - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered code generation, bug detection, and performance optimization. Support for 20+ programming languages. Boost developer productivity." />
        <meta name="keywords" content="AI code generation, code assistant, bug detection, performance optimization, developer tools, programming" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Code className="w-4 h-4 mr-2" />
              AI-Powered Development
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                AI Code Assistant
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Supercharge your development with AI-powered code generation, bug detection, and performance optimization. 
              Support for 20+ programming languages and frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Development Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to write better code faster
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Supported Languages
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Work with your favorite programming languages and frameworks
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {languages.map((language, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center group">
                <div className="text-3xl mb-2">{language.logo}</div>
                <div className="text-sm text-gray-300 group-hover:text-white transition-colors">{language.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options to match your development needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div key={plan.id} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 relative ${
                plan.popular 
                  ? 'border-orange-500/50 bg-gradient-to-b from-orange-500/10 to-transparent' 
                  : 'border-white/20 hover:border-white/40'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}>
                  {plan.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Developers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of developers building better code with AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Supercharge Your Development?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start writing better code faster with AI assistance. Free trial available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICodeAssistantPage;