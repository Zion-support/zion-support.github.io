<<<<<<< HEAD
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Check, Star, Zap } from 'lucide-react'

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Basic AI consultation',
        'Email support',
        'Monthly reports',
        'Basic analytics',
        '5 hours of support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced AI solutions',
        'Priority support',
        'Weekly reports',
        'Advanced analytics',
        '20 hours of support',
        'Custom integrations',
        'Training sessions'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Full AI suite',
        '24/7 dedicated support',
        'Real-time reports',
        'Custom analytics',
        'Unlimited support hours',
        'Custom development',
        'Dedicated account manager',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
>>>>>>> cursor/website-audit-and-update-with-deployment-635f
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Pricing</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from Starter, Professional, or Enterprise plans. Custom solutions available. Get started today." />
        <meta name="keywords" content="AI pricing, IT services pricing, cloud solutions cost, enterprise AI pricing, custom development pricing" />
      </Helmet>

<<<<<<< HEAD
export default PricingPage;
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Pricing</span>
            </h1>
    </div>
  );
};

export default PricingPage;
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a9d9
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-635f
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core AI and IT services.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
<<<<<<< HEAD
              <div
                key={index}
                className={`relative cyber-card ${
                  plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a9d9
                }`}
              >
=======
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border ${
                plan.popular ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' : 'border-white/20'
              }`}>
>>>>>>> cursor/website-audit-and-update-with-deployment-635f
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

<<<<<<< HEAD
        </div>
      </section>

>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a9d9
=======
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/30'
                }`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;
>>>>>>> cursor/website-audit-and-update-with-deployment-635f
