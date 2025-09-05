import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Cpu, 
  Zap, 
  Brain, 
  CheckCircle,
  ArrowRight,
  CircuitBoard,
  Target,
  Lock,
  TrendingUp,
  Lightbulb,
  Shield
} from 'lucide-react';
import Layout from '../../components/Layout';

const services = [
  {
    icon: Atom,
    title: 'Quantum Algorithm Development',
    description: 'Design and implement quantum algorithms for complex optimization and simulation problems.',
    features: ['Quantum Optimization', 'Quantum Simulation', 'Algorithm Design', 'Performance Analysis']
  },
  {
    icon: Cpu,
    title: 'Quantum Computing Infrastructure',
    description: 'Set up and manage quantum computing environments and hybrid classical-quantum systems.',
    features: ['Quantum Hardware Setup', 'Hybrid Systems', 'Cloud Quantum Access', 'Performance Monitoring']
  },
  {
    icon: Brain,
    title: 'Quantum Machine Learning',
    description: 'Leverage quantum computing for advanced machine learning and AI applications.',
    features: ['Quantum Neural Networks', 'Quantum Feature Maps', 'Quantum Optimization', 'Hybrid ML Models']
  },
  {
    icon: CircuitBoard,
    title: 'Quantum Software Development',
    description: 'Build quantum software applications using Qiskit, Cirq, and other quantum frameworks.',
    features: ['Qiskit Development', 'Cirq Programming', 'Quantum Circuits', 'Error Correction']
  },
  {
    icon: Lock,
    title: 'Quantum Cryptography',
    description: 'Implement quantum-safe cryptographic solutions for enhanced security.',
    features: ['Quantum Key Distribution', 'Post-Quantum Cryptography', 'Quantum Random Numbers', 'Security Analysis']
  },
  {
    icon: Target,
    title: 'Quantum Consulting',
    description: 'Strategic guidance on quantum computing adoption and implementation.',
    features: ['Technology Assessment', 'Use Case Analysis', 'ROI Evaluation', 'Implementation Planning']
  }
];

const applications = [
  {
    icon: TrendingUp,
    title: 'Financial Modeling',
    description: 'Quantum algorithms for portfolio optimization and risk analysis.'
  },
  {
    icon: Lightbulb,
    title: 'Drug Discovery',
    description: 'Molecular simulation and drug design using quantum computing.'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Quantum-resistant encryption and secure communications.'
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Quantum machine learning for complex pattern recognition.'
  }
];

const technologies = [
  { name: 'IBM Qiskit', category: 'Quantum Software' },
  { name: 'Google Cirq', category: 'Quantum Software' },
  { name: 'Microsoft Q#', category: 'Quantum Programming' },
  { name: 'Rigetti Forest', category: 'Quantum Platform' },
  { name: 'D-Wave Ocean', category: 'Quantum Annealing' },
  { name: 'IonQ', category: 'Quantum Hardware' },
  { name: 'Honeywell Quantum', category: 'Quantum Hardware' },
  { name: 'IBM Quantum', category: 'Cloud Quantum' },
  { name: 'Amazon Braket', category: 'Quantum Cloud' },
  { name: 'Azure Quantum', category: 'Quantum Cloud' }
];

const processSteps = [
  {
    step: '01',
    title: 'Assessment',
    description: 'Evaluate your quantum computing readiness and identify opportunities.'
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'Develop a quantum computing strategy aligned with your business goals.'
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'Build and deploy quantum solutions using appropriate technologies.'
  },
  {
    step: '04',
    title: 'Optimization',
    description: 'Continuously optimize quantum algorithms and improve performance.'
  }
];

export default function QuantumComputingPage() {
  return (
    <Layout
      title="Quantum Computing Services - Zion Tech Group"
      description="Explore the future of computing with our quantum computing services. Quantum algorithms, machine learning, and cryptography solutions."
      keywords="quantum computing, quantum algorithms, quantum machine learning, quantum cryptography, Qiskit, quantum software"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-6">
                Quantum Computing Solutions
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Harness the power of quantum computing to solve complex problems 
                and unlock new possibilities for your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#services"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Services
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Start Quantum Project
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Quantum Computing Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From quantum algorithm development to infrastructure setup, we provide 
                comprehensive quantum computing solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Quantum Computing Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how quantum computing can revolutionize your industry 
                and solve previously intractable problems.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-purple-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <app.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {app.title}
                  </h3>
                  <p className="text-gray-600">
                    {app.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Quantum Technologies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We work with leading quantum computing platforms and frameworks 
                to deliver cutting-edge solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.05 * index }}
                  className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {tech.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {tech.category}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Quantum Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a systematic approach to ensure successful quantum 
                computing implementation and maximum value.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-purple-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-4">
                Explore the Quantum Future
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Be at the forefront of quantum computing innovation. Let our experts 
                help you harness quantum power for your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
                >
                  <span>Start Quantum Project</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/case-studies"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  View Quantum Cases
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}