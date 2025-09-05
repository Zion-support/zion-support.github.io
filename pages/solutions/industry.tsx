import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Shield, 
  Users, 
  Building,
  CheckCircle,
  ArrowRight,
  Heart,
  GraduationCap,
  ShoppingCart,
  Factory,
  DollarSign,
  Gavel
} from 'lucide-react';
import MainLayout from '../../components/layout/MainLayout';

const industries = [
  {
    name: 'Healthcare',
    icon: Heart,
    description: 'HIPAA-compliant solutions for healthcare providers',
    features: ['Patient management', 'Telemedicine', 'Medical records', 'Compliance tools'],
    color: 'from-red-600 to-pink-600'
  },
  {
    name: 'Financial Services',
    icon: DollarSign,
    description: 'Secure banking and fintech solutions',
    features: ['Payment processing', 'Risk management', 'Compliance', 'Fraud detection'],
    color: 'from-green-600 to-emerald-600'
  },
  {
    name: 'Education',
    icon: GraduationCap,
    description: 'Educational technology platforms',
    features: ['Learning management', 'Student portals', 'Assessment tools', 'Virtual classrooms'],
    color: 'from-blue-600 to-cyan-600'
  },
  {
    name: 'Manufacturing',
    icon: Factory,
    description: 'IoT and supply chain optimization',
    features: ['IoT monitoring', 'Supply chain', 'Quality control', 'Predictive maintenance'],
    color: 'from-orange-600 to-yellow-600'
  },
  {
    name: 'Retail & E-commerce',
    icon: ShoppingCart,
    description: 'Omnichannel retail solutions',
    features: ['E-commerce platforms', 'Inventory management', 'Customer analytics', 'Mobile apps'],
    color: 'from-purple-600 to-indigo-600'
  },
  {
    name: 'Government',
    icon: Gavel,
    description: 'Secure government technology solutions',
    features: ['Citizen portals', 'Document management', 'Security compliance', 'Digital services'],
    color: 'from-gray-600 to-slate-600'
  }
];

const complianceStandards = [
  { name: 'HIPAA', description: 'Healthcare data protection' },
  { name: 'SOC 2 Type II', description: 'Security and availability' },
  { name: 'ISO 27001', description: 'Information security management' },
  { name: 'GDPR', description: 'Data privacy regulation' },
  { name: 'PCI DSS', description: 'Payment card industry security' },
  { name: 'FedRAMP', description: 'Government cloud security' }
];

const caseStudies = [
  {
    industry: 'Healthcare',
    client: 'Regional Medical Center',
    challenge: 'Digital transformation of patient records',
    solution: 'HIPAA-compliant patient management system',
    results: ['40% faster patient processing', '99.9% uptime', 'Full HIPAA compliance']
  },
  {
    industry: 'Financial Services',
    client: 'Community Bank',
    challenge: 'Modernize online banking platform',
    solution: 'Secure mobile banking application',
    results: ['60% increase in mobile usage', 'Zero security incidents', '50% faster transactions']
  },
  {
    industry: 'Education',
    client: 'University System',
    challenge: 'Remote learning infrastructure',
    solution: 'Comprehensive learning management platform',
    results: ['100K+ students served', '95% user satisfaction', 'Seamless remote learning']
  }
];

export default function IndustrySolutionsPage() {
  return (
    <MainLayout
      title="Industry Solutions - Zion Tech Group"
      description="Specialized technology solutions for healthcare, finance, education, manufacturing, retail, and government industries."
      keywords="industry solutions, healthcare technology, fintech, education technology, manufacturing IoT, retail solutions"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Industry{' '}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Specialized Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
                Deep industry expertise and specialized solutions for healthcare, finance, 
                education, manufacturing, retail, and government sectors.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                <Link href="/contact">
                  <span className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Get Industry Quote
                  </span>
                </Link>
                <Link href="/solutions">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    View All Solutions
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Industry Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We understand the unique challenges and requirements of different industries 
                and deliver tailored solutions that meet specific regulatory and operational needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                >
                  <div className={`h-2 bg-gradient-to-r ${industry.color}`}></div>
                  <div className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {industry.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      {industry.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {industry.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Compliance & Security
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We ensure all solutions meet industry-specific compliance requirements 
                and security standards.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={standard.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {standard.name}
                  </h3>
                  <p className="text-gray-600">
                    {standard.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Industry Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how we've helped organizations across different industries 
                transform their technology and operations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.industry}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="text-blue-600 font-semibold mb-2">
                    {study.industry}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {study.client}
                  </h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Challenge:</h4>
                    <p className="text-sm text-gray-600">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Solution:</h4>
                    <p className="text-sm text-gray-600">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready for Industry-Specific Solutions?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-purple-100">
                Let's discuss your industry requirements and create a solution 
                that meets your specific compliance and operational needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact">
                  <span className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Get Industry Consultation
                  </span>
                </Link>
                <Link href="/about">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Learn More
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}