<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Heart, 
  DollarSign, 
  Settings, 
  ShoppingCart, 
  BookOpen, 
  Home, 
  Building, 
  ArrowRight,
  CheckCircle,
  Users,
  Globe,
  Shield,
  Zap,
  Target
} from 'lucide-react';
<<<<<<< HEAD
<<<<<<< HEAD
import SimpleLayout from '../../components/SimpleLayout';
=======
import Layout from '../../components/Layout';
>>>>>>> db49e3d85ef86349882b1133a9775950c233879f
=======
import Layout from '../components/Layout';
=======
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Heart, DollarSign, Settings, ShoppingCart, BookOpen, Building, ArrowRight, CheckCircle, Users, Shield, Cloud, Brain } from 'lucide-react';
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
>>>>>>> main

const industries = [
  {
    title: 'Healthcare',
<<<<<<< HEAD
    description: 'Transform healthcare delivery with AI-powered medical solutions, telemedicine platforms, and patient management systems.',
    icon: Heart,
    href: '/industries/healthcare',
    color: 'from-red-500 to-pink-600',
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600',
    stats: ['40% efficiency improvement', '99.9% uptime', 'HIPAA compliant'],
    solutions: ['Medical AI', 'Telemedicine', 'Patient Management', 'Health Analytics']
  },
  {
    title: 'Finance',
    description: 'Revolutionize financial services with blockchain solutions, fraud detection, and automated trading systems.',
    icon: DollarSign,
    href: '/industries/finance',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
    stats: ['60% cost reduction', 'Real-time processing', 'Bank-grade security'],
    solutions: ['Fintech Apps', 'Blockchain', 'Fraud Detection', 'Trading Systems']
  },
  {
    title: 'Manufacturing',
    description: 'Optimize production with IoT sensors, predictive maintenance, and smart factory automation solutions.',
    icon: Settings,
    href: '/industries/manufacturing',
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    stats: ['30% productivity boost', 'Predictive maintenance', 'Real-time monitoring'],
    solutions: ['IoT Sensors', 'Smart Factory', 'Predictive Analytics', 'Automation']
  },
  {
    title: 'Retail',
    description: 'Enhance customer experience with e-commerce platforms, inventory management, and personalized shopping solutions.',
    icon: ShoppingCart,
    href: '/industries/retail',
    color: 'from-purple-500 to-violet-600',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    stats: ['50% sales increase', 'Personalized experience', '24/7 availability'],
    solutions: ['E-commerce', 'Inventory Management', 'Personalization', 'Analytics']
  },
  {
    title: 'Education',
    description: 'Revolutionize learning with EdTech platforms, virtual classrooms, and AI-powered educational tools.',
    icon: BookOpen,
    href: '/industries/education',
    color: 'from-orange-500 to-amber-600',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
    stats: ['80% engagement increase', 'Global reach', 'Adaptive learning'],
    solutions: ['Learning Management', 'Virtual Classrooms', 'AI Tutoring', 'Assessment Tools']
  },
  {
    title: 'Real Estate',
    description: 'Transform property management with PropTech solutions, virtual tours, and smart building technologies.',
    icon: Home,
    href: '/industries/real-estate',
    color: 'from-indigo-500 to-blue-600',
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    stats: ['35% faster transactions', 'Virtual tours', 'Smart buildings'],
    solutions: ['Property Management', 'Virtual Tours', 'Smart Buildings', 'Market Analytics']
  },
  {
    title: 'Government',
    description: 'Modernize public services with digital government solutions, citizen portals, and secure data management.',
    icon: Building,
    href: '/industries/government',
    color: 'from-gray-500 to-slate-600',
    bgColor: 'bg-gray-50',
    iconColor: 'text-gray-600',
    stats: ['90% citizen satisfaction', 'Secure data handling', '24/7 services'],
    solutions: ['Citizen Portals', 'Digital Services', 'Data Security', 'Compliance']
=======
    description: 'AI-powered medical imaging, electronic health records, and telemedicine solutions',
    icon: Heart,
    features: ['Medical Imaging AI', 'EHR Systems', 'Telemedicine', 'Health Analytics'],
    href: '/industries/healthcare'
  },
  {
    title: 'Finance',
    description: 'Fraud detection, predictive analytics, and digital banking solutions',
    icon: DollarSign,
    features: ['Fraud Detection', 'Risk Analytics', 'Digital Banking', 'Compliance'],
    href: '/industries/finance'
  },
  {
    title: 'Education',
    description: 'Learning management systems, virtual classrooms, and student analytics',
    icon: BookOpen,
    features: ['LMS Platforms', 'Virtual Classrooms', 'Student Analytics', 'Content Management'],
    href: '/industries/education'
  },
  {
    title: 'Government',
    description: 'Digital government platforms, cybersecurity, and citizen services',
    icon: Building,
    features: ['Digital Platforms', 'Cybersecurity', 'Citizen Services', 'Data Analytics'],
    href: '/industries/government'
  },
  {
    title: 'Manufacturing',
    description: 'Smart manufacturing, quality control, and supply chain optimization',
    icon: Settings,
    features: ['Smart Manufacturing', 'Quality Control', 'Supply Chain', 'IoT Solutions'],
    href: '/industries/manufacturing'
  },
  {
    title: 'Retail',
    description: 'E-commerce platforms, inventory management, and customer analytics',
    icon: ShoppingCart,
    features: ['E-commerce', 'Inventory Management', 'Customer Analytics', 'Personalization'],
    href: '/industries/retail'
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
  }
];

