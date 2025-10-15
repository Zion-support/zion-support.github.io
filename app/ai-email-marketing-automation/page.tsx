import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, TrendingUp } from 'lucide-react';

const AIEmailMarketingAutomationPage: React.FC = () => {
  const features = [
    'AI-powered email content generation',
    'Advanced segmentation & targeting',
    'Automated drip campaigns',
    'A/B testing with AI optimization',
    'Real-time personalization',
    'Multi-channel campaign management',
    'Advanced analytics & reporting',
    'Integration with 100+ platforms',
    'Compliance & deliverability tools',
    '24/7 customer support'
  ];

  const benefits = [
    'Increase email open rates by 65%',
    'Boost click-through rates by 80%',
    'Reduce campaign setup time by 90%',
    'Improve conversion rates by 45%',
    'Save 20+ hours per week on email marketing',
    'Scale campaigns without additional resources'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49/mo',
      originalPrice: '$79/mo',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10,000 emails/month',
        'Basic AI content generation',
        '5 automated campaigns',
        'Standard templates',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99/mo',
      originalPrice: '$149/mo',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 50,000 emails/month',
        'Advanced AI features',
        'Unlimited campaigns',
        'Custom templates',
        'Priority support',
        'Advanced analytics',
        'A/B testing',
        'Integration with 50+ platforms'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199/mo',
      originalPrice: '$299/mo',
      description: 'For large organizations',
      features: [
        'Unlimited emails',
        'Full AI suite',
        'Custom automation workflows',
        'White-label options',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced compliance tools',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'E-commerce',
      description: 'Drive sales with personalized product recommendations and abandoned cart recovery',
      icon: <div className="w-6 h-6 bg-orange-500 rounded" />,
      results: 'Average 35% increase in revenue'
    },
    {
      title: 'SaaS',
      description: 'Onboard users and reduce churn with targeted email sequences',
      icon: <div className="w-6 h-6 bg-cyan-500 rounded" />,
      results: '40% reduction in churn rate'
    },
    {
      title: 'Education',
      description: 'Engage students with course updates and learning reminders',
      icon: <div className="w-6 h-6 bg-indigo-500 rounded" />,
      results: '60% improvement in course completion'
    },
    {
      title: 'Healthcare',
      description: 'Send appointment reminders and health tips to patients',
      icon: <div className="w-6 h-6 bg-red-500 rounded" />,
      results: '50% reduction in no-shows'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Email Marketing Automation - Intelligent Email Campaigns | Zion Tech Group</title>
        <meta name="description" content="Transform your email marketing with AI-powered automation. Increase open rates by 65%, boost conversions by 45%, and save 20+ hours weekly with our intelligent email platform." />
        <meta name="keywords" content="AI email marketing, email automation, marketing automation, email campaigns, AI content generation, email personalization" />
        <meta property="og:title" content="AI Email Marketing Automation - Intelligent Email Campaigns" />
        <meta property="og:description" content="Transform your email marketing with AI-powered automation. Increase open rates by 65% and boost conversions by 45%." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-email-marketing-automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-email-marketing-automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Email Marketing
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}Automation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your email marketing with AI-powered automation that increases open rates by 65%, 
              boosts conversions by 45%, and saves you 20+ hours every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 flex items-center group"
              >
                Start Free Trial
                <div className="w-6 h-6 bg-blue-500 rounded" />
              </Link>
              <Link
                to="#pricing"
                className="border-2 border-white/30 hover:border-purple-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center group"
              >
                View Pricing
                <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-400 mb-2">65%</div>
                <div className="text-gray-300 text-sm">Higher Open Rates</div>
              </div>
              <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-cyan-400 mb-2">45%</div>
                <div className="text-gray-300 text-sm">More Conversions</div>
              </div>
              <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-green-400 mb-2">20+</div>
                <div className="text-gray-300 text-sm">Hours Saved Weekly</div>
              </div>
              <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-orange-400 mb-2">90%</div>
                <div className="text-gray-300 text-sm">Faster Setup</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered email marketing platform includes everything you need to create, 
              send, and optimize high-converting email campaigns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {feature}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of businesses that have transformed their email marketing with our AI platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {benefit}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI email marketing automation works across all industries and business types.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105 group">
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {useCase.description}
                </p>
                <div className="text-sm text-purple-400 font-medium">
                  {useCase.results}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include 14-day free trial and no setup fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                plan.popular ? 'ring-2 ring-purple-500 bg-slate-700/50' : ''
              }`}>
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                    <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white'
                      : 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses using our AI email marketing automation to increase revenue, 
            save time, and grow their customer base.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Free Trial
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIEmailMarketingAutomationPage;