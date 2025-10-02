import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Business Intelligence Platform - Zion Tech Group',
  description: 'Transform your data into actionable insights with AI-powered business intelligence. Advanced analytics, predictive modeling, and automated reporting.',
  keywords: 'business intelligence, AI analytics, data visualization, predictive analytics, automated reporting, data insights',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AIBusinessIntelligencePlatform() {
  const features = [
    {
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms analyze your data to uncover hidden patterns and insights.',
      icon: '🧠',
      benefits: ['Deep data insights', 'Pattern recognition', 'Automated analysis']
    },
    {
      title: 'Predictive Modeling',
      description: 'Forecast future trends, customer behavior, and business outcomes with high accuracy.',
      icon: '🔮',
      benefits: ['Future predictions', 'Risk assessment', 'Opportunity identification']
    },
    {
      title: 'Natural Language Queries',
      description: 'Ask questions about your data in plain English and get instant, intelligent answers.',
      icon: '💬',
      benefits: ['Easy data access', 'No SQL required', 'Instant insights']
    },
    {
      title: 'Automated Reporting',
      description: 'Generate comprehensive reports automatically with AI-powered insights and recommendations.',
      icon: '📊',
      benefits: ['Time savings', 'Consistent reporting', 'Actionable recommendations']
    },
    {
      title: 'Real-Time Dashboards',
      description: 'Monitor your business performance with live, interactive dashboards that update automatically.',
      icon: '📈',
      benefits: ['Live monitoring', 'Interactive visualizations', 'Mobile access']
    },
    {
      title: 'Data Integration',
      description: 'Connect and analyze data from multiple sources including CRM, ERP, and external APIs.',
      icon: '🔗',
      benefits: ['Unified data view', 'Multiple sources', 'Seamless integration']
    }
  ];

  const pricingPlans = [
    {
      name: 'Analyst',
      price: '$299',
      period: '/month',
      description: 'Perfect for small teams and individual analysts',
      features: [
        'Up to 5 data sources',
        'Basic AI analytics',
        'Standard dashboards',
        'Email support',
        'Monthly reports',
        'Basic visualizations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses and analytics teams',
      features: [
        'Up to 25 data sources',
        'Advanced AI analytics',
        'Predictive modeling',
        'Priority support',
        'Custom dashboards',
        'API access',
        'Advanced visualizations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large enterprises and complex data environments',
      features: [
        'Unlimited data sources',
        'Custom AI models',
        'Dedicated account manager',
        '24/7 support',
        'White-label options',
        'Custom integrations',
        'Advanced security',
        'Compliance reporting'
      ],
      popular: false
    }
  ];

  const successMetrics = [
    { metric: '85%', description: 'Faster decision making' },
    { metric: '60%', description: 'Increase in data-driven insights' },
    { metric: '45%', description: 'Time saved on reporting' },
    { metric: '90%', description: 'Accuracy in predictions' }
  ];

  const testimonials = [
    {
      name: 'Jennifer Adams',
      company: 'Retail Chain',
      content: 'We\'ve transformed our decision-making process. The AI insights have helped us increase sales by 25% and reduce inventory costs by 30%.',
      rating: 5
    },
    {
      name: 'David Park',
      company: 'Financial Services',
      content: 'The predictive modeling is incredibly accurate. We can now predict customer churn with 90% accuracy and take proactive measures.',
      rating: 5
    },
    {
      name: 'Maria Santos',
      company: 'Manufacturing',
      content: 'Our reporting time went from 2 days to 2 hours. The automated insights have revolutionized how we analyze our operations.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">AI Business Intelligence Platform</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Transform your data into actionable insights with AI-powered business intelligence. 
            Advanced analytics, predictive modeling, and automated reporting for smarter decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#pricing" className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Pricing
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-lg text-gray-600">See the impact AI can have on your business intelligence</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {successMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">{item.metric}</div>
                <div className="text-gray-700">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced AI Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage cutting-edge AI technology to unlock insights from your data
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-teal-600 flex items-center">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
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
      <section id="pricing" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your business intelligence needs. All plans include our core AI features.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white p-8 rounded-xl shadow-lg border-2 transition-all hover:shadow-xl ${
                plan.popular ? 'border-teal-500 transform scale-105' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-teal-600 mb-2">
                    {plan.price}<span className="text-lg text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-teal-600 text-white hover:bg-teal-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how businesses are transforming their decision-making with AI business intelligence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business Intelligence?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using AI to unlock insights from their data. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </Link>
            <Link href="tel:+13024640950" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors">
              Call +1 302 464 0950
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}