'use client';
import React, { lazy } from 'react';
import { CheckCircle, TrendingUp, Brain, Zap, Settings, BarChart, Users, Shield, Clock, Target } from 'lucide-react';

const Navigation = lazy(() => import('../components/Navigation'));
const Footer = lazy(() => import('../components/Footer'));

const AIAutomationPage: React.FC = React.memo(() => {
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
      benefits: ['Adaptive workflows', 'Self-optimization', 'Predictive maintenance', 'Continuous improvement']
    },
    {
      icon: Settings,
      title: 'Process Automation',
      description: 'Intelligent automation of complex business processes with decision-making capabilities',
      benefits: ['80% process efficiency', 'Zero human error', '24/7 operation', 'Cost reduction']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Get deep insights into your automated processes with real-time analytics and reporting.',
      benefits: ['Real-time monitoring', 'Performance metrics', 'Predictive analytics', 'Custom dashboards']
    }
  ];

  const automationTypes = [
    {
      title: 'Document Processing',
      description: 'Automate document classification, extraction, and processing with AI',
      icon: Users,
      benefits: ['OCR technology', 'Smart classification', 'Data extraction', 'Workflow routing']
    },
    {
      title: 'Customer Service',
      description: 'AI-powered chatbots and virtual assistants for 24/7 customer support',
      icon: Shield,
      benefits: ['Natural language processing', 'Sentiment analysis', 'Multi-language support', 'Escalation handling']
    },
    {
      title: 'Data Management',
      description: 'Automate data collection, validation, and processing workflows',
      icon: Clock,
      benefits: ['Data validation', 'ETL processes', 'Quality assurance', 'Real-time processing']
    },
    {
      title: 'Business Intelligence',
      description: 'Automated reporting and analytics for data-driven decision making',
      icon: Target,
      benefits: ['Automated reports', 'Predictive modeling', 'Trend analysis', 'Alert systems']
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 60%',
    'Increase productivity by 5x',
    'Eliminate human errors in repetitive tasks',
    'Enable 24/7 business operations',
    'Scale processes without proportional cost increase',
    'Improve customer satisfaction and response times'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$499',
      period: '/month',
      description: 'Perfect for small businesses starting their automation journey',
      features: [
        'Up to 5 automated processes',
        'Basic AI capabilities',
        'Standard integrations',
        'Email support',
        'Monthly reporting',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,299',
      period: '/month',
      description: 'Ideal for growing businesses with complex automation needs',
      features: [
        'Up to 25 automated processes',
        'Advanced AI capabilities',
        'Custom integrations',
        'Priority support',
        'Real-time monitoring',
        'Advanced analytics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with enterprise-scale automation requirements',
      features: [
        'Unlimited processes',
        'Custom AI models',
        'Dedicated support team',
        'On-premise deployment',
        'Custom development',
        'SLA guarantee',
        'Training & consulting'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI-Powered Business
                <span className="block text-blue-600">Automation</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your business operations with intelligent automation solutions. 
                Reduce costs, increase efficiency, and scale your business with AI-powered workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Start Free Trial
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Intelligent Automation Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to automate and optimize your business processes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Automation Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Automation Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive automation solutions for every aspect of your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {automationTypes.map((type, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {type.description}
                  </p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-600">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose AI Automation?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the transformative power of intelligent automation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Flexible pricing options to fit your automation needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white p-8 rounded-xl shadow-lg ${plan.popular ? 'ring-2 ring-blue-600' : ''}`}>
                  {plan.popular && (
                    <div className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your automation journey today and transform your business operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
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