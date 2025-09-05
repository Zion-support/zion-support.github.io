import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Heart, 
  Building, 
  ShoppingCart, 
  GraduationCap, 
  Car, 
  Users, 
  Globe, 
  BarChart3, 
  Brain, 
  Network,
  Shield,
  Zap,
  Database,
  Settings
} from 'lucide-react';

const industries = [
  {
    title: 'Healthcare',
    icon: Heart,
    description: 'AI-powered diagnostics, medical imaging, drug discovery, and patient care solutions.',
    color: 'from-red-500 to-pink-500',
    services: [
      'AI Medical Imaging Analysis',
      'Drug Discovery Platform',
      'Patient Data Analytics',
      'Telemedicine Solutions',
      'Clinical Decision Support',
      'Healthcare IoT Management'
    ]
  },
  {
    title: 'Financial Services',
    icon: BarChart3,
    description: 'Advanced fintech solutions including fraud detection, risk assessment, and automated trading.',
    color: 'from-green-500 to-emerald-500',
    services: [
      'Fraud Detection Systems',
      'Risk Assessment Tools',
      'Algorithmic Trading',
      'Credit Scoring Models',
      'Regulatory Compliance',
      'Digital Banking Solutions'
    ]
  },
  {
    title: 'E-commerce & Retail',
    icon: ShoppingCart,
    description: 'Personalized shopping experiences, inventory optimization, and customer analytics.',
    color: 'from-blue-500 to-cyan-500',
    services: [
      'Personalized Recommendations',
      'Inventory Optimization',
      'Customer Analytics',
      'Price Optimization',
      'Supply Chain Management',
      'Omnichannel Solutions'
    ]
  },
  {
    title: 'Education',
    icon: GraduationCap,
    description: 'AI-powered learning platforms, personalized education, and student analytics.',
    color: 'from-purple-500 to-indigo-500',
    services: [
      'Personalized Learning',
      'Student Analytics',
      'Automated Grading',
      'Virtual Classrooms',
      'Learning Management Systems',
      'Educational Content Generation'
    ]
  },
  {
    title: 'Manufacturing',
    icon: Settings,
    description: 'Smart manufacturing solutions with predictive maintenance and quality control.',
    color: 'from-orange-500 to-red-500',
    services: [
      'Predictive Maintenance',
      'Quality Control Systems',
      'Supply Chain Optimization',
      'Robotic Process Automation',
      'Production Analytics',
      'IoT Integration'
    ]
  },
  {
    title: 'Transportation',
    icon: Car,
    description: 'Autonomous vehicles, route optimization, and fleet management solutions.',
    color: 'from-yellow-500 to-orange-500',
    services: [
      'Autonomous Vehicle Systems',
      'Route Optimization',
      'Fleet Management',
      'Traffic Analytics',
      'Predictive Maintenance',
      'Smart Transportation'
    ]
  },
  {
    title: 'Real Estate',
    icon: Building,
    description: 'Property valuation, market analysis, and smart building management.',
    color: 'from-teal-500 to-green-500',
    services: [
      'Property Valuation Models',
      'Market Analysis Tools',
      'Smart Building Management',
      'Investment Analytics',
      'Property Management Systems',
      'Virtual Property Tours'
    ]
  },
  {
    title: 'Government',
    icon: Globe,
    description: 'Digital government services, citizen analytics, and public safety solutions.',
    color: 'from-indigo-500 to-purple-500',
    services: [
      'Digital Government Services',
      'Citizen Analytics',
      'Public Safety Systems',
      'Resource Optimization',
      'Policy Analysis Tools',
      'Smart City Solutions'
    ]
  }
];

export default function IndustriesPage() {
  return (
    <Layout
      title="Industries We Serve - Zion Tech Group"
      description="We provide AI and technology solutions across multiple industries including healthcare, finance, e-commerce, education, and more. Industry-specific expertise and solutions."
      keywords="industries, healthcare AI, fintech, e-commerce, education technology, manufacturing, transportation, real estate, government"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Serve</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                We provide specialized AI and technology solutions across multiple industries, 
                helping organizations transform their operations and achieve their goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                  >
                    <div className={`bg-gradient-to-r ${industry.color} p-6 text-white`}>
                      <div className="flex items-center mb-4">
                        <IconComponent className="w-8 h-8 mr-3" />
                        <h3 className="text-2xl font-bold">{industry.title}</h3>
                      </div>
                      <p className="text-white text-opacity-90">{industry.description}</p>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Solutions:</h4>
                      <ul className="space-y-2">
                        {industry.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                            {service}
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

        {/* Industry Expertise */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Industry Expertise</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our team has deep industry knowledge and experience across multiple sectors. 
                  We understand the unique challenges and opportunities in each industry and 
                  tailor our solutions accordingly.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Deep Industry Knowledge</h3>
                    <p className="text-gray-600">Years of experience working across different industries</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-green-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Compliance & Security</h3>
                    <p className="text-gray-600">Understanding of industry regulations and security requirements</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
                    <p className="text-gray-600">Track record of successful implementations across industries</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Industry?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how our industry-specific solutions can help your organization 
                achieve its goals and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Industry Consultation
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}