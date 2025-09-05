import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building, 
  Shield, 
  Users, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Globe,
  Lock,
  FileText,
  Smartphone,
  Database,
  Zap
} from 'lucide-react';
import MainLayout from '../../components/layout/MainLayout';

const solutions = [
  {
    title: 'Citizen Portals',
    description: 'Secure digital platforms for citizen services and government interactions.',
    icon: Globe,
    features: ['Online Services', 'Document Management', 'Digital Identity', 'Service Requests']
  },
  {
    title: 'Data Analytics',
    description: 'Advanced analytics for policy making and public service optimization.',
    icon: BarChart3,
    features: ['Policy Analytics', 'Performance Metrics', 'Predictive Modeling', 'Data Visualization']
  },
  {
    title: 'Digital Services',
    description: 'Modernized government services with streamlined digital processes.',
    icon: Smartphone,
    features: ['Mobile Apps', 'Online Forms', 'Digital Payments', 'Service Automation']
  },
  {
    title: 'Security Compliance',
    description: 'Robust security measures and compliance with government regulations.',
    icon: Lock,
    features: ['Data Protection', 'Access Controls', 'Audit Trails', 'Compliance Monitoring']
  }
];

const benefits = [
  {
    title: 'Improved Citizen Services',
    description: 'Streamlined digital services provide better citizen experience and accessibility.',
    icon: Users
  },
  {
    title: 'Enhanced Security',
    description: 'Robust security measures protect sensitive government data and citizen information.',
    icon: Shield
  },
  {
    title: 'Cost Efficiency',
    description: 'Digital transformation reduces operational costs and improves resource utilization.',
    icon: BarChart3
  },
  {
    title: 'Data-Driven Governance',
    description: 'Advanced analytics enable evidence-based policy making and service improvement.',
    icon: Database
  }
];

const stats = [
  { number: '80%', label: 'Service Efficiency' },
  { number: '95%', label: 'Citizen Satisfaction' },
  { number: '50%', label: 'Cost Reduction' },
  { number: '100%', label: 'Security Compliance' }
];

export default function GovernmentPage() {
  return (
    <MainLayout
      title="Government Technology Solutions - Zion Tech Group"
      description="Modernize public services with secure citizen portals, data analytics, digital transformation, and compliance solutions for government agencies."
      keywords="government technology, digital government, citizen services, public sector IT, government compliance, civic technology"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-slate-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-zinc-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <Building className="w-16 h-16 text-gray-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Government{' '}
                  <span className="bg-gradient-to-r from-gray-400 to-slate-400 bg-clip-text text-transparent">
                    Technology Solutions
                  </span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Modernize public services with secure citizen portals, advanced data analytics, 
                digital transformation, and compliance solutions designed for government agencies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-gray-500 to-slate-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Government Consultation
                </Link>
                <Link href="/it-services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Explore IT Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Government Solutions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our comprehensive government technology solutions are designed to enhance citizen services, 
                improve operational efficiency, and ensure regulatory compliance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-slate-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose Our Government Solutions?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our government technology solutions deliver measurable improvements in citizen services, 
                operational efficiency, and regulatory compliance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center p-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-gray-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-gray-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Shield className="w-10 h-10 text-blue-600" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Security & Compliance
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our government solutions are built with the highest security standards and regulatory compliance 
                  in mind, ensuring protection of sensitive data and adherence to government requirements.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    FISMA Compliant
                  </span>
                  <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    SOC 2 Type II
                  </span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    FedRAMP Ready
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                    NIST Framework
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-600 to-slate-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Modernize Government?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our government technology experts help you implement secure, compliant, and efficient public sector solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-gray-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Government Consultation
                </Link>
                <Link href="/it-services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-600 transition-all duration-300 font-semibold">
                  Explore IT Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}