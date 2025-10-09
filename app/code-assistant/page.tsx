'use client';
import React from 'react';
import { Code, Zap, Target, BarChart, CheckCircle, Star, ArrowRight, Phone, Mail, MapPin, Brain, Users, Shield, Clock, Terminal } from 'lucide-react';
import Link from 'next/link';

const CodeAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'AI Code Generation',
      description: 'Generate high-quality code in any programming language with AI that understands context and best practices.',
      benefit: 'Write code 10x faster with AI assistance'
    },
    {
      icon: Brain,
      title: 'Smart Code Review',
      description: 'AI-powered code review that identifies bugs, security vulnerabilities, and performance issues automatically.',
      benefit: 'Catch 90% of bugs before deployment'
    },
    {
      icon: Zap,
      title: 'Auto-Complete',
      description: 'Intelligent code completion that suggests entire functions, classes, and patterns based on your codebase.',
      benefit: 'Reduce typing by 70%'
    },
    {
      icon: Target,
      title: 'Code Optimization',
      description: 'AI analyzes your code and suggests optimizations for better performance, readability, and maintainability.',
      benefit: 'Improve code quality by 60%'
    },
    {
      icon: BarChart,
      title: 'Performance Analysis',
      description: 'Real-time analysis of code performance with suggestions for optimization and bottleneck identification.',
      benefit: 'Identify performance issues instantly'
    },
    {
      icon: Terminal,
      title: 'Debug Assistant',
      description: 'AI-powered debugging that helps identify and fix errors with step-by-step explanations and solutions.',
      benefit: 'Debug 5x faster with AI guidance'
    }
  ];

  const pricingPlans = [
    {
      name: 'Developer',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual developers',
      features: [
        'Unlimited code generation',
        'Basic code review',
        'Auto-complete',
        '5 programming languages',
        'Email support',
        '1 project'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$79',
      period: '/month',
      description: 'Ideal for development teams',
      features: [
        'Advanced AI features',
        'Code optimization',
        'Performance analysis',
        '20+ programming languages',
        'Priority support',
        '5 projects',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Custom AI training',
        'Advanced debugging',
        'White-label options',
        'All programming languages',
        'Dedicated support',
        'Unlimited projects',
        'Custom integrations',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const languages = [
    { name: 'JavaScript', icon: '🟨', description: 'Web development' },
    { name: 'Python', icon: '🐍', description: 'Data science & AI' },
    { name: 'Java', icon: '☕', description: 'Enterprise applications' },
    { name: 'C++', icon: '⚡', description: 'System programming' },
    { name: 'Go', icon: '🐹', description: 'Cloud-native apps' },
    { name: 'Rust', icon: '🦀', description: 'Memory-safe systems' },
    { name: 'TypeScript', icon: '🔷', description: 'Type-safe JavaScript' },
    { name: 'Swift', icon: '🍎', description: 'iOS development' }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      company: 'Software Engineer',
      role: 'Senior Developer',
      content: 'Code Assistant has revolutionized my development workflow. I can prototype features in minutes instead of hours.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      company: 'Tech Startup',
      role: 'CTO',
      content: 'Our team productivity increased 300% with AI code generation. We can now focus on architecture instead of boilerplate.',
      rating: 5
    },
    {
      name: 'David Park',
      company: 'Software Agency',
      role: 'Lead Developer',
      content: 'The code review feature catches issues we would have missed. It\'s like having a senior developer reviewing every commit.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6">
            <Code className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Code Assistant
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Intelligent Development Companion
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Accelerate your development with AI-powered code generation, review, and optimization. 
            Write better code faster with intelligent assistance that understands your project and coding patterns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Start Free Trial
            </Link>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">10x</div>
            <div className="text-white font-semibold mb-2">Faster Coding</div>
            <div className="text-gray-300 text-sm">With AI assistance</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">90%</div>
            <div className="text-white font-semibold mb-2">Bug Detection</div>
            <div className="text-gray-300 text-sm">Before deployment</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">70%</div>
            <div className="text-white font-semibold mb-2">Less Typing</div>
            <div className="text-gray-300 text-sm">With auto-complete</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">60%</div>
            <div className="text-white font-semibold mb-2">Better Quality</div>
            <div className="text-gray-300 text-sm">Code optimization</div>
          </div>
        </div>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Powerful Development Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <div className="text-cyan-400 font-semibold text-sm">{feature.benefit}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Languages Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Support for All Major Languages
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {languages.map((language, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center hover:border-cyan-400/40 transition-all duration-300">
                <div className="text-4xl mb-3">{language.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{language.name}</h3>
                <p className="text-gray-300 text-sm">{language.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-cyan-400 scale-105' 
                  : 'border-slate-700 hover:border-cyan-500/50'
              }`}>
                {plan.popular && (
                  <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:from-cyan-500 hover:to-purple-600'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            What Developers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-12 border border-cyan-500/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Code with AI?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of developers using AI Code Assistant to write better code faster, 
            catch bugs early, and focus on what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Start Free Trial
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
};

export default CodeAssistantPage;