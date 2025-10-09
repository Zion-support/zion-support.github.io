import React from 'react';
import { Phone, Mail, MapPin, CheckCircle, Star, Zap, Code, Users, Clock, Target, TrendingUp, ArrowRight, Shield, Brain, Settings } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICodeGenerationPage: React.FC = () => {
  const features = [
    'AI-powered code generation and completion',
    'Automated bug detection and fixing',
    'Code quality analysis and optimization',
    'Intelligent code review and suggestions',
    'Multi-language support (Python, JavaScript, Java, C++, etc.)',
    'Real-time code assistance and autocomplete',
    'Security vulnerability detection',
    'Performance optimization recommendations',
    'Code documentation generation',
    'Git integration and version control'
  ];

  const benefits = [
    '70% reduction in development time',
    '90% fewer bugs in production',
    '50% improvement in code quality',
    '80% faster code reviews',
    '60% increase in developer productivity',
    '95% accuracy in bug detection'
  ];

  const supportedLanguages = [
    { name: 'Python', icon: '🐍', popularity: '95%' },
    { name: 'JavaScript', icon: '🟨', popularity: '90%' },
    { name: 'Java', icon: '☕', popularity: '85%' },
    { name: 'C++', icon: '⚡', popularity: '80%' },
    { name: 'TypeScript', icon: '🔷', popularity: '88%' },
    { name: 'Go', icon: '🐹', popularity: '75%' },
    { name: 'Rust', icon: '🦀', popularity: '70%' },
    { name: 'C#', icon: '🔷', popularity: '82%' }
  ];

  const pricing = [
    {
      plan: 'Developer',
      price: '$99',
      period: '/month',
      features: ['Up to 5 projects', 'Basic AI assistance', 'Email support', 'Standard languages'],
      popular: false
    },
    {
      plan: 'Team',
      price: '$299',
      period: '/month',
      features: ['Up to 20 projects', 'Advanced AI features', 'Priority support', 'All languages', 'Team collaboration'],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$799',
      period: '/month',
      features: ['Unlimited projects', 'Custom AI training', 'Dedicated support', 'On-premise deployment', 'SLA guarantee'],
      popular: false
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Code Generation Assistant
            </h1>
            <p className="text-xl text-cyan-400 mb-8">
              Advanced automated code analysis with AI-powered bug detection
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your development workflow with our intelligent AI system that generates, 
              reviews, and optimizes code across multiple programming languages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              AI-Powered Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Supported Languages Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Supported Programming Languages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportedLanguages.map((language, index) => (
                <div key={index} className="quantum-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">{language.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{language.name}</h3>
                  <p className="text-cyan-400 font-bold">{language.popularity} accuracy</p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Proven Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <p className="text-lg text-white font-semibold">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Choose Your Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
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
                  <a
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
              Ready to Revolutionize Your Coding?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers already using AI to write better code faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold"
              >
                Get Started
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AICodeGenerationPage;