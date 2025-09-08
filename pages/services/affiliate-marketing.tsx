import type { NextPage } from 'next';
import Layout from '../../components/Layout';
import Link from 'next/link';

const AffiliateMarketing: NextPage = () => {
  const features = [
    {
      title: 'Referral Link Management',
      description: 'Create, track, and manage custom referral links with detailed analytics.',
      icon: '🔗'
    }, {
      title: 'Commission Tracking',
      description: 'Automatically calculate and track commissions for all affiliate partners.',
      icon: '💰'
    }, {
      title: 'Performance Analytics',
      description: 'Comprehensive dashboard with real-time performance metrics and insights.',
      icon: '📊'
    }, {
      title: 'Partner Management',
      description: 'Manage affiliate partners, approve applications, and track performance.',
      icon: '👥'
    }, {
      title: 'Payment Processing',
      description: 'Automated payment processing with multiple payment methods.',
      icon: '💳'
    }, {
      title: 'Fraud Detection',
      description: 'Advanced fraud detection to protect your affiliate program.',
      icon: '🛡️'
    }
  ];

  const benefits = [
    'Increase customer acquisition by up to 40%',
    'Reduce marketing costs through performance-based partnerships',
    'Scale your referral program with automated management',
    'Real-time tracking and analytics for better decision making',
    'Protect against fraudulent activities',
    'Easy integration with existing systems'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      features: [
        'Up to 100 affiliate partners',
        'Basic analytics dashboard',
        'Standard referral links',
        'Email support',
        'Basic fraud protection',
        'Monthly payouts'
      ],
      popular: false
    }, {
      name: 'Professional',
      price: '$399',
      period: '/month',
      features: [
        'Up to 500 affiliate partners',
        'Advanced analytics & reporting',
        'Custom referral links',
        'Priority support',
        'Advanced fraud detection',
        'Weekly payouts',
        'API access',
        'Custom branding'
      ],
      popular: true
    }, {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      features: [
        'Unlimited affiliate partners',
        'Custom analytics & reporting',
        'White-label solution',
        'Dedicated account manager',
        'Custom integrations',
        'Daily payouts',
        'Advanced API access',
        'Custom fraud rules'
      ],
      popular: false
    }
  ];

  return (
    <Layout 
      title="Affiliate Marketing Tools - Zion Tech Group"
      description="Boost your customer acquisition with our comprehensive affiliate marketing platform. Track referrals, manage commissions, and scale your partner program."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Affiliate Marketing Tools
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Boost your customer acquisition with our comprehensive affiliate marketing platform. 
              Track referrals, manage commissions, and scale your partner program effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact"><a className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Start Your Program
              </a></Link>
              <Link href="#pricing"><a className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-semibold transition-colors">
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
              Everything you need to run a successful affiliate marketing program
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Affiliate Platform?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our platform is designed to help businesses grow through strategic partnerships 
                and performance-based marketing. Scale your reach while maintaining control.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Success Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="font-medium">Customer Acquisition</span>
                  <span className="text-green-600 font-bold">+40%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="font-medium">Marketing ROI</span>
                  <span className="text-blue-600 font-bold">300%+</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                  <span className="font-medium">Cost Reduction</span>
                  <span className="text-purple-600 font-bold">60%</span>
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
              Choose the plan that best fits your affiliate program needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl p-8 shadow-lg border-2 ${plan.popular ? 'border-green-500 relative' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">
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
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Launch Your Affiliate Program?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start growing your business through strategic partnerships and performance-based marketing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact"><a className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
              Start Free Trial
            </a></Link>
            <Link href="tel:+13024640950"><a className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold transition-colors">
              Call +1 302 464 0950
            </a></Link>
          </div>
        </div>
      </section>
    </Layout>
  )};

export default AffiliateMarketing;