'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Phone, Mail, ArrowRight, Zap, Shield, Users, Clock } from 'lucide-react';

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$1,500',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI Services',
        'Email Support',
        'Standard Implementation',
        'Monthly Reports',
        'Basic Analytics',
        'Up to 5 Users'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-600',
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$4,999',
      period: '/month',
      description: 'Ideal for growing businesses with advanced AI needs',
      features: [
        'Advanced AI Services',
        'Priority Support',
        'Custom Implementation',
        'Real-time Analytics',
        'API Access',
        'Up to 25 Users',
        'Custom Integrations',
        'Training & Onboarding'
      ],
      popular: true,
      color: 'from-purple-500 to-indigo-600',
      cta: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Full AI Suite',
        '24/7 Dedicated Support',
        'Custom Development',
        'Advanced Analytics',
        'White-label Options',
        'Unlimited Users',
        'Custom Integrations',
        'Dedicated Account Manager',
        'SLA Guarantee',
        'On-site Training'
      ],
      popular: false,
      color: 'from-orange-500 to-red-600',
      cta: 'Contact Sales'
    }
  ];

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Zap,
      services: [
        { name: 'AI Consulting', price: '$200/hour' },
        { name: 'AI Implementation', price: '$5,000-$50,000' },
        { name: 'AI Training', price: '$500/day' },
        { name: 'AI Support', price: '$150/hour' }
      ]
    },
    {
      title: 'IT Services',
      icon: Shield,
      services: [
        { name: 'Cloud Migration', price: '$10,000-$100,000' },
        { name: 'Infrastructure Setup', price: '$5,000-$75,000' },
        { name: 'Security Audit', price: '$2,500-$25,000' },
        { name: 'DevOps Setup', price: '$8,000-$60,000' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Users,
      services: [
        { name: 'Business Apps', price: '$79-$299/month' },
        { name: 'Productivity Tools', price: '$49-$199/month' },
        { name: 'Marketing Tools', price: '$99-$399/month' },
        { name: 'Analytics Tools', price: '$149-$599/month' }
      ]
    }
  ];

  const benefits = [
    {
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprise costs. What you see is what you pay.'
    },
    {
      title: 'Flexible Plans',
      description: 'Choose the plan that fits your needs and scale as you grow.'
    },
    {
      title: 'Money-Back Guarantee',
      description: '30-day money-back guarantee if you\'re not satisfied.'
    },
    {
      title: 'Free Consultation',
      description: 'Free initial consultation to determine the best solution for you.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for AI and IT solutions. Choose from our flexible plans or get a custom quote for enterprise solutions."
        keywords={['AI pricing', 'IT services pricing', 'enterprise pricing', 'AI costs', 'technology pricing']}
        canonicalUrl="https://ziontechgroup.com/pricing"
      />
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core AI and IT services with no hidden fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call: (302) 464-0950
            </a>
            <a 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Get Free Quote
            </a>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-lg flex items-center justify-center mb-6`}>
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Service Categories */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Service Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex justify-between items-center">
                      <span className="text-gray-300">{service.name}</span>
                      <span className="text-cyan-400 font-semibold">{service.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Why Choose Our Pricing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Can I change plans anytime?</h3>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Is there a setup fee?</h3>
                <p className="text-gray-300">No setup fees for Professional and Enterprise plans. Starter plan includes basic setup at no extra cost.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">What's included in support?</h3>
                <p className="text-gray-300">Email support for Starter, priority support for Professional, and 24/7 dedicated support for Enterprise.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Do you offer custom pricing?</h3>
                <p className="text-gray-300">Yes, we offer custom pricing for Enterprise clients with specific requirements and large-scale implementations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact our team for a free consultation and custom pricing quote tailored to your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              ✉️ Email Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;