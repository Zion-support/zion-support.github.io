<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, Shield, Zap, Target, Users, BarChart3, ArrowRight, CheckCircle, Star, Award, Clock, Globe } from 'lucide-react';
import Layout from '../components/Layout';

=======
<<<<<<< HEAD
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { Brain, Server, Zap, ArrowRight, CheckCircle } from 'lucide-react';

=======

const serviceCategories = [;
  {}
    title: 'AI Services,',
>>>>>>> main
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
const serviceCategories = [
  {
    title: 'AI Services',
    description: 'Cutting-edge artificial intelligence solutions for modern businesses',
    icon: Brain,
<<<<<<< HEAD
    services: ['AI Analytics', 'Machine Learning', 'Natural Language Processing', 'Computer Vision'],
    link: '/ai-services',
    color: 'from-blue-500 to-purple-600'
=======
<<<<<<< HEAD
    description: 'Cutting-edge artificial intelligence solutions that transform your business.',
    href: '/ai-services',
    color: 'from-blue-500 to-cyan-500',
    services: [
      'Machine Learning',
      'Natural Language Processing',
      'Computer Vision',
      'AI Automation',
      'Predictive Analytics',
      'Custom AI Development'
    ]
  },
  {
    title: 'IT Services',
    icon: Server,
    description: 'Comprehensive IT solutions including cloud, security, and infrastructure management.',
    href: '/it-services',
    color: 'from-green-500 to-emerald-500',
    services: [
      'Cloud Infrastructure',
      'Cybersecurity',
      'Network Management',
      'Data Backup & Recovery',
      'IT Consulting',
      'System Integration'
    ]
  },
  {
    title: 'Micro SaaS',
    icon: Zap,
    description: 'Innovative micro SaaS solutions designed for specific business needs.',
    href: '/micro-saas',
    color: 'from-purple-500 to-pink-500',
    services: [
      'AI Content Marketing',
      'Lead Management',
      'Analytics Dashboard',
      'Process Automation',
      'Financial Analysis',
      'Custom Solutions'
    ]
  }
];

export default function ServicesOverview() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Services Overview - Zion Tech Group</title>
        <meta name="description" content="Comprehensive overview of our AI, IT, and Micro SaaS services" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{category.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Services Include:</h4>
                <ul className="space-y-1">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link href={category.href}>
                <a className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
=======
    description: 'Cutting-edge artificial intelligence solutions that transform your business,',
    href: '/ai-services,',
    color: 'from-blue-500 to-cyan-500,',
    services: [;
      'Machine Learning,',
      'Natural Language Processing',',
      'Computer Vision',',
      'AI Automation',',
      'Predictive Analytics',',
      'Custom AI Development'';
    ],
    stats: { projects: '150+, satisfaction: '98%' }',
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
  },
  {
    title: 'IT Services',
    description: 'Comprehensive IT solutions and infrastructure management',
    icon: Network,
    services: ['Cloud Migration', 'System Integration', 'Network Security', 'Data Management'],
    link: '/it-services',
    color: 'from-green-500 to-blue-600'
  },
  {
    title: 'Micro SAAS',
    description: 'Innovative micro software solutions for specific business needs',
    icon: Cloud,
    services: ['Workflow Automation', 'Project Management', 'Customer Analytics', 'API Integration'],
    link: '/micro-saas',
    color: 'from-purple-500 to-pink-600'
  },
  {
    title: 'Security',
    description: 'Advanced cybersecurity and data protection solutions',
    icon: Shield,
    services: ['Threat Detection', 'Data Encryption', 'Access Control', 'Compliance Management'],
    link: '/security',
    color: 'from-red-500 to-orange-600'
  },
  {
    title: 'Automation',
    description: 'Intelligent automation solutions to streamline operations',
    icon: Zap,
    services: ['Process Automation', 'Workflow Optimization', 'Task Scheduling', 'Integration Hub'],
    link: '/automation',
    color: 'from-yellow-500 to-red-600'
  },
  {
    title: 'Analytics',
    description: 'Data-driven insights and business intelligence solutions',
    icon: BarChart3,
    services: ['Business Intelligence', 'Predictive Analytics', 'Data Visualization', 'Reporting'],
    link: '/analytics',
    color: 'from-indigo-500 to-purple-600'
  }
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' },
  { number: '50+', label: 'Countries Served' }
];

const benefits = [
  {
    title: 'Expert Team',
    description: 'Experienced professionals with deep industry knowledge',
    icon: Users
  },
  {
    title: 'Cutting-Edge Technology',
    description: 'Latest technologies and innovative solutions',
    icon: Target
  },
  {
    title: 'Scalable Solutions',
    description: 'Solutions that grow with your business',
    icon: Globe
  },
  {
    title: 'Proven Results',
    description: 'Track record of successful implementations',
    icon: Award
  }
];

export default function ServicesOverviewPage() {
  return (
    <Layout
      title="Services Overview - Zion Tech Group"
      description="Comprehensive overview of our technology services and solutions designed to transform your business."
      keywords="services, technology solutions, AI, IT, micro SAAS, security, automation, analytics"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive technology services designed to transform your business operations, 
                enhance security, and drive innovation across all technology domains.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Service Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive range of technology services to meet all your business needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className={`h-32 bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-16 h-16 text-white" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {category.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-gray-900 text-sm">Key Services:</h4>
                      <ul className="space-y-1">
                        {category.services.map((service, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      href={category.link}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through innovation, expertise, and unwavering commitment to your success.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how our comprehensive services can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Get Started
                </Link>
                <Link
                  href="/case-studies"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
=======
              viewport={{ once: true }}
            >,
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">";
                Ready to Transform Your Business?;
              </h2>;
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">";
                Let's discuss how our technology services can help you achieve your goals and drive growth.';
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <Link;
                  href="/contact"";
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"";
                >;
                  Get Free Consultation;
                </Link>;
                <Link;
                  href="/sitemap"";
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"";
                >;
                  Explore All Services;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>;
>>>>>>> main
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
  );
}