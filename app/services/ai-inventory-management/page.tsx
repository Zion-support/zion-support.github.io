import React from 'react';
import { Metadata } from 'next';
import { Link } from 'react-router-dom';

export const metadata: Metadata = {
  title: 'AI Inventory Management System - Zion Tech Group',
  description: 'Optimize your inventory with AI-powered demand forecasting, automated reordering, and intelligent stock management. Reduce costs and prevent stockouts.',
  keywords: 'inventory management, AI demand forecasting, stock optimization, automated reordering, inventory analytics',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AIInventoryManagement() {
  const features = [
    {
      title: 'AI Demand Forecasting',
      description: 'Predict future demand with 95% accuracy using machine learning algorithms and historical data analysis.',
      icon: '📈',
      benefits: ['95% forecast accuracy', 'Reduce stockouts by 80%', 'Optimize inventory levels']
    },
    {
      title: 'Automated Reordering',
      description: 'Set up intelligent reorder points that automatically trigger purchase orders based on demand patterns.',
      icon: '🔄',
      benefits: ['Zero manual reordering', 'Prevent stockouts', 'Optimize cash flow']
    },
    {
      title: 'Multi-Location Management',
      description: 'Manage inventory across multiple warehouses, stores, and distribution centers from one platform.',
      icon: '🏢',
      benefits: ['Centralized control', 'Cross-location transfers', 'Unified reporting']
    },
    {
      title: 'Real-Time Analytics',
      description: 'Get instant insights into inventory performance, turnover rates, and profitability metrics.',
      icon: '📊',
      benefits: ['Live inventory tracking', 'Performance dashboards', 'ROI analysis']
    },
    {
      title: 'Supplier Integration',
      description: 'Connect with suppliers for automated ordering, price comparisons, and delivery tracking.',
      icon: '🤝',
      benefits: ['Automated procurement', 'Price optimization', 'Delivery tracking']
    },
    {
      title: 'Mobile Management',
      description: 'Manage your inventory on-the-go with our mobile app featuring barcode scanning and real-time updates.',
      icon: '📱',
      benefits: ['Barcode scanning', 'Mobile updates', 'Offline capability']
    }
  ];

  const pricingPlans = [
    {
      name: 'Small Business',
      price: '$99',
      period: '/month',
      description: 'Perfect for small retailers and e-commerce stores',
      features: [
        'Up to 1,000 SKUs',
        'Basic AI forecasting',
        'Automated reordering',
        'Mobile app access',
        'Email support',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and multi-location operations',
      features: [
        'Up to 10,000 SKUs',
        'Advanced AI forecasting',
        'Multi-location management',
        'Supplier integration',
        'Priority support',
        'Advanced analytics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large enterprises and complex supply chains',
      features: [
        'Unlimited SKUs',
        'Custom AI models',
        'Advanced integrations',
        'Dedicated account manager',
        'White-label options',
        'Custom reporting',
        'Advanced security',
        '24/7 support'
      ],
      popular: false
    }
  ];

  const successMetrics = [
    { metric: '40%', description: 'Average reduction in inventory costs' },
    { metric: '80%', description: 'Reduction in stockouts' },
    { metric: '95%', description: 'Demand forecast accuracy' },
    { metric: '60%', description: 'Time saved on inventory management' }
  ];

  const testimonials = [
    {
      name: 'Robert Johnson',
      company: 'Retail Chain',
      content: 'We reduced our inventory costs by 35% in the first quarter. The AI forecasting is incredibly accurate and has eliminated our stockout issues.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      company: 'E-commerce Store',
      content: 'The automated reordering feature has been a game-changer. We never run out of stock anymore and our cash flow has improved significantly.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'Manufacturing Company',
      content: 'Managing inventory across 5 locations used to be a nightmare. Now it\'s seamless with real-time visibility and automated processes.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">AI Inventory Management System</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Optimize your inventory with AI-powered demand forecasting, automated reordering, and intelligent stock management. 
            Reduce costs, prevent stockouts, and maximize profitability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#pricing" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Pricing
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
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
            <p className="text-lg text-gray-600">See the impact AI can have on your inventory management</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {successMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">{item.metric}</div>
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
              Leverage cutting-edge AI technology to optimize your inventory management and supply chain operations
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
                    <li key={idx} className="text-sm text-orange-600 flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
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
              Choose the plan that fits your inventory management needs. All plans include our core AI features.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white p-8 rounded-xl shadow-lg border-2 transition-all hover:shadow-xl ${
                plan.popular ? 'border-orange-500 transform scale-105' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    {plan.price}<span className="text-lg text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-orange-600 text-white hover:bg-orange-700' 
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
              See how businesses are transforming their inventory management with AI
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
      <section className="py-20 px-6 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Inventory?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using AI to transform their inventory management. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </Link>
            <Link href="tel:+13024640950" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
              Call +1 302 464 0950
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}