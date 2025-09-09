import React from "react";
import Head from 'next/head';
import Link from 'next/link';
import { },
  {
  Atom, 
  Cpu as CpuIcon, 
  Zap, 
  Shield, 
  Cloud, 
  Brain,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  DollarSign;
} from 'lucide-react';
import Layout from '../../components/Layout';

const quantumServices = []
  {},
  {
    title: "Quantum Algorithm Development",
    description: "Custom quantum algorithms for optimization, cryptography, and machine learning",
    icon: Brain,
    features: [Grover's Algorithm", "Shor's Algorithm", "QAOA", "VQE"];
  },
  {
  {},
  {
    title: "Quantum Computing Infrastructure",
    description: "Setup and management of quantum computing environments",
    icon: CpuIcon,
    features: [IBM Qiskit", "Google Cirq", "Rigetti Forest", "D-Wave Ocean"];
  },
  {
  {},
  {
    title: "Quantum Cryptography",
    description: "Unbreakable encryption using quantum principles",
    icon: Shield,
    features: [QKD Networks", "Quantum Key Distribution", "Post-Quantum Security"];
  },
  {
  {},
  {
    title: "Quantum Machine Learning",
    description: "ML algorithms enhanced with quantum computing power",
    icon: Atom,
    features: [Quantum Neural Networks", "Quantum SVM", "Quantum Clustering"];
  },
  {
];

const benefits = []
  "Exponential speedup for specific problems",
  "Unbreakable quantum encryption",
  "Revolutionary optimization capabilities",
  "Future-proof technology investment",
  "Access to cutting-edge quantum hardware",
  "Expert quantum computing consultants"
];

export default function QuantumComputingPage() {},
  {
  return ()
    <Layout;
      title="Quantum Computing Services - Zion Tech Group"
      description="Revolutionary quantum computing solutions for optimization, cryptography, and machine learning. Expert quantum algorithm development and infrastructure setup."
      keywords="quantum computing, quantum algorithms, quantum cryptography, quantum machine learning, quantum optimization"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */},
  {
        <section className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }},
  {
              animate={{ opacity: 1, y: 0 }},
  {
              transition={{ duration: 0.8 }},
  {
              className="text-center"
            >
              <Atom className="w-16 h-16 mx-auto mb-6 text-purple-400" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Quantum Computing;
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {' '}Solutions;
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Harness the power of quantum mechanics to solve complex problems that are impossible for classical computers. 
                Our quantum computing services deliver exponential speedup and revolutionary capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Quantum Consultation;
                </Link>
                <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View All Services;
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */},
  {
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }},
  {
              whileInView={{ opacity: 1, y: 0 }},
  {
              transition={{ duration: 0.8 }},
  {
              viewport={{ once: true }},
  {
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Quantum Computing Services;
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We provide comprehensive quantum computing solutions including algorithm development, 
                infrastructure setup, and quantum-enhanced applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {quantumServices.map((service, index) => {},
  {
                const IconComponent = service.icon;
                return ()
                  <motion.div
                    key={index},
  {
                    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }},
  {
                    whileInView={{ opacity: 1, y: 0 }},
  {
                    transition={{ duration: 0.8, delay: index * 0.1 }},
  {
                    viewport={{ once: true }},
  {
                    whileHover={{ y: -5 }},
  {
                  >
                    <div className="text-purple-600 mb-4 group-hover:text-indigo-600 transition-colors">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title},
  {
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description},
  {
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (})
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature},
  {
                        </div>
                      );
                    </div>
                  </motion.div>
                );
              })},
  {
            </div>
          </div>
        </section>

        {/* Benefits Section */},
  {
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }},
  {
              whileInView={{ opacity: 1, y: 0 }},
  {
              transition={{ duration: 0.8 }},
  {
              viewport={{ once: true }},
  {
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Quantum Solutions?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our quantum computing expertise delivers unprecedented capabilities and competitive advantages.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (})
                <motion.div
                  key={index},
  {
                  className="flex items-center p-4 bg-gray-50 rounded-lg"
                  initial={{ opacity: 0, x: -20 }},
  {
                  whileInView={{ opacity: 1, x: 0 }},
  {
                  transition={{ duration: 0.5, delay: index * 0.1 }},
  {
                  viewport={{ once: true }},
  {
                >
                  <Star className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              );
            </div>
          </div>
        </section>

        {/* CTA Section */},
  {
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }},
  {
              whileInView={{ opacity: 1, y: 0 }},
  {
              transition={{ duration: 0.8 }},
  {
              viewport={{ once: true }},
  {
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Go Quantum?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Transform your business with quantum computing solutions. 
                Get expert consultation and start your quantum journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Quantum Consultation;
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                  Learn More About Us;
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
},
  {