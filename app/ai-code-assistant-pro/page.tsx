import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Code, Search, GitBranch, Database, Shield } from 'lucide-react';

export default function AICodeAssistantProPage() {
  const features = [
    {
      icon: <Bot className="w-5 h-5 ml-2" />,
      title: 'AI Code Generation',
      description: 'Generate high-quality code from natural language descriptions with 95% accuracy'
    },
    {
      icon: <Code className="w-5 h-5 ml-2" />,
      title: 'Smart Code Completion',
      description: 'Intelligent autocomplete that understands context and suggests optimal solutions'
    },
    {
      icon: <Search className="w-5 h-5 ml-2" />,
      title: 'Code Analysis & Debugging',
      description: 'Automatically detect bugs, security vulnerabilities, and performance issues'
    },
    {
      icon: <GitBranch className="w-5 h-5 ml-2" />,
      title: 'Version Control Integration',
      description: 'Seamless integration with Git, GitHub, GitLab, and other version control systems'
    },
    {
      icon: <Database className="w-5 h-5 ml-2" />,
      title: 'Multi-Language Support',
      description: 'Support for 50+ programming languages including Python, JavaScript, Java, C++, and more'
    },
    {
      icon: <Shield className="w-5 h-5 ml-2" />,
      title: 'Security & Compliance',
      description: 'Built-in security scanning and compliance checking for enterprise-grade code quality'
    }
  ];

  const pricingPlans = [
    {
      name: 'Developer',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual developers',
      features: [
        'Up to 1,000 code generations/month',
        'Basic AI features',
        '5 programming languages',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$99',
      period: '/month',
      description: 'Ideal for development teams',
      features: [
        'Up to 10,000 code generations/month',
        'Advanced AI features',
        'All programming languages',
        'Priority support',
        'Team collaboration tools',
        'Advanced analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited code generations',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Code Assistant Pro - Zion Tech Group</title>
        <meta name="description" content="Professional AI code assistant with advanced features for developers and teams. Generate, analyze, and optimize code with AI." />
        <meta name="keywords" content="AI code assistant, code generation, programming, developer tools, AI coding" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Code Assistant
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Pro
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionize your coding experience with our advanced AI-powered code assistant. 
            Generate, analyze, and optimize code with unprecedented accuracy and speed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Coding with AI
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to accelerate your development workflow with AI-powered tools.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options for developers, teams, and enterprises.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-cyan-400' : 'border-slate-700'} relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Coding?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join thousands of developers already using our AI code assistant to write better code faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}