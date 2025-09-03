import type { NextPage } from 'next';
import Layout from '../../components/Layout';
import Link from 'next/link';

const AISEOOptimization: NextPage = () => {
  const features = [
    {
      title: 'Content Analysis',
      description: 'AI-powered analysis of your content for SEO optimization opportunities.',
      icon: '🔍'
    }, {
      title: 'Keyword Research',
      description: 'Advanced keyword research and competitor analysis using AI algorithms.',
      icon: '🎯'
    }, {
      title: 'On-Page Optimization',
      description: 'Automated suggestions for title tags, meta descriptions, and content structure.',
      icon: '📝'
    }, {
      title: 'Technical SEO',
      description: 'Comprehensive technical SEO audits and optimization recommendations.',
      icon: '⚙️'
    }, {
      title: 'Content Generation',
      description: 'AI-generated SEO-optimized content that ranks well in search engines.',
      icon: '✍️'
    }, {
      title: 'Performance Tracking',
      description: 'Real-time tracking of SEO performance with actionable insights.',
      icon: '📊'
    }
  ];

  const benefits = [
    'Increase organic traffic by up to 300%',
    'Improve search engine rankings with AI-optimized content',
    'Reduce SEO analysis time by 90%',
    'Get data-driven recommendations for better performance',
    'Scale content optimization across multiple pages',
    'Stay ahead of SEO algorithm changes'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      features: [
        'Up to 50 pages analysis',
        'Basic keyword research',
        'On-page optimization',
        'Monthly reports',
        'Email support',
        'Standard integrations',
        'Basic content suggestions'
      ],
      popular: false
    }, {
      name: 'Professional',
      price: '$499',
      period: '/month',
      features: [
        'Up to 200 pages analysis',
        'Advanced keyword research',
        'Technical SEO audits',
        'Weekly reports',
        'Priority support',
        'All integrations',
        'AI content generation',
        'Competitor analysis'
      ],
      popular: true
    }, {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      features: [
        'Unlimited pages analysis',
        'Custom AI models',
        'White-label solution',
        'Dedicated account manager',
        'Custom integrations',
        'Real-time monitoring',
        '24/7 phone support',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  return (
    <Layout 
      title="AI SEO Optimization - Zion Tech Group"
      description="Boost your search engine rankings with AI-powered SEO optimization. Get data-driven insights, automated content optimization, and comprehensive SEO analysis."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-900 via-orange-900 to-red-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI SEO Optimization
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Boost your search engine rankings with AI-powered SEO optimization. 
              Get data-driven insights, automated content optimization, and comprehensive SEO analysis.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact"><a className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </a></Link>
              <Link href="#pricing"><a className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-yellow-900 px-8 py-4 rounded-lg font-semibold transition-colors">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">SEO Optimization Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI-powered SEO tools to improve your search rankings
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our AI SEO Platform?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our AI-powered SEO platform analyzes your content, identifies optimization opportunities, 
                and provides actionable recommendations to improve your search engine rankings.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">SEO Performance</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg">
                  <span className="font-medium">Organic Traffic</span>
                  <span className="text-yellow-600 font-bold">+300%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="font-medium">Search Rankings</span>
                  <span className="text-green-600 font-bold">+150%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="font-medium">Analysis Time</span>
                  <span className="text-blue-600 font-bold">-90%</span>
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
              Choose the plan that best fits your SEO optimization needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl p-8 shadow-lg border-2 ${plan.popular ? 'border-yellow-500 relative' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-yellow-600 mb-2">
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
                      ? 'bg-yellow-600 hover:bg-yellow-700 text-white' 
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
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Boost Your Search Rankings?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start improving your SEO performance with AI-powered optimization tools.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact"><a className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
              Start Free Trial
            </a></Link>
            <Link href="tel:+13024640950"><a className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-4 rounded-lg font-semibold transition-colors">
              Call +1 302 464 0950
            </a></Link>
          </div>
        </div>
      </section>
    </Layout>
  )};

export default AISEOOptimization;