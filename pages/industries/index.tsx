import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Heart,
  DollarSign,
  Settings,
  ShoppingCart,
  ArrowRight,
  Building,
  Users,
  CheckCircle,
  Globe,
  Database,
  Shield,
  Cloud,
  Brain
} from 'lucide-react';
<<<<<<< HEAD
import SimpleLayout from '../../components/SimpleLayout';
=======
import Layout from '../../components/Layout';
>>>>>>> db49e3d85ef86349882b1133a9775950c233879f

const industries = [
  {
    title: 'Healthcare',
    description: 'Transform healthcare delivery with innovative technology solutions',
    icon: Heart,
    href: '/industries/healthcare',
    features: ['Electronic Health Records', 'Telemedicine Platforms', 'AI Diagnostics']
  },
  {
    title: 'Finance',
    description: 'Secure and scalable financial technology solutions',
    icon: DollarSign,
    href: '/industries/finance',
    features: ['Digital Banking', 'Payment Processing', 'Risk Management']
  },
  {
    title: 'Manufacturing',
    description: 'Smart manufacturing solutions for Industry 4.0',
    icon: Settings,
    href: '/industries/manufacturing',
    features: ['IoT Integration', 'Predictive Maintenance', 'Quality Control']
  },
  {
    title: 'Retail',
    description: 'Enhance customer experience with retail technology',
    icon: ShoppingCart,
    href: '/industries/retail',
    features: ['E-commerce Platforms', 'Inventory Management', 'Customer Analytics']
  },
  {
    title: 'Education',
    description: 'Modernize education with technology solutions',
    icon: Users,
    href: '/industries/education',
    features: ['Learning Management Systems', 'Virtual Classrooms', 'Student Analytics']
  },
  {
    title: 'Government',
    description: 'Secure government technology solutions',
    icon: Globe,
    href: '/industries/government',
    features: ['Citizen Services', 'Data Security', 'Digital Transformation']
  }
]

export default function Industries() {
  return (
    <Layout
      title="Industry Solutions - Zion Tech Group"
      description="Specialized technology solutions for healthcare, finance, manufacturing, retail, education, and government sectors."
      keywords="industry solutions, healthcare technology, fintech, manufacturing IoT, retail technology, education technology, government services"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
                Industry Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Specialized technology solutions tailored to meet the unique challenges and opportunities across different industries.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We provide specialized technology solutions across various industries, helping organizations leverage technology to achieve their goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/20 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-blue-400 mb-6 group-hover:text-blue-300 transition-colors">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                      {industry.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {industry.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {industry.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link href={industry.href}>
                      <a className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:text-blue-200 transition-colors">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Don't See Your Industry?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                We work with organizations across all sectors. Contact us to discuss your specific industry needs.
              </p>
              <Link href="/contact">
                <a className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}