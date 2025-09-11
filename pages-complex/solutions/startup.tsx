import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Zap, 
  DollarSign, 
  Users, 
  CheckCircle,
  ArrowRight,
  Cloud,
  Shield,
  Clock,
  BarChart3
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const startupSolutions = [
  {
    title: 'MVP Development',
    description: 'Rapid development of minimum viable products to validate your ideas.',
    icon: Rocket,
    features: [
      'Fast time-to-market',
      'Cost-effective development',
      'User feedback integration',
      'Iterative improvement'
    ]
  },
  {
    title: 'Scalable Architecture',
    description: 'Future-proof architecture that grows with your startup.',
    icon: Cloud,
    features: [
      'Microservices design',
      'Auto-scaling capabilities',
      'Cloud-native solutions',
      'Performance optimization'
    ]
  },
  {
    title: 'Funding Support',
    description: 'Technical documentation and demos to support your funding rounds.',
    icon: DollarSign,
    features: [
      'Technical due diligence',
      'Demo development',
      'Architecture documentation',
      'Scalability planning'
    ]
  },
  {
    title: 'Team Augmentation',
    description: 'Extend your team with experienced developers and designers.',
    icon: Users,
    features: [
      'Senior developers',
      'UI/UX designers',
      'DevOps engineers',
      'Product managers'
    ]
  }
];

const startupBenefits = [
  {
    icon: Zap,
    title: 'Rapid Development',
    description: 'Get to market faster with our agile development approach'
  },
  {
    icon: DollarSign,
    title: 'Cost Effective',
    description: 'Startup-friendly pricing and flexible payment options'
  },
  {
    icon: Shield,
    title: 'Proven Track Record',
    description: 'Experience working with successful startups and scale-ups'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock support to keep your startup running'
  }
];

const stages = [
  {
    stage: 'Idea Validation',
    description: 'Validate your concept with market research and prototyping.',
    duration: '2-4 weeks'
  },
  {
    stage: 'MVP Development',
    description: 'Build and launch your minimum viable product.',
    duration: '8-12 weeks'
  },
  {
    stage: 'Growth & Scaling',
    description: 'Scale your product and team as you grow.',
    duration: 'Ongoing'
  },
  {
    stage: 'Exit Preparation',
    description: 'Prepare for acquisition or IPO with proper documentation.',
    duration: '3-6 months'
  }
];

export default function StartupSolutionsPage() {
  return (
    <MainLayout
      title="Startup Solutions - Zion Tech Group"
      description="Technology solutions designed specifically for startups and scale-ups. From MVP development to scaling and growth."
      keywords="startup solutions, MVP development, startup technology, scale-up solutions, funding support, team augmentation"
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
                Startup <span className="text-blue-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Technology solutions designed specifically for startups and scale-ups to accelerate growth and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Start Your Journey
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
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Startup Solutions</h2>
                <p className="text-xl text-gray-600">
                  Comprehensive solutions designed for startup success
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {startupSolutions.map((solution, index) => (
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

        {/* Startup Journey */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Startup Journey</h2>
                <p className="text-xl text-gray-600">
                  We support you at every stage of your startup journey
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stages.map((stage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-blue-600">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{stage.stage}</h3>
                    <p className="text-gray-600 mb-2">{stage.description}</p>
                    <div className="text-sm text-blue-600 font-medium">
                      <Clock className="w-4 h-4 inline mr-1" />
                      {stage.duration}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us for Your Startup?</h2>
                <p className="text-xl text-gray-600">
                  We understand the unique challenges startups face
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {startupBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-gray-50 p-6 rounded-lg text-center"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
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
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Launch Your Startup?</h2>
                <p className="text-xl text-blue-100 mb-8">
                  Let's discuss your startup idea and create a technology strategy for success.
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
                    Free Startup Consultation
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