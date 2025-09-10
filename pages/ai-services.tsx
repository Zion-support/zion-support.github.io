import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, ArrowRight, CheckCircle, Star, Users, Award } from 'lucide-react';

const aiServices = [
  {
    title: "Machine Learning Solutions",
    description: "Custom ML models tailored to your business needs",
    icon: Brain,
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Recommendation Systems"]
  },
  {
    title: "AI Automation",
    description: "Streamline operations with intelligent automation",
    icon: Network,
    features: ["Process Automation", "Workflow Optimization", "Smart Scheduling", "Intelligent Routing"]
  },
  {
    title: "AI Consulting",
    description: "Strategic guidance for AI implementation",
    icon: Cloud,
    features: ["AI Strategy", "Technology Assessment", "Implementation Planning", "Training & Support"]
  }
];

export default function AIServicesPage() {
  return (
    <MainLayout
      title="AI Services - Zion Tech Group"
      description="Cutting-edge artificial intelligence solutions for modern businesses"
      keywords="AI services, machine learning, artificial intelligence, automation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions designed to drive innovation and efficiency.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our AI Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver comprehensive AI services that help businesses harness the power of artificial intelligence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-blue-600 mb-6">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our AI experts help you implement intelligent solutions that drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Your AI Journey
                </Link>
                <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}