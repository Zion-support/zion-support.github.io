import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  RefreshCw, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';

const transformationServices = [
  {
    title: "Process Automation",
    description: "Streamline operations with intelligent automation",
    icon: RefreshCw,
    features: ["Workflow automation", "Document processing", "Task automation", "Integration"],
    pricing: "$5,000 - $25,000/project"
  },
  {
    title: "Digital Strategy",
    description: "Comprehensive digital transformation strategy and planning",
    icon: Target,
    features: ["Digital roadmap", "Technology assessment", "Change management", "Training"],
    pricing: "$10,000 - $50,000/project"
  },
  {
    title: "Data Modernization",
    description: "Modernize your data infrastructure and analytics",
    icon: TrendingUp,
    features: ["Data migration", "Analytics platform", "Data governance", "Reporting"],
    pricing: "$8,000 - $40,000/project"
  },
  {
    title: "Cloud Transformation",
    description: "Complete cloud transformation and migration",
    icon: Rocket,
    features: ["Cloud migration", "Infrastructure setup", "Security", "Optimization"],
    pricing: "$15,000 - $75,000/project"
  }
];

const transformationPhases = [
  {
    phase: '1',
    title: 'Assessment',
    description: 'Comprehensive analysis of current state and digital readiness',
    icon: Target
  },
  {
    phase: '2',
    title: 'Strategy',
    description: 'Development of digital transformation roadmap and strategy',
    icon: TrendingUp
  },
  {
    phase: '3',
    title: 'Implementation',
    description: 'Execution of digital transformation initiatives',
    icon: Rocket
  },
  {
    phase: '4',
    title: 'Optimization',
    description: 'Continuous improvement and optimization of digital processes',
    icon: RefreshCw
  }
];

export default function DigitalTransformationPage() {
  return (
    <>
      <Head>
        <title>Digital Transformation Solutions - Zion Tech Group</title>
        <meta name="description" content="Complete digital transformation solutions including process automation, digital strategy, data modernization, and cloud transformation." />
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Digital Transformation</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Transform your business with comprehensive digital solutions. 
                From process automation to cloud transformation, we help you modernize.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Start Your Transformation
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Download Guide
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Transformation Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our comprehensive digital transformation services help you modernize and optimize your business.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {transformationServices.map((service, index) => (
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

        {/* Transformation Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Transformation Process</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We follow a structured approach to ensure successful digital transformation.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {transformationPhases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {phase.phase}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss your digital transformation needs and create a customized plan.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Start Transformation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}