import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap, Shield, Globe, Database, Cloud, Target } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const DigitalTransformation: NextPage = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Efficiency',
      description: 'Streamline operations and reduce manual processes by up to 70% with automated workflows.'
    },
    {
      icon: Users,
      title: 'Enhanced Customer Experience',
      description: 'Deliver personalized, seamless experiences that drive customer satisfaction and loyalty.'
    },
    {
      icon: Zap,
      title: 'Faster Time to Market',
      description: 'Accelerate product development and deployment with modern development practices.'
    },
    {
      icon: Shield,
      title: 'Improved Security',
      description: 'Implement robust security measures and compliance frameworks to protect your business.'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Scale your operations globally with cloud-native solutions and distributed architectures.'
    },
    {
      icon: Database,
      title: 'Data-Driven Insights',
      description: 'Leverage advanced analytics and AI to make informed business decisions.'
    }
  ];

  const transformationAreas = [
    {
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows to improve efficiency and reduce errors.',
      technologies: ['RPA', 'Workflow Automation', 'AI/ML', 'Process Mining']
    },
    {
      title: 'Cloud Migration',
      description: 'Move your infrastructure to the cloud for better scalability and cost optimization.',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes']
    },
    {
      title: 'Data Modernization',
      description: 'Transform your data architecture for better insights and decision-making.',
      technologies: ['Data Lakes', 'Real-time Analytics', 'AI/ML', 'Data Governance']
    },
    {
      title: 'Customer Experience',
      description: 'Enhance customer interactions with digital-first solutions and omnichannel experiences.',
      technologies: ['CRM', 'Personalization', 'Mobile Apps', 'Chatbots']
    }
  ];

  const phases = [
    {
      phase: 'Assessment',
      title: 'Current State Analysis',
      description: 'Comprehensive evaluation of your current systems, processes, and digital maturity.',
      duration: '2-4 weeks'
    },
    {
      phase: 'Strategy',
      title: 'Digital Roadmap',
      description: 'Develop a strategic roadmap aligned with your business objectives and goals.',
      duration: '3-6 weeks'
    },
    {
      phase: 'Implementation',
      title: 'Solution Deployment',
      description: 'Execute the transformation plan with agile methodologies and continuous monitoring.',
      duration: '12-24 weeks'
    },
    {
      phase: 'Optimization',
      title: 'Continuous Improvement',
      description: 'Monitor performance, gather feedback, and optimize for ongoing success.',
      duration: 'Ongoing'
    }
  ];

  return (
    <MainLayout
      title="Digital Transformation Solutions - Zion Tech Group"
      description="Transform your business with comprehensive digital transformation solutions. Modernize processes, enhance customer experience, and drive growth with cutting-edge technology."
      keywords="digital transformation, business modernization, process automation, cloud migration, digital strategy"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
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
            Transform your business for the digital age with comprehensive modernization solutions. 
            From process automation to cloud migration, we help you embrace digital technologies 
            that drive growth, efficiency, and competitive advantage.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact" className="group">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg group-hover:shadow-xl">
                Start Your Transformation
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/solutions" className="group">
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105">
                View All Solutions
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transform Your Business</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Digital transformation delivers measurable results that drive business growth and competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Areas Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transformation Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions across all aspects of your digital transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transformationAreas.map((area, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-6">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Transformation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach that ensures successful digital transformation with minimal disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <div className="text-sm text-purple-600 font-semibold mb-2">{phase.phase}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{phase.description}</p>
                <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block">
                  {phase.duration}
                </div>
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
            <Link href="/contact" className="group">
              <button className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg">
                Start Your Journey
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/solutions" className="group">
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105">
                View All Solutions
              </button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default DigitalTransformation;