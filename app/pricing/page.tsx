import React from 'react';
import { Check, Star, Zap, Shield, Globe, Brain } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticButton from '../components/FuturisticButton';

const PricingPage = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Up to 1,000 AI requests/month',
        'Basic analytics dashboard',
        'Email support',
        'Standard security features',
        '1 user account',
        'Basic integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Up to 10,000 AI requests/month',
        'Advanced analytics & reporting',
        'Priority support',
        'Advanced security features',
        'Up to 5 user accounts',
        'All integrations',
        'Custom workflows',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      features: [
        'Unlimited AI requests',
        'Custom analytics dashboard',
        '24/7 dedicated support',
        'Enterprise security',
        'Unlimited user accounts',
        'Custom integrations',
        'White-label options',
        'Dedicated account manager',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  const microSaasPlans = [
    {
      name: 'Zion Analytics Pro',
      price: '$299',
      period: '/month',
      description: 'AI-powered business intelligence platform',
      icon: <Brain className="w-6 h-6" />,
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'API access']
    },
    {
      name: 'Zion Security Shield',
      price: '$499',
      period: '/month',
      description: 'Advanced cybersecurity protection',
      icon: <Shield className="w-6 h-6" />,
      features: ['AI threat detection', 'Automated response', '24/7 monitoring', 'Compliance reporting']
    },
    {
      name: 'Zion Cloud Vault',
      price: '$99',
      period: '/month',
      description: 'Secure cloud storage solution',
      icon: <Globe className="w-6 h-6" />,
      features: ['End-to-end encryption', 'Unlimited storage', 'Version control', 'Team collaboration']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Pricing - Zion Tech Group | Affordable AI and IT Solutions"
        description="Transparent pricing for AI services, IT solutions, and micro SAAS products. Choose the perfect plan for your business needs."
        keywords="pricing, AI services pricing, IT solutions cost, micro SAAS pricing, business plans"
        canonical="https://ziontechgroup.com/pricing"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Simple, Transparent Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our core features with no hidden fees.
          </p>
        </div>
      </section>

      {/* Main Pricing Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r ${plan.color} flex items-center justify-center text-white`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <FuturisticButton
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                  to="/contact"
                >
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use software solutions that can transform your business operations immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSaasPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4">
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                    <p className="text-cyan-400 font-medium">{plan.price}{plan.period}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  variant="outline"
                  size="sm"
                  className="w-full"
                  to="/contact"
                >
                  Learn More
                </FuturisticButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">Can I change my plan anytime?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">Is there a free trial available?</h3>
              <p className="text-gray-300">We offer a 14-day free trial for all our plans. No credit card required to get started.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-300">We accept all major credit cards, PayPal, and bank transfers for enterprise customers.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">Do you offer custom pricing for large organizations?</h3>
              <p className="text-gray-300">Yes, we offer custom enterprise solutions with volume discounts and dedicated support. Contact us to discuss your specific needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our solutions to drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              variant="primary"
              size="lg"
              to="/contact"
            >
              Start Your Free Trial
            </FuturisticButton>
            <FuturisticButton
              variant="outline"
              size="lg"
              to="/demo"
            >
              Schedule a Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;