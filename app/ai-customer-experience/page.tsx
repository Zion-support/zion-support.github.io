import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Heart, MessageCircle, Users, Zap, Target, BarChart, Clock, Shield } from 'lucide-react';

const AICustomerExperiencePage: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'Personalized Experiences',
      description: 'AI-powered personalization that creates unique experiences for every customer.',
      benefits: ['Individual recommendations', 'Custom content', 'Behavioral insights', 'Real-time adaptation']
    },
    {
      icon: MessageCircle,
      title: 'Intelligent Support',
      description: '24/7 AI-powered customer support with natural language understanding.',
      benefits: ['Instant responses', 'Multi-language support', 'Context awareness', 'Human handoff']
    },
    {
      icon: Users,
      title: 'Customer Journey Mapping',
      description: 'Complete visibility into customer journeys with AI-driven insights and optimization.',
      benefits: ['Journey analytics', 'Touchpoint optimization', 'Churn prediction', 'Lifetime value tracking']
    },
    {
      icon: BarChart,
      title: 'Experience Analytics',
      description: 'Advanced analytics to measure and improve customer satisfaction and loyalty.',
      benefits: ['Satisfaction tracking', 'NPS monitoring', 'Sentiment analysis', 'ROI measurement']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: 'month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 customers',
        'Basic personalization',
        'Email support',
        'Standard integrations',
        'Basic analytics',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: 'month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 customers',
        'Advanced AI features',
        'Multi-channel support',
        'Priority support',
        'Advanced integrations',
        'Custom workflows',
        'Advanced analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large organizations',
      features: [
        'Unlimited customers',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'On-premise deployment',
        'Custom integrations',
        '24/7 support'
      ],
      popular: false
    }
  ];

  const capabilities = [
    {
      title: 'Predictive Customer Insights',
      description: 'AI analyzes customer behavior to predict needs, preferences, and future actions.',
      icon: '🔮',
      results: ['40% increase in customer satisfaction', '35% improvement in retention', '50% better personalization']
    },
    {
      title: 'Automated Customer Service',
      description: 'Intelligent chatbots and virtual assistants that provide instant, accurate support.',
      icon: '🤖',
      results: ['80% reduction in response time', '60% decrease in support costs', '90% customer satisfaction rate']
    },
    {
      title: 'Real-time Experience Optimization',
      description: 'AI continuously optimizes customer touchpoints for maximum engagement and satisfaction.',
      icon: '⚡',
      results: ['45% improvement in conversion rates', '30% increase in engagement', '25% boost in customer lifetime value']
    },
    {
      title: 'Emotional Intelligence',
      description: 'AI that understands customer emotions and responds with appropriate empathy and solutions.',
      icon: '💝',
      results: ['55% improvement in customer sentiment', '40% reduction in complaints', '65% increase in customer loyalty']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Experience - Zion Tech Group</title>
        <meta name="description" content="Transform your customer experience with AI-powered personalization, intelligent support, and predictive analytics. Create memorable experiences that drive loyalty and growth." />
        <meta name="keywords" content="AI customer experience, customer personalization, customer support, customer analytics, customer journey, customer satisfaction" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-pink-600 to-rose-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Customer Experience
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-pink-100 max-w-3xl mx-auto">
                Create exceptional customer experiences with AI-powered personalization, intelligent support, and predictive insights
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors inline-flex items-center"
                >
                  📞 +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
                >
                  ✉️ Get Free Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                AI-Powered Customer Experience Features
              </h2>
              <p className="text-xl text-gray-600">
                Leverage artificial intelligence to create memorable and personalized customer experiences
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-1">
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

        {/* AI Capabilities */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advanced AI Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Discover how AI transforms every aspect of customer experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{capability.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{capability.title}</h3>
                  <p className="text-gray-600 mb-4">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-green-600">
                        <Star className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-600">
                Choose the plan that fits your customer base and experience goals
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-lg p-8 relative ${plan.popular ? 'ring-2 ring-pink-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-pink-600 mb-2">
                      {plan.price}
                      {plan.period !== 'pricing' && <span className="text-lg text-gray-500">/{plan.period}</span>}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="tel:+13024640950"
                    className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-colors ${
                      plan.popular 
                        ? 'bg-pink-600 text-white hover:bg-pink-700' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Customer Experience?
            </h2>
            <p className="text-xl mb-8 text-pink-100">
              Contact our AI customer experience experts for a free consultation and custom solution design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-pink-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p className="mt-2">🌐 https://ziontechgroup.com</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICustomerExperiencePage;