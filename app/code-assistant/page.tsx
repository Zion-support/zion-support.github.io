'use client';
import React from 'react';
import { Code, Zap, CheckCircle, Star, ArrowRight, Users, Clock, DollarSign, Shield, Sparkles, Target, BarChart, Terminal, GitBranch } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const CodeAssistant: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'AI Code Generation',
      description: 'Generate code snippets, functions, and entire modules with AI assistance',
      benefits: ['Multi-language support', 'Code completion', 'Bug detection']
    },
    {
      icon: Terminal,
      title: 'Smart Debugging',
      description: 'AI-powered debugging and error detection with intelligent suggestions',
      benefits: ['Error analysis', 'Fix suggestions', 'Performance optimization']
    },
    {
      icon: GitBranch,
      title: 'Code Review',
      description: 'Automated code review with AI-powered quality analysis',
      benefits: ['Quality scoring', 'Best practices', 'Security analysis']
    },
    {
      icon: Target,
      title: 'Documentation',
      description: 'Auto-generate documentation and comments for your code',
      benefits: ['API documentation', 'Code comments', 'README generation']
    }
  ];

  const pricingPlans = [
    {
      name: 'Developer',
      price: 29,
      period: 'month',
      description: 'Perfect for individual developers',
      features: [
        'Basic AI features',
        '5 programming languages',
        'Standard support',
        'Git integration',
        'Code snippets'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: 79,
      period: 'month',
      description: 'Ideal for development teams',
      features: [
        'Advanced AI features',
        '20+ programming languages',
        'Priority support',
        'Team collaboration',
        'Code review tools',
        'Custom models'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 199,
      period: 'month',
      description: 'For large organizations',
      features: [
        'Custom AI models',
        'All programming languages',
        'Dedicated support',
        'API access',
        'White-label solution',
        'Advanced security'
      ],
      popular: false
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Code Assistant - AI-Powered Development Tool | Zion Tech Group"
        description="Boost productivity with AI-powered code generation, debugging, and review. Multi-language support, smart debugging, and automated documentation. Starting at $29/month."
        keywords={['code assistant', 'AI coding', 'code generation', 'debugging tool', 'code review', 'AI development']}
        canonicalUrl="https://ziontechgroup.com/code-assistant"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Development</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text">
                Code Assistant
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Supercharge your development with AI-powered coding assistance. 
                Generate code, debug issues, and improve code quality with artificial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">3x</div>
                <div className="text-gray-300">Faster Development</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">50%</div>
                <div className="text-gray-300">Fewer Bugs</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">20+</div>
                <div className="text-gray-300">Languages Supported</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300">AI Assistant Available</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful Development Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to code faster and better with AI assistance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Code Assistant Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your development needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600' 
                      : 'border border-gray-600 text-white hover:bg-gray-800'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="cyber-card p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Code Like a Pro?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and experience AI-powered development
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <a 
                  href="tel:+13024640950" 
                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CodeAssistant;