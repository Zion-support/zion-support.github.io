import * as React from 'react';
import Link from 'next/link';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { BarChart3,Building2,Database,Server,Shield,Users,CheckCircle,ArrowRight } from 'lucide-react';

const solutions = [
  {
    icon: Building2,
    title: 'Enterprise Architecture',
    description: 'Comprehensive IT architecture design for large-scale organizations',
    features: ['Scalable infrastructure', 'Microservices architecture', 'API management', 'Integration planning']
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Advanced security solutions for enterprise-grade protection',
    features: ['Identity management', 'Zero-trust architecture', 'Compliance automation', 'Threat detection']
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Enterprise data solutions for analytics and business intelligence',
    features: ['Data warehousing', 'ETL processes', 'Real-time analytics', 'Data governance']
  },
  {
    icon: Server,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions for enterprise workloads',
    features: ['Multi-cloud strategy', 'Container orchestration', 'Auto-scaling', 'Disaster recovery']
  },
  {
    icon: Users,
    title: 'Digital Workplace',
    description: 'Modern workplace solutions for enhanced productivity',
    features: ['Collaboration tools', 'Mobile solutions', 'Workflow automation', 'Employee experience']
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description: 'Advanced analytics and reporting for data-driven decisions',
    features: ['Executive dashboards', 'Predictive analytics', 'Custom reporting', 'Data visualization']
  }
];

const industries = [
  {
    name: 'Financial Services',
    description: 'Banking, insurance, and fintech solutions',
    challenges: ['Regulatory compliance', 'Data security', 'Real-time processing'],
    icon: '🏦'
  },
  {
    name: 'Healthcare',
    description: 'Healthcare IT and patient management systems',
    challenges: ['HIPAA compliance', 'Interoperability', 'Data privacy'],
    icon: '🏥'
  },
  {
    name: 'Manufacturing',
    description: 'Industrial IoT and supply chain optimization',
    challenges: ['Process automation', 'Quality control', 'Supply chain visibility'],
    icon: '🏭'
  },
  {
    name: 'Retail & E-commerce',
    description: 'Omnichannel retail and e-commerce platforms',
    challenges: ['Customer experience', 'Inventory management', 'Scalability'],
    icon: '🛒'
  },
  {
    name: 'Government',
    description: 'Public sector digital transformation',
    challenges: ['Citizen services', 'Security compliance', 'Legacy modernization'],
    icon: '🏛️'
  },
  {
    name: 'Education',
    description: 'Educational technology and learning management',
    challenges: ['Student data privacy', 'Remote learning', 'Assessment systems'],
    icon: '🎓'
  }
];

const pricingTiers = [
  {
    name: 'Discovery',
    price: '$25,000',
    period: '/project',
    description: 'Enterprise assessment and strategy',
    features: [
      'Current state analysis',
      'Technology audit',
      'Gap analysis',
      'Strategic roadmap',
      'ROI projections'
    ],
    duration: '4-6 weeks'
  },
  {
    name: 'Implementation',
    price: '$150,000',
    period: '/project',
    description: 'Full enterprise solution deployment',
    features: [
      'Solution architecture',
      'System integration',
      'Data migration',
      'Security implementation',
      'User training',
      'Go-live support'
    ],
    duration: '6-12 months',
    popular: true
  },
  {
    name: 'Management',
    price: '$50,000',
    period: '/month',
    description: 'Ongoing enterprise support and optimization',
    features: [
      '24/7 monitoring',
      'Performance optimization',
      'Security updates',
      'Feature enhancements',
      'Dedicated support team',
      'Monthly reporting'
    ],
    duration: 'Ongoing'
  }
];

const caseStudies = [
  {
    company: 'Global Financial Corp',
    industry: 'Financial Services',
    challenge: 'Legacy system modernization and regulatory compliance',
    solution: 'Complete digital transformation with microservices architecture',
    result: '40% cost reduction, 99.9% uptime, full compliance'
  },
  {
    company: 'National Healthcare System',
    industry: 'Healthcare',
    challenge: 'Patient data integration across multiple systems',
    solution: 'Unified data platform with real-time analytics',
    result: '60% faster patient processing, improved care quality'
  }
];

export default function EnterpriseSolutionsPage() {
  return (
    <MainLayout
      title="Enterprise Solutions - Zion Tech Group"
      description="Comprehensive enterprise solutions for large organizations. Digital transformation, architecture, security, and management services for enterprise-scale operations."
      keywords="enterprise solutions, digital transformation, enterprise architecture, enterprise security, business intelligence, large scale"
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
                Enterprise Solutions That{' '}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Scale Your Business
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive enterprise solutions for large organizations. Digital transformation, 
                architecture, security, and management services designed for enterprise-scale operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Schedule Consultation
                </Link>
                <Link href="#solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Enterprise Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide end-to-end enterprise solutions that address the complex needs 
                of large organizations across all industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-purple-600 mb-4">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {solution.description}
                    </p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
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

        {/* Industries Section */}
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
                Industry Expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We have deep experience across multiple industries, understanding the unique 
                challenges and requirements of each sector.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Challenges:</h4>
                    <ul className="space-y-1">
                      {industry.challenges.map((challenge, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <ArrowRight className="w-3 h-3 text-purple-500 mr-2" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Enterprise Pricing
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Customized pricing based on your organization's size, requirements, and complexity.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  className={`relative bg-white p-8 rounded-lg shadow-lg ${
                    tier.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-purple-600 mb-2">
                      {tier.price}
                      <span className="text-lg text-gray-500">{tier.period}</span>
                    </div>
                    <p className="text-gray-600 mb-2">{tier.description}</p>
                    <p className="text-sm text-gray-500">Duration: {tier.duration}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:shadow-lg'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Quote
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
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
                Enterprise Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See how we've helped large organizations transform their operations with our enterprise solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-8 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{study.company}</h3>
                    <p className="text-purple-600 font-semibold">{study.industry}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Result:</h4>
                      <p className="text-green-600 font-semibold">{study.result}</p>
                    </div>
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Schedule a consultation with our enterprise experts to discuss your organization's needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-center sm:text-left">
                  <p className="text-purple-100 mb-1">📞 <strong>Call:</strong> +1 302 464 0950</p>
                  <p className="text-purple-100">📧 <strong>Email:</strong> kleber@ziontechgroup.com</p>
                </div>
                <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}