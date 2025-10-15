'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CodeBracketIcon, 
  CheckCircleIcon, 
  StarIcon,
  ArrowRightIcon,
  SparklesIcon,
  CpuChipIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const AICodeAssistantPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      icon: CodeBracketIcon,
      title: 'Intelligent Code Generation',
      description: 'Generate high-quality code in multiple programming languages with AI-powered suggestions and completions.',
      benefits: ['Faster development cycles', 'Reduced coding errors', 'Best practice adherence']
    },
    {
      icon: CpuChipIcon,
      title: 'Smart Code Analysis',
      description: 'Analyze your codebase for bugs, performance issues, and security vulnerabilities with advanced AI algorithms.',
      benefits: ['Proactive bug detection', 'Performance optimization', 'Security enhancement']
    },
    {
      icon: DocumentTextIcon,
      title: 'Auto Documentation',
      description: 'Automatically generate comprehensive documentation and comments for your code using natural language processing.',
      benefits: ['Time-saving documentation', 'Consistent code comments', 'Better team collaboration']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security Scanning',
      description: 'Identify security vulnerabilities and suggest fixes using AI-powered security analysis tools.',
      benefits: ['Enhanced security posture', 'Compliance assistance', 'Risk mitigation']
    },
    {
      icon: ClockIcon,
      title: 'Real-time Assistance',
      description: 'Get instant help and suggestions while coding with our real-time AI code assistant integration.',
      benefits: ['Immediate problem solving', 'Learning acceleration', 'Productivity boost']
    },
    {
      icon: UserGroupIcon,
      title: 'Team Collaboration',
      description: 'Share code snippets, collaborate on projects, and maintain coding standards across your team.',
      benefits: ['Improved team efficiency', 'Code consistency', 'Knowledge sharing']
    }
  ];

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 29,
      period: 'month',
      description: 'Perfect for individual developers',
      features: [
        'Basic code generation',
        '5 programming languages',
        '100 code suggestions/day',
        'Email support',
        'Basic documentation',
        'Git integration'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Professional',
      price: 79,
      period: 'month',
      description: 'Ideal for development teams',
      features: [
        'Advanced code generation',
        '15+ programming languages',
        'Unlimited code suggestions',
        'Priority support',
        'Auto documentation',
        'Security scanning',
        'Team collaboration',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 199,
      period: 'month',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Custom AI models',
        'On-premise deployment',
        'Dedicated support',
        'SLA guarantee',
        'White-label options',
        'Advanced analytics',
        'Custom training'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Web Development',
      description: 'Generate React, Vue, Angular components with AI assistance',
      icon: '🌐',
      examples: ['Component generation', 'API integration', 'State management', 'Testing code']
    },
    {
      title: 'Mobile Development',
      description: 'Create iOS and Android apps with intelligent code suggestions',
      icon: '📱',
      examples: ['Native app development', 'Cross-platform solutions', 'UI/UX implementation', 'Performance optimization']
    },
    {
      title: 'Backend Development',
      description: 'Build robust APIs and server-side applications with AI guidance',
      icon: '⚙️',
      examples: ['RESTful APIs', 'Database design', 'Authentication systems', 'Microservices architecture']
    },
    {
      title: 'Data Science',
      description: 'Develop machine learning models and data analysis scripts',
      icon: '📊',
      examples: ['ML model development', 'Data preprocessing', 'Statistical analysis', 'Visualization code']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Senior Developer',
      company: 'TechCorp Inc.',
      content: 'Zion AI Code Assistant has revolutionized our development process. We\'ve reduced coding time by 40% and improved code quality significantly.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupXYZ',
      content: 'The AI-powered code suggestions are incredibly accurate and help our team maintain consistent coding standards across all projects.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Full Stack Developer',
      company: 'DevStudio',
      content: 'I love how the assistant learns from our codebase and provides contextually relevant suggestions. It\'s like having a senior developer always available.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Code Assistant - Zion Tech Group"
        description="Revolutionary AI-powered code assistant that helps developers write better code faster. Features intelligent code generation, analysis, and documentation."
        keywords="AI code assistant, code generation, programming AI, developer tools, code analysis, auto documentation, software development"
        canonicalUrl="https://ziontechgroup.com/ai-code-assistant"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
                <SparklesIcon className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-300 text-sm font-medium">AI-Powered Development</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
                AI Code Assistant
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionize your development workflow with our intelligent AI code assistant. 
                Generate, analyze, and optimize code with cutting-edge artificial intelligence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-gray-300">
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to accelerate your development process with AI-powered assistance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 border border-slate-700">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Perfect for Every Development Need
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Whether you're building web apps, mobile applications, or data science projects
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="text-center">
                  <div className="text-6xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {useCase.examples.map((example, idx) => (
                      <li key={idx}>• {example}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your development needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => (
                <div key={plan.id} className={`relative bg-slate-800 rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-white mb-2">
                      ${plan.price}
                      <span className="text-lg text-gray-400">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    {plan.id === 'enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Loved by Developers Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users have to say about their experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Development Workflow?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of developers who are already coding faster and better with AI assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
            <div className="mt-8 text-blue-100">
              <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
              <p>✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICodeAssistantPage;