import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Rocket, 
  BarChart3, 
  Settings, 
  Users, 
  Brain, 
  Network, 
  Lock, 
  TrendingUp, 
  Clock,
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react';

const solutions = [
  {
    title: 'Enterprise Solutions',
    icon: Shield,
    description: 'Comprehensive enterprise-grade solutions designed for large organizations with complex requirements.',
    color: 'from-blue-500 to-indigo-500',
    features: [
      'Scalable Architecture',
      'Enterprise Security',
      '24/7 Support',
      'Custom Integration',
      'Compliance Management',
      'Advanced Analytics'
    ],
    benefits: [
      'Reduced Operational Costs',
      'Enhanced Security',
      'Improved Efficiency',
      'Better Compliance'
    ],
    pricing: 'Custom Pricing',
    timeline: '3-12 months',
    popular: true
  },
  {
    title: 'Startup Solutions',
    icon: Rocket,
    description: 'Rapid deployment solutions designed to help startups scale quickly and efficiently.',
    color: 'from-green-500 to-emerald-500',
    features: [
      'Rapid Deployment',
      'Cost-effective Pricing',
      'Scalable Infrastructure',
      'Quick Setup',
      'Essential Features',
      'Growth Support'
    ],
    benefits: [
      'Fast Time to Market',
      'Lower Initial Investment',
      'Scalable Growth',
      'Expert Guidance'
    ],
    pricing: 'Starting at $1,000/month',
    timeline: '2-8 weeks',
    popular: true
  },
  {
    title: 'Industry Solutions',
    icon: BarChart3,
    description: 'Specialized solutions tailored to specific industries and their unique requirements.',
    color: 'from-purple-500 to-pink-500',
    features: [
      'Industry Expertise',
      'Compliance Ready',
      'Specialized Features',
      'Domain Knowledge',
      'Best Practices',
      'Regulatory Support'
    ],
    benefits: [
      'Industry-specific Features',
      'Compliance Assurance',
      'Expert Knowledge',
      'Proven Results'
    ],
    pricing: 'Starting at $5,000/project',
    timeline: '1-6 months'
  },
  {
    title: 'Custom Development',
    icon: Settings,
    description: 'Fully customized solutions built from scratch to meet your specific business requirements.',
    color: 'from-orange-500 to-red-500',
    features: [
      '100% Custom Built',
      'Unique Requirements',
      'Full Control',
      'Advanced Features',
      'Integration Support',
      'Ongoing Maintenance'
    ],
    benefits: [
      'Perfect Fit',
      'Competitive Advantage',
      'Full Ownership',
      'Unlimited Customization'
    ],
    pricing: 'Starting at $25,000/project',
    timeline: '3-18 months'
  }
];

const industries = [
  { name: 'Healthcare', icon: Users, description: 'HIPAA-compliant solutions for healthcare providers' },
  { name: 'Finance', icon: TrendingUp, description: 'Secure financial technology solutions' },
  { name: 'Manufacturing', icon: Settings, description: 'IoT and automation for manufacturing' },
  { name: 'Education', icon: Brain, description: 'Learning management and educational technology' },
  { name: 'Retail', icon: Network, description: 'E-commerce and retail management systems' },
  { name: 'Government', icon: Lock, description: 'Secure government and public sector solutions' }
];

export default function SolutionsPage() {
  return (
    <>
      <Head>
        <title>Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology solutions for enterprises, startups, and industries. Custom development, AI integration, and scalable infrastructure." />
        <meta name="keywords" content="enterprise solutions, startup solutions, custom development, industry solutions, technology consulting" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Technology Solutions
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  That Drive Success
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                From startups to enterprises, we deliver comprehensive technology solutions 
                that transform businesses and accelerate growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
                >
                  Get Started Today
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  View Our Work
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Solution Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive range of technology solutions tailored to your specific needs and industry requirements.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative overflow-hidden"
                >
                  {solution.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Popular
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.color} p-4 mb-6`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {solution.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600">
                          <ArrowRight className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-500">Pricing</p>
                      <p className="font-semibold text-gray-900">{solution.pricing}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Timeline</p>
                      <p className="font-semibold text-gray-900">{solution.timeline}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Industry Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We have deep expertise across multiple industries, delivering solutions that meet specific regulatory and business requirements.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-4 mx-auto mb-4">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600">
                    {industry.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss your specific requirements and create a solution that drives your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
                >
                  Schedule Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Download Brochure
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}