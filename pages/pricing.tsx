import Head from 'next/head';
import { motion } from 'framer-motion';
import { CheckCircle, Star, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';

const plans = [
  {
    name: 'Starter',
    price: '$2,000',
    period: '/month',
    description: 'Perfect for small businesses getting started with digital transformation.',
    features: [
      'Basic AI integration',
      'Cloud migration support',
      'Monthly consultations',
      'Email support',
      'Basic analytics'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '$5,000',
    period: '/month',
    description: 'Ideal for growing businesses that need comprehensive technology solutions.',
    features: [
      'Advanced AI solutions',
      'Full cloud migration',
      'Weekly consultations',
      'Priority support',
      'Advanced analytics',
      'Custom integrations',
      'Training sessions'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations with complex requirements.',
    features: [
      'Custom AI development',
      'Multi-cloud strategy',
      'Dedicated support team',
      '24/7 support',
      'Custom analytics',
      'Full integration suite',
      'On-site training',
      'SLA guarantees'
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <Layout>
      <Head>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Choose the perfect plan for your business needs. Flexible pricing options for every organization." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Pricing Plans
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Choose the perfect plan for your business needs. Flexible pricing options for every organization.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                  <motion.div
                    key={index}
                    className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 relative ${
                      plan.popular ? 'ring-2 ring-blue-500' : ''
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <div className="flex items-baseline justify-center mb-4">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-500 ml-1">{plan.period}</span>
                      </div>
                      <p className="text-gray-600">{plan.description}</p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center ${
                        plan.popular
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Contact us to discuss your specific requirements and get a tailored quote.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}