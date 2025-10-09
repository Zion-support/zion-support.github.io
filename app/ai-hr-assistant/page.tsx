'use client';
import React from 'react';
import { Users, TrendingUp, BarChart, CheckCircle, ArrowRight, Star, Award, Clock, Brain, Target, Search, Zap, Globe, Shield, Smartphone, Laptop, Monitor, FileText, Calendar, Settings, UserCheck, Briefcase, DollarSign, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIHRAssistantPage: React.FC = () => {
  const features = [
    'AI-powered resume screening',
    'Automated interview scheduling',
    'Candidate matching algorithms',
    'Employee performance analytics',
    'Bias detection and reduction',
    'Onboarding automation',
    'Skills gap analysis',
    'Retention prediction models',
    'Compliance monitoring',
    'Multi-language support'
  ];

  const benefits = [
    '50% faster hiring process',
    '40% better candidate matching',
    '60% reduction in bias',
    '30% improvement in retention',
    '25% cost savings in recruitment',
    'Automated compliance reporting',
    'Real-time performance insights',
    'Streamlined onboarding'
  ];

  const useCases = [
    {
      title: 'Recruitment',
      description: 'Streamline the entire hiring process from job posting to onboarding',
      icon: Users,
      examples: ['Resume screening', 'Interview scheduling', 'Candidate scoring', 'Background checks']
    },
    {
      title: 'Performance Management',
      description: 'Track and analyze employee performance with AI insights',
      icon: BarChart,
      examples: ['Goal tracking', 'Performance reviews', 'Skill assessments', 'Career development']
    },
    {
      title: 'Employee Engagement',
      description: 'Monitor and improve employee satisfaction and retention',
      icon: Heart,
      examples: ['Satisfaction surveys', 'Retention analysis', 'Engagement metrics', 'Wellness tracking']
    },
    {
      title: 'Compliance & Training',
      description: 'Ensure regulatory compliance and manage training programs',
      icon: Shield,
      examples: ['Compliance monitoring', 'Training management', 'Certification tracking', 'Policy updates']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$189',
      period: '/month',
      description: 'Perfect for small businesses with basic HR needs',
      features: [
        'Up to 50 employees',
        'Basic recruitment tools',
        'Performance tracking',
        'Email support',
        'Standard templates',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing companies with complex HR requirements',
      features: [
        'Up to 200 employees',
        'Advanced AI screening',
        'Interview automation',
        'Priority support',
        'Custom workflows',
        'Advanced analytics',
        'Integration APIs',
        'Mobile app access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations with extensive HR operations',
      features: [
        'Unlimited employees',
        'Custom AI models',
        'Full automation suite',
        '24/7 phone support',
        'Custom integrations',
        'Advanced reporting',
        'Dedicated account manager',
        'White-label options'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-4 py-2 mb-6">
            <Brain className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">AI Human Resources</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="AI HR Assistant">
            AI HR Assistant
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your human resources with AI-powered recruitment, performance management, 
            and employee engagement tools. Reduce bias, improve efficiency, and make better 
            hiring decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#pricing"
              className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Start Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call +1 302 464 0950
            </a>
          </div>
        </section>

        {/* Key Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50%</div>
              <div className="text-gray-300">Faster Hiring</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
              <div className="text-gray-300">Better Matching</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">60%</div>
              <div className="text-gray-300">Bias Reduction</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">30%</div>
              <div className="text-gray-300">Higher Retention</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16" aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-4xl font-bold text-white mb-8 text-center neon-text">
            Comprehensive HR Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-white">{feature}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16" aria-labelledby="use-cases-heading">
          <h2 id="use-cases-heading" className="text-4xl font-bold text-white mb-8 text-center neon-text">
            HR Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center gap-2 text-sm text-gray-400">
                      <ArrowRight className="w-3 h-3 text-cyan-400" />
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16" aria-labelledby="benefits-heading">
          <h2 id="benefits-heading" className="text-4xl font-bold text-white mb-8 text-center neon-text">
            Proven Results
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <p className="text-gray-300 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="mb-16" aria-labelledby="pricing-heading">
          <h2 id="pricing-heading" className="text-4xl font-bold text-white mb-8 text-center neon-text">
            Transparent Pricing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`cyber-card p-8 relative hover:scale-105 transition-all duration-300 ${tier.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    tier.popular
                      ? 'cyber-button'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Transform Your HR Operations?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join forward-thinking companies using our AI HR Assistant to streamline 
              recruitment, improve performance management, and enhance employee engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIHRAssistantPage;