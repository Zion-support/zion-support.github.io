import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
<<<<<<< HEAD
import { TrendingUp, Users, Zap, Shield, ArrowRight, CheckCircle, Target, BarChart3 } from 'lucide-react';
=======
import { TrendingUp, Cloud, Users, Shield, Zap, Target, CheckCircle, ArrowRight } from 'lucide-react';
>>>>>>> main
import Link from 'next/link';
import { motion } from 'framer-motion';

const DigitalTransformation: NextPage = () => {
<<<<<<< HEAD
  const transformationAreas = [
    {
      icon: TrendingUp,
      title: 'Business Process Automation',
      description: 'Streamline operations and eliminate manual processes with intelligent automation solutions.',
      benefits: ['Reduced operational costs', 'Improved efficiency', 'Error reduction', 'Scalable processes']
    },
    {
      icon: Users,
      title: 'Customer Experience Enhancement',
      description: 'Transform customer interactions with digital-first experiences and personalized engagement.',
      benefits: ['Higher customer satisfaction', 'Increased retention', 'Better insights', 'Omnichannel experience']
    },
    {
      icon: Zap,
      title: 'Data-Driven Decision Making',
      description: 'Leverage advanced analytics and AI to make informed business decisions in real-time.',
      benefits: ['Real-time insights', 'Predictive analytics', 'Better forecasting', 'Competitive advantage']
    },
    {
      icon: Shield,
      title: 'Cloud Migration & Modernization',
      description: 'Modernize your infrastructure with secure, scalable cloud solutions and microservices architecture.',
      benefits: ['Improved scalability', 'Enhanced security', 'Cost optimization', 'Future-ready infrastructure']
    }
  ];

  const transformationPhases = [
    {
      phase: 'Assessment',
      title: 'Current State Analysis',
      description: 'Comprehensive evaluation of existing systems, processes, and digital maturity.',
      duration: '2-4 weeks',
      deliverables: ['Digital maturity assessment', 'Gap analysis', 'ROI projections', 'Strategic roadmap']
    },
    {
      phase: 'Strategy',
      title: 'Transformation Strategy',
      description: 'Develop a comprehensive digital transformation strategy aligned with business objectives.',
      duration: '3-6 weeks',
      deliverables: ['Digital strategy document', 'Technology roadmap', 'Change management plan', 'Success metrics']
    },
    {
      phase: 'Implementation',
      title: 'Solution Implementation',
      description: 'Execute the transformation plan with agile methodologies and continuous monitoring.',
      duration: '3-12 months',
      deliverables: ['Deployed solutions', 'Process improvements', 'Staff training', 'Performance monitoring']
    },
    {
      phase: 'Optimization',
      title: 'Continuous Improvement',
      description: 'Monitor performance, gather feedback, and continuously optimize digital solutions.',
      duration: 'Ongoing',
      deliverables: ['Performance reports', 'Optimization recommendations', 'Future enhancements', 'Support services']
    }
  ];

  const successMetrics = [
    { metric: '85%', description: 'Average cost reduction in operational processes', icon: TrendingUp },
    { metric: '60%', description: 'Improvement in customer satisfaction scores', icon: Users },
    { metric: '3x', description: 'Faster decision-making with real-time analytics', icon: Zap },
    { metric: '99.9%', description: 'System uptime and reliability improvement', icon: Shield }
  ];

  const technologies = [
    { name: 'AI & Machine Learning', description: 'Intelligent automation and predictive analytics' },
    { name: 'Cloud Computing', description: 'Scalable infrastructure and platform services' },
    { name: 'IoT Integration', description: 'Connected devices and real-time data collection' },
    { name: 'Blockchain', description: 'Secure transactions and data integrity' },
    { name: 'Advanced Analytics', description: 'Business intelligence and data visualization' },
    { name: 'API Integration', description: 'Seamless system connectivity and data flow' }
=======
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
>>>>>>> main
  ];

  return (
    <MainLayout
      title="Digital Transformation Solutions - Zion Tech Group"
<<<<<<< HEAD
      description="Transform your business with comprehensive digital transformation solutions. Modernize operations, enhance customer experience, and drive growth with cutting-edge technology."
      keywords="digital transformation, business modernization, process automation, cloud migration, AI implementation, digital strategy"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
=======
      description="Transform your business with comprehensive digital transformation services. Cloud migration, process automation, and modern technology implementation."
      keywords="digital transformation, cloud migration, process automation, business intelligence, cybersecurity"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
>>>>>>> main
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
<<<<<<< HEAD
            Digital Transformation Solutions
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200"
=======
            Digital
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> Transformation</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200"
>>>>>>> main
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
<<<<<<< HEAD
            Transform your business for the digital age with comprehensive solutions that modernize operations, 
            enhance customer experiences, and drive sustainable growth.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
=======
            Accelerate your business growth with comprehensive digital transformation solutions. 
            Modernize your operations, enhance customer experiences, and drive innovation across your organization.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
>>>>>>> main
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
<<<<<<< HEAD
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Start Your Transformation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/case-studies"
              className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Success Stories
=======
            <Link href="/contact" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg">
              Start Transformation
            </Link>
            <Link href="/solutions" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105">
              View All Solutions
>>>>>>> main
            </Link>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Transformation Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Transformation Focus Areas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital transformation across all aspects of your business operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transformationAreas.map((area, index) => (
              <motion.div
                key={area.title}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{area.title}</h3>
                <p className="text-gray-600 mb-6">{area.description}</p>
                <ul className="space-y-2">
                  {area.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Proven Results</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Measurable improvements achieved through our digital transformation solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                className="bg-white rounded-lg shadow-lg p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{metric.metric}</div>
                <div className="text-gray-600 text-sm">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Transformation Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured approach to digital transformation that ensures successful outcomes and sustainable change.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {transformationPhases.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  className="bg-white rounded-lg shadow-lg p-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-semibold text-gray-800">{phase.title}</h3>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {phase.duration}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{phase.description}</p>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Key Deliverables:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {phase.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
=======
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
>>>>>>> main
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Technologies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Enabling Technologies</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge technologies that power successful digital transformations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{tech.name}</h3>
                <p className="text-gray-600 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
=======
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
>>>>>>> main
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto text-blue-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's discuss your digital transformation goals and create a roadmap for success.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
=======
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
>>>>>>> main
        </div>
      </section>
    </MainLayout>
  );
};

export default DigitalTransformation;