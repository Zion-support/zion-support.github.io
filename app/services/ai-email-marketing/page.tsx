// import React from 'react';
// Metadata interface for React Helmet
interface Metadata {
  title?: string;
  description?: string;
  keywords?: string;
}
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  BarChart3, 
  Users, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Target,
  TrendingUp,
  Clock,
  Shield,
  Brain
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI-Powered Email Marketing Suite | Zion Tech Group',
  description: 'Revolutionary AI email marketing platform with predictive analytics, automated personalization, and intelligent optimization. Increase open rates by 40% and reduce unsubscribe rates by 60%.',
  keywords: 'AI email marketing, email automation, predictive analytics, email personalization, marketing automation',
};

export default function AIEmailMarketingPage() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Driven Subject Line Optimization',
      description: 'Advanced machine learning algorithms analyze millions of subject lines to optimize for maximum open rates',
      benefits: ['40% higher open rates', 'A/B testing automation', 'Real-time optimization']
    },
    {
      icon: Target,
      title: 'Predictive Send Time Optimization',
      description: 'AI analyzes recipient behavior patterns to determine optimal send times for each individual',
      benefits: ['Personalized send times', 'Increased engagement', 'Reduced fatigue']
    },
    {
      icon: BarChart3,
      title: 'Automated A/B Testing with ML',
      description: 'Intelligent testing system that continuously optimizes email content, design, and timing',
      benefits: ['Continuous improvement', 'Data-driven decisions', 'Automated optimization']
    },
    {
      icon: Users,
      title: 'Advanced Segmentation Algorithms',
      description: 'AI-powered customer segmentation based on behavior, preferences, and engagement patterns',
      benefits: ['Precise targeting', 'Higher conversion rates', 'Reduced spam complaints']
    },
    {
      icon: TrendingUp,
      title: 'Real-time Engagement Scoring',
      description: 'Live scoring system that predicts and tracks email engagement across all touchpoints',
      benefits: ['Real-time insights', 'Predictive analytics', 'Performance tracking']
    },
    {
      icon: Shield,
      title: 'Compliance & Deliverability',
      description: 'Advanced spam detection and compliance features to ensure maximum inbox placement',
      benefits: ['Higher deliverability', 'GDPR compliance', 'Anti-spam protection']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$299/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 10,000 emails/month',
        'Basic AI optimization',
        'Standard templates',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$899/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 100,000 emails/month',
        'Advanced AI optimization',
        'Custom templates',
        'Priority support',
        'Advanced analytics',
        'A/B testing automation',
        'Segmentation tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited emails',
        'Full AI optimization suite',
        'Custom integrations',
        'Dedicated support',
        'Advanced reporting',
        'Multi-user access',
        'API access',
        'Custom workflows'
      ],
      popular: false
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Star className="h-8 w-8 text-yellow-400 mr-3" />
            <span className="text-lg font-semibold text-blue-100">AI-Powered Marketing</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI Email Marketing Suite
          </h1>
          <p className="text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Revolutionize your email marketing with AI-driven optimization, predictive analytics, 
            and automated personalization that delivers measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.phone}`}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Demo
            </a>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transform Your Email Marketing Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform delivers unprecedented improvements in email marketing performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <div className="text-4xl font-bold text-green-600 mb-2">40%</div>
              <p className="text-gray-700 font-semibold">Higher Open Rates</p>
              <p className="text-sm text-gray-600 mt-2">AI-optimized subject lines and send times</p>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
              <p className="text-gray-700 font-semibold">Reduced Unsubscribes</p>
              <p className="text-sm text-gray-600 mt-2">Intelligent segmentation and personalization</p>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
              <p className="text-gray-700 font-semibold">Time Savings</p>
              <p className="text-sm text-gray-600 mt-2">Automated optimization and testing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced AI Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence capabilities that set our platform apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white rounded-xl p-8 shadow-lg ${tier.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{tier.price}</div>
                  <p className="text-gray-600">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  tier.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need a custom solution? Contact us for enterprise pricing.</p>
            <a
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              <span>Call {contactInfo.phone}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quick Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get up and running with our AI email marketing platform in just 2-3 weeks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Integration</h3>
              <p className="text-gray-600">Connect your existing email lists and CRM systems</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Training</h3>
              <p className="text-gray-600">Our AI learns from your historical email data</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Optimization Setup</h3>
              <p className="text-gray-600">Configure AI optimization rules and preferences</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Launch & Monitor</h3>
              <p className="text-gray-600">Go live with AI-powered email campaigns</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already using our AI-powered email marketing platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.phone}`}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Us
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>📍 {contactInfo.address}</p>
          </div>
        </div>
      </section>
    </div>
  );
}