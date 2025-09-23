import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Code, 
  Zap, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Target, 
  Wrench 
} from 'lucide-react';

const features = [
  {
    title: 'Tailored Solutions',
    description: 'Bespoke software solutions designed specifically for your unique business needs',
    icon: Settings,
    benefits: ['Custom development', 'Unique requirements', 'Scalable architecture', 'Future-proof design']
  },
  {
    title: 'Rapid Development',
    description: 'Fast-track development with agile methodologies and modern technologies',
    icon: Zap,
    benefits: ['Agile development', 'Quick prototyping', 'Iterative delivery', 'Modern tech stack']
  },
  {
    title: 'Expert Team',
    description: 'Experienced developers and designers working on your project',
    icon: Users,
    benefits: ['Senior developers', 'UI/UX designers', 'Project managers', 'Quality assurance']
  },
  {
    title: 'Full Support',
    description: 'Comprehensive support and maintenance for your custom solutions',
    icon: Wrench,
    benefits: ['24/7 support', 'Regular updates', 'Bug fixes', 'Feature enhancements']
  }
];

const developmentProcess = [
  {
    step: '1',
    title: 'Discovery',
    description: 'Understanding your requirements and business goals',
    icon: Target
  },
  {
    step: '2',
    title: 'Design',
    description: 'Creating wireframes and user interface designs',
    icon: Settings
  },
  {
    step: '3',
    title: 'Development',
    description: 'Building your custom solution with clean, maintainable code',
    icon: Code
  },
  {
    step: '4',
    title: 'Testing',
    description: 'Thorough testing to ensure quality and reliability',
    icon: CheckCircle
  },
  {
    step: '5',
    title: 'Deployment',
    description: 'Launching your solution and providing ongoing support',
    icon: Zap
  }
];

export default function CustomSolutionsPage() {
  return (
    <>
      <Head>
        <title>Custom Solutions - Zion Tech Group</title>
        <meta name="description" content="Bespoke software solutions tailored to your business needs. Custom development, web applications, and mobile apps." />
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Custom Solutions</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Bespoke software solutions tailored to your unique business needs. 
                From web applications to mobile apps, we build what you need.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Custom Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our custom solutions are designed to meet your specific requirements and business goals.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We follow a proven methodology to ensure successful project delivery.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {developmentProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
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
                Ready to Build Your Custom Solution?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss your requirements and create a solution that perfectly fits your needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}