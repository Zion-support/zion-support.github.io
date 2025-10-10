'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Zap, Users, Clock, CheckCircle, ArrowRight, Star, Shield, Globe, Smartphone, Brain, Database } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICodeAssistantProPage: React.FC = () => {
  const features = [
    'GPT-4 powered code generation and completion',
    'Support for 50+ programming languages',
    'Intelligent code review and optimization suggestions',
    'Automated bug detection and fixing',
    'Real-time pair programming with AI',
    'Code documentation generation',
    'Test case generation and validation',
    'Security vulnerability scanning',
    'Performance optimization recommendations',
    'Integration with popular IDEs and editors'
  ];

  const benefits = [
    'Increase coding productivity by 300%',
    'Reduce bugs and security vulnerabilities',
    'Learn best practices from AI suggestions',
    'Generate comprehensive test coverage',
    'Automate repetitive coding tasks',
    'Scale development across teams'
  ];

  const supportedLanguages = [
    'JavaScript/TypeScript', 'Python', 'Java', 'C++', 'C#', 'Go', 'Rust', 'PHP', 'Ruby', 'Swift',
    'Kotlin', 'Scala', 'R', 'MATLAB', 'Dart', 'Elixir', 'Haskell', 'Clojure', 'F#', 'OCaml'
  ];

  const pricingPlans = [
    {
      name: 'Developer',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual developers',
      features: [
        'Unlimited code generation',
        '20+ programming languages',
        'Basic code review',
        'IDE integration',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$99',
      period: '/month',
      description: 'Ideal for development teams',
      features: [
        'Everything in Developer',
        '50+ programming languages',
        'Advanced code review',
        'Team collaboration tools',
        'Priority support',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Everything in Team',
        'Custom AI models',
        'On-premise deployment',
        'Advanced security features',
        'Dedicated support',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Senior Developer',
      company: 'TechCorp',
      content: 'This AI assistant has transformed how we write code. It catches bugs before they happen and suggests optimizations I never would have thought of.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'Lead Engineer',
      company: 'StartupXYZ',
      content: 'The code generation is incredibly accurate and the documentation feature saves us hours every week. Our team productivity has increased dramatically.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'CTO',
      company: 'InnovateLabs',
      content: 'The security scanning and performance optimization features have helped us maintain high code quality across all our projects.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Code Assistant Pro - Intelligent Coding with AI | Zion Tech Group</title>
        <meta name="description" content="Boost your coding productivity with our AI-powered code assistant. Get intelligent code generation, review, bug detection, and optimization for 50+ programming languages." />
        <meta name="keywords" content="AI code assistant, code generation, programming AI, code review, bug detection, developer tools" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <section className="text-center mb-16">
              <div className="inline-flex items-center bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Development
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Code Assistant Pro
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Supercharge your coding with our intelligent AI assistant. Generate, review, and optimize code 
                across 50+ programming languages with advanced AI technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="#pricing"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                </a>
                <a
                  href="#demo"
                  className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Watch Demo
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                  <div className="text-gray-400">Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">100K+</div>
                  <div className="text-gray-400">Developers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">300%</div>
                  <div className="text-gray-400">Productivity Boost</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">4.8★</div>
                  <div className="text-gray-400">User Rating</div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Powerful Development Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Supported Languages */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Supported Programming Languages
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {supportedLanguages.map((language, index) => (
                  <div key={index} className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-lg p-4 text-center border border-purple-500/20">
                    <Code className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                    <span className="text-white text-sm font-medium">{language}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits Section */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Why Choose Our AI Code Assistant?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-lg p-6 border border-purple-500/20">
                    <div className="text-purple-400 text-2xl mb-4">⚡</div>
                    <h3 className="text-xl font-semibold text-white mb-3">Benefit {index + 1}</h3>
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Choose Your Plan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <div key={index} className={`bg-slate-800/50 rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-400 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                        <span className="text-gray-400 ml-1">{plan.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/contact"
                      className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white'
                          : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                What Developers Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-purple-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-lg p-12 border border-purple-500/20">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Code Smarter?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of developers who are already using AI to write better code faster.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Start Free Trial
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  📧 Email: kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown, DE 19709
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default AICodeAssistantProPage;