const benefits = [
  {
<<<<<<< HEAD
    icon: Target,
    title: 'Industry Expertise',
    description: 'Deep understanding of industry-specific challenges and requirements'
  },
  {
    icon: Shield,
    title: 'Compliance Ready',
    description: 'Built-in compliance with industry regulations and standards'
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Quick implementation with minimal disruption to operations'
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Industry-specialized support teams and ongoing maintenance'
=======
    title: 'Industry Expertise',
    description: 'Deep understanding of industry-specific challenges and requirements',
    icon: Brain
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored solutions designed for your specific industry needs',
    icon: Settings
  },
  {
    title: 'Compliance Ready',
    description: 'Solutions built with industry regulations and compliance in mind',
    icon: Shield
  },
  {
    title: 'Scalable Technology',
    description: 'Solutions that grow with your business and adapt to changing needs',
    icon: Cloud
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
  }
];

export default function IndustriesPage() {
  return (
<<<<<<< HEAD
    <Layout
      title="Industries - Zion Tech Group | Industry-Specific Technology Solutions"
      description="Discover how Zion Tech Group delivers tailored technology solutions across healthcare, finance, manufacturing, retail, education, real estate, and government sectors."
      keywords="industry solutions, healthcare technology, fintech, manufacturing IoT, retail e-commerce, EdTech, PropTech, government technology"
      canonical="https://ziontechgroup.com/industries"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Industry-Specific Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We deliver tailored technology solutions designed specifically for your industry's 
                unique challenges, regulations, and opportunities.
              </p>
=======
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Industry <span className="text-blue-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Specialized technology solutions designed for specific industries. 
                We understand the unique challenges and requirements of each sector.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/ai-services"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View AI Services
                </Link>
              </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
            </motion.div>
          </div>
        </section>

        {/* Industries Grid */}
<<<<<<< HEAD
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From healthcare to finance, manufacturing to retail, we have the expertise 
                and solutions to transform your industry.
=======
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our industry-specific solutions and see how we can help transform your sector.
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`p-6 ${industry.bgColor} rounded-t-lg`}>
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 ${industry.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                          <IconComponent className={`w-6 h-6 ${industry.iconColor}`} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{industry.title}</h3>
                      </div>
                      
                      <p className="text-gray-600 mb-4">
                        {industry.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Solutions:</h4>
                        <div className="flex flex-wrap gap-2">
                          {industry.solutions.map((solution, idx) => (
                            <span 
                              key={idx}
                              className="text-xs font-medium bg-white text-gray-700 px-2 py-1 rounded"
                            >
                              {solution}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                        <ul className="space-y-1">
                          {industry.stats.map((stat, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {stat}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <Link
                        href={industry.href}
                        className={`w-full bg-gradient-to-r ${industry.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center group-hover:scale-105`}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
=======
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <industry.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">{industry.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <ul className="space-y-2 mb-6">
                    {industry.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={industry.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
            </div>
          </div>
        </section>

        {/* Benefits Section */}
<<<<<<< HEAD
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Industry-Specific Solutions?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our industry-focused approach ensures that every solution is tailored to your 
                specific needs, regulations, and business objectives.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
=======
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Industry Solutions?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our industry-specific approach ensures that our solutions are perfectly tailored to your needs.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Industry?
              </h2>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Let's discuss how our industry-specific solutions can help you achieve 
                your business goals and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Get Started Today
                </Link>
                <Link 
                  href="/solutions" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  View All Solutions
=======
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Industry?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our industry-specific solutions can help your organization achieve its goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/it-services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View IT Services
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}