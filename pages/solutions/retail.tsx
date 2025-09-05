import React from 'react';
import Layout from '../../components/Layout';
import { ShoppingCart, Smartphone, BarChart3, Users, CheckCircle, Zap } from 'lucide-react';

const solutions = [
  {
    title: "E-commerce Platform",
    description: "Complete online store solutions with advanced features",
    icon: ShoppingCart,
    features: ["Product Catalog", "Shopping Cart", "Payment Processing", "Order Management"]
  },
  {
    title: "Mobile Commerce",
    description: "Mobile-first shopping experiences for better customer engagement",
    icon: Smartphone,
    features: ["Mobile Apps", "Progressive Web Apps", "Mobile Payments", "Push Notifications"]
  },
  {
    title: "Retail Analytics",
    description: "Data-driven insights to optimize sales and customer experience",
    icon: BarChart3,
    features: ["Sales Analytics", "Customer Behavior", "Inventory Management", "Performance Metrics"]
  },
  {
    title: "Customer Experience",
    description: "Personalized shopping experiences that drive loyalty",
    icon: Users,
    features: ["Personalization", "Recommendation Engine", "Customer Support", "Loyalty Programs"]
  }
];

const benefits = [
  "Increased Sales",
  "Better Customer Experience",
  "Improved Inventory Management",
  "Mobile-First Design",
  "Real-time Analytics",
  "Scalable Solutions"
];

export default function RetailSolutionsPage() {
  return (
    <Layout
      title="Retail Solutions - Zion Tech Group"
      description="Comprehensive retail technology solutions including e-commerce platforms, mobile commerce, retail analytics, and customer experience optimization."
      keywords="retail solutions, e-commerce, mobile commerce, retail analytics, customer experience, online store"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Retail
                <span className="block text-purple-400">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Transform your retail business with cutting-edge technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                  Get Retail Consultation
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold">
                  View Retail Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Retail Technology Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions designed to enhance retail operations and customer experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <solution.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Retail Solutions?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand the retail industry and deliver solutions that drive sales and customer satisfaction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-lg font-medium text-gray-900">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Your Retail Business
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let us help you implement technology solutions that increase sales and improve customer experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Start Retail Project
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}