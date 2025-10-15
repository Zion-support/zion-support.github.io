'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CodeBracketIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  SparklesIcon,
  CpuChipIcon,
  BoltIcon,
  ShieldCheckIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const AICodeAssistantPage: React.FC = () => {
  const features = [
    'AI-powered code generation',
    'Real-time code suggestions',
    'Multi-language support (50+ languages)',
    'Intelligent error detection',
    'Code optimization recommendations',
    'Automated testing generation',
    'Documentation auto-generation',
    'Code review assistance',
    'Security vulnerability scanning',
    'Performance optimization tips',
    'Git integration',
    'Team collaboration tools'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual developers',
      features: [
        '1000 AI code suggestions/month',
        '5 programming languages',
        'Basic error detection',
        'Email support',
        'Git integration'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for small teams',
      features: [
        '5000 AI code suggestions/month',
        '20 programming languages',
        'Advanced error detection',
        'Code optimization',
        'Priority support',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large development teams',
      features: [
        'Unlimited AI suggestions',
        'All programming languages',
        'Advanced security scanning',
        'Custom AI models',
        '24/7 phone support',
        'Advanced analytics',
        'White-label options',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Senior Developer',
      company: 'TechCorp',
      content: 'Zion AI Code Assistant has revolutionized our development process. We\'ve seen a 40% reduction in bugs and 60% faster code delivery.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      company: 'StartupXYZ',
      content: 'The AI suggestions are incredibly accurate. It\'s like having a senior developer pair programming with every team member.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'Lead Engineer',
      company: 'InnovateLab',
      content: 'The security scanning feature caught vulnerabilities we would have missed. It\'s become an essential part of our workflow.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Code Assistant - Zion Tech Group"
        description="Revolutionary AI-powered code assistant with real-time suggestions, error detection, and optimization. Support for 50+ programming languages. Start your free trial today."
        keywords="AI code assistant, code generation, programming, software development, code optimization, error detection, developer tools"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          {/* Floating Cyber Elements */}
          <div className="floating-cyber-elements">
            {[...Array(25)].map((_, i) => (
              <div key={i} className="cyber-element" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 12}s`,
                animationDuration: `${12 + Math.random() * 8}s`
              }}></div>
            ))}
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold holographic leading-tight neon-text-glow">
                  AI Code Assistant
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Revolutionary AI-powered code assistant that understands your codebase, suggests improvements, and helps you write better code faster. Support for 50+ programming languages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <button className="relative group cyber-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="border-2 border-blue-400 text-blue-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-blue-400/25 holographic-border">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Powerful <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">AI Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Our AI Code Assistant uses advanced machine learning to understand your code context and provide intelligent suggestions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <div key={index} 
                  className="group cyber-card-advanced p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                      <CheckCircleIcon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-gray-300 font-medium text-sm sm:text-base group-hover:text-white transition-colors">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30 relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose the perfect plan for your development needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} 
                  className={`group relative ${plan.popular ? 'cyber-card-advanced scale-105' : 'cyber-card-advanced'} p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold neon-text-glow">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400 neon-text-glow">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'cyber-button bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700' 
                      : 'border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                What Developers <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Say</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Join thousands of developers who are already using our AI Code Assistant to write better code.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} 
                  className="cyber-card-advanced p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <SparklesIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="border-t border-gray-700 pt-4">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-blue-900/40 via-slate-900 to-cyan-900/40 overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Transform Your Coding Experience?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Start your free trial today and experience the power of AI-assisted coding. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="relative group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-blue-500/25">
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICodeAssistantPage;