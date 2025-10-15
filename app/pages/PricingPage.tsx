import React from 'react';
import SEOHead from '../components/SEOHead';

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: 'per month',
      description: 'Perfect for small businesses getting started with AI and IT solutions',
      features: [
        'Basic AI Integration',
        'IT Support (8x5)',
        'Cloud Infrastructure',
        'Security Monitoring',
        'Monthly Reports',
        'Email Support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: 'per month',
      description: 'Ideal for growing businesses that need comprehensive solutions',
      features: [
        'Advanced AI Solutions',
        'IT Support (24x7)',
        'Cloud Migration',
        'Cybersecurity Suite',
        'Custom Development',
        'Priority Support',
        'Quarterly Reviews',
        'Phone & Email Support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'Tailored solutions for large organizations with complex needs',
      features: [
        'Custom AI Development',
        'Dedicated IT Team',
        'Multi-cloud Management',
        'Advanced Security',
        'Micro SaaS Development',
        'Dedicated Account Manager',
        'Monthly Reviews',
        '24/7 Phone Support',
        'On-site Support'
      ],
      popular: false
    }
  ];

  return (
    <>
      <SEOHead
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for AI solutions, IT services, cybersecurity, and cloud infrastructure. Choose the plan that fits your business needs."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Pricing Plans
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core services with flexible options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-slate-800 p-8 rounded-lg relative ${
                  plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="text-blue-400 mr-3">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="/contact" 
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                      : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </a>
              </div>
            ))}
          </div>

          <div className="bg-slate-800 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-xl text-gray-300 mb-8">
              We understand that every business is unique. Let's discuss your specific needs and create a tailored solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Schedule a Consultation
              </a>
              <a 
                href="/about" 
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;