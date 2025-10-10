'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, Users, TrendingUp, CheckCircle } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Get your micro-SaaS up and running in days, not months'
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Built-in user authentication, roles, and permissions'
    },
    {
      icon: TrendingUp,
      title: 'Analytics Dashboard',
      description: 'Track usage, revenue, and key metrics in real-time'
    }
  ];

  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: 'per month',
      description: 'Perfect for solo entrepreneurs',
      features: [
        'Up to 100 users',
        'Basic analytics',
        'Email support',
        'Standard templates'
      ]
    },
    {
      name: 'Growth',
      price: '$299',
      period: 'per month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 1,000 users',
        'Advanced analytics',
        'Priority support',
        'Custom branding',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'Custom analytics',
        '24/7 support',
        'White-label solution',
        'Custom integrations'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro-SaaS Solutions - Zion Tech Group | Build & Launch Fast</title>
        <meta name="description" content="Build and launch your micro-SaaS quickly with our pre-built solutions. User management, analytics, and more included." />
        <meta name="keywords" content="micro-saas, saas solutions, rapid deployment, user management, analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Micro-SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build and launch your micro-SaaS quickly with our pre-built solutions. Focus on your core business while we handle the technical infrastructure.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Everything You Need to Launch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Choose Your Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div key={plan.name} className={`bg-white rounded-lg shadow-lg p-6 relative ${plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Launch Your Micro-SaaS?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start building your micro-SaaS today with our proven solutions and expert support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Start Building
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View Examples
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;