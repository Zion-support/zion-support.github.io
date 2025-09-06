import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cpu, Zap, Shield, Brain, CheckCircle, ArrowRight } from 'lucide-react';

const quantumServices = [
  {
    title: "Quantum Algorithms",
    description: "Custom quantum algorithms for optimization and problem-solving",
    icon: Cpu,
    features: ["Quantum optimization", "Quantum machine learning", "Quantum simulation", "Algorithm development"],
    pricing: "$10,000 - $50,000/project"
  },
  {
    title: "Quantum Cryptography",
    description: "Ultra-secure quantum encryption and key distribution",
    icon: Shield,
    features: ["Quantum key distribution", "Quantum encryption", "Security protocols", "Implementation"],
    pricing: "$15,000 - $75,000/project"
  },
  {
    title: "Quantum Machine Learning",
    description: "AI and machine learning powered by quantum computing",
    icon: Brain,
    features: ["Quantum neural networks", "Quantum optimization", "Pattern recognition", "Data analysis"],
    pricing: "$20,000 - $100,000/project"
  },
  {
    title: "Quantum Consulting",
    description: "Strategic consulting for quantum computing adoption",
    icon: Zap,
    features: ["Technology assessment", "Strategy development", "Implementation planning", "Training"],
    pricing: "$500 - $1,000/hour"
  }
];
}

export default function QuantumComputingPage() {
  return (
    <>
      <Head>
        <title>Quantum Computing Services - Zion Tech Group</title>
        <meta name="description" content="Explore the future of computing with our quantum computing services. Quantum algorithms, machine learning, and cryptography solutions." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Quantum Computing</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Explore the future of computing with our quantum computing services. 
                Quantum algorithms, machine learning, and cryptography solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {quantumServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-lg font-semibold text-blue-600 mb-4">{service.pricing}</div>
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Explore Quantum Computing?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how quantum computing can revolutionize your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/ai-services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
