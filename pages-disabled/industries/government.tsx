import * as React from 'react'
import Link from 'next/link'
import {
  Building, 
  Shield, 
  Users, 
  CheckCircle,
  ArrowRight,
  Globe,
  BarChart3,
  FileText,
  Lock,
  Database,
  Phone,
  Mail
} from 'lucide-react'
import Layout from '../../components/Layout'

const services = [
  {
    title: 'Citizen Service Portals',
    description: 'Comprehensive digital platforms for citizen-government interaction and service delivery.',
    icon: Globe,
    features: [
      'Online service applications',
      'Document management',
      'Payment processing',
      'Status tracking'
    ]
  },
  {
    title: 'Data Analytics & Reporting',
    description: 'Advanced analytics solutions for government data analysis and public reporting.',
    icon: BarChart3,
    features: [
      'Real-time dashboards',
      'Predictive analytics',
      'Performance metrics',
      'Public data visualization'
    ]
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Robust security measures to protect government systems and citizen data.',
    icon: Shield,
    features: [
      'Threat detection',
      'Access control',
      'Data encryption',
      'Compliance monitoring'
    ]
  },
  {
    title: 'Digital Transformation',
    description: 'Modernize government operations with cloud-based solutions and automation.',
    icon: Building,
    features: [
      'Cloud migration',
      'Process automation',
      'Legacy system integration',
      'Mobile accessibility'
    ]
  }
];

const benefits = [
  {
    title: 'Enhanced Citizen Services',
    description: 'Improve citizen satisfaction with faster, more accessible government services.',
    icon: Users
  },
  {
    title: 'Operational Efficiency',
    description: 'Streamline government operations and reduce administrative costs.',
    icon: BarChart3
  },
  {
    title: 'Data Security',
    description: 'Protect sensitive government and citizen data with enterprise-grade security.',
    icon: Lock
  },
  {
    title: 'Transparency',
    description: 'Increase government transparency and accountability through better data management.',
    icon: FileText
  }
];

export default function GovernmentPage() {
  return (
    <Layout
      title="Government Technology Solutions - Zion Tech Group"
      description="Transform government operations with secure, efficient technology solutions including citizen portals, data analytics, cybersecurity, and digital transformation."
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Government Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Transform government operations with secure, efficient technology solutions designed for public sector needs
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Government Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We provide comprehensive technology solutions for government agencies, 
                  from local municipalities to federal departments and public institutions.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <service.icon className="w-8 h-8 text-blue-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-xl p-8 mb-16"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Why Choose Our Government Solutions?
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <benefit.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Ready to Transform Government Services?
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our technology solutions can enhance your government agency's capabilities and improve citizen services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/it-services"
                    className="bg-white text-blue-600 px-8 py-4 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}