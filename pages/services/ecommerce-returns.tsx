import type { NextPage } from 'next';
import Layout from '../../components/Layout';
import Link from 'next/link';

const EcommerceReturns: NextPage = () => {
  const features = [
    {
      title: 'Automated Return Requests',
      description: 'Streamline return requests with automated workflows and approval processes.',
      icon: '🔄'
    }, {
      title: 'Return Label Generation',
      description: 'Automatically generate and send return labels to customers.',
      icon: '🏷️'
    }, {
      title: 'Return Tracking',
      description: 'Track return status from request to refund with real-time updates.',
      icon: '📦'
    }, {
      title: 'Inventory Management',
      description: 'Automatically update inventory when returns are processed.',
      icon: '📊'
    }, {
      title: 'Refund Processing',
      description: 'Automated refund processing with multiple payment methods.',
      icon: '💳'
    }, {
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics to understand return patterns and reduce returns.',
      icon: '📈'
    }
  ];

  const benefits = [
    'Reduce return processing time by up to 80%',
    'Improve customer satisfaction with faster returns',
    'Automate inventory updates and refund processing',
    'Gain insights into return patterns and reasons',
    'Reduce operational costs and manual work',
    'Integrate seamlessly with existing e-commerce platforms'
  ];

  const pricing = [
    {
      name: 'Basic',
      price: '$149',
      period: '/month',
      features: [
        'Up to 500 returns/month',
        'Basic return workflows',
        'Return label generation',
        'Email notifications',
        'Basic analytics',
        'Email support',
        'Standard integrations'
      ],
      popular: false
    }, {
      name: 'Professional',
      price: '$399',
      period: '/month',
      features: [
        'Up to 2,000 returns/month',
        'Advanced workflows',
        'Automated refunds',
        'Inventory integration',
        'Advanced analytics',
        'Priority support',
        'Custom branding',
        'API access'
      ],
      popular: true
    }, {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      features: [
        'Unlimited returns/month',
        'Custom workflows',
        'White-label solution',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced reporting',
        '24/7 phone support',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  return (
    <Layout 
      title="E-commerce Return Management - Zion Tech Group"
      description="Streamline your e-commerce returns with automated workflows, return label generation, and comprehensive tracking. Reduce costs and improve customer satisfaction."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              E-commerce Return Management
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Streamline your e-commerce returns with automated workflows, return label generation, 
              and comprehensive tracking. Reduce costs and improve customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact"><a className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </a></Link>
              <Link href="#pricing"><a className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-900 px-8 py-4 rounded-lg font-semibold transition-colors">
                View Pricing
              </a></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Return Management Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete solution for managing e-commerce returns efficiently
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Return Management?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our platform automates the entire return process, from initial request to final refund, 
                helping you reduce costs while improving customer experience.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Efficiency Gains</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-teal-50 rounded-lg">
                  <span className="font-medium">Processing Time</span>
                  <span className="text-teal-600 font-bold">-80%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="font-medium">Customer Satisfaction</span>
                  <span className="text-green-600 font-bold">+65%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="font-medium">Operational Costs</span>
                  <span className="text-blue-600 font-bold">-50%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that best fits your return volume and business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl p-8 shadow-lg border-2 ${plan.popular ? 'border-teal-500 relative' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-teal-600 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-500">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-teal-600 hover:bg-teal-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
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
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Streamline Your Returns?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start reducing return processing time and improving customer satisfaction today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact"><a className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
              Start Free Trial
            </a></Link>
            <Link href="tel:+13024640950"><a className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-semibold transition-colors">
              Call +1 302 464 0950
            </a></Link>
          </div>
        </div>
      </section>
    </Layout>
  )};

export default EcommerceReturns;