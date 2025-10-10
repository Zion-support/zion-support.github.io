'use client';
import React, { lazy } from 'react';
import { 
  Zap, Users, BarChart, Bot, Settings, Clock, CheckCircle, 
  ArrowRight, Phone, Mail, Star, TrendingUp, Shield, 
  Database, Cloud, Target, Globe, Brain, Cpu
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Navigation = lazy(() => import('../components/Navigation'));
const Footer = lazy(() => import('../components/Footer'));

const AIAutomationPage: React.FC = React.memo((props) => {
  const automationServices = [
    {
      icon: Settings,
      title: 'Process Automation',
      description: 'Intelligent automation of complex business processes with decision-making capabilities',
      benefits: ['80% process efficiency', 'Zero human error', '24/7 operation']
    },
    {
      icon: Brain,
      title: 'Intelligent Process Discovery',
      description: 'AI automatically identifies and maps your business processes for optimization opportunities.',
      benefits: ['Process mapping', 'Bottleneck identification', 'Efficiency analysis', 'ROI prediction']
    },
    {
      icon: Zap,
      title: 'Smart Workflow Automation',
      description: 'Deploy AI-powered workflows that learn and adapt to your business needs over time.',
      benefits: ['Adaptive workflows', 'Self-healing processes', 'Dynamic optimization', 'Real-time adjustments']
    },
    {
      icon: Shield,
      title: 'Decision Trees',
      description: 'Advanced decision-making algorithms for complex business scenarios',
      benefits: ['Consistent decisions', 'Risk mitigation', 'Compliance assurance']
    },
    {
      icon: Clock,
      title: 'Exception Handling',
      description: 'Intelligent handling of exceptions and edge cases in automated processes',
      benefits: ['Smart escalation', 'Context awareness', 'Learning capabilities']
    }
  ];

  const features = [
    {
      icon: Brain,
      title: 'Intelligent Process Discovery',
      description: 'AI automatically identifies and maps your business processes for optimization opportunities.',
      benefits: ['Process mapping', 'Bottleneck identification', 'Efficiency analysis', 'ROI prediction']
    },
    {
      icon: Zap,
      title: 'Smart Workflow Automation',
      description: 'Deploy AI-powered workflows that learn and adapt to your business needs over time.',
      benefits: ['Adaptive workflows', 'Self-healing processes', 'Dynamic optimization', 'Real-time adjustments']
    },
    {
      icon: Settings,
      title: 'Process Optimization',
      description: 'Continuously optimize your automated processes for maximum efficiency and performance.',
      benefits: ['Performance monitoring', 'Automatic tuning', 'Resource optimization', 'Cost reduction']
    },
    {
      icon: Shield,
      title: 'Intelligent Security',
      description: 'Built-in security features that protect your automated processes from threats.',
      benefits: ['Access control', 'Audit trails', 'Threat detection', 'Compliance monitoring']
    }
  ];

  const useCases = [
    {
      title: 'Customer Service Automation',
      description: 'AI-powered chatbots and support systems for enhanced customer experience',
      icon: Users,
      features: ['Chatbot integration', 'Ticket routing', 'Response generation', 'Sentiment analysis'],
      benefits: ['Instant responses', '24/7 availability', 'Consistent service', 'Scalable support'],
      price: 'Starting at $199/month'
    },
    {
      title: 'Data Analysis Automation',
      description: 'Automated data processing and insights generation using AI',
      icon: BarChart,
      features: ['Data collection', 'Pattern recognition', 'Report generation', 'Predictive analytics'],
      benefits: ['Faster insights', 'Accurate analysis', 'Reduced manual work', 'Better decisions'],
      price: 'Starting at $399/month'
    },
    {
      title: 'Marketing Automation',
      description: 'AI-driven marketing campaigns and customer engagement automation',
      icon: Target,
      features: ['Campaign optimization', 'Personalization', 'A/B testing', 'Performance tracking'],
      benefits: ['Higher conversion', 'Better targeting', 'Reduced costs', 'Improved ROI'],
      price: 'Starting at $249/month'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$299/month',
      description: 'Perfect for small businesses getting started with automation',
      features: [
        'Up to 10 automated processes',
        'Basic AI capabilities',
        'Email support',
        'Standard integrations',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,299/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 50 automated processes',
        'Advanced AI capabilities',
        'Priority support',
        'Custom integrations',
        'Up to 10 user accounts',
        'API access',
        'Real-time monitoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,999/month',
      description: 'For large organizations',
      features: [
        'Unlimited processes',
        'Premium AI capabilities',
        'Dedicated support',
        'Advanced analytics',
        'Unlimited users',
        'White-label solution',
        'Custom workflows',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const benefits = [
    'Reduce operational costs by 60%',
    'Increase process efficiency by 80%',
    'Eliminate human error completely',
    'Scale operations without limits',
    'Improve customer satisfaction',
    'Enable 24/7 operations'
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered automation. Streamline processes, reduce costs, and increase efficiency with our intelligent automation solutions." />
        <meta name="keywords" content="AI automation, business process automation, workflow automation, AI solutions, Zion Tech Group" />
      </Helmet>

      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered Automation
                <span className="block text-purple-400">for Modern Business</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business processes with intelligent automation. Reduce costs, increase efficiency, 
                and eliminate human error with our advanced AI solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Start Automation
                </button>
                <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 hover:text-purple-600 transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Automation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to automate your business processes
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Automation Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real-world applications of AI automation
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <useCase.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {useCase.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300">• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {useCase.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-300">• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-purple-400 font-semibold">{useCase.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Automation?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options for businesses of all sizes
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm p-8 rounded-xl border ${plan.popular ? 'border-purple-400' : 'border-white/20'}`}>
                  {plan.popular && (
                    <div className="bg-purple-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-purple-600 text-white hover:bg-purple-700' 
                      : 'border border-white/30 text-white hover:bg-white/10'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your automation journey today and transform your business processes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 hover:text-purple-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
});

AIAutomationPage.displayName = 'AIAutomationPage';

export default AIAutomationPage;