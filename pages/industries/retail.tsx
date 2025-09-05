import React from 'react';
import Layout from '../../components/Layout';
import { ShoppingCart, Smartphone, BarChart3, Users, CheckCircle, Zap } from 'lucide-react';

const solutions = [
  {
    icon: ShoppingCart,
    title: 'E-commerce Platforms',
    description: 'Complete online retail solutions and marketplaces',
    features: ['Online Store', 'Payment Processing', 'Inventory Management', 'Order Fulfillment']
  },
  {
    icon: Smartphone,
    title: 'Mobile Commerce',
    description: 'Mobile-first shopping experiences and apps',
    features: ['Mobile Apps', 'Progressive Web Apps', 'Mobile Payments', 'Push Notifications']
  },
  {
    icon: BarChart3,
    title: 'Retail Analytics',
    description: 'Data-driven insights for retail optimization',
    features: ['Customer Analytics', 'Sales Analytics', 'Inventory Analytics', 'Performance Dashboards']
  },
  {
    icon: Users,
    title: 'Customer Experience',
    description: 'Personalized shopping and customer engagement',
    features: ['Personalization', 'Recommendation Engines', 'Customer Support', 'Loyalty Programs']
  }
];

const benefits = [
  'Increased Sales',
  'Better Customer Experience',
  'Improved Inventory Management',
  'Enhanced Analytics',
  'Mobile-First Approach',
  'Omnichannel Integration'
];

export default function RetailPage() {
  return (
    <Layout
      title="Retail Technology Solutions - Zion Tech Group"
      description="Transform retail with our comprehensive technology solutions. E-commerce platforms, mobile commerce, analytics, and customer experience for retail businesses."
      keywords="retail technology, e-commerce, mobile commerce, retail analytics, customer experience, omnichannel retail"
    >
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Retail
                <span className="block text-pink-600">Technology</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform retail with our comprehensive technology solutions. 
                From e-commerce platforms to mobile commerce, we help retail 
                businesses enhance customer experience and drive sales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors">
                  Explore Retail Solutions
                </button>
                <button className="border border-pink-600 text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors">
                  View Retail Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Retail Technology Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed for retail businesses
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <solution.icon className="h-8 w-8 text-pink-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Retail Solutions?
              </h2>
              <p className="text-xl text-gray-600">
                Proven expertise in retail technology and e-commerce
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Zap className="h-6 w-6 text-pink-600 mr-3" />
                  <span className="text-lg font-medium text-gray-900">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-pink-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Retail Business
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Let our retail technology experts help you enhance customer experience and drive sales growth.
            </p>
            <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Retail Consultation
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}