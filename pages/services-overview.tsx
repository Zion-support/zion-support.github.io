<<<<<<< HEAD
import { motion } from 'framer-motion';
import Head from 'next/head';
<<<<<<< HEAD
import Link from 'next/link';
import Layout from '../components/Layout';
import { Brain, Server, Zap, ArrowRight, CheckCircle } from 'lucide-react';
=======
import Layout from '../components/Layout';
import { Brain, Server, Cloud } from 'lucide-react';
>>>>>>> pr-11914
=======
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Zap, Cloud, Shield, BarChart3, Users, Globe } from 'lucide-react';
import Layout from '../components/Layout';
>>>>>>> pr-11913

const serviceCategories = [
  {
    title: 'AI Services',
<<<<<<< HEAD
<<<<<<< HEAD
    description: 'Cutting-edge artificial intelligence solutions for modern businesses',
    icon: Brain,
    services: [
      'AI Email Responder',
      'Predictive Analytics',
      'Content Generation',
      'Natural Language Processing'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud solutions for your business needs',
    icon: Server,
    services: [
      'Cloud Migration',
      'Infrastructure Management',
      'Auto-scaling Solutions',
      'Disaster Recovery'
    ],
    color: 'from-green-500 to-teal-500'
  },
  {
    title: 'Micro SaaS',
    description: 'Complete SaaS solutions designed for small and medium businesses',
    icon: Zap,
    services: [
      'SaaS Development',
      'Multi-tenant Architecture',
      'Payment Integration',
      'User Management'
    ],
    color: 'from-purple-500 to-pink-500'
=======
    description: 'Cutting-edge artificial intelligence solutions',
    icon: Brain
  },
  {
    title: 'IT Services',
    description: 'Comprehensive IT infrastructure and support',
    icon: Server
  },
  {
    title: 'Cloud Services',
    description: 'Scalable cloud solutions for modern businesses',
    icon: Cloud
>>>>>>> pr-11914
  }
];

export default function ServicesOverviewPage() {
  return (
<<<<<<< HEAD
    <Layout
      title="Services Overview - Zion Tech Group"
      description="Comprehensive technology services including AI, cloud infrastructure, and micro SaaS solutions."
      keywords="services, AI services, cloud computing, SaaS, technology solutions"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
=======
    description: 'Transform your business with artificial intelligence and machine learning solutions.',
    icon: Zap,
    color: 'from-purple-500 to-pink-500',
    services: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
  },
  {
    title: 'Cloud Solutions',
    description: 'Migrate and optimize your infrastructure with our comprehensive cloud services.',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500',
    services: ['Cloud Migration', 'Infrastructure as Code', 'Cost Optimization', 'Multi-cloud Strategy']
  },
  {
    title: 'Security & Compliance',
    description: 'Protect your data and ensure compliance with our security solutions.',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    services: ['Threat Detection', 'Data Encryption', 'Compliance Auditing', 'Incident Response']
  },
  {
    title: 'Data Analytics',
    description: 'Unlock insights from your data with advanced analytics and visualization.',
    icon: BarChart3,
    color: 'from-green-500 to-emerald-500',
    services: ['Business Intelligence', 'Data Warehousing', 'Real-time Analytics', 'Custom Dashboards']
  },
  {
    title: 'Digital Transformation',
    description: 'Modernize your business processes and operations with digital solutions.',
    icon: Users,
    color: 'from-indigo-500 to-purple-500',
    services: ['Process Automation', 'Workflow Optimization', 'Change Management', 'Training & Support']
  },
  {
    title: 'Custom Development',
    description: 'Build tailored solutions that meet your specific business requirements.',
    icon: Globe,
    color: 'from-teal-500 to-blue-500',
    services: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']
  }
];

export default function ServicesOverview() {
  return (
    <Layout>
      <Head>
        <title>Services Overview - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive range of technology services designed to transform your business." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
>>>>>>> pr-11913
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Services
              </h1>
<<<<<<< HEAD
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth and innovation
=======
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Explore our comprehensive range of technology services designed to transform your business.
>>>>>>> pr-11913
              </p>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Service Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Service Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive range of technology services
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className={`h-48 bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-16 h-16 text-white" />
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{category.title}</h3>
                    <p className="text-gray-600 mb-6">{category.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {service}
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      href={`/services/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
=======
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviceCategories.map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
                      <p className="text-gray-600 mb-6">{category.description}</p>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Services Include:</h4>
                        <ul className="space-y-2">
                          {category.services.map((service, serviceIndex) => (
                            <li key={serviceIndex} className="text-sm text-gray-600">
                              • {service}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
>>>>>>> pr-11913
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your project and discover how our services can help your business succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Contact Us
                </Link>
                <Link
                  href="/demo"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Request Demo
                </Link>
              </div>
            </motion.div>
=======
    <Layout title="Services Overview - Zion Tech Group">
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100">Comprehensive technology solutions</p>
>>>>>>> pr-11914
          </div>
        </section>
      </div>
=======
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Contact us today to discuss your project requirements and discover how we can help transform your business.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>
>>>>>>> pr-11913
    </Layout>
  );
}
