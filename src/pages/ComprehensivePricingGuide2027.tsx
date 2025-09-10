import React from 'react';
import SEO from '../components/SEO';

const ComprehensivePricingGuide2027: React.FC = () => {
  const pricingTiers = [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for small businesses getting started with AI",
      features: [
        "Basic AI Content Generation",
        "Email Support",
        "5 API Calls per minute",
        "Standard Templates",
        "Basic Analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Advanced AI Services",
        "Priority Support",
        "50 API Calls per minute",
        "Custom Templates",
        "Advanced Analytics",
        "Team Collaboration",
        "Custom Integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      description: "Tailored solutions for large organizations",
      features: [
        "All AI Services",
        "24/7 Dedicated Support",
        "Unlimited API Calls",
        "Fully Custom Solutions",
        "Enterprise Analytics",
        "Advanced Security",
        "SLA Guarantee",
        "Custom Training"
      ],
      popular: false
    }
  ];

  const addOnServices = [
    {
      name: "AI Model Training",
      price: "$500",
      description: "Custom AI model training for your specific use case"
    },
    {
      name: "Data Processing",
      price: "$200",
      description: "Professional data cleaning and preparation services"
    },
    {
      name: "Custom Integration",
      price: "$1,000",
      description: "Custom API integration with your existing systems"
    },
    {
      name: "Priority Support",
      price: "$100",
      description: "24/7 priority support for critical issues"
    }
  ];

  return (
    <>
      <SEO 
        title="Comprehensive Pricing Guide 2027 - Zion Tech Group"
        description="Complete pricing information for all our AI and technology services in 2027. Find the perfect plan for your business needs."
        keywords="pricing guide, 2027, ai services pricing, technology pricing, business plans"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Comprehensive Pricing Guide 2027
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Transparent, flexible pricing for all our AI and technology services. 
                Choose the plan that best fits your business needs and scale as you grow.
              </p>
            </div>

            {/* Pricing Tiers */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Choose Your Plan</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {pricingTiers.map((tier, index) => (
                  <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                    tier.popular 
                      ? 'border-purple-400 scale-105' 
                      : 'border-white/20 hover:border-purple-400'
                  }`}>
                    {tier.popular && (
                      <div className="text-center mb-4">
                        <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-300 ml-2">{tier.period}</span>
                    </div>
                    <p className="text-gray-300 mb-6">{tier.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <span className="text-green-400 mr-3">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full font-semibold py-3 px-6 rounded-lg transition-colors ${
                      tier.popular
                        ? 'bg-purple-600 hover:bg-purple-700 text-white'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                    }`}>
                      {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Add-on Services */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Add-on Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {addOnServices.map((service, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                    <div className="text-2xl font-bold text-purple-400 mb-3">{service.price}</div>
                    <p className="text-gray-300 text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Pricing FAQ</h2>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-lg font-bold text-white mb-3">Can I change my plan anytime?</h3>
                  <p className="text-gray-300">Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-lg font-bold text-white mb-3">Is there a free trial?</h3>
                  <p className="text-gray-300">We offer a 14-day free trial for all plans. No credit card required to get started.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-lg font-bold text-white mb-3">What payment methods do you accept?</h3>
                  <p className="text-gray-300">We accept all major credit cards, PayPal, and bank transfers for enterprise customers.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-lg font-bold text-white mb-3">Do you offer discounts for annual billing?</h3>
                  <p className="text-gray-300">Yes! Save 20% when you pay annually. Contact our sales team for custom enterprise pricing.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using our AI services to transform their operations. 
                Start your free trial today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Start Free Trial
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-colors border border-white/20">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComprehensivePricingGuide2027;