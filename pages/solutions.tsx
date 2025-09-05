import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Rocket, BarChart3, Settings, ArrowRight, CheckCircle, Users, Building, Globe } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const solutions = [
  {
    title: 'Enterprise Solutions',
    description: 'Comprehensive technology solutions for large organizations',
    icon: Building,
    href: '/solutions/enterprise',
    features: ['Scalable Architecture', 'Enterprise Security', '24/7 Support', 'Custom Integration'],
    stats: { clients: '50+', projects: '200+', uptime: '99.9%' }
  },
  {
    title: 'Startup Solutions',
    description: 'Rapid development and scaling solutions for growing startups',
    icon: Rocket,
    href: '/solutions/startup',
    features: ['Rapid Prototyping', 'Cost Optimization', 'Scalable Infrastructure', 'MVP Development'],
    stats: { clients: '100+', projects: '300+', growth: '300%' }
  },
  {
    title: 'Industry Solutions',
    description: 'Specialized solutions tailored to specific industries',
    icon: BarChart3,
    href: '/solutions/industry',
    features: ['Industry Expertise', 'Compliance Ready', 'Custom Workflows', 'Regulatory Support'],
    stats: { industries: '15+', compliance: '100%', expertise: '10+ years' }
  },
  {
    title: 'Custom Development',
    description: 'Bespoke software solutions designed for your unique needs',
    icon: Settings,
    href: '/solutions/custom',
    features: ['Tailored Solutions', 'Full Stack Development', 'API Integration', 'Ongoing Support'],
    stats: { projects: '150+', satisfaction: '98%', delivery: 'On Time' }
  }
];

const industries = [
  { name: 'Healthcare', icon: '🏥', description: 'HIPAA-compliant solutions for healthcare providers' },
  { name: 'Finance', icon: '💰', description: 'Secure financial technology and payment solutions' },
  { name: 'E-commerce', icon: '🛒', description: 'Scalable online retail and marketplace platforms' },
  { name: 'Education', icon: '🎓', description: 'Learning management and educational technology' },
  { name: 'Manufacturing', icon: '🏭', description: 'IoT and automation solutions for manufacturing' },
  { name: 'Real Estate', icon: '🏠', description: 'Property management and real estate platforms' }
];

export default function SolutionsPage() {
  return (
    <MainLayout
      title="Solutions - Zion Tech Group"
      description="Comprehensive technology solutions for enterprises, startups, and industries. Custom development, AI integration, and scalable platforms."
      keywords="technology solutions, enterprise software, startup development, custom development, industry solutions"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Comprehensive technology solutions tailored to your business needs, from startups to enterprises
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/case-studies"
                  className="px-8 py-4 border border-white text-white hover:bg-white hover:text-gray-900 rounded-lg font-semibold transition-colors"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Solutions</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive technology solutions designed to accelerate your business growth and digital transformation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                      <p className="text-gray-600">{solution.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(solution.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={solution.href}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Expertise</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We have deep expertise across multiple industries, delivering solutions that meet specific regulatory and business requirements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our solutions can help you achieve your business goals and drive digital transformation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/case-studies"
                  className="px-8 py-4 border border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-semibold transition-colors"
                >
                  View Our Work
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}