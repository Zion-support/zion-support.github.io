import type { NextPage } from 'next';
import Layout from '../../components/Layout';
import Link from 'next/link';

const CustomerSupport: NextPage = () => {
  const features = [
    {
      title: 'Multi-Channel Support',
      description: 'Handle tickets from email, chat, phone, and social media in one unified platform.',
      icon: '📞'
    }, {
      title: 'AI-Powered Chatbots',
      description: 'Deploy intelligent chatbots for instant customer assistance and ticket routing.',
      icon: '🤖'
    }, {
      title: 'Knowledge Base',
      description: 'Create and manage comprehensive knowledge bases for self-service support.',
      icon: '📚'
    }, {
      title: 'Ticket Management',
      description: 'Organize, prioritize, and track support tickets with advanced workflow automation.',
      icon: '🎫'
    }, {
      title: 'Live Chat',
      description: 'Real-time chat support with file sharing, screen sharing, and co-browsing.',
      icon: '💬'
    }, {
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics to measure performance and improve customer satisfaction.',
      icon: '📊'
    }
  ];

  const benefits = [
    'Reduce support response time by up to 70%',
    'Improve customer satisfaction scores',
    'Centralize all support channels in one platform',
    'Scale support operations without increasing costs',
    'Provide 24/7 customer assistance with AI chatbots',
    'Gain insights into customer needs and pain points'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      features: [
        'Up to 3 agents',
        'Unlimited tickets',
        'Email & chat support',
        'Basic knowledge base',
        'Standard reporting',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    }, {
      name: 'Professional',
      price: '$499',
      period: '/month',
      features: [
        'Up to 10 agents',
        'All support channels',
        'AI chatbots',
        'Advanced knowledge base',
        'Advanced analytics',
        'Priority support',
        'Custom branding',
        'API access'
      ],
      popular: true
    }, {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      features: [
        'Unlimited agents',
        'White-label solution',
        'Custom AI training',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced security',
        '24/7 phone support',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  return (
    <Layout 
      title="Customer Support Platform - Zion Tech Group"
      description="Comprehensive customer support platform with AI chatbots, multi-channel support, and advanced analytics. Improve customer satisfaction and scale your support operations."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Customer Support Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Comprehensive customer support platform with AI chatbots, multi-channel support, 
              and advanced analytics. Improve customer satisfaction and scale your support operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact"><a className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </a></Link>
              <Link href="#pricing"><a className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-4 rounded-lg font-semibold transition-colors">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Platform Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to deliver exceptional customer support
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Support Platform?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our platform combines the power of AI with human expertise to deliver 
                exceptional customer experiences while optimizing your support operations.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Impact Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                  <span className="font-medium">Response Time</span>
                  <span className="text-orange-600 font-bold">-70%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="font-medium">Customer Satisfaction</span>
                  <span className="text-green-600 font-bold">+85%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="font-medium">Support Efficiency</span>
                  <span className="text-blue-600 font-bold">+200%</span>
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
              Choose the plan that best fits your support team size and needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl p-8 shadow-lg border-2 ${plan.popular ? 'border-orange-500 relative' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-orange-600 mb-2">
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
                      ? 'bg-orange-600 hover:bg-orange-700 text-white' 
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
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Customer Support?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start delivering exceptional customer experiences with our comprehensive support platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact"><a className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
              Start Free Trial
            </a></Link>
            <Link href="tel:+13024640950"><a className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold transition-colors">
              Call +1 302 464 0950
            </a></Link>
          </div>
        </div>
      </section>
    </Layout>
  )};

export default CustomerSupport;