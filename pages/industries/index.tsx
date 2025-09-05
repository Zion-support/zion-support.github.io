import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { 
  Heart, 
  DollarSign, 
  Settings, 
  ShoppingCart, 
  BookOpen, 
  Building, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Shield, 
  Cloud, 
  Brain,
  Factory,
  Truck,
  Home,
  GraduationCap,
  Briefcase,
  Globe
} from 'lucide-react';

const IndustriesPage = () => {
  const industries = [
    {
      id: 'healthcare',
      name: 'Healthcare',
      description: 'Transform patient care with AI-powered diagnostics, telemedicine platforms, and advanced data analytics.',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      services: [
        'AI-Powered Medical Diagnostics',
        'Telemedicine Platforms',
        'Patient Data Analytics',
        'Healthcare IoT Solutions',
        'Electronic Health Records',
        'Medical Imaging AI'
      ],
      benefits: [
        'Improved patient outcomes',
        'Reduced operational costs',
        'Enhanced diagnostic accuracy',
        'Streamlined workflows'
      ],
      caseStudy: {
        title: 'MedTech Solutions Inc.',
        result: 'Reduced diagnostic time by 85%',
        link: '/case-studies#healthcare'
      }
    },
    {
      id: 'financial-services',
      name: 'Financial Services',
      description: 'Secure, scalable solutions for banking, fintech, and financial institutions with advanced AI and blockchain.',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      services: [
        'AI Trading Systems',
        'Fraud Detection',
        'Risk Assessment',
        'Blockchain Solutions',
        'Payment Processing',
        'Regulatory Compliance'
      ],
      benefits: [
        'Enhanced security',
        'Improved risk management',
        'Automated compliance',
        'Better customer experience'
      ],
      caseStudy: {
        title: 'Global Finance Corp',
        result: 'Processed 300% more applications',
        link: '/case-studies#fintech'
      }
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      description: 'Smart manufacturing solutions with IoT, predictive maintenance, and AI-driven optimization.',
      icon: Factory,
      color: 'from-blue-500 to-cyan-500',
      services: [
        'IoT Integration',
        'Predictive Maintenance',
        'Quality Control AI',
        'Supply Chain Optimization',
        'Smart Factory Solutions',
        'Production Analytics'
      ],
      benefits: [
        'Reduced downtime',
        'Improved efficiency',
        'Cost optimization',
        'Quality enhancement'
      ],
      caseStudy: {
        title: 'Industrial Dynamics Ltd',
        result: 'Reduced downtime by 65%',
        link: '/case-studies#manufacturing'
      }
    },
    {
      id: 'retail-ecommerce',
      name: 'Retail & E-commerce',
      description: 'Personalized shopping experiences with AI recommendations, inventory management, and customer analytics.',
      icon: ShoppingCart,
      color: 'from-purple-500 to-indigo-500',
      services: [
        'AI Recommendation Engines',
        'Inventory Management',
        'Customer Analytics',
        'Personalized Marketing',
        'Supply Chain Optimization',
        'E-commerce Platforms'
      ],
      benefits: [
        'Increased sales',
        'Better customer engagement',
        'Optimized inventory',
        'Personalized experiences'
      ],
      caseStudy: {
        title: 'Fashion Forward Retail',
        result: 'Increased sales by 35%',
        link: '/case-studies#retail'
      }
    },
    {
      id: 'logistics-transportation',
      name: 'Logistics & Transportation',
      description: 'Optimize logistics operations with AI-powered route planning, fleet management, and supply chain analytics.',
      icon: Truck,
      color: 'from-orange-500 to-yellow-500',
      services: [
        'Route Optimization',
        'Fleet Management',
        'Supply Chain Analytics',
        'Real-time Tracking',
        'Demand Forecasting',
        'Warehouse Automation'
      ],
      benefits: [
        'Reduced transportation costs',
        'Improved delivery times',
        'Better resource utilization',
        'Enhanced visibility'
      ],
      caseStudy: {
        title: 'Global Logistics Network',
        result: 'Reduced costs by 30%',
        link: '/case-studies#logistics'
      }
    },
    {
      id: 'education',
      name: 'Education',
      description: 'Transform learning with AI-powered educational platforms, personalized learning, and virtual classrooms.',
      icon: GraduationCap,
      color: 'from-indigo-500 to-purple-500',
      services: [
        'AI Tutoring Systems',
        'Learning Management Platforms',
        'Personalized Learning',
        'Virtual Classrooms',
        'Student Analytics',
        'Content Generation'
      ],
      benefits: [
        'Improved learning outcomes',
        'Personalized education',
        'Enhanced engagement',
        'Scalable solutions'
      ],
      caseStudy: {
        title: 'EduTech University',
        result: 'Improved engagement by 70%',
        link: '/case-studies#education'
      }
    },
    {
      id: 'real-estate',
      name: 'Real Estate',
      description: 'Modernize real estate with AI-powered property valuation, virtual tours, and market analytics.',
      icon: Home,
      color: 'from-teal-500 to-green-500',
      services: [
        'Property Valuation AI',
        'Virtual Property Tours',
        'Market Analytics',
        'Property Management Systems',
        'Lead Generation',
        'Investment Analysis'
      ],
      benefits: [
        'Accurate valuations',
        'Better market insights',
        'Improved lead quality',
        'Streamlined operations'
      ],
      caseStudy: {
        title: 'Prime Real Estate Group',
        result: 'Increased leads by 50%',
        link: '/case-studies#real-estate'
      }
    },
    {
      id: 'government',
      name: 'Government',
      description: 'Enhance public services with AI-powered citizen engagement, data analytics, and smart city solutions.',
      icon: Building,
      color: 'from-gray-500 to-slate-500',
      services: [
        'Citizen Services AI',
        'Smart City Solutions',
        'Data Analytics',
        'Public Safety Systems',
        'Digital Government',
        'Resource Optimization'
      ],
      benefits: [
        'Improved citizen services',
        'Better resource allocation',
        'Enhanced transparency',
        'Cost efficiency'
      ],
      caseStudy: {
        title: 'Smart City Initiative',
        result: 'Improved efficiency by 35%',
        link: '/case-studies#government'
      }
    }
  ];

  const stats = [
    { number: '50+', label: 'Industries Served' },
    { number: '200+', label: 'Successful Projects' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <Layout 
      title="Industries We Serve - Zion Tech Group" 
      description="Expert technology solutions for healthcare, finance, manufacturing, retail, and more industries."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Industries We Serve
                </h1>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                  We deliver cutting-edge technology solutions across diverse industries, 
                  helping businesses transform and thrive in the digital age.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Industry Expertise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Deep industry knowledge and proven solutions across multiple sectors.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${industry.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${industry.color} rounded-lg flex items-center justify-center mr-4`}>
                        <industry.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{industry.name}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{industry.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Services:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {industry.services.slice(0, 3).map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-center">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {industry.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center">
                            <CheckCircle className="h-3 w-3 text-blue-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      <p className="text-sm text-gray-600 mb-1">
                        <strong>Success Story:</strong> {industry.caseStudy.title}
                      </p>
                      <p className="text-sm text-blue-600 font-medium">
                        {industry.caseStudy.result}
                      </p>
                    </div>
                    
                    <Link 
                      href={`/industries/${industry.id}`}
                      className="inline-flex items-center w-full justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Industry?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our industry-specific solutions can help your business 
                achieve its goals and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/case-studies" 
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IndustriesPage;