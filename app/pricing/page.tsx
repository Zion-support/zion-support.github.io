import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: 99,
      period: 'month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI Content Generation',
        'Email Support',
        'Up to 5 users',
        '1 AI service included',
        'Basic analytics',
        'Standard templates'
      ],
      popular: false,
      color: 'blue'
    },
    {
      name: 'Professional',
      price: 299,
      period: 'month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'All AI Services',
        'Priority Support',
        'Up to 25 users',
        '3 Micro SaaS solutions',
        'Advanced analytics',
        'Custom integrations',
        'API access',
        'White-label options'
      ],
      popular: true,
      color: 'purple'
    },
    {
      name: 'Enterprise',
      price: 799,
      period: 'month',
      description: 'Complete solution for large organizations',
      features: [
        'All services included',
        '24/7 dedicated support',
        'Unlimited users',
        'All Micro SaaS solutions',
        'Custom AI development',
        'Advanced security',
        'SLA guarantee',
        'Custom training',
        'Dedicated account manager'
      ],
      popular: false,
      color: 'green'
    }
  ];

  const microSaasPricing = [
    {
      name: 'AI Content Generator Pro',
      basic: 99,
      pro: 299,
      enterprise: 799,
      features: ['Blog posts', 'Social media', 'Email campaigns', 'SEO optimization']
    },
    {
      name: 'AI Customer Support Pro',
      basic: 199,
      pro: 599,
      enterprise: 1499,
      features: ['Smart chatbots', 'Ticket management', 'Multi-language', 'Analytics']
    },
    {
      name: 'AI Workflow Automator Pro',
      basic: 299,
      pro: 799,
      enterprise: 1999,
      features: ['Process automation', 'Document processing', 'Integration APIs', 'Analytics']
    },
    {
      name: 'Smart Expense Tracker',
      basic: 19,
      pro: 49,
      enterprise: 99,
      features: ['Receipt scanning', 'AI categorization', 'Expense reports', 'Tax preparation']
    },
    {
      name: 'Inventory Optimizer Pro',
      basic: 149,
      pro: 399,
      enterprise: 999,
      features: ['Demand forecasting', 'Stock optimization', 'Reorder automation', 'Analytics']
    },
    {
      name: 'Email Marketing Pro',
      basic: 49,
      pro: 149,
      enterprise: 399,
      features: ['AI content generation', 'Personalization', 'A/B testing', 'Analytics']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Affordable AI & IT Solutions</title>
        <meta name="description" content="Transparent pricing for our AI services, micro SaaS solutions, and IT services. Starting from $19/month. Contact us at +1 302 464 0950 for custom quotes." />
        <meta name="keywords" content="pricing, AI services pricing, micro SaaS pricing, IT solutions pricing, affordable AI" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Choose the perfect plan for your business needs. All plans include our core AI and IT services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+13024640950" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Call for Custom Quote: +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Email: kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Pricing Plans */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                All plans include access to our AI services, IT solutions, and dedicated support
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`relative bg-white p-8 rounded-2xl shadow-lg border-2 ${
                    plan.popular 
                      ? 'border-purple-500 transform scale-105' 
                      : 'border-gray-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                      <span className="text-xl text-gray-600 ml-1">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-green-500 mr-3">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Micro SaaS Pricing */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Micro SaaS Solutions Pricing</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Individual pricing for our specialized micro SaaS solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {microSaasPricing.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Basic:</span>
                      <span className="font-semibold">${service.basic}/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Pro:</span>
                      <span className="font-semibold">${service.pro}/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Enterprise:</span>
                      <span className="font-semibold">${service.enterprise}/month</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* IT Solutions Pricing */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">IT Solutions Pricing</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional IT services with flexible pricing options
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Infrastructure</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Basic:</span>
                    <span className="font-semibold">$1,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pro:</span>
                    <span className="font-semibold">$5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Enterprise:</span>
                    <span className="font-semibold">$20,000</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  One-time setup and migration costs. Monthly hosting costs vary based on usage.
                </p>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  Get Quote
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Web Development</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Basic:</span>
                    <span className="font-semibold">$3,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pro:</span>
                    <span className="font-semibold">$10,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Enterprise:</span>
                    <span className="font-semibold">$35,000</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Custom web development projects. Includes design, development, and testing.
                </p>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  Get Quote
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile Development</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Basic:</span>
                    <span className="font-semibold">$5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pro:</span>
                    <span className="font-semibold">$15,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Enterprise:</span>
                    <span className="font-semibold">$50,000</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Native iOS and Android apps. Includes App Store optimization and maintenance.
                </p>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I change my plan anytime?</h3>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer custom pricing for large organizations?</h3>
                <p className="text-gray-600">Absolutely! We offer custom pricing and enterprise solutions for large organizations. Contact us at +1 302 464 0950 to discuss your specific needs.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What's included in the free trial?</h3>
                <p className="text-gray-600">Our free trial includes access to all basic features of our AI services and micro SaaS solutions for 14 days. No credit card required.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you provide training and support?</h3>
                <p className="text-gray-600">Yes! All plans include comprehensive documentation, video tutorials, and email support. Pro and Enterprise plans include priority support and custom training sessions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your specific needs and get a custom quote tailored to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Call: +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Email: kleber@ziontechgroup.com
              </a>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Form
              </Link>
            </div>
            <div className="mt-8 text-sm text-blue-200">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Visit us at: <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;