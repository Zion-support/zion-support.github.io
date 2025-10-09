'use client';
import React from 'react';
import { CheckCircle, Star, Zap, Calendar, BarChart, Target, TrendingUp } from 'lucide-react';

const AIProjectManagementPage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: 'AI Task Automation',
      description: 'Automatically assign tasks, set priorities, and optimize workflows based on team capacity and project requirements.'
    },
    {
      icon: <Target className="w-6 h-6 text-green-500" />,
      title: 'Smart Resource Allocation',
      description: 'AI analyzes team skills and workload to assign the right people to the right tasks at the optimal time.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-500" />,
      title: 'Predictive Analytics',
      description: 'Forecast project completion dates, identify potential risks, and suggest optimizations before issues arise.'
    },
    {
      icon: <BarChart className="w-6 h-6 text-orange-500" />,
      title: 'Real-time Insights',
      description: 'Get instant visibility into project health, team performance, and resource utilization with AI-powered dashboards.'
    }
  ];

  const capabilities = [
    'AI-powered task prioritization',
    'Automated resource allocation',
    'Predictive project timeline forecasting',
    'Risk identification and mitigation',
    'Team performance optimization',
    'Budget tracking and cost optimization',
    'Integration with 50+ tools',
    'Real-time collaboration features',
    'Advanced reporting and analytics',
    'Custom workflow automation'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 10 team members',
        'Basic AI automation',
        'Project templates',
        'Basic reporting',
        'Email support',
        '5GB storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing teams',
      features: [
        'Up to 50 team members',
        'Advanced AI features',
        'Custom workflows',
        'Advanced analytics',
        'Priority support',
        '50GB storage',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Full AI suite',
        'Custom integrations',
        'Dedicated manager',
        '24/7 phone support',
        'Unlimited storage',
        'White-label options'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      metric: '40%',
      description: 'Faster project completion'
    },
    {
      metric: '60%',
      description: 'Reduction in project delays'
    },
    {
      metric: '85%',
      description: 'Improvement in resource utilization'
    },
    {
      metric: '95%',
      description: 'Client satisfaction rate'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              AI Project Management
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Project Management
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your project management with AI-powered automation, predictive analytics, 
              and intelligent resource allocation. Complete projects 40% faster with 60% fewer delays.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-200"
              >
                Get Free Demo
              </a>
            </div>
          </div>

          {/* Benefits Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-gray-300 text-sm">
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI project management platform uses machine learning to optimize every aspect of your project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete Project Management Suite
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to manage projects efficiently with AI assistance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Core Capabilities</h3>
              <div className="grid grid-cols-1 gap-4">
                {capabilities.slice(0, 5).map((capability, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {capability}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Advanced Features</h3>
              <div className="grid grid-cols-1 gap-4">
                {capabilities.slice(5).map((capability, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {capability}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your team size and project needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-blue-500 shadow-2xl shadow-blue-500/20' 
                  : 'border-white/10 hover:border-blue-500/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                      : 'border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Project Management?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of teams already using our AI project management to deliver projects faster and more efficiently
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              📞 Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              ✉️ Email Us
            </a>
          </div>
          <p className="text-blue-200 text-sm mt-4">
            📍 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </section>
    </div>
  );
};

export default AIProjectManagementPage;