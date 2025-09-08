import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, 
  ArrowRight,
  CheckCircle,
  Users,
  BarChart3,
  Shield,
  Clock,
  DollarSign,
  Globe,
  Settings
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const transformationAreas = [
  {
    title: 'Process Automation',
    description: 'Streamline operations with intelligent automation solutions.',
    icon: Zap,
    benefits: [
      'Reduce manual work by 70%',
      'Improve accuracy and consistency',
      'Faster processing times',
      'Lower operational costs'
    ]
  },
  {
    title: 'Data Analytics',
    description: 'Transform data into actionable insights for better decision making.',
    icon: BarChart3,
    benefits: [
      'Real-time data visualization',
      'Predictive analytics',
      'Custom dashboards',
      'Automated reporting'
    ]
  },
  {
    title: 'Cloud Migration',
    description: 'Modernize infrastructure with secure, scalable cloud solutions.',
    icon: Globe,
    benefits: [
      'Enhanced scalability',
      'Improved security',
      'Cost optimization',
      'Better collaboration'
    ]
  },
  {
    title: 'Customer Experience',
    description: 'Enhance customer interactions with digital solutions.',
    icon: Users,
    benefits: [
      'Omnichannel experience',
      'Personalized interactions',
      'Faster response times',
      'Higher satisfaction rates'
    ]
  }
];

const transformationSteps = [
  {
    step: 1,
    title: 'Assessment',
    description: 'Evaluate current state and identify transformation opportunities.',
    icon: BarChart3,
    duration: '2-3 weeks'
  },
  {
    step: 2,
    title: 'Strategy',
    description: 'Develop comprehensive digital transformation roadmap.',
    icon: Settings,
    duration: '1-2 weeks'
  },
  {
    step: 3,
    title: 'Implementation',
    description: 'Execute transformation initiatives with agile methodology.',
    icon: Zap,
    duration: '3-6 months'
  },
  {
    step: 4,
    title: 'Optimization',
    description: 'Continuous improvement and performance monitoring.',
    icon: CheckCircle,
    duration: 'Ongoing'
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: 'Cost Reduction',
    description: 'Reduce operational costs by up to 30% through automation and optimization'
  },
  {
    icon: Clock,
    title: 'Efficiency Gains',
    description: 'Improve productivity and efficiency across all business processes'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Strengthen security posture with modern security frameworks'
  },
  {
    icon: Users,
    title: 'Better Customer Experience',
    description: 'Deliver exceptional customer experiences through digital innovation'
  }
];

export default function DigitalTransformationPage() {
  return (
    <MainLayout
      title="Digital Transformation Solutions - Zion Tech Group"
      description="Transform your business with comprehensive digital solutions including automation, analytics, cloud migration, and customer experience enhancement."
      keywords="digital transformation, automation, analytics, cloud migration, business transformation, digital innovation"
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
                Digital <span className="text-blue-600">Transformation</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your business with comprehensive digital solutions that drive growth, efficiency, and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Start Transformation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Free Assessment
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Transformation Areas */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Transformation Areas</h2>
                <p className="text-xl text-gray-600">
                  Comprehensive digital solutions across all aspects of your business
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {transformationAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-gray-50 p-8 rounded-lg"
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <area.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900">{area.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{area.description}</p>
                    <ul className="space-y-2">
                      {area.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Transformation Process */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Transformation Process</h2>
                <p className="text-xl text-gray-600">
                  A proven methodology for successful digital transformation
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {transformationSteps.map((step, index) => (
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
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <div className="text-sm text-blue-600 font-medium">
                      <Clock className="w-4 h-4 inline mr-1" />
                      {step.duration}
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
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Transformation Benefits</h2>
                <p className="text-xl text-gray-600">
                  Experience measurable improvements across your entire organization
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
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
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
                <p className="text-xl text-blue-100 mb-8">
                  Let's discuss your digital transformation goals and create a roadmap for success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Start Your Journey
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Get Free Assessment
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