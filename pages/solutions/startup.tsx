<<<<<<< HEAD
import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
=======
import Head from 'next/head';
>>>>>>> pr-11913
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Zap, 
<<<<<<< HEAD
  DollarSign, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Target, 
  TrendingUp 
=======
  Target, 
  Settings,
  Target as TargetIcon,
  TrendingUp
>>>>>>> pr-11913
} from 'lucide-react';

const features = [
  {
<<<<<<< HEAD
    icon: Rocket,
    title: 'Rapid Prototyping',
    description: 'Quick MVP development to validate your ideas and get to market fast'
  },
  {
    icon: Zap,
    title: 'Fast Development',
    description: 'Accelerated development cycles to keep up with startup pace'
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective',
    description: 'Affordable solutions that fit startup budgets'
  },
  {
    icon: Users,
    title: 'Scalable Architecture',
    description: 'Built to grow with your user base and business needs'
  }
];

export default function StartupSolutionsPage() {
  return (
    <>
      <Head>
        <title>Startup Solutions - Zion Tech Group</title>
        <meta name="description" content="Technology solutions designed for startups and growing companies." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Startup Solutions</h1>
              <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
                Technology solutions designed for startups and growing companies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Startup Features</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to launch and scale your startup.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-orange-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Launch Your Startup?
              </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our startup solutions can help you succeed.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Sales
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-orange-600 transition-colors font-semibold"
                >
                  View Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
=======
    title: 'Rapid Development',
    description: 'Get your MVP to market faster with our agile development approach.',
    icon: Rocket,
    benefits: ['2-4 week sprints', 'Continuous deployment', 'Real-time feedback', 'Quick iterations']
  },
  {
    title: 'Cost-Effective Solutions',
    description: 'Startup-friendly pricing and flexible payment options.',
    icon: Target,
    benefits: ['Flexible pricing', 'No long-term contracts', 'Pay-as-you-scale', 'Startup discounts']
  },
  {
    title: 'Scalable Architecture',
    description: 'Built to grow with your business from day one.',
    icon: Settings,
    benefits: ['Cloud-native design', 'Auto-scaling', 'Microservices', 'Future-proof tech']
  },
  {
    title: 'Growth Analytics',
    description: 'Data-driven insights to fuel your growth.',
    icon: TrendingUp,
    benefits: ['User analytics', 'Performance metrics', 'Growth tracking', 'A/B testing']
  }
];

const pricingTiers = [
  {
    name: 'Starter',
    price: '$2,999',
    period: 'per month',
    features: ['Basic features', 'Email support', 'Standard hosting', 'Monthly reports']
  },
  {
    name: 'Growth',
    price: '$4,999',
    period: 'per month',
    features: ['Advanced features', 'Priority support', 'Premium hosting', 'Weekly reports']
  },
  {
    name: 'Scale',
    price: 'Custom',
    period: 'pricing',
    features: ['Enterprise features', '24/7 support', 'Dedicated hosting', 'Real-time analytics']
  }
];

export default function Startup() {
  return (
    <Layout>
      <Head>
        <title>Startup Solutions - Zion Tech Group</title>
        <meta name="description" content="Technology solutions designed specifically for startups and growing businesses." />
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
                Startup Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Technology solutions designed specifically for startups and growing businesses.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Why Choose Us for Your Startup?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start mb-6">
                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <IconComponent className="w-8 h-8 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="text-sm text-gray-600">
                              • {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Startup-Friendly Pricing
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingTiers.map((tier, index) => (
                  <motion.div
                    key={index}
                    className={`bg-white rounded-xl shadow-lg p-8 ${
                      tier.name === 'Growth' ? 'ring-2 ring-blue-500' : ''
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                      <div className="text-4xl font-bold text-blue-600 mb-2">{tier.price}</div>
                      <div className="text-gray-600">{tier.period}</div>
                    </div>
                    
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full mt-6 py-3 rounded-lg font-medium transition-colors duration-300 ${
                      tier.name === 'Growth'
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}>
                      {tier.name === 'Custom' ? 'Contact Us' : 'Get Started'}
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Launch Your Startup?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Let us help you build the technology foundation for your startup's success.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                Start Your Project
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
>>>>>>> pr-11913
  );
}