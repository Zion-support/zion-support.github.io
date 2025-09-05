import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Brain, 
  Cloud, 
  CheckCircle,
  ArrowRight,
  BarChart3,
  Users,
  Shield,
  Settings,
  Globe,
  Database,
  Smartphone
} from 'lucide-react';
import MainLayout from '../../components/layout/MainLayout';

const phases = [
  {
    title: 'Assessment & Strategy',
    description: 'Comprehensive analysis of current systems and development of transformation roadmap.',
    icon: BarChart3,
    steps: [
      'Current state analysis',
      'Gap identification',
      'Technology assessment',
      'Strategic roadmap creation'
    ]
  },
  {
    title: 'Design & Planning',
    description: 'Detailed design of new systems and comprehensive implementation planning.',
    icon: Settings,
    steps: [
      'Solution architecture design',
      'Process redesign',
      'Change management planning',
      'Implementation timeline'
    ]
  },
  {
    title: 'Implementation',
    description: 'Phased implementation of new systems with minimal business disruption.',
    icon: Zap,
    steps: [
      'System development',
      'Data migration',
      'Integration setup',
      'Testing & validation'
    ]
  },
  {
    title: 'Optimization',
    description: 'Continuous monitoring and optimization of transformed systems.',
    icon: Brain,
    steps: [
      'Performance monitoring',
      'User feedback collection',
      'System optimization',
      'Continuous improvement'
    ]
  }
];

const technologies = [
  {
    title: 'Cloud Migration',
    description: 'Seamless migration to cloud platforms for scalability and flexibility.',
    icon: Cloud,
    benefits: ['Reduced infrastructure costs', 'Improved scalability', 'Enhanced security', 'Better disaster recovery']
  },
  {
    title: 'AI Integration',
    description: 'Intelligent automation and AI-powered decision making systems.',
    icon: Brain,
    benefits: ['Automated processes', 'Predictive analytics', 'Intelligent insights', 'Enhanced efficiency']
  },
  {
    title: 'Mobile Solutions',
    description: 'Mobile-first applications and responsive design for modern users.',
    icon: Smartphone,
    benefits: ['Improved accessibility', 'Better user experience', 'Increased engagement', 'Real-time access']
  },
  {
    title: 'Data Analytics',
    description: 'Advanced analytics platforms for data-driven decision making.',
    icon: Database,
    benefits: ['Real-time insights', 'Predictive modeling', 'Performance tracking', 'Strategic planning']
  }
];

const benefits = [
  {
    title: 'Increased Efficiency',
    description: 'Streamlined processes and automated workflows reduce operational costs.',
    icon: Zap
  },
  {
    title: 'Better Customer Experience',
    description: 'Modern, user-friendly interfaces improve customer satisfaction.',
    icon: Users
  },
  {
    title: 'Enhanced Security',
    description: 'Modern security measures protect against evolving threats.',
    icon: Shield
  },
  {
    title: 'Scalable Growth',
    description: 'Cloud-based solutions scale with your business growth.',
    icon: Globe
  }
];

export default function DigitalTransformationPage() {
  return (
    <MainLayout 
      title="Digital Transformation Solutions - Zion Tech Group"
      description="Transform your business with comprehensive digital transformation solutions including cloud migration, AI integration, and process automation."
      keywords="digital transformation, cloud migration, AI integration, business automation, digital strategy"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center mb-6">
                <Zap className="w-12 h-12 text-purple-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold">
                  Digital
                  <span className="block bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    Transformation
                  </span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with comprehensive digital solutions that modernize operations, 
                enhance customer experience, and drive sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Your Transformation
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                  View Success Stories
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Digital Transformation Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology that ensures successful digital transformation 
                with minimal business disruption.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <phase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{phase.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{phase.description}</p>
                  
                  <ul className="space-y-2 text-left">
                    {phase.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Key Technologies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Leverage cutting-edge technologies to drive your digital transformation 
                and achieve sustainable competitive advantage.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                      <tech.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{tech.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{tech.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {tech.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our Digital Transformation?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive approach delivers measurable results and sustainable 
                competitive advantage for your business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Let our digital transformation experts help you modernize your operations 
                and achieve sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Your Transformation
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                  Learn About Our Expertise
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}