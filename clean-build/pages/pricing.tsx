import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: 'per month',
      description: 'Perfect for small businesses and startups looking to establish their digital presence.',
      features: [
        'Custom Website Development',
        'Responsive Design',
        'Basic SEO Optimization',
        'Contact Form Integration',
        'Social Media Integration',
        'Basic Analytics',
        '3 Months Support',
        'Monthly Maintenance'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: 'per month',
      description: 'Ideal for growing businesses that need advanced features and scalability.',
      features: [
        'Everything in Starter',
        'E-commerce Integration',
        'Advanced SEO & Analytics',
        'Content Management System',
        'User Authentication',
        'API Development',
        '6 Months Support',
        'Priority Support',
        'Performance Optimization',
        'Security Features'
      ],
      popular: true,
      cta: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'quote',
      description: 'Tailored solutions for large organizations with complex requirements.',
      features: [
        'Everything in Professional',
        'Custom Application Development',
        'AI Integration',
        'Cloud Infrastructure',
        'Advanced Security',
        '24/7 Support',
        'Dedicated Project Manager',
        'Custom Integrations',
        'Scalability Planning',
        'Training & Documentation'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const addOns = [
    {
      name: 'Mobile App Development',
      price: '$5,000 - $15,000',
      description: 'Native iOS and Android applications with modern UI/UX design.'
    },
    {
      name: 'AI Integration',
      price: '$3,000 - $10,000',
      description: 'Machine learning models, chatbots, and intelligent automation.'
    },
    {
      name: 'Cloud Migration',
      price: '$2,000 - $8,000',
      description: 'Migrate your infrastructure to AWS, Azure, or Google Cloud.'
    },
    {
      name: 'Security Audit',
      price: '$1,500 - $5,000',
      description: 'Comprehensive security assessment and vulnerability testing.'
    }
  ];

  return (
    <>
      <Head>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for web development, mobile apps, AI integration, and cloud services. Choose the plan that fits your business needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative container mx-auto px-4 py-20 lg:py-32">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Transparent <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
                Choose the perfect plan for your business needs. All plans include our commitment 
                to quality, support, and your success.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {plans.map((plan, index) => (
                <div key={index} className={`card relative ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="text-center">
                    <Link 
                      href={plan.name === 'Enterprise' ? '/contact' : '/contact'} 
                      className={`w-full block py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                          : 'bg-slate-700 hover:bg-slate-600 text-white'
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Additional <span className="gradient-text">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your project with our additional services. All add-ons can be included with any plan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {addOns.map((addon, index) => (
                <div key={index} className="card">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">{addon.name}</h3>
                    <span className="text-lg font-semibold text-blue-400">{addon.price}</span>
                  </div>
                  <p className="text-gray-300">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="card">
                <h3 className="text-xl font-bold text-white mb-4">What's included in the monthly fee?</h3>
                <p className="text-gray-300">
                  The monthly fee includes development, design, hosting, maintenance, updates, and support. 
                  We handle all technical aspects so you can focus on your business.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-white mb-4">Can I change my plan later?</h3>
                <p className="text-gray-300">
                  Yes, you can upgrade or downgrade your plan at any time. We'll work with you to ensure 
                  a smooth transition and adjust pricing accordingly.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-white mb-4">Do you offer custom solutions?</h3>
                <p className="text-gray-300">
                  Absolutely! Our Enterprise plan is fully customizable, and we can create tailored solutions 
                  for any specific requirements your business may have.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-white mb-4">What's your support policy?</h3>
                <p className="text-gray-300">
                  We provide comprehensive support based on your plan. Starter includes 3 months support, 
                  Professional includes 6 months, and Enterprise includes 24/7 support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Have questions about our pricing or need a custom quote? 
              Contact us today for a free consultation and detailed project estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Free Quote
              </Link>
              <Link href="/services" className="btn-secondary">
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}