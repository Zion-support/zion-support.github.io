import React from 'react';
import Layout from '../../components/Layout';
import { Cpu, Atom, Zap, Brain, CheckCircle, Rocket } from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'Quantum Algorithm Development',
    description: 'Custom quantum algorithms for optimization and machine learning',
    features: ['Quantum Machine Learning', 'Optimization Algorithms', 'Quantum Neural Networks', 'Quantum Annealing']
  },
  {
    icon: Atom,
    title: 'Quantum Simulation',
    description: 'Simulate quantum systems for research and development',
    features: ['Molecular Simulation', 'Material Science', 'Drug Discovery', 'Financial Modeling']
  },
  {
    icon: Zap,
    title: 'Quantum Computing Platforms',
    description: 'Access to leading quantum computing platforms and hardware',
    features: ['IBM Quantum', 'Google Quantum AI', 'Rigetti Computing', 'IonQ Access']
  },
  {
    icon: Brain,
    title: 'Quantum AI Integration',
    description: 'Integrate quantum computing with existing AI systems',
    features: ['Hybrid Classical-Quantum', 'Quantum Neural Networks', 'Quantum Optimization', 'Quantum Machine Learning']
  }
];

const applications = [
  'Financial Portfolio Optimization',
  'Drug Discovery & Development',
  'Supply Chain Optimization',
  'Cryptography & Security',
  'Climate Modeling',
  'Machine Learning Acceleration'
];

export default function QuantumComputingPage() {
  return (
    <Layout
      title="Quantum Computing Services - Zion Tech Group"
      description="Explore the future of computing with our quantum computing solutions. Quantum algorithms, simulation, and AI integration services."
      keywords="quantum computing, quantum algorithms, quantum machine learning, quantum simulation, quantum AI, optimization"
    >
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Quantum Computing
                <span className="block text-indigo-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Explore the future of computing with our quantum computing solutions. 
                From algorithm development to AI integration, we help you harness the 
                power of quantum technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                  Explore Quantum Solutions
                </button>
                <button className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                  View Quantum Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Quantum Computing Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge quantum solutions to solve complex computational problems
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-indigo-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
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

        {/* Applications Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Quantum Computing Applications
              </h2>
              <p className="text-xl text-gray-600">
                Revolutionary applications across industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((application, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Rocket className="h-6 w-6 text-indigo-600 mr-3" />
                  <span className="text-lg font-medium text-gray-900">{application}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for the Quantum Revolution?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join the quantum computing revolution with our expert guidance and cutting-edge solutions.
            </p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Quantum Journey
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}