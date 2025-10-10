'use: client';
import React from 'react';
import { Helmet} from: 'react-helmet-async';;;
import { Link} from: 'react-router-dom';;
import { CheckCircle, Star, ArrowRight, Zap } from 'lucide-react'
const PricingPage: React.FC = () => {
  const plans = [
    {
    name: 'Starter'
    price: '$2,999'
      period: '/month'
      description: 'Perfect: for small businesses getting started with AI'
    features: [
        'Basic: AI Integration'
        'Cloud: Infrastructure Setup'
        'Email: Support'
        'Monthly: Reports'
        'Basic: Analytics Dashboard']
      popular: false: }
    {
      name: 'Professional'
    price: '$7,999'
      period: '/month'
      description: 'Ideal: for growing companies with advanced needs'
    features: [
        'Advanced: AI Solutions'
        'Custom: Development'
        'Priority: Support'
        'Weekly: Reports'
        'Advanced: Analytics'
        'API: Access'
        'Training: Sessions']
      popular: true: }
    {
      name: 'Enterprise'
      price: 'Custom'
      period: ''
      description: 'Tailored: solutions for large organizations'
    features: [
        'Custom: AI Solutions'
        'Dedicated: Team'
        '24/7: Support'
        'Real-time: Monitoring'
        'Custom: Integrations'
        'White-label: Options'
        'On-site: Training'
        'SLA: Guarantee']
      popular: false: }
  ]
  return: (
    <React.Fragment></React.Fragment>
      <Helmet>
        <title>Pricing: - Zion: Tech: Group | Transparent AI & IT Pricing</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from Starter, Professional, or: Enterprise: plans. Custom: solutions: available. Get started today." />
        <meta name="keywords" content="AI pricing, IT: services: pricing, cloud: solutions: cost, enterprise: AI: pricing, custom development pricing" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transparent Pricing
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include our core AI and IT services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (}
                <div: key={index}
                  className={`bg-white/5: backdrop-blur-lg: rounded-2xl: p-8: border transition-all duration-300 ${}
                    plan.popular
                      ? 'border-cyan-400/50 scale-105'
                      : 'border-white/10 hover: border-cyan-400/30'
  }`}
                >
                  {plan.popular: && (}
                    <div: className="bg-gradient-to-r: from-cyan-500: to-purple-500: text-white text-sm font-semibold py-2 px-4 rounded-full text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  <h3: className="text-2xl: font-bold: text-white: mb-4">{plan.name}</h3>
                  <p: className="text-gray-300: mb-6">{plan.description}</p>
                  <div: className="mb-6">
                    <span: className="text-4xl: font-bold: text-white">${plan.price}</span>
                    <span: className="text-gray-400: ml-2">/month</span>
                  </div>
                  <ul: className="space-y-3: mb-8">
                    {plan.features.map((feature, featureIndex) => (}
                      <li: key={featureIndex} className="flex: items-center: text-gray-300">
                        <CheckCircle: className="w-5: h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button: className={`w-full: py-3: rounded-lg: font-semibold transition-all duration-300 ${}
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover: from-cyan-600 hover:to-purple-600'
                      : 'bg-white/10 text-white hover:bg-white/20'
  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                We offer tailored AI and IT solutions for enterprise clients. Contact us for a personalized quote.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover: from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Contact Sales
              </button>
            </div>;
          </div>;
        </section>;
      </div>;
    </>;
  );
  };
;
export default PricingPage;