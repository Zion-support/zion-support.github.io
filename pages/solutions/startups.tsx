import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { ArrowRight, CheckCircle, Rocket, Users, Zap, Shield, Globe, TrendingUp, Clock, Target, Lightbulb, DollarSign } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Startups: NextPage = () => {
  const services = [
    {
      icon: Rocket,
      title: 'MVP Development',
      description: 'Build and launch your minimum viable product quickly and cost-effectively.',
      features: ['Rapid Prototyping', 'User Testing', 'Iterative Development', 'Market Validation']
    },
    {
      icon: Globe,
      title: 'Web & Mobile Apps',
      description: 'Create engaging web and mobile applications that users love.',
      features: ['Cross-Platform Development', 'Native Mobile Apps', 'Progressive Web Apps', 'App Store Optimization']
    },
    {
      icon: Users,
      title: 'User Experience Design',
      description: 'Design intuitive and engaging user experiences that drive adoption.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
    },
    {
      icon: Zap,
      title: 'Technical Architecture',
      description: 'Build scalable and maintainable technical foundations for growth.',
      features: ['Cloud Infrastructure', 'Microservices', 'API Development', 'Database Design']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Faster Time to Market',
      description: 'Launch your product 3x faster with our proven development methodologies.'
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective Solutions',
      description: 'Get maximum value with flexible pricing and efficient development processes.'
    },
    {
      icon: Shield,
      title: 'Scalable Architecture',
      description: 'Build for growth with architectures that scale with your business.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Leverage cutting-edge technologies to create competitive advantages.'
    }
  ];

  const stages = [
    {
      stage: 'Ideation',
      title: 'Concept & Validation',
      description: 'Validate your idea and define your product vision with market research and user interviews.',
      deliverables: ['Market Research', 'User Personas', 'Product Requirements', 'Technical Feasibility']
    },
    {
      stage: 'Development',
      title: 'Build & Test',
      description: 'Develop your MVP with agile methodologies and continuous user feedback.',
      deliverables: ['MVP Development', 'User Testing', 'Iterative Improvements', 'Quality Assurance']
    },
    {
      stage: 'Launch',
      title: 'Go to Market',
      description: 'Launch your product with marketing support and user acquisition strategies.',
      deliverables: ['Product Launch', 'Marketing Support', 'User Onboarding', 'Analytics Setup']
    },
    {
      stage: 'Scale',
      title: 'Growth & Optimization',
      description: 'Scale your product and optimize for growth with data-driven improvements.',
      deliverables: ['Performance Optimization', 'Feature Expansion', 'User Growth', 'Revenue Optimization']
    }
  ];

  const technologies = [
    { name: 'React & Next.js', category: 'Frontend' },
    { name: 'Node.js & Express', category: 'Backend' },
    { name: 'React Native', category: 'Mobile' },
    { name: 'PostgreSQL & MongoDB', category: 'Database' },
    { name: 'AWS & Vercel', category: 'Cloud' },
    { name: 'Docker & Kubernetes', category: 'DevOps' },
    { name: 'GraphQL & REST', category: 'API' },
    { name: 'Figma & Adobe XD', category: 'Design' }
  ];

  return (
    <MainLayout
      title="Startup Solutions - Zion Tech Group"
      description="Accelerate your startup's success with our comprehensive development services. From MVP development to scaling, we help startups build and launch innovative products."
      keywords="startup development, MVP development, startup solutions, product development, startup technology"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Startup
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400"> Solutions</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Accelerate your startup's success with our comprehensive development services. 
            From MVP development to scaling, we help startups build and launch innovative 
            products that users love and investors fund.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact" className="group">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg group-hover:shadow-xl">
                Launch Your Startup
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/solutions" className="group">
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105">
                View All Solutions
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Startup Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive services designed to take your startup from idea to market leader.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-orange-500 mr-3" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Startups Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges and opportunities facing startups today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Stages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that takes your startup from concept to market success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <div className="text-sm text-orange-600 font-semibold mb-2">{stage.stage}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{stage.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{stage.description}</p>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Deliverables:</h4>
                  <ul className="space-y-1">
                    {stage.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="text-xs text-gray-600 flex items-center">
                        <CheckCircle className="w-3 h-3 text-orange-500 mr-2" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern, scalable technologies that power successful startups.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="font-semibold text-gray-900 mb-2">{tech.name}</h3>
                <span className="text-sm text-orange-600 bg-orange-100 px-3 py-1 rounded-full">{tech.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Launch Your Startup?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
            Join successful startups that have built their products with our expert team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="group">
              <button className="bg-white text-orange-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg">
                Start Building Today
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/solutions" className="group">
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105">
                View All Solutions
              </button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Startups;