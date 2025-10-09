import React from 'react';
import { Mail, CheckCircle, ArrowRight } from 'lucide-react';

const AIEmailMarketingPage: React.FC = () => {
  const features = [
    {
      icon: Mail,
      title: 'AI Content Generation',
      description: 'Automatically create compelling email content that resonates with your audience'
    },
    {
      icon: Target,
      title: 'Smart Segmentation',
      description: 'AI-powered audience segmentation for highly targeted campaigns'
    },
    {
      icon: Send,
      title: 'Optimal Send Times',
      description: 'AI determines the best time to send emails for maximum engagement'
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'Forecast campaign performance and optimize for better results'
    },
    {
      icon: Users,
      title: 'Behavioral Triggers',
      description: 'Automated email sequences based on user behavior and actions'
    },
    {
      icon: TrendingUp,
      title: 'A/B Testing',
      description: 'Intelligent A/B testing with AI-powered optimization'
    }
  ];

  const benefits = [
    'Increase open rates by 200%',
    'Boost click-through rates by 150%',
    'Reduce unsubscribe rates by 60%',
    'Improve conversion rates by 180%',
    'Save 15+ hours per week'
  ];

  const emailTypes = [
    { name: 'Welcome Series', icon: '👋', description: 'Onboard new subscribers' },
    { name: 'Newsletter', icon: '📰', description: 'Regular updates and content' },
    { name: 'Promotional', icon: '🎯', description: 'Sales and special offers' },
    { name: 'Transactional', icon: '📧', description: 'Order confirmations and receipts' },
    { name: 'Re-engagement', icon: '🔄', description: 'Win back inactive subscribers' },
    { name: 'Educational', icon: '📚', description: 'Value-driven content series' }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '1,000 subscribers',
        '10,000 emails/month',
        'Basic AI features',
        'Email templates',
        'Basic analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '10,000 subscribers',
        '100,000 emails/month',
        'Advanced AI features',
        'Custom templates',
        'Advanced analytics',
        'Priority support',
        'A/B testing'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited subscribers',
        'Unlimited emails',
        'Full AI suite',
        'White-label options',
        'Custom integrations',
        'Dedicated support',
        'Advanced automation'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 rounded-full text-green-400 text-sm font-medium mb-6">
              <Mail className="w-4 h-4 mr-2" />
              AI-Powered Email Marketing
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Email Marketing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your email marketing with AI that creates, optimizes, and personalizes 
              campaigns to maximize engagement and drive conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-300 flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Email Types Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Email Types Covered
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create any type of email campaign with AI assistance
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {emailTypes.map((type, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{type.icon}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{type.name}</h3>
                <p className="text-gray-400 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge AI technology to optimize your email marketing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of businesses who have transformed their email marketing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <p className="text-white font-semibold">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Email Marketing?
            </h3>
            <p className="text-gray-300 mb-6">
              Start your free trial today and experience the power of AI-driven email marketing
            </p>
            <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-300">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your email marketing needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-green-400/60 ring-2 ring-green-400/20' 
                  : 'border-slate-700/50'
              }`}>
                {plan.popular && (
                  <div className="bg-green-500 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white hover:from-green-600 hover:to-teal-700'
                    : 'border-2 border-slate-600 text-white hover:border-green-400 hover:text-green-400'
                }`}>
                  {plan.popular ? 'Start Free Trial' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-500/10 to-teal-500/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using AI Email Marketing to grow their revenue
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIEmailMarketingPage;