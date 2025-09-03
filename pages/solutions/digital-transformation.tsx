import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { TrendingUp, Cloud, Users, Shield, Zap, Target, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const DigitalTransformation: NextPage = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with minimal downtime and maximum efficiency.',
      features: ['AWS Migration', 'Azure Migration', 'Google Cloud Migration', 'Hybrid Cloud Solutions']
    },
    {
      icon: Users,
      title: 'Process Automation',
      description: 'Streamline your business processes with intelligent automation solutions that reduce manual work.',
      features: ['Workflow Automation', 'RPA Implementation', 'Business Process Optimization', 'Integration Services']
    },
    {
      icon: Shield,
      title: 'Security Modernization',
      description: 'Enhance your security posture with modern cybersecurity solutions and best practices.',
      features: ['Zero Trust Architecture', 'Identity Management', 'Threat Detection', 'Compliance Implementation']
    },
    {
      icon: Zap,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence.',
      features: ['Data Warehousing', 'Real-time Analytics', 'Predictive Modeling', 'Dashboard Development']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Efficiency',
      description: 'Streamline operations and reduce manual processes by up to 70%'
    },
    {
      icon: Target,
      title: 'Better Decision Making',
      description: 'Access real-time insights and data-driven analytics for informed decisions'
    },
    {
      icon: Users,
      title: 'Enhanced Customer Experience',
      description: 'Deliver personalized, seamless experiences across all touchpoints'
    },
    {
      icon: Shield,
      title: 'Improved Security',
      description: 'Implement modern security measures to protect your digital assets'
    }
  ];

  const industries = [
    'Healthcare', 'Financial Services', 'Manufacturing', 'Retail',
    'Education', 'Government', 'Real Estate', 'Transportation'
  ];

  const phases = [
    {
      phase: 'Assessment',
      title: 'Current State Analysis',
      description: 'We analyze your current systems, processes, and identify opportunities for improvement.',
      duration: '2-4 weeks'
    },
    {
      phase: 'Strategy',
      title: 'Digital Roadmap',
      description: 'Create a comprehensive digital transformation strategy aligned with your business goals.',
      duration: '3-6 weeks'
    },
    {
      phase: 'Implementation',
      title: 'Solution Deployment',
      description: 'Execute the transformation plan with minimal disruption to your operations.',
      duration: '3-12 months'
    },
    {
      phase: 'Optimization',
      title: 'Continuous Improvement',
      description: 'Monitor, measure, and optimize your digital solutions for maximum ROI.',
      duration: 'Ongoing'
    }
  ];

  return (
    <MainLayout
      title="Digital Transformation Solutions - Zion Tech Group"
      description="Transform your business with comprehensive digital transformation services. Cloud migration, process automation, and modern technology implementation."
      keywords="digital transformation, cloud migration, process automation, business intelligence, cybersecurity"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Digital
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> Transformation</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Accelerate your business growth with comprehensive digital transformation solutions. 
            Modernize your operations, enhance customer experiences, and drive innovation across your organization.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg">
              Start Transformation
            </Link>
            <Link href="/solutions" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105">
              View All Solutions
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transformation Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end digital transformation services to modernize your business operations and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <service.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transformation Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience measurable improvements across all aspects of your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-purple-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our digital transformation expertise spans across multiple industries and verticals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <span className="text-lg font-medium text-gray-700">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transformation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to ensure successful digital transformation with minimal disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600 mb-4">{phase.description}</p>
                <div className="text-sm text-purple-600 font-medium">{phase.duration}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
            Let's discuss your digital transformation goals and create a roadmap for success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg">
              Start Your Journey
            </Link>
            <Link href="/solutions" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105">
              Explore All Solutions
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default DigitalTransformation;