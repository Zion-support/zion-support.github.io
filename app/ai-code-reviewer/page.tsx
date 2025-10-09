'use client';
import React from 'react';
import { Code, Shield, Zap, CheckCircle, ArrowRight, Star, Clock, Target, Brain, BarChart, Bug, GitBranch } from 'lucide-react';
import Link from 'next/link';

const AICodeReviewer: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Code Analysis',
      description: 'Intelligent code analysis with automated bug detection and security scanning',
      benefits: ['Automated bug detection', 'Security vulnerability scanning', 'Code quality scoring']
    },
    {
      icon: Shield,
      title: 'Security Review',
      description: 'Comprehensive security analysis with OWASP compliance checking',
      benefits: ['OWASP compliance', 'Vulnerability detection', 'Security best practices']
    },
    {
      icon: BarChart,
      title: 'Performance Analysis',
      description: 'Code performance analysis with optimization recommendations',
      benefits: ['Performance metrics', 'Bottleneck identification', 'Optimization suggestions']
    },
    {
      icon: GitBranch,
      title: 'Git Integration',
      description: 'Seamless integration with Git workflows and pull request automation',
      benefits: ['PR automation', 'Git hook integration', 'Branch analysis']
    },
    {
      icon: Zap,
      title: 'Automated Reviews',
      description: 'AI-powered automated code reviews with detailed feedback',
      benefits: ['Instant feedback', 'Detailed explanations', 'Learning recommendations']
    },
    {
      icon: Bug,
      title: 'Bug Prevention',
      description: 'Proactive bug detection and prevention with machine learning',
      benefits: ['Pattern recognition', 'Bug prediction', 'Prevention strategies']
    }
  ];

  const pricingPlans = [
    {
      name: 'Developer',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual developers',
      features: [
        'Up to 10 repositories',
        'Basic AI analysis',
        'Email support',
        'Standard reports',
        'Git integration'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$99',
      period: '/month',
      description: 'Ideal for development teams',
      features: [
        'Up to 50 repositories',
        'Advanced AI features',
        'Priority support',
        'Team collaboration',
        'Custom rules',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited repositories',
        'Custom AI models',
        'Dedicated support',
        'On-premise deployment',
        'White-label options',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Senior Developer',
      company: 'Tech Startup',
      content: 'AI Code Reviewer has caught bugs that would have taken hours to find manually. Our code quality has improved dramatically.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'Software Corp',
      content: 'The security analysis is incredibly thorough. We can now catch vulnerabilities before they become problems.',
      rating: 5
    },
    {
      name: 'Mike Rodriguez',
      role: 'Lead Developer',
      company: 'E-commerce Platform',
      content: 'The automated reviews have saved our team countless hours. The AI suggestions are spot-on and very helpful.',
      rating: 5
    }
  ];

  const languages = [
    { name: 'JavaScript', description: 'Full support for modern JS frameworks' },
    { name: 'Python', description: 'Comprehensive Python analysis' },
    { name: 'Java', description: 'Enterprise Java code review' },
    { name: 'C#', description: '.NET and C# optimization' },
    { name: 'Go', description: 'Go language best practices' },
    { name: 'TypeScript', description: 'TypeScript type checking' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium">
                <Code className="w-4 h-4 mr-2" />
                AI-Powered Code Review
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                AI Code Reviewer
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Pro
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Revolutionize your code review process with AI-powered analysis, 
                automated bug detection, and intelligent security scanning. 
                Improve code quality and reduce technical debt.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Watch Demo
                </Link>
              </div>
              
              <div className="flex items-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Free 14-day trial
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  No setup fees
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Cancel anytime
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">Code Analysis</h3>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-cyan-400">94%</div>
                      <div className="text-sm text-gray-400">Code Quality</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-400">0</div>
                      <div className="text-sm text-gray-400">Critical Issues</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">Security Score</span>
                      <span className="text-green-400 font-medium">Excellent (98)</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-300">
                    <div className="flex justify-between mb-1">
                      <span>Issues Found</span>
                      <span className="text-yellow-400">3</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Suggestions</span>
                      <span className="text-cyan-400">12</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Code Review Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage AI technology to improve code quality, catch bugs early, 
              and maintain high security standards across your development team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700/50 hover:border-cyan-500/30">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
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

      {/* Languages Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Support for Popular Languages
            </h2>
            <p className="text-xl text-gray-300">
              AI Code Reviewer works with the most popular programming languages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-2">{language.name}</h3>
                <p className="text-gray-400 text-sm">{language.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300">
              Start with a free trial and scale as your team grows
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-500 bg-gradient-to-br from-slate-800/70 to-cyan-900/20' 
                  : 'border-slate-700 hover:border-cyan-500/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
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
                
                <Link 
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Developers Worldwide
            </h2>
            <p className="text-xl text-gray-300">
              See what developers say about AI Code Reviewer Pro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Improve Your Code Quality?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of developers using AI Code Reviewer Pro to write better, more secure code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>Contact us: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 (302) 464-0950</a> | <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICodeReviewer;