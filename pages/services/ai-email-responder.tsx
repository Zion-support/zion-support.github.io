import type { NextPage } from 'next';
import Layout from '../../components/Layout';
import Link from 'next/link';

const AIEmailResponder: NextPage = () => {
  const features = [
    {
      title: 'Smart Email Classification',
      description: 'Automatically categorize emails by priority, type, and urgency using AI.',
      icon: '📧'
    }, {
      title: 'Auto-Response Generation',
      description: 'Generate contextual, personalized responses for common inquiries.',
      icon: '🤖'
    }, {
      title: 'Sentiment Analysis',
      description: 'Analyze email sentiment to prioritize urgent or negative messages.',
      icon: '😊'
    }, {
      title: 'Multi-Language Support',
      description: 'Process and respond to emails in multiple languages automatically.',
      icon: '🌍'
    }, {
      title: 'Integration Ready',
      description: 'Seamlessly integrate with Gmail, Outlook, and other email platforms.',
      icon: '🔗'
    }, {
      title: 'Learning Capabilities',
      description: 'Continuously learns from your responses to improve accuracy over time.',
      icon: '🧠'
    }
  ];

  const benefits = [
    'Reduce email response time by up to 90%',
    'Handle routine inquiries automatically',
    'Improve customer satisfaction with faster responses',
    'Free up time for complex, high-value tasks',
    'Maintain consistent brand voice in all communications',
    'Scale customer support without increasing team size'
  ];

  const pricing = [
    {
      name: 'Basic',
      price: '$79',
      period: '/month',
      features: [
        'Up to 1,000 emails/month',
        'Basic auto-responses',
        'Email classification',
        'Email support',
        'Standard integrations',
        'Basic analytics'
      ],
      popular: false
    }, {
      name: 'Professional',
      price: '$199',
      period: '/month',
      features: [
        'Up to 5,000 emails/month',
        'Advanced auto-responses',
        'Sentiment analysis',
        'Priority support',
        'All integrations',
        'Advanced analytics',
        'Multi-language support',
        'Custom templates'
      ],
      popular: true
    }, {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      features: [
        'Unlimited emails/month',
        'Custom AI training',
        'API access',
        'Dedicated account manager',
        'Custom integrations',
        'White-label solution',
        'Advanced reporting',
        '24/7 phone support'
      ],
      popular: false
    }
  ];

  return (
    <Layout 
      title="AI Email Responder - Zion Tech Group"
      description="Automate your email responses with AI-powered email management. Reduce response time, improve customer satisfaction, and scale your support operations."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Email Responder
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Automate your email responses with AI-powered email management. 
              Reduce response time, improve customer satisfaction, and scale your support operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact"><a className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </a></Link>
              <Link href="#pricing"><a className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold transition-colors">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Email Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful AI capabilities to transform your email management
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our AI Email Responder?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our AI-powered email system understands context, learns from your communication style, 
                and provides intelligent responses that maintain your brand voice while saving time.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Performance Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                  <span className="font-medium">Response Time Reduction</span>
                  <span className="text-purple-600 font-bold">90%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="font-medium">Customer Satisfaction</span>
                  <span className="text-blue-600 font-bold">+45%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="font-medium">Time Savings</span>
                  <span className="text-green-600 font-bold">15+ hours/week</span>
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
              Choose the plan that best fits your email volume and needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl p-8 shadow-lg border-2 ${plan.popular ? 'border-purple-500 relative' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">
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
                      ? 'bg-purple-600 hover:bg-purple-700 text-white' 
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Email Responses?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start saving time and improving customer satisfaction with AI-powered email automation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact"><a className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
              Start Free Trial
            </a></Link>
            <Link href="tel:+13024640950"><a className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-colors">
              Call +1 302 464 0950
            </a></Link>
          </div>
        </div>
      </section>
    </Layout>
  )};

export default AIEmailResponder;