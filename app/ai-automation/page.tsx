'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Zap, Brain, Cog, ArrowRight, CheckCircle, Star, Phone, Mail, MapPin, Clock, Users, TrendingUp, Shield, Target, BarChart, Settings, Play, Pause, RotateCcw, RefreshCw } from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Process Discovery',
      description: 'AI automatically identifies repetitive tasks and processes that can be automated',
      benefits: ['Reduces manual work by 80%', 'Identifies hidden inefficiencies', 'Maps complex workflows']
    },
    {
      icon: Cog,
      title: 'Smart Workflow Automation',
      description: 'Create intelligent workflows that adapt and learn from your business patterns',
      benefits: ['Self-optimizing processes', 'Dynamic rule adjustment', 'Exception handling']
    },
    {
      icon: Zap,
      title: 'Real-time Decision Making',
      description: 'AI makes instant decisions based on data patterns and business rules',
      benefits: ['Instant response times', 'Consistent decision quality', 'Reduced human error']
    },
    {
      icon: Target,
      title: 'Predictive Automation',
      description: 'Anticipate needs and automate actions before they\'re required',
      benefits: ['Proactive problem solving', 'Resource optimization', 'Customer satisfaction']
    }
  ];

  const useCases = [
    {
      title: 'Customer Service Automation',
      description: 'Automated ticket routing, response generation, and escalation management',
      icon: Users,
      metrics: ['90% faster response times', '85% reduction in manual tickets', '95% customer satisfaction']
    },
    {
      title: 'Financial Process Automation',
      description: 'Automated invoice processing, expense management, and financial reporting',
      icon: BarChart,
      metrics: ['70% faster processing', '99% accuracy rate', '60% cost reduction']
    },
    {
      title: 'HR Workflow Automation',
      description: 'Automated recruitment, onboarding, and employee lifecycle management',
      icon: Settings,
      metrics: ['50% faster hiring', '80% process efficiency', '100% compliance']
    },
    {
      title: 'IT Operations Automation',
      description: 'Automated monitoring, incident response, and system maintenance',
      icon: Shield,
      metrics: ['99.9% uptime', '75% faster resolution', '90% proactive fixes']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Efficiency',
      description: 'Automate up to 80% of repetitive tasks, freeing your team for strategic work'
    },
    {
      icon: Shield,
      title: 'Reduced Errors',
      description: 'Eliminate human error with consistent, rule-based automation processes'
    },
    {
      icon: Clock,
      title: '24/7 Operations',
      description: 'Run automated processes around the clock without human intervention'
    },
    {
      icon: BarChart,
      title: 'Better Insights',
      description: 'Gain deep insights into process performance and optimization opportunities'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10 automation workflows',
        'Basic AI decision making',
        'Email support',
        'Standard integrations',
        'Monthly reporting'
      ]
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 50 automation workflows',
        'Advanced AI capabilities',
        'Priority support',
        'Custom integrations',
        'Real-time monitoring',
        'Dedicated account manager'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited automation workflows',
        'Custom AI model training',
        '24/7 dedicated support',
        'On-premise deployment',
        'Advanced analytics',
        'SLA guarantee'
      ]
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Automation Services - Zion Tech Group"
        description="Transform your business with intelligent automation. AI-powered workflows that adapt, learn, and optimize your processes automatically."
        keywords={['AI automation', 'workflow automation', 'process automation', 'intelligent automation', 'business automation']}
        canonicalUrl="https://ziontechgroup.com/ai-automation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI-Powered Automation
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Transform your business with intelligent automation
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our AI automation solutions learn from your business patterns, adapt to changes, 
                and continuously optimize your processes for maximum efficiency and accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Consultation</span>
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              How AI Automation Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Real-World Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-8">
                  <div className="flex items-center mb-4">
                    <useCase.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm text-cyan-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Why Choose Our AI Automation?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
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
                  <a
                    href={plan.name === 'Enterprise' ? 'mailto:kleber@ziontechgroup.com' : 'tel:+13024640950'}
                    className={`w-full text-center block py-3 px-6 rounded-lg font-medium transition-all ${
                      plan.popular
                        ? 'cyber-button'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="cyber-card p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our AI automation experts analyze your processes and create a custom automation strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Schedule Demo</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AIAutomationPage;
