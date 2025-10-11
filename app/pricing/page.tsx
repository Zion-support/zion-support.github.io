import React from 'react';
import { CheckCircle, Star, Zap, Shield, Crown } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const microSaasPlans = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 1,000 AI-generated content pieces',
        'Basic SEO optimization',
        'Email support',
        'Standard templates',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      icon: <Shield className="w-8 h-8 text-green-500" />,
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 AI-generated content pieces',
        'Advanced SEO optimization',
        'Brand voice training',
        'Priority support',
        'Advanced analytics',
        'Multi-language support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      icon: <Crown className="w-8 h-8 text-purple-500" />,
      description: 'For large organizations with high volume needs',
      features: [
        'Unlimited AI-generated content',
        'Custom AI model training',
        'Dedicated account manager',
        '24/7 phone support',
        'Custom integrations',
        'White-label options',
        'Advanced security features'
      ],
      popular: false
    }
  ];

  const itServicePlans = [
    {
      name: 'Basic IT Support',
      price: '$1,500',
      period: '/month',
      description: 'Essential IT support for small businesses',
      features: [
        'Remote support (8x5)',
        'Basic monitoring',
        'Email support',
        'Monthly reports',
        'Software updates'
      ]
    },
    {
      name: 'Professional IT',
      price: '$3,500',
      period: '/month',
      description: 'Comprehensive IT management',
      features: [
        '24/7 monitoring',
        'Priority support',
        'Proactive maintenance',
        'Security management',
        'Backup solutions',
        'Network optimization'
      ]
    },
    {
      name: 'Enterprise IT',
      price: 'Custom',
      period: 'pricing',
      description: 'Full-scale IT transformation',
      features: [
        'Dedicated team',
        'Custom solutions',
        'Disaster recovery',
        'Compliance management',
        'Advanced security',
        'Cloud migration'
      ]
    }
  ];

  const aiServicePlans = [
    {
      name: 'AI Consultation',
      price: '$2,500',
      period: '/project',
      description: 'AI strategy and implementation planning',
      features: [
        'AI readiness assessment',
        'Custom AI strategy',
        'Technology recommendations',
        'Implementation roadmap',
        'ROI projections'
      ]
    },
    {
      name: 'AI Development',
      price: '$10,000',
      period: '/project',
      description: 'Custom AI solution development',
      features: [
        'Custom model development',
        'Data preprocessing',
        'Model training & testing',
        'API integration',
        'Documentation & training',
        '3 months support'
      ]
    },
    {
      name: 'AI Managed Service',
      price: '$5,000',
      period: '/month',
      description: 'Ongoing AI operations and optimization',
      features: [
        'Model monitoring',
        'Performance optimization',
        'Continuous learning',
        'Regular updates',
        '24/7 support',
        'Scalability management'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing Plans - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI services, IT solutions, and micro SAAS tools. Choose the plan that fits your business needs." />
        <meta name="keywords" content="pricing, AI services pricing, IT services cost, micro SAAS pricing, technology solutions" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business. All plans include our 30-day money-back guarantee.
            </p>
          </div>

          {/* Micro SAAS Pricing */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Micro SAAS Services</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Affordable AI-powered tools for modern businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {microSaasPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'border-purple-500 bg-white/15' : 'border-white/20'
                }`}>
                  {plan.popular && (
                    <div className="flex items-center justify-center mb-4">
                      <div className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <div className="mb-4 flex justify-center">{plan.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* IT Services Pricing */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">IT Services</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Enterprise-grade IT solutions and support
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {itServicePlans.map((plan, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact"
                    className="w-full py-3 px-6 rounded-lg font-semibold text-center bg-white/20 text-white hover:bg-white/30 transition-colors"
                  >
                    Contact Sales
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* AI Services Pricing */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Services</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Custom AI solutions and ongoing support
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aiServicePlans.map((plan, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact"
                    className="w-full py-3 px-6 rounded-lg font-semibold text-center bg-white/20 text-white hover:bg-white/30 transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-3">Do you offer custom pricing?</h3>
                  <p className="text-gray-300 text-sm">Yes, we offer custom pricing for enterprise clients and large-scale projects. Contact us for a personalized quote.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-3">Is there a free trial available?</h3>
                  <p className="text-gray-300 text-sm">Yes, all our micro SAAS services come with a 14-day free trial. No credit card required.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-3">What's included in support?</h3>
                  <p className="text-gray-300 text-sm">Support varies by plan but includes email support, documentation, and for higher tiers, phone and chat support.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-3">Can I change plans anytime?</h3>
                  <p className="text-gray-300 text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and find the perfect plan for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PricingPage;