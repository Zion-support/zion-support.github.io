'use client';
import React from 'react';
import { CheckCircle, Star, Brain, Users, BarChart, Clock, Shield, Zap, Target } from 'lucide-react';

const AIProjectManagementPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Planning',
      description: 'Intelligent project planning with predictive analytics and resource optimization',
      benefits: ['40% faster project planning', '95% accuracy in timeline predictions', 'Automatic risk assessment']
    },
    {
      icon: Users,
      title: 'Smart Team Management',
      description: 'AI-driven team allocation and workload balancing for optimal productivity',
      benefits: ['30% increase in team efficiency', 'Real-time workload monitoring', 'Skill-based task assignment']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive project analytics with predictive insights and performance metrics',
      benefits: ['Real-time project health monitoring', 'Predictive budget forecasting', 'Performance trend analysis']
    },
    {
      icon: Clock,
      title: 'Automated Scheduling',
      description: 'Intelligent scheduling that adapts to team availability and project priorities',
      benefits: ['Zero scheduling conflicts', 'Automatic deadline adjustments', 'Smart dependency management']
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Proactive risk identification and mitigation strategies powered by AI',
      benefits: ['Early risk detection', 'Automated mitigation plans', 'Compliance monitoring']
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Smart goal setting and progress tracking with AI-powered recommendations',
      benefits: ['Dynamic goal adjustment', 'Progress prediction', 'Achievement optimization']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small teams and simple projects',
      features: [
        'Up to 5 team members',
        '10 active projects',
        'Basic AI planning',
        'Standard reporting',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing teams and complex projects',
      features: [
        'Up to 25 team members',
        'Unlimited projects',
        'Advanced AI analytics',
        'Custom reporting',
        'Priority support',
        'API access',
        'Integrations',
        'Advanced automation'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations with advanced needs',
      features: [
        'Unlimited team members',
        'Unlimited projects',
        'Full AI suite',
        'Custom AI models',
        'Dedicated support',
        'White-label options',
        'Advanced security',
        'Custom integrations',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Software Development',
      description: 'Streamline agile development with AI-powered sprint planning and resource allocation',
      icon: '💻',
      metrics: ['50% faster sprint planning', '35% reduction in project delays', '90% accurate effort estimation']
    },
    {
      title: 'Marketing Campaigns',
      description: 'Optimize marketing project timelines and resource allocation with predictive analytics',
      icon: '📢',
      metrics: ['40% better campaign performance', '60% faster campaign launch', '25% cost reduction']
    },
    {
      title: 'Construction Projects',
      description: 'Manage complex construction timelines with weather and resource prediction',
      icon: '🏗️',
      metrics: ['30% fewer delays', '20% cost savings', '95% on-time delivery']
    },
    {
      title: 'Event Planning',
      description: 'Coordinate large events with AI-powered vendor management and timeline optimization',
      icon: '🎉',
      metrics: ['45% faster planning', '80% vendor satisfaction', 'Zero last-minute issues']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Project Management
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Transform your project management with AI-powered planning, resource optimization, and predictive analytics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                ✉️ Get Free Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-600">
              Leverage cutting-edge AI to revolutionize your project management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your team size and project complexity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-purple-600">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-gray-600">
              See how AI project management transforms different industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 text-center">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{useCase.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <li key={metricIndex} className="flex items-center text-sm text-gray-600">
                      <Zap className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Project Management?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Join thousands of teams already using AI to manage their projects more efficiently
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-purple-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIProjectManagementPage;