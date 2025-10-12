'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Clock } from 'lucide-react';

export default function AICustomerSupportChatbot() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'Natural Language Processing',
      description: 'Advanced AI understands context, intent, and provides human-like responses'
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-400" />,
      title: '24/7 Availability',
      description: 'Provide instant support around the clock without additional staffing costs'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with GDPR and SOC2 compliance built-in'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'Instant Response',
      description: 'Lightning-fast responses reduce customer wait times and improve satisfaction'
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: 'Multi-Channel Support',
      description: 'Deploy across web, mobile, social media, and messaging platforms'
    },
    {
      icon: <Code className="w-6 h-6 text-red-400" />,
      title: 'Easy Integration',
      description: 'Simple APIs and SDKs for seamless integration with existing systems'
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-5 h-5 text-green-400" />,
      text: 'Reduce support costs by up to 80%'
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-400" />,
      text: 'Improve response time by 95%'
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-400" />,
      text: 'Increase customer satisfaction scores'
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-400" />,
      text: 'Scale support without scaling staff'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI responses',
        'Email support',
        'Standard integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI with custom training',
        'Priority support',
        'Advanced integrations',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Custom AI training',
        'Dedicated support',
        'White-label solution',
        'Advanced security features'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Support Chatbot - Zion Tech Group</title>
        <meta name="description" content="Transform your customer support with our AI-powered chatbot. 24/7 availability, natural language processing, and seamless integration." />
        <meta name="keywords" content="AI chatbot, customer support, automation, NLP, 24/7 support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Customer Support <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Chatbot</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your customer support with intelligent AI that provides instant, accurate, and personalized responses 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Powerful Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI chatbot is equipped with cutting-edge technology to deliver exceptional customer support experiences.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Our AI Chatbot?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    {benefit.icon}
                    <p className="text-gray-300 text-lg">{benefit.text}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Support?</h3>
                <p className="text-gray-300 mb-6">
                  Join thousands of businesses that have revolutionized their customer support with our AI chatbot solution.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Start Your Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core AI features.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border ${plan.popular ? 'border-blue-400' : 'border-gray-700'} relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-white mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                        : 'border border-gray-600 text-white hover:bg-gray-800'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Your Customer Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of customer service with our AI-powered chatbot solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}