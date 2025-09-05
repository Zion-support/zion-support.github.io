import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Building, Shield, Users, BarChart3, ArrowRight, CheckCircle, Clock, Globe, Database, Lock } from 'lucide-react';
import Layout from "../../components/Layout";
=======
import Layout from '../../components/Layout';
import { Building2, Users, Shield, Zap, Target, CheckCircle, ArrowRight } from 'lucide-react';

>>>>>>> 5a26b90779d51bf7627c9dcb90ec57f4a22fa8ec
const features = [
  {
    icon: Building2,
    title: 'Scalable Architecture',
    description: 'Enterprise-grade solutions that grow with your business'
  },
  {
    icon: Users,
    title: 'Multi-tenant Support',
    description: 'Secure multi-user environments with role-based access'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Advanced security protocols and compliance standards'
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Optimized for speed and reliability at scale'
  },
  {
    icon: Target,
    title: 'Custom Integration',
    description: 'Seamless integration with existing enterprise systems'
  },
  {
    icon: CheckCircle,
    title: '24/7 Support',
    description: 'Dedicated enterprise support team'
  }
];

const benefits = [
  'Reduced operational costs by up to 40%',
  'Improved system reliability and uptime',
  'Enhanced security and compliance',
  'Streamlined business processes',
  'Better data management and analytics',
  'Faster time-to-market for new initiatives'
];
<<<<<<< HEAD
const stats = [
  { number: '50+', label: 'Enterprise Clients' },
  { number: '200+', label: 'Projects Delivered' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' }
=======
import { 
  Building2, 
  Shield, 
  Cloud, 
  Brain, 
  ArrowRight,
  CheckCircle,
  Users,
  Database,
  Lock,
  Zap,
  Globe,
  BarChart3
} from 'lucide-react';
import Layout from '../../components/Layout';

const enterpriseFeatures = [
  {
    title: 'Scalable Infrastructure',
    description: 'Enterprise-grade cloud infrastructure that scales with your business needs',
    icon: Cloud,
    benefits: [
      'Auto-scaling capabilities',
      'High availability architecture',
      'Global data center presence',
      '99.9% uptime guarantee'
    ]
  },
  {
    title: 'Advanced Security',
    description: 'Comprehensive security framework to protect your enterprise data and systems',
    icon: Shield,
    benefits: [
      'End-to-end encryption',
      'Multi-factor authentication',
      'SOC 2 Type II compliance',
      '24/7 security monitoring'
    ]
  },
  {
    title: 'AI-Powered Analytics',
    description: 'Leverage artificial intelligence to gain insights and make data-driven decisions',
    icon: Brain,
    benefits: [
      'Predictive analytics',
      'Real-time data processing',
      'Machine learning models',
      'Custom AI solutions'
    ]
  },
  {
    title: 'Enterprise Integration',
    description: 'Seamlessly integrate with your existing enterprise systems and workflows',
    icon: Database,
    benefits: [
      'API-first architecture',
      'Legacy system integration',
      'Single sign-on (SSO)',
      'Custom connectors'
    ]
  }
];

const enterpriseServices = [
  {
    title: 'Digital Transformation',
    description: 'Complete digital transformation strategy and implementation',
    icon: Globe,
    features: [
      'Process automation',
      'Cloud migration',
      'Data modernization',
      'Change management'
    ]
  },
  {
    title: 'Enterprise AI Solutions',
    description: 'Custom AI solutions tailored to your enterprise needs',
    icon: Brain,
    features: [
      'Natural language processing',
      'Computer vision',
      'Predictive modeling',
      'Intelligent automation'
    ]
  },
  {
    title: 'Cybersecurity Services',
    description: 'Comprehensive security solutions for enterprise environments',
    icon: Lock,
    features: [
      'Security assessment',
      'Threat detection',
      'Incident response',
      'Compliance management'
    ]
  },
  {
    title: 'Data Analytics Platform',
    description: 'Advanced analytics platform for enterprise data insights',
    icon: BarChart3,
    features: [
      'Real-time dashboards',
      'Advanced reporting',
      'Data visualization',
      'Business intelligence'
    ]
  }
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
];

const industries = [
  {
    name: 'Financial Services',
    description: 'Banking, insurance, and fintech solutions',
    icon: Building2
  },
  {
    name: 'Healthcare',
    description: 'Healthcare systems and medical technology',
    icon: Users
  },
  {
    name: 'Manufacturing',
    description: 'Industrial IoT and smart manufacturing',
    icon: Zap
  },
  {
    name: 'Retail',
    description: 'E-commerce and retail technology solutions',
    icon: Globe
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'CTO, Global Financial Corp',
    content: 'Zion Tech Group transformed our entire IT infrastructure. Their enterprise solutions have improved our efficiency by 40% and reduced costs significantly.',
    company: 'Global Financial Corp'
  },
  {
    name: 'Michael Chen',
    title: 'VP Technology, HealthTech Solutions',
    content: 'The AI-powered analytics platform they built for us has revolutionized how we analyze patient data. The insights have been invaluable for improving patient outcomes.',
    company: 'HealthTech Solutions'
  },
  {
    name: 'David Rodriguez',
    title: 'IT Director, Manufacturing Inc',
    content: 'Their cybersecurity services gave us peace of mind. We now have enterprise-grade security that protects our sensitive manufacturing data.',
    company: 'Manufacturing Inc'
  }
];

export default function EnterpriseSolutionsPage() {
  return (
    <Layout
      title="Enterprise Solutions - Zion Tech Group"
<<<<<<< HEAD
      description="Comprehensive enterprise technology solutions including cloud migration, security, compliance, and custom development for large organizations."
      keywords="enterprise solutions, cloud migration, enterprise security, compliance, custom development, large organizations"
=======
      description="Comprehensive enterprise technology solutions including digital transformation, AI, cybersecurity, and cloud services for large organizations."
      keywords="enterprise solutions, digital transformation, enterprise AI, cybersecurity, cloud services, large organizations"
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
=======

export default function EnterpriseSolutions() {
  return (
    <Layout
      title="Enterprise Solutions - Zion Tech Group"
      description="Comprehensive enterprise technology solutions designed for large-scale businesses. Scalable, secure, and reliable solutions."
      keywords="enterprise solutions, large business, scalable technology, enterprise software"
>>>>>>> 5a26b90779d51bf7627c9dcb90ec57f4a22fa8ec
    >
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
<<<<<<< HEAD
              <div className="flex items-center justify-center mb-6">
                <Building className="w-16 h-16 text-blue-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold">
                  Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Comprehensive technology solutions designed for large organizations, ensuring scalability, security, and compliance
=======
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Enterprise Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Comprehensive technology solutions designed for large organizations. Scale, secure, and transform your enterprise with our proven expertise.
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Get Enterprise Quote
                </Link>
                <Link
                  href="/case-studies"
<<<<<<< HEAD
                  className="px-8 py-4 border border-white text-white hover:bg-white hover:text-gray-900 rounded-lg font-semibold transition-colors"
=======
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
                >
=======
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Enterprise Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transform your enterprise with scalable, secure, and intelligent technology solutions
                designed for large-scale operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
>>>>>>> 5a26b90779d51bf7627c9dcb90ec57f4a22fa8ec
                  View Case Studies
                </button>
              </div>
<<<<<<< HEAD
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD
        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
=======
>>>>>>> 5a26b90779d51bf7627c9dcb90ec57f4a22fa8ec
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
<<<<<<< HEAD
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
=======

        {/* Enterprise Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
<<<<<<< HEAD
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Capabilities</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our enterprise solutions are designed to meet the complex needs of large organizations with robust security, scalability, and compliance features
=======
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Enterprise-Grade Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Built for scale, security, and performance. Our enterprise solutions are designed to meet the complex needs of large organizations.
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<<<<<<< HEAD
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-xl p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Capabilities Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
=======
              {enterpriseFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 mb-6">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Enterprise Services */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Enterprise Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive services designed to address every aspect of your enterprise technology needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {enterpriseServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-blue-600 mb-4 group-hover:text-purple-600 transition-colors">
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
<<<<<<< HEAD
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive enterprise services covering all aspects of your technology infrastructure and digital transformation
=======
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our enterprise solutions are trusted by organizations across various industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {industry.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Enterprise Clients Say
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hear from enterprise leaders who have transformed their organizations with our solutions.
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <motion.div
<<<<<<< HEAD
                  key={capability.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                  <p className="text-gray-600">{capability.description}</p>
=======
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-gray-600 mb-6 italic">
                    "{testimonial.content}"
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                    <div className="text-sm text-blue-600">{testimonial.company}</div>
                  </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
                </motion.div>
=======
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Enterprise-Grade Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built for scale, security, and performance to meet the demands of modern enterprises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
>>>>>>> 5a26b90779d51bf7627c9dcb90ec57f4a22fa8ec
              ))}
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
<<<<<<< HEAD
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Scale Your Enterprise?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our enterprise solutions can help you achieve your business objectives and drive digital transformation
=======
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our enterprise experts help you design and implement solutions that will drive your organization forward.
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
<<<<<<< HEAD
                  className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Schedule Enterprise Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/solutions"
                  className="px-8 py-4 border border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-semibold transition-colors"
                >
                  View All Solutions
=======
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Schedule Consultation
                </Link>
                <Link
                  href="/case-studies"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Success Stories
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
                </Link>
=======
        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Our Enterprise Solutions?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our enterprise solutions are designed to handle the complexity and scale of large organizations
                  while maintaining security, performance, and reliability.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
>>>>>>> 5a26b90779d51bf7627c9dcb90ec57f4a22fa8ec
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-purple-700 p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Transform Your Enterprise?</h3>
                <p className="text-lg mb-6">
                  Let our experts help you design and implement the perfect enterprise solution
                  for your organization.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Scale Your Enterprise?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our enterprise solutions team to discuss your specific requirements
              and discover how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Sales
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}