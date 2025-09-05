import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Code, 
  Wrench, 
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Users,
  BarChart3,
  Clock
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const customSolutions = [
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions built specifically for your business needs.',
    icon: Code,
    features: [
      'Web applications',
      'Mobile apps',
      'Desktop software',
      'API development'
    ]
  },
  {
    title: 'System Integration',
    description: 'Seamlessly connect your existing systems and applications.',
    icon: Settings,
    features: [
      'Legacy system integration',
      'API development',
      'Data synchronization',
      'Workflow automation'
    ]
  },
  {
    title: 'Custom AI Solutions',
    description: 'AI-powered solutions designed for your specific use cases.',
    icon: Zap,
    features: [
      'Machine learning models',
      'Natural language processing',
      'Computer vision',
      'Predictive analytics'
    ]
  },
  {
    title: 'Enterprise Solutions',
    description: 'Large-scale solutions for enterprise-level requirements.',
    icon: Users,
    features: [
      'Scalable architecture',
      'Security compliance',
      'Performance optimization',
      '24/7 support'
    ]
  }
];

const processSteps = [
  {
    step: 1,
    title: 'Discovery & Analysis',
    description: 'Understanding your business requirements and technical constraints.',
    icon: BarChart3
  },
  {
    step: 2,
    title: 'Design & Planning',
    description: 'Creating detailed technical specifications and project roadmap.',
    icon: Settings
  },
  {
    step: 3,
    title: 'Development & Testing',
    description: 'Building and thoroughly testing your custom solution.',
    icon: Code
  },
  {
    step: 4,
    title: 'Deployment & Support',
    description: 'Deploying your solution and providing ongoing maintenance.',
    icon: CheckCircle
  }
];

export default function CustomSolutionsPage() {
  return (
    <MainLayout
      title="Custom Solutions - Zion Tech Group"
      description="Tailored technology solutions designed specifically for your business needs. From custom software to AI solutions."
      keywords="custom solutions, software development, system integration, AI solutions, enterprise solutions"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Custom <span className="text-blue-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Tailored technology solutions designed specifically for your unique business requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Free Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Custom Solutions</h2>
                <p className="text-xl text-gray-600">
                  Comprehensive custom solutions tailored to your business needs
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {customSolutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-gray-50 p-8 rounded-lg"
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <solution.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900">{solution.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Development Process</h2>
                <p className="text-xl text-gray-600">
                  A proven methodology for delivering successful custom solutions
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Custom Solution?</h2>
                <p className="text-xl text-blue-100 mb-8">
                  Let's discuss your requirements and create a solution that perfectly fits your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}