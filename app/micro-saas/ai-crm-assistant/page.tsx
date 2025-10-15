'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  UserGroupIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  StarIcon,
  ShieldCheckIcon,
  CogIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const AICRMAssistantPage: React.FC = () => {
  const features = [
    "AI-powered lead scoring",
    "Automated follow-up sequences",
    "Predictive analytics",
    "Customer sentiment analysis",
    "Sales forecasting",
    "Email automation",
    "Task prioritization",
    "Integration with 50+ tools",
    "Custom reporting",
    "Mobile app access"
  ];

  const benefits = [
    "Increase sales by 35%",
    "Reduce manual work by 60%",
    "Improve customer satisfaction",
    "Better lead qualification",
    "Automated data entry",
    "Real-time insights"
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$79/month",
      features: ["Up to 1,000 contacts", "Basic automation", "Email support"],
      popular: false
    },
    {
      plan: "Professional",
      price: "$149/month",
      features: ["Up to 10,000 contacts", "Advanced AI features", "Priority support", "API access"],
      popular: true
    },
    {
      plan: "Enterprise",
      price: "$299/month",
      features: ["Unlimited contacts", "Custom integrations", "Dedicated support", "White-label options"],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI CRM Assistant - Zion Tech Group</title>
        <meta name="description" content="Intelligent CRM assistant powered by AI that automates sales processes, improves lead management, and boosts customer relationships." />
        <meta name="keywords" content="AI CRM, sales automation, lead management, customer relationship management, sales forecasting, CRM software" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              AI CRM Assistant
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your sales process with our intelligent CRM assistant. Automate lead management, 
              improve customer relationships, and boost sales with AI-powered insights and automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/demo" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Powerful AI Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Our AI CRM Assistant?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <StarIcon className="w-6 h-6 text-yellow-500 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">{benefit}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Simple, Transparent Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white border-2 rounded-lg p-8 ${plan.popular ? 'border-blue-500 relative' : 'border-gray-200'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.plan}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`w-full block text-center py-3 px-4 rounded-lg font-medium transition-colors ${
                      plan.popular 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Sales Process?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of sales teams already boosting their performance with our AI CRM assistant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/demo" 
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
              >
                Schedule Demo
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-blue-100">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICRMAssistantPage;