import { motion } from 'framer-motion';
import Head from 'next/head';
import { Check, X, Star, Zap, Shield, Users } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "$2,000",
    period: "/month",
    description: "Perfect for small businesses getting started with AI",
    features: [
      "Basic AI consultation",
      "Email support",
      "Monthly check-ins",
      "Basic analytics dashboard",
      "Up to 5 team members"
    ],
    limitations: [
      "Limited AI models",
      "Basic customization",
      "Standard response time"
    ],
    popular: false,
    icon: Users
  },
  {
    name: "Professional",
    price: "$5,000",
    period: "/month",
    description: "Ideal for growing businesses with advanced AI needs",
    features: [
      "Advanced AI consultation",
      "Priority support",
      "Weekly check-ins",
      "Advanced analytics dashboard",
      "Up to 25 team members",
      "Custom AI model training",
      "API access"
    ],
    limitations: [
      "Limited custom integrations",
      "Standard SLA"
    ],
    popular: true,
    icon: Zap
  },
  {
    name: "Enterprise",
    price: "$15,000",
    period: "/month",
    description: "Complete AI solution for large enterprises",
    features: [
      "Dedicated AI consultant",
      "24/7 support",
      "Daily check-ins",
      "Enterprise analytics dashboard",
      "Unlimited team members",
      "Full custom AI model training",
      "Full API access",
      "Custom integrations",
      "SLA guarantee",
      "On-site training"
    ],
    limitations: [],
    popular: false,
    icon: Shield
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Choose the perfect plan for your AI needs" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your AI needs. All plans include our core features with different levels of support and customization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ${
                plan.popular ? 'ring-2 ring-blue-500 relative' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <plan.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Features:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {plan.limitations.length > 0 && (
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Limitations:</h4>
                  <ul className="space-y-3">
                    {plan.limitations.map((limitation, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <X className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
                        {limitation}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <button
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}