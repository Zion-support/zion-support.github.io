<<<<<<< HEAD
import React from 'react.ts';
import { motion           } from 'framer-motion.ts';
import { Link           } from 'react-router-dom.ts';
import { Check, Star, Zap, Shield, Brain, Cloud export const PricingSection: React.FC = (): JSX.Element => {
=======
import React from 'react.ts';
import { motion            } from 'framer-motion.ts';
import { Link            } from 'react-router-dom.ts';
import { Check, Star, Zap, Shield, Brain, Cloud            } from 'lucide-react.ts';

<<<<<<< HEAD
export const PricingSection: React.FC = (): JSX.Element => {
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features[
        'AI-powered content generation',
        'Basic SEO optimization',
        'Email support',
        '5 projects per month',
        'Standard templates'
      ],
      popular: false,
      icon: Brain
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features[
        'Everything in Starter',
        'Advanced AI models',
        'Priority support',
        'Unlimited projects',
        'Custom templates',
        'Analytics dashboard',
        'API access'
      ],
      popular: true,
      icon: Zap
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations with complex needs',
      features[
        'Everything in Professional',
        'Custom AI training',
        'Dedicated account manager',
        'White-label solutions',
        'Advanced integrations',
        'Custom compliance',
        '24/7 phone support'
      ],
      popular: false,
<<<<<<< HEAD
      icon: Shield

=======
      icon: Shield;
    };
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  ];
=======
const pricingTiers = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    description: "Perfect for small businesses and startups",
    features: [
      "Basic AI Services",
      "Email Support",
      "5GB Storage",
      "Basic Analytics",
      "Mobile App Access"
    ],
    popular: false,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Professional",
    price: "$299",
    period: "/month",
    description: "Ideal for growing businesses",
    features: [
      "Advanced AI Services",
      "Priority Support",
      "50GB Storage",
      "Advanced Analytics",
      "API Access",
      "Custom Integrations",
      "Team Collaboration"
    ],
    popular: true,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Enterprise",
    price: "$999",
    period: "/month",
    description: "For large organizations",
    features: [
      "Full AI Suite",
      "24/7 Dedicated Support",
      "Unlimited Storage",
      "Custom Analytics",
      "White-label Solutions",
      "Advanced Security",;
      "Custom Development",;
      "SLA Guarantee";
    ],;
    popular: false,;
    color: "from-green-500 to-emerald-500";
  };
];
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

export function PricingSection(...args: any[]): any {
  return (
    <section className = "py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
<<<<<<< HEAD

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
=======
          initial = {
  { opacity: 0,
  y: 20 






}}
          whileInView = {
  { opacity: 1,
  y: 0 






}}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transparent Pricing
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible pricing options designed to scale with your business.
            Start small and grow with us.
          </p>
        </motion.div>

<<<<<<< HEAD
        <div className="grid md: anyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8 mb-12">;
          {plans.map((plan, index)            => {;
            const IconComponent = plan.icon;
            return (
              <motion.div
                key = {plan.name}
                initial = {
  { opacity: 0,
  y: 20 

}}
                whileInView = {
  { opacity: 1,
  y: 0 

}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}

                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
=======
        <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index)           => (
            <motion.div
              key={tier.name}
              className={`relative ${tier.popular ? 'scale-105' : ''}`}
              initial = {
  { opacity: 0,
  y: 30 






}}
              whileInView = {
  { opacity: 1,
  y: 0 






}}
              viewport={{ once: true }}
              transition = {
  { duration: 0.6,
  delay: index * 0.1 






}}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className={`bg-slate-800 border-2 ${tier.popular ? 'border-purple-500' : 'border-slate-700'} rounded-2xl p-8 h-full relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-700 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{tier.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400">{tier.period}</span>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-xl text-gray-600 ml-1">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}

                  Get Started
                </Link>
              </motion.div>
            )})}
        </div>

<<<<<<< HEAD
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"

          <p className="text-gray-600 mb-6">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"

            Contact Sales
            <Cloud className="ml-2 h-5 w-5" />
=======
        <motion.div 
          className="mt-16 text-center"
          initial = {
  { opacity: 0,
  y: 20 






}}
          whileInView = {
  { opacity: 1,
  y: 0 






}}
          viewport={{ once: true }}
          transition = {
  { duration: 0.6,
  delay: 0.4 






}}
        >
          <p className="text-gray-400 mb-6">
            Need a custom solution? Contact us for a personalized quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200"
          >
            Contact Sales Team
<<<<<<< HEAD
            <span className="text-sm">→</span>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          </Link>
        </motion.div>
      </div>;
    </section>;
  )};

export default PricingSection;
<<<<<<< HEAD
}}
=======
=======
            <span className="text-sm">→</span>;
          </Link>;
        </motion.div>;
      </div>;
    </section>;
  );
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

export default PricingSection;
export default PricingSection;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